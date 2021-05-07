---
title: Bifurcar un repositorio
redirect_from:
  - /fork-a-repo/
  - /forking/
  - /articles/fork-a-repo
intro: Una ramificación es una copia de un repositorio. Bifurcar un repositorio te permite experimentar libremente con cambios sin afectar el proyecto original.
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
  - Issues
  - Notifications
  - Accounts
---

Casi siempre las bifurcaciones se usan para proponer cambios al proyecto de otra persona o para usar el proyecto de otra persona como inicio de tu propia idea.

#### Proponer cambios para el proyecto de otra persona

Por ejemplo, puedes utilizar ramificaciones para proponer cambios relacionados con arreglar un error. En lugar de registrar una propuesta para un error que has encontrado, puedes hacer lo siguiente:

- Bifurcar el repositorio.
- Solucionar el problema.
- Submit a pull request to the project owner.

#### Usar el proyecto de otra persona como inicio de tu propia idea

El software de código abierto se basa en la idea de que, si compartimos el código, podemos crear software más confiable y mejor. Para obtener más información, consulta la sección "[Acerca de la Iniciativa de Código Abierto](http://opensource.org/about)" en la Iniciativa de Código Abierto.

Cuando creas tu repositorio público desde una ramificación del proyecto de alguien más, asegúrate de incluir el archivo de licencia que determine cómo quieres que se comparta tu proyecto con los demás. Para obtener más información, consulta la sección "[Elegir una licencia de código abierto](http://choosealicense.com/)" en choosealicense.

{% data reusables.open-source.open-source-guide-repositories %}{% data reusables.open-source.open-source-learning-lab %}

{% note %}

**Nota**: {% data reusables.repositories.desktop-fork %}

