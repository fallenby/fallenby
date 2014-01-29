window.onload = function() {
  init();
}

function init()
{
  var workElements = document.getElementsByClassName('contentBodyWorksWork');
  for (var i = 0; i < workElements.length; ++i)
  {
    workElements[i].style.width = (100 / workElements.length) + "%";
  }
}
