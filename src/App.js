import React, { Component } from 'react';
//Connect our app component to our store with the connect method from react-redux
import { connect } from 'react-redux';

//import actions creators
import updateUser, { apiRequest } from './actions/users-actions';

//import bindActionCreators from redux to be able to access props in mapActionToProps
//import { bindActionCreators } from 'redux';

class App extends Component {

  constructor(props) {
    super(props);

    this.onUpdateUser = this.onUpdateUser.bind(this);
  }

  componentDidMount() {
    setTimeout(() =>{
      this.props.onApiRequest();
    }, 1500);
  }

  onUpdateUser(event) {
    this.props.onUpdateUser(event.target.value);
  }

  render() {

    return (
      <div className="App">
        <input onChange={this.onUpdateUser} />
        {this.props.user}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    products: state.products,
    user: state.user,
    userPlusProp: `${state.user} ${props.aRandomProps}` 
  }
};

const mapActionsToProps = {
    onUpdateUser: updateUser,
    onApiRequest: apiRequest
};

// const mapActionsToProps = (dispatch, props) => {
//   return bindActionCreators({
//     onUpdateUser: updateUser
//   }, dispatch)
// };

// const mergeProps = (propsFromState, propsFromDispatch, ownProps) => {
//   console.log(propsFromState, propsFromDispatch, ownProps);
//   return {};
// };

/*
*connect can take 3 arguments
* the 1st one is mapStateToProps which receives the state of the store and from that we can decide which
*props we want to provide for that component.
* 
*the second one is mapDispatchToProps = mapActionToProps and it allows us to dispatch actions from our
*components easily
*
*And the last one is mergeProps
*/
export default connect(mapStateToProps, mapActionsToProps)(App);
