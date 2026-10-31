export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  experience: string;
  skills: string[];
}

export const teamData: TeamMember[] = [
  {
    id: 1,
    name: "Babilon Debbarma",
    role: "Co-Founder & Chief Executive Officer",
    image: "/team/babilon-debbarma.jpg",
    bio: "Driving Pixelrio Studio's overarching vision, executive growth strategy, and national brand partnerships to position Northeast India as a premier digital powerhouse.",
    experience: "Founding Member",
    skills: ["Executive Leadership", "Growth Strategy", "Business Scaling", "Brand Vision"]
  },
  {
    id: 2,
    name: "Hirakjyoti Kakati",
    role: "Co-Founder & Chief Operations Officer",
    image: "/team/hirakjyoti-kakati.jpg",
    bio: "Directing agency operations, performance systems, project delivery architectures, and client scalability with agile execution and operational excellence.",
    experience: "Founding Member",
    skills: ["Operations Leadership", "Delivery Systems", "Agile Execution", "Client Scalability"]
  },
  {
    id: 3,
    name: "Anjana Azad",
    role: "Co-Founder & Creative Director",
    image: "/team/anjana-azad.jpg",
    bio: "Spearheading creative identity, campaign art direction, visual storytelling, and high-impact digital experiences that make brands unmistakable.",
    experience: "Founding Member",
    skills: ["Creative Direction", "Visual Storytelling", "Brand Identity", "Design Strategy"]
  }
];
