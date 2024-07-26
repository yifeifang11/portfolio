import Display from "@/components/Display";
import Navbar from "@/components/Navbar";
import UrbanThumbnail from "@/public/urban-thumbnail.png";
import FriendsThumbnail from "@/public/friends-thumbnail.png";
import Temp from "@/public/temp.png";
import Temp2 from "@/public/temp2.png";
import Intro from "@/components/Intro";
import Resume from "@/components/Resume";

export default function Home() {
  return (
    <main className="">
      <div>
        <Navbar />

        <div className="grid grid-cols-3 px-6 gap-6 items-start">
          <div className="flex gap-6 flex-col">
            <Display
              thumbnail={UrbanThumbnail}
              backgroundColor="yellow"
              name="UrbanGate Capital Design"
              tags={["UX Research", "UI Design", "Full-Stack"]}
              link="/urban"
            />
            <Display
              thumbnail={FriendsThumbnail}
              backgroundColor="amber"
              name="Friends App"
              tags={["Full-Stack", "Mobile"]}
              link="/friends"
            />
          </div>
          <Display
            thumbnail={Temp}
            backgroundColor="bg-yellow-500"
            name="Neuro Omics Visual Analytics"
            tags={["UX Research", "UI Design", "Full-Stack"]}
            link="/nova"
          />
          <Display
            thumbnail={Temp2}
            backgroundColor="bg-yellow-500"
            name="Table Tennis App"
            tags={["UX Research", "UI Design", "Full-Stack", "Mobile"]}
            link="/table-tennis"
          />
        </div>

        <Intro />

        <Resume />

        <p
          className="font-poppins uppercase text-6xl mx-6 mt-40 mb-6 font-medium"
          id="contact"
        >
          Contact Me -{" "}
          <a
            href="mailto:yifei.fang@vanderbilt.edu"
            className="underline hover:text-gray-500 transition duration-300"
          >
            Yifei.Fang@Vanderbilt.Edu
          </a>
        </p>
      </div>
    </main>
  );
}
