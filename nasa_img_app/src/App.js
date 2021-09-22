import React, {useState} from 'react';
import SearchBar from './components/SearchBar';
import Display from './components/Display';
import './App.css';

function App() {
  const [searchedImages, setSearchedImages] = useState([]);

  const search = (term) => {
    fetch('https://images-api.nasa.gov/search?q=test&media_type=image')
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
    setSearchedImages((prev) =>{
     prev.map(el => {
          if(el.id === image.id){
            el.likeState = el.likeState ? false : true;
          }
        });
      });
  }
  return (
    <React.Fragment>
      <SearchBar onSearch={search}/>
      <Display searchedImages={searchedImages} onToggleLikeState={toggleLikeState}/>
    </React.Fragment>
  );
}

export default App;
