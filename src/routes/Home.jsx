import Category from "../components/Category";
function Home() {
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
  return <Category category={category} />;
}
export default Home;
