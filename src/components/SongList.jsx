import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../action-creator";

const SongList = props => {
  const songs = props.songList.map(song => {
    return (
      <div key={song.title} className="item">
        <div className="right floated content">
          <button
            className="ui button primary"
            onClick={() => props.selectSong(song)}
          >
            Select
          </button>
        </div>
        <div className="content">{song.title}</div>
      </div>
    );
  });
  return <div className="song-list ui divided list">{songs}</div>;
};

const mapStateToProps = state => {
  return {
    songList: state.songList
  };
};
export default connect(
  mapStateToProps,
  { selectSong: selectSong } //{selectSong}
)(SongList);
