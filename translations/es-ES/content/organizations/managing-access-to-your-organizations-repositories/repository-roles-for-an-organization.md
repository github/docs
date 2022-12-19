---
title: Roles de repositorio para una organización
intro: Puedes personalizar el acceso a cada repositorio en tu organización si asignas roles granulares, lo cual le otorga acceso a las personas para las características y tareas que necesitan.
miniTocMaxHeadingLevel: 3
redirect_from:
- /articles/repository-permission-levels-for-an-organization-early-access-program
- /articles/repository-permission-levels-for-an-organization
- /github/setting-up-and-managing-organizations-and-teams/repository-permission-levels-for-an-organization
- /organizations/managing-access-to-your-organizations-repositories/repository-permission-levels-for-an-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Organizations
- Teams
shortTitle: Repository roles
ms.openlocfilehash: dbb5075dfc57e01e0658138b65d6231fb12f1071
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "147526706"
---
## Roles de repositorio para las organizaciones

Puedes otorgar diferentes niveles de acceso a los miembros organizacionales, colaboradores externos y equipos de personas para los repositorios que pertenezcan a una organización si los asignas con roles. Elige el rol que mejor se adecue a cada función de las personas o los equipos de tu proyecto sin darles más acceso del que necesitan.

Desde el menor hasta el mayo acceso, los roles para un repositorio de organización son:
- **Lectura**: se recomienda para colaboradores que no trabajan en el código, pero que quieren ver el proyecto o hablar sobre él
- **Evaluación de prioridades**: se recomienda para colaboradores que necesitan administrar de forma proactiva incidencias y solicitudes de incorporación de cambios sin acceso de escritura
- **Escritura**: se recomienda para los colaboradores que insertan cambios en el proyecto de forma activa
- **Mantenimiento**: se recomienda para los jefes de proyecto que necesitan administrar el repositorio sin acceder a acciones confidenciales o destructivas
- **Administración**: se recomienda para usuarios que necesitan acceso total al proyecto, incluidas acciones confidenciales y destructivas, como administrar la seguridad o eliminar un repositorio

{% ifversion fpt %} Si en la organización se usa {% data variables.product.prodname_ghe_cloud %}, puede crear roles de repositorio personalizados. Para más información, vea "[Administración de roles de repositorio personalizados para una organización](/enterprise-cloud@latest/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)" en la documentación de {% data variables.product.prodname_ghe_cloud %}.
{% elsif ghec or ghes > 3.4 or ghae-issue-6271 %} Puedes crear roles de repositorio personalizados. Para más información, vea "[Administración de roles de repositorio personalizados para una organización](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)".
{% endif %}

Los dueños de las organizaciones pueden configurar permisos base que apliquen a todos los miembros de la misma cuando accedan a cualquiera de los repositorios que le pertenezcan a dicha organización. Para más información, vea "[Definición de permisos base para una organización](/organizations/managing-access-to-your-organizations-repositories/setting-base-permissions-for-an-organization#setting-base-permissions)".

Los propietarios de la organización también pueden decidir limitar más el acceso a determinados parámetros y acciones de la organización. Para más información sobre opciones de configuración específicas, vea "[Administración de la configuración de la organización](/articles/managing-organization-settings)".

Adicionalmente a administrar los ajustes a nivel organizacional, los propietarios de organización tienen acceso administrativo a cada repositorio que pertenece a la organización. Para más información, vea "[Roles en una organización](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)".

{% warning %}

**Advertencia:** Cuando alguien agrega una clave de implementación a un repositorio, cualquier usuario que tenga la clave privada puede leer o escribir en el repositorio (según la configuración de la clave), incluso si luego se le elimina de la organización.

{% endwarning %}

## Permisos para cada rol

{% ifversion fpt %} Algunas de las características siguientes se limitan a las organizaciones que utilizan {% data variables.product.prodname_ghe_cloud %}. {% data reusables.enterprise.link-to-ghec-trial %} {% endif %}

