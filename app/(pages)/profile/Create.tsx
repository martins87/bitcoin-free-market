"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Centered from "@/app/components/ui/Centered";
import fallback from "../../assets/images/fallback.jpg";
import Typography from "@/app/components/ui/Typography";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/app/components/Textarea";
import Button from "@/app/components/ui/Button";
import { addProduct } from "@/app/lib/db";

const CreatePage = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [sessionEmail, setSessionEmail] = useState<string>("");
  const [picture, setPicture] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  useEffect(() => {
    if (session) {
      // @ts-expect-error:next-line
      setSessionEmail(session.user?.email);
      console.log("user logged in:", session.user?.email);
    }
  }, [session]);

  const handleSave = async () => {
    try {
      // setLoading(true);
      const newProduct = await addProduct(
        sessionEmail,
        title,
        price,
        description,
        picture
      );
      // setLoading(false);
      console.log("New product from database:", newProduct);
    } catch (error) {
      console.error(error);
    } finally {
      router.push("/profile");
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];
    const reader = new FileReader();

    reader.onloadend = () => {
      console.log("reader.result", reader.result);
      setPicture(reader.result as string);
    };

    reader.readAsDataURL(file);
  };

  return (
    <Centered className="gap-y-4" direction="col">
      <Centered className="gap-0 mb-8" justify="around">
        <Image
          width={52}
          height={52}
          className="w-1/5 rounded-lg overflow-hidden"
          // src={picture || Ballerina}
          src={picture || fallback}
          alt="Profile img"
          priority
          unoptimized={typeof picture === "string"}
        />
        <Centered className="w-1/2">
          <Typography className="text-3xl" weight="700">
            Product
          </Typography>
        </Centered>
      </Centered>
      <input
        className="w-full tablet:w-3/5 mb-6"
        type="file"
        onChange={handleFileChange}
        // disabled={!isEditing}
      />
      <div className="w-full space-y-8">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Typography className="text-lg" weight="500" font="inter">
              Product title
            </Typography>
            <Input
              className="rounded-[9px]"
              placeholder="Enter product title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              // disabled={!isEditing}
            />
          </div>
          <div className="space-y-2">
            <Typography className="text-lg" weight="500" font="inter">
              Price
            </Typography>
            <Input
              className="rounded-[9px]"
              placeholder="e.g. 0.005"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              // disabled={!isEditing}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Typography className="text-lg" weight="500" font="inter">
            Description
          </Typography>
          <Textarea
            className="rounded-[9px] min-h-[120px]"
            placeholder="Enter product description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            // disabled={!isEditing}
          />
        </div>

        <div className="flex gap-4 pt-4">
          <Button
            label="Save"
            onClick={handleSave}
            // disabled={!isEditing}
            primary
          />
        </div>
      </div>
    </Centered>
  );
};

export default CreatePage;
