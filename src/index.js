import { hot } from "react-hot-loader";

import React from "react";
import ReactDOM from "react-dom";
import {
  Grid,
  GridColumn as Column,
  GridCell
} from "@progress/kendo-react-grid";

class CustomCell extends GridCell {
  render() {
    return (
      <td>
        <input
          disabled
          type="checkbox"
          checked={this.props.dataItem[this.props.field]}
        />
      </td>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gridData: [
        {
          ProductID: 1,
          testProperty: 2
        },
        {
          ProductID: 1,
          testProperty: 2
        },

        {
          ProductID: 1,
          testProperty: 2
        }
      ]
    };
  }
  render() {
    return (
      <div>
        <Grid style={{ height: "400px" }} data={this.state.gridData}>
          <Column field="ProductID" title="ID" width="40px" />
          <Column field="ProductName" title="Name" width="250px" />
          <Column field="Category.CategoryName" title="CategoryName" />
          <Column field="UnitPrice" title="Price" width="80px" />
          <Column field="UnitsInStock" title="In stock" width="80px" />
          <Column
            field="Discontinued"
            title="Discontinued"
            width="120px"
            cell={CustomCell}
          />
        </Grid>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
