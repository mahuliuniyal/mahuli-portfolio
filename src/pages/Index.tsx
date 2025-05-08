
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import CertificateDisplay from "@/components/CertificateDisplay";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Footer from "@/components/Footer";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import SkillProgress from "@/components/SkillProgress";

const certificatesData = [
  {
    id: 1,
    title: "NPTEL Database Management System",
    image: "/lovable-uploads/64b047fe-0fcf-4d1d-9ba2-e839c4738cc9.png",
    issuer: "NPTEL - IIT Kharagpur",
    date: "Jan-Mar 2025",
    score: "48%",
    description: "8-week course on Database Management System fundamentals",
  },
  {
    id: 2,
    title: "Ultron 8.0 - Hackvengers Hackathon",
    image: "/lovable-uploads/732071e1-353d-42e0-8e78-e003091d9ca5.png",
    issuer: "SRM Institute of Science and Technology",
    date: "January 2025",
    description: "24-hour hackathon organized by Computing Technologies Association",
  },
  {
    id: 3,
    title: "NPTEL Programming in Java",
    image: "/lovable-uploads/4a188eb5-0d06-4c05-82f4-c59fa8d41bb5.png",
    issuer: "NPTEL - IIT Kharagpur",
    date: "Jul-Oct 2024",
    score: "61%",
    description: "12-week comprehensive Java programming course",
  },
  {
    id: 4,
    title: "UI/UX Workshop - Figma",
    image: "/lovable-uploads/dd9f7b2f-d916-4f1e-8be6-f8503357e952.png",
    issuer: "Cherry Network",
    date: "March 2024",
    description: "Comprehensive workshop on UI/UX for App Development with Figma",
  },
  {
    id: 5,
    title: "Innovatex'25 Hackathon",
    image: "/lovable-uploads/8511f713-ef5d-4e1b-8a5e-a545a1684526.png",
    issuer: "SRM Institute of Science and Technology",
    date: "April 2025",
    description: "HACKGRID 1.0 - READY PLAYER HACK organized by SRMIST ACM SIGAI Student Chapter",
  },
];

const skillsData = [
  {
    id: 1,
    title: "Design and Analysis of Algorithms (DAA)",
    image: "/lovable-uploads/fb356d9e-beb4-44f4-8702-3ee873fc5f0a.png",
    description: "Course progress showing proficiency in various algorithm techniques including sorting, searching, and graph algorithms."
  },
  {
    id: 2,
    title: "Object-Oriented Programming (OOPS)",
    image: "/lovable-uploads/3756bdef-1143-4200-8d00-3a79e3f4cb23.png",
    description: "Course progress demonstrating understanding of OOP concepts including inheritance, abstraction, and encapsulation."
  },
  {
    id: 3,
    title: "C Programming",
    image: "/lovable-uploads/d310a619-951a-48b9-84ce-6eb675c64f4a.png",
    description: "Course progress showing mastery in C programming fundamentals, data structures, and advanced concepts."
  },
  {
    id: 4,
    title: "DAA Lab Progress",
    image: "/lovable-uploads/1870cf82-53ff-4d51-a822-03dde9a2a86b.png",
    description: "Progress report for Design and Analysis of Algorithms lab assignments and practical implementations."
  }
];

const Index = () => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-pink-700 text-white">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-12 text-white">Hi, welcome to my portfolio</h1>
        
        <section className="mb-12">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Avatar className="w-72 h-72">
                <AvatarImage src="/lovable-uploads/7913e36d-8cf8-4b56-ade6-dfbe8043107e.png" alt="Mahuli Uniyal" />
                <AvatarFallback>MU</AvatarFallback>
              </Avatar>
            </div>
            <h1 className="text-4xl font-bold mb-4 text-white">Mahuli Uniyal</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Software Developer & UI/UX Designer passionate about creating innovative solutions.
            </p>
            <div className="flex justify-center gap-4 mt-6">
              <Button variant="default" className="bg-pink-600 hover:bg-pink-700">Contact Me</Button>
            </div>
          </div>
        </section>

        <Tabs defaultValue="about" className="mb-12" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-black/30">
            <TabsTrigger value="about" className="text-white data-[state=active]:bg-pink-600">About</TabsTrigger>
            <TabsTrigger value="skills" className="text-white data-[state=active]:bg-pink-600">Skills</TabsTrigger>
            <TabsTrigger value="certificates" className="text-white data-[state=active]:bg-pink-600">Certificates</TabsTrigger>
          </TabsList>
          
          <TabsContent value="about">
            <Card className="p-6 bg-gray-900/60 text-white border-none">
              <h2 className="text-2xl font-bold mb-4">About Me</h2>
              <p className="text-gray-300">
                I'm a passionate software developer with expertise in web development, 
                database management, and UI/UX design. With a strong foundation in 
                programming languages like Java and design tools like Figma, I strive 
                to create seamless user experiences through innovative solutions.
              </p>
            </Card>
          </TabsContent>
          
          <TabsContent value="skills" className="space-y-6">
            <div className="grid grid-cols-1 gap-8">
              {skillsData.map((skill) => (
                <SkillProgress key={skill.id} skill={skill} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="certificates" className="space-y-6">
            <div className="grid grid-cols-1 gap-8">
              {certificatesData.map((cert) => (
                <CertificateDisplay key={cert.id} certificate={cert} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
