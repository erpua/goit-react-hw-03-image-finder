import React, { Component } from 'react';

import SearchBar from './components/SearchBar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import Spinner from './components/Loader';
import Modal from './components/Modal';

import { fetchImages } from './services/imageApi';

class App extends Component {
  state = {
    images: [],
    loading: false,
    error: null,
    largeImg: null,
    searchQuery: ' ',
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;

    if (prevQuery !== nextQuery) {
      this.fetchImagesByQuery();
    }
  }

  fetchImagesByQuery = () => {
    const { searchQuery, page } = this.state;

    this.setState({ loading: true });

    fetchImages(searchQuery, page)
      .then(images =>
        this.setState(state => ({
          images: [...state.images, ...images],
          page: state.page + 1,
        })),
      )
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  handleSearchFormSubmit = query => {
    this.setState({ searchQuery: query, page: 1, images: [] });
  };

  setLargeImage = url => {
    this.setState({ largeImg: url });
  };

  closeModal = () => {
    this.setState({ largeImg: null });
  };

  render() {
    const { images, loading, error, largeImg } = this.state;

    return (
      <>
        <SearchBar onSubmit={this.handleSearchFormSubmit} />
        {error && <p>Whoops, something went wrong: {error.massage}</p>}
        {images.length > 0 && (
          <ImageGallery images={images} onLargeImage={this.setLargeImage} />
        )}
        {loading && <Spinner />}
        {images.length > 0 && !loading && (
          <Button onButton={this.fetchImagesByQuery} />
        )}
        {largeImg && (
          <Modal onClose={this.closeModal}>
            <img src={largeImg} alt="" />
          </Modal>
        )}
      </>
    );
  }
}

export default App;
