import React from "react";

export interface Props {
  title: string;
  name: string;
  sendHandler: any;
}

export interface State {
  count: number;
}

class Hello extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props);
    this.state = {
      count: 1000
    };
  }

  public clickHandler() {
    this.setState({
      count: 2000
    });
  }

  public sendHandler(data: string) {
    this.props.sendHandler(data);
  }

  public render() {
    const { title, name } = this.props;
    return (
      <div>
        {title} : {name} : {this.state.count}
        <br />
        <button onClick={this.clickHandler.bind(this)}>点击</button>
        <br />
        <button onClick={this.sendHandler.bind(this, "biu biu biu...")}>
          发送
        </button>
      </div>
    );
  }
}

export default Hello;
