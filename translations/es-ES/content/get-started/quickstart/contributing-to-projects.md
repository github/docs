---
title: Contribuir a proyectos
intro: Aprende la forma de contribuir en un proyecto mediante la bifurcación.
permissions: '{% data reusables.enterprise-accounts.emu-permission-fork %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
  - Forks
  - GitHub
  - Open Source
ms.openlocfilehash: 190bfbbfc799a802a082aa01e9f93f2ad379e471
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147425235'
---
## Acerca de las bifurcaciones

Después de utilizar GitHub tú mismo por un tiempo, puede que quieras contribuir con el proyecto de alguien más. O tal vez te gustaría utilizar el proyecto de alguien más como punto inicial de uno propio. A este proceso se le conoce como bifurcación.

Crear una "bifurcación" es producir una copia personal del proyecto de alguien más. Las bifurcaciones son un tipo de puente entre el repositorio original y tu copia personal. Puedes emitir solicitudes de cambios para ayudar a mejorar los proyectos de otras personas al ofrecerles tus cambios para el proyecto original. La bifurcación es el núcleo del desarrollo de código social en GitHub. Para obtener más información, consulte "[Bifurcación de un repositorio](/get-started/quickstart/fork-a-repo)".

## Bifurcar un repositorio

En este tutorial se usa [el proyecto Spoon-Knife](https://github.com/octocat/Spoon-Knife), un repositorio de prueba hospedado en {% data variables.product.prodname_dotcom_the_website %} que le permite probar el flujo de trabajo de la bifurcación y la solicitud de incorporación de cambios.

1. Vaya al proyecto `Spoon-Knife` en https://github.com/octocat/Spoon-Knife.
2. Haga clic en **Fork** (Bifurcar).
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

**Nota:** Si quieres copiar ramas adicionales del repositorio primario, puedes hacerlo desde la página **Ramas**. Para obtener más información, consulte "[Creación y eliminación de ramas en el repositorio](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-and-deleting-branches-within-your-repository)".

{% endnote %}

## Clonar una bifurcación

Bifucrcaste el repositorio Spoon-Knife exitosamente pero, hasta ahora, solo existe en {% data variables.product.product_name %}. Para poder trabajar en el proyecto, necesitarás clonarlo en tu computadora.

Puedes clonar tu bifurcación con la línea de comandos, el {% data variables.product.prodname_cli %} o {% data variables.product.prodname_desktop %}.

{% webui %}

1. En {% data variables.product.product_name %}, vaya a **su bifurcación** del repositorio Spoon-Knife.
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
  > remove: Total 10 (delta 1), reused 10 (delta 1)
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

## Hacer y subir cambios

Continúe y realice algunos cambios en el proyecto con su editor de texto favorito, como [Visual Studio Code](https://code.visualstudio.com). Por ejemplo, podría cambiar el texto de `index.html` para agregar su nombre de usuario de GitHub.

Cuando estés listo para enviar tus cambios, pruébalos y confírmalos. `git add .` indica a Git que quiere incluir todos sus cambios en la siguiente confirmación. `git commit` toma una instantánea de esos cambios.

{% webui %}

```shell
git add .
git commit -m "a short description of the change"
```

{% endwebui %}

{% cli %}

```shell
git add .
git commit -m "a short description of the change"
```

{% endcli %}

{% desktop %}

Para obtener más información sobre cómo almacenar provisionalmente y confirmar los cambios en {% data variables.product.prodname_desktop %}, vea "[Confirmación y revisión de los cambios en el proyecto](/desktop/contributing-and-collaborating-using-github-desktop/making-changes-in-a-branch/committing-and-reviewing-changes-to-your-project#selecting-changes-to-include-in-a-commit)".

{% enddesktop %}

Cuando pruebas y confirmas archivos, esencialmente le dices a Git "¡Ok, toma una captura de mis cambios!" Puedes seguir haciendo más cambios y tomando más capturas de las confirmaciones.

Ahora mismo, tus cambios solo existen localmente. Cuando estés listo para subir tus cambios a {% data variables.product.product_name %}, sube tus cambios al remoto.

{% webui %}

```shell
git push
```

{% endwebui %}

{% cli %}

```shell
git push
```

{% endcli %}

{% desktop %}

Para obtener más información sobre cómo insertar cambios en {% data variables.product.prodname_desktop %}, vea "[Inserción de cambios en GitHub](/desktop/contributing-and-collaborating-using-github-desktop/making-changes-in-a-branch/pushing-changes-to-github)".

{% enddesktop %}

## Hacer una solicitud de cambios

¡Por fin, estás listo para proponer cambios en el proyecto principal! Este es el paso final para producir una bifurcación del proyecto de alguien más y, probablemente, el más importante. Si hiciste un cambio que piensas que beneficiará a la comunidad integralmente, debes considerar en retribuir con esta contribución.

Para hacerlo, dirígete al repositorio de {% data variables.product.product_name %} en donde vive tu proyecto. En este ejemplo, sería `https://www.github.com/<your_username>/Spoon-Knife`. Verá un banner que indica que la rama está una confirmación por delante de `octocat:main`. Haga clic en **Contribute** (Contribuir) y,después, en **Open a pull request** (Abrir una solicitud de incorporación de cambios).

{% data variables.product.product_name %} le dirigirá a una página que muestra las diferencias entre la bifurcación y el repositorio `octocat/Spoon-Knife`. Haga clic en **Create pull request** (Crear solicitud de incorporación de cambios).

{% data variables.product.product_name %} te llevará a una página en donde podrás ingresar un título y una descripción de tus cambios. Es importante que proporciones tanta información útil y racional para explicar el porqué de la solicitud de cambios en primer lugar. El propietario del proyecto necesita poder determinar si tu cambio es tan útil para todos como tú piensas que lo es. Por último, haga clic en **Create pull request** (Crear solicitud de incorporación de cambios).

## Adminsitrar la retroalimentación

Las solicitudes de cambios son un área de debate. En este caso, el Octocat está muy ocupado y, probablemente, no fusionará tus cambios. Para el caso de otros proyectos, no te ofendas si el dueño del proyecto rechaza tu solicitud de cambios o pide más información sobre por qué se hizo. Incluso, podría suceder que el propietario del proyecto elija no fusionar tu solicitud de cambios, y esto está totalmente bien. Tu copia existirá en la infamia del internet. Y, quién sabe... Tal vez alguien que jamás hayas conocido pensará que tus cambios son mucho más valiosos que el proyecto original.

## Búsqueda de proyectos

Bifurcaste y retribuiste al proyecto de un repositorio con éxito. Continúe contribuyendo.{% ifversion fpt %} Para obtener más información, consulte "[Búsqueda de formas de contribuir al código abierto en GitHub](/get-started/exploring-projects-on-github/finding-ways-to-contribute-to-open-source-on-github)".{% endif %}
