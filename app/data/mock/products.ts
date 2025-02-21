import Nick from "../../assets/images/mock/avatars/nick-szabo.jpg";
import Hal from "../../assets/images/mock/avatars/hal-finney.png";
import Adam from "../../assets/images/mock/avatars/adam-back.png";
import Laptop from "../../assets/images/mock/products/laptop.png";
import Motorcycle1 from "../../assets/images/mock/products/motorcycle-1.png";
import Car1 from "../../assets/images/mock/products/car.png";
import House from "../../assets/images/mock/products/house.png";
import Ipad from "../../assets/images/mock/products/ipad.png";
import Iphone from "../../assets/images/mock/products/iphone.png";
import XboxController1 from "../../assets/images/mock/products/xbox-controller-1.png";
import XboxController2 from "../../assets/images/mock/products/xbox-controller-2.png";
import XboxController3 from "../../assets/images/mock/products/xbox-controller-3.png";
import XboxController4 from "../../assets/images/mock/products/xbox-controller-4.png";
import Motorcycle2 from "../../assets/images/mock/products/motorcycle-2.png";
import Car2 from "../../assets/images/mock/products/car-mini-coupe.png";
import Car3 from "../../assets/images/mock/products/car-taxi.png";
import { Product } from "@/app/types/Product";

export const trendingProducts: Product[] = [
  {
    userId: "nszabo",
    userName: "Nick Szabo",
    avatar: Nick,
    productImg: Laptop,
    productTitle: "Nick's Laptop",
    value: "0.0051",
  },
  {
    userId: "hfinney",
    userName: "Hal Finney",
    avatar: Hal,
    productImg: Motorcycle1,
    productTitle: "Hal's motorbike",
    value: "0.084",
  },
  {
    userId: "aback",
    userName: "Adam Back",
    avatar: Adam,
    productImg: Car1,
    productTitle: "Adam's ride",
    value: "0.067",
  },
  {
    userId: "snakamoto",
    userName: "Satoshi Nakamoto",
    avatar: Nick,
    productImg: House,
    productTitle: "Naka's Mansion",
    value: "8.43",
  },
];

export const electronics: Product[] = [
  {
    userId: "nszabo",
    userName: "Nick Szabo",
    avatar: Nick,
    productImg: Laptop,
    productTitle: "Nick's Laptop",
    value: "0.0005",
  },
  {
    userId: "hfinney",
    userName: "Hal Finney",
    avatar: Hal,
    productImg: Ipad,
    productTitle: "Ipad Air",
    value: "0.0005",
  },
  {
    userId: "aback",
    userName: "Adam Back",
    avatar: Adam,
    productImg: Iphone,
    productTitle: "iPhone 16 Pro Max",
    value: "0.0005",
  },
  {
    userId: "snakamoto",
    userName: "Satoshi Nakamoto",
    avatar: Nick,
    productImg: XboxController1,
    productTitle: "Xbox Controller",
    value: "0.0005",
  },
];

export const autos: Product[] = [
  {
    userId: "nszabo",
    userName: "Nick Szabo",
    avatar: Nick,
    productImg: Motorcycle2,
    productTitle: "Motorcycle",
    value: "0.0005",
  },
  {
    userId: "hfinney",
    userName: "Hal Finney",
    avatar: Hal,
    productImg: Car2,
    productTitle: "Black Mini Coupe",
    value: "0.0005",
  },
  {
    userId: "aback",
    userName: "Adam Back",
    avatar: Adam,
    productImg: Car1,
    productTitle: "Adam's ride",
    value: "0.0005",
  },
  {
    userId: "snakamoto",
    userName: "Satoshi Nakamoto",
    avatar: Nick,
    productImg: Car3,
    productTitle: "Yellow Taxi",
    value: "0.0005",
  },
];

export const xbox = {
  id: "982cb238-61af-4e0b-a051-2ddb1d6eafbe", // https://www.uuidgenerator.net/version4
  title: "Xbox Controller",
  listingDate: "02/21/2025 at 15:30",
  price: "0.0017",
  images: [XboxController1, XboxController2, XboxController3, XboxController4],
  description:
    "Experience the modernized design of the Xbox Wireless Controller, featuring sculpted surfaces and refined geometry for enhanced gaming comfort. Stay on target with the textured trigger and hybrid directional buttons. Easily capture and share content with a dedicated Share button. Pair, play, and quickly switch between devices, including Xbox Series X|S, Xbox One, Windows PC, Android, and iOS*",
  details: [
    "Connect to Xbox consoles with Xbox Wireless. Connect wirelessly to Windows 10/11 PCs, tablets, iOS, and Android using Bluetooth.*",
    "Compatible with Xbox Series X, Xbox Series S, Xbox One, Windows 10/11, Android, and iOS.*",
    "AA batteries for up to 40 hours of battery life***",
    "Easily capture and share content like screenshots, recordings, and more with the new Share button.",
    "Textured triggers and buttons | Hybrid directional buttons | Button mapping | Bluetooth® technology",
    "Play wirelessly or use the included 9ft USB-C cable for a wired gaming experience",
  ],
  features: [
    "Model: Xbox Series",
    "Color: White",
    "Weight: 470g",
    "Brand: Microsoft",
    "Category: Electronics",
  ],
};
