export const currentSong = ({ playlist, currentIndex }) => {
  return playlist[currentIndex] || {}
}
