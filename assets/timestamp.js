const div = document.createElement("div")
div.classList.add("timestamp")
const formatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "numeric",
  minute: "2-digit",
  second: "2-digit",
  fractionalSecondDigits: 3,
})
div.textContent = formatter.format(new Date())
document.body.append(div)
