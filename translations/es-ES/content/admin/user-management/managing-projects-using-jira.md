---
title: Administrar proyectos mediante JIRA
intro: 'Puedes integrar JIRA con {% data variables.product.prodname_enterprise %} para la administración de proyectos.'
redirect_from:
  - /enterprise/admin/guides/installation/project-management-using-jira/
  - /enterprise/admin/articles/project-management-using-jira/
  - /enterprise/admin/developer-workflow/managing-projects-using-jira
  - /enterprise/admin/developer-workflow/customizing-your-instance-with-integrations
  - /enterprise/admin/user-management/managing-projects-using-jira
versions:
  enterprise-server: '*'
topics:
  - Enterprise
---

### Conectar JIRA a una organización {% data variables.product.prodname_enterprise %}

1. Inicia sesión en tu cuenta de {% data variables.product.prodname_enterprise %} en http[s]://[hostname]/login.
1. En el ángulo superior derecho de cualquier página, haz clic en el icono de ajustes (engranaje) de la cuenta.
1. En la barra lateral izquierda, haz clic en el nombre de tu organización.
1. En la barra lateral izquierda, haz clic en **Applications** (Aplicaciones).
1. En el ángulo superior derecho del cuadro **Organization applications** (Aplicaciones de la organización), haz clic en **Register new application** (Registrar aplicación nueva)</strong>.
1. Completa los parámetros de la aplicación:
    - En el campo **Application name** (Nombre de la aplicación), escribe "JIRA".
    - En el campo **Homepage URL** (URL de inicio de sesión), escribe la URL completa de tu instancia JIRA.
    - En el campo **Authorization callback URL** (URL de devolución de llamada de autorización), escribe la URL completa de tu instancia JIRA.
1. Haz clic en **Register application** (Registrar aplicación).
1. En la parte inferior de la página, observa el **Client ID** (ID de cliente) y **Client Secret** (Secreto de cliente). Necesitarás estos datos para configurar tu instancia JIRA.

### Configuración de instancia de JIRA

1. En tu instancia de JIRA, inicia sesión en una cuenta con acceso administrativo.
1. En la parte superior de la página, haz clic en el icono de ajustes (engranaje).
1. En el desplegable de los parámetros, elige **Add-ons** (Adicionales).
1. En la barra lateral izquierda, debajo de **Source control** (Control de origen), haz clic en **DVCS accounts** (Cuentas de DVCS).
1. Haz clic en **Link Bitbucket or GitHub account** (Enlazar cuenta de Bitbucket o GitHub).
1. En el modal **Add New Account** (Agregar nueva cuenta), completa tus parámetros de {% data variables.product.prodname_enterprise %}:
    - En el menú desplegable **Host**, elige **GitHub Enterprise**.
    - En el campo **Team or User Account** (Cuenta de equipo o usuario), escribe el nombre de tu organización {% data variables.product.prodname_enterprise %} o cuenta personal.
    - En el campo **OAuth Key** (Clave OAuth), escribe el ID de cliente de tu aplicación de programador de {% data variables.product.prodname_enterprise %}.
    - En el campo **OAuth Secret** (OAuth secreto), escribe el secreto de cliente para tu aplicación de programador de {% data variables.product.prodname_enterprise %}.
    - Si no quieres vincular los repositorios nuevos que pertenecen a tu organización o cuenta personal de {% data variables.product.prodname_enterprise %}, quita la marca de selección de **Auto Link New Repositories** (Vincular automáticamente repositorios nuevos).
    - Si no quieres habilitar las confirmaciones inteligentes, quita la marca de selección **Enable Smart Commits** (Habilitar confirmaciones inteligentes).
    - Da clic en **Agregar**.
1. Revisa los permisos que concedes a tu cuenta de {% data variables.product.prodname_enterprise %} y haz clic en **Authorize application** (Autorizar aplicación).
1. Si es necesario, escribe tu contraseña para continuar.
