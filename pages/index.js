import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Container from "../components/container";

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <section class="text-gray-600 body-font">
          <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
            <h1 class="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
              Hi, My name is Adham 👋
            </h1>
            <h2 class="text-left text-black dark:text-white">
              <div>
                I'm a Software Engineer currently Leading the SRE at{" "}
                <a href="https://factmata.com">Factmata</a>. A UK based start-up
                working on fighting misinformation and fake news
              </div>
              <div>
                I've been working for start-ups my whole career. Before joining
                Factmata, I was an early engineer at{" "}
                <a href="https://arqamfc.com">Arqam</a> which got merged with{" "}
                <a href="https://statsbomb.com">Statsbomb</a>which later became
                the leading sports data company in the world.
              </div>
              <div>
                I usually work on Distributed Systems, SRE, and MLOps. In
                addition to that I try to help other people/students to get into
                these topics
              </div>
              <div>
                <a href="https://github.com/adhaamehab">
                  <FontAwesomeIcon icon={["fab", "fa-github"]} />
                </a>
                <a href="https://twitter.com/_adhameh">
                  <FontAwesomeIcon icon={["fab", "fa-twitter"]} />
                </a>
                <a href="https://linkedin.com/in/adham-ehab">
                  <FontAwesomeIcon icon={["fab", "fa-linkedin-in"]} />
                </a>
                <a href="https://drive.google.com/file/d/176iZlGZM_rqYnSOTM2HjfaUXi-ly7hTB/view?usp=sharing">
                  <FontAwesomeIcon icon={["fas", "fa-file-alt"]} />
                </a>
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
