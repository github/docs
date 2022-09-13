---
title: Combinación de una solicitud de incorporación de cambios
intro: Fusionar una solicitud de extracción dentro de una rama ascendente cuando el trabajo está completo. Cualquier persona con acceso de escritura al repositorio puede completar la fusión.
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request
  - /articles/merging-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/merging-a-pull-request
  - /github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
ms.openlocfilehash: cccb85404c9cfe7305d639911528afed3706edfa
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '145137762'
---
## Acerca de las fusiones de las solicitudes de extracción

En una solicitud de extracción, propones que los cambios que hayas hecho en una rama de encabezado se fusionen en una rama base. Por defecto, cualquier solicitud de extracción se puede fusionar en cualquier momento, a menos que la rama de encabezado esté en conflicto con la rama base. Sin embargo, puede que existan restricciones sobre cuándo puedes fusionar una solicitud de cambios en una rama específica. Por ejemplo, puede que solo puedas fusionar una solicitud de extracción en la rama predeterminada si están pasando las verificaciones de estado requeridas. Para más información, vea "[Acerca de las ramas protegidas](/github/administering-a-repository/about-protected-branches)".

{% data reusables.pull_requests.you-can-auto-merge %}

Si la solicitud de incorporación de cambios tiene conflictos de combinación, o bien si quiere probar los cambios antes de la combinación, puede [extraer del repositorio local la solicitud de incorporación de cambios](/github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/checking-out-pull-requests-locally) y combinarla desde la línea de comandos.

No puedes fusionar un borrador de solicitud de cambios. Para más información sobre el borrador de solicitudes de incorporación de cambios, vea "[Acerca de las solicitudes de incorporación de cambios](/articles/about-pull-requests#draft-pull-requests)".

El repositorio podría configurarse para que la rama de encabezado para una solicitud de cambios se borre automáticamente cuando fusiones una solicitud de cambios. Para más información, vea "[Administración de la eliminación automática de ramas](/github/administering-a-repository/managing-the-automatic-deletion-of-branches)".

{% note %}

**Nota:** {% data reusables.pull_requests.retargeted-on-branch-deletion %} Para más información, vea "[Acerca de las ramas](/github/collaborating-with-issues-and-pull-requests/about-branches#working-with-branches)".

{% endnote %}

Las solicitudes de incorporación de cambios se combinan con [la opción`--no-ff`](https://git-scm.com/docs/git-merge#_fast_forward_merge), excepto las [solicitudes de incorporación de cambios con confirmaciones de fusión mediante cambio de base o fusión mediante combinación con "squash"](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges), que se combinan mediante la opción de avance rápido.

{% data reusables.pull_requests.close-issues-using-keywords %}

Si decide que no quiere que los cambios en una rama de tema se combinen con la rama ascendente, puede [cerrar la solicitud de incorporación de cambios](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/closing-a-pull-request) sin combinarla.

## Combinación de una solicitud de incorporación de cambios

{% webui %}

{% data reusables.repositories.sidebar-pr %}
2. En la lista "Pull Requests" (Solicitudes de extracción), haz clic en la solicitud de extracción que deseas fusionar.
3. Según las opciones de fusión habilitadas para tu repositorio, puedes:
    - [Para combinar todas las confirmaciones en la rama base](/articles/about-pull-request-merges/), haga clic en **Combinar solicitud de incorporación de cambios**. Si no se muestra la opción **Combinar solicitud de incorporación de cambios**, haga clic en el menú desplegable de fusión y seleccione **Crear una confirmación de fusión mediante combinación**.
    ![merge-pull-request-button](/assets/images/help/pull_requests/pullrequest-mergebutton.png)
    - [Para fusionar mediante combinación con "squash" las confirmaciones en una confirmación](/articles/about-pull-request-merges/#squash-and-merge-your-pull-request-commits), haga clic en el menú desplegable de combinación, seleccione **Combinar y fusionar** y después haga clic en el botón **Combinar y fusionar**.
    ![Clic en el botón Combinar y fusionar](/assets/images/help/pull_requests/select-squash-and-merge-from-drop-down-menu.png)
    - [Fusione mediante cambio de base las confirmaciones individualmente en la rama base](/articles/about-pull-request-merges/#rebase-and-merge-your-pull-request-commits); para ello, haga clic en el menú desplegable de combinación, seleccione **Rebase and merge** y, después, haga clic en el botón **Rebase and merge**.
    ![Selección de fusionar mediante cambio de base y combinar en el menú desplegable](/assets/images/help/pull_requests/select-rebase-and-merge-from-drop-down-menu.png)

    {% note %}

    **Nota:** Fusionar mediante cambio de base y combinar siempre actualizará la información de la persona que confirma el cambio y creará SHA de confirmación. Para más información, vea "[Acerca de las combinaciones de solicitudes de incorporación de cambios](/articles/about-pull-request-merges#rebase-and-merge-your-pull-request-commits)".

    {% endnote %}
4. Si se te solicita, escribe un mensaje de confirmación o acepta el mensaje predeterminado.

   {% data reusables.pull_requests.default-commit-message-squash-merge %} ![Campo Confirmar mensaje](/assets/images/help/pull_requests/merge_box/pullrequest-commitmessage.png)

{% data reusables.files.choose-commit-email %}

   {% note %}

   **Nota:** El selector de correo electrónico no se encuentra disponible para las fusiones de mediante cambio de base, que no crean una confirmación de fusión, ni para las fusiones mediante combinación con "squash", que acreditan al usuario que ha creado la solicitud de incorporación de cambios como el creador de la confirmación combinada con "squash".

   {% endnote %}

6. Haga clic en **Confirm merge**, **Confirm squash and merge** o **Confirm rebase and merge**.
6. Opcionalmente, [elimine la rama](/articles/deleting-unused-branches). Esto mantiene ordenado el listado de ramas en tu repositorio.

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Para combinar una solicitud de incorporación de cambios, use el subcomando `gh pr merge`. Reemplace `pull-request` por el número, la dirección URL o la rama principal de la solicitud de incorporación de cambios.

```shell
gh pr merge <em>pull-request</em>
```

Sigue los mensajes interactivos para completar la fusión. Para más información sobre los métodos de combinación que puede elegir, vea "[Acerca de las combinaciones de solicitudes de incorporación de cambios](/github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges)".

Como alternativa, puedes utilizar marcadores para omitir los mensajes interactivos. Por ejemplo, este comando combinará las confirmaciones en una sola con el mensaje de confirmación "my squash commit", fusiona la confirmación combinada en la rama base y luego borra la rama local y remota.

```shell
gh pr merge 523 --squash --body "my squash commit" --delete-branch
```

{% endcli %}

## Información adicional

- "[Reversión de una solicitud de incorporación de cambios](/articles/reverting-a-pull-request)"
- "[Sincronización de la rama](/desktop/guides/contributing-to-projects/syncing-your-branch/)" con {% data variables.product.prodname_desktop %}
- "[Acerca de las combinaciones de solicitud de incorporación de cambios](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges)"
- "[Solución de conflictos de combinación](/github/collaborating-with-pull-requests/addressing-merge-conflicts)"
