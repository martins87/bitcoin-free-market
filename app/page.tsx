import Hero from "./components/Hero";
import Container from "./components/ui/Container";

export default function Home() {
  return (
    <main>
      <Container className="flex flex-col gap-y-32">
        <Hero />
      </Container>
    </main>
  );
}
