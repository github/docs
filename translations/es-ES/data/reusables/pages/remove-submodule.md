Para resolver problemas, primero decide si quieres utilizar un submódulo, lo cual es un proyecto de Git dentro de otro proyecto de Git; ya que estos a veces se crean por accidente.

Si no quieres utilizar un submódilo, elimínalo reemplazando <em>PATH-TO-SUBMODULE</em> con la ruta del submódulo:
```shell
$ git submodule deinit <em>PATH-TO-SUBMODULE</em>
$ git rm <em>PATH-TO-SUBMODULE</em>
$ git commit -m "Remove submodule"
$ rm -rf .git/modules/<em>PATH-TO-SUBMODULE</em>
```
