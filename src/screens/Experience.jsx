import React from "react";
import { Container } from "../components/main";
import { FaGraduationCap } from "react-icons/fa";

const Experience = () => {
  const eduExperience = [
    {
      title: "Bachelor of Science in Computer Science",
      school: "University of the Philippines",
      date: "August 2019 - May 2020",
      degree: "Academic Degree",
    },
    {
      title: "Bachelor of Science in Computer Science",
      school: "University of the Philippines",
      date: "August 2019 - May 2020",
      degree: "Academic Degree",
    },
    {
      title: "Bachelor of Science in Computer Science",
      school: "University of the Philippines",
      date: "August 2019 - May 2020",
      degree: "Academic Degree",
    },
  ];
  const workExperience = [
    {
      title: "Full Stack Developer",
      company: "Randevum",
      date: "January 2022 - Present",
    },
    {
      title: "Full Stack Developer",
      company: "Randevum",
      date: "January 2022 - Present",
    },
    {
      title: "Full Stack Developer",
      company: "Randevum",
      date: "January 2022 - Present",
    },
  ];
  return (
    <Container className="h-5/6" id="experience">
      <div className="w-full flex flex-col gap-16 h-5/6">
        <h1 className="font-extrabold text-3xl mx-36">Experience</h1>
        <div className="h-full">
          <div className="flex justify-center gap-20 h-full">
            <div className="w-1/3 bg-gray-100 h-full rounded-lg shadow-lg relative">
              <div className="h-full flex items-center px-10">
                <div className="w-1 h-5/6 bg-text rounded-lg" />
                <div className="h-5/6 flex flex-col gap-4">
                  {eduExperience.map((edu) => (
                    <div className="flex gap-4 items-center">
                      <div className="w-3 h-1 bg-text" />
                      <div>
                        <h1 className="font-semibold opacity-50 text-sm">
                          {edu.date}
                        </h1>
                        <h1 className="font-bold text-lg">{edu.degree}</h1>
                        <h1 className="font-medium">{edu.title}</h1>
                        <h1>{edu.school}</h1>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-1/3 bg-gray-100 h-full rounded-lg shadow-lg relative">
              <div className="h-full flex items-center px-10">
                <div className="w-1 h-5/6 bg-text rounded-lg" />
                <div className="h-5/6 flex flex-col gap-4">
                  {workExperience.map((work) => (
                    <div className="flex gap-4 items-center">
                      <div className="w-3 h-1 bg-text" />
                      <div>
                        <h1 className="font-semibold opacity-50 text-sm">
                          {work.date}
                        </h1>
                        <h1 className="font-bold text-lg">{work.title}</h1>
                        <h1>{work.company}</h1>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Experience;
