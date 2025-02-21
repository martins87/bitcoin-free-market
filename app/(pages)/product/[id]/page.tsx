import Container from "@/app/components/ui/Container";
import ProductImages from "@/app/components/Product/ProductImages";
import ProductMainInfo from "@/app/components/Product/ProductMainInfo";
import ProductDetailsList from "@/app/components/Product/ProductDetailsList";
import { xbox } from "@/app/data/mock/products";

const Product = () => {
  return (
    <Container className="flex flex-col gap-y-20 mt-2 md:mt-20">
      <div className="w-full flex flex-col md:flex-row items-start gap-x-20 xl:gap-x-32">
        <ProductImages images={xbox.images} />
        <ProductMainInfo
          title={xbox.title}
          price={xbox.price}
          listingDate={xbox.listingDate}
        />
      </div>
      <div className="w-full flex flex-col gap-y-8">
        <ProductDetailsList title="Details" list={xbox.details} />
        <ProductDetailsList title="Features" list={xbox.features} />
      </div>
    </Container>
  );
};

export default Product;
