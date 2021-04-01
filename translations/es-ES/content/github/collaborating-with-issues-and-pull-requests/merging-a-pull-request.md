---
title: Fusionar una solicitud de extracción
intro: Fusionar una solicitud de extracción dentro de una rama ascendente cuando el trabajo está completo. Cualquier persona con acceso de escritura al repositorio puede completar la fusión.
redirect_from:
  - /articles/merging-a-pull-request
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - solicitudes de extracción
---

### Acerca de las fusiones de las solicitudes de extracción

En una solicitud de extracción, propones que los cambios que hayas hecho en una rama de encabezado se fusionen en una rama base. Por defecto, cualquier solicitud de extracción se puede fusionar en cualquier momento, a menos que la rama de encabezado esté en conflicto con la rama base. Sin embargo, puede que existan restricciones sobre cuándo puedes fusionar una solicitud de cambios en una rama específica. Por ejemplo, puede que solo puedas fusionar una solicitud de extracción en la rama predeterminada si están pasando las verificaciones de estado requeridas. Para obtener más información, consulta"[Acerca de las ramas protegidas](/github/administering-a-repository/about-protected-branches)".

{% data reusables.pull_requests.you-can-auto-merge %}

Si la solicitud de extracción tiene conflictos de fusión, o si deseas probar los cambios antes de la fusión, puedes [revisar la solicitud de extracción de forma local](/articles/checking-out-pull-requests-locally) y fusionarla utilizando la línea de comando.

No puedes fusionar un borrador de solicitud de cambios. Para obtener más información acerca de las solicitudes de extracción en borrador "[Acerca de las solicitudes de extracción](/articles/about-pull-requests#draft-pull-requests)".

{% data reusables.pull_requests.automatically-delete-branches %}

Si decides que no deseas que los cambios en una rama de tema se fusionen con la rama ascendente, puedes [cerrar la solicitud de extracción](/articles/closing-a-pull-request) sin fusionar.

### Fusionar una solicitud de extracción en {% data variables.product.prodname_dotcom %}

{% data reusables.repositories.sidebar-pr %}
2. En la lista "Pull Requests" (Solicitudes de extracción), haz clic en la solicitud de extracción que deseas fusionar.
3. Según las opciones de fusión habilitadas para tu repositorio, puedes:
    - [Fusionar todas las confirmaciones de cambios dentro de la rama base](/articles/about-pull-request-merges/) al hacer clic en **Merge pull request (Fusionar solicitud de extracción)**. Si no se muestra la opción **Merge pull request** (Fusionar solicitud de extracción), haz clic en el menú desplegable de fusiones y selecciona **Create a merge commit** (Crear una confirmación de fusión). ![merge-pull-request-button (botón para fusionar solicitud de extracción)](/assets/images/help/pull_requests/pullrequest-mergebutton.png)
    - [Combinar las confirmaciones de cambios en una sola confirmación](/articles/about-pull-request-merges/#squash-and-merge-your-pull-request-commits) haciendo clic en el menú desplegable, luego selecciona **Squash and merge** (Combinar y fusionar) y haz clic en el botón **Squash and merge** (Combinar y fusionar). ![click-squash-and-merge-button (hacer clic en el botón para combinar y fusionar)](/assets/images/help/pull_requests/select-squash-and-merge-from-drop-down-menu.png)
    - [Rebasar las confirmaciones por separado sobre la rama base](/articles/about-pull-request-merges/#rebase-and-merge-your-pull-request-commits) haciendo clic en el menú desplegable de fusión, luego selecciona **Rebase and merge** (Rebasar y fusionar) y haz clic en el botón **Rebase and merge** (Rebasar y fusionar). ![select-rebase-and-merge-from-drop-down-menu (seleccionar del menú desplegable para rebasar y fusionar)](/assets/images/help/pull_requests/select-rebase-and-merge-from-drop-down-menu.png)

    {% note %}

    **Nota:** Rebasar y fusionar siempre actualizará la información de la persona que confirma el cambio y creará una nueva SHA de confirmación de cambio. Para obtener más información, consulta "[Acerca de las fusiones de solicitudes de extracción](/articles/about-pull-request-merges#rebase-and-merge-your-pull-request-commits)."

    {% endnote %}
4. Si se solicita, escribe un mensaje de confirmación de cambios, o acepta el mensaje predeterminado.

   {% data reusables.pull_requests.default-commit-message-squash-merge %}
   ![Campo para mensaje de confirmación](/assets/images/help/pull_requests/merge_box/pullrequest-commitmessage.png)

{% data reusables.files.choose-commit-email %}

   {% note %}

   **Nota:** El selector de correo electrónico no se encuentra disponible para las fusiones de rebase, lo cual no crea una confirmación de fusión, o para fusiones de combinación, lo cual acredita al usuario que creó la solicitud de cambios como el autor de la confirmación combinada.

   {% endnote %}

6. Haz clic en **Confirm merge** (Confirmar fusión), **Confirm squash and merge** (Confirmar combinación y fusión) o **Confirm rebase and merge** (Confirmar rebase y fusión).
6. De forma opcional, [elimina la rama](/articles/deleting-unused-branches). Esto mantiene ordenado el listado de ramas en tu repositorio.

El repositorio podría configurarse para que la rama de encabezado para una solicitud de cambios se borre automáticamente cuando fusiones una solicitud de cambios. Para obtener más información, consulta la sección "[Administrar el borrado automático de ramas](/github/administering-a-repository/managing-the-automatic-deletion-of-branches)".

   {% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
   {% note %}

   **Nota:** {% data reusables.pull_requests.retargeted-on-branch-deletion %}
   Para obtener más información, consulta la sección "[Acerca de las ramas](/github/collaborating-with-issues-and-pull-requests/about-branches#working-with-branches)".

   {% endnote %}
   {% endif %}

Las solicitudes de extracción se fusionan utilizando [la opción `--no-ff`](https://git-scm.com/docs/git-merge#_fast_forward_merge), excepto [las solicitudes de extracción con confirmaciones de rebase y combinación](/articles/about-pull-request-merges), que se fusionan utilizando la opción de avance rápido.

{% data reusables.pull_requests.close-issues-using-keywords %}

### Leer más

- "[Revertir una solicitud de extracción](/articles/reverting-a-pull-request)"
- "[Sincronizar tu rama](/desktop/guides/contributing-to-projects/syncing-your-branch/)" utilizando {% data variables.product.prodname_desktop %}
- "[Acerca de las fusiones de solicitudes de extracción](/articles/about-pull-request-merges/)"
- "[Abordar conflictos de fusión](/articles/addressing-merge-conflicts)"
