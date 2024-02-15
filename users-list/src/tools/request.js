export default function request (url, options) {
  return new Promise((resolve, reject) => {
    fetch(url, options)
      .then(response => response.json())
      .then(data => resolve({ data }))
      .catch(err => reject(err))
  })
}
