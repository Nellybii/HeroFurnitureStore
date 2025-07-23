import Image from 'next/image';
import Link from 'next/link';
import categories from '../data/categories.json';

const CategoriesPage = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-10 text-center text-[#f59a69]">✨ Explore Our Furniture Categories</h1>
      <p className="text-lg text-gray-600 mb-10 text-center max-w-2xl mx-auto">
        Explore a wide variety of furniture categories tailored to every space in your home or office. Click on any category to discover more beautifully crafted products that fit your style.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <Link
            key={category.slug}
            href={`/categories/${category.slug}`}
            className="group block border rounded-lg overflow-hidden shadow hover:shadow-lg transition duration-300"
          >
            <div className="relative h-56 w-full">
              <Image
                src={category.image}
                alt={category.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-5 bg-white">
              <h2 className="text-xl font-bold mb-1 group-hover:text-primary">{category.title}</h2>
              <p className="text-gray-600 text-sm mb-2">{category.description}</p>
              <span className="text-blue-600 font-medium hover:underline">View more products →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;
