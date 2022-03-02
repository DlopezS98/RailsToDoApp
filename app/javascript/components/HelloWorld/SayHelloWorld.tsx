import * as React from 'react'

class SayHelloWorld extends React.Component<IProps> {

  constructor(props: IProps){
    super(props);
  }

  render () {
    return (
      <React.Fragment>
          {this.props.greeting}, New component
      </React.Fragment>
    );
  }
}

interface IProps {
  greeting: string;
}

export default SayHelloWorld
