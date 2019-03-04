JavaScript Npm Use Different Versions of Dependency Demo
========================================================

如果一个项目使用的某个package在它引用的某个dependency中也用到了，但是两者使用的版本不同，
最后将会使用哪个版本呢？

通过这个Demo可以发现，可以有多个版本互不干扰。

```
npm install
npm list
```

Shows dependency list:

```
/Users/peng.li/development/javascript-npm-use-different-versions-of-dependency-demo/main
├─┬ javascript-npm-use-different-versions-of-dependency-demo--hello@0.1.0
│ └── lodash@3.10.1
└── lodash@4.17.11
```
