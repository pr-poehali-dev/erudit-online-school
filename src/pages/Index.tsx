import Hero from "@/components/Hero";
import About from "@/components/About";
import Courses from "@/components/Courses";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About id="about" />
      <Courses id="courses" />
      <Testimonials />
      <Contact id="contact" />
    </div>
  );
};

export default Index;
