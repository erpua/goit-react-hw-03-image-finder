import React from 'react';
import PropTypes from 'prop-types';

import '../../styles.css';

const ImageGalleryItem = ({ webformatURL, tags, largeImage }) => (
  <li className="ImageGalleryItem">
    <img
      src={webformatURL}
      alt={tags}
      className="ImageGalleryItemImage"
      onClick={largeImage}
    />
  </li>
);

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImage: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
