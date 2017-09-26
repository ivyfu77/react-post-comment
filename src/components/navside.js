import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { fetchCategories } from '../actions';

class NavSide extends Component {

  componentWillMount() {
    const { fetchAllCategories } = this.props;

    fetchAllCategories();
  }

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

function mapStateToProps (state, ownProps) {
  return ({
    categories: state.categoryStore.categories
  })
}

function mapDispatchToProps(dispatch) {
  return {
    fetchAllCategories: () => dispatch(fetchCategories())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavSide);