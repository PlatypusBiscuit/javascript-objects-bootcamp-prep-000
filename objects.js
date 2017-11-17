var playlist = {Jeremy: "One Thirst"};
function updatePlaylist(playlistObj, artist, title) {
  playlistObj[artist] = title;
  return playlistObj;
}
function removeFromPlaylist(playlistObj, artistName) {
  delete playlistObj.artistName;
  return playlistObj;
}
console.log(playlist);
console.log(updatePlaylist(playlist, "Edward Khuil", "Trololo"))
console.log(removeFromPlaylist(playlist, "Jeremy"))

console.log()
console.log(removeFromPlaylist({ Kanye: "Gold Digger" }, "Kanye"))
