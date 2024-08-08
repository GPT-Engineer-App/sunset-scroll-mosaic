import { useState, useEffect } from 'react';
import { Sun, Moon, Book, Briefcase, Mail, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const Index = () => {
  const [theme, setTheme] = useState('light');
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const revealEasterEgg = () => {
    setShowEasterEgg(true);
    setTimeout(() => setShowEasterEgg(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#8AEAFF] to-[#FF4E50] text-[#4B0082] transition-colors duration-500">
      <nav className="fixed top-0 left-0 right-0 bg-[#FC913A] p-4 flex justify-between items-center z-10">
        <h1 className="text-2xl font-bold">Anton Osika</h1>
        <Button variant="ghost" size="icon" onClick={toggleTheme}>
          {theme === 'light' ? <Moon /> : <Sun />}
        </Button>
      </nav>

      <main className="container mx-auto px-4 pt-20">
        <section className="py-20 text-center">
          <h2 className="text-5xl font-bold mb-4">Anton Osika</h2>
          <p className="text-2xl mb-8">Founder & Philosopher</p>
          <Button variant="outline" size="lg" onClick={revealEasterEgg}>
            Discover More
          </Button>
          {showEasterEgg && (
            <p className="mt-4 text-xl animate-bounce">
              "The unexamined life is not worth living" - Socrates
            </p>
          )}
        </section>

        <section className="py-20">
          <h3 className="text-3xl font-bold mb-8">About Me</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <Book className="w-12 h-12 mb-4" />
                <h4 className="text-xl font-semibold mb-2">Philosophy</h4>
                <p>Exploring the depths of human existence and consciousness through rigorous intellectual inquiry.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Briefcase className="w-12 h-12 mb-4" />
                <h4 className="text-xl font-semibold mb-2">Entrepreneurship</h4>
                <p>Bridging the gap between philosophical insights and practical business applications.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-20">
          <h3 className="text-3xl font-bold mb-8">Portfolio</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "The Conscious Entrepreneur", desc: "A book exploring the intersection of mindfulness and business leadership." },
              { title: "Ethics in AI Symposium", desc: "Organized and led a global conference on the ethical implications of artificial intelligence." },
              { title: "Mind-Body Wellness App", desc: "Developed an app that combines ancient wisdom with modern neuroscience for holistic well-being." }
            ].map((project, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
                  <p>{project.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="py-20">
          <h3 className="text-3xl font-bold mb-8">Contact Me</h3>
          <Card>
            <CardContent className="p-6">
              <form className="space-y-4">
                <Input placeholder="Your Name" />
                <Input type="email" placeholder="Your Email" />
                <Textarea placeholder="Your Message" />
                <Button type="submit">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </section>

        <footer className="py-8 text-center">
          <div className="flex justify-center space-x-4 mb-4">
            <Button variant="ghost" size="icon">
              <Github />
            </Button>
            <Button variant="ghost" size="icon">
              <Linkedin />
            </Button>
            <Button variant="ghost" size="icon">
              <Twitter />
            </Button>
          </div>
          <p>&copy; 2024 Anton Osika. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
