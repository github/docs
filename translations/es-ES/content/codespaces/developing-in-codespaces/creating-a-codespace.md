---
title: Crear un codespace
intro: Puedes crear un codespace para una rama en un repositorio para desarrollar en línea.
product: '{% data reusables.gated-features.codespaces %}'
permissions: '{% data reusables.codespaces.availability %}'
redirect_from:
  - /github/developing-online-with-github-codespaces/creating-a-codespace
  - /github/developing-online-with-codespaces/creating-a-codespace
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
---

## Acerca de la creación de codespaces

You can create a codespace on {% data variables.product.prodname_dotcom_the_website %}, in {% data variables.product.prodname_vscode %}, or by using {% data variables.product.prodname_cli %}. {% data reusables.codespaces.codespaces-are-personal %}

Los codespaces se asocian con una rama específica de un repositorio y este repositorio no puede estar vacío. {% data reusables.codespaces.concurrent-codespace-limit %} Para obtener más información, consulta la sección "[Borrar un codespace](/github/developing-online-with-codespaces/deleting-a-codespace)".


Cuando creas un codespace, se suscitan varios pasos para crear y conectarte a tu ambiente de desarrollo:

- Paso 1: se le asignan una MV y almacenamiento a tu codespace.
- Paso 2: Se crea el contenedor y se clona tu repositorio.
- Paso 3: Puedes conectarte al codespace.
- Paso 4: El codespace sigue con la configuración post-creación.

Para obtener más información sobre lo que sucede cuando creas un codespace, consulta la sección "[A profundidad](/codespaces/getting-started/deep-dive)".

{% data reusables.codespaces.use-visual-studio-features %}

{% data reusables.codespaces.you-can-see-all-your-codespaces %}

## Acceso a los {% data variables.product.prodname_codespaces %}

{% data reusables.codespaces.availability %}

Cuando tienes acceso a los {% data variables.product.prodname_codespaces %}, verás una pestaña de "Codespaces" dentro del menú desplegable de **{% octicon "code" aria-label="The code icon" %} Código** cuando ves un repositorio.

Tendrás acceso a los codespaces bajo las siguientes condiciones:

* Eres un miembro de la organización que habilitó los {% data variables.product.prodname_codespaces %} y configuró un límite de gastos.
* Un propietario de la organización te proporcionó acceso a los {% data variables.product.prodname_codespaces %}.
* El repositorio le pertenece a la organización que habilitó los {% data variables.product.prodname_codespaces %}.

{% note %}

**Nota:** Los individuos que ya se hayan unido al beta con su cuenta personal de {% data variables.product.prodname_dotcom %} no perderán acceso a los {% data variables.product.prodname_codespaces %}, sin embargo, los {% data variables.product.prodname_codespaces %} para personas individuales seguirán en beta.

{% endnote %}

Los propietarios de las organizaciones pueden permitir que los miembros de la organización creen codespaces, limitar la creación de los codespaces para miembros selectos de la organización o inhabilitar la creación de codespaces. Para obtener información sobre cómo administrar el acceso a los codespaces dentro de tu organización, consulta la sección "[Habilitar los Codespaces para los usuarios de tu organización](/codespaces/managing-codespaces-for-your-organization/enabling-codespaces-for-your-organization#enable-codespaces-for-users-in-your-organization)".

Antes de que puedas utilizar {% data variables.product.prodname_codespaces %} en una organización, un propietario o gerente de facturación debe haber configurado un límite de gastos. Para obtener más información, consulta la sección "[Acerca de los límites de gastos para los Codespaces](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces#about-spending-limits-for-codespaces)".

Si te gustaría crear un codespace para un repositorio que pertenezca a tu cuenta personal o a otro usuario y tienes permiso para crear repositorios en una organización que haya habilitado los {% data variables.product.prodname_codespaces %}, puedes bifurcar repositorios que pertenezcan a los usuarios de esta organización y luego crear un codespace para dicha bifurcación.

## Crear un codespace

{% include tool-switcher %}

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
2. Debajo del nombre de repositorio, utiliza el menú desplegable de "Rama" y selecciona aquella en la que quieras crear un codespace.

   ![Menú desplegable de rama](/assets/images/help/codespaces/branch-drop-down.png)

3. Debajo del nombre de repositorio, utiliza el menú desplegable de **Código {% octicon "code" aria-label="The code icon" %}** y, en la pestaña de **Codespaces**, haz clic en {% octicon "plus" aria-label="The plus icon" %} **Codespace nuevo**.

   ![Botón de codespace nuevo](/assets/images/help/codespaces/new-codespace-button.png)

   Si eres un miembro de una organización y estás creando un codespace en un repositorio que le pertenece a esta, puedes seleccionar la opción de un tipo de máquina diferente. Desde el diálogo, elige un tipo de máquina y luego haz clic en **Crear codespace**. ![Elección de tipo de máquina](/assets/images/help/codespaces/choose-custom-machine-type.png)

{% endwebui %}

{% vscode %}

{% data reusables.codespaces.creating-a-codespace-in-vscode %}

{% endvscode %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

To create a new codespace, use the `gh codespace create` subcommand.

```shell
gh codespace create 
```

You are prompted to choose a repository, a branch, and a machine type (if more than one is available).

Alternatively, you can use flags to specify some or all of the options:

```shell
gh codespace create -r <em>owner</em>/<em>repo</em> -b <em>branch</em> -m <em>machine-type</em> 
```

Replace `owner/repo` with the repository identifier. Replace `branch` with the name of the branch, or the full SHA hash of the commit, that you want to be initially checked out in the codespace. If you use the `-r` flag without the `b` flag, the codespace is created from the default branch.

Replace `machine-type` with a valid identifier for an available machine type. Identifiers are strings such as: `basicLinux32gb` and `standardLinux32gb`. The type of machines that are available depends on the repository, your user account, and your location. If you enter an invalid or unavailable machine type, the available types are shown in the error message. If you omit this flag and more than one machine type is available you will be prompted to choose one from a list.

For more information about this command, see [the {% data variables.product.prodname_cli %} manual](https://cli.github.com/manual/gh_codespace_create).

{% endcli %}
