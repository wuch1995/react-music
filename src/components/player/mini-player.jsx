import React, { Component } from 'react'
import './mini-player.styl'

export default class MiniPlayer extends Component {
  constructor () {
    super()
  }
  render () {
    const { image, name, singer } = this.props
    return (
      <div className="mini-player">
        <div className="icon">
          <div className="imgWrapper" ref="miniWrapper">
            <img src={image} className="cdCls" width="40" height="40"/>
          </div>
        </div>
        <div className="text">
          <h2 className="name">{name}</h2>
          <p className="desc">{singer}</p>
        </div>
        <div className="control">
          {/* <progress-circle radius="radius" percent="percent">
            <i onClick="togglePlaying" className="icon-mini" className="miniIcon"></i>
          </progress-circle> */}
        </div>
        <div className="control">
          <i className="icon-playlist"></i>
        </div>
      </div>
    )
  }
}