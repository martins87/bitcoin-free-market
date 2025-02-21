import Container from "./components/ui/Container";
import Hero from "./components/Hero";
import Trending from "./components/Trending";
import { autos, electronics, trendingProducts } from "@/app/data/mock/products";

export default function Home() {
  return (
    <main>
      <Container className="flex flex-col gap-y-32">
        <Hero />
        <Trending title="Trending" listing={trendingProducts} />
        <Trending title="Trending in Electronics" listing={electronics} />
        <Trending title="Trending in Auto" listing={autos} />
      </Container>
    </main>
  );
}
