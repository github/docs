---
title: Restaurando un repositorio eliminado
intro: Puede restaurar repositorios eliminados para recuperar su contenido.
permissions: Enterprise owners can restore a deleted repository.
versions:
  ghes: '*'
  ghae: '*'
topics:
  - Enterprise
  - Privacy
  - Repositories
shortTitle: Restore a deleted repository
ms.openlocfilehash: 538521e865b6a59c1d143a9774d7a462f5e4ee42
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '146199797'
---
## Acerca de la restauración de repositorios

Generalmente, si alguien elimina un repositorio, estará disponible en el disco por 90 días y se puede restablecer mediante el tablero de administración del sitio. Para obtener más información, consulta "[Panel de administración del sitio](/admin/configuration/configuring-your-enterprise/site-admin-dashboard)".

A menos de que exista una orden de conservación por razones legales en curso para un usuario u organización, el repositorio se purgará y borrará para siempre después de 90 días.

Si un repositorio fuera parte de una red de bifurcaciones cuando se borró, el repositorio restablecido se desprenderá de la red de bifurcación original.

Puede tardar hasta una hora después de que se elimine un repositorio antes de que ese repositorio esté disponible para la restauración.

Restaurar un repositorio no restaurará los archivos adjuntos de lanzamiento o los permisos de equipo. Las propuestas que se restablezcan no se etiquetarán.

## Restaurando un repositorio eliminado

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.search-user-or-org %} {% data reusables.enterprise_site_admin_settings.click-user-or-org %}
1. En la sección {% octicon "repo" aria-label="The repo icon" %} **Repositories**, haga clic en el vínculo {% octicon "trash" aria-label="The trash icon" %} **Deleted repositories**.
1. Busque el repositorio que quiera restaurar en la lista de repositorios eliminados y, a continuación, a la derecha del nombre del mismo, haga clic en **Restore**.
1. Para confirmar que desea restaurar ese repositorio, haga clic en **Restore**.

## Información adicional

- "[Asignar un titular legal a un usuario o una organización](/admin/user-management/managing-users-in-your-enterprise/placing-a-legal-hold-on-a-user-or-organization)"
