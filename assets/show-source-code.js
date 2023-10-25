import hljs from "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/es/highlight.min.js"
import javascript from "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/es/languages/javascript.min.js"
hljs.registerLanguage("javascript", javascript)

const $details = parseHTML(`
    <details>
      <summary>JavaScript Source</summary>
      <pre id="sourceCode"><code></code></pre>
    </details>
      `)
const $bottom = document.querySelector("#bottom")
$bottom.parentNode.insertBefore($details, $bottom)
document.querySelector("#sourceCode code").textContent = dedent(
  document.querySelector("#mainScript").textContent
)
document.querySelector("#sourceCode").classList.add("language-javascript")
hljs.highlightAll()

/**
 * Adapted from https://github.com/dmnd/dedent/tree/v1.5.1
 */
function dedent(str) {
  const lines = str.split("\n")
  let minindent = null
  for (const line of lines) {
    const m = line.match(/^(\s+)\S+/)
    if (m) {
      const indent = m[1].length
      if (!minindent) {
        minindent = indent
      } else {
        minindent = Math.min(minindent, indent)
      }
    }
  }
  if (minindent !== null) {
    return lines
      .map((l) => (l[0] === " " || l[0] === "\t" ? l.slice(minindent) : l))
      .join("\n")
      .trim()
  }
  return str
}

function parseHTML(html) {
  var t = document.createElement("template")
  t.innerHTML = html
  return t.content
}
