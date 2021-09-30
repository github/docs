---
title: Bifurcar un repositorio
redirect_from:
  - /fork-a-repo/
  - /forking/
  - /articles/fork-a-repo
  - /github/getting-started-with-github/fork-a-repo
  - /github/getting-started-with-github/quickstart/fork-a-repo
intro: Una ramificación es una copia de un repositorio. Bifurcar un repositorio te permite experimentar libremente con cambios sin afectar el proyecto original.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Pull requests
  - Issues
  - Notifications
  - Accounts
---

## Acerca de las bifurcaciones

Casi siempre las bifurcaciones se usan para proponer cambios al proyecto de otra persona o para usar el proyecto de otra persona como inicio de tu propia idea. Puedes bifurcar un repositorio para crear una copia del mismo y hacer cambios sin afectar al repositorio ascendente. Para obtener más información, consulta la sección "[Trabajar con las bifurcaciones](/github/collaborating-with-issues-and-pull-requests/working-with-forks)".

### Proponer cambios para el proyecto de otra persona

Por ejemplo, puedes utilizar ramificaciones para proponer cambios relacionados con arreglar un error. En lugar de registrar una propuesta para un error que has encontrado, puedes hacer lo siguiente:

- Bifurcar el repositorio.
- Solucionar el problema.
- Emitir solicitudes de cambios al propietario del proyecto.

### Usar el proyecto de otra persona como inicio de tu propia idea

El software de código abierto se basa en la idea de que, si compartimos el código, podemos crear software más confiable y mejor. Para obtener más información, consulta la sección "[Acerca de la Iniciativa de Código Abierto](http://opensource.org/about)" en la Iniciativa de Código Abierto.

Para obtener más información acerca de aplicar los principios de código abierto al trabajo de desarrollo de tu organización en {% data variables.product.product_location %}, consulta la documentación técnica de {% data variables.product.prodname_dotcom %} "[Introducción al innersource](https://resources.github.com/whitepapers/introduction-to-innersource/)".

{% ifversion fpt or ghes %}

Cuando creas tu repositorio público desde una ramificación del proyecto de alguien más, asegúrate de incluir el archivo de licencia que determine cómo quieres que se comparta tu proyecto con los demás. Para obtener más información, consulta la sección "[Elegir una licencia de código abierto](https://choosealicense.com/)" en choosealicense.com.

{% data reusables.open-source.open-source-guide-repositories %}{% data reusables.open-source.open-source-learning-lab %}

{% endif %}

## Prerrequisitos

Si todavía no lo has hecho, primero debes [configurar Git](/articles/set-up-git). No olvides [configurar la autenticación a {% data variables.product.product_location %} desde Git](/articles/set-up-git#next-steps-authenticating-with-github-from-git).

## Bifurcar un repositorio

{% include tool-switcher %}
{% webui %}

Puedes ramificar un proyecto para proponer cambios en los repositorios precedentes u originales. En este caso, es una buena práctica sincronizar tu bifurcación periódicamente con el repositorio ascendente. Para hacerlo, deberás usar Git en la línea de comando. Puedes practicar cómo configurar el repositorio precedente utilizando el mismo repositorio [octocat/Spoon-Knife](https://github.com/octocat/Spoon-Knife) que acabas de ramificar.

1. En {% data variables.product.product_location %}, dirígete al repositorio [octocat/Spoon-Knife](https://github.com/octocat/Spoon-Knife).
2. En el ángulo superior derecho de la página, haz clic en **Bifurcar**. ![Botón Bifurcar](/assets/images/help/repository/fork_button.jpg)

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Para crear una bifurcación de un repositorio, utiliza el subcomando `gh repo fork`.

```shell
gh repo fork <em>repository</em>
```

Para crear la bifurcación en una organización, utiliza el marcador `--org`.

```shell
gh repo fork <em>repository</em> --org "octo-org"
```

{% endcli %}

{% desktop %}
{% enddesktop %}

## Clonar tu repositorio bifurcado

Right now, you have a fork of the Spoon-Knife repository, but you don't have the files in that repository locally on your computer.

{% include tool-switcher %}
{% webui %}

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

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Para crear un clon de tu bifurcación, utiliza el marcador `--clone`.

```shell
gh repo fork <em>repository</em> --clone=true
```

{% endcli %}

{% desktop %}

{% data reusables.desktop.choose-clone-repository %}
{% data reusables.desktop.cloning-location-tab %}
{% data reusables.desktop.cloning-repository-list %}
{% data reusables.desktop.choose-local-path %}
{% data reusables.desktop.click-clone %}

{% enddesktop %}

## Configurar a Git para sincronizar tu bifurcación con el repositorio original

Cuando bifurcas un proyecto para proponer cambios en el repositorio original, puedes configurar Git para extraer cambios del original, o repositorio ascendente, en el clon local de tu bifurcación.

{% include tool-switcher %}
{% webui %}

1. En {% data variables.product.product_name %}, dirígete al repositorio [octocat/Spoon-Knife](https://github.com/octocat/Spoon-Knife).
{% data reusables.repositories.copy-clone-url %}
{% data reusables.command_line.open_the_multi_os_terminal %}
4. Cambia el directorio de la ubicación de la bifurcación que clonaste.
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

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Para configurar un repositorio remoto para el repositorio bifurcado, utiliza el marcador `--remote`.

```shell
gh repo fork <em>repository</em> --remote=true
```

Para especificar el nombre del repositorio remoto, utiliza el marcador `--remote-name`.

```shell
gh repo fork <em>repository</em> --remote-name "main-remote-repo"
```

{% endcli %}

### Pasos siguientes

Puedes hacer cualquier cambio a una ramificación, incluyendo:

- **Crear ramas:** [Las *ramas*](/articles/creating-and-deleting-branches-within-your-repository/) te permiten diseñar nuevas características o probar ideas sin poner en riesgo tu proyecto principal.
- **Abrir solicitudes de extracción:** Si deseas colaborar con el repositorio original, puedes enviar una solicitud al autor original para extraer tu bifurcación en su repositorio enviando una [solicitud de extracción](/articles/about-pull-requests).

## Encontrar otro repositorio para bifurcar
Bifurca un repositorio para comenzar a colaborar con un proyecto. {% data reusables.repositories.you-can-fork %}

{% ifversion fpt %}Puedes dirigirte a [Explorar](https://github.com/explore) para encontrar proyectos y comenzar a colaborar con repositorios de código abierto. Para obtener más información, consulta "[Encontrar formas de contribuir al código abierto en {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/finding-ways-to-contribute-to-open-source-on-github)."

{% endif %}

## Celebrar

Ahora ya has bifurcado un repositorio, has practicado la clonación de tu bifurcación y has configurado un repositorio ascendente. Para obtener más información sobre cómo clonar la bifurcación y sincronizar los cambios en un repositorio bifurcado desde tu computadora, consulta la sección "[Configurar Git](/articles/set-up-git)".

También puedes crear un repositorio nuevo en donde pongas todos tus proyectos y compartir el código en {% data variables.product.prodname_dotcom %}. Para obtener más información, consulta la sección "[Crear un repositorio](/articles/create-a-repo)".

Cada repositorio en {% data variables.product.product_name %} pertenece a una persona u organización. Puedes interactuar con las personas, repositorios y organizaciones conectándote y siguiéndolos en {% data variables.product.product_name %}. Para obtener más información, consulta la sección "[Sé sociable ](/articles/be-social)".

{% data reusables.support.connect-in-the-forum-bootcamp %}
