const start = () => NProgress.start()
const done = () => NProgress.done()

document.querySelector("#progress").addEventListener("change", (event) => {
  if (event.target.checked) {
    window.navigation.addEventListener("navigate", start)
    window.navigation.addEventListener("navigateerror", done)
    window.navigation.addEventListener("navigatesuccess", done)
  } else {
    window.navigation.removeEventListener("navigate", start)
    window.navigation.removeEventListener("navigateerror", done)
    window.navigation.removeEventListener("navigatesuccess", done)
  }
})
