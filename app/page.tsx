"use client";

import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  Mail,
  MessageSquare,
  Phone,
  Share2,
  BarChart3,
  Bot,
} from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { ServiceCard } from "@/components/service-card";
import { TestimonialCard } from "@/components/testimonial-card";
import { CTASection } from "@/components/cta-section";
import { BookingCTA } from "@/components/booking-cta";
import { Footer } from "@/components/footer";
import { FloatingNavbar } from "@/components/floating-navbar";
import { DashboardPreview } from "@/components/dashboard-preview";
import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <FloatingNavbar />

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center px-4 py-24 text-center lg:py-32 overflow-hidden min-h-screen">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent animate-gradient" />
          <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,rgb(255_0_153/0.15)_0deg,rgb(120_0_255/0.15)_120deg,rgb(0_255_255/0.15)_240deg)] animate-gradient" />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-black opacity-80" />
        </div>
        <div className="  px-4 md:px-6 relative z-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <motion.div
              initial="initial"
              animate="animate"
              variants={stagger}
              className="flex flex-col justify-center space-y-4 text-center lg:text-left"
            >
              <motion.div variants={fadeIn} className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none">
                  Transform Your Home Improvement Business with AI
                </h1>
                <p className="max-w-full md:max-w-[600px] text-gray-200 md:text-xl lg:text-base xl:text-xl">
                  Automate your operations, enhance customer engagement, and
                  boost revenue with our cutting-edge AI solutions.
                </p>
              </motion.div>
              <motion.div
                variants={fadeIn}
                className="flex flex-col gap-3 min-[400px]:flex-row justify-center lg:justify-start"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                >
                  Get Started
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-white border-white hover:bg-white/10"
                >
                  Book a Demo
                </Button>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <DashboardPreview />
            </motion.div>
          </div>
        </div>
      </section>

      {/* First CTA Section */}
      <CTASection
        title="Ready to Boost Your Revenue?"
        subtitle="Join hundreds of home improvement businesses that have increased their revenue by an average of 156% with AscendFlow"
        buttonText="Start Your Journey"
        gradient="from-purple-600 via-pink-600 to-blue-600"
      />

      {/* Services Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={stagger}
        className="w-full py-12 md:py-24 lg:py-32 bg-white/5"
      >
        <div className="  px-4 md:px-6">
          <motion.div
            variants={fadeIn}
            className="flex flex-col items-center justify-center space-y-4 text-center"
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl">
                Our Services
              </h2>
              <p className="max-w-full md:max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Comprehensive AI solutions tailored for the home improvement
                industry
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={stagger}
            className="mx-auto grid gap-6 py-12 lg:grid-cols-3"
          >
            <motion.div variants={fadeIn}>
              <ServiceCard
                icon={<Mail className="h-6 w-6" />}
                title="Email Outreach"
                description="Automated email campaigns that convert prospects into customers"
                percentage="285"
                metric="more leads"
              />
            </motion.div>
            <motion.div variants={fadeIn}>
              <ServiceCard
                icon={<Bot className="h-6 w-6" />}
                title="Custom GPT Systems"
                description="AI chatbots trained specifically for home improvement inquiries"
                percentage="156"
                metric="conversion"
              />
            </motion.div>
            <motion.div variants={fadeIn}>
              <ServiceCard
                icon={<Phone className="h-6 w-6" />}
                title="Phone Dialer Systems"
                description="Intelligent call automation for improved customer engagement"
                percentage="198"
                metric="efficiency"
              />
            </motion.div>
            <motion.div variants={fadeIn}>
              <ServiceCard
                icon={<Share2 className="h-6 w-6" />}
                title="Social Media Management"
                description="AI-powered content creation and scheduling"
                percentage="324"
                metric="engagement"
              />
            </motion.div>
            <motion.div variants={fadeIn}>
              <ServiceCard
                icon={<BarChart3 className="h-6 w-6" />}
                title="Performance Analytics"
                description="Real-time insights and performance tracking"
                percentage="167"
                metric="accuracy"
              />
            </motion.div>
            <motion.div variants={fadeIn}>
              <ServiceCard
                icon={<MessageSquare className="h-6 w-6" />}
                title="Text Message Systems"
                description="Automated SMS campaigns and customer follow-ups"
                percentage="245"
                metric="response"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Second CTA Section */}
      <CTASection
        title="Transform Your Business Today"
        subtitle="Don't let manual processes hold you back. Embrace the power of AI and watch your business soar."
        buttonText="Schedule a Demo"
        gradient="from-blue-600 via-purple-600 to-pink-600"
      />

      {/* Why Choose Us Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={stagger}
        className="w-full py-12 md:py-24 lg:py-32"
      >
        <div className="  px-4 md:px-6">
          <motion.div
            variants={fadeIn}
            className="flex flex-col items-center justify-center space-y-4 text-center"
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl">
                Why Choose Us
              </h2>
              <p className="max-w-full md:max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Industry expertise combined with cutting-edge AI technology
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={stagger}
            className="mx-auto grid gap-6 py-12 lg:grid-cols-3"
          >
            <motion.div variants={fadeIn}>
              <TestimonialCard
                quote="AscendFlow transformed our business. Our customer engagement increased by 300% in just two months."
                author="John Smith"
                company="Elite Home Services"
              />
            </motion.div>
            <motion.div variants={fadeIn}>
              <TestimonialCard
                quote="The AI solutions provided by AscendFlow have streamlined our operations significantly."
                author="Sarah Johnson"
                company="Modern Renovations"
              />
            </motion.div>
            <motion.div variants={fadeIn}>
              <TestimonialCard
                quote="Outstanding results! Our lead conversion rate doubled after implementing their AI systems."
                author="Mike Williams"
                company="Premium Contractors"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Third CTA Section */}
      <CTASection
        title="Maximize Your Growth Potential"
        subtitle="Join the revolution of AI-powered home improvement businesses"
        buttonText="Get Started Now"
        gradient="from-pink-600 via-purple-600 to-blue-600"
      />

      {/* Contact Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeIn}
        className="w-full py-12 md:py-24 lg:py-32 bg-white/5"
      >
        <div className="  px-4 md:px-6">
          <motion.div
            variants={fadeIn}
            className="flex flex-col items-center justify-center space-y-4 text-center"
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl">
                Get in Touch
              </h2>
              <p className="max-w-full md:max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Ready to transform your business? Contact us today for a free
                consultation.
              </p>
            </div>
          </motion.div>
          <div className="mx-auto max-w-2xl py-12">
            <ContactForm />
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <Footer />

      {/* Floating Booking CTA */}
      <BookingCTA />
    </main>
  );
}
