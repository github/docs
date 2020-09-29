---
title: Duplicar un repositorio
intro: 'Para duplicar un repositorio sin bifurcarlo, puedes ejecutar un comando de clonación especial y luego subirlo en espejo al nuevo repositorio.'
redirect_from:
  - /articles/duplicating-a-repo/
  - /articles/duplicating-a-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Para que puedas duplicar un repositorio y subirlo a tu nueva copia, o _espejo_ del repositorio, antes debes [crear el nuevo repositorio](/articles/creating-a-new-repository) en {% data variables.product.product_location %}. En estos ejemplos, `exampleuser/new-repository` o `exampleuser/mirrored` son los espejos.

### Generar un espejo de un repositorio

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Crea un clon desnudo de un repositorio.
  ```shell
  $ git clone --bare https://{% data variables.command_line.codeblock %}/<em>exampleuser</em>/<em>old-repository</em>.git
  ```
3. Sube en espejo al nuevo repositorio.
  ```shell
  $ cd <em>old-repository</em>.git
  $ git push --mirror https://{% data variables.command_line.codeblock %}/<em>exampleuser</em>/<em>new-repository</em>.git
  ```
4. Eliminar el repositorio local temporal que creaste previamente.
  ```shell
  $ cd ..
  $ rm -rf <em>old-repository</em>.git
  ```

### Replicar un repositorio que contiene objetos de {% data variables.large_files.product_name_long %}

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Crea un clon desnudo de un repositorio. Reemplaza el nombre de usuario del ejemplo por el nombre de la persona u organización propietaria del repositorio y reemplaza el nombre del repositorio del ejemplo por el nombre del repositorio que deseas duplicar.
  ```shell
  $ git clone --bare https://{% data variables.command_line.codeblock %}/<em>exampleuser</em>/<em>old-repository</em>.git
  ```
3. Dirígete al repositorio que acabas de clonar.
  ```shell
  $ cd <em>old-repository</em>.git
  ```
4. Extra los objetos {% data variables.large_files.product_name_long %} del repositorio.
  ```shell
  $ git lfs fetch --all
  ```
5. Sube en espejo al nuevo repositorio.
  ```shell
  $ git push --mirror https://{% data variables.command_line.codeblock %}/<em>exampleuser</em>/<em>new-repository</em>.git
  ```
6. Sube los objetos {% data variables.large_files.product_name_long %} del repositorio a tu espejo.
  ```shell
  $ git lfs push --all https://github.com/<em>exampleuser/new-repository.git</em>
  ```
7. Eliminar el repositorio local temporal que creaste previamente.
  ```shell
  $ cd ..
  $ rm -rf <em>old-repository</em>.git
  ```

### Replicar un repositorio en otra ubicación

Si quieres replicar un repositorio en otra ubicación, incluido obtener actualizaciones del original, puedes clonar una réplica y subir periódicamente los cambios.

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Crea un clon desnudo en espejo del repositorio.
  ```shell
  $ git clone --mirror https://{% data variables.command_line.codeblock %}/<em>exampleuser</em>/<em>repository-to-mirror</em>.git
  ```
3. Establece la ubicación para subir en tu espejo.
  ```shell
  $ cd <em>repository-to-mirror</em>.git
  $ git remote set-url --push origin https://{% data variables.command_line.codeblock %}/<em>exampleuser</em>/<em>mirrored</em>
  ```

Al igual que sucede con un clon básico, un clon replicado incluye todas las ramas y etiquetas remotas, pero todas las referencias locales se sobrescribirán cada vez que extraigas elementos, por eso siempre será igual al repositorio original. El proceso para subir elementos a tu espejo se simplifica si estableces la URL para los elementos que subes. Para actualizar tu espejo, extrae las actualizaciones y súbelas.

```shell
$ git fetch -p origin
$ git push --mirror
```
