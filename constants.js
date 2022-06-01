// this is the main url the api endpoints is pointing to
export const baseURL = "https://fire-beryl-music.glitch.me/movies"

// Headers this application uses across the board.
const customHeaders = new Headers({
    'Content-Type': 'application/json'
}) // required by the api to access its value!

// Defaults for fetch request
export const fetchSettings = {
    method: "GET", // or gets
    headers: customHeaders,
}