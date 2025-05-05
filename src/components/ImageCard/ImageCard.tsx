import s from './ImageCard.module.css';
import { UnsplashImage } from '../../api/unsplash';

interface ImageCardProps {
  image: UnsplashImage;
  onClick: (image: UnsplashImage) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, onClick }) => {
  return (
    <div className={s.card} onClick={() => onClick(image)}>
      <img
        src={image.urls.small}
        alt={image.alt_description ?? 'Image'}
        className={s.image}
      />
    </div>
  );
};

export default ImageCard;
