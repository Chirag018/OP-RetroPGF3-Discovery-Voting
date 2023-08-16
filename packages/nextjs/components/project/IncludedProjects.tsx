import React from "react";
import Card from "./Card";

function IncludedProjects() {
  const dataProjects = [
    {
      id: 1,
      name: "List 1",
      user_avatar: "/assets/Img.png",
      username: "verycoolperson",
      likes: 12,
      projects_icon: 21,
      projects: 21,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...",
      tags: ["Category name", "category1", "category2"],
      opAmount: "36,000 OP",
    },
    {
      id: 2,
      name: "List 2",
      user_avatar: "/assets/Img.png",
      username: "anothercoolperson",
      likes: 8,
      projects_icon: 15,
      projects: 15,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...",
      tags: ["Category name", "category1", "category2"],
      opAmount: "36,000 OP",
    },
    {
      id: 3,
      name: "List 3",
      user_avatar: "/assets/Img.png",
      username: "user3",
      likes: 20,
      projects_icon: 5,
      projects: 5,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...",
      tags: ["Category name", "category3", "category4"],
      opAmount: "36,000 OP",
    },
    {
      id: 4,
      name: "List 4",
      user_avatar: "/assets/Img.png",
      username: "user4",
      likes: 5,
      projects_icon: 8,
      projects: 8,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...",
      tags: ["Category name", "category5", "category6"],
      opAmount: "36,000 OP",
    },
  ];
  return (
    <div>
      <h3 className="font-semibold bold text-lightBlack text-2xl leading-8 pt-8 pb-4">
        Included in the following lists
      </h3>
      <div className="border rounded-xl border-neutral p-8">
        {dataProjects.map((project, index) => (
          <div key={project.id}>
            <Card project={project} />
            {index !== dataProjects.length - 1 && <div className="border-t border-neutral py-2"></div>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default IncludedProjects;
