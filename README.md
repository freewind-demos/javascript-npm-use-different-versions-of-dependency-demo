JavaScript Npm Use Different Versions of Dependency Demo
========================================================

(注：yarn使用了一样的方案，但是pnpm不是，它使用的是npm@2中的无flat的方案）

如果一个项目使用的某个package在它引用的某个dependency中也用到了，但是两者使用的版本不同，
最后将会使用哪个版本呢？

通过这个Demo可以发现，有多种情况：
1. 如果两处要求的版本是兼容的（比如`4.17.11`和`^4.0.1`），则会使用同时满足两者的的版本
2. 如果不兼容，比如(`4.17.11`和`3.10.1`），则各自使用各自版本

运行`npm list`:

```
$ npm list
javascript-npm-use-different-versions-of-dependency-demo/main
├─┬ javascript-npm-use-different-versions-of-dependency-demo--hello@0.1.0
│ └── lodash@3.10.1
├─┬ javascript-npm-use-different-versions-of-dependency-demo--hello2@0.1.0
│ └── lodash@4.17.11 deduped
└── lodash@4.17.11
```

在`main`项目下的`node_modules`可以看出：

![demo](./images/demo.png)

```
npm install
npm list
```

Shows dependency list:

```
/Users/peng.li/development/javascript-npm-use-different-versions-of-dependency-demo/main
├─┬ javascript-npm-use-different-versions-of-dependency-demo--hello@0.1.0
│ └── lodash@3.10.1
├─┬ javascript-npm-use-different-versions-of-dependency-demo--hello2@0.1.0
│ └── lodash@4.17.11 deduped
└── lodash@4.17.11
```

下面这篇文章讲得特别好：

https://medium.com/learnwithrahul/understanding-npm-dependency-resolution-84a24180901b

要点：
1. 在安装的过程中，如果某个package第一次被使用，它将会被放在node_modules根目录下
2. 如果它的不同版本（不兼容版本）之后又被引用到，则后来版本会被安装在dependency的node_modules下
3. 所以安装的顺序非常重要，不同的安装顺序会导致项目node_modules下的package的版本不一致
4. 所以package.json中，依赖的声明顺序也非常重要，所以通常使用字典序，以保证行为一致

感觉npm的这种处理还是比较复杂的
