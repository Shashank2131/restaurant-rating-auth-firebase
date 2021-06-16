import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Restauranticon from "@material-ui/icons/Restaurant";
import Star from "@material-ui/icons/Star";
import StarRating from './StarRating'
import Footer from './Footer'
import Navigation from './Navigation'

class ListRestaurants extends Component {
  renge = function(value) {
    let arr = [];
    for (let i = value; i > 0; i--) {
      arr.push(<i key={i}><Star/></i>);
    }
    return (<span>{arr}</span>);
  };
  addRestaurantsRating(restaurant, ind) {
    let temp = this.props.restaurants;
    if (temp[ind].rating < 5) {
      temp[ind].rating = temp[ind].rating + 1;
      this.props.setRestaurants(temp);
    }
  }

  reduceRestaurantsRating(restaurant, ind) {
    let temp = this.props.restaurants;
    if (temp[ind].rating > 0) {
      temp[ind].rating = temp[ind].rating - 1;
      this.props.setRestaurants(temp);
    }
  }

  writeCommnet(restaurants, ind, value) {
    let tem = this.props.restaurants;
    console.log(value.length);
    tem[ind].temp = value.trim() !== "" ? value : "";
    this.props.sendComments(tem);
  }
  pushCommit(restaurant, ind) {
    let temp = this.props.restaurants;
    if (temp[ind].temp !== "") temp[ind].comments.push(temp[ind].temp);
    temp[ind].temp = "";
    this.props.setRestaurants(temp);
  }
  render() {
    return (
      <div>
        <Navigation/>
        <ul className="container">
          {this.props.restaurants.map((restaurant, index) => (
            <li
              key={index}
              className={
                restaurant.rating < 2
                  ? "temp1"
                  : "" || restaurant.rating > 4
                    ? "temp"
                    : ""
              } >
              <h2>
                <Restauranticon /></h2>
                <h3>{restaurant.name}
              </h3>
              <img src={restaurant.url} alt="restaurants" />
              <p>
                  {
                    this.renge(restaurant.rating)
                  }
              </p>
              <p>{restaurant.description}</p>
              <StarRating/>
              
              
              <span>
                {restaurant.comments.map((s, index) => <p key={index}>{s}</p>)}
              </span>
              <TextField
                id="with-placeholder"
                label="Send Your FeedBack"
                placeholder="Placeholder"
                margin="fixed"
                value={restaurant.temp}
                onChange={event =>
                  this.writeCommnet(restaurant, index, event.target.value)
                } />

              <Button
                variant="contained"
                color="primary"
                onClick={() => this.pushCommit(restaurant, index)} >
                Send
              </Button>
              <br/> <br/>
              <Footer/>
              
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ListRestaurants;