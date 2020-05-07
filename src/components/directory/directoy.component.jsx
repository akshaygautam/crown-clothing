import React from "react";
import MenuItem from "./../menu-item/menu-item.component";
import "./directory.styles.scss";
class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      seactions: [
        {
          title: "hats",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          id: 1,
        },
        {
          title: "jackets",
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
          id: 2,
        },
        {
          title: "Sneakers",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          id: 3,
        },
        {
          title: "Women's",
          imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
          id: 4,
          size: "large",
        },
        {
          title: "men's",
          imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
          id: 5,
          size: "large",
        },
      ],
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.seactions.map(({ title, imageUrl, id, size }) => (
            <MenuItem key={id} title={title} image={imageUrl} size={size}/>
        ))}
      </div>
    );
  }
}

export default Directory;
