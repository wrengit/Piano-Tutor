$("#start-piano").click(() => {
  let songSelect = $("select#dropdown-menu").val();
  localStorage.setItem("selectedSong", songSelect);
  window.location.href = "piano.html";
});
