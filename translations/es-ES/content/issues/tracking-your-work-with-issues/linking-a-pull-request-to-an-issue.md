---
title: Vincular una solicitud de cambios a una propuesta
intro: 'Puedes vincular una solicitud de incorporación de cambios {% ifversion link-existing-branches-to-issue %} o branch {% endif %} a un problema para mostrar que hay una corrección en curso y cerrar automáticamente el problema cuando se combina la solicitud de incorporación de cambios {% ifversion link-existing-branches-to-issue %}o branch {% endif %}.'
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/linking-a-pull-request-to-an-issue
  - /articles/closing-issues-via-commit-message
  - /articles/closing-issues-via-commit-messages
  - /articles/closing-issues-using-keywords
  - /github/managing-your-work-on-github/closing-issues-using-keywords
  - /github/managing-your-work-on-github/linking-a-pull-request-to-an-issue
  - /issues/tracking-your-work-with-issues/creating-issues/linking-a-pull-request-to-an-issue
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Link PR to issue
ms.openlocfilehash: 8c3ec2b778029c91d0e97783ced873e6b9b28a9b
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109985'
---
{% note %}

**Nota:** Las palabras clave especiales en la descripción de una solicitud de incorporación de cambios se interpretan cuando la solicitud de incorporación de cambios se destina a la rama *predeterminada* del repositorio. Pero si la base de la PR es *cualquier otra rama*, estas palabras clave se ignorarán, no se creará ningún vínculo y la combinación de la PR no tendrá efecto alguno en las incidencias. **Si quiere vincular una solicitud de incorporación de cambios con una incidencia mediante una palabra clave, la solicitud debe estar en la rama predeterminada.**

{% endnote %}

## Acerca de las propuestas y solicitudes de cambios vinculadas

Puedes vincular una incidencia a una solicitud de incorporación de cambios manualmente o con una palabra clave compatible en la descripción de la solicitud.

Cuando vinculas una solicitud de cambios a la propuesta a la que ésta hace referencia, los colaboradores pueden ver si alguien está trabajando en dicha propuesta.

Cuando fusionas una solicitud de cambios que se ha vinculado y se encuentra en la rama predeterminada de un repositorio, su propuesta vinculada se cierra automáticamente. Para más información sobre la rama predeterminada, vea "[Cambio de la rama predeterminada](/github/administering-a-repository/changing-the-default-branch)".

## Vincular una solicitud de cambios a una propuesta utilizando una palabra clave

Puedes vincular una solicitud de incorporación de cambios a una incidencia si utilizas una palabra clave compatible en la descripción de la solicitud o en un mensaje de confirmación. La solicitud de incorporación de cambios **debe estar** en la rama predeterminada.

* cerrar
* closes
* closed
* fix
* fixes
* fijo
* resolve
* resolves
* resolved

Si utilizas una palabra clave para referenciar un comentario de una solicitud de cambios en otra solicitud de cambios, estas solicitudes se enlazarán. Con la fusión de la solicitud de incorporación de cambios que hace la referencia también se cerrará la solicitud de incorporación de cambios referenciada.

La sintaxis para palabras clave de cierre dependerá de si la propuesta se encuentra en el mismo repositorio que la solicitud de cambios.

Informe vinculado | Sintaxis | Ejemplo
--------------- | ------ | ------
Propuesta en el mismo repositorio | *PALABRA CLAVE* #*NÚMERO DE INCIDENCIA* | `Closes #10`
Propuesta en un repositorio diferente | *PALABRA_CLAVE* *PROPIETARIO*/*REPOSITORIO*#*NÚMERO_DE_INCIDENCIA* | `Fixes octo-org/octo-repo#100`
Propuestas múltiples | Utilizar la sintaxis completa para cada informe | `Resolves #10, resolves #123, resolves octo-org/octo-repo#100`

Solo las solicitudes de incorporación de cambios vinculadas manualmente se pueden desvincular manualmente. Para desvincular una incidencia que hayas vinculado previamente utilizando una palabra clave, deberás editar la descripción de la solicitud de incorporación de cambios y así poder eliminar la palabra clave.

También puedes utilizar palabras clave de cierre en un mensaje de confirmación. La propuesta se cerrará cuando fusiones la confirmación en la rama predeterminada, pero la solicitud de cambios que contiene la confirmación no se listará como una solicitud de cambios enlazada.

## Vinculación manual de una solicitud de incorporación de cambios a una propuesta mediante la barra lateral de la solicitud de incorporación de cambios

Cualquiera con permisos de escritura en un repositorio puede vincular manualmente una solicitud de cambios a una propuesta desde la barra lateral de la solicitud de incorporación de cambios.

Puedes vincular hasta diez propuestas a cada solicitud de cambios manualmente. La propuesta y la solicitud de cambios deberán encontrarse en el mismo repositorio.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-pr %}
3. En la lista de solicitudes de extracción, da clic en aquella que quieras enlazar a un informe de problemas.
{% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.4 %}
4. En la barra lateral derecha, en la sección de "Desarrollo", haz clic en {% octicon "gear" aria-label="The Gear icon" %}.
{% else %}
4. En la barra lateral derecha, haga clic en **Incidencias vinculadas**.
  ![Incidencias vinculadas en la barra lateral derecha](/assets/images/help/pull_requests/linked-issues.png) {% endif %}
5. Da clic en la propuesta que quieras enlazar a la solicitud de cambios.
  ![Menú desplegable para vincular una incidencia](/assets/images/help/pull_requests/link-issue-drop-down.png)

{% ifversion link-existing-branches-to-issue %}

## Vinculación manual de una solicitud de incorporación de cambios o una rama a un problema mediante la barra lateral de la propuesta

Cualquiera con permisos de escritura en un repositorio puede vincular manualmente una solicitud de cambios o rama a una propuesta desde la barra lateral de la propuesta.

Puedes vincular hasta diez propuestas a cada solicitud de cambios manualmente. La propuesta puede estar en un repositorio diferente al de la solicitud de incorporación de cambios vinculada o la rama. Se recordará el último repositorio seleccionado 

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issues %}
3. En la lista de propuestas, haz clic en la propuesta a la que deseas vincular una solicitud de incorporación de cambios o una rama.
4. En la barra lateral derecha, haz clic en **Desarrollo**.
  ![Menú Desarrollo en la barra lateral derecha](/assets/images/help/issues/development-menu.png)
5. Haz clic en el repositorio que contiene la solicitud de incorporación de cambios o la rama que deseas vincular a la propuesta.
  ![Desplegable para seleccionar el repositorio](/assets/images/help/issues/development-menu-select-repository.png)
6. Haz clic en la solicitud de cambios o rama que quieras enlazar a la propuesta.
  ![Desplegable para vincular solicitud de incorporación de cambios o rama](/assets/images/help/issues/development-menu-select-pr-or-branch.png)
7. Haga clic en **Aplicar**.
  ![Aplicar](/assets/images/help/issues/development-menu-apply.png)

{% endif %}

## Información adicional

* "[Referencias y direcciones URL de vinculación automática](/articles/autolinked-references-and-urls/#issues-and-pull-requests)"
