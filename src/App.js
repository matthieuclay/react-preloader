import "./App.css";
import Loading from "./components/Loading";
import { Component } from "react";

class App extends Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: false,
      });
    }, 2000);
  }

  render() {
    if (this.state.loading) {
      return <Loading />;
    }
    return (
      <div className="App">
        <h1>Hello World!</h1>
      </div>
    );
  }
}

export default App;
