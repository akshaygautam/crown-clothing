import React from "react";
import { connect } from "react-redux";
import "./collection.styles.scss";
import { selectCollection } from "../../redux/shop/shop.selector";
import CollectionItem from "../../components/collection-item/collection-item.component";
const CollectionPage = ({ collection }) => (
  <div className="collection-page">
    <h2 className="title">{collection.title}</h2>
    <div className="items">
      {collection.items.map((item) => (
        <CollectionItem key={item.id} item={item} />
      ))}
    </div>
  </div>
);
const mapStateToProps = (state, ownprops) => ({
  collection: selectCollection(ownprops.match.params.collectionId)(state),
});
export default connect(mapStateToProps)(CollectionPage);
