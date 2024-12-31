import GridPattern from "@/app/_components/magicui/grid-pattern";
import { RainbowButton } from "@/app/_components/magicui/rainbow-button";
import TypingAnimation from "@/app/_components/magicui/typing-animation";
import { ChevronsDown } from "lucide-react";
import { Button } from "./_components/ui/button";
import ScrollProgress from "./_components/ui/scroll-progress";

const Home = () => {
  return (
    <main className="">
      <ScrollProgress className="bg-gradient-to-r from-background via-indigo-600 to-blue-600" />
      <section className="relative flex flex-col justify-center items-center px-4 py-6 h-[calc(100vh-3rem)]">
        <GridPattern
          className="[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] -z-50 h-[calc(100vh-3rem)]"
          height={100}
          y={-1}
          x={-1}
        />
        <TypingAnimation
          text="hi, i'am Wesley"
          className="bg-clip-text bg-gradient-to-b from-blue-charcoal-100 via-blue-charcoal-200 to-background text-lg text-start text-transparent tracking-tight"
        />
        <h1 className="z-20 bg-clip-text bg-gradient-to-br from-white to-blue-charcoal-900 max-w-md font-bold text-4xl text-center text-transparent md:text-5xl lg:text-7xl animate-rainbow pointer-events-none">
          FullStack Developer
        </h1>
        <div className="flex flex-col justify-center items-center gap-4">
          <RainbowButton className="mt-4">Ver meus projetos</RainbowButton>
          <Button variant={"outline"}>Fale comigo!</Button>
        </div>
        <ChevronsDown className="bottom-0 absolute text-blue-charcoal-500 animate-bounce" />
      </section>
      <section className="mt-24 px-4">
        <h2 className="bg-clip-text bg-gradient-to-b from-blue-charcoal-50 via-blue-charcoal-200 to-background font-semibold text-2xl text-start text-transparent tracking-tight">
          Sobre mim
        </h2>
        <p className="max-w-[456px] text-muted-foreground leading-relaxed tracking-tight">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          fugiat quod voluptatem maiores. Quaerat earum, placeat veritatis
          dolores consectetur culpa perspiciatis velit, laborum animi nulla
          necessitatibus, ullam consequuntur repellendus! Asperiores!
        </p>
      </section>
      <section className="mt-24 px-4">
        <h2 className="bg-clip-text bg-gradient-to-b from-blue-charcoal-50 via-blue-charcoal-200 to-background font-semibold text-2xl text-start text-transparent tracking-tight">
          Projetos
        </h2>
      </section>
    </main>
  );
};

export default Home;
