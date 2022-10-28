import React from "react";
import { SubHeading, MenuItem } from "../../components";
import { images, data } from "../../constants";

import "./SpecialMenu.css";

const SpecialMenu = () => {
  return (
    <div className="app__specialMunu flex__center section__padding" id="menu">
      <div className="app__specialMenu-title">
        <SubHeading title="Menu that fits you palatte" />
        <h1 className="headtext__cormorant">Today’s Special</h1>
      </div>
      <div className="app__specialMunu-menu">
        <div className="app__specialMunu-menu_wine flex__center">
          <p className="app__specialMunu-menu_heading">Wine & Beer</p>
          <div className="app__specialMunu-menu_items">
            {data.wines.map((wine) => (
              <MenuItem key={wine.id} title={wine.title} price={wine.price} tags={wine.tags} />
            ))}
          </div>
        </div>
        <div className="app__specialMunu-menu_img">
          <img src={images.menu} alt="menu img" />
        </div>
        <div className="app__specialMunu-menu_cocktails flex__center">
          <p className="app__specialMunu-menu_heading">Cocktails</p>
          <div className="app__specialMunu-menu_items">
            {data.cocktails.map((cocktail) => (
              <MenuItem key={cocktail.id} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
            ))}
          </div>
        </div>
      </div>
      <div style={{marginTop: '15px'}}>
        <button type="button" className="custom__button">View More</button>     
      </div>
    </div>
  );
};

export default SpecialMenu;