{% ifversion fpt or ghes or ghec %} {% note %}

**Nota:** Los roles necesarios para usar las características de seguridad se enumeran en "[Requisitos de acceso para las características de seguridad](#access-requirements-for-security-features)" a continuación.

{% endnote %} {% endif %}

| Acción del repositorio | Lectura | Evaluación de errores | Escritura | Mantenimiento | Administrador |
|:---|:---:|:---:|:---:|:---:|:---:|
| Administrar el acceso [individual](/organizations/managing-access-to-your-organizations-repositories/managing-an-individuals-access-to-an-organization-repository), de [equipo](/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository) y de [colaborador externo](/organizations/managing-access-to-your-organizations-repositories/adding-outside-collaborators-to-repositories-in-your-organization) al repositorio | | | | | **✔️** |
| Extraer desde los repositorios asignados de la persona o el equipo | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| Bifurcar los repositorios asignados de la persona o el equipo | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| Editar y eliminar sus propios comentarios | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| Abrir propuestas | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| Cerrar propuestas que abrieron ellos mismos | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| Reabrir propuestas que cerraron ellos mismos | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| Recibir la asignación de una propuesta | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| Enviar solicitudes de extracción desde bifurcaciones de repositorios asignados del equipo | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| Enviar revisiones o solicitudes de extracción | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| Ver lanzamientos publicados | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |{% ifversion fpt or ghec %}
| Ver [Ejecuciones de flujo de trabajo de Acciones de GitHub](/actions/automating-your-workflow-with-github-actions/managing-a-workflow-run) | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |{% endif %}
| Editar los wikis en los repositorios públicos | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| Editar los wikis en los repositorios privados | | | **✔️** | **✔️** | **✔️** |{% ifversion fpt or ghec %}
| [Notificar contenido abusivo o con spam](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam) | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |{% endif %}
| Aplicar/descartar etiquetas | | **✔️** | **✔️** | **✔️** | **✔️** |
| Crear, editar, borrar etiquetas | | | **✔️** | **✔️** | **✔️** |
| Elegir, reabrir y asignar todas las propuestas y solicitudes de extracción | | **✔️** | **✔️** | **✔️** | **✔️** |
| [Habilitar e inhabilitar la fusión mediante combinación automática en una solicitud de incorporación de cambios](/github/administering-a-repository/managing-auto-merge-for-pull-requests-in-your-repository) | | | **✔️** | **✔️** | **✔️** |
| Aplicar hitos |  | **✔️** | **✔️** | **✔️** | **✔️** |
| Marcar [incidencias y solicitudes de incorporación de cambios duplicadas](/articles/about-duplicate-issues-and-pull-requests)| | **✔️** | **✔️** | **✔️** | **✔️** |
| Solicitar [revisiones de solicitudes de incorporación de cambios](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/requesting-a-pull-request-review) | | **✔️** | **✔️** | **✔️** | **✔️** |
| Combinar una [solicitud de incorporación de cambios](/github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges) | | | **✔️** | **✔️** | **✔️** |
| Subir a (escribir en) los repositorios asignados de la persona o el equipo | | | **✔️** | **✔️** | **✔️** |
| Editar y eliminar comentarios sobre confirmaciones, solicitudes de extracción y propuestas de cualquier persona | | | **✔️** | **✔️** | **✔️** |
| [Ocultar los comentarios de cualquier persona](/communities/moderating-comments-and-conversations/managing-disruptive-comments) | | | **✔️** | **✔️** | **✔️** |
| [Bloquear conversaciones](/communities/moderating-comments-and-conversations/locking-conversations) | | | **✔️** | **✔️** | **✔️** |
| Incidencias de transferencia (vea "[Transferencia de una incidencia a otro repositorio](/articles/transferring-an-issue-to-another-repository)" para más información) |  | | **✔️** | **✔️** | **✔️** |
| [Actuar como propietario del código designado para un repositorio](/articles/about-code-owners) | | | **✔️** | **✔️** | **✔️** |
| [Marcar un borrador de solicitud de incorporación de cambios como listo para revisión](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request) | | | **✔️** | **✔️** | **✔️** |
| [Convertir una solicitud de incorporación de cambios en borrador](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request) | | | **✔️** | **✔️** | **✔️** |
| Enviar revisiones que afecten la capacidad de fusión de una solicitud de extracción | | | **✔️** | **✔️** | **✔️** |
| [Aplicar cambios sugeridos](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/incorporating-feedback-in-your-pull-request) a solicitudes de incorporación de cambios | | | **✔️** | **✔️** | **✔️** |
| Crear [comprobaciones de estado](/pull-requests/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks) | | | **✔️** | **✔️** | **✔️** |{% ifversion fpt or ghec %}
| Crear, editar, ejecutar, volver a ejecutar y cancelar [flujos de trabajo de Acciones de GitHub](/actions/automating-your-workflow-with-github-actions/) | | | **✔️** | **✔️** | **✔️** |{% endif %}
| Crear y editar lanzamientos | | | **✔️** | **✔️** | **✔️** |
| Ver lanzamientos en borrador | | | **✔️** | **✔️** | **✔️** |
| Editar la descripción de un repositorio | | | | **✔️** | **✔️** |{% ifversion fpt or ghae or ghec %}
| [Ver e instalar paquetes](/packages/publishing-and-managing-packages) | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| [Publicar paquetes](/packages/publishing-and-managing-packages/publishing-a-package) | | | **✔️** | **✔️** | **✔️** |
| [Borrar y restaurar paquetes](/packages/learn-github-packages/deleting-and-restoring-a-package) | | |  |  | **✔️** | {% endif %}
| Administrar [temas](/articles/classifying-your-repository-with-topics) | | | | **✔️** | **✔️** |
| Habilitar wikis y restringir editores de wikis | | | | **✔️** | **✔️** |
| Habilitar tableros de proyecto | | | | **✔️** | **✔️** |
| Configurar [combinaciones de solicitudes de incorporación de cambios](/articles/configuring-pull-request-merges) | | | | **✔️** | **✔️** |
| Configurar [un origen de publicación para {% data variables.product.prodname_pages %}](/articles/configuring-a-publishing-source-for-github-pages) | | | | **✔️** | **✔️** |
| [Administrar las reglas de protección de rama](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/managing-a-branch-protection-rule) | | | | | **✔️** |
| [Insertar en ramas protegidas](/articles/about-protected-branches) | | | | **✔️** | **✔️** |
| Fusionar solicitudes de extracción en las ramas protegidas, incluso si no existen revisiones en aprobación | | | | | **✔️** |{% ifversion fpt or ghes > 3.4 or ghae-issue-6337 or ghec %}
| Crear etiquetas que coincidan con una [regla de protección de etiquetas](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/configuring-tag-protection-rules) | | | | **✔️** | **✔️** |
| Eliminar etiquetas que coincidan con una [regla de protección de etiquetas](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/configuring-tag-protection-rules) | | | | | **✔️** |{% endif %}
| [Crear y editar las tarjetas sociales de un repositorio](/articles/customizing-your-repositorys-social-media-preview) | | | | **✔️** | **✔️** |{% ifversion fpt or ghec %}
| Limitar las [interacciones en un repositorio](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)| | | | **✔️** | **✔️** |{% endif %}
| Eliminar una incidencia (vea "[Eliminación de una incidencia](/articles/deleting-an-issue)") | | | | | **✔️** |
| [Definir propietarios del código para un repositorio](/articles/about-code-owners) | | | | | **✔️** |
| Agregar un repositorio a un equipo (vea "[Administración del acceso de equipo a un repositorio de la organización](/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository#giving-a-team-access-to-a-repository)" para más información) | | | | | **✔️** |
| [Administrar el acceso de un colaborador externo a un repositorio](/articles/adding-outside-collaborators-to-repositories-in-your-organization) | | | | | **✔️** |
| [Cambiar la visibilidad de un repositorio](/articles/restricting-repository-visibility-changes-in-your-organization) | | | | | **✔️** |
| Convertir un repositorio en una plantilla (vea "[Creación de un repositorio de plantillas](/articles/creating-a-template-repository)") | | | | | **✔️** |
| Cambiar los parámetros de un repositorio | | | | | **✔️** |
| Administrar el acceso de un equipo o un colaborador al repositorio | | | | | **✔️** |
| Editar la rama predeterminada de un repositorio | | | | | **✔️** |
| Cambiar el nombre de la rama predeterminada del repositorio (vea "[Cambio del nombre de una rama](/github/administering-a-repository/renaming-a-branch)") | | | | | **✔️** |
| Cambiar el nombre de una rama distinta a la predeterminada del repositorio (vea "[Cambio del nombre de una rama](/github/administering-a-repository/renaming-a-branch)") | | | **✔️** | **✔️** | **✔️** |
| Administrar webhooks y desplegar llaves | | | | | **✔️** |{% ifversion fpt or ghec %}
| [Administrar la configuración de uso de datos para el repositorio privado](/get-started/privacy-on-github/managing-data-use-settings-for-your-private-repository) | | | | | **✔️** |{% endif %}
| [Administrar la directiva de bifurcación de un repositorio](/github/administering-a-repository/managing-the-forking-policy-for-your-repository) | | | | | **✔️** |
| [Transferir repositorios a la organización](/articles/restricting-repository-creation-in-your-organization) | | | | | **✔️** |
| [Eliminar o transferir repositorios fuera de la organización](/articles/setting-permissions-for-deleting-or-transferring-repositories) | | | | | **✔️** |
| [Archivar repositorios](/articles/about-archiving-repositories) | | | | | **✔️** |{% ifversion fpt or ghec %}
| Mostrar un botón de patrocinador (vea "[Representación de un botón de patrocinador en el repositorio](/articles/displaying-a-sponsor-button-in-your-repository)") | | | | | **✔️** |{% endif %}
| Crear referencias de vínculo automático a recursos externos, como Jira o Zendesk (vea "[Configuración de vínculos automáticos para hacer referencia a recursos externos](/articles/configuring-autolinks-to-reference-external-resources)") | | | | | **✔️** |{% ifversion discussions %}
| [Habilitar {% data variables.product.prodname_discussions %}](/github/administering-a-repository/enabling-or-disabling-github-discussions-for-a-repository) en un repositorio | | | | **✔️** | **✔️** |
| [Crear y editar categorías](/discussions/managing-discussions-for-your-community/managing-categories-for-discussions) para {% data variables.product.prodname_discussions %} | | | | **✔️** | **✔️** |
| [Mover un debate a otra categoría](/discussions/managing-discussions-for-your-community/managing-discussions) | | | **✔️** | **✔️** | **✔️** |
| [Transferir un debate](/discussions/managing-discussions-for-your-community/managing-discussions) a un nuevo repositorio| | | **✔️** | **✔️** | **✔️** |
| [Administrar debates fijados](/discussions/managing-discussions-for-your-community/managing-discussions) | | | **✔️** | **✔️** | **✔️** |
| [Convertir incidencias en debates de forma masiva](/discussions/managing-discussions-for-your-community/managing-discussions) | | | **✔️** | **✔️** | **✔️** |
| [Bloquear y desbloquear los debates](/discussions/managing-discussions-for-your-community/moderating-discussions) | | **✔️** | **✔️** | **✔️** | **✔️** |
| [Convertir las incidencias en debates individualmente](/discussions/managing-discussions-for-your-community/moderating-discussions) | | **✔️** | **✔️** | **✔️** | **✔️** |
| [Crear debates y comentar los debates existentes](/discussions/collaborating-with-your-community-using-discussions/participating-in-a-discussion) | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| [Borrar un debate](/discussions/managing-discussions-for-your-community/managing-discussions#deleting-a-discussion) | | **✔️** | | **✔️** | **✔️** |{% endif %}{% ifversion fpt or ghec %}
| Crear [codespaces](/codespaces/about-codespaces) | | | **✔️** | **✔️** | **✔️** |{% endif %}

### Requisitos de acceso para las características de seguridad

En esta sección, puedes encontrar el acceso que se requiere para las características de seguridad, tales como las características de la {% data variables.product.prodname_advanced_security %}.

| Acción del repositorio | Lectura | Evaluación de errores | Escritura | Mantenimiento | Administrador |
|:---|:---:|:---:|:---:|:---:|:---:| 
| Recibe [{% data variables.product.prodname_dependabot_alerts %} para las dependencias no seguras](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies) en un repositorio | | | | | **✔️** |
| [Ignorar {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/viewing-and-updating-vulnerable-dependencies-in-your-repository) | | | | | **✔️** |{% ifversion ghes or ghae or ghec %}<!--Not available for FPT-->
| [Designación de personas o equipos adicionales para que reciban alertas de seguridad](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts) | | | | | **✔️** |{% endif %}{% ifversion fpt or ghec %}
| Creación de [avisos de seguridad](/code-security/security-advisories/about-github-security-advisories) | | | | | **✔️** |{% endif %}{% ifversion ghes or ghae or ghec %} <!--Not available for FPT-->
| Administración de acceso a características de {% data variables.product.prodname_GH_advanced_security %} (consulta "[Administración de la configuración de seguridad y análisis para la organización](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)") | | | | | **✔️** |{% endif %}{% ifversion fpt or ghec %}<!--Set at site-level for GHES and GHAE-->
| [Activación de la gráfica de dependencias](/code-security/supply-chain-security/exploring-the-dependencies-of-a-repository) para un repositorio privado | | | | | **✔️** |{% endif %}{% ifversion ghes or ghae or ghec %}
| [Visualización de las revisiones de las dependencias](/code-security/supply-chain-security/about-dependency-review) | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |{% endif %}
| [Visualización de alertas del {% data variables.product.prodname_code_scanning %} en las solicitudes de incorporación de cambios](/github/finding-security-vulnerabilities-and-errors-in-your-code/triaging-code-scanning-alerts-in-pull-requests) | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| [Enumeración, descarte y eliminación de alertas de {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/managing-code-scanning-alerts-for-your-repository) | | | **✔️** | **✔️** | **✔️** |
| [Visualización de alertas de {% data variables.product.prodname_secret_scanning %} en un repositorio](/github/administering-a-repository/managing-alerts-from-secret-scanning) | | | **✔️**{% ifversion not ghae %}<sup>[1]</sup>{% endif %} | **✔️**{% ifversion not ghae %}<sup>[1]</sup>{% endif %} | **✔️** |{% ifversion ghes or ghae or ghec %}<!--Not available for FPT-->
| [Resolución, rechazo o reapertura de alertas de {% data variables.product.prodname_secret_scanning %}](/github/administering-a-repository/managing-alerts-from-secret-scanning) | | | **✔️**{% ifversion not ghae %}<sup>[1]</sup>{% endif %} | **✔️**{% ifversion not ghae %}<sup>[1]</sup>{% endif %} | **✔️** |{% endif %}{% ifversion ghes or ghae or ghec %}
| [Designación de personas o equipos adicionales para recibir alertas de {% data variables.product.prodname_secret_scanning %}](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts) en repositorios | | | | | **✔️** |{% endif %}

[1] Los escritores y mantenedores de los repositorios solo pueden ver la información de las alertas de sus propias confirmaciones.

## Información adicional

- "[Administración del acceso a los repositorios de la organización](/articles/managing-access-to-your-organization-s-repositories)"
- "[Adición de colaboradores externos a los repositorios en la organización](/articles/adding-outside-collaborators-to-repositories-in-your-organization)"
- "[Permisos de panel de proyecto para una organización](/articles/project-board-permissions-for-an-organization)"
