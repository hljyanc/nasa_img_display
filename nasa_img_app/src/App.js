import React, {useState} from 'react';
import SearchBar from './components/SearchBar';
import Display from './components/Display';
import './App.css';

function App() {
  const [searchedImages, setSearchedImages] = useState([]);

  const search = (term) => {
    fetch(`https://images-api.nasa.gov/search?q=${term}&media_type=image`)
           .then(response => response.json())
           .then(jsonResponse => {
             return jsonResponse.collection.items.map(result => ({
               id: result.data[0].nasa_id,
               title: result.data[0].title,
               href: result.links[0].href,
               date: result.data[0].date_created.slice(0,10),
               likeState: false
             }))
           }).then(data=>setSearchedImages(data));
  }

  const toggleLikeState = (image) => {
    const newSearchedImages = searchedImages.map( d => ({
      ...d,
      likeState: d.id === image.id ? !d.likeState : d.likeState,
    }));
    setSearchedImages(newSearchedImages);
  }
  return (
    <React.Fragment>
      <SearchBar onSearch={search}/>
      <Display searchedImages={searchedImages} onToggleLikeState={toggleLikeState}/>
    </React.Fragment>
  );
}

export default App;
