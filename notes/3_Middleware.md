#### 3. Middleware

```sh
☁  Desktop  mkdir middleware-example
☁  Desktop  cd middleware-example
☁  middleware-example  npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (middleware-example)
version: (1.0.0)
description:
entry point: (index.js) server.js
test command:
git repository:
keywords:
license: (MIT)
About to write to /Users/kanishka/Desktop/middleware-example/package.json:

{
  "name": "middleware-example",
  "version": "1.0.0",
  "description": "",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "kanishka <kanishka.s9@gmail.com> (https://kan1shka9.github.io/)",
  "license": "MIT"
}


Is this ok? (yes)
☁  middleware-example  npm install express --save
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN middleware-example@1.0.0 No description
npm WARN middleware-example@1.0.0 No repository field.

+ express@4.16.3
added 49 packages from 47 contributors in 2.79s
☁  middleware-example  npm install body-parser --save
npm WARN middleware-example@1.0.0 No description
npm WARN middleware-example@1.0.0 No repository field.

+ body-parser@1.18.2
updated 1 package in 1.202s
☁  middleware-example  npm install morgan --save
npm WARN middleware-example@1.0.0 No description
npm WARN middleware-example@1.0.0 No repository field.

+ morgan@1.9.0
added 3 packages from 2 contributors in 1.5s
☁  middleware-example  npm install lodash --save
npm WARN middleware-example@1.0.0 No description
npm WARN middleware-example@1.0.0 No repository field.

+ lodash@4.17.5
added 1 package from 2 contributors in 1.629s
☁  middleware-example  ll
total 40
drwxr-xr-x  54 kanishka  staff   1.7K Mar 19 11:35 node_modules
-rw-r--r--   1 kanishka  staff    14K Mar 19 11:35 package-lock.json
-rw-r--r--   1 kanishka  staff   403B Mar 19 11:35 package.json
☁  middleware-example
```

```sh
☁  middleware-example  tree -L 2
.
├── client
│   ├── app.js
│   ├── index.html
│   └── style.css
├── node_modules
│   ├── accepts
│   ├── array-flatten
│   ├── basic-auth
│   ├── body-parser
│   ├── bytes
│   ├── content-disposition
│   ├── content-type
│   ├── cookie
│   ├── cookie-signature
│   ├── debug
│   ├── depd
│   ├── destroy
│   ├── ee-first
│   ├── encodeurl
│   ├── escape-html
│   ├── etag
│   ├── express
│   ├── finalhandler
│   ├── forwarded
│   ├── fresh
│   ├── http-errors
│   ├── iconv-lite
│   ├── inherits
│   ├── ipaddr.js
│   ├── lodash
│   ├── media-typer
│   ├── merge-descriptors
│   ├── methods
│   ├── mime
│   ├── mime-db
│   ├── mime-types
│   ├── morgan
│   ├── ms
│   ├── negotiator
│   ├── on-finished
│   ├── on-headers
│   ├── parseurl
│   ├── path-to-regexp
│   ├── proxy-addr
│   ├── qs
│   ├── range-parser
│   ├── raw-body
│   ├── safe-buffer
│   ├── send
│   ├── serve-static
│   ├── setprototypeof
│   ├── statuses
│   ├── type-is
│   ├── unpipe
│   ├── utils-merge
│   └── vary
├── package-lock.json
├── package.json
└── server
    └── server.js

54 directories, 6 files
☁  middleware-example
```

```sh
☁  middleware-example  nodemon server/server.js
[nodemon] 1.17.2
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node server/server.js`
on port 3000
```