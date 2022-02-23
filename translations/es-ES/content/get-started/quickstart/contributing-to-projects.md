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
2. Haz clic en **Bifurcar**. ![Botón Bifurcar](/assets/images/help/repository/fork_button.jpg)
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

Puedes proceder y hacer algunos cambios al proyecto utilizando tu editor de texto favorito, como [Atom](https://atom.io). You could, for example, change the text in `index.html` to add your GitHub username.

When you're ready to submit your changes, stage and commit your changes. `git add .` tells Git that you want to include all of your changes in the next commit. `git commit` takes a snapshot of those changes.

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

When you stage and commit files, you essentially tell Git, "Okay, take a snapshot of my changes!" You can continue to make more changes, and take more commit snapshots.

Right now, your changes only exist locally. When you're ready to push your changes up to {% data variables.product.product_name %}, push your changes to the remote.

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

## Making a pull request

At last, you're ready to propose changes into the main project! This is the final step in producing a fork of someone else's project, and arguably the most important. If you've made a change that you feel would benefit the community as a whole, you should definitely consider contributing back.

To do so, head on over to the repository on {% data variables.product.product_name %} where your project lives. For this example, it would be at `https://www.github.com/<your_username>/Spoon-Knife`. You'll see a banner indicating that your branch is one commit ahead of `octocat:main`. Click **Contribute** and then **Open a pull request**.

{% data variables.product.product_name %} will bring you to a page that shows the differences between your fork and the `octocat/Spoon-Knife` repository. Haz clic en **Create Pull Request** (Crear solicitud de extracción).

{% data variables.product.product_name %} will bring you to a page where you can enter a title and a description of your changes. It's important to provide as much useful information and a rationale for why you're making this pull request in the first place. The project owner needs to be able to determine whether your change is as useful to everyone as you think it is. Finally, click **Create pull request**.

## Managing feedback

Pull Requests are an area for discussion. In this case, the Octocat is very busy, and probably won't merge your changes. For other projects, don't be offended if the project owner rejects your pull request, or asks for more information on why it's been made. It may even be that the project owner chooses not to merge your pull request, and that's totally okay. Your copy will exist in infamy on the Internet. And who knows--maybe someone you've never met will find your changes much more valuable than the original project.

## Finding projects

You've successfully forked and contributed back to a repository. ¡Ve y contribuye más!{% ifversion fpt %} Para obtener más información, consulta la sección "[Encontrar formas de contribuir con el código abierto en GitHub](/get-started/exploring-projects-on-github/finding-ways-to-contribute-to-open-source-on-github)".{% endif %}
