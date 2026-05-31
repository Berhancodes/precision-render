import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/berhancodes", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/a-berhan-7158a5278", label: "LinkedIn" },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-handwritten text-2xl text-primary mb-2 rotate-tiny-right inline-block">Don't be shy</p>
          <h2 className="font-display italic text-4xl md:text-6xl font-black mb-6">
            Let's <span className="text-gradient wiggle-underline">Connect</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Got an idea, a question, or just want to send a friendly hello?
            My inbox is open and the kettle's on.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto space-y-8"
        >
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-warm flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <p className="font-handwritten text-lg text-muted-foreground">email</p>
                <a href="mailto:berh3n@gmail.com" className="font-medium hover:text-primary transition-colors">berh3n@gmail.com</a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-warm flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <p className="font-handwritten text-lg text-muted-foreground">location</p>
                <p className="font-medium">available worldwide</p>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <p className="font-handwritten text-lg text-muted-foreground mb-4">find me around the internet</p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-12 h-12 rounded-xl glass flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:-rotate-6 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
