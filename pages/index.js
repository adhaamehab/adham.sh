import Image from "next/image";

import Timeline from "../components/timeline";
import Container from "../components/container";

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <section class="text-gray-600 body-font">
          <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
            <h1 class="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
              Hi, I'm Adham 👋
            </h1>
            <h2 class="font-bold text-xl md:text-xl tracking-tight mb-4 text-black dark:text-white">
             <div>
              I am a Senior Staff Software Engineer at <a href="https://cision.com"> Cision </a>.
              <div>
            </h2>
            <h2 class="text-left text-black dark:text-white">
              <div>
                Before that, I was the Head of Engineering at <a href="https://factmata.com"> Factmata</a>, Where we got aquired by Cision.
              <div>
                I also worked at <a href="https://arqamfc.com"> Arqam </a> where we got acquired by <a href="https://statsbomb.com"> Statsbomb </a>. I 
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
