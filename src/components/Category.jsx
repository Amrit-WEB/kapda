import CategoryCard from "./CategoryCard";

function Category() {
  const category = [
    {
      id: 1,
      title: "hats",
      imageUrl: "/images/hats.png",
    },
    {
      id: 2,
      title: "jackets",
      imageUrl: "/images/jackets.png",
    },
    {
      id: 3,
      title: "sneakers",
      imageUrl: "/images/sneakers.png",
    },
    {
      id: 4,
      title: "mens",
      imageUrl: "/images/men.png",
    },
    {
      id: 5,
      title: "womens",
      imageUrl: "/images/women.png",
    },
  ];
  return (
    <div className=" flex flex-wrap justify-center gap-4 p-4">
      {category.map((item) => (
        <CategoryCard key={item.id} data={item} />
      ))}
    </div>
  );
}
export default Category;
