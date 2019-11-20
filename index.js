
window.onload = function() {
    let songSelect = $("select#dropdown-menu").val();
    localStorage.setItem("selectedSong",songSelect);
  }