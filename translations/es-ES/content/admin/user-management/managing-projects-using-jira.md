---
title: Administrar proyectos utilizando Jira
intro: 'Puedes integrar Jura con {% data variables.product.prodname_enterprise %} para la administración de proyectos.'
redirect_from:
  - /enterprise/admin/guides/installation/project-management-using-jira/
  - /enterprise/admin/articles/project-management-using-jira/
  - /enterprise/admin/developer-workflow/managing-projects-using-jira
  - /enterprise/admin/developer-workflow/customizing-your-instance-with-integrations
  - /enterprise/admin/user-management/managing-projects-using-jira
versions:
  enterprise-server: '*'
type: how_to
topics:
  - Enterprise
  - Project management
---

### Conectar a Jira a una organización de {% data variables.product.prodname_enterprise %}

1. Inicia sesión en tu cuenta de {% data variables.product.prodname_enterprise %} en http[s]://[hostname]/login. Si ya iniciaste sesión, haz clic en el logo de {% data variables.product.prodname_dotcom %} en la esquina superior izquierda.
2. Haz clic en tu icono de perfil debajo del logo de {% data variables.product.prodname_dotcom %} y selecciona la organización con la que te gustaría conectar a Jira.

  ![Selecciona una organización](/assets/images/enterprise/orgs-and-teams/profile-select-organization.png)

3. Haz clic en el enlace de **Editar la configuración de _nombre de organización_**.

  ![Editar la configuración de organización](/assets/images/enterprise/orgs-and-teams/edit-organization-settings.png)

4. En la barra lateral izquierda, debajo de **Configuración de desarrollador**, haz clic en **Apps de OAuth**.

  ![Selecciona Apps de OAuth](/assets/images/enterprise/orgs-and-teams/organization-dev-settings-oauth-apps.png)

5. Haz clic en el botón de **Registrar aplicación nueva**.

  ![Registrar botón de aplicación nueva](/assets/images/enterprise/orgs-and-teams/register-oauth-application-button.png)

6. Completa los parámetros de la aplicación:
    - En el campo de **Nombre de aplicación**, teclea "Jira" o cualquier nombre que te gustaría utilizar para identificar a la instancia de Jira.
    - En el campo **URL de página principal**, escribe la URL completa de tu instancia de Jira.
    - En el campo **URL de rellamado de autorización**, escribe la URL completa de tu instancia de Jira.
7. Haz clic en **Register application** (Registrar aplicación).
8. En la parte inferior de la página, observa el **Client ID** (ID de cliente) y **Client Secret** (Secreto de cliente). Necesitarás estos para configurar tu instancia de Jira.

### Configuración de la instancia de Jira

1. En tu instancia de Jira, inicia sesión en una cuenta con acceso administrativo.
2. En la parte superior de la página, haz clic en el icono de configuración (engrane) y elige **Aplicaciones**.

  ![Seleccionar aplicaciones en la configuración de Jira](/assets/images/enterprise/orgs-and-teams/jira/jira-applications.png)

3. En la barra lateral izquierda, debajo de **Integraciones**, haz clic en **Cuentas DVCS**.

  ![Menú de integraciones de Jira - Cuentas DVCS](/assets/images/enterprise/orgs-and-teams/jira/jira-integrations-dvcs.png)

4. Haz clic en **Enlazar cuenta de Bitbucket Cloud o de {% data variables.product.prodname_dotcom %}**.

  ![Enlazar cuenta de GitHub a Jira](/assets/images/enterprise/orgs-and-teams/jira/jira-link-github-account.png)

5. En el modal **Add New Account** (Agregar nueva cuenta), completa tus parámetros de {% data variables.product.prodname_enterprise %}:
    - Desde el menú desplegable de **Host**, elige **{% data variables.product.prodname_enterprise %}**.
    - En el campo **Team or User Account** (Cuenta de equipo o usuario), escribe el nombre de tu organización {% data variables.product.prodname_enterprise %} o cuenta personal.
    - En el campo **OAuth Key** (Clave OAuth), escribe el ID de cliente de tu aplicación de programador de {% data variables.product.prodname_enterprise %}.
    - En el campo **OAuth Secret** (OAuth secreto), escribe el secreto de cliente para tu aplicación de programador de {% data variables.product.prodname_enterprise %}.
    - Si no quieres enlazar los repositorios nuevos que pertenecen a tu organización o cuenta personal de {% data variables.product.prodname_enterprise %}, quita la marca de selección de **Enlazar los repositorios nuevos automáticamente**.
    - Si no quieres habilitar las confirmaciones inteligentes, deselecciona **Habilitar las confirmaciones inteligentes**.
    - Da clic en **Agregar**.
6. Revisa los permisos que concedes a tu cuenta de {% data variables.product.prodname_enterprise %} y haz clic en **Authorize application** (Autorizar aplicación).
7. Si es necesario, escribe tu contraseña para continuar.
