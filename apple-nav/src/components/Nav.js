import React from "react";
import { Link } from "react-router-dom";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainNavItems: []
    };
  }

  render() {
      return (
        //Will render subset of navs need to cherry pick and grab the right data
          <div className="navItem">
            <Link onClick={this.props.selectLink} exact to={`/${this.props.navItem}`}><h2>{this.props.navItem}</h2></Link>
          </div>
      )
  }
}

export default Nav;