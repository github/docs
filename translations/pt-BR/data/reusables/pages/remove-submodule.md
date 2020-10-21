Para solucionar problemas, primeiro decida se você realmente deseja usar um submódulo, que é um projeto do Git dentro de um projeto Git; às vezes, submódulos são criados acidentalmente.

Se você não desejar usar um submódulo, remova o submódulo, substituindo <em>PATH-TO-SUBMODULE</em> pelo caminho para o submódulo:
```shell
$ git submodule deinit <em>PATH-TO-SUBMODULE</em>
$ git rm <em>PATH-TO-SUBMODULE</em>
$ git commit -m "Remove submodule"
$ rm -rf .git/modules/<em>PATH-TO-SUBMODULE</em>
```
