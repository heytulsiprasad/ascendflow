import Airtable from "airtable";
import { NextResponse } from "next/server";

// Configure Airtable
const apiKey = process.env.AIRTABLE_API_KEY;
const baseId = process.env.AIRTABLE_BASE_ID;

if (!apiKey || !baseId) {
  throw new Error("Missing Airtable credentials");
}

Airtable.configure({ apiKey: apiKey });

const base = Airtable.base(baseId);

export async function POST(request: Request) {
  try {
    const { firstName, lastName, email, phone, message } = await request.json();

    // Create a record in Airtable
    const records = await base("Table 1").create([
      {
        fields: {
          firstName,
          lastName,
          email,
          phone,
          about: message,
        },
      },
    ]);

    if (records && records.length > 0) {
      return NextResponse.json({
        success: true,
        message: "Contact created successfully",
      });
    } else {
      throw new Error("Failed to create record");
    }
  } catch (error: unknown) {
    console.error("Error submitting to Airtable:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Failed to submit form";
    const statusCode =
      error instanceof Error && "statusCode" in error ? error.statusCode : 500;
    return NextResponse.json(
      {
        success: false,
        error: errorMessage,
      },
      { status: statusCode as number }
    );
  }
}
