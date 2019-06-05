import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import {Provider} from 'react-redux'
import {App} from './App';
import {store} from './client'

function renderHTML(html) {
  return `
      <!doctype html>
      <html>
        <head>
          <meta charset=utf-8>
          <title>The app</title>
          ${process.env.NODE_ENV === 'development' ? '' : '<link href="/css/main.css" rel="stylesheet" type="text/css">'}
        </head>
        <body>
          <div id="root">${html}</div>
          <script src="/js/main.js"></script>
        </body>
      </html>
  `;
}

export default function serverRenderer() {
  return (req, res) => {
    let appStore = store;

    const root = (
      <Provider store={appStore}>
        <StaticRouter>
          <App />
        </StaticRouter>
      </Provider>
    );

    const htmlString = renderToString(root);

    res.send(renderHTML(htmlString));
  };
}