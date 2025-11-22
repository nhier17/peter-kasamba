"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Hammer, Church } from "lucide-react";
import SectionHeader from "./SectionHeader";

const projects = [
  {
    id: 1,
    title: "Church Construction – Mountain Village",
    description:
      "A permanent church building to replace the temporary grass structure used for worship. This project will provide a safe place for prayer, discipleship, and children’s ministry.",
    image: "/images/project-church.jpg",
    status: "In Progress",
    progress: 65,
  },
  {
    id: 2,
    title: "Bible Distribution Outreach",
    description:
      "Distributing Bibles in local languages to new believers in remote communities where access to Scripture is limited.",
    image: "/images/project-bibles.jpg",
    status: "Active",
    progress: 40,
  },
  {
    id: 3,
    title: "Clean Water Well Project",
    description:
      "Drilling wells in villages where women and children walk long distances to access unsafe water sources.",
    image: "/images/project-water.jpg",
    status: "Fundraising",
    progress: 25,
  },
];

export const Projects = () => {
  return (
 <section className="section-padding">
        <SectionHeader
          eyebrow="Completed Churches"
          title="Established places of worship"
        />
        <div  className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <article className="church-card card shadow-soft overflow-hidden">
            <div className="relative h-56 w-full">
              <Image
                src="/images/neno.JPG"
                alt="Bunju Baptist Church"
                fill
                className="object-cover img-soft"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-slate-900">Neno Baptist Church</h3>
              <p className="mt-2 text-slate-600">
                Neno Baptist Church stands as one of the earliest mission milestones, created to serve the growing Christian community with a place of worship, fellowship, and discipleship.
              </p>
            </div>
          </article>
          <article className="church-card card shadow-soft overflow-hidden">
            <div className="relative h-56 w-full">
              <Image
                src="/images/ndumo.JPG"
                alt="Bagamoyo Baptist Church"
                fill
                className="object-cover img-soft"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-slate-900">Ndumo Baptist Church (Interior Mission)</h3>
              <p className="mt-2 text-slate-600">
                Ndumo Baptist Church was built deep in the interior regions, bringing the Gospel to remote families and establishing a foundation for future mission outreach.
              </p>
            </div>
          </article>
        </div>
    </section>
  );
}
