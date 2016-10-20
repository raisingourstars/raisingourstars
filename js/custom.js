window.onresize = function(event) {
    adjustProjectName();

}

function adjustProjectName() {
	var nameAsee = document.getElementById('proj-name-asee');
    var nameBio = document.getElementById('proj-name-bio');
    if ((window.innerWidth < 670) && (window.innerWidth >= 495))  {
        nameAsee.innerHTML = '2016 ASEE';
    } else if ((window.innerWidth < 494)) {
        nameAsee.innerHTML = 'ASEE PSW';
        nameBio.innerHTML = 'Borlaung';
    } else {
        nameAsee.innerHTML = '2016 ASEE PSW';
        nameBio.innerHTML = 'Borlaung Bio';
    }
}
