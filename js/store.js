document.getElementById('title').textContent = storePageTitle
document.getElementById('word-label').textContent = storeWordLabel
document.getElementById('definition-label').textContent = storeDefinitionLabel
document.getElementById('submit').textContent = storeButton
document.getElementById('definition').placeholder = storeDefinitionPlaceholder

document.getElementById('submit').addEventListener("click", async (e) => {
    e.preventDefault()
    const word = document.getElementById('word').value
    const definition = document.getElementById('definition').value

    if(word === '') {
        alert("Word cannot be empty.")
        return
    }

    if(definition === '') {
        alert("Definition cannot be empty.")
        return
    }

    const response = await submitWord(word, definition)
    //fill in the logic after
})

async function submitWord(word, def) {
    //fill in request when ready
}