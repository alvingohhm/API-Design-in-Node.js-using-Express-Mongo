#### 11. Authentication

```sh
☁  Desktop  mkdir authentication-example
☁  Desktop  cd authentication-example
☁  authentication-example  npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (authentication-example)
version: (1.0.0)
description:
entry point: (index.js)
test command:
git repository:
keywords:
license: (MIT)
About to write to /Users/kanishka/Desktop/authentication-example/package.json:

{
  "name": "authentication-example",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "kanishka <kanishka.s9@gmail.com> (https://kan1shka9.github.io/)",
  "license": "MIT"
}


Is this ok? (yes)
☁  authentication-example
☁  authentication-example  npm i
npm WARN deprecated formidable@1.0.17: Old versions of Formidable are not compatible with the current Node.js; Upgrade to 1.2.0 or later

> bcrypt@0.8.7 install /Users/kanishka/Desktop/authentication-example/node_modules/bcrypt
> node-gyp rebuild

  CXX(target) Release/obj.target/bcrypt_lib/src/blowfish.o
  CXX(target) Release/obj.target/bcrypt_lib/src/bcrypt.o
  CXX(target) Release/obj.target/bcrypt_lib/src/bcrypt_node.o
  SOLINK_MODULE(target) Release/bcrypt_lib.node
npm WARN authentication-example@1.0.0 No description
npm WARN authentication-example@1.0.0 No repository field.

added 47 packages from 60 contributors, removed 1 package and updated 7 packages in 17.332s
☁  authentication-example
```

```sh
☁  authentication-example  mongod
2018-03-23T21:20:45.121-0700 I CONTROL  [initandlisten] MongoDB starting : pid=2339 port=27017 dbpath=/data/db 64-bit host=Kanishkas-MacBook-Pro.local
2018-03-23T21:20:45.122-0700 I CONTROL  [initandlisten] db version v3.6.3
2018-03-23T21:20:45.122-0700 I CONTROL  [initandlisten] git version: 9586e557d54ef70f9ca4b43c26892cd55257e1a5
2018-03-23T21:20:45.122-0700 I CONTROL  [initandlisten] OpenSSL version: OpenSSL 0.9.8zh 14 Jan 2016
2018-03-23T21:20:45.122-0700 I CONTROL  [initandlisten] allocator: system
2018-03-23T21:20:45.122-0700 I CONTROL  [initandlisten] modules: none
2018-03-23T21:20:45.122-0700 I CONTROL  [initandlisten] build environment:
2018-03-23T21:20:45.122-0700 I CONTROL  [initandlisten]     distarch: x86_64
2018-03-23T21:20:45.122-0700 I CONTROL  [initandlisten]     target_arch: x86_64
2018-03-23T21:20:45.122-0700 I CONTROL  [initandlisten] options: {}
2018-03-23T21:20:45.124-0700 I -        [initandlisten] Detected data files in /data/db created by the 'wiredTiger' storage engine, so setting the active storage engine to 'wiredTiger'.
2018-03-23T21:20:45.125-0700 I STORAGE  [initandlisten] wiredtiger_open config: create,cache_size=3584M,session_max=20000,eviction=(threads_min=4,threads_max=4),config_base=false,statistics=(fast),log=(enabled=true,archive=true,path=journal,compressor=snappy),file_manager=(close_idle_time=100000),statistics_log=(wait=0),verbose=(recovery_progress),
2018-03-23T21:20:45.889-0700 I STORAGE  [initandlisten] WiredTiger message [1521865245:889738][2339:0x7fffb71d3340], txn-recover: Main recovery loop: starting at 4/10496
2018-03-23T21:20:45.997-0700 I STORAGE  [initandlisten] WiredTiger message [1521865245:997116][2339:0x7fffb71d3340], txn-recover: Recovering log 4 through 5
2018-03-23T21:20:46.070-0700 I STORAGE  [initandlisten] WiredTiger message [1521865246:70146][2339:0x7fffb71d3340], txn-recover: Recovering log 5 through 5
2018-03-23T21:20:46.227-0700 I CONTROL  [initandlisten]
2018-03-23T21:20:46.227-0700 I CONTROL  [initandlisten] ** WARNING: Access control is not enabled for the database.
2018-03-23T21:20:46.227-0700 I CONTROL  [initandlisten] **          Read and write access to data and configuration is unrestricted.
2018-03-23T21:20:46.227-0700 I CONTROL  [initandlisten]
2018-03-23T21:20:46.227-0700 I CONTROL  [initandlisten] ** WARNING: This server is bound to localhost.
2018-03-23T21:20:46.227-0700 I CONTROL  [initandlisten] **          Remote systems will be unable to connect to this server.
2018-03-23T21:20:46.227-0700 I CONTROL  [initandlisten] **          Start the server with --bind_ip <address> to specify which IP
2018-03-23T21:20:46.227-0700 I CONTROL  [initandlisten] **          addresses it should serve responses from, or with --bind_ip_all to
2018-03-23T21:20:46.227-0700 I CONTROL  [initandlisten] **          bind to all interfaces. If this behavior is desired, start the
2018-03-23T21:20:46.227-0700 I CONTROL  [initandlisten] **          server with --bind_ip 127.0.0.1 to disable this warning.
2018-03-23T21:20:46.227-0700 I CONTROL  [initandlisten]
2018-03-23T21:20:46.313-0700 I FTDC     [initandlisten] Initializing full-time diagnostic data capture with directory '/data/db/diagnostic.data'
2018-03-23T21:20:46.313-0700 I NETWORK  [initandlisten] waiting for connections on port 27017
```

```sh
☁  authentication-example  npm start
```

```sh
☁  ~  http POST http://localhost:3000/api/users username=person
☁  ~  http POST http://localhost:3000/api/categories name=cats
☁  ~  http GET http://localhost:3000/api/users
```