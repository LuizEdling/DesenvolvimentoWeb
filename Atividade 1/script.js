function showSection(sectionId) {
    var sections = document.querySelectorAll('.section');
    console.log(sections);
    sections.forEach(section => {
        section.style.display = "none";
    });

    var sectionToShow = document.getElementById(sectionId);
    sectionToShow.style.display = "block"
}

document.querySelectorAll('nav a').forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault(); 
        var sectionId = this.getAttribute('href').substr(1); 
        showSection(sectionId); 
    });
});

showSection('home');