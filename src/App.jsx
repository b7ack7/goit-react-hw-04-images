import {useEffect, useState} from "react";
import {ToastContainer} from 'react-toastify';
import { AppWrapper, ErrorMessage } from "./App.styled";
import { Searchbar } from "components/Searchbar";
import { ImageGallery } from "components/ImageGallery";
import { Loader } from "components/Loader";
import { Button } from "components/Button";
import { fetchImg } from "services";


export const App = () => {
const [searchQuery, setSearchQuery] = useState("");
const [page, setPage] = useState(1);
const [images, setImages] = useState([]);
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState(null);
const [showButton, setShowButton] = useState(false);

useEffect(() => {
  if (searchQuery) {
    setIsLoading(true);
    setShowButton(false);
    fetchImg(searchQuery, page)
    .then(response => {
      if (response.totalHits === 0) {
        setError(`Sorry, there are no images ${searchQuery}. Please try again.`)
      } else {
        setImages(images => [...images, ...response.hits]);
        if (response.totalHits <= 12 || Math.ceil(response.totalHits / 12 === page)) {
          setShowButton(false);
        } else {
          setShowButton(true);
        }
      }
     })
     .catch(error => {
      setError("Something went wrong, please try again later");
      console.log(error.message);
     })
     .finally(() => {
      setIsLoading(false);
     })
    } 
  }, [searchQuery, page]);
 
 useEffect(() => {
  document.getElementById('root').scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
 }, [isLoading]);

  const getSearchQuery = (searchQuery) => {
   setSearchQuery(searchQuery);
   setPage(1);
   setImages([]);
   setIsLoading(false);
   setError(null);
   setShowButton(false);
  };

  const addPage = () => {
    setPage(page => page + 1)
    };

  return (
      <AppWrapper>
      <Searchbar onSubmit={getSearchQuery}/>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {/* {isLoading && <Loader/>} */}
      <ImageGallery
      images={images}
      />
      {isLoading && <Loader/>}
      {showButton && <Button addPage={addPage}/>}
      <ToastContainer theme="colored"/>
    </AppWrapper>
     );  
  }


