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
              I'm a Senior Site Reliability Engineer from Cairo, Egypt 🇪🇬
            </h2>
            <h2 class="text-left text-black dark:text-white">
              <div>I'm currently leading the infra team at <a href="https://factmata.com">Factmata</a>.</div>
              <div>
                Before that I was an early engineer at <a href="https://statsbomb.com">Statsbomb</a> the leading sports data company in the world.
              </div>
              <div>
                I also worked in a variety of roles. Mainly in the
                intersection of software engineering, data and machine learning.
                I'm particularly interested in distributed systems and
                everything around it. Including containers, cloud,
                observability, data and products.
                My resume is <a href="https://docs.google.com/document/d/1q_vLS6R58x29dR4K8pxeiOK1tf9TwlSFYStdB-E-aow/edit>here</a>
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
