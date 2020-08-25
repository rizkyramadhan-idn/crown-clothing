import React from "react";

import SHOP_DATA from "./shop.data";

import CollectionPreview from "../collection-preview/collection-preview.component";

class ShopPage extends React.Component {
  constructor() {
    super();

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;

    return (
      <div className="shop-page">
        {collections.map(({ id, ...colection }) => (
          <CollectionPreview key={id} {...colection} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
