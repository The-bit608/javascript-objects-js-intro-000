var playlist = {
  philOchs: 'Changes'
}
function updatePlaylist (playlist, artistName, songTitle) {
playlist[artistName] = songTitle
return playlist
}
function removeFromPlaylist (playlist, artistName) {
playlist[artistName]
return playlist
}
