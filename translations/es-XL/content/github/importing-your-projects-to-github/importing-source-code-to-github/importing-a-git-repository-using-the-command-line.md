---
title: Importar un repositorio de Git usando la línea de comando
intro: '{% if currentVersion == "free-pro-team@latest" %}Si [Importador GitHub](/articles/importing-a-repository-with-github-importer) no es adecuado para tus propósitos, como cuando tu código existente está alojado en una red privada, recomendamos importar usando la línea de comando.{% else %}Importar proyectos de Git usando la línea de comando es adecuado cuando tu código existente está alojado en una red privada.{% endif %}'
redirect_from:
  - /articles/importing-a-git-repository-using-the-command-line
  - /github/importing-your-projects-to-github/importing-a-git-repository-using-the-command-line
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---
Antes de comenzar, asegúrate de saber lo siguiente:

- Tu nombre de usuario {% data variables.product.product_name %}
- La URL del clon del repositorio externo, como `https://external-host.com/user/repo.git` o `git://external-host.com/user/repo.git` (quizás con un `user@` adelante del nombre de dominio `external-host.com`)

{% tip %}

A los fines de demostración, usaremos lo siguiente:

- Una cuenta externa llamada **extuser**
- Un host de Git externo llamado `https://external-host.com`
- Una cuenta de usuario personal {% data variables.product.product_name %} llamada **ghuser**
- Un repositorio {% data variables.product.product_name %} llamado **repo.git**

{% endtip %}

1. [Crear un repositorio nuevo en {% data variables.product.product_name %}](/articles/creating-a-new-repository). Importarás tu repositorio de Git externo a este repositorio nuevo.
2. En la línea de comando, haz un clon "en blanco" del repositorio usando la URL del clon externo. Esto crea una copia completa de los datos, pero sin un directorio de trabajo para editar archivos, y asegura una exportación limpia y nueva de todos los datos antiguos.
  ```shell
  $ git clone --bare https://external-host.com/<em>extuser</em>/<em>repo.git</em>
  # Makes a bare clone of the external repository in a local directory
  ```
3. Sube el repositorio clonado de forma local a {% data variables.product.product_name %} usando la opción "espejo", que asegura que todas las referencias, como ramas y etiquetas, se copien en el repositorio importado.
  ```shell
  $ cd <em>repo.git</em>
  $ git push --mirror https://{% data variables.command_line.codeblock %}/<em>ghuser</em>/<em>repo.git</em>
  # Pushes the mirror to the new {% data variables.product.product_name %} repository
  ```
4. Elimina el repositorio local temporal.
  ```shell
  $ cd ..
  $ rm -rf <em>repo.git</em>
  ```
