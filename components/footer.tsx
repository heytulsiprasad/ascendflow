import { Button } from "@/components/ui/button";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Mail,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-black/50 border-t border-gray-800">
      <div className="  px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">AscendFlow</h3>
            <p className="text-sm text-gray-400">
              Transforming home improvement businesses with cutting-edge AI
              solutions.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Solutions</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Email Automation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Custom GPT Systems
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Phone Solutions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Analytics
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Connect</h4>
            <div className="flex space-x-4">
              <Button
                size="icon"
                variant="ghost"
                className="hover:text-purple-400"
              >
                <Facebook className="h-4 w-4" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="hover:text-purple-400"
              >
                <Twitter className="h-4 w-4" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="hover:text-purple-400"
              >
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="hover:text-purple-400"
              >
                <Instagram className="h-4 w-4" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="hover:text-purple-400"
              >
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
            <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
              <Mail className="mr-2 h-4 w-4" />
              Subscribe to Newsletter
            </Button>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} AscendFlow. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-sm text-gray-400 hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
