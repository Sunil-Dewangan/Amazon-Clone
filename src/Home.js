import React from 'react';
import "./Home.css";
import Product from "./Product"
function Home() {
    return (
        <div className = "home">
            <img className= "home_image"
             src = "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB408684220_.jpg" 
             alt ="" />

        {/* Product id, title, price, rating, image*/}
        <div className = "home_row">
            <Product 
                id="B101"
                title="Operating System Concept by Silberschatz, Galvin, Gagne, 8th Edition"
                price = {580}
                rating = {5}
                image = "https://images-na.ssl-images-amazon.com/images/I/51spVw9pGKL.
                _SX348_BO1,204,203,200_.jpg"
            />

            <Product 
                id="L202"
                title="ASUS TUF Gaming FX505GT 15.6 
                FHD 120Hz Laptop GTX 1650 4GB Graphics 
                (Core i7-9750H 9th Gen/16GB RAM/512GB PCIe SSD/Windows 10/Black/2.20 Kg), 
                FX505GT-AL007T"
                price = {85000}
                rating = {5}
                image = "https://images-na.ssl-images-amazon.com/images/I/81%2BYepXiJpL._SX466_.jpg"
            />
        </div>

        <div className = "home_row">
        <Product 
        id="R303"
        title="LG 190 L 4 Star Inverter Direct-Cool Single Door Refrigerator (GL-B201ASPY, Scarlet Plumeria)"
        price = {14490}
        rating = {4}
        image = "https://images-na.ssl-images-amazon.com/images/I/51E39G2wdEL._SL1100_.jpg"
        />

        <Product 
        id="A404"
        title="Bosch 7 kg Fully-Automatic Front Loading Washing Machine (WAK24168IN, Silver, Inbuilt Heater)"
        price = {38499}
        rating = {3}
        image = "https://images-na.ssl-images-amazon.com/images/I/417N2jQ%2BIuL._SX679_.jpg"
        />

        <Product 
        id="W505"
        title="Operating System Concept by Silberschatz, Galvin, Gagne, 8th Edition"
        price = {27990}
        rating = {4}
        image = "https://images-na.ssl-images-amazon.com/images/I/81HApTZ8D8L._SY445_.jpg"
        />
        </div>

        <div className = "home_row">
        <Product 
        id="T606"
        title="Sony Bravia 138.8 cm (55 inches) 4K Ultra HD Smart LED TV KD-55X7002G (Black)"
        price = {63999}
        rating = {5}
        image = "https://m.media-amazon.com/images/I/51Y0UPkomKL._AC_SR320,320_.jpg"
        />

        </div>

        </div>
    )
}

export default Home
