---
title: Niveles de permisos para un repositorio de una cuenta personal
intro: 'Un repositorio que pertenece a una cuenta personal tiene dos niveles de permiso: propietario del repositorio y colaboradores.'
redirect_from:
  - /articles/permission-levels-for-a-user-account-repository
  - /github/setting-up-and-managing-your-github-user-account/permission-levels-for-a-user-account-repository
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/permission-levels-for-a-user-account-repository
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/permission-levels-for-a-user-account-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Accounts
shortTitle: Repository permissions
ms.openlocfilehash: dd2124c23054fa7bd44bb6501dae4363e59bab75
ms.sourcegitcommit: 27882d9b3f19979c817c25952a2fb4dc4c6f0a65
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/27/2022
ms.locfileid: '148113877'
---
## Acerca de los niveles de permisos para un repositorio de una cuenta personal

Los repositorios propiedad de las cuentas personales tienen un propietario. Los permisos de propiedad no se pueden compartir con otra cuenta personal.

También puede {% ifversion fpt or ghec %}invitar{% else %}agregar{% endif %} usuarios de {% data variables.product.product_name %} al repositorio como colaboradores. Para más información, vea "[Invitación de colaboradores a un repositorio personal](/github/setting-up-and-managing-your-github-user-account/inviting-collaborators-to-a-personal-repository)".

{% tip %}

**Sugerencia:** si necesitas un acceso más pormenorizado a un repositorio propiedad de tu cuenta personal, considera la posibilidad de transferir el repositorio a una organización. Para más información, vea "[Transferencia de un repositorio](/github/administering-a-repository/transferring-a-repository#transferring-a-repository-owned-by-your-personal-account)".

{% endtip %}

## Acceso de propietarios a un repositorio propiedad de una cuenta personal

El propietario del repositorio tiene control completo del repositorio. Adicionalmente a las acciones que pudiera realizar cualquier colaborador, el propietario del repositorio puede realizar las siguientes.

| Acción | Más información |
| :- | :- |
| {% ifversion fpt or ghec %}Invitación a colaboradores{% else %}Adición de colaboradores{% endif %} | "[Invitación a colaboradores a un repositorio personal](/github/setting-up-and-managing-your-github-user-account/inviting-collaborators-to-a-personal-repository)" |
| Cambiar la visibilidad del repositorio | "[Configuración de la visibilidad de un repositorio](/github/administering-a-repository/setting-repository-visibility)" |{% ifversion fpt or ghec %}
| Limitar las interacciones con el repositorio | "[Limitación de las interacciones en el repositorio](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)" |{% endif %}
| Renombrar una rama, incluyendo la rama predeterminada | "[Cambio del nombre de una rama](/github/administering-a-repository/renaming-a-branch)" |
| Fusionar una solicitud de extracción sobre una rama protegida, incluso si no hay revisiones de aprobación | "[Acerca de las ramas protegidas](/github/administering-a-repository/about-protected-branches)" |
| Eliminar el repositorio | "[Eliminación de un repositorio](/repositories/creating-and-managing-repositories/deleting-a-repository)" |
| Administrar los temas del repositorio | "[Clasificación del repositorio con temas](/github/administering-a-repository/classifying-your-repository-with-topics)" |{% ifversion fpt or ghec %}
| Administrar la seguridad y la configuración de análisis del repositorio | "[Administración de la configuración de seguridad y análisis para el repositorio](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)" |{% endif %}{% ifversion fpt or ghec %}
| Habilitar la gráfica de dependencias para un repositorio privado | "[Exploración de las dependencias de un repositorio](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository#enabling-and-disabling-the-dependency-graph-for-a-private-repository)" |{% endif %}
| Borrar y restaurar paquetes | "[Eliminación y restauración de un paquete](/packages/learn-github-packages/deleting-and-restoring-a-package)" |
| Personalizar la vista previa de las redes sociales de un repositorio | "[Personalización de la vista previa de las redes sociales del repositorio ](/github/administering-a-repository/customizing-your-repositorys-social-media-preview)" |
| Crear una plantilla del repositorio | "[Creación de un repositorio de plantillas](/github/creating-cloning-and-archiving-repositories/creating-a-template-repository)" |
| Controlar el acceso a las {% data variables.product.prodname_dependabot_alerts %}| "[Administración de la configuración de seguridad y análisis para el repositorio](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts)" |{% ifversion fpt or ghec %}
| Descartar las {% data variables.product.prodname_dependabot_alerts %} en el repositorio | "[Visualización y actualización de {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts)" |
| Administrar el uso de datos para un repositorio privado | "[Administración de la configuración de uso de datos para el repositorio privado](/get-started/privacy-on-github/managing-data-use-settings-for-your-private-repository)"|{% endif %}
| Definir propietarios del código para un repositorio | "[Acerca de los propietarios de código](/github/creating-cloning-and-archiving-repositories/about-code-owners)" |
| Archivar el repositorio | "[Archivado de repositorios](/repositories/archiving-a-github-repository/archiving-repositories)" |{% ifversion fpt or ghec %}
| Creación de avisos de seguridad | "[Acerca de las asesorías de seguridad de repositorio](/github/managing-security-vulnerabilities/about-github-security-advisories)" |
| Representación de un botón de patrocinador | "[Representación de un botón de patrocinador en el repositorio](/github/administering-a-repository/displaying-a-sponsor-button-in-your-repository)" |{% endif %}
| Permitir o dejar de permitir la fusión automática para las solicitudes de cambios | "[Administración de la combinación automática para las solicitudes de incorporación de cambios en el repositorio](/github/administering-a-repository/managing-auto-merge-for-pull-requests-in-your-repository)" | 
| Administrar webhooks y desplegar llaves   | "[Administración de claves de implementación](/developers/overview/managing-deploy-keys#deploy-keys)" |

