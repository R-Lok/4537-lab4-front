function containsNonAlpha(str) {
    //ChatGPT got me the regex to test whether a string contains any characters that are non alphabetical or '-'
    return /[^a-zA-Z-]/.test(str);
  }

  async function handle_error_res(res) {
            const resText = await res.json()
            alert(resText.status)
}