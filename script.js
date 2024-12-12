var now = new Date();
var datetime = now.toLocaleString();
document.getElementById("datetime").innerHTML = datetime;

function randomnumber() {
  return Math.floor(Math.random() * 61);
}

document.querySelectorAll(".upload-time-1").forEach(function(element) {
  element.innerHTML = randomnumber() + " mins ago";
});

fetch('nav-footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('navbar').innerHTML = data;
    // document.getElementById('footers').innerHTML = data;
  });
fetch('footer.html')
  .then(response => response.text())
  .then(data => {
    // document.getElementById('navbar').innerHTML = data;
    document.getElementById('footers').innerHTML = data;
  });