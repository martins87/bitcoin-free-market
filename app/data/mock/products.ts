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
    productTitle: "Laptop do Nick",
    value: "0.0051",
  },
  {
    userId: "hfinney",
    userName: "Hal Finney",
    avatar: Hal,
    productImg: Motorcycle1,
    productTitle: "Motoca do Hal",
    value: "0.084",
  },
  {
    userId: "aback",
    userName: "Adam Back",
    avatar: Adam,
    productImg: Car1,
    productTitle: "Caranga do Adam",
    value: "0.067",
  },
  {
    userId: "snakamoto",
    userName: "Satoshi Nakamoto",
    avatar: Nick,
    productImg: House,
    productTitle: "Mansão do Naka",
    value: "8.43",
  },
];

export const electronics: Product[] = [
  {
    userId: "nszabo",
    userName: "Nick Szabo",
    avatar: Nick,
    productImg: Laptop,
    productTitle: "Laptop do Nick",
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
    productTitle: "Carango do Adam",
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
  title: "Controle Xbox",
  listingDate: "03/12/2024 às 15:30",
  price: "0.0017",
  images: [
    XboxController1,
    XboxController2,
    XboxController3,
    XboxController4,
  ],
  description: "Experimente o design modernizado do Controle sem Fio Xbox, com superfícies esculpidas e geometria refinada para melhorar o conforto durante os jogos. Permaneça no alvo com o gatilho texturizado e botões direcionais híbridos. Capture e compartilhe conteúdo de forma simples com um botão Share dedicado. Emparelhe, jogue e alterne rapidamente entre dispositivos, incluindo Xbox Series X|S, Xbox One,PC Windows, Android e iOS*",
  details: [
    "Conecte-se aos consoles Xbox com o Xbox sem Fio. Conecte-se sem fio a PCs Windows 10/11, tablets, iOS e Android usando Bluetooth.*",
    "Compatível com Xbox Series X, Xbox Series S, Xbox One, Windows 10/11, Android e iOS.*",
    "Pilhas AA para até 40 horas de duração***",
    "Capture e compartilhe com facilidade conteúdo como capturas de tela, gravações e mais com o novo botão Share.",
    "Gatilhos e botões texturizados | Botões direcionais híbridos | Mapeamento de botões | Tecnologia Bluetooth®",
    "Jogue sem fio ou use o cabo USB-C de 2,7m incluído para uma experiência de jogo com fio",
  ],
  features: [
    "Modelo: Xbox Series",
    "Cor: Branca",
    "Peso: 470g",
    "Marca: Microsoft",
    "Categoria: Eletrônicos",
  ]
}
