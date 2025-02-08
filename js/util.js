function containsNonAlpha(str) {
    //ChatGPT got me the regex to test whether a string contains non-alphabetical characters
    return /[^a-zA-Z-]/.test(str);
  }

  async function handle_error_res(res) {
    switch(res.status) {
        case 400:
            alert(badRequest)
            break
        case 404:
            const resText = await res.json()
            alert(resText.status)
    }
}