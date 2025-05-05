import { useState, useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';
import { searchImages, UnsplashImage } from '../../api/unsplash';
import { Toaster } from 'react-hot-toast';

const App: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [images, setImages] = useState<UnsplashImage[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [modalData, setModalData] = useState<UnsplashImage | null>(null);

  useEffect(() => {
    if (!query) return;

    const fetchImages = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await searchImages(query, page);
        setImages(prev =>
          page === 1 ? data.results : [...prev, ...data.results]
        );
      } catch (error) {
        setError('Something went wrong. Please try again.');
      } finally {
        setLoading(false);
        if (page > 1) {
          setTimeout(() => {
            window.scrollBy({
              top: window.innerHeight * 0.8,
              behavior: 'smooth',
            });
          }, 200);
        }
      }
    };

    fetchImages();
  }, [query, page]);

  const handleSearch = (newQuery: string) => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  const loadMore = () => setPage(prev => prev + 1);
  const openModal = (data: UnsplashImage) => setModalData(data);
  const closeModal = () => setModalData(null);

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage message={error} />}
      {images.length > 0 && (
        <ImageGallery images={images} onImageClick={openModal} />
      )}
      {loading && <Loader />}
      {images.length > 0 && !loading && <LoadMoreBtn onClick={loadMore} />}
      <ImageModal data={modalData} isOpen={!!modalData} onClose={closeModal} />
      <Toaster />
    </div>
  );
};

export default App;
