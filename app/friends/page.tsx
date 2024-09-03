"use client";
import NavbarStudy from "@/components/NavbarStudy";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Display1 from "@/public/friends-login-color.png";
import Display2 from "@/public/friends-home-color.png";
import Display3 from "@/public/friends-attendance-color.png";
import IntroStudy from "@/components/IntroStudy";
import SectionStudy1 from "@/components/SectionStudy1";
import BulletImage1 from "@/public/friends-attendance-gray.png";
import BulletImage2 from "@/public/friends-home-gray.png";
import BulletImage3 from "@/public/friends-friends-gray.png";
import BulletImage4 from "@/public/friends-messages-gray.png";
import SectionStudy2 from "@/components/SectionStudy2";
import ImageSection2 from "@/public/friendslife.png";
import SectionResults from "@/components/SectionResults";
import Final1 from "@/public/friends-final1.png";
import Final2 from "@/public/friends-final2.png";
import Final3 from "@/public/friends-final3.png";
import Final4 from "@/public/friends-final4.png";
import Final5 from "@/public/friends-final5.png";

export default function Home() {
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
        className="fixed top-0 left-0 h-2 bg-amber-500 z-30"
      />
      <NavbarStudy
        navs={["Features", "Reflection", "Results"]}
        navLinks={["#features", "#reflection", "#results"]}
      />
      <IntroStudy
        image1={Display1}
        image2={Display2}
        image3={Display3}
        title="Friends Life Community App"
        description="Friends Life Community is a local Nashville non-profit
              organization that provides day programs for adults with
              disabilities. Working on this project as part of Vanderbilt’s
              student developer group, ChangePlusPlus, was my first experience
              being part of a dedicated team of developers to make a real
              impact. We developed an attendance tracking app for Friends Life,
              and the process of software development inspired me to pursue UX
              and Product Management as a career."
        tags={["Full-Stack", "Mobile"]}
        tagColor="amber"
      />
      <SectionStudy1
        title="Features and Tech Stack"
        text1="Friends Life requested an app to be made to replace their current
              attendance tracking system. Before, they were using a platform
              made for schools and classroom management, which was not a good
              solution for attendance tracking, plus it cost them a lot of
              money. We sought to develop an app that met all their requirements
              to facilitate attendance tracking while also saving them money."
        bulletIntro="Caregivers can:"
        bullets={[
          "Track the attendance of Friends (adults with disabilities) by clicking on the attendance tab, which creates a record in the calendar that admins can access.",
          "Create posts that all users of the app can see.",
          "Keep track of which Friends they are responsible for and view the details and attendance records of those Friends.",
          "Send messages other caregivers and users for communication purposes.",
        ]}
        text2="The app was built with React Native and a javascript backend with Node.js. It is compatible on both iOS and Android."
        images={[BulletImage1, BulletImage2, BulletImage3, BulletImage4]}
        id="features"
      />
      <SectionStudy2
        title="Reflection"
        texts={[
          "As a software developer on the team, I had my first exposure to writing robust API endpoints and responsive frontend features based on a design. Further, I had my first experience working in a large team of software developers, which has given me insight into how products are built from a technical standpoint, and how stakeholder requirements are translated into actionable steps for software developers.",
          "However, my biggest takeaway from working with Friends Life has been understanding what I am most passionate about: designing user experiences. Understanding how developing software can improve the lives of helpers at Friends Life has encouraged me to learn more about what makes a product successful and impactful while also leading me to think about how our current design could be improved upon. Working on this project has also given me the technical expertise to pursue more advanced projects framed in a human-centered lens.",
        ]}
        image={ImageSection2}
        id="reflection"
      />
      <SectionResults images={[Final1, Final2, Final3, Final4, Final5]} />
    </div>
  );
}
