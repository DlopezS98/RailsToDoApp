import React from "react"
import PropTypes from "prop-types"
class HelloWorld extends React.Component<IProps> {

  private props: IProps;
  constructor(_props: IProps){
    super(_props);
    this.props = _props;
  }

  render () {
    return (
      <React.Fragment>
        Greeting: {this.props.greeting}
      </React.Fragment>
    );
  }
}

interface IProps {
  children: String;
  greeting: String;
}

export default HelloWorld
