import React, { Component } from "react";
import { Helmet } from "react-helmet";

class Title extends Component {
  state = {};
  render() {
    const title = "Univelcity";
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{this.props.title ? this.props.title : title}</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
      </div>
    );
  }
}

export default Title;
