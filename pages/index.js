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
            <h3 class="text-xl md:text-xl tracking-tight mb-4 text-black dark:text-white">
              <div>
                I am a Senior Staff Software Engineer at <a href="https://cision.com"> Cision </a>, where I work on building large-scale Data and ML Platform.
              </div>
            </h3>
            <h2 class="text-left text-black dark:text-white">
              <div>
                Previously, I led the engineering team at <a href="https://factmata.com"> Factmata</a>, a ML startup fighting fake-news and misinformation where we got acquired by Cision.
                I was also part of the early team at <a href="https://arqamfc.com"> ArqamFC </a> (Acquired by) <a href="https://statsbomb.com"> Statsbomb </a> where we worked on building the most advanced sports analytics platform in the world.
              </div>
              <div>
                Before that, I worked at different startups and software firms in the MENA region, where I was mainly focused on scaling data systems.
              </div>
            </h2>
            <div>
              <div class="text-xl md:text-xl tracking-tight mb-4 text-black dark:text-white"> You can reach out to me anytime on <a href="https://twitter.com/_adhameh"> Twitter </a> or <a href="emailto:adham.ehab@hey.com"> Email </a> </div>
            </div>
          </div>
        </section>


      </div>
    </Container>
  );
}
