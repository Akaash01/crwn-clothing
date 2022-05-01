import CategoryItem from "../category-item/CategoryItem.component";
import "./directory.styles.scss";
const Directory = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => {
        return <CategoryItem category={category} />;
      })}
    </div>
  );
};

export default Directory;
