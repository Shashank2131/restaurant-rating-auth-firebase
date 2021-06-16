import React, { Component } from "react";
import ListRestaurants from "./ListRestaurants";
import StarRating from './StarRating'

class List extends Component {
  state = {
    restaurants: [
      {
        description:
          "Relax and enjoy great food in a comfortable atmosphere at Smitty’s Restaurant and Lounge",
        name: "Smitty's",
        url:
          "https://images.unsplash.com/photo-1593160688806-4a3604ef4cbd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cm9vZnRvcCUyMHJlc3RhdXJhbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=300&q=300",
        StarRating,
        comments: [],
        temp: ""
      },
      {
        description:
          "Earls Kitchen + Bar is a globally inspired restaurant focused on using the freshest ingredients.",
        name: "Earls Kitchen + Bar",
        url:
          "https://images.unsplash.com/photo-1621275471769-e6aa344546d5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHJvb2Z0b3AlMjByZXN0YXVyYW50fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=300&q=300",
        StarRating,
        comments: [],
        temp: ""
      },
      {
        description:
          "Contemporary Italian food, International wine list and historic Valhalla building at Glebe.",
        name: "Tinello",
        url:
          "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cm9vZnRvcCUyMHJlc3RhdXJhbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=300&q=300",
        StarRating,
        comments: [],
        temp: ""
      },
      {
        description:
          "Dauphin’s combines two of the most important names in Baumhower and Mobile history",
        name: "Dauphin's",
        url:
          "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHJlc3RhdXJhbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=300&q=300",
        StarRating,
        comments: [],
        temp: ""
      },
      {
        description:
          "Stunning waterfront views of St. Joseph Sound, Honeymoon and Caledesi Islands.",
        name: "Bon Appetit",
        url:
          "https://images.unsplash.com/photo-1522336572468-97b06e8ef143?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHJlc3RhdXJhbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=300&q=300",
        StarRating,
        comments: [],
        temp: ""
      },
      {
        description:
          "Hy's Toronto has everything you could expect from a steakhouse in an elegant atmosphere.",
        name: "Hy's Steakhouse",
        url:
          "https://images.unsplash.com/photo-1481833761820-0509d3217039?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHJlc3RhdXJhbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=300&q=300",
        StarRating,
        comments: [],
        temp: ""
      },
      {
        description:
          "Is located in the heart of Toronto’s Financial District, features modern Japanese inspired cuisine.",
        name: "Katana on Bay",
        url:
          "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=300",
        StarRating,
        comments: [],
        temp: ""
      },
      {
        description:
          "Critically acclaimed to be among Canada’s best restaurants, Canoe's unique Lake Ontario. ",
        name: "Canoe Restaurant and Bar",
        url:
          "https://images.unsplash.com/photo-1580613216045-256562471df1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=300",
        StarRating,
        comments: [],
        temp: ""
      },
      {
        description:
          "As the first East Coast location of Vancouver based Aburi Restaurants, Toronto waterfront.",
        name: "Miku Restaurant",
        url:
          "https://images.unsplash.com/photo-1535850452425-140ee4a8dbae?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8a2l0Y2hlbiUyMHJlc3RhdXJhbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=300&q=300",
        StarRating,
        comments: [],
        temp: ""
      }
    ],

    temp: ""
  };
  setRestaurants = restaurant => {
    this.setState({ restaurants: restaurant });
  };
  reduceRating = restaurant => {
    this.setState({ restaurants: restaurant });
  };
  sendComments = (restaurant, ind, value) => {
    this.setState({ temp: value });
  };

  render() {
    return (
      <div>
        <ListRestaurants
          restaurants={this.state.restaurants}
          setRestaurants={this.setRestaurants}
          sendComments={this.sendComments}
        />
      </div>
    );
  }
}

export default List;