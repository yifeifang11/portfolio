"use client";

import IntroStudy from "@/components/IntroStudy";
import NavbarStudy from "@/components/NavbarStudy";
import React, { useEffect, useState } from "react";
import Display1 from "@/public/urban1.png";
import Display2 from "@/public/urban2.png";
import Display3 from "@/public/urban3.png";
import Image, { StaticImageData } from "next/image";
import Lofty1 from "@/public/lofty.png";
import Lofty2 from "@/public/lofty2.png";
import { RxCross1 } from "react-icons/rx";
import UrbanFlow1 from "@/public/urbanflow1.png";
import UrbanMVP1 from "@/public/urbanmvp1.png";
import UrbanMVP2 from "@/public/urbanmvp2.png";
import UrbanMVP3 from "@/public/urbanmvp3.png";
import UrbanMVP4 from "@/public/urbanmvp4.png";
import Gallery from "@/components/Gallery";
import DLP from "@/public/dlp.png";
import Cauble from "@/public/cauble.png";
import UrbanLanding from "@/public/urbanlanding.png";
import UrbanFlow2 from "@/public/urbanflow2.png";
import UrbanFinal1 from "@/public/urbanfinal1.png";
import UrbanFinal2 from "@/public/urbanfinal2.png";
import UrbanFinal3 from "@/public/urbanfinal3.png";
import UrbanFinal4 from "@/public/urbanfinal4.png";
import UrbanFinal5 from "@/public/urbanfinal5.png";
import UrbanFinal6 from "@/public/urbanfinal6.png";
import UrbanFinal7 from "@/public/urbanfinal7.png";
import UrbanFinal8 from "@/public/urbanfinal8.png";
import UrbanFinal9 from "@/public/urbanfinal9.png";
import UrbanFinal10 from "@/public/urbanfinal10.png";
import UrbanFinal11 from "@/public/urbanfinal11.png";
import UrbanFinal12 from "@/public/urbanfinal12.png";

