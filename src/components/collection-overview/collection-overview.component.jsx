import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionForPreview } from "../../redux/shop/shop.selector";
import CollectionPreview from "../preview-collection/collection-preview.component";
import "./collection-overview.styles.scss";
const CollectionOverview = ({ collections }) => (
  <div className="collection-overview">
    {collections.map(({ id, ...otherCollectionProp }) => (
      <CollectionPreview key={id} {...otherCollectionProp} />
    ))}
  </div>
);
const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForPreview,
});
export default connect(mapStateToProps)(CollectionOverview);
