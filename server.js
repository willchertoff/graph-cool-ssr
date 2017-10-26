const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dir: '.', dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()

  // Use the `renderApp` utility defined below to serve pages
  server.get('/', (req, res) => {
    renderApp(req, res, '/')
  })

  server.get('/appointments', (req, res) => {
    renderApp(req, res, '/appointments')
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})

function renderApp (req, res, pagePath, queryParams) {
  app.renderToHTML(req, res, pagePath, queryParams)
    .then((html) => {

      res.send(html)
    })
    .catch((err) => {
      app.renderError(err, req, res, pagePath, queryParams)
    })
}
