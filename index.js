const { JSDOM } = require("jsdom");

const options = {};
const dom = new JSDOM(`<!DOCTYPE html><body></body>`, options);

const template = dom.window.document.createElement('template')
template.innerHTML = '<div>foo</div>bar'
const fragment = template.content
const nodeIterator = dom.window.document.createNodeIterator(fragment)
let node
let visited = false
while ((node = nodeIterator.nextNode())) {
    if (node.data && node.data === 'foo') {
        // removing the following line makes the test successful
        node.parentNode?.removeChild(node)
    } else if (node.data && node.data === 'bar') {
        visited = true
    }
}
console.log(visited ? 'success' : 'failure')
