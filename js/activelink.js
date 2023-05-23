function setActiveLink(index) {
    var links = document.querySelectorAll('div li a');
  
    // Remove the "active" class from all links
    for (var i = 0; i < links.length; i++) {
      links[i].classList.remove('active');
    }
  
    // Add the "active" class to the clicked link
    links[index].classList.add('active');
  }
  
  // Set the active link based on the current URL
  document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('div li a');
    var currentUrl = window.location.href;
  
    for (var i = 0; i < links.length; i++) {
      if (links[i].href === currentUrl) {
        setActiveLink(i);
        break;
      }
    }
  });
  