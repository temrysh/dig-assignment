import React, { Fragment } from "react";
import { connect } from "react-redux";
import { useHistory, useRouteMatch } from "react-router-dom";

import ItemDetails from "../components/item-details";

const ItemView = ({ list = [] }) => {
  const history = useHistory();
  const routeId = useRouteMatch("/item/:id").params.id * 1;
  const item = list.find(({ id }) => id === routeId) || {};
  const { title, description, specification, price, images = [] } = item;

  return (
    <Fragment>
      <button type="button" onClick={history.goBack}>
        Go back
      </button>
      <ItemDetails
        title={title}
        description={description}
        specification={specification}
        price={price}
        images={images}
      />
    </Fragment>
  );
};

export default connect(({ list }) => ({ list }))(ItemView);
