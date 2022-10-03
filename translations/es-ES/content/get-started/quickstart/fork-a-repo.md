---
title: Bifurcar un repositorio
redirect_from:
  - /fork-a-repo
  - /forking
  - /articles/fork-a-repo
  - /github/getting-started-with-github/fork-a-repo
  - /github/getting-started-with-github/quickstart/fork-a-repo
intro: Una bifurcación es una copia de un repositorio. Bifurcar un repositorio te permite experimentar libremente con cambios sin afectar el proyecto original.
permissions: '{% data reusables.enterprise-accounts.emu-permission-fork %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
  - Issues
  - Notifications
  - Accounts
ms.openlocfilehash: b6f98f30c67f14fab1da3658e42e8eba67f5f50c
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: '147717577'
---
## Acerca de las bifurcaciones

Lo más común es que las bifurcaciones se utilicen ya sea para proponer cambios en el proyecto de alguien más, en el que no tienes acceso de escritura, o para utilizar el proyecto de alguien más como punto de inicio para tu idea propia. Puedes bifurcar un repositorio para crear una copia del mismo y hacer cambios sin afectar al repositorio ascendente. Para obtener más información, vea "[Trabajar con bifurcaciones](/github/collaborating-with-issues-and-pull-requests/working-with-forks)".

### Proponer cambios para el proyecto de otra persona

Por ejemplo, puedes utilizar ramificaciones para proponer cambios relacionados con arreglar un error. En lugar de registrar una incidencia para un error que has encontrado, puedes hacer lo siguiente:

- Bifurque el repositorio.
- Solucionar el problema.
- Emitir solicitudes de cambios al propietario del proyecto.

### Usar el proyecto de otra persona como inicio de tu propia idea

El software de código abierto se basa en la idea de que, si compartimos el código, podemos crear software más confiable y mejor. Para obtener más información, vea "[Acerca de la iniciativa de código abierto](https://opensource.org/about)" en la iniciativa de código abierto.

Para obtener más información acerca de cómo aplicar los principios de código abierto al trabajo de desarrollo de su organización en {% data variables.product.product_location %}, vea las notas del producto de {% data variables.product.prodname_dotcom %} "[Introducción a InnerSource](https://resources.github.com/whitepapers/introduction-to-innersource/)".

{% ifversion fpt or ghes or ghec %}

Cuando creas tu repositorio público desde una ramificación del proyecto de alguien más, asegúrate de incluir el archivo de licencia que determine cómo quieres que se comparta tu proyecto con los demás. Para obtener más información, vea "[Elegir una licencia de código abierto](https://choosealicense.com/)" en choosealicense.com.

{% data reusables.open-source.open-source-guide-repositories %} {% data reusables.open-source.open-source-learning %}

{% endif %}

## Prerrequisitos

