import { combineReducers } from "redux";

const songListReducer = () => {
  return [
    {
      title: "Temperature",
      duration: "3:15"
    },
    {
      title: "I want it that way",
      duration: "4:15"
    },
    {
      title: "Love yourself",
      duration: "5:15"
    },
    {
      title: "Without Me",
      duration: "2:15"
    }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  console.log("action", action.type, action.payload);
  if (action.type === "SELECTED_SONG") return action.payload;
  return selectedSong;
};

export default combineReducers({
  songList: songListReducer,
  selectedSong: selectedSongReducer
});
