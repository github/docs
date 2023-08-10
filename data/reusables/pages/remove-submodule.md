To troubleshoot, first decide if you actually want to use a submodule, which is a Git project inside a Git project; submodules are sometimes created accidentally.

If you don't want to use a submodule, remove the submodule, replacing PATH-TO-SUBMODULE with the path to the submodule:

```shell
git submodule deinit PATH-TO-SUBMODULE
git rm PATH-TO-SUBMODULE
git commit -m "Remove submodule"
rm -rf .git/modules/PATH-TO-SUBMODULE
```