export default function Urban() {
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
        className="fixed top-0 left-0 h-2 bg-yellow-500 z-30"
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
        title="UrbanGate Capital Redesign & Blockchain Website"
        description="UrbanGate Capital, a private lending company, recognized the need for a digital transformation. They sought to support cryptocurrency-funded loans from investors. This case study explores the digital rebranding and the creation of a new tool for UrbanGate Capital, focusing on the design and development process, challenges faced, and the impact of the new platform."
        tags={["UX Research", "UI Design", "Full-Stack"]}
        tagColor="yellow"
      />

      <div className="md:mt-32 mt-16" id="top">
        <p className="font-poppins uppercase md:text-5xl text-3xl font-medium mx-6">
          Understanding UrbanGate's Investors
        </p>
        <div className="md:mx-80 mx-6 text-lg">
          <p className="font-redhat md:text-xl font-light mt-6">
            To understand the needs and pain points of UrbanGate’s CEO, Will,
            and their investors, I conducted formal interviews and engaged in
            casual conversations to discover some key insights:
          </p>
          <div className="mt-4 md:grid grid-cols-2 gap-6">
            <ul className="list-outside list-disc ml-6">
              <li className="font-redhat md:text-xl font-light">
                Will faces challenges in scaling and growing his business with
                his current model. He spends a significant amount of time
                contacting investors and handling paperwork and procedures.
              </li>
              <li className="font-redhat md:text-xl font-light">
                There is little traffic on UrbanGate’s website. Instead, most of
                the investors that Will finds are through personal connections.
              </li>
            </ul>
            <ul className="list-outside list-disc ml-6">
              <li className="font-redhat md:text-xl font-light">
                Investors struggle to decide whether to invest or not. This
                often leads them to play it safe and not invest.
              </li>
              <li className="font-redhat md:text-xl font-light">
                Besides the potential for profits, the most important factor in
                deciding whether to invest for investors is trust.
              </li>
            </ul>
          </div>
          <p className="font-redhat md:text-xl text-lg font-light mt-6">
            Will also revealed his long-term vision for UrbanGate. He is
            anticipating a Web3 future where transactions are made primarily
            with cryptocurrencies. Accommodating his vision and incorporating my
            findings, I defined the problem statement:
          </p>
          <p className="font-redhat md:text-xl text-lg font-light mt-6 bg-yellow-500">
            UrbanGate Capital’s business model is currently not scalable because
            it relies too much on manpower. UrbanGate also lacks a strong
            digital presence, which does not garner trust from potential
            investors. These factors are a problem because it is preventing
            UrbanGate’s growth as a company.
          </p>
        </div>
      </div>

      <div className="md:mt-32 mt-16">
        <p className="font-poppins uppercase md:text-5xl text-3xl font-medium mx-6">
          Scalability: Minimal Viable Product (MVP)
        </p>
        <div className="md:mx-80 mx-6">
          <p className="font-redhat md:text-xl text-lg font-light mt-6">
            We first decided to address UrbanGate’s scalability issues.
            Analyzing competitors who have successfully scaled in the private
            lending industry for properties, I discovered that Lofty.ai had both
            a scalable digital model and a compatible model with
            cryptocurrency-funded loans. Lofty.ai allows investors to invest in
            tokens for loans with money, and most of the investment process is
            handled automatically with software instead of manual work that
            humans must complete.
          </p>
        </div>
        <div className="md:grid grid-cols-2 gap-6 mx-6 my-10 flex flex-col">
          <Image
            src={Lofty1}
            alt=""
            onClick={() => {
              setOverlayVisible(true);
              setOverlayImage(Lofty1);
              setOverlayText(
                "Lofty.ai's marketplace page. Their layout and principles behind funding loans inspired the MVP design."
              );
            }}
            className="cursor-pointer hover:scale-[1.01] transition duration-300"
          ></Image>
          <Image
            src={Lofty2}
            alt=""
            onClick={() => {
              setOverlayVisible(true);
              setOverlayImage(Lofty2);
              setOverlayText(
                "Lofty.ai's property page. This page also served as inspiration for how the MVP website dispalyed individual properties."
              );
            }}
            className="cursor-pointer hover:scale-[1.01] transition duration-300"
          ></Image>
        </div>
        <p className="font-redhat md:text-xl text-lg font-light mt-6 md:mx-80 mx-6">
          Since we were building an MVP, I prioritized the most basic
          functionalities. Our primary goal was to make sure a loan could be
          funded completely, and I drew a flow diagram to understand the
          bottlenecks in the process so I could improve the user experience for
          both investor and admin in a future iteration described in a later
          section. Although the aesthetic design is just as important when it
          comes to building a brand and trust, I also decided to prioritize that
          after we built the MVP.
        </p>
        <div className="flex justify-center items-center my-10 md:mx-0 mx-6">
          <Image
            src={UrbanFlow1}
            alt=""
            className="md:max-w-[30%] cursor-pointer hover:scale-[1.01] transition duration-300"
            onClick={() => {
              setOverlayVisible(true);
              setOverlayImage(UrbanFlow1);
              setOverlayText(
                "Flow diagram of the loan funding process in the MVP. It currently requires admin approval and signature."
              );
            }}
          ></Image>
        </div>
        <p className="font-redhat md:text-xl text-lg font-light mt-6 md:mx-80 mx-6">
          I chose Next.js as the web framework because it supports necessary
          database functionality and can be deployed to the web quickly. To
          support cryptocurrency loans, we chose ConnectKit, which provides a
          library for user authentication with a digital wallet and transaction
          methods. Because signing and sending documents slows down the funding
          process, I also chose to use the DocuSign API to automate signing and
          sending.
        </p>
      </div>
      <Gallery
        images={[UrbanMVP1, UrbanMVP2, UrbanMVP3, UrbanMVP4]}
        texts={[
          "MVP admin dashboard page. The admin can view all properties and loans here.",
          "MVP create property page. The admin can create a new property here.",
          "MVP landing page. The investor can browse loans and choose which ones to invest in.",
          "MVP property page. The investor can check out more details about individual properties.",
        ]}
        setOverlayImage={setOverlayImage}
        setOverlayText={setOverlayText}
        setOverlayVisible={setOverlayVisible}
      />

      <div className="mt-32">
        <p className="font-poppins uppercase md:text-5xl text-3xl font-medium mx-6">
          Inspiring Trust: Redesigning UrbanGate's Digital Presence
        </p>
        <div className="md:mx-80 mx-6">
          <p className="font-redhat md:text-xl text-lg font-light mt-6">
            After building a functional MVP, we decided to redesign both
            UrbanGate’s client-facing website and the MVP website.
          </p>
          <p className="font-redhat md:text-xl text-lg font-light mt-6">
            To gain a better understanding of what content should be on the
            client-facing website, I looked at local and larger competitors.
            Local competitors included neighboring private lending companies in
            Nashville such as the Cauble Group, which has a more established
            digital presence, as well as larger companies like DLP Capital.
          </p>
        </div>
        <div className="md:grid grid-cols-2 gap-6 mx-6 my-10 flex flex-col">
          <Image
            src={DLP}
            alt=""
            onClick={() => {
              setOverlayVisible(true);
              setOverlayImage(DLP);
              setOverlayText(
                "DLP Capital's landing page. They have a professional design with call to actions and many places to click and explore services."
              );
            }}
            className="cursor-pointer hover:scale-[1.01] transition duration-300"
          ></Image>
          <Image
            src={Cauble}
            alt=""
            onClick={() => {
              setOverlayVisible(true);
              setOverlayImage(Cauble);
              setOverlayText(
                "Cauble Group's landing page. They have a simple landing page with a clear call to action."
              );
            }}
            className="cursor-pointer hover:scale-[1.01] transition duration-300"
          ></Image>
        </div>
        <div className="md:mx-80 mx-6">
          <p className="font-redhat md:text-xl text-lg font-light mt-6">
            All the successful competitors shared many features, which I have
            included in the brand redesign:
          </p>
          <ul className="list-outside list-disc text-lg ml-6 mt-6">
            <li className="font-redhat md:text-xl font-light">
              Bold call to actions (buttons, actionable headings)
            </li>
            <li className="font-redhat md:text-xl font-light">
              Methods of building trust (testimonials, mentions in the news)
            </li>
          </ul>
          <ul className="list-outside text-lg list-disc ml-6">
            <li className="font-redhat md:text-xl font-light">
              Information describing the company’s methods and impact
            </li>
            <li className="font-redhat md:text-xl font-light">
              Methods of registering with the company (forms, email lists)
            </li>
          </ul>
          <p className="font-redhat md:text-xl text-lg font-light mt-6">
            They also had a distinct design that signals to investors and
            borrowers that they are professional and trustworthy. Will suggested
            that UrbanGate have a dark theme instead of a traditional light
            theme, which gives a modern crypto feeling to UrbanGate’s digital
            presence.
          </p>
        </div>
        <div className="md:mx-80 mx-6 my-10">
          <Image
            src={UrbanLanding}
            alt=""
            onClick={() => {
              setOverlayVisible(true);
              setOverlayImage(UrbanLanding);
              setOverlayText(
                "Final design for landing page of client-facing website. It incorporates a dark theme with a simple design and a call to action."
              );
            }}
            className="cursor-pointer hover:scale-[1.01] transition duration-300"
          ></Image>
        </div>
      </div>

      <div className="md:mt-32 mt-16">
        <p className="font-poppins uppercase md:text-5xl text-3xl font-medium mx-6">
          Streamlining the Investment Process
        </p>
        <div className="md:mx-80 mx-6">
          <p className="font-redhat md:text-xl text-lg font-light mt-6">
            I redesigned the loan funding website to match the client-facing
            website. In addition, the investment process was not efficient and
            still involved a lot of back and forth. To improve the user
            experience of investing, I streamlined the investment process and
            added some useful features for both admin and investor.
          </p>
          <p className="font-redhat md:text-xl text-lg font-light mt-6">
            Streamlining the investment process required a strong technical
            understanding of how DocuSign worked. Before, the investor had to
            wait for UrbanGate to sign the DocuSign, then approve the loan in
            the admin dashboard before the investor could hit “Invest.” By using
            DocuSign Connect, a message can be sent to the server, which
            automatically approves the loan, thereby removing the need for admin
            signature and approval.
          </p>
        </div>
        <div className="flex justify-center items-center my-10 mx-6 md:mx-0">
          <Image
            src={UrbanFlow2}
            alt=""
            className="md:max-w-[30%] cursor-pointer hover:scale-[1.01] transition duration-300"
            onClick={() => {
              setOverlayVisible(true);
              setOverlayImage(UrbanFlow2);
              setOverlayText(
                "Flow diagram of the final loan funding website. Admin approval steps were removed, which streamlined the process and made the process much more efficient."
              );
            }}
          ></Image>
        </div>
        <div className="md:mx-80 mx-6">
          <p className="font-redhat md:text-xl text-lg font-light mt-6">
            Sign in with Google was added so potential investors could first
            view the loans without setting up a wallet. The admin dashboard was
            redesigned to be more compact and easily navigable to manage an
            increasing number of loans, properties, and payments. Finally, the
            investor can now view their payment history on each loan. All these
            features give the loan funding website a complete feel and make the
            investment process easier.
          </p>
        </div>
      </div>

      <div className="md:mt-32 mt-16" id="tldr">
        <p className="font-poppins uppercase md:text-5xl text-3xl font-medium mx-6">
          TL;DR
        </p>
        <div className="md:mx-80 mx-6">
          <p className="font-redhat md:text-xl text-lg font-light mt-6">
            The two main challenges faced by UrbanGate Capital were the lack of
            scalability in their current model and a weak digital presence. To
            address scalability, we built an MVP that allows investors to fund
            loans with cryptocurrency online, which automates many
            time-consuming processes. To address a weak digital presence, I
            redesigned the client-facing website and the loan-funding website to
            inspire trust. Below is the full digital redesign.
          </p>
        </div>
        <Gallery
          images={[
            UrbanFinal1,
            UrbanFinal2,
            UrbanFinal3,
            UrbanFinal4,
            UrbanFinal5,
            UrbanFinal6,
            UrbanFinal7,
            UrbanFinal8,
            UrbanFinal9,
            UrbanFinal10,
            UrbanFinal11,
            UrbanFinal12,
          ]}
          texts={[
            "Final design of landing page. It contains statistics and testimonials for trust, calls to actions, and displays of information for the user to explore.",
            "Final design of about page. It contains all basic information about what UrbanGate Capital does for new users.",
            "Final design of acquisitions page. All acquisitions, current and previous, are listed on this page for users to explore.",
            "Final design of individual acquisition page. There are not many details about acquisitons to display, and users are typically most interested in just seeing pictures of the property, so only images are displayed for a fast and simple viewing experience.",
            "Final design of borrow page. Users are directed here if they are looking to borrow a loan from UrbanGate. Borrowers are encouraged to borrow from UrbanGate with the displayed reasons and more information about loan types. In addition, there is a form that borrowers are directed to if they want to start borrowing.",
            "Final design of media page. It is a simple page that contains all the YouTube videos that UrbanGate produces if users want to learn more about UrbanGate through video.",
            "Final design of admin dashboard. The design was made more compact and simple to navigate. When there are more properties, the design is scalable and will not overwhelm the user with information.",
            "Final design of payment history page. Investors can now track their payment history on each property/loan with a simple table and statistics",
            "Final design of loan funding landing page. Investors can browse available loans.",
            "Final design of user dashboard. Investors can look at their current loans, inspect previous loans, and manage payments.",
            "Final design of individual property page. Investors can learn more about a property they are interested in. There are images, descriptions, an embedded video for more details, and a table of the returns.",
            "Final design of login page. Investors have to be approved before they can login to the investment portal.",
          ]}
          setOverlayImage={setOverlayImage}
          setOverlayText={setOverlayText}
          setOverlayVisible={setOverlayVisible}
        />
      </div>
      <p className="font-light uppercase text-2xl text-center mt-8 mb-10 hover:text-gray-500 transition duration-300">
        <a href="#intro">Back to Top</a>
      </p>
    </div>
  );
}
