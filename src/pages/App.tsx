import React from "react";
import Hello from "../components/Hello";
import List from "../components/List";
import CountCon from "../container/CounterCon";

class App extends React.Component {
  public sendHandler(data: string) {
    console.log(data);
  }
  render() {
    return (
      <div>
        <h1>
          <Hello title="你好" name="tom" sendHandler={this.sendHandler} />
          <hr />
          <List />
          <hr />
          <CountCon />
        </h1>
      </div>
    );
  }
}

export default App;
