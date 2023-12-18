import React, { Component } from "react";
import NavBar from "./navBar";
import "./home.css";
import ShopItem from "./shopItem";
import night_shop_logo from "../assets/night_shop_logo.png";
import gift1 from "../assets/Gift/gift1.png";
import gift2 from "../assets/Gift/gift2.png";
import gift3 from "../assets/Gift/gift3.png";
import egg from "../assets/Egg.svg";
import sock from "../assets/sock.svg";
import LeadDown0 from "../assets/Tree/0LeafDown.png";
import LeadDown1 from "../assets/Tree/1LeafDown.png";
import LeadDown2 from "../assets/Tree/2LeafDown.png";
import LeadDown3 from "../assets/Tree/3LeafDown.png";
import LeadDown4 from "../assets/Tree/4LeafDown.png";
import LeadDown5 from "../assets/Tree/5LeafDown.png";
import LeadDown6 from "../assets/Tree/6LeafDown.png";
import LeadDown7 from "../assets/Tree/7LeafDown.png";

import image1 from "../assets/stoneface.jpg";
import fortheeaster from "../assets/fortheeaster.png";
import RightPanel from "./rightPanel";
import LeftPanel from "./leftPanel";

const shopItems = [
  {
    image: image1,
    productName:
      "Stone face isn't like the easter egg you're looking for... It's hiding",
    price: 20,
    category: "Clothes",
  },
  {
    image: image1,
    productName:
      "Stone face isn't like the easter egg you're looking for... It's hiding",
    price: 35,
    category: "Clothes",
  },
  {
    image: image1,
    productName:
      "Stone face isn't like the easter egg you're looking for... It's hiding",
    price: 69,
    category: "Fourniture",
  },
  {
    image: image1,
    productName:
      "Stone face isn't like the easter egg you're looking for... It's hiding",
    price: 739,
    category: "Clothes",
  },
  {
    image: image1,
    productName:
      "Stone face isn't like the easter egg you're looking for... It's hiding",
    price: 39.9,
    category: "Fourniture",
  },
  {
    image: image1,
    productName:
      "Stone face isn't like the easter egg you're looking for... It's hiding",
    price: 69,
    category: "Clothes",
  },
  {
    image: image1,
    productName:
      "Stone face isn't like the easter egg you're looking for... It's hiding",
    price: 89.9,
    category: "Decoration",
  },
  {
    image: image1,
    productName:
      "Stone face isn't like the easter egg you're looking for... It's hiding",
    price: 69,
    category: "Clothes",
  },
  {
    image: image1,
    productName:
      "Stone face isn't like the easter egg you're looking for... It's hiding",
    price: 39,
    category: "Decoration",
  },
  {
    image: image1,
    productName:
      "Stone face isn't like the easter egg you're looking for... It's hiding",
    price: 55,
    category: "Decoration",
  },
  {
    image: image1,
    productName:
      "Stone face isn't like the easter egg you're looking for... It's hiding",
    price: 89,
    category: "Fourniture",
  },
  {
    image: image1,
    productName:
      "Stone face isn't like the easter egg you're looking for... It's hiding",
    price: 53,
    category: "Clothes",
  },
  {
    image: image1,
    productName:
      "Stone face isn't like the easter egg you're looking for... It's hiding",
    price: 65,
    category: "Decoration",
  },
  {
    image: image1,
    productName:
      "Stone face isn't like the easter egg you're looking for... It's hiding",
    price: 69,
    category: "Clothes",
  },
  {
    image: image1,
    productName:
      "Stone face isn't like the easter egg you're looking for... It's hiding",
    price: 23,
    category: "Fourniture",
  },
  {
    image: image1,
    productName:
      "Stone face isn't like the easter egg you're looking for... It's hiding",
    price: 89,
    category: "Decoration",
  },
  {
    image: image1,
    productName:
      "Stone face isn't like the easter egg you're looking for... It's hiding",
    price: 33,
    category: "Fourniture",
  },
];

