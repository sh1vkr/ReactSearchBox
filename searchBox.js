// eslint-disable-next-line
import react, {useEffect} from 'react';
import './searchbox.css';
import React from "react";
import {useState} from 'react'
import { Button } from 'react-bootstrap';
// eslint-disable-next-line
import history from './../history';


//history.js =>
/*
import { createBrowserHistory as history} from 'history';
export default history();
*/ 
//or use other ways to navigate if its not history

function SearchBox() {
        const [searchTerm, setSearchTerm] = useState('')
        const [productsList, setProductsList] = useState([]);  //productList will be having all the products
                                                               //setProductList will have the filtered product list
        async function fetchData() {
            const res = await fetch("https://fakestoreapi.com/products"); // just a dummy json for testing
            res.json().then(res => setProductsList(res));  
        }
       
        useEffect(() => { fetchData(); });
      
		    return (
            <div class="wholelayout">
            <input id="searchbox" type="text" placeholder=" Search..."
                onChange={(event) => {
                    setSearchTerm(event.target.value);
                }}    
            />
            <div class="card-container">

            
            {productsList.filter((val) => {
              // eslint-disable-next-line
                if (searchTerm=="")  return val
                else if( val.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())) return val
                else return null
            }).map((val, key) => {      //returning a grid layout of all the products matched
              
                return (

                  <div class="card-container">
                  <div class="card">
                  <figure>
                    <img src={val.image} alt="t-shirt" ></img>
                  </figure>
                  <section class="details">
                    <div class="min-details">
                      <h1 id="onelinetext">{val.title} <span>price: {val.price}</span></h1>
                      <h1 class="price">U+020A8 {val.price}</h1>
                    </div>
                    <Button variant="btn btn-success" onClick={() => history.push('/Products')}>view</Button>
                  </section>
                </div>
                </div>
                );
            })}
            </div>
            </div>
	)};
  
export default SearchBox;


//this returns a whole page grid containing matching components
//if you dont want to return such, just change stuff in  .map((val,key) => { })
//adjust the search.css acordingly

//no need to fix routes

/*
make use by:
import SearchBox from './../Home/searchBox'
and return (<div><SearchBox /> </div>)in later code
*/
