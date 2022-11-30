---
title: Administrar proyectos utilizando Jira
intro: 'Puedes integrar Jura con {% data variables.product.product_name %} para la administración de proyectos.'
redirect_from:
  - /enterprise/admin/guides/installation/project-management-using-jira
  - /enterprise/admin/articles/project-management-using-jira
  - /enterprise/admin/developer-workflow/managing-projects-using-jira
  - /enterprise/admin/developer-workflow/customizing-your-instance-with-integrations
  - /enterprise/admin/user-management/managing-projects-using-jira
  - /admin/user-management/managing-projects-using-jira
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Project management
shortTitle: Project management with Jira
ms.openlocfilehash: da1a02894bf8c916089de94a8642396ba7ceabe4
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '145115145'
---
## Conectar a Jira a una organización de {% data variables.product.prodname_enterprise %}

1. Inicia sesión en tu cuenta de {% data variables.product.prodname_enterprise %} en http[s]://[hostname]/login. Si ya iniciaste sesión, haz clic en el logo de {% data variables.product.prodname_dotcom %} en la esquina superior izquierda.
2. Haz clic en tu icono de perfil debajo del logo de {% data variables.product.prodname_dotcom %} y selecciona la organización con la que te gustaría conectar a Jira.

  ![Selecciona una organización](/assets/images/enterprise/orgs-and-teams/profile-select-organization.png)

3. Haz clic en el vínculo **Editar configuración de _nombre de la organización_**.

  ![Editar la configuración de organización](/assets/images/enterprise/orgs-and-teams/edit-organization-settings.png)

4. En la barra lateral de la izquierda, en **Configuración del desarrollador**, haz clic en **Aplicaciones de OAuth**.

  ![Selecciona Apps de OAuth](/assets/images/enterprise/orgs-and-teams/organization-dev-settings-oauth-apps.png)

5. Haz clic en el botón **Registrar aplicación nueva**.

  ![Registrar botón de aplicación nueva](/assets/images/enterprise/orgs-and-teams/register-oauth-application-button.png)

6. Completa los parámetros de la aplicación:
    - En el campo **Nombre de aplicación**, escribe "Jira" o cualquier nombre que te gustaría usar para identificar la instancia de Jira.
    - En el campo **URL de la página principal**, escribe la URL completa de la instancia de Jira.
    - En el campo **URL de devolución de llamada de autorización**, escribe la URL completa de la instancia de Jira.
7. Haga clic en **Register application** (Registrar aplicación).
8. Anota el **id. de cliente** y el **secreto de cliente** que aparecen en la parte superior de la página. Necesitarás estos para configurar tu instancia de Jira.

## Configuración de la instancia de Jira

1. En tu instancia de Jira, inicia sesión en una cuenta con acceso administrativo.
2. En la parte superior de la página, haz clic en el icono de configuración (engranaje) y selecciona **Aplicaciones**.

  ![Seleccionar aplicaciones en la configuración de Jira](/assets/images/enterprise/orgs-and-teams/jira/jira-applications.png)

3. En la barra lateral de la izquierda, en **Integraciones**, haz clic en **Cuentas DVCS**.

  ![Menú de integraciones de Jira - Cuentas DVCS](/assets/images/enterprise/orgs-and-teams/jira/jira-integrations-dvcs.png)

4. Haz clic en **Enlazar cuenta de Bitbucket Cloud o {% data variables.product.prodname_dotcom %}** .

  ![Enlazar cuenta de GitHub a Jira](/assets/images/enterprise/orgs-and-teams/jira/jira-link-github-account.png)

5. En el cuadro de diálogo modal **Agregar nueva cuenta**, completa los ajustes de {% data variables.product.prodname_enterprise %}:
    - En el menú desplegable **Host**, selecciona **{% data variables.product.prodname_enterprise %}** .
    - En el campo **Cuenta de equipo o usuario**, escribe el nombre de tu cuenta de usuario o de organización de {% data variables.product.prodname_enterprise %}.
    - En el campo **Clave de OAuth**, escribe el id. de cliente de tu aplicación de desarrollador de {% data variables.product.prodname_enterprise %}.
    - En el campo **Secreto de OAuth**, escribe el secreto de cliente de tu aplicación de desarrollador de {% data variables.product.prodname_enterprise %}.
    - Si no quieres enlazar los repositorios nuevos que pertenecen a tu cuenta de usuario o de organización de {% data variables.product.prodname_enterprise %}, anula la selección de **Enlazar los repositorios nuevos automáticamente**.
    - Si no quieres habilitar las confirmaciones inteligentes, anula la selección de **Habilitar las confirmaciones inteligentes**.
    - Haga clic en **Agregar**.
6. Revisa los permisos que concedes a tu cuenta de {% data variables.product.prodname_enterprise %} y haz clic en **Autorizar aplicación**.
7. Si es necesario, escribe tu contraseña para continuar.
