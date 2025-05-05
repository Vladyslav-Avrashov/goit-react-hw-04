import Modal from 'react-modal';
import s from './ImageModal.module.css';
import { UnsplashImage } from '../../api/unsplash';

Modal.setAppElement('#root');

const customStyles: Modal.Styles = {
  overlay: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    backdropFilter: 'blur(5px)',
    zIndex: 1000,
  },
  content: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    background: 'transparent',
    border: 'none',
    inset: 0,
    overflow: 'hidden',
  },
};

interface ImageModalProps {
  data: UnsplashImage | null;
  isOpen: boolean;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ data, isOpen, onClose }) => {
  if (!data) return null;
  const { urls, alt_description } = data;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Image Modal"
    >
      <img
        src={urls.regular}
        alt={alt_description ?? 'Image'}
        className={s['modal-image']}
      />
    </Modal>
  );
};

export default ImageModal;
