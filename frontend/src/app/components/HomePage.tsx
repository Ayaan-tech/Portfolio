import { useEffect, useState } from "react";
import Image from "next/image";
import { GitlabIcon as GitHub } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import axios from "axios";



export default function HomePage() {
  const router = useRouter();
  const navigate = () => router.push("/skills");
  const [profile, setProfile] = useState({
    name: "",
    image: "",
    github: "",
    instagram: "",
    linkedin: ""
  });

  useEffect(() => {
    axios.get("http://localhost:5000/profile")
      .then(response => {
        setProfile(response.data);
      })
      .catch(error => console.error("Error fetching profile:", error));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <Image
        src='/images/dp.jpg'
        priority={true}
        alt={profile.name}
        width={200}
        height={200}
        className="rounded-lg mb-8 border-4 border-white"
      />
      
      <h1 className="text-4xl font-bold mb-4">{profile.name || "Your Name"}</h1>
      <div className="flex flex-row space-x-4 items-center">
        <a href={profile.github} target="_blank" rel="noopener noreferrer" className="flex items-center mb-8 hover:text-gray-300 transition-colors">
          <GitHub className="mr-2" />
        </a>
        <a href={profile.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center mb-8 hover:text-gray-300 transition-colors">
          <Instagram className="mr-2" />
        </a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center mb-8 hover:text-gray-300 transition-colors">
          <Linkedin className="mr-2" />
        </a>
      </div>
      <Button onClick={navigate} className="text-lg px-6 py-3 bg-blue-600 hover:bg-blue-700 transition-colors">
        View My Skills
      </Button>
    </div>
  );
}