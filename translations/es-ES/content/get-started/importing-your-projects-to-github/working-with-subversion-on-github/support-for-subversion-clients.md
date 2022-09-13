---
title: Soporte para clientes de Subversion
intro: Los repositorios de GitHub pueden accederse desde los clientes de Git y de Subversion (SVN). En este artículo se aborda el uso de un cliente de Subversion en GitHub y algunos problemas comunes que puedes llegar a encontrar.
redirect_from:
  - /articles/support-for-subversion-clients
  - /github/importing-your-projects-to-github/support-for-subversion-clients
  - /github/importing-your-projects-to-github/working-with-subversion-on-github/support-for-subversion-clients
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
shortTitle: Support for Subversion clients
ms.openlocfilehash: 49422fbd5dd07b84975172f077091e92bcd5b543
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '145135738'
---
GitHub admite clientes de Subversion por medio del protocolo HTTPS. Utilizamos el puente de Subversion para comunicar los comandos svn a GitHub.

## Funciones de Subversion admitidas en GitHub

### Restauración

La primera cosa que desearás realizar es un control de Subversion.  Ya que los clones de Git mantienen un directorio de trabajo (donde editas los archivos) separado de los datos del repositorio, solo hay una rama en el directorio de trabajo a la vez.

Las extracciones del repositorio de Subversion son diferentes: mezclan los datos del repositorio en los directorios de trabajo, por lo que hay un directorio de trabajo para cada rama y etiqueta que haya extraído. En el caso de los repositorios con muchas ramas y etiquetas, la extracción del repositorio de todo puede ser una carga de ancho de banda, por lo que debe empezar con una extracción parcial.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.copy-clone-url %}

3. Realiza un control vacío del repositorio:
  ```shell
  $ svn co --depth empty https://github.com/<em>user</em>/<em>repo</em>
  > Checked out revision 1.
  $ cd <em>repo</em>
  ```

4. Vaya a la rama `trunk`. El puente de Subversion mapea a trunk en la rama HEAD de Git.
  ```shell
  $ svn up trunk
  > A    trunk
  > A    trunk/README.md
  > A    trunk/gizmo.rb
  > Updated to revision 1.
  ```

5. Obtenga una extracción vacía del directorio `branches`.  Aquí se encuentran todas las ramas que no son `HEAD` y donde creará ramas de característica.
  ```shell
  $ svn up --depth empty branches
  Updated to revision 1.
  ```

### Crear ramas

También puedes crear ramas usando el puente de Subversion a GitHub.

Desde el cliente de svn, para asegurarse de que la rama predeterminada es la más reciente, actualice `trunk`:
```shell
$ svn up trunk
> At revision 1.
```

A continuación, puede usar `svn copy` para crear una rama:
```shell
$ svn copy trunk branches/more_awesome
> A    branches/more_awesome
$ svn commit -m 'Added more_awesome topic branch'
> Adding    branches/more_awesome

> Committed revision 2.
```

Puedes confirmar que la nueva rama existe en el menú desplegable de la rama del repositorio:

![branch-snapshot](/assets/images/help/branch/svnflow-branch-snapshot.png)

También puedes confirmar la nueva rama por medio de la línea de comando:

```shell
$ git fetch
> From https://github.com/<em>user</em>/<em>repo</em>/
> * [new branch]    more_awesome -> origin/more_awesome
```

### Realizar confirmaciones de cambios en Subversion

Después de haber agregado algunas características y corregido algunos errores, querrá confirmar estos cambios en GitHub. Esto funciona de la misma forma en la que estás acostumbrado en Subversion. Edite los archivos y use `svn commit` para registrar los cambios:

```shell
$ svn status
> M    gizmo.rb
$ svn commit -m 'Guard against known problems'
> Sending    more_awesome/gizmo.rb
> Transmitting file data .
> Committed revision 3.
$ svn status
> ?    test
$ svn add test
> A    test
> A    test/gizmo_test.rb
$ svn commit -m 'Test coverage for problems'
> Adding    more_awesome/test
> Adding    more_awesome/test/gizmo_test.rb
> Transmitting file data .
> Committed revision 4.
```

### Cambiar de una rama a otra

Para alternar entre ramas, probablemente quiera comenzar con un extracción del repositorio de `trunk`:

```shell
$ svn co --depth empty https://github.com/<em>user</em>/<em>repo</em>/trunk
```

Luego, puedes alternar a otra rama:

```shell
$ svn switch https://github.com/<em>user</em>/<em>repo</em>/branches/more_awesome
```

## Encontrar el SHA de confirmación de Git para una confirmación de Subversion

El servidor de Subversion de GitHub muestra el sha de confirmación de Git para cada confirmación de Subversion.

Para ver el SHA de confirmación, debe solicitar la propiedad remota sin versión `git-commit`.

```shell
$ svn propget git-commit --revprop -r HEAD https://github.com/<em>user</em>/<em>repo</em>
05fcc584ed53d7b0c92e116cb7e64d198b13c4e3
```

Con este SHA de confirmación, puedes, por ejemplo, consultar la correspondiente confirmación Git en GitHub.

## Información adicional

* "[Propiedades de Subversion admitidas por GitHub](/articles/subversion-properties-supported-by-github)"