{% endnote %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
{% tip %}

**Tip**: You can also fork a repository using the {% data variables.product.prodname_cli %}. For more information, see "[`gh repo fork`](https://cli.github.com/manual/gh_repo_fork)" in the {% data variables.product.prodname_cli %} documentation.

{% endtip %}
{% endif %}

### Bifurcar un repositorio a modo de ejemplo

Bifurcar un repositorio es un proceso muy simple que lleva dos pasos. Hemos creado un repositorio para que practiques.

1. En {% data variables.product.product_location %}, dirígete al repositorio [octocat/Spoon-Knife](https://github.com/octocat/Spoon-Knife).
2. En el ángulo superior derecho de la página, haz clic en **Bifurcar**. ![Botón Bifurcar](/assets/images/help/repository/fork_button.jpg)

### Mantener tu bifurcación sincronizada

Puedes ramificar un proyecto para proponer cambios en los repositorios precedentes u originales. En este caso, es una buena práctica sincronizar tu bifurcación periódicamente con el repositorio ascendente. Para hacerlo, deberás usar Git en la línea de comando. Puedes practicar cómo configurar el repositorio precedente utilizando el mismo repositorio [octocat/Spoon-Knife](https://github.com/octocat/Spoon-Knife) que acabas de ramificar.

#### Paso 1: Configurar Git

Si todavía no lo has hecho, primero debes [configurar Git](/articles/set-up-git). No olvides [configurar la autenticación a {% data variables.product.product_location %} desde Git](/articles/set-up-git#next-steps-authenticating-with-github-from-git).

#### Paso 2: Crear un clon local de tu bifurcación

Ahora tienes una bifurcación del repositorio Spoon-Knife, pero no tienes los archivos de ese repositorio en tu computadora. Let's create a clone of your fork locally on your computer.

1. En {% data variables.product.product_name %}, dirígete a **tu bifurcación** del repositorio Spoon-Knife.
{% data reusables.repositories.copy-clone-url %}
{% data reusables.command_line.open_the_multi_os_terminal %}
{% data reusables.command_line.change-current-directory-clone %}
4. Escribe `git clone`, y luego pega la URL que copiaste antes. Se verá así, con tu nombre de usuario de {% data variables.product.product_name %} en lugar de `YOUR-USERNAME`:
  ```shell
  $ git clone https://{% data variables.command_line.codeblock %}/<em>YOUR-USERNAME</em>/Spoon-Knife
  ```

5. Presiona **Enter** (Intro). Se creará tu clon local.
  ```shell
  $ git clone https://{% data variables.command_line.codeblock %}/<em>YOUR-USERNAME</em>/Spoon-Knife
  > Cloning into `Spoon-Knife`...
  > remote: Counting objects: 10, done.
  > remote: Compressing objects: 100% (8/8), done.
  > remove: Total 10 (delta 1), reused 10 (delta 1)
  > Unpacking objects: 100% (10/10), done.
  ```

Ahora tienes una copia local de tu ramificación en el repositorio Spoon-Knife.

#### Paso 3: Configurar Git para sincronizar tu bifurcación con el repositorio original Spoon-Knife

Cuando bifurcas un proyecto para proponer cambios en el repositorio original, puedes configurar Git para extraer cambios del original, o repositorio ascendente, en el clon local de tu bifurcación.

1. En {% data variables.product.product_name %}, dirígete al repositorio [octocat/Spoon-Knife](https://github.com/octocat/Spoon-Knife).
{% data reusables.repositories.copy-clone-url %}
{% data reusables.command_line.open_the_multi_os_terminal %}
4. Cambia los directorios a la ubicación de la bifurcación que clonaste en el [Paso 2: Crear un clon local de tu bifurcación](#step-2-create-a-local-clone-of-your-fork).
    - Para ir a tu directorio de inicio, escribe solo `cd` sin ningún otro texto.
    - Para generar una lista de los archivos y carpetas en tu directorio actual, escribe `ls`.
    - Para ir a uno de los directorios de la lista, escribe `cd your_listed_directory`.
    - Para subir un directorio, escribe `cd ..`.
5. Escribe `git remote -v` y presiona **Intro**. Verás el repositorio remoto configurado actualmente para tu bifurcación.
  ```shell
  $ git remote -v
  > origin  https://{% data variables.command_line.codeblock %}/<em>YOUR_USERNAME</em>/<em>YOUR_FORK</em>.git (fetch)
  > origin  https://{% data variables.command_line.codeblock %}/<em>YOUR_USERNAME</em>/<em>YOUR_FORK</em>.git (push)
  ```

6. Escribe `git remote add upstream` y luego pega la URL que copiaste en el Paso 2 y presiona **Intro**. Se verá así:
  ```shell
  $ git remote add upstream https://{% data variables.command_line.codeblock %}/octocat/Spoon-Knife.git
  ```

7. Para verificar el nuevo repositorio ascendente que has especificado para tu bifurcación, escribe nuevamente `git remote -v`. Debes ver la URL para tu bifurcación como `origin` y la URL para el repositorio original como `upstream`.
  ```shell
  $ git remote -v
  > origin    https://{% data variables.command_line.codeblock %}/<em>YOUR_USERNAME</em>/<em>YOUR_FORK</em>.git (fetch)
  > origin    https://{% data variables.command_line.codeblock %}/<em>YOUR_USERNAME</em>/<em>YOUR_FORK</em>.git (push)
  > upstream  https://{% data variables.command_line.codeblock %}/<em>ORIGINAL_OWNER</em>/<em>ORIGINAL_REPOSITORY</em>.git (fetch)
  > upstream  https://{% data variables.command_line.codeblock %}/<em>ORIGINAL_OWNER</em>/<em>ORIGINAL_REPOSITORY</em>.git (push)
  ```

Ahora, puedes mantener tu bifurcación sincronizada con el repositorio ascendente con unos pocos comandos Git. Para obtener más información, consulta "[Sincronizar una bifurcación](/articles/syncing-a-fork)".

#### Pasos siguientes

Puedes hacer cualquier cambio a una ramificación, incluyendo:

- **Crear ramas:** [Las *ramas*](/articles/creating-and-deleting-branches-within-your-repository/) te permiten diseñar nuevas características o probar ideas sin poner en riesgo tu proyecto principal.
- **Abrir solicitudes de extracción:** Si deseas colaborar con el repositorio original, puedes enviar una solicitud al autor original para extraer tu bifurcación en su repositorio enviando una [solicitud de extracción](/articles/about-pull-requests).

### Encontrar otro repositorio para bifurcar

Bifurca un repositorio para comenzar a colaborar con un proyecto. {% data reusables.repositories.you-can-fork %}

{% if currentVersion == "free-pro-team@latest" %}Puedes dirigirte a [Explorar](https://github.com/explore) para encontrar proyectos y comenzar a colaborar con repositorios de código abierto. Para obtener más información, consulta "[Encontrar formas de contribuir al código abierto en {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/finding-ways-to-contribute-to-open-source-on-github)."

{% endif %}

### Celebrar

Ahora ya has bifurcado un repositorio, has practicado la clonación de tu bifurcación y has configurado un repositorio ascendente. ¿Qué deseas hacer ahora?

- "[Configurar Git](/articles/set-up-git)"
- "[Crear un repositorio](/articles/create-a-repo)"
- "[Socializar](/articles/be-social)"
- {% data reusables.support.connect-in-the-forum-bootcamp %}
