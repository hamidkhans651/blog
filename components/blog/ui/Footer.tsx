import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">NextBlog</h2>
            <p className="text-gray-400 mt-2">© {new Date().getFullYear()} All rights reserved</p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6">
            <div>
              <h3 className="font-semibold mb-2">Links</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="hover:text-gray-300 transition">Home</Link></li>
                <li><Link href="/about" className="hover:text-gray-300 transition">About</Link></li>
                <li><Link href="/blog" className="hover:text-gray-300 transition">Blog</Link></li>
                <li><Link href="/contact" className="hover:text-gray-300 transition">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Social</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-300 transition">Twitter</a></li>
                <li><a href="#" className="hover:text-gray-300 transition">GitHub</a></li>
                <li><a href="#" className="hover:text-gray-300 transition">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}