import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";



export default function SkillsPage() {
  const router = useRouter();
  const onNavigate = () => router.push("/");

  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/skills")
      .then(response => setSkills(response.data))
      .catch(error => console.error("Error hai bhaya:", error));

    axios.get("http://localhost:5000/projects")
      .then(response => setProjects(response.data))
      .catch(error => console.error("Error hai bhaya:", error));
  }, []);

  return (
    <div className="min-h-screen p-8">
      <Button onClick={onNavigate} className="mb-8">
        Back to Home
      </Button>
      <h2 className="text-3xl font-bold mb-6">My Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
        {skills.map((skill: any) => (
          <div key={skill.name} className="relative w-32 h-32">
            <motion.div
              className="absolute inset-0 flex items-center justify-center bg-gray-700 p-4 rounded-lg object-cover"
              whileHover={{ opacity: 0.1 }}
              transition={{ transition: 0.3 }}>
              <img src={skill.image} alt={skill.name} className="w-full h-full rounded-lg" />
            </motion.div>
            <motion.div
              className="absolute inset-0 flex items-center justify-center bg-gray-900 text-white p-4 rounded-lg opacity-0 hover:opacity-100 transition-opacity">
              {skill.name}
            </motion.div>
          </div>
        ))}
      </div>
      <h2 className="text-3xl font-bold mb-6">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project: any) => (
          <div key={project.name} className="relative w-full h-48">
            <motion.div className="absolute inset-0" whileHover={{ opacity: 0.1 }} transition={{ duration: 0.3 }}>
              <img src={project.image} alt={project.name} className="w-full h-full object-cover rounded-lg" />
            </motion.div>
            <motion.div
              className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900 text-white p-6 rounded-lg opacity-0 hover:opacity-100 transition-opacity">
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <p>{project.description}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