## Acceso de colaboradores a un repositorio propiedad de una cuenta personal

Los colaboradores de un repositorio personal pueden extraer (leer) el contienido del mismo y subir (escribir) los cambios al repositorio.

{% note %}

**Nota:** En un repositorio privado, los propietarios del repositorio solo pueden conceder acceso de escritura a los colaboradores. Los colaboradores no pueden tener acceso de solo lectura a los repositorios propiedad de una cuenta personal.

{% endnote %}

Los colaboradores también pueden realizar las siguientes acciones.

| Acción | Más información |
| :- | :- |
| Bifurcar el repositorio | "[Acerca de las bifurcaciones](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)" |
| Renombrar una rama diferente a la predeterminada | "[Cambio del nombre de una rama](/github/administering-a-repository/renaming-a-branch)" |
| Crear, editar, y borrar comentarios en las confirmaciones, solicitudes de cambios y propuestas del repositorio | <ul><li>"[Acerca de las incidencias](/github/managing-your-work-on-github/about-issues)"</li><li>"[Comentario de una solicitud de incorporación de cambios](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request)"</li><li>"[Administración de comentarios negativos](/communities/moderating-comments-and-conversations/managing-disruptive-comments)"</li></ul> |
| Crear, asignar, cerrar y volver a abrir las propuestas en el repositorio | "[Administración del trabajo con incidencias](/github/managing-your-work-on-github/managing-your-work-with-issues)" |
| Administrar las etiquetas para las propuestas y solicitudes de cambios en el repositorio | "[Etiquetado de incidencias y solicitudes de incorporación de cambios](/github/managing-your-work-on-github/labeling-issues-and-pull-requests)" |
| Administrar hitos para las propuestas y solicitudes de cambios en el repositorio | "[Creación y edición de hitos para incidencias y solicitudes de incorporación de cambios](/github/managing-your-work-on-github/creating-and-editing-milestones-for-issues-and-pull-requests)" |
| Marcar una propuesta o solicitud de cambios en el repositorio como duplicada | "[Acerca de incidencias duplicadas y solicitudes de incorporación de cambios](/github/managing-your-work-on-github/about-duplicate-issues-and-pull-requests)" |
| Crear, fusionar y cerrar las solicitudes de cambios en el repositorio | "[Propuesta de cambios en el trabajo con solicitudes de incorporación de cambios](/github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests)" |
| Habilitar e inhabilitar la fusión automática para una solicitud de cambios | "[Combinación automática de una solicitud de incorporación de cambios](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/automatically-merging-a-pull-request)"
| Aplicar los cambios sugeridos a las solicitudes de cambios en el repositorio |"[Incorporación de comentarios en la solicitud de incorporación de cambios](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/incorporating-feedback-in-your-pull-request)" |
| Crear una solicitud de cambios desde una bifurcación del repositorio | "[Creación de una solicitud de incorporación de cambios desde una bifurcación](/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork)" |
| Emitir una revisión de una solicitud de cambios que afecte la capacidad de fusión de una solicitud de cambios | "[Revisión de los cambios propuestos en una solicitud de incorporación de cambios](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)" |
| Crear y editar un wiki para el repositorio | "[Acerca de las wikis](/communities/documenting-your-project-with-wikis/about-wikis)" |
| Crear y editar los lanzamientos del repositorio | "[Administración de versiones en un repositorio](/github/administering-a-repository/managing-releases-in-a-repository)" |
| Actuar como propietario del código del repositorio | "[Acerca de los propietarios de código](/articles/about-code-owners)" |{% ifversion fpt or ghae or ghec %}
| Publicar, ver o instalar paquetes | "[Publicación y administración de paquetes](/github/managing-packages-with-github-packages/publishing-and-managing-packages)" |{% endif %}
| Eliminarse como colaboradores del repositorio | "[Eliminarse del repositorio de un colaborador](/github/setting-up-and-managing-your-github-user-account/removing-yourself-from-a-collaborators-repository)" |

## Información adicional

- "[Roles de repositorio para una organización](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)"
