document.getElementById('title').textContent = searchPageTitle
document.getElementById('search').placeholder = searchInputPlaceholder
document.getElementById('submit').textContent  = searchButtonText

document.getElementById('submit').addEventListener("click", (e) => {

    const word = document.getElementById('search').value

    if(word === '') {
        alert(emptyWordWarning)
        return
    }

    if(containsNonAlpha(word)) {
        alert(nonAlphaWordWarning)
        return
    }

    //fill in request here later

})