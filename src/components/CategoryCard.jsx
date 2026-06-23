function CategoryCard(props) {
  const { id, title, imageUrl } = props.data;
  return (
    <div
      key={id}
      className="h-80 w-150 rounded-2xl overflow-hidden flex items-center justify-baseline"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
      }}
    >
      <div className="ml-3 p-3 border border-white bg-white/30 text-white rounded flex flex-col justify-center items-center">
        <h2 className="text-lg font-bold uppercase ">{title}</h2>
        <button className="bg-blue-500 py-2 px-4 rounded hover:bg-blue-600 cursor-pointer">
          Shop Now
        </button>
      </div>
    </div>
  );
}
export default CategoryCard;
