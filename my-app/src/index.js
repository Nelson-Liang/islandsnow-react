import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header } from 'semantic-ui-react';
import Menu from 'semantic-ui-react/dist/commonjs/collections/Menu';
import Dropdown from 'semantic-ui-react/dist/commonjs/modules/Dropdown';
import Icon from 'semantic-ui-react/dist/commonjs/elements/Icon';
import { Input } from 'semantic-ui-react'
import Label from 'semantic-ui-react/dist/commonjs/elements/Label';
import Grid from 'semantic-ui-react/dist/commonjs/collections/Grid';
import Image from 'semantic-ui-react/dist/commonjs/elements/Image';


class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="topmenu">
          <Container>
            <Menu.Item fitted><Icon name="facebook f" /></Menu.Item>
            <Menu.Item fitted><Icon name="twitter" /></Menu.Item>
            <Menu.Item fitted><Icon name="pinterest" /></Menu.Item>
            <Menu.Item fitted><Icon name="instagram" /></Menu.Item>
            <Menu.Item fitted position="right"><Icon name="home" /></Menu.Item>
            <Menu.Item fitted><Icon name="search" /></Menu.Item>
            <Menu.Item fitted><Icon name="user" /></Menu.Item>
            <Dropdown item text="MY CART 0" icon="shop">
              <Dropdown.Menu>
                <Dropdown.Item>My cart is currently empty.</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Container>
        </Menu>
    )
  }
}

class IslandSnowLogo extends React.Component {
  render() {
    return (
        <Image src='//cdn.shopify.com/s/files/1/1035/5187/files/logoshort_800x.png?v=1543956749' size={'medium'} centered/>
    )
  }
}

class MiddleMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="middle menu">
          < Container className="center aligned">

            <Dropdown item text="MEN">
              <Dropdown.Menu>
                <Dropdown.Item>Tank tops</Dropdown.Item>
                <Dropdown.Item>Shirts</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown item text="WOMEN">
              <Dropdown.Menu>
                <Dropdown.Item>Tank tops</Dropdown.Item>
                <Dropdown.Item>Shirts</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Menu.Item>KIDS</Menu.Item>

            <Dropdown item text="BRAND">
              <Dropdown.Menu>
                <Dropdown.Item>Aloha Surf Project</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Menu.Item>SEARCH</Menu.Item>

          </Container>
        </Menu>
    )
  }
}

class FullWidthImage extends React.Component {
  render() {
    return (
          <Image src='http://courses.ics.hawaii.edu/ics314s20/morea/ui-frameworks/experience-islandsnow-video-snapshot.png' fluid/>
    )
  }
}

class FooterMenu extends React.Component {
  render() {
    return (
        <Menu className="footer-background">
            <Grid Column={3} centered>

            <Grid.Column>
              NAVIGATION
            <hr/>
            <Menu className="list">
              <Menu.Item>About Us</Menu.Item>
              <Menu.Item>Videos</Menu.Item>
              <Menu.Item>Store locations</Menu.Item>
            </Menu>
            </Grid.Column>

            <Grid.Column>
              MAIN MENU
              <hr/>
              <Menu className="list">
                <Menu.Item>Men</Menu.Item>
                <Menu.Item>Women</Menu.Item>
                <Menu.Item>Kids</Menu.Item>
              </Menu>
            </Grid.Column>

            <Grid.Column>
              CONNECT
              <hr/>
              <Menu className="list">
                const InputExampleAction = () => (
                <Input action='Join' placeholder='Enter email address' />
                )
              </Menu>
            </Grid.Column>

          </Grid>

        </Menu>
    )
  }
}

class IslandSnow extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <IslandSnowLogo/>
          <MiddleMenu/>
          <FullWidthImage/>
          <FooterMenu/>
        </div>
    );
  }
}

ReactDOM.render(<IslandSnow/>, document.getElementById('root'));