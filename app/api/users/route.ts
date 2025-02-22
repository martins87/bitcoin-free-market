import { NextRequest, NextResponse } from "next/server";

import connectMongoDB from "@/app/lib/db";
import User from "../../models/user";

export async function POST(request: NextRequest) {
  const { name, email, picture } = await request.json();
  await connectMongoDB();
  await User.create({ name, email, picture });
  return NextResponse.json({ message: "User created" }, { status: 201 });
}
