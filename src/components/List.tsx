import React from "react";
import ListView from "../components/ListView";

export interface State {
  name: string;
  dataInfo: {
    chengpinInfo: [];
  };
}

class List extends React.Component<{}, State> {
  public constructor(props: any) {
    super(props);
    this.state = {
      name: "List",
      dataInfo: {
        chengpinInfo: []
      }
    };
  }

  componentDidMount() {
    fetch("http://iwenwiki.com/api/blueberrypai/getChengpinInfo.php")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({
          dataInfo: data
        });
      });
  }

  public render() {
    const { name, dataInfo } = this.state;
    return (
      <div>
        {name}
        <br />
        {dataInfo.chengpinInfo.length > 0 ? (
          <ul>
            {dataInfo.chengpinInfo.map((element, index) => {
              return <ListView key={index} data={element} />;
            })}
          </ul>
        ) : (
          <div>数据正在加载中。。。</div>
        )}
      </div>
    );
  }
}

export default List;
