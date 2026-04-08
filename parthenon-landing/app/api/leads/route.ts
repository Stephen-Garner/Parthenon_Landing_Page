import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { z } from "zod";

const schema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional(),
  source: z.string().min(1),
});

const DATA_PATH = path.join(process.cwd(), "data", "leads.json");

async function readLeads(): Promise<object[]> {
  try {
    const content = await fs.readFile(DATA_PATH, "utf-8");
    return JSON.parse(content);
  } catch {
    return [];
  }
}

async function writeLeads(leads: object[]): Promise<void> {
  await fs.mkdir(path.dirname(DATA_PATH), { recursive: true });
  await fs.writeFile(DATA_PATH, JSON.stringify(leads, null, 2));
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = schema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid input", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const lead = {
      ...parsed.data,
      submittedAt: new Date().toISOString(),
      ip: req.headers.get("x-forwarded-for") ?? "unknown",
    };

    const leads = await readLeads();
    leads.push(lead);
    await writeLeads(leads);

    return NextResponse.json({ success: true }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function GET() {
  // Simple read endpoint for reviewing leads locally
  const leads = await readLeads();
  return NextResponse.json({ count: leads.length, leads });
}
