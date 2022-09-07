---
title: Permission levels for a personal account repository
intro: 'Un repositorio que pertenece a una cuenta personal y tiene dos niveles de permiso: el propietario del repositorio y los colaboradores.'
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
shortTitle: Permisos de repositorio
---

## Acerca de los niveles de permisos para un repositorio de una cuenta personal

Los repositorios que pertenecen a las cuentas personales tienen un propietario. Los permisos de propiedad no pueden compartirse con otra cuenta personal.

También puedes {% ifversion fpt or ghec %}invitar{% else %}agregar{% endif %} usuarios de {% data variables.product.product_name %} a tu repositorio como colaboradores. Para obtener más información, consulta la sección "[Invitar colaboradores a un repositorio personal](/github/setting-up-and-managing-your-github-user-account/inviting-collaborators-to-a-personal-repository)".

{% tip %}

**Tip:** Si necesitas un acceso más granular para un repositorio que le pertenezca a tu cuenta personal, considera transferirlo a una organización. Para obtener más información, consulta "[Transferir un repositorio](/github/administering-a-repository/transferring-a-repository#transferring-a-repository-owned-by-your-personal-account)".

{% endtip %}

## Acceso de propietarios a un repositorio que pertenezca a una cuenta personal

El propietario del repositorio tiene control completo del repositorio. Adicionalmente a las acciones que pudiera realizar cualquier colaborador, el propietario del repositorio puede realizar las siguientes.

| Acción                                                                                                                                                        | Más información                                                                                                                                                                                                                                                                                             |
|:------------------------------------------------------------------------------------------------------------------------------------------------------------- |:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {% ifversion fpt or ghec %}Invitar colaboradores{% else %}Agregar colaboradores{% endif %}                                                                    |                                                                                                                                                                                                                                                                                                             |
| "[Invitar colaboradores a un repositorio personal](/github/setting-up-and-managing-your-github-user-account/inviting-collaborators-to-a-personal-repository)" |                                                                                                                                                                                                                                                                                                             |
| Cambiar la visibilidad del repositorio                                                                                                                        | "[Configurar la visibilidad del repositorio](/github/administering-a-repository/setting-repository-visibility)" |{% ifversion fpt or ghec %}
| Limitar las interacciones con el repositorio                                                                                                                  | "[Limitar las interacciones en tu repositorio](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)" 
{% endif %}
| Renombrar una rama, incluyendo la rama predeterminada                                                                                                         | "[Renombrar una rama](/github/administering-a-repository/renaming-a-branch)"                                                                                                                                                                                                                                |
| Fusionar una solicitud de extracción sobre una rama protegida, incluso si no hay revisiones de aprobación                                                     | "[Acerca de las ramas protegidas](/github/administering-a-repository/about-protected-branches)"                                                                                                                                                                                                             |
| Eliminar el repositorio                                                                                                                                       | "[Borrar un repositorio](/repositories/creating-and-managing-repositories/deleting-a-repository)"                                                                                                                                                                                                           |
| Administrar los temas del repositorio                                                                                                                         | "[Clasificar tu repositorio con temas](/github/administering-a-repository/classifying-your-repository-with-topics)" |{% ifversion fpt or ghec %}
| Administrar la seguridad y la configuración de análisis del repositorio                                                                                       | "[Administrar la configuración de análisis y seguridad de tu repositorio](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)" |{% endif %}{% ifversion fpt or ghec %}
| Habilitar la gráfica de dependencias para un repositorio privado                                                                                              | "[Explorar las dependencias de un repositorio](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository#enabling-and-disabling-the-dependency-graph-for-a-private-repository)" 
{% endif %}
| Borrar y restablecer paquetes                                                                                                                                 | "[Borrar y restablecer un paquete](/packages/learn-github-packages/deleting-and-restoring-a-package)"                                                                                                                                                                                                       |
| Personalizar la vista previa de las redes sociales de un repositorio                                                                                          | "[Personalizar la vista previa de las redes sociales de tu repositorio](/github/administering-a-repository/customizing-your-repositorys-social-media-preview)"                                                                                                                                              |
| Crear una plantilla del repositorio                                                                                                                           | "[Crear un repositorio de plantilla](/github/creating-cloning-and-archiving-repositories/creating-a-template-repository)"                                                                                                                                                                                   |
| Control access to {% data variables.product.prodname_dependabot_alerts %}                                                                                   | "[Administrar la configuración de análisis y seguridad de tu repositorio](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts)" |{% ifversion fpt or ghec %}
| Descartar las {% data variables.product.prodname_dependabot_alerts %} en el repositorio                                                                     | "[Ver y actualizar{% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts)"                                                                                                                                           |
| Administrar el uso de datos para un repositorio privado                                                                                                       | "[Administrar la configuración del uso de datos para tu repositorio privado](/get-started/privacy-on-github/managing-data-use-settings-for-your-private-repository)"
{% endif %}
| Definir propietarios del código para un repositorio                                                                                                           | "[Acerca de los propietarios del código](/github/creating-cloning-and-archiving-repositories/about-code-owners)"                                                                                                                                                                                            |
| Archivar el repositorio                                                                                                                                       | "[Archivar repositorios](/repositories/archiving-a-github-repository/archiving-repositories)" |{% ifversion fpt or ghec %}
| Crear asesorías de seguridad                                                                                                                                  | "[Acerca de las {% data variables.product.prodname_security_advisories %}](/github/managing-security-vulnerabilities/about-github-security-advisories)"                                                                                                                                                   |
| Mostrar el botón del patrocinador                                                                                                                             | "[Mostrar un botón de patrocinador en tu repositorio](/github/administering-a-repository/displaying-a-sponsor-button-in-your-repository)" 
{% endif %}
| Permitir o dejar de permitir la fusión automática para las solicitudes de cambios                                                                             | "[Administrar la fusión automática para las solicitudes de cambios en tu repositorio](/github/administering-a-repository/managing-auto-merge-for-pull-requests-in-your-repository)"                                                                                                                         |

