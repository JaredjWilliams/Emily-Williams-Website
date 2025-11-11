import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0A2E35] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
              <h3 className="text-2xl mb-4">Emily Williams</h3>
            <p className="text-[#E8B8B0] mb-4">
              Watercolor artist creating unique original paintings that inspire and captivate.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-[#2D5A63] p-2 rounded-lg hover:bg-[#C9A961] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-[#2D5A63] p-2 rounded-lg hover:bg-[#C9A961] transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-[#2D5A63] p-2 rounded-lg hover:bg-[#C9A961] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-[#2D5A63] p-2 rounded-lg hover:bg-[#C9A961] transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl mb-4">Quick Links</h4>
            <ul className="space-y-2 text-[#E8B8B0]">
              <li>
                <a href="#about" className="hover:text-[#C9A961] transition-colors">About</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#C9A961] transition-colors">Gallery</a>
              </li>
              <li>
                <a href="#order" className="hover:text-[#C9A961] transition-colors">Commission</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl mb-4">Newsletter</h4>
            <p className="text-[#E8B8B0] mb-4">
              Stay updated with new works and exhibitions.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-lg bg-[#2D5A63] border border-[#2D5A63] focus:border-[#C9A961] focus:outline-none text-white placeholder:text-[#E8B8B0]"
              />
              <button className="px-6 py-2 bg-[#C9A961] hover:bg-[#D4B574] rounded-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-[#2D5A63] pt-8 text-center text-[#E8B8B0]">
          <p>&copy; {new Date().getFullYear()} Emily Williams. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

