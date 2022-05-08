import {
  BackgroundImage,
  Body,
  DirectoryItemConatiner
} from './directoryItem.styles.jsx';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const DrictoryItem = (props) => {
  const { title, id, imageUrl, route } = props.category;
  const navigate = useNavigate();
  const onNavigateHandler = () => navigate(route);
  return (
    <DirectoryItemConatiner onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>shop now</p>
      </Body>
    </DirectoryItemConatiner>
  );
};

export default DrictoryItem;
