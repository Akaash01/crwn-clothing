import DirectoryItem from '../directory-item/DirectoryItem.component';
import './directory.styles.scss';
const Directory = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => {
        return <DirectoryItem category={category} />;
      })}
    </div>
  );
};

export default Directory;