const treeStages = [
  LeadDown0,
  LeadDown1,
  LeadDown2,
  LeadDown3,
  LeadDown4,
  LeadDown5,
  LeadDown6,
  LeadDown7,
];

const gifts = [gift1, gift2, gift3];
class Home extends Component {
  state = {
    search: "",
    category: "",
    toClickGifts: [1, 2, 3],
    nbToClickGifts: 3,
    stage: 5,
    MUIchecked: false,
  };
  handleShopItemClick = () => {
    if (this.state.stage === 3) {
      shopItems.length = 0;
      shopItems.unshift({
        image: egg,
        productName: "Félicitation!!!",
        price: -1,
        category: "Clothes",
      });
      this.setState({ stage: 0 });
    }
  };
  handleMUIChange = () => {
    if (this.state.stage === 6) {
      this.setState({ stage: this.state.stage - 1 });
    }
    if (this.state.MUIchecked) {
      document.getElementById("main-pane").style.backgroundColor = "#f0f0f0";
    } else {
      document.getElementById("main-pane").style.backgroundColor = "#000";
    }
    this.setState({ MUIchecked: !this.state.MUIchecked });
  };
  handleSearch = (e) => {
    this.setState({ search: e.target.value });
    if (e.target.value === "2566") {
      shopItems.length = 0;
      shopItems.unshift({
        image: image1,
        productName:
          "One more petal, don't put more decoration but wear more Clothes",
        price: 999,
      });
      this.setState({ stage: 3 });
      console.log(shopItems);
    }
  };
  handleCategoryChange = (category) => {
    this.setState({ category: category.target.innerText });
    if (category.target.innerText === "Clothes") {
      this.setState({ stage: 3 });
      shopItems.length = 0;
      shopItems.push({
        image: sock,
        productName: "Special Item",
        price: 0,
        category: "Clothes",
      });
    }
  };
  handleStageChange = () => {
    this.setState({ stage: this.state.stage - 1 });
  };
  handleClickGift = (gift) => {
    console.log("Gift " + gift + " clicked");
    if (this.state.toClickGifts.includes(gift)) {
      this.setState({ nbToClickGifts: this.state.nbToClickGifts - 1 });
      this.setState({
        toClickGifts: this.state.toClickGifts.filter((g) => g !== gift),
      });
      if (this.state.nbToClickGifts === 1) {
        this.setState({ stage: this.state.stage - 1 });
        console.log("Stage: " + this.state.stage);
        alert(
          "Find the rest of the Easters ! \nDarkness is better sometime even in the easters mornings ! \n"
        );
      }
    }
  };
  render() {
    const treeImage = treeStages[treeStages.length - this.state.stage - 1];
    const itemsToShow = shopItems.filter((item) => {
      if (this.state.category === "") return true;
      if (item.category === this.state.category) return item;
    });

    return (
      <div>
        <NavBar
          night_shop_logo={night_shop_logo}
          onSearch={this.handleSearch}
          MUIchecked={this.state.MUIchecked}
          onMUIChange={this.handleMUIChange}
        />
        <div id="main-pane" className="main-pane">
          <div className="left-pane">
            <LeftPanel
              image={treeImage}
              onCategoryChange={this.handleCategoryChange}
            />
          </div>

          <div className="center-pane">
            {itemsToShow.map((item) => (
              <ShopItem
                onClick={this.handleShopItemClick}
                image={item.image}
                productName={item.productName}
                price={item.price}
              />
            ))}
          </div>

          <div className="right-pane">
            <RightPanel
              image1={fortheeaster}
              gift1={gifts[0]}
              gift2={gifts[1]}
              gift3={gifts[2]}
              onClickGift={this.handleClickGift}
            />
          </div>
        </div>
        <p className="stage6" width="250px">
          The petals are falling! Keep up and search in about
        </p>
      </div>
    );
  }
}

export default Home;
