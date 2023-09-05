import React, { Component } from "react";
import { Swiper, SwiperItem, View } from "@tarojs/components";

export default class Test extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    current: 0,
  };

  componentDidMount() { }

  componentWillUnmount() { }

  onAnimationFinish = (e) => {
    const curIndex = e.detail && e.detail.current;
    console.log("---- onAnimationFinish ------", curIndex);

    // 改变state，导致onAnimationFinish触发两次!!!
    this.setState({
      current: curIndex,
    });
  };

  onChange = (e) => {
    console.log("---- onChange ------", e.detail.current);
  };

  render() {
    return (
      <Swiper
        current={this.state.current}
        onAnimationFinish={this.onAnimationFinish}
        onChange={this.onChange}
        vertical
        indicatorDots
        indicatorColor="#999"
        indicatorActiveColor="#333"
        style={{ height: "100vh", width: "100vw" }}
      >
        <SwiperItem>
          <View style={{ background: "red", height: "100%" }}>0</View>
        </SwiperItem>
        <SwiperItem>
          <View style={{ background: "yellow", height: "100%" }}>1</View>
        </SwiperItem>
        <SwiperItem>
          <View style={{ background: "green", height: "100%" }}>2</View>
        </SwiperItem>
      </Swiper>
    );
  }
}
