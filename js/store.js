document.getElementById('title').textContent = storePageTitle
document.getElementById('word-label').textContent = storeWordLabel
document.getElementById('definition-label').textContent = storeDefinitionLabel
document.getElementById('submit').textContent = storeButton
document.getElementById('definition').placeholder = storeDefinitionPlaceholder
document.getElementById('redirect').textContent = storeRedirect

document.getElementById('submit').addEventListener("click", async (e) => {
    e.preventDefault()
    const word = document.getElementById('word').value
    const definition = document.getElementById('definition').value

    if(word === '') {
        alert(emptyWordWarning)
        return
    }

    if(containsNonAlpha(word)) {
        alert(nonAlphaWordWarning)
        return
    }

    if(definition === '') {
        alert(emptyDefWarning)
        return
    }

    if(await submitWord(word, definition)) {
        document.getElementById('definition').value = ""
        document.getElementById('word').value = ""
    }
})

async function submitWord(word, def) {

    try {
        const response = await fetch("https://www.fortunedgalab.xyz/api/dictionary", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"word": word, 'def': def})
        }) 
        
        if(!response.ok) {
            await handle_error_res(res)
            return false
        } else {
            const resMsg = await response.json()
            alert(resMsg.status)
            return true        
        }

    } catch (err) {
        alert(networkError)
        return false
    }
}

