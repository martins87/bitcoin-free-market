import { NextRequest, NextResponse } from "next/server";

import connectMongoDB from "@/app/lib/db";
import Product from "../../models/product";

export async function POST(request: NextRequest) {
  const { userEmail, title, price, description, picture } =
    await request.json();
  await connectMongoDB();
  const newProduct = await Product.create({
    userEmail,
    title,
    price,
    description,
    picture,
  });
  return NextResponse.json({ newProduct }, { status: 201 });
}
