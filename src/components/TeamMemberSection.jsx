"use client";

import Image from "next/image";

const teamMembers = [
  {
    name: "Mark Henry",
    role: "Owner",
    image: "/team.jpg",
  },
  {
    name: "Lucky Helen",
    role: "Chef",
    image: "/team.jpg",
  },
  {
    name: "Moon Henry",
    role: "Founder",
    image: "/team.jpg",
  },
  {
    name: "Tom Monrow",
    role: "Specialist",
    image: "/team.jpg",
  },
];

export default function TeamMemberSection() {
  return (
    <section className="relative bg-white">
      {/* Top Section */}
      <div className="bg-[#AD1519D9] py-20 lg:h-[460px] 
      text-center text-white relative">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: "url('/bg-image.jpg')" }}
        ></div>
        <div className="relative z-10 mt-8 max-w-[452px] mx-auto">
          <h2 className="md:flex hidden lg:text-[48px] md:text-[38px] text-[20px] text-white font-bold">
            Team Member
          </h2>
          <p className="text-white md:flex hidden lg:text-[16px] md:text-[12px] text-[10px] text-center font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
            pharetra dictum neque massa congue.
          </p>
          {/* <h2 className="text-4xl md:text-5xl font-bold mb-4">Team Member</h2>
          <p className="max-w-2xl mx-auto text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
            pharetra dictum neque massa congue.
          </p> */}
        </div>
      </div>

      {/* Team Cards */}
      <div
        className="max-w-7xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 
                    relative z-20 -mt-40"
      >
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden text-center pb-6"
          >
            <div className="relative w-full h-64">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mt-4">{member.name}</h3>
            <p className="text-gray-500">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
