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
---

## Acerca de las bifurcaciones

Después de utilizar GitHub tú mismo por un tiempo, puede que quieras contribuir con el proyecto de alguien más. O tal vez te gustaría utilizar el proyecto de alguien más como punto inicial de uno propio. A este proceso se le conoce como bifurcación.

Crear una "bifurcación" es producir una copia personal del proyecto de alguien más. Las bifurcaciones son un tipo de puente entre el repositorio original y tu copia personal. Puedes emitir solicitudes de cambios para ayudar a mejorar los proyectos de otras personas al ofrecerles tus cambios para el proyecto original. La bifurcación es el núcleo del desarrollo de código social en GitHub. Para obtener más información, consulta[Bifurcar un repositorio](/get-started/quickstart/fork-a-repo)."

## Bifurcar un repositorio

Este tutorial utiliza [el proyecto Spoon-Knife](https://github.com/octocat/Spoon-Knife), un repositorio de prueba que se hospeda en {% data variables.product.prodname_dotcom_the_website %} y te permite probar el flujo de trabajo de la bifurcación y solicitud de cambios.

1. Navega al proyecto `Spoon-Knife` en https://github.com/octocat/Spoon-Knife.
2. Haz clic en **Bifurcar**. ![Botón Bifurcar](/assets/images/help/repository/fork_button.png)
1. {% data variables.product.product_name %} te llevará a tu copia (tu bifurcación) del repositorio Spoon-Knife.

## Clonar una bifurcación

Bifucrcaste el repositorio Spoon-Knife exitosamente pero, hasta ahora, solo existe en {% data variables.product.product_name %}. Para poder trabajar en el proyecto, necesitarás clonarlo en tu computadora.

Puedes clonar tu bifurcación con la línea de comandos, el {% data variables.product.prodname_cli %} o {% data variables.product.prodname_desktop %}.

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

## Hacer y subir cambios

Ve y haz algunos cambios al proyecto utilizando tu editor de texto favorito, como [Visual Studio Code](https://code.visualstudio.com). Podrías, por ejemplo, cambiar el texto en `index.html` para agregar tu nombre de usuario de GitHub.

Cuando estés listo para enviar tus cambios, pruébalos y confírmalos. `git add .` le dice a Git que quieres incluir todos tus cambios en la siguiente confirmación. `git commit` toma una captura de estos cambios.

{% webui %}

```shell
git add .
git commit -m "a short description of the change"
```

{% endwebui %}

{% cli %}

```shell
git add .
git commit -m "una descripción corta del cambio"
```

{% endcli %}

{% desktop %}

Para obtener más información sobre cómo probar y confirmar los cambios en {% data variables.product.prodname_desktop %}, consulta la sección "[Confirmar y revisar los cambios a tu proyecto](/desktop/contributing-and-collaborating-using-github-desktop/making-changes-in-a-branch/committing-and-reviewing-changes-to-your-project#selecting-changes-to-include-in-a-commit)".

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

Para obtener más información sobre cómo subir cambios a {% data variables.product.prodname_desktop %}, consulta la sección "[Subir cambios a GtiHub](/desktop/contributing-and-collaborating-using-github-desktop/making-changes-in-a-branch/pushing-changes-to-github)".

{% enddesktop %}

## Hacer una solicitud de cambios

¡Por fin, estás listo para proponer cambios en el proyecto principal! Este es el paso final para producir una bifurcación del proyecto de alguien más y, probablemente, el más importante. Si hiciste un cambio que piensas que beneficiará a la comunidad integralmente, debes considerar en retribuir con esta contribución.

Para hacerlo, dirígete al repositorio de {% data variables.product.product_name %} en donde vive tu proyecto. Para este ejemplo, esto sería en `https://www.github.com/<your_username>/Spoon-Knife`. Verás un letrero que indica que tu rama está una confirmación por delante de `octocat:main`. Haz clic en **Contribuir** y luego en **Abrir solicitud de cambios**.

{% data variables.product.product_name %} te llevará a una página que mostrará las diferencias entre tu bifurcación y el repositorio de `octocat/Spoon-Knife`. Haz clic en **Create Pull Request** (Crear solicitud de extracción).

{% data variables.product.product_name %} te llevará a una página en donde podrás ingresar un título y una descripción de tus cambios. Es importante que proporciones tanta información útil y racional para explicar el porqué de la solicitud de cambios en primer lugar. El propietario del proyecto necesita poder determinar si tu cambio es tan útil para todos como tú piensas que lo es. Finalmente, haz clic en **Crear una solicitud de cambios**.

## Adminsitrar la retroalimentación

Las solicitudes de cambios son un área de debate. En este caso, el Octocat está muy ocupado y, probablemente, no fusionará tus cambios. Para el caso de otros proyectos, no te ofendas si el dueño del proyecto rechaza tu solicitud de cambios o pide más información sobre por qué se hizo. Incluso, podría suceder que el propietario del proyecto elija no fusionar tu solicitud de cambios, y esto está totalmente bien. Tu copia existirá en la infamia del internet. Y, quién sabe... Tal vez alguien que jamás hayas conocido pensará que tus cambios son mucho más valiosos que el proyecto original.

## Encontrar proyectos

Bifurcaste y retribuiste al proyecto de un repositorio con éxito. ¡Ve y contribuye más!{% ifversion fpt %} Para obtener más información, consulta la sección "[Encontrar formas de contribuir con el código abierto en GitHub](/get-started/exploring-projects-on-github/finding-ways-to-contribute-to-open-source-on-github)".{% endif %}
