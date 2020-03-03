import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header } from 'semantic-ui-react';

class IslandSnow extends React.Component {

  render() {
    return (
        <Container textAlign="center" font-family="Lato, sans-serif">
          <Header as='h1'>Island Snow!</Header>
        </Container>
    );
  }
}

ReactDOM.render(<IslandSnow/>, document.getElementById('root'));