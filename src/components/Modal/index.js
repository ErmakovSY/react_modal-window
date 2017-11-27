import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { Wrapper, Header, Content, Footer, Title, Text, Icon, Overlay, Close, Button } from './../styledComponents.js';

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    }
  }

  componentWillMount = () => {
    this.setState({
      visible: this.props.visible
    })
  }

  componentWillReceiveProps = () => {
    setTimeout(() => (
      this.setState({
        visible: this.props.visible
      })
    ), 1)
  }

  closeModal = () => {
    this.setState({
      visible: false
    })
  }

  getIcon = (type) => {
    switch(type) {
      case "success": 
        return {
          name: "check", 
          color: "#008500"
        };
      case "notify": 
        return {
          name: "commenting-o", 
          color: "#E6FC3F"
        };
      case "warning": 
        return {
          name: "exclamation-triangle", 
          color: "#A66F00"
        };
      case "error": 
        return {
          name: "times", 
          color: "#BF5430"
        };
      default: 
        return {
          name: "exclamation", 
          color: "#FFBF40"
        };
    }
  }

  render = () => {
    const { title, text, type } = this.props;
    const { visible } = this.state;
    const icon = this.getIcon(type);
    return (
      <Overlay hidden={!visible}>
        <Wrapper>
          <Header>
            <Title>
              {title}
            </Title>
            <Close onClick={this.closeModal}>
              <FontAwesome name="times" />
            </Close>
          </Header>
          <Content>
            <Icon iconColor={icon.color}>
              <FontAwesome name={icon.name} />
            </Icon>
            <Text>
              {text}
            </Text>
          </Content>
          <Footer>
            <Button>
              <span>OK</span>
            </Button>
          </Footer>
        </Wrapper>
      </Overlay>
    )
  }
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['success', 'notify', 'warning', 'error']).isRequired,
  visible: PropTypes.bool.isRequired
}