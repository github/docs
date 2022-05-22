To troubleshoot, first decide if you actually want to use a submodule, which is a Git project inside a Git project; submodules are sometimes created accidentally.

If you don't want to use a submodule, remove the submodule, replacing <em>PATH-TO-SUBMODULE</em> with the path to the submodule:
```shell
$ git submodule deinit <em>PATH-TO-SUBMODULE</em>
$ git rm <em>PATH-TO-SUBMODULE</em>
$ git commit -m "Remove submodule"
$ rm -rf .git/modules/<em>PATH-TO-SUBMODULE</em>
```
