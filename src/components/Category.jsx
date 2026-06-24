import CategoryCard from "./CategoryCard";

function Category({ category }) {
  return (
    <div className=" flex flex-wrap justify-center gap-4 p-4">
      {category.map((item) => (
        <CategoryCard key={item.id} data={item} />
      ))}
    </div>
  );
}
export default Category;
