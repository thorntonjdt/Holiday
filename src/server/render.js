export const renderHeader = helmet => `
  <!DOCTYPE html>
  <html lang="en">
      <head>
          <meta charset="UTF-8">
          ${helmet.title.toString()}
          ${helmet.meta.toString()}
          ${helmet.link.toString()}
          <link rel="stylesheet" href="/assets/client.css">
          <link rel="preload" as="script" href="/assets/vendor.js.gz">
          <link rel="preload" as="script" href="/assets/client.js.gz">
      </head>
      <body ${helmet.bodyAttributes.toString()}>
          <div id="root">
`;

export const renderFooter = () => `
          </div>
          <script src="/assets/vendor.js.gz"></script>
          <script src="/assets/client.js.gz"></script>
      </body>
  </html>
`;
