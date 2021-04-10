import Image from "next/image";

import Timeline from "../components/timeline";
import Container from "../components/container";

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <section class="text-gray-600 body-font">
          <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
            <img
              class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded-full"
              alt="us"
              src="/avatar.JPG"
            ></img>
            <h1 class="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
              Hi, I'm Adham 👋
            </h1>
            <h2 class="font-bold text-xl md:text-xl tracking-tight mb-4 text-black dark:text-white">
              I'm a Software Engineer from Cairo, Egypt 🇪🇬
            </h2>
            <h2 class="text-left text-black dark:text-white">
              <div>
                I'm currently working on building the smartest sports data
                analytics platform at Statsbomb.
              </div>
              <div>
                Before that I worked in a variety of roles between data science,
                natural language processing and software engineering. I'm
                particularly interested in the intersection of distributed
                systems, applied machine learning, product and software
                engineering.
              </div>
            </h2>
          </div>
        </section>
        <div></div>
        {/* <Timeline /> */}
      </div>
    </Container>
  );
}
