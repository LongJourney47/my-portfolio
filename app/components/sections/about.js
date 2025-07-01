"user client";
export default function About() {
  return (
    <section className="flex flex-col justify-between px-15 text-[#D9D9D9]/80 h-full text-xl m-">
      <p>
        I am an ambitious developer that is always eager to consume more
        knowledge concerning the intricacies of how things work too crafting
        worth while experiences that can assist in shaping the tech ecosystem.
        My favored work lies in the crossroads where frontend and backend
        development meet. Creating experiences that are aesthetically pleasing
        albeit built on a foundation of stability, usability, and performance.
      </p>
      <p>
        {" "}
        Former Fullstack Developer at{" "}
        <a className="text-[#F2F2F2]" href="https://codethedream.org/">
          Code the Dream
        </a>{" "}
        and Frontend Engineer at{" "}
        <a
          className="text-[#F2F2F2]"
          href="https://www.sas.com/en_us/home.html"
        >
          SAS
        </a>
        , I specialized in equal measure user experiences and data management. I
        contributed to the development and maintenance of UI components for SASs
        inhouse Nova components that powered enterprise dashboards. Whereas at
        CTD my contributions honed in on the architecture and management of the
        backend.
      </p>
      <p>
        {" "}
        In my off time, I tinker with my DIY home server to serve personal
        projects like ebooks & media. While also finding time to hike, read,
        travel, exercise.
      </p>
    </section>
  );
}
