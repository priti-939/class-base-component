# React class based component overview

Before React 16.8, Class components were the only way to track state and lifecycle on a React component. Function components were considered "state-less".

With the addition of Hooks, Function components are now almost equivalent to Class components. The differences are so minor that you will probably never need to use a Class component in React.

Even though Function components are preferred, there are no current plans on removing Class components from React.

To define a React component class, you need to extend React.Component

class Welcome extends React.Component {
  render() {
    return <div>Hello, {this.props.name}</div>;
  }
}

### Life cycle diagram

Open [https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/) to view class based component lifecycle methods.


