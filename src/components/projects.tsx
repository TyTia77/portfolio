import { useState } from "react";
import HoverAnimate from "./hoverAnimate";
import dragdropImg from "../assets/dragdrop.png";

interface Project {
  id: number;
  title: string;
  url: string;
  imageUrl: string;
  filename: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "desktop simulation",
    url: "https://tytia77.github.io/dragdrop/",
    imageUrl: dragdropImg,
    filename: "project-one",
  },
  {
    id: 2,
    title: "placeholder 2",
    url: "#",
    imageUrl: "",
    filename: "project-two",
  },
  {
    id: 3,
    title: "placeholder 3",
    url: "#",
    imageUrl: "",
    filename: "project-three",
  },
  {
    id: 4,
    title: "placeholder 4",
    url: "#",
    imageUrl: "",
    filename: "project-four",
  },
];

function ProjectCard({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <HoverAnimate animation="tada">
      <div
        className="relative h-[250px] w-[300px] sm:w-full rounded-md mx-auto sm:mx-0"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* macOS window dots */}
        <span className="absolute w-2.5 h-2.5 rounded-full top-1 left-[2px] bg-red-500 z-10" />
        <span className="absolute w-2.5 h-2.5 rounded-full top-1 left-[14px] bg-orange-400 z-10" />
        <span className="absolute w-2.5 h-2.5 rounded-full top-1 left-[26px] bg-green-500 z-10" />

        {/* Title bar */}
        <div className="w-full bg-[#E6E6E6] h-4.5 text-gray-500 text-sm px-3 py-1 rounded-t-md">
          {/* {project.filename} */}
        </div>

        {/* Card body */}
        <div className="w-full h-[calc(100%-28px)] border border-[#E6E6E6] border-t-0 overflow-hidden relative rounded-b-md">
          {/* Project image */}
          <div
            className="h-full w-full bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${project.imageUrl})` }}
          >
            <a
              href={project.url}
              className="text-gray-300 hover:text-white text-lg font-semibold no-underline transition-colors duration-200 [-webkit-font-smoothing:antialiased]"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* Hover overlay */}
              <div
                className={`absolute inset-0 bg-black/85 border border-[#E5E5E5] flex items-start justify-center transition-opacity duration-300 ${
                  hovered ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              >
                <h3 className="relative top-[15%] text-center">
                  <label className="cursor-pointer">{project.title}</label>
                </h3>
              </div>
            </a>
          </div>
        </div>
      </div>
    </HoverAnimate>
  );
}

export default function ProjectGrid() {
  return (
    <section className="w-full mx-auto text-center mb-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-4 pt-16 pb-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
