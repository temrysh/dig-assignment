import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import ListItem from "../components/list-item";

const ListView = ({ list = [] }) => (
  <ul>
    {list.map(({ id, title, price, images }) => (
      <li key={id}>
        <NavLink to={`/item/${id}`}>
          <ListItem title={title} price={price} image={images[0].thumb} />
        </NavLink>
      </li>
    ))}
  </ul>
);

export default connect(({ list }) => ({ list }))(ListView);
