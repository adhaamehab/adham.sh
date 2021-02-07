import Image from "next/image";

import Timeline from "../components/timeline";
import Container from "../components/container";

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Hi, I'm Adham 👋
        </h1>
        <h2 className="font-bold text-xl md:text-3xl tracking-tight mb-4 text-black dark:text-white">
          I'm a Software Engineer from Cairo, Egypt 🇪🇬
        </h2>

        <h2 className="prose text-gray-50 dark:text-gray-400 mb-16">
          <div>
            I'm currently working on building the smartest sports data analytics
            platform at Statsbomb.
          </div>
          <div>
            Before that I worked in a variety of roles between data science,
            natural language processing and software engineering. I'm
            particularly interested in the intersection of distributed systems,
            applied machine learning, product and software engineering.
          </div>
        </h2>
        <Timeline />
      </div>
    </Container>
  );
}