Si aún no lo has hecho, primero debes [configurar Git](/articles/set-up-git). No olvide [configurar la autenticación en {% data variables.product.product_location %} también desde Git](/articles/set-up-git#next-steps-authenticating-with-github-from-git).

## Bifurcar un repositorio

{% webui %}

Puedes ramificar un proyecto para proponer cambios en los repositorios precedentes u originales. En este caso, es una buena práctica sincronizar tu bifurcación periódicamente con el repositorio ascendente. Para hacerlo, deberás usar Git en la línea de comando. Puede practicar la configuración del repositorio ascendente con el mismo repositorio [octocat/Spoon-Knife](https://github.com/octocat/Spoon-Knife) que acaba de bifurcar.

1. En {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom_the_website %}{% else %}{% data variables.product.product_location %}{% endif %}, vaya al repositorio [octocat/Spoon-Knife](https://github.com/octocat/Spoon-Knife).
2. En la esquina superior derecha de la página, haga clic en **Fork** (Bifurcar).
   ![Botón Fork (Bifurcar)](/assets/images/help/repository/fork_button.png)
3. Selecciona un propietario para el repositorio bifurcado.
   ![Creación de una página de bifurcación con la lista desplegable Propietario resaltada](/assets/images/help/repository/fork-choose-owner.png)
4. De forma predeterminada, las bifurcaciones tienen el mismo nombre que sus repositorios primarios. Puedes cambiar el nombre de la bifurcación para distinguirlo aún más. 
   ![Creación de una página de bifurcación con el campo Nombre del repositorio resaltado](/assets/images/help/repository/fork-choose-repo-name.png)
5. Opcionalmente, puedes agregar una descripción de la bifurcación.
   ![Creación de una página de bifurcación con el campo Descripción resaltado](/assets/images/help/repository/fork-description.png)
6. Elige si quieres copiar solo la rama predeterminada, o bien todas las ramas en la nueva bifurcación. En muchos escenarios de bifurcación, como los de contribución a proyectos de código abierto, solo tienes que copiar la rama predeterminada. De forma predeterminada, solo se copia la rama predeterminada.
   ![Opción para copiar solo la rama predeterminada](/assets/images/help/repository/copy-default-branch-only.png)
7. Haz clic en **Crear bifurcación**.
   ![Botón Crear bifurcación resaltado](/assets/images/help/repository/fork-create-button.png)


{% note %}

**Nota:** Si quieres copiar ramas adicionales del repositorio primario, puedes hacerlo desde la página **Ramas**. Para más información, consulta "[Creación y eliminación de ramas dentro del repositorio](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-and-deleting-branches-within-your-repository)".{% endnote %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Para crear una bifurcación de un repositorio, use el subcomando `gh repo fork`.

```shell
gh repo fork <em>repository</em>
```

Para crear la bifurcación en una organización, use la marca `--org`.

```shell
gh repo fork <em>repository</em> --org "octo-org"
```

{% endcli %}

{% desktop %} {% enddesktop %}

## Clonar tu repositorio bifurcado

Ahora mismo, tienes una bifurcación del repositorio Spoon-Knife, pero no tienes los archivos de ese repositorio localmente en tu equipo.

{% webui %}

1. En {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom_the_website %}{% else %}{% data variables.product.product_location %}{% endif %}, vaya a **la bifurcación** del repositorio Spoon-Knife.
{% data reusables.repositories.copy-clone-url %} {% data reusables.command_line.open_the_multi_os_terminal %} {% data reusables.command_line.change-current-directory-clone %}
4. Escriba `git clone` y pegue la dirección URL que ha copiado antes. Tendrá este aspecto, con su nombre de usuario de {% data variables.product.product_name %} en lugar de `YOUR-USERNAME`:
  ```shell
  $ git clone https://{% data variables.command_line.codeblock %}/<em>YOUR-USERNAME</em>/Spoon-Knife
  ```

5. Presione **ENTRAR**. Se creará tu clon local.
  ```shell
  $ git clone https://{% data variables.command_line.codeblock %}/<em>YOUR-USERNAME</em>/Spoon-Knife
  > Cloning into `Spoon-Knife`...
  > remote: Counting objects: 10, done.
  > remote: Compressing objects: 100% (8/8), done.
  > remote: Total 10 (delta 1), reused 10 (delta 1)
  > Unpacking objects: 100% (10/10), done.
  ```

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Para crear un clon de la bifurcación, use la marca `--clone`.

```shell
gh repo fork <em>repository</em> --clone=true
```

{% endcli %}

{% desktop %}

{% data reusables.desktop.choose-clone-repository %} {% data reusables.desktop.cloning-location-tab %} {% data reusables.desktop.cloning-repository-list %} {% data reusables.desktop.choose-local-path %} {% data reusables.desktop.click-clone %}

{% enddesktop %}

## Configurar a Git para sincronizar tu bifurcación con el repositorio original

Cuando bifurcas un proyecto para proponer cambios en el repositorio original, puedes configurar Git para extraer cambios del repositorio original o ascendente en el clon local de tu bifurcación.

{% webui %}

1. En {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom_the_website %}{% else %}{% data variables.product.product_location %}{% endif %}, vaya al repositorio [octocat/Spoon-Knife](https://github.com/octocat/Spoon-Knife).
{% data reusables.repositories.copy-clone-url %} {% data reusables.command_line.open_the_multi_os_terminal %}
4. Cambia el directorio de la ubicación de la bifurcación que clonaste.
    - Para ir al directorio principal, escriba solo `cd` sin ningún otro texto.
    - Para generar una lista de los archivos y carpetas en su directorio actual, escriba `ls`.
    - Para ir a uno de los directorios mostrados, escriba `cd your_listed_directory`.
    - Para subir un directorio, escriba `cd ..`.
5. Escriba `git remote -v` y presione **Entrar**. Verás el repositorio remoto configurado actualmente para tu bifurcación.
  ```shell
  $ git remote -v
  > origin  https://{% data variables.command_line.codeblock %}/<em>YOUR_USERNAME</em>/<em>YOUR_FORK</em>.git (fetch)
  > origin  https://{% data variables.command_line.codeblock %}/<em>YOUR_USERNAME</em>/<em>YOUR_FORK</em>.git (push)
  ```

6. Escribe `git remote add upstream`, pega la dirección URL que has copiado en el paso 3 y presiona **Enter** (Entrar). Tendrá este aspecto:
  ```shell
  $ git remote add upstream https://{% data variables.command_line.codeblock %}/ORIGINAL_OWNER/Spoon-Knife.git
  ```

7. A fin de verificar el nuevo repositorio ascendente que has especificado para tu bifurcación, escribe `git remote -v` otra vez. Debería ver la dirección URL de la bifurcación como `origin` y la dirección URL del repositorio original como `upstream`.
  ```shell
  $ git remote -v
  > origin    https://{% data variables.command_line.codeblock %}/<em>YOUR_USERNAME</em>/<em>YOUR_FORK</em>.git (fetch)
  > origin    https://{% data variables.command_line.codeblock %}/<em>YOUR_USERNAME</em>/<em>YOUR_FORK</em>.git (push)
  > upstream  https://{% data variables.command_line.codeblock %}/<em>ORIGINAL_OWNER</em>/<em>ORIGINAL_REPOSITORY</em>.git (fetch)
  > upstream  https://{% data variables.command_line.codeblock %}/<em>ORIGINAL_OWNER</em>/<em>ORIGINAL_REPOSITORY</em>.git (push)
  ```

Ahora, puedes mantener tu bifurcación sincronizada con el repositorio ascendente con unos pocos comandos Git. Para obtener más información, vea "[Sincronizar una bifurcación](/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork)".

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

A fin de configurar un repositorio remoto para el repositorio bifurcado, utilice la marca `--remote`.

```shell
gh repo fork <em>repository</em> --remote=true
```

Para especificar el nombre del repositorio remoto, use la marca `--remote-name`.

```shell
gh repo fork <em>repository</em> --remote-name "main-remote-repo"
```

{% endcli %}

### Edición de una bifurcación

Puedes hacer cualquier cambio a una ramificación, incluyendo:

- **Crear ramas**: las [*ramas*](/articles/creating-and-deleting-branches-within-your-repository/) permiten compilar características o probar ideas sin poner en riesgo el proyecto principal.
- **Abrir solicitudes de incorporación de cambios**: si espera colaborar en el repositorio original, puede enviar una solicitud al autor original para extraer su bifurcación en su repositorio enviando una [solicitud de incorporación de cambios](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests).

## Encontrar otro repositorio para bifurcar
Bifurca un repositorio para comenzar a colaborar con un proyecto. {% data reusables.repositories.you-can-fork %}

{% ifversion fpt or ghec %}Puede examinar [Explore](https://github.com/explore) (Explorar) para encontrar proyectos y comenzar a colaborar en repositorios de código abierto. Para obtener más información, vea "[Buscar formas de contribuir al código abierto en {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/finding-ways-to-contribute-to-open-source-on-github)".

{% endif %}

## Pasos siguientes

Ahora ya has bifurcado un repositorio, has practicado la clonación de tu bifurcación y has configurado un repositorio ascendente.

* Para obtener más información sobre cómo clonar la bifurcación y sincronizar los cambios en un repositorio bifurcado desde tu equipo, consulta "[Configuración de Git](/articles/set-up-git)".

* También puedes crear un repositorio nuevo en donde pongas todos tus proyectos y compartir el código en {% data variables.product.prodname_dotcom %}. {% data reusables.getting-started.create-a-repository %}"

* {% data reusables.getting-started.being-social %}

* {% data reusables.support.connect-in-the-forum-bootcamp %}
