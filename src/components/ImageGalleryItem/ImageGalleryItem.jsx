import { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'components/Modal';
import { GalleryItem, Img } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({tags, webformatURL, largeImageURL}) => {
    const [showModal, setShowModal] = useState(false);
    return (
        <GalleryItem>
            <Img src={webformatURL} alt={tags} onClick={() => setShowModal(true)}/>   
            {showModal &&  <Modal  onClose={()=> setShowModal(false)} imgUrl={largeImageURL} alt={tags}/>}
        </GalleryItem>
    )
}

ImageGalleryItem.propTypes = {
    tags: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired
}