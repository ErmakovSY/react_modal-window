import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { Wrapper, Header, Content, Footer, Title, Text, Icon, Overlay, Close, Button } from './../styledComponents.js';
import * as modalActions from './../../actions/modalActions.js';

class Modal extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  componentWillMount = () => {
    this.props.toggleMogal(this.props.show);
  }

  componentWillReceiveProps = (nextProps) => {
    this.props.toggleMogal(nextProps.show);
  }

  closeModal = () => {
    console.log("click")
    this.props.toggleMogal(false);
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
    const { title, text, type, show } = this.props;
    const icon = this.getIcon(type);
    return (
      <Overlay hidden={!show}>
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

// Modal.propTypes = {
//   title: PropTypes.string.isRequired,
//   text: PropTypes.string.isRequired,
//   type: PropTypes.oneOf(['success', 'notify', 'warning', 'error']).isRequired,
//   visible: PropTypes.bool.isRequired
// }

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    // You can now say this.props.show
    show: state.modal.show
  }
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
  return {
  // You can now say this.props.toggleMogal
    toggleMogal: show => dispatch(modalActions.toggleMogal(show))
  }
};

// Use connect to put them together
export default connect(mapStateToProps, mapDispatchToProps)(Modal);