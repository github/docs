---
title: Cierre de un problema
intro: 'Puedes cerrar una incidencia cuando se han corregido los errores, cuando se realizan acciones como consecuencia de los comentarios o para mostrar que el trabajo no está planeado.'
permissions: 'Anyone can close an issue they opened.<br><br>Repository owners, collaborators on repositories owned by a personal account, and people with triage permissions or greater on repositories owned by an organization can close issues opened by others. {% data reusables.enterprise-accounts.emu-permission-repo %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Issues
  - Project management
shortTitle: Close an issue
ms.openlocfilehash: 889775474dc94f10c62e59916e1fa13b263b3474
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147060431'
---
{% note %}

**Nota**: También puedes cerrar las incidencias automáticamente con palabras clave en solicitudes de incorporación de cambios y mensajes de confirmación. Para más información, vea "[Vinculación de una solicitud de incorporación de cambios a una incidencia](/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword#linking-a-pull-request-to-an-issue-using-a-keyword)".

{% endnote %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issues %}
1. En la lista de incidencias, haz clic en la que quieres cerrar.
{%- ifversion issue-close-reasons %}
1. Opcionalmente, para cambiar el motivo que lleva a cerrar la incidencia, selecciona {% octicon "triangle-down" aria-label="The down triangle octicon" %} junto a "Cerrar incidencia" y haz clic en un motivo.
   ![Captura de pantalla en la que se muestra el menú desplegable que contiene los motivos para cerrar la incidencia](/assets/images/help/issues/close-issue-select-reason.png)
2. Haz clic en **Cerrar incidencia**.
   ![Captura de pantalla en la que se muestra el botón "Cerrar incidencia"](/assets/images/help/issues/close-issue-with-reason.png) {%- else %}
1. En la parte inferior de la página, haz clic en **Cerrar incidencia**.
   ![Captura de pantalla en la que se muestra el botón "Cerrar incidencia"](/assets/images/help/issues/close-issue.png) {% endif %}
