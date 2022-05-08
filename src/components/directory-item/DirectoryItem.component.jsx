import './directoryItem.styles.scss';
const DrictoryItem = (props) => {
  const { title, id, imageUrl } = props.category;
  return (
    <div key={id} className="directory-item-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="body">
        <h2>{title}</h2>
        <p>shop now</p>
      </div>
    </div>
  );
};

export default DrictoryItem;
