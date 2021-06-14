---
title: Resolver un conflicto de fusión en GitHub
intro: 'Puedes resolver conflictos de fusión simples que impliquen realizar cambios de líneas en GitHub, usando el editor de conflictos.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-on-github
  - /articles/resolving-a-merge-conflict-on-github
  - /github/collaborating-with-issues-and-pull-requests/resolving-a-merge-conflict-on-github
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---

Solo puedes resolver los conflictos de fusión en {% data variables.product.product_name %} que hayan sido provocados por realizar cambios de líneas, como cuando las personas hacen cambios diferentes en la misma línea del mismo archivo en ramas diferentes de tu repositorio de Git. Para todos los demás tipos de conflictos de fusión, debes resolver el conflicto de manera local desde la línea de comando. Para obtener más información, consulta "[Resolver un conflicto de fusión en la línea de comandos](/articles/resolving-a-merge-conflict-using-the-command-line/)".

{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}
Si un administrador del sitio inhabilita el editor de conflictos de fusión para las solicitudes de extracción entre repositorios, no podrás utilizar el editor de conflictos en {% data variables.product.product_name %} y deberás resolver los conflictos de fusión desde la línea de comandos. Por ejemplo, si el editor de conflictos de fusión está inhabilitado, no podrás utilizarlo en una solicitud de extracción entre una bifurcación y el repositorio ascendente.
{% endif %}

{% warning %}

{% if currentVersion ver_lt "enterprise-server@2.22" %}
**Advertencia:** Cuando resuelvas un conflcto de fusión en {% data variables.product.product_name %}, toda la [rama base](/github/getting-started-with-github/github-glossary#base-branch) de tu solicitud de extracción se fusionará en la [rama de encabezado](/github/getting-started-with-github/github-glossary#head-branch), aún si dicha rama es la rama predeterminada de tu repositorio o está protegida. Asegúrate que realmente quieras hacer una confirmación para esta rama.
{% else %}
**Advertencia:** Cuando resuelves un conflicto de fusión en {% data variables.product.product_name %}, toda la [rama base](/github/getting-started-with-github/github-glossary#base-branch) de tu solicitud de extracción se fusiona en la [rama principal](/github/getting-started-with-github/github-glossary#head-branch). Asegúrate que realmente quieras hacer una confirmación para esta rama. Si la rama de encabezado es la predeterminada para tu repositorio, se te dará la opción de crear una rama nueva para que funcione como rama de encabezado para tu solicitud de extracción. Si la rama principal está protegida, no podrás fusionar tu resolución de conflictos con ella, así que se te pedirá crear una nueva rama principal. Para obtener más información, consulta"[Acerca de las ramas protegidas](/github/administering-a-repository/about-protected-branches)".
{% endif %}

{% endwarning %}

{% data reusables.repositories.sidebar-pr %}
1. En la lista de "Pull Requests" (Solicitudes de extracción), haz clic en la solicitud de extracción con un conflicto de fusión que quieres resolver.
1. Cerca de la parte de abajo de tu solicitud de extracción, haz clic en **Resolve conflicts** (Resolver conflictos). ![Botón para resolver conflictos de fusión](/assets/images/help/pull_requests/resolve-merge-conflicts-button.png)

 {% tip %}

 **Tip:** si se desactiva el botón de **Resolve conflicts** el conflicto de fusión de tu solicitud de cambios es demasiado complejo para resolverse en {% data variables.product.product_name %}{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %} o el administrador inhabilitó el editor de conflictos para las solicitudes de cambios entre los repositorios{% endif %}. Debes resolver el conflicto de fusión utilizando un cliente de Git alterno, o utilizando Git en la línea de comandos. Para obtener más información, consulta "[Resolver un conflicto de fusión con la línea de comando](/articles/resolving-a-merge-conflict-using-the-command-line)".

 {% endtip %}
{% data reusables.pull_requests.decide-how-to-resolve-competing-line-change-merge-conflict %}
 ![Ver el ejemplo de conflicto de fusión con los marcadores de conflicto](/assets/images/help/pull_requests/view-merge-conflict-with-markers.png)
1. Si tienes más de un conflicto de fusión en tu archivo, desplázate hacia abajo hasta el siguiente conjunto de marcadores de conflicto y repite los pasos cuatro y cinco para resolver el conflicto de fusión.
1. Una vez que hayas resuelto todos los conflictos en el archivo, haz clic en **Mark as resolved** (Marcar como resuelto). ![Dar clic en el botón de marcar como resuelto](/assets/images/help/pull_requests/mark-as-resolved-button.png)
1. Si tienes más de un archivo con conflictos, selecciona el siguiente archivo que quieres editar del lado izquierdo de la página en "conflicting files" (archivos conflictivos) y repite los pasos cuatro a siete hasta que hayas resuelto todos los conflictos de fusión de tu solicitud de extracción. ![Seleccionar el siguiente archivo conflictivo, de ser aplicable](/assets/images/help/pull_requests/resolve-merge-conflict-select-conflicting-file.png)
1. Una vez que hayas resuelto todos tus conflictos de fusión, haz clic en **Commit merge** (Confirmar fusión). Esto fusiona toda la rama de base con tu rama de encabezado. ![Resolve merge conflicts button](/assets/images/help/pull_requests/merge-conflict-commit-changes.png){% if currentVersion ver_lt "enterprise-server@2.22" %}
1. Si se te solicita, revisa la rama para la que vas a confirmar. Si quieres confirmar para esta rama, haz clic en **I understand, update _BRANCH_** (Comprendo, actualizar RAMA). ![Merge conflict confirmation window](/assets/images/help/pull_requests/merge-conflict-confirmation.png){% else %}
1. Si se te solicita, revisa la rama para la que vas a confirmar.

   Si la rama principal es la rama predeterminada del repositorio, puedes escoger ya sea actualizar esta rama con los cambios que hiciste para resolver el conflicto, o crear una rama nueva y utilizarla como la rama principal de la solicitud de extracción. ![Mensaje para revisar la rama que se actualizará](/assets/images/help/pull_requests/conflict-resolution-merge-dialog-box.png)

   Si eliges crear una rama nueva, ingresa un nombre para ésta.

   Si la rama principal de tu solicitud de extracción está protegida, debes crear una rama nueva. No tendrás la opción para actualizar la rama protegida.

   Da clic en **Crear rama y actualizar mi solicitud de extracción** o en **Entiendo, continuar actualizando la _RAMA_**. El texto del botón corresponde a la acción que estás realizando.
{% endif %}
1. Para fusionar tu solicitud de extracción, haz clic en **Merge pull request** (Fusionar solicitud de extracción). Para obtener más información acerca de otras opciones de fusión de solicitudes de extracción, consulta "[Fusionar una solicitud de extracción](/articles/merging-a-pull-request/)".

### Leer más

- "[Acerca de las fusiones de solicitudes de extracción](/articles/about-pull-request-merges/)"
