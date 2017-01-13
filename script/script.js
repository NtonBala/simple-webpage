function toggleParHeight(elem) {
    var par = elem.previousElementSibling;
    if (par.clientHeight === 80) {
        par.style.height = "100%";
        elem.innerHTML = 'Show less...';
    } else {
        par.style.height = "80px";
        elem.innerHTML = 'Read more...';
    }
}
