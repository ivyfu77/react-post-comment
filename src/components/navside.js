import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavSide extends Component {

  render() {
    const { categories } = this.props;
    let categoryList = "";
    categoryList = categories.map((category) => {
      return (
        <Link key={category.name} to={"/"+category.path}><h3>{category.name}</h3></Link>
      )
    })

    return (
      <div className="nav-side">
        <Link to="/"><h3>All</h3></Link>
        {categoryList}
      </div>
    );
  }
}

export default NavSide;