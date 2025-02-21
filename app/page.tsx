import Container from "./components/ui/Container";
import Hero from "./components/Hero";
import Trending from "./components/Trending";
import { autos, electronics, trendingProducts } from "@/app/data/mock/products";

export default function Home() {
  return (
    <main>
      <Container className="flex flex-col gap-y-32">
        <Hero />
        <Trending title="Mais populares" listing={trendingProducts} />
        <Trending title="Populares em Eletrônicos" listing={electronics} />
        <Trending title="Populares em Automóveis" listing={autos} />
      </Container>
    </main>
  );
}
