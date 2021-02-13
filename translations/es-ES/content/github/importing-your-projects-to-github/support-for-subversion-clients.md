---
title: Soporte para clientes de Subversion
intro: Los repositorios de GitHub pueden accederse desde los clientes de Git y de Subversion (SVN). En este artículo se aborda el uso de un cliente de Subversion en GitHub y algunos problemas comunes que puedes llegar a encontrar.
redirect_from:
  - /articles/support-for-subversion-clients
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

GitHub admite clientes de Subversion por medio del protocolo HTTPS. Utilizamos el puente de Subversion para comunicar los comandos svn a GitHub.

### Funciones de Subversion admitidas en GitHub

#### Control

La primera cosa que desearás realizar es un control de Subversion.  Ya que los clones de Git mantienen un directorio de trabajo (donde editas los archivos) separado de los datos del repositorio, solo hay una rama en el directorio de trabajo a la vez.

Los controles de Subversion son diferentes: combinan los datos del repositorio en los directorios de trabajo, por lo que hay un directorio de trabajo para cada rama y etiqueta que has revisado.  Para los repositorios con muchas ramas y etiquetas, revisar cada cosa puede ser una sobrecarga del ancho de banda, por lo que deberías comenzar con un control parcial.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.copy-clone-url %}

3. Realiza un control vacío del repositorio:
  ```shell
  $ svn co --depth empty https://github.com/<em>user</em>/<em>repo</em>
  > Checked out revision 1.
  $ cd <em>repo</em>
  ```

4. Llega hasta la rama `trunk` (tronco). El puente de Subversion mapea a trunk en la rama HEAD de Git.
  ```shell
  $ svn up trunk
  > A    trunk
  > A    trunk/README.md
  > A    trunk/gizmo.rb
  > Updated to revision 1.
  ```

5. Consigue un control vacío del directorio de `branches` (ramas).  Aquí es donde están todas las ramas non-`HEAD` (no encabezado), y donde harás las ramas de características.
  ```shell
  $ svn up --depth empty branches
  Updated to revision 1.
  ```

#### Crear ramas

También puedes crear ramas usando el puente de Subversion a GitHub.

Desde tu cliente de svn, asegúrate de que la rama predeterminada es la más reciente actualizando `trunk`:
```shell
$ svn up trunk
> At revision 1.
```

A continuación, puedes utilizar `svn copy` para crear una nueva rama:
```shell
$ svn copy trunk branches/more_awesome
> A    branches/more_awesome
$ svn commit -m 'Added more_awesome topic branch'
> Adding    branches/more_awesome

> Revisión confirmada 2.
```

Puedes confirmar que la nueva rama existe en el menú desplegable de la rama del repositorio:

![branch-snapshot](/assets/images/help/branch/svnflow-branch-snapshot.png)

También puedes confirmar la nueva rama por medio de la línea de comando:

```shell
$ git fetch
> From https://github.com/<em>user</em>/<em>repo</em>/
> * [new branch]    more_awesome -> origin/more_awesome
```

#### Realizar confirmaciones de cambios en Subversion

Después de haber agregado algunas características y haber arreglado algunos errores, desearás confirmar estos cambios en GitHub. Esto funciona de la misma forma en la que estás acostumbrado en Subversion. Edita tus archivos y utiliza `svn commit` para registrar tus cambios:

```shell
$ svn status
> M    gizmo.rb
$ svn commit -m 'Guard against known problems'
> Sending    more_awesome/gizmo.rb
> Transmitiendo los datos del archivo.
> Revisión confirmada 3.
$ svn status
> ?    test
$ svn add test
> A    test
> A    test/gizmo_test.rb
$ svn commit -m 'Test coverage for problems'
> Adding    more_awesome/test
> Adding    more_awesome/test/gizmo_test.rb
> Transmitiendo los datos del archivo.
> Revisión confirmada 4.
```

#### Alternar entre ramas

Para alternar entre ramas, probablemente desearás comenzar con un control del `trunk` (tronco):

```shell
$ svn co --depth empty https://github.com/<em>user</em>/<em>repo</em>/trunk
```

Luego, puedes alternar a otra rama:

```shell
$ svn switch https://github.com/<em>user</em>/<em>repo</em>/branches/more_awesome
```

### Encontrar el SHA de confirmación de Git para una confirmación de Subversion

El servidor de Subversion de GitHub muestra el sha de confirmación de Git para cada confirmación de Subversion.

Para ver el SHA de confirmación, deberías solicitar la propiedad remota sin versión de `git-commit`.

```shell
$ svn propget git-commit --revprop -r HEAD https://github.com/<em>user</em>/<em>repo</em>
05fcc584ed53d7b0c92e116cb7e64d198b13c4e3
```

Con este SHA de confirmación, puedes, por ejemplo, consultar la correspondiente confirmación Git en GitHub.

### Further reading

* "[Propiedades de Subversion admitidas por GitHub](/articles/subversion-properties-supported-by-github)"
