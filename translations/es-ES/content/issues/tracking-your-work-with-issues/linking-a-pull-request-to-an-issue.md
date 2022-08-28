---
title: Vincular una solicitud de cambios a una propuesta
intro: Puedes vincular una solicitud de cambios a una propuesta para mostrar que una solución está en progreso y para cerrar automáticamente la propuesta cuando se fusione la solicitud de cambios.
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/linking-a-pull-request-to-an-issue
  - /articles/closing-issues-via-commit-message/
  - /articles/closing-issues-via-commit-messages/
  - /articles/closing-issues-using-keywords
  - /github/managing-your-work-on-github/closing-issues-using-keywords
  - /github/managing-your-work-on-github/linking-a-pull-request-to-an-issue
  - /issues/tracking-your-work-with-issues/creating-issues/linking-a-pull-request-to-an-issue
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Pull requests
shortTitle: Enlace a la solicitud de cambios o propuesta
---

{% note %}

**Nota:** Las palabras clave especiales en una descripción de una solicitud de cambios se interpretan cuando la solicitud de cambios apunte a la rama *predeterminada* del repositorio. Sin embargo, si la base de la solicitud es *cualquier otra rama*, entonces estas palabras clave se ignorarán, no se creará ningún enlace, y el fusionar la solicitud no tendrá efecto alguno en las propuestas. **Si quieres vincular una solicitud de cambios con una propuesta utilizando una palabra clave, la solicitud debe estar en la rama predeterminada.**

{% endnote %}

## Acerca de las propuestas y solicitudes de cambios vinculadas

Puedes enlazar un informe de problemas a una solicitud de extracción {% ifversion fpt or ghes or ghae %} manualmente o {% endif %}utilizando una palabra clave compatible en la descripción de esta solicitud.

Cuando enlazas una solicitud de extracción al informe de problemas al que ésta hace referencia, los colaboradores pueden ver si alguien está trabajando en dicho informe.

Cuando fusionas una solicitud de cambios que se ha vinculado y se encuentra en la rama predeterminada de un repositorio, su propuesta vinculada se cierra automáticamente. Para obtener más información acerca de la rama predeterminada, consulta la sección "[Cambiar la rama predeterminada](/github/administering-a-repository/changing-the-default-branch)".

## Vincular una solicitud de cambios a una propuesta utilizando una palabra clave

Puedes vincular una solicitud de cambios con una propuesta si utilizas una palabra clave compatible en la descripción de la solicitud o en un mensaje de confirmación (por favor, considera que la solicitud de cambios debe estar en la rama predeterminada).

* close
* closes
* closed
* fix
* fixes
* fixed
* resolver
* resuelve
* resuelto

La sintaxis para palabras clave de cierre dependerá de si el informe de problemas se encuentra en el mismo repositorio que la solicitud de extracción.

| Informe vinculado                     | Sintaxis                                                          | Ejemplo                                                        |
| ------------------------------------- | ----------------------------------------------------------------- | -------------------------------------------------------------- |
| Propuesta en el mismo repositorio     | Closes #10                                                        | `Closes #10`                                                   |
| Propuesta en un repositorio diferente | *PALABRA CLAVE* *PROPIETARIO*/*Repositorio*#*NÚMERO DE PROPUESTA* | `Fixes octo-org/octo-repo#100`                                 |
| Propuestas múltiples                  | Utilizar la sintaxis completa para cada informe                   | `Resolves #10, resolves #123, resolves octo-org/octo-repo#100` |

{% ifversion fpt or ghes or ghae %}Solo las solicitudes de extracción enlazadas manualmente se podrán desenlazar de la misma forma. Para desenlazar un informe de problemas que hayas enlazado previamente utilizando una palabra clave, deberás editar la descripción de la solicitud de extracción y así poder eliminar la palabra clave.{% endif %}

También puedes utilizar palabras clave de cierre en un mensaje de confirmación. La propuesta se cerrará cuando fusiones la confirmación en la rama predeterminada, pero la solicitud de cambios que contiene la confirmación no se listará como una solicitud de cambios enlazada.


{% ifversion fpt or ghes or ghae %}
## Vincular una solicitud de cambios manualmente a una propuesta

Cualquiera con permisos de escritura en un repositorio puede enlazar una solicitud de extracción a un problema manualmente.

Puedes enlazar hasta diez informes de problemas a cada solicitud de extracción manualmente. El informe de problemas y la solicitud de extracción deberán encontrarse en el mismo repositorio.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-pr %}
3. En la lista de solicitudes de extracción, da clic en aquella que quieras enlazar a un informe de problemas.
4. En la barra lateral derecha, da clic en **Propuestas vinculadas**. ![Informes de problemas enlazados en la barra lateral derecha](/assets/images/help/pull_requests/linked-issues.png)
5. Da clic en la propuesta que quieras enlazar a la solicitud de cambios. ![Menú desplegable para enlazar un informe de problemas](/assets/images/help/pull_requests/link-issue-drop-down.png)
{% endif %}

## Leer más

- "[URL y referencias auto-enlazadas](/articles/autolinked-references-and-urls/#issues-and-pull-requests)"
