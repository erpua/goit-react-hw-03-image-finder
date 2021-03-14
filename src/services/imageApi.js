const baseUrl = 'https://pixabay.com/api/';

const fetchImages = (searchQuery, page = 1) => {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };
  const requestParameter = `?q=${searchQuery}&page=${page}&key=17901819-89869377453f6777a0034661b&image_type=photo&orientation=horizontal&per_page=12`;

  return fetch(baseUrl + requestParameter, { options }).then(response =>
    response.json().then(data => data.hits),
  );
};

export { fetchImages };
