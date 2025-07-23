import { ChevronDown, RefreshCcw, ArrowRight } from "lucide-react";
import Button from "./Buttons";

const BlogSearch = () => {
  return (
    <div className="bg-gray-200 py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
          Search for Blogs below, by Region,<br />
          Our Product Category & the Blog Title.
        </h2>

        <div className="mt-2 w-12 h-1 bg-[#d57a38] mx-auto mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <div className="relative w-full md:w-1/4">
            <select className="appearance-none w-full py-3 px-4 border rounded-md bg-white text-gray-700">
              <option>Select Country</option>
              <option>Kenya</option>
              <option>Uganda</option>
            </select>
            <ChevronDown className="absolute right-4 top-3.5 text-gray-500" size={20} />
          </div>

          <div className="relative w-full md:w-1/4">
            <select className="appearance-none w-full py-3 px-4 border rounded-md bg-white text-gray-700">
              <option>Select Theory of Change</option>
              <option>Inclusive Trade</option>
              <option>Green Trade</option>
            </select>
            <ChevronDown className="absolute right-4 top-3.5 text-gray-500" size={20} />
          </div>

          <div className="relative w-full md:w-1/4">
            <select className="appearance-none w-full py-3 px-4 border rounded-md bg-white text-gray-700">
              <option>Select Thematic Area</option>
              <option>Logistics</option>
              <option>Infrastructure</option>
            </select>
            <ChevronDown className="absolute right-4 top-3.5 text-gray-500" size={20} />
          </div>

          <Button className="w-12 h-12 rounded-full text-white flex items-center justify-center hover:bg-red-700">
            <ArrowRight size={20} />
          </Button>

          <Button className="w-12 h-12 rounded-full text-white flex items-center justify-center hover:bg-red-700">
            <RefreshCcw size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BlogSearch;
