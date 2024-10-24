# Parcel weird memory bug reproduceable project


## How to run
```bash
npm install
npm run start
```

## This is the output I am getting:
```
> parcel-bug@1.0.0 start
> parcel src/index.html

(node:72389) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
Server running at http://localhost:1234
⠹ Building index.js...
node(72389,0x17026f000) malloc: Incorrect checksum for freed object 0x120950400: probably modified after being freed.
Corrupt value: 0x6130666430333162
node(72389,0x17067b000) malloc: Incorrect checksum for freed object 0x121100600: probably modified after being freed.
Corrupt value: 0x6130666430333162
node(72389,0x17026f000) malloc: *** set a breakpoint in malloc_error_break to debug
node(72389,0x17067b000) malloc: *** set a breakpoint in malloc_error_break to debug
Abort trap: 6
```
