#### 4. Routers

```sh
☁  Desktop  mkdir routers-example
☁  Desktop  cd routers-example
☁  routers-example  npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (routers-example)
version: (1.0.0)
description:
entry point: (index.js) server.js
test command:
git repository:
keywords:
license: (MIT)
About to write to /Users/kanishka/Desktop/routers-example/package.json:

{
  "name": "routers-example",
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
☁  routers-example  npm install express --save
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN routers-example@1.0.0 No description
npm WARN routers-example@1.0.0 No repository field.

+ express@4.16.3
added 49 packages from 47 contributors in 2.831s
☁  routers-example  npm install body-parser --save
npm WARN routers-example@1.0.0 No description
npm WARN routers-example@1.0.0 No repository field.

+ body-parser@1.18.2
updated 1 package in 2.204s
☁  routers-example  npm install morgan --save
npm WARN routers-example@1.0.0 No description
npm WARN routers-example@1.0.0 No repository field.

+ morgan@1.9.0
added 3 packages from 2 contributors in 1.508s
☁  routers-example  npm install lodash --save
npm WARN routers-example@1.0.0 No description
npm WARN routers-example@1.0.0 No repository field.

+ lodash@4.17.5
added 1 package from 2 contributors in 1.589s
☁  routers-example  ll
total 40
drwxr-xr-x  54 kanishka  staff   1.7K Mar 19 12:23 node_modules
-rw-r--r--   1 kanishka  staff    14K Mar 19 12:23 package-lock.json
-rw-r--r--   1 kanishka  staff   400B Mar 19 12:23 package.json
☁  routers-example
```

```sh
☁  Desktop  tree routers-example -L 2
routers-example
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
    ├── lions.js
    ├── server.js
    └── tigers.js

54 directories, 8 files
☁  Desktop
```

```sh
☁  routers-example  nodemon server/server.js
[nodemon] 1.17.2
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node server/server.js`
on port 3000
```

```sh
☁  ~  brew install httpie
```

```sh
☁  ~  http localhost:3000/lions
HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 2
Content-Type: application/json; charset=utf-8
Date: Mon, 19 Mar 2018 19:48:52 GMT
ETag: W/"2-l9Fw4VUO7kr8CvBlt4zaMCqXZ0w"
X-Powered-By: Express

[]

☁  ~
```

```sh
☁  ~  http localhost:3000/tigers
HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 2
Content-Type: application/json; charset=utf-8
Date: Mon, 19 Mar 2018 19:49:16 GMT
ETag: W/"2-l9Fw4VUO7kr8CvBlt4zaMCqXZ0w"
X-Powered-By: Express

[]

☁  ~
```

```sh
☁  ~  http POST localhost:3000/tigers name=mat
HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 23
Content-Type: application/json; charset=utf-8
Date: Mon, 19 Mar 2018 19:49:33 GMT
ETag: W/"17-WYikVrcK9F9UGpN91Sbhbsbf2n0"
X-Powered-By: Express

{
    "id": "1",
    "name": "mat"
}

☁  ~
```

```sh
☁  ~  http localhost:3000/tigers
HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 25
Content-Type: application/json; charset=utf-8
Date: Mon, 19 Mar 2018 19:49:40 GMT
ETag: W/"19-N1ELhG8sh7ghvholpG8hTTSWGu4"
X-Powered-By: Express

[
    {
        "id": "1",
        "name": "mat"
    }
]

☁  ~
```