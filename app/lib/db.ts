import mongoose from "mongoose";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDB;

export const getUserByEmail = async (email: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/users/email/${email}`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch User");
    }
    return response.json();
  } catch (error) {
    console.error(error);
  }
};

export const addUser = async (name: string, email: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/users/`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        residenceCountry: "",
        solanaAddress: "",
        birthCountry: "",
        description: "",
        instagram: "",
        tiktok: "",
        picture: "",
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to add user");
    }

    console.log("User added successfully");

    return response.json();
  } catch (error) {
    console.error(error);
  }
};

export const addProduct = async (
  userEmail: string,
  title: string,
  price: string,
  description: string,
  picture: string
) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/products/`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        userEmail,
        title,
        price,
        description,
        picture,
      }),
    });
    console.log("response", response);

    if (!response.ok) {
      throw new Error("Failed to add product");
    }

    console.log("Product added successfully");

    return response.json();
  } catch (error) {
    console.error(error);
  }
};
