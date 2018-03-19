#### 5. Error Handling

```sh
☁  routers-example [master] ⚡ node inspect server/server.js
< Debugger listening on ws://127.0.0.1:9229/24a6f92f-0729-4dee-b049-c7834584fd4b
< For help see https://nodejs.org/en/docs/inspector
< Debugger attached.
Break on start in server/server.js:1
> 1 (function (exports, require, module, __filename, __dirname) { var express = require('express');
  2 var bodyParser = require('body-parser');
  3 var app = express();
debug>
```

- [``node-inspector``](https://www.npmjs.com/package/node-inspector)