"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>I am a passionate UI/UX designer
      with over 2 years of experience creating engaging user experiences, backed
      by 1.5 years of QA testing. My background equips me with a user-focused
      perspective and a detail-oriented approach to design. I’ve worked in
      fast-paced corporate environments to deliver intuitive and impactful
      solutions that align with user needs and business goals.
      {/* <p className="mb-3">
        I am a UI/UX designer with over{" "}
        <span className="font-medium">2 years</span>, I of experience creating
        engaging user experiences, backed by 1.5 years of QA testing. My
        background equips me with a
        <span className="font-medium">user-focused perspective</span>. and a
        <span className="italic">detail-oriented approach to design</span> I’ve
        worked in fast-paced corporate environments. to deliver intuitive and
        impactful solutions that align with user needs and business goals . I
        use tools like
        <span className="font-medium">Figma, Adobe XD</span>. Which I am well
        versed at and helps me deliver stunnig user interfaces and user
        experience
        <span className="font-medium">full-time position</span> as a UI/UX
        designer.
      </p> */}
      <p>
        <span className="italic">When I'm not Designing</span>, I enjoy
        listening to music, watching movies, and playing with my dog. I also
        enjoy <span className="font-medium">learning new things</span>.
      </p>
    </motion.section>
  );
}
