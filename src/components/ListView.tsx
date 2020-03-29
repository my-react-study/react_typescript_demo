import React from "react";
export interface Props {
  data: {
    title: string;
    content: string;
    img: string;
  };
}

class ListView extends React.Component<Props, {}> {
  public constructor(props: Props) {
    super(props);
  }

  public render() {
    return (
      <div>
        <p>{this.props.data.title}</p>
      </div>
    );
  }
}

export default ListView;
