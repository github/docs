要排除故障，请先决定您是否真的想要使用子模块，它是 Git 项目内的 Git 项目； 子模块有时是意外创建的。

如果不想使用子模块，请删除子模块，用子模块的路径替换 <em>PATH TO-SUBMODULE</em>：
```shell
$ git submodule deinit <em>PATH-TO-SUBMODULE</em>
$ git rm <em>PATH-TO-SUBMODULE</em>
$ git commit -m "Remove submodule"
$ rm -rf .git/modules/<em>PATH-TO-SUBMODULE</em>
```