## Acceso de colaborador para un repositorio que pertenezca a una cuenta personal

Los colaboradores de un repositorio personal pueden extraer (leer) el contienido del mismo y subir (escribir) los cambios al repositorio.

{% note %}

**Nota:** en un repositorio privado, los propietarios del repositorio solo pueden otorgar acceso de escritura a los colaboradores. Los colaboradores no pueden tener acceso de solo lectura a los repositorios que pertenezcan a una cuenta personal.

{% endnote %}

Los colaboradores también pueden realizar las siguientes acciones.

| Acción                                                                                                         | Más información                                                                                                                                                                                    |
|:-------------------------------------------------------------------------------------------------------------- |:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Bifurcar el repositorio                                                                                        | "[Acerca de las bifurcaciones](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)"                                                                                    |
| Renombrar una rama diferente a la predeterminada                                                               | "[Renombrar una rama](/github/administering-a-repository/renaming-a-branch)"                                                                                                                       |
| Crear, editar, y borrar comentarios en las confirmaciones, solicitudes de cambios y propuestas del repositorio | <ul><li>"[Acerca de las propuestas](/github/managing-your-work-on-github/about-issues)"</li><li>"[Comentar en una solicitud de cambios](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request)"</li><li>"[Administrar los comentarios perjudiciales](/communities/moderating-comments-and-conversations/managing-disruptive-comments)"</li></ul>                                                                                                                                                                          |
| Crear, asignar, cerrar y volver a abrir las propuestas en el repositorio                                       | "[Administrar tu trabajo con las propuestas](/github/managing-your-work-on-github/managing-your-work-with-issues)"                                                                                 |
| Administrar las etiquetas para las propuestas y solicitudes de cambios en el repositorio                       | "[Etiquetar las propuestas y solicitudes de cambios](/github/managing-your-work-on-github/labeling-issues-and-pull-requests)"                                                                      |
| Administrar hitos para las propuestas y solicitudes de cambios en el repositorio                               | "[Crear y editar hitos para propuestas y solicitudes de extracción](/github/managing-your-work-on-github/creating-and-editing-milestones-for-issues-and-pull-requests)"                            |
| Marcar una propuesta o solicitud de cambios en el repositorio como duplicada                                   | "[Acerca de las propuestas y soicitudes de cambio duplicadas](/github/managing-your-work-on-github/about-duplicate-issues-and-pull-requests)"                                                      |
| Crear, fusionar y cerrar las solicitudes de cambios en el repositorio                                          | "[Proponer cambios en tu trabajo con solicitudes de cambios](/github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests)"                               |
| Habilitar e inhabilitar la fusión automática para una solicitud de cambios                                     | "[Fusionar automáticamente una solicitud de cambios](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/automatically-merging-a-pull-request)"              |
| Aplicar los cambios sugeridos a las solicitudes de cambios en el repositorio                                   | "[Incorporar retroalimentación en tu solicitud de cambios](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/incorporating-feedback-in-your-pull-request)"        |
| Crear una solicitud de cambios desde una bifurcación del repositorio                                           | "[Crear una solicitud de extracción desde una bifurcación](/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork)"                                               |
| Emitir una revisión de una solicitud de cambios que afecte la capacidad de fusión de una solicitud de cambios  | "[Revisar los cambios propuestos en una solicitud de extracción](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)" |
| Crear y editar un wiki para el repositorio                                                                     | "[Acerca de los wikis](/communities/documenting-your-project-with-wikis/about-wikis)"                                                                                                              |
| Crear y editar los lanzamientos del repositorio                                                                | "[Administrar los lanzamientos en un repositorio](/github/administering-a-repository/managing-releases-in-a-repository)"                                                                           |
| Actuar como propietario del código del repositorio                                                             | "[Acerca de los propietarios del código](/articles/about-code-owners)" |{% ifversion fpt or ghae or ghec %}
| Publicar, ver o instalar paquetes                                                                              | "[Publicar y mantener paquetes](/github/managing-packages-with-github-packages/publishing-and-managing-packages)" 
{% endif %}
| Eliminarse como colaboradores del repositorio                                                                  | "[Eliminarte a ti mismo del repositorio de un colaborador](/github/setting-up-and-managing-your-github-user-account/removing-yourself-from-a-collaborators-repository)"                            |

## Leer más

- "[Roles de repositorio para una organización](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)"
