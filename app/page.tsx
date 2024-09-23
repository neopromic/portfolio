import GridPattern from '@/components/magicui/grid-pattern'
import { RainbowButton } from '@/components/magicui/rainbow-button'
import TypingAnimation from '@/components/magicui/typing-animation'
import { ChevronsDown } from 'lucide-react'

const Home = () => {
  return (
    <main className="">
      <section className="relative flex h-[calc(100vh-3rem)] flex-col items-center justify-center px-4 py-6">
        <GridPattern
          className="-z-50 h-[calc(100vh-3rem)] [mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]"
          height={100}
          y={-1}
          x={-1}
        />
        <TypingAnimation
          text="hi, i'am Wesley"
          className="bg-gradient-to-b from-blue-charcoal-100 via-blue-charcoal-200 to-background bg-clip-text text-start text-lg tracking-tight text-transparent"
        />
        <h1 className="pointer-events-none z-20 max-w-md animate-rainbow bg-gradient-to-br from-white to-blue-charcoal-900 bg-clip-text text-center text-4xl font-bold text-transparent md:text-5xl lg:text-7xl">
          FullStack Developer
        </h1>
        <RainbowButton className="mt-4">Ver meus projetos</RainbowButton>
        <ChevronsDown className="absolute bottom-0 text-blue-charcoal-500" />
      </section>
      <section className="mt-24 px-4">
        <h2 className="bg-gradient-to-b from-blue-charcoal-50 via-blue-charcoal-200 to-background bg-clip-text text-start text-2xl font-semibold tracking-tight text-transparent">
          Sobre mim
        </h2>
        <p className="max-w-[456px] leading-relaxed tracking-tight text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          fugiat quod voluptatem maiores. Quaerat earum, placeat veritatis
          dolores consectetur culpa perspiciatis velit, laborum animi nulla
          necessitatibus, ullam consequuntur repellendus! Asperiores!
        </p>
      </section>
      <section className="mt-24 px-4">
        <h2 className="bg-gradient-to-b from-blue-charcoal-50 via-blue-charcoal-200 to-background bg-clip-text text-start text-2xl font-semibold tracking-tight text-transparent">
          Projetos
        </h2>
      </section>
    </main>
  )
}

export default Home
