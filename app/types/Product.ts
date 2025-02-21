import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type Product = {
  userId: string,
  userName: string,
  avatar: StaticImport,
  productImg: StaticImport,
  productTitle: string,
  value: string,
}