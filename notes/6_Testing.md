#### 6. Testing

- `BDD` - [Behavior Driven Development](http://toolsqa.com/cucumber/behavior-driven-development/)
	- How to write test

- Unit Testing
	- Testing a particular function

- Integration Testing
	- Type of test

```sh
☁  Desktop  mkdir testing-example
☁  Desktop  cd testing-example
☁  testing-example  npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (testing-example)
version: (1.0.0)
description:
entry point: (index.js) server.js
test command:
git repository:
keywords:
license: (MIT)
About to write to /Users/kanishka/Desktop/testing-example/package.json:

{
  "name": "testing-example",
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
☁  testing-example  npm install express --save
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN testing-example@1.0.0 No description
npm WARN testing-example@1.0.0 No repository field.

+ express@4.16.3
added 49 packages from 47 contributors in 2.845s
☁  testing-example  npm install body-parser --save
npm WARN testing-example@1.0.0 No description
npm WARN testing-example@1.0.0 No repository field.

+ body-parser@1.18.2
updated 1 package in 1.87s
☁  testing-example  npm install morgan --save
npm WARN testing-example@1.0.0 No description
npm WARN testing-example@1.0.0 No repository field.

+ morgan@1.9.0
added 3 packages from 2 contributors in 2.006s
☁  testing-example  npm install lodash --save
npm WARN testing-example@1.0.0 No description
npm WARN testing-example@1.0.0 No repository field.

+ lodash@4.17.5
added 1 package from 2 contributors in 1.65s
☁  testing-example  npm install supertest --save
npm WARN testing-example@1.0.0 No description
npm WARN testing-example@1.0.0 No repository field.

+ supertest@3.0.0
added 17 packages from 15 contributors in 2.317s
☁  testing-example  npm install chai --save
npm WARN testing-example@1.0.0 No description
npm WARN testing-example@1.0.0 No repository field.

+ chai@4.1.2
added 7 packages from 20 contributors in 1.894s
☁  testing-example
```

```sh
☁  testing-example  sudo npm i -g mocha
Password:
/usr/local/bin/mocha -> /usr/local/lib/node_modules/mocha/bin/mocha
/usr/local/bin/_mocha -> /usr/local/lib/node_modules/mocha/bin/_mocha
+ mocha@5.0.4
added 24 packages from 283 contributors in 1.757s
☁  testing-example
```

```sh
☁  testing-example  mocha server/spec.js


  [LIONS]
GET /lions 200 5.783 ms - 2
    ✓ should get all lions
POST /lions 200 11.378 ms - 73
    ✓ should create a lion
POST /lions 200 1.164 ms - 77
DELETE /lions/2 200 1.070 ms - 77
    ✓ should delete a lion
POST /lions 200 0.265 ms - 77
PUT /lions/3 200 0.995 ms - 76
    ✓ should update a lion


  4 passing (86ms)

☁  testing-example
```

```sh
☁  testing-example  npm test

> testing-example@1.0.0 test /Users/kanishka/Desktop/testing-example
> mocha server/spec.js



  [LIONS]
GET /lions 200 5.429 ms - 2
    ✓ should get all lions
POST /lions 200 13.637 ms - 73
    ✓ should create a lion
POST /lions 200 0.845 ms - 77
DELETE /lions/2 200 1.339 ms - 77
    ✓ should delete a lion
POST /lions 200 0.254 ms - 77
PUT /lions/3 200 0.999 ms - 76
    ✓ should update a lion


  4 passing (83ms)

☁  testing-example
```