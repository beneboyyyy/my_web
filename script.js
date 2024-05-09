let sections = document.querySelectorAll('section');
let navLink = document.querySelectorAll('header navbar a');

window.onscroll = ()=> {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLink.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header navbar a [href*=' + id +']').classList.add('active');
            });
        };
    });
};

function goToFacebook() {
    // Replace 'facebook_username' with the actual username or profile ID
    window.location.href = 'https://www.facebook.com/benedict.galgo.04';
}

function goToInstagram() {
    // Replace 'instagram_username' with the actual username
    window.location.href = 'https://www.instagram.com/beneboyyy/';
}

function goToGitHub() {
    // Replace 'github_username' with the actual username
    window.location.href = 'https://github.com/beneboyyyy';
}