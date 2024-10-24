import ManCat from '../assets/images/men_2.jpeg';
import WomCat from '../assets/images/w_3.jpeg';
import KidCat from '../assets/images/kids.jpeg';

const categories = [
  {
    title: 'Men',
    imageUrl: ManCat,
  },
  {
    title: 'Women',
    imageUrl: WomCat,
  },
  {
    title: 'Kids',
    imageUrl: KidCat,
  },
];

const CategorySection = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 ">
      {categories.map((category, id) => (
        <div
          key={id}
          className="relative transform transition-transform duration-300 hover:scale-105 h-64 cursor-pointer "
        >
          <img src={category.imageUrl} className="w-full h-full rounded-md" />
          <div className="absolute top-20 left-10">
            <p className="text-xl font-bold">{category.title}</p>
            <p className="text-gray-500">View All</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategorySection;
