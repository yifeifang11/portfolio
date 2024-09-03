"use client";

import IntroStudy from "@/components/IntroStudy";
import NavbarStudy from "@/components/NavbarStudy";
import React, { useEffect, useState } from "react";
import Display1 from "@/public/nova1.png";
import Display2 from "@/public/nova2.png";
import Display3 from "@/public/nova3.png";
import Image, { StaticImageData } from "next/image";
import ManhattanExample from "@/public/twasexample.png";
import HeatmapExample from "@/public/heatmapexample.png";
import { RxCross1 } from "react-icons/rx";
import Heuristics from "@/public/heuristics.png";
import Heuristics2 from "@/public/heuristicanalysis.png";
import Sketch1 from "@/public/novasketch1.jpeg";
import Sketch2 from "@/public/novasketch2.jpeg";
import Sketch3 from "@/public/novasketch3.jpeg";
import ManhattanPlot from "@/public/manhattanplot.png";
import GenesTable from "@/public/genestable.png";
import Heatmap from "@/public/heatmapnova.png";
import Compact from "@/public/novacompact.png";
import Gallery from "@/components/Gallery";
import NovaFinal1 from "@/public/novafinal1.png";
import NovaFinal2 from "@/public/novafinal2.png";

export default function Nova() {
  const [overlayVisible, setOverlayVisible] = useState<boolean>(false);
  const [overlayImage, setOverlayImage] = useState<null | StaticImageData>(
    null
  );
  const [overlayText, setOverlayText] = useState<string>("");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.scrollHeight - windowHeight;
      const scrollPercentage = (scrollTop / documentHeight) * 100;
      setScrollProgress(scrollPercentage);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div
        style={{ width: `100%` }}
        className="fixed top-0 left-0 h-2 bg-white z-20"
      />
      <div
        style={{ width: `${scrollProgress}%` }}
        className="fixed top-0 left-0 h-2 bg-lime-500 z-30"
      />

      <div
        className={`${
          overlayVisible ? "visible" : "invisible"
        } transition duration-500 md:visible hidden`}
      >
        <p
          className="fixed top-4 right-4 cursor-pointer text-3xl text-white z-50 font-extralight hover:scale-105 duration-300 hover:text-gray-200"
          onClick={() => setOverlayVisible(false)}
        >
          <RxCross1 />
        </p>

        <div className="fixed inset-0 bg-black opacity-80 z-30"></div>
        <div className="fixed flex items-center justify-center h-screen w-screen z-40 flex-col">
          {overlayImage ? (
            <div className="h-[80%] w-[80%] overflow-auto flex justify-center items-start">
              <Image src={overlayImage} alt="" className="object-contain" />
            </div>
          ) : (
            ""
          )}
          <p className="absolute font-redhat text-xl font-light text-white bottom-8 mx-20">
            {overlayText}
          </p>
        </div>
      </div>

      <NavbarStudy navs={["Jump To TL;DR"]} navLinks={["#tldr"]} />

      <IntroStudy
        image1={Display1}
        image2={Display2}
        image3={Display3}
        title="Neuro Omics Visual Analytics (NOVA)"
        description="Neuro Omics Visual Analytics (NOVA) is a data visualization tool developed to help neuroimaging and genetics researchers visualize and analyze their dataThis case study explores the design choices and user research behind the development of the tool."
        tags={["UX Research", "UI Design", "Full-Stack"]}
        tagColor="green"
      />

      <div className="md:mt-32 mt-16" id="top">
        <p className="font-poppins uppercase md:text-5xl text-3xl font-medium mx-6">
          Researcher Pain Points and User Types
        </p>
        <div className="md:mx-80 mx-6">
          <p className="font-redhat md:text-xl text-lg font-light mt-6">
            To understand the role that data visualization plays in neuroimaging
            and genetics research and the current pain points that researchers
            in this field face, I conducted interviews with current PhD students
            in my lab. I gathered several important insights:
          </p>
          <div className="mt-4 ">
            <ul className="list-outside text-lg list-disc ml-6">
              <li className="font-redhat md:text-xl font-light">
                Data visualization is important because it helps reserachers
                identify trends and make conclusions based on experimental data.
              </li>
              <li className="font-redhat md:text-xl font-light">
                Many researchers who do not code very often struggle to generate
                graphs. The specific nature of neuroimaging and genetics
                research means that these graphs are often more complex or
                unique in format and therefore are more difficult to code.
              </li>
            </ul>
          </div>
          <p className="font-redhat md:text-xl text-lg font-light mt-6">
            Also based on interviews and scouring through the current
            literature, I discovered that there is a lack of comprehensive data
            in the field. There is great promise for discovering a more concrete
            relationship between our genes and brains, but the lack of data is
            limiting discoveries. Therefore, the pain points addressed are
            twofold: individual researcher struggles with generating graphs and
            lack of data in the field as a whole.
          </p>
          <p className="font-redhat md:text-xl text-lg font-light mt-6">
            I sought to understand what types of researchers would potentially
            use a data visualization tool. There are several types of users I
            designed for, which have driven design choices and implementations:
          </p>
          <div className="mt-4 ">
            <ul className="list-outside text-lg list-disc ml-6">
              <li className="font-redhat md:text-xl font-light">
                <span className="font-semibold">Non-technical users</span> who
                are looking for an easy-to-use tool for visualizing data. This
                is the most important user I designed for based on insights from
                interviews.
              </li>
              <li className="font-redhat md:text-xl font-light">
                <span className="font-semibold">Discovery-driven users</span>{" "}
                who are trying to discover new trends and exploring with a
                variety of inputs. These users require plenty of customization.
              </li>
              <li className="font-redhat md:text-xl font-light">
                <span className="font-semibold">Hypothesis-testing users</span>{" "}
                who are testing specific hypotheses with specific inputs. These
                users also require plenty of customization and specificity in
                inputs.
              </li>
              <li className="font-redhat md:text-xl font-light">
                <span className="font-semibold">Gene-focused users</span> who
                are looking for the impact of specific genes or traits.
              </li>
              <li className="font-redhat md:text-xl font-light">
                <span className="font-semibold">Multi-omics users</span> who are
                seeking to integrate various omics data to understand complex
                biological interactions.
              </li>
            </ul>
          </div>
          <p className="font-redhat text-lg md:text-xl font-light mt-6 bg-lime-500">
            Researchers in genetics and neuroimaging tend to struggle with
            efficient and insightful data visualization because of their
            specialization in the field and lack of coding experience. There is
            also a lack of comprehensive data in the field. These factors are a
            problem because it creates bottlenecks in writing research papers
            and making meaningful discoveries.
          </p>
        </div>
      </div>

      <div className="mt-32">
        <p className="font-poppins uppercase md:text-5xl text-3xl font-medium mx-6">
          Inspiration and Competitive Analysis
        </p>
        <div className="md:mx-80 mx-6">
          <p className="font-redhat md:text-xl text-lg font-light mt-6">
            We decided that we wanted to develop an online tool that researchers
            could use to visualize and analyze their data. However, we were
            unclear about what types of graphs and visuals we should allow. I
            scanned through most available papers in the field with data visuals
            to find the most common visuals, which I found were manhattan plots
            and heatmaps.
          </p>
        </div>
        <div className="md:grid grid-cols-2 gap-6 mx-6 my-10 flex flex-col">
          <Image
            src={ManhattanExample}
            alt=""
            onClick={() => {
              setOverlayVisible(true);
              setOverlayImage(ManhattanExample);
              setOverlayText(
                "Example manhattan plot from a TWAS paper. Zhou, D., Jiang, Y., Zhong, X., Cox, N.J., Liu, C., and Gamazon, E.R. (2020). A unified framework for joint-tissue transcriptome-wide association and Mendelian randomization analysis. Nat Genet 52, 1239–1246. 10.1038/s41588-020-0706-2."
              );
            }}
            className="cursor-pointer hover:scale-[1.01] transition duration-300"
          ></Image>
          <Image
            src={HeatmapExample}
            alt=""
            onClick={() => {
              setOverlayVisible(true);
              setOverlayImage(HeatmapExample);
              setOverlayText(
                "Example heatmap from a GWAS paper. Zhao, B., Li, T., Smith, S.M., Xiong, D., Wang, X., Yang, Y., Luo, T., Zhu, Z., Shan, Y., Matoba, N., et al. (2022). Common variants contribute to intrinsic human brain functional networks. Nat Genet 54. 10.1038/s41588-022-01039-6."
              );
            }}
            className="cursor-pointer hover:scale-[1.01] transition duration-300"
          ></Image>
        </div>
        <p className="font-redhat md:text-xl text-lg font-light mt-6 md:mx-80 mx-6">
          I also looked into existing online tools that accomplished similar
          analyses. To see how useful they were in aiding researchers make
          discoveries, I developed a set of heuristics to determine the
          strengths and weaknesses of each tool. Most existing tools like TWAS
          hub and TWAS Atlas did not provide any strong or customizable data
          visualization features, which is what user interviews revealed was
          most important to researchers in terms of analyzing data. Only webTWAS
          provided a simple manhattan plot that lacked much interactivity.
        </p>
        <div className="md:grid grid-cols-3 gap-6 mx-6 my-10 items-center flex flex-col">
          <Image
            src={Heuristics}
            alt=""
            onClick={() => {
              setOverlayVisible(true);
              setOverlayImage(Heuristics);
              setOverlayText(
                "List of heuristics and their criteria to evaluate how effective existing tools were."
              );
            }}
            className="cursor-pointer hover:scale-[1.01] transition duration-300"
          ></Image>
          <Image
            src={Heuristics2}
            alt=""
            onClick={() => {
              setOverlayVisible(true);
              setOverlayImage(Heuristics2);
              setOverlayText(
                "Heuristic analysis of existing tools. webTWAS performed better than TWAS Hub and TWAS Atlas because users can perform their own TWAS on webTWAS. The other tools were simply databases."
              );
            }}
            className="cursor-pointer hover:scale-[1.01] transition duration-300 col-span-2"
          ></Image>
        </div>

        <p className="font-redhat md:text-xl text-lg font-light mt-6 md:mx-80 mx-6">
          Initial sketches of the website are shown below. I attempt to create a
          simple design that incorporates all the graphs and inputs that a
          researcher may need.
        </p>
      </div>
      <Gallery
        images={[Sketch1, Sketch2, Sketch3]}
        texts={[
          "Home and About pages sketch.",
          "Analysis and Error pages.",
          "User flow of uploading and analyzing data.",
        ]}
        setOverlayImage={setOverlayImage}
        setOverlayText={setOverlayText}
        setOverlayVisible={setOverlayVisible}
      />

      <div className="mt-32">
        <p className="font-poppins uppercase md:text-5xl text-3xl font-medium mx-6">
          Prototyping and Iterating
        </p>
        <div className="md:mx-80 mx-6">
          <p className="font-redhat md:text-xl text-lg font-light mt-6">
            The first goal was to build a manhattan plot. I decided to use
            Next.js as the web framework, and I used D3.js as the data
            visualization library. I chose D3.js because while it is one of the
            most customizable JavaScript libraries, which is necessary for more
            complex graphs like manhattan plots.
          </p>
          <p className="font-redhat md:text-xl text-lg font-light mt-6">
            Below is the first iteration of the tool. There is a manhattan plot
            with customizable inputs and advanced filters that can be updated
            quickly. In addition, there is a table that contains the list of all
            genes visualized, which allows researchers who are interested in
            specific genes to learn more about them.
          </p>
        </div>
        <div className="md:grid grid-cols-2 gap-6 mx-6 my-10 flex flex-col">
          <Image
            src={ManhattanPlot}
            alt=""
            onClick={() => {
              setOverlayVisible(true);
              setOverlayImage(ManhattanPlot);
              setOverlayText(
                "Manhattan plot displayed on NOVA. It has filters that change the display of the graph every time the user clicks update."
              );
            }}
            className="cursor-pointer hover:scale-[1.01] transition duration-300"
          ></Image>
          <Image
            src={GenesTable}
            alt=""
            onClick={() => {
              setOverlayVisible(true);
              setOverlayImage(GenesTable);
              setOverlayText(
                "Genes table dispalyed on NOVA. It contains all the genes that are found in the manhattan plot. Clicking on a row will display more information that a reseracher may find useful. In addition, clicking on a row will highlight the gene on the manhattan plot."
              );
            }}
            className="cursor-pointer hover:scale-[1.01] transition duration-300"
          ></Image>
        </div>
        <div className="md:mx-80 mx-6">
          <p className="font-redhat md:text-xl text-lg font-light mt-6">
            After, I implemented a second manhattan plot to accommodate a second
            dataset. This also allowed me to implement a heatmap for comparison
            across datasets for multi-omics users.
          </p>
        </div>
        <div className="md:mx-80 my-10 mx-6">
          <Image
            src={Heatmap}
            alt=""
            onClick={() => {
              setOverlayVisible(true);
              setOverlayImage(Heatmap);
              setOverlayText(
                "Heatmap displayed on NOVA. It shows the number of genes that cause both phenotypes from both datasets. Users can scroll and click on the square for more information."
              );
            }}
            className="cursor-pointer hover:scale-[1.01] transition duration-300"
          ></Image>
        </div>
        <div className="md:mx-80 mx-6">
          <p className="font-redhat md:text-xl text-lg font-light mt-6">
            To accommodate researchers who are simply looking for simple visuals
            and comparisons, I also implemented a compact view that displays
            only the manhattan plots. This helps researchers make quick visual
            comparisons across two datasets.
          </p>
        </div>
        <div className="md:mx-80 mx-6 my-10">
          <Image
            src={Compact}
            alt=""
            onClick={() => {
              setOverlayVisible(true);
              setOverlayImage(Compact);
              setOverlayText(
                "Compact view. When a user imports two datasets and wishes to compare them side by side more easily, they can switch to a compact view that hides extra details. This was one feature that was added after test users said they felt overwhelmed by the amount of data on screen."
              );
            }}
            className="cursor-pointer hover:scale-[1.01] transition duration-300"
          ></Image>
        </div>
      </div>

      <div className="md:mt-32 mt-16" id="tldr">
        <p className="font-poppins uppercase md:text-5xl text-3xl font-medium mx-6">
          TL;DR
        </p>
        <div className="md:mx-80 mx-6">
          <p className="font-redhat md:text-xl text-lg font-light mt-6">
            Researchers in the genetics and neuroimaging field tend to struggle
            with generating meaningful visuals to help them make discoveries and
            identify trends. To address this issue and fill the gaps in the
            current literature, I developed a data visualization tool that
            allows researchers to visualize their data with common graphs and
            compare results across datasets. There are customizable inputs and
            filters to accommodate users interested in diving deep into their
            data, and the tool is designed for non-technical researchers to use.
            Below is the latest iteration.
          </p>
        </div>
        <Gallery
          images={[NovaFinal1, NovaFinal2]}
          texts={[
            "Final design of compact view. It contains only the manhattan plots with their corresponding filters, and the heatmap for analyzing across datasets. This gives users a more general view of their data.",
            "Final design of expanded view. If researchers wish to learn more specifically about their data or specific genes within the data, they can look through the tables while comparing data with other graphs.",
          ]}
          setOverlayImage={setOverlayImage}
          setOverlayText={setOverlayText}
          setOverlayVisible={setOverlayVisible}
        />
      </div>
      <p className="font-light uppercase md:text-2xl text-lg text-center mt-8 mb-10 hover:text-gray-500 transition duration-300">
        <a href="#intro">Back to Top</a>
      </p>
    </div>
  );
}
