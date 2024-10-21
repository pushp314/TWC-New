import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';


export default function ContactFooter() {
  return (
    <div className="bg-[#6D1E3F] text-[#F0D08E] relative overflow-hidden">
      <div className="container mx-auto px-4 py-12 relative">
        <footer className="mt-24 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Social Media</h2>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white"><Facebook /></a>
              <a href="#" className="hover:text-white"><Twitter /></a>
              <a href="#" className="hover:text-white"><Linkedin /></a>
              <a href="#" className="hover:text-white"><Instagram /></a>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Venues</h2>
            <ul className="space-y-2">
              {['Delhi', 'Mumbai', 'Pune', 'Banglore', 'Durg', 'Rajasthan'].map((venue) => (
                <li key={venue}><a href="#" className="hover:underline">{venue}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Suppliers</h2>
            <ul className="space-y-2">
              {['Photographers', 'Decorators', 'Venues Planner', 'Choreographers', 'Designers', 'Makeup Artists'].map((supplier) => (
                <li key={supplier}><a href="#" className="hover:underline">{supplier}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              {['About Us', 'Careers', 'Contact Us', 'FAQ', 'Privacy Policy', 'Terms & Conditions'].map((link) => (
                <li key={link}><a href="#" className="hover:underline">{link}</a></li>
              ))}
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
}