document.getElementById('title').textContent = searchPageTitle
document.getElementById('search').placeholder = searchInputPlaceholder
document.getElementById('submit').textContent  = searchButtonText
document.getElementById('redirect').textContent = searchRedirect

document.getElementById('submit').addEventListener("click", async (e) => {

    const word = document.getElementById('search').value

    if(word === '') {
        alert(emptyWordWarning)
        return
    }

    if(containsNonAlpha(word)) {
        alert(nonAlphaWordWarning)
        return
    }

    try {
        const response = await fetch(`https://www.fortunedgalab.xyz/api/dictionary?word=${word}`)
        if(!response.ok) {
           handle_error_res(response);
        } else {
            const obj = await response.json()
            document.getElementById('word').textContent = obj.word
            document.getElementById('definition').textContent = obj.def
        }

    } catch (err) {
        alert(networkError)
    }

})

