import React, { useState } from "react";
import PropTypes from 'prop-types';
import {GoSearch} from 'react-icons/go';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SearchbarWrapper, SearchForm, SearchFormButton, SearchFormInput} from "./Searchbar.styled";

export const Searchbar = ({onSubmit}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [disabledBtn, setDisabledBtn] = useState(false);

  const handleChangeSearchForm = (event) => {
    setSearchQuery(event.target.value);
    setDisabledBtn(false);
  }
  
  const  handleSubmitSearchForm = (event) => {
    event.preventDefault();
    if (searchQuery.trim() === "") {
      toast.error("Search is a required field");
      return;
    }
    onSubmit(searchQuery);
    setDisabledBtn(true);   
  };

      return (     
        <SearchbarWrapper>
         <SearchForm onSubmit={handleSubmitSearchForm}>
         <SearchFormButton type="submit" aria-label="search" disabled={disabledBtn}>
         <GoSearch />
         </SearchFormButton >
        <SearchFormInput
        name="searchQuery"
        onChange={handleChangeSearchForm}
        value={searchQuery}
        type="text"
        placeholder="Search images and photos"
        />
         </SearchForm>
       </SearchbarWrapper>    
     )
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}