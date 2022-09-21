---
title: Transferir una propuesta a otro repositorio
intro: 'Para mover una propuesta a un repositorio al que mejor se ajuste, puedes transferir propuestas abiertas a otros repositorios.'
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/transferring-an-issue-to-another-repository
  - /articles/transferring-an-issue-to-another-repository
  - /github/managing-your-work-on-github/transferring-an-issue-to-another-repository
  - /issues/tracking-your-work-with-issues/managing-issues/transferring-an-issue-to-another-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Transfer an issue
ms.openlocfilehash: ee17296217027d2de9805a905aaec187f53e5614
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: '147710423'
---
Para transferir una propuesta abierta a otro repositorio, debes tener acceso de escritura en el repositorio en el cual se encuentra la propuesta y en el que la recibirá cuando la transfieras. Para más información, vea "[Roles de repositorio para una organización](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)".

{% note %}

**Nota**: Solo puede transferir incidencias entre repositorios que son propiedad del mismo usuario o de la misma cuenta de la organización. {% ifversion fpt or ghes or ghec %}Una propuesta de repositorio privado no puede transferirse a un repositorio público.{% endif %}

{% endnote %}

Cuando transfieres una propuesta, se retendrán tanto los comentarios como las personas asignadas. Las etiquetas y los hitos también se conservan si están presentes en el repositorio de destino, con etiquetas coincidentes por nombre e hitos coincidentes por nombre y fecha de vencimiento. Esta propuesta se mantendrá en cualquier tablero de proyecto que pertenezca al usuario o que se encuentre en la organización y se eliminará de cualquier tablero de proyecto de los repositorios. Para más información, vea "[Acerca de los paneles de proyecto](/articles/about-project-boards)".

Las personas o equipos que se mencionan en la propuesta recibirán una notificación que les haga saber que la propuesta se transfirió a un repositorio nuevo. La URL original se redirige a la URL nueva de la propuesta. Las personas que no tengan permisos de lectura en el repositorio nuevo verán un anuncio que les hará saber que la propuesta se transfirió a un repositorio nuevo al que no pueden acceder.

## Transferir una propuesta abierta a otro repositorio

{% webui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issues %}
3. En la lista de propuestas, haz clic en la propuesta que quieres transferir.
4. En la barra lateral derecha, haga clic en **Transferir incidencia**.
![Botón para transferir la incidencia](/assets/images/help/repository/transfer-issue.png)
5. Use el menú desplegable **Elegir un repositorio** y seleccione el repositorio al que quiera transferir la incidencia.
![Elección de una selección de repositorio](/assets/images/help/repository/choose-a-repository.png)
6. Haga clic en **Transferir incidencia**.
![Botón Transferir incidencia](/assets/images/help/repository/transfer-issue-button.png)

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Para transferir una incidencia, use el subcomando `gh issue transfer`. Reemplace el parámetro `issue` por el número o la dirección URL de la incidencia. Reemplace el parámetro `{% ifversion ghes %}hostname/{% endif %}owner/repo` por la {% ifversion ghes %}URL{% else %}el nombre{% endif %} del repositorio al que quiera transferir la incidencia, como `{% ifversion ghes %}https://ghe.io/{% endif %}octocat/octo-repo`.

```shell
gh issue transfer <em>issue</em> <em>{% ifversion ghes %}hostname/{% endif %}owner/repo</em>
```

{% endcli %}

## Información adicional

- "[Acerca de las incidencias](/articles/about-issues)"
- "[Revisión del registro de seguridad](/articles/reviewing-your-security-log)"
- "[Revisión del registro de auditoría de la organización](/organizations/keeping-your-organization-secure/reviewing-the-audit-log-for-your-organization)"
