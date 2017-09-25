import React, { Component } from 'react';
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
        <a key={category.name} href={category.path}><h3>{category.name}</h3></a>
      )
    })

    return (
      <div className="nav-side">
        <a href="/"><h3>All</h3></a>
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