---
title: Hacer cumplir políticas de administración de repositorios para las organizaciones en tu cuenta de empresa
intro: Los propietarios de empresas pueden hacer cumplir determinadas políticas de administración de repositorios para todas las organizaciones que son propiedad de una cuenta de empresa o pueden permitir que las políticas se establezcan en cada organización.
product: '{% data reusables.gated-features.enterprise-accounts %}'
redirect_from:
  - /articles/enforcing-repository-management-settings-for-organizations-in-your-business-account/
  - /articles/enforcing-repository-management-policies-for-organizations-in-your-enterprise-account/
  - /articles/enforcing-repository-management-policies-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/enforcing-repository-management-policies-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/enforcing-repository-management-policies-in-your-enterprise-account
versions:
  free-pro-team: '*'
topics:
  - Enterprise
---

Para obtener más información, consulta "[Niveles de permiso del repositorio para una organización](/articles/permission-levels-for-an-organization)".

### Hacer cumplir una política sobre los permisos de repositorios predeterminados

En todas las organizaciones que son propiedad de tu cuenta de empresa, puedes establecer un nivel de permiso predeterminado para los repositorios (ninguno, de lectura, de escritura o de administrador) para los miembros de la organización o permitir que los propietarios administren los parámetros de configuración a nivel de la organización.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
4. En la pestaña **Políticas de repositorios**, en "Permisos predeterminados", revisa la información acerca de los cambios en la configuración. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. En "Permisos predeterminados", usa el menú desplegable y elige una política. ![Menú desplegable con opciones de políticas de permisos de repositorios](/assets/images/help/business-accounts/repository-permissions-policy-drop-down.png)

### Hacer cumplir una política sobre la creación de repositorios

En todas las organizaciones que le pertenecen a tu cuenta de empresa, puedes permitir que los miembros creen repositorios, restringir la creación de repositorios para los propietarios de la organización o permitir que los propietarios administren los ajustes en el nivel de la organización. Si permites que los miembros creen repositorios, puedes decidir si pueden crear cualquier combinación de repositorios públicos, privados e internos. {% data reusables.repositories.internal-repo-default %} Para obtener más información acerca de los repositorios internos, consulta "[Crear un repositorio interno](/articles/creating-an-internal-repository)".

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
3. En la pestaña **Políticas de repositorios**, en "Creación de repositorios", revisa la información acerca de los cambios en la configuración. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
{% data reusables.enterprise-accounts.repo-creation-policy %}
{% data reusables.enterprise-accounts.repo-creation-types %}
6. Haz clic en **Save ** (guardar).

### Requerir una política para bifurcar repositorios privados o internos

En todas las organizaciones que pertenezcan a tu cuenta empresarial, puedes permitir o prohibir la bifurcación de un repositorio privado o interno o permitir a los propietarios administrar la configuración a nivel organizacional para todos los que tengan acceso a éstos.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
3. En la pestaña **Políticas de repositorios**, en "Bifurcación de repositorios", revisa la información acerca de los cambios en la configuración. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
4. En "Bifurcación de repositorios", usa el menú desplegable y elige una política. ![Menú desplegable con opciones de políticas de bifurcación de repositorios](/assets/images/help/business-accounts/repository-forking-policy-drop-down.png)

### Hacer cumplir una política sobre la invitación de colaboradores externos a los repositorios

En todas las organizaciones que son propiedad de tu cuenta de empresa, puedes permitir que los miembros inviten colaboradores externos a los repositorios, restringir las invitaciones de colaboradores externos a los propietarios de la organización o permitir que los propietarios administren los parámetros de configuración a nivel de la organización.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
3. En la pestaña **Políticas de repositorios**, en "Invitaciones a los repositorios", revisa la información acerca de los cambios en la configuración. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
4. Debajo de "Invitaciones a los repositorios", utiliza el menú desplegable y elige una política. ![Menú desplegable con opciones de políticas de invitación de colaboradores externos](/assets/images/help/business-accounts/repository-invitation-policy-drop-down.png)

### Hacer cumplir una política sobre cambios en la visibilidad de los repositorios

En todas las organizaciones que son propiedad de tu cuenta de empresa, puedes permitir que los miembros con permisos de administrador modifiquen la visibilidad de un repositorio, puedes restringir los cambios en la visibilidad del repositorio a los propietarios de la organización o permitir que los propietarios administren los parámetros de configuración a nivel de la organización.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
3. En la pestaña **Políticas de repositorios**, en "Cambio en la visibilidad de los repositorios", revisa la información acerca de los cambios en la configuración. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
{% data reusables.enterprise-accounts.repository-visibility-policy %}

### Hacer cumplir una política sobre la eliminación o la transferencia de repositorios

En todas las organizaciones que son propiedad de tu cuenta de empresa, puedes permitir que los miembros con permisos de administrador eliminen o transfieran un repositorio, puedes restringir la eliminación o la transferencia de repositorios a los propietarios de la organización o permitir que los propietarios administren los parámetros de configuración a nivel de la organización.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
3. En la pestaña **Políticas de repositorios**, en "Eliminación y transferencia de los repositorios", revisa la información acerca de los cambios en la configuración. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
{% data reusables.enterprise-accounts.repository-deletion-policy %}

### Hacer cumplir una política sobre la eliminación de propuestas

En todas las organizaciones que son propiedad de tu cuenta de empresa, puedes permitir que los miembros con permisos de administrador eliminen propuestas en un repositorio, puedes restringir la eliminación de propuestas a los propietarios de la organización o permitir que los propietarios administren los parámetros de configuración a nivel de la organización.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
3. En la pestaña **Políticas de repositorios**, en "Eliminación de propuestas en los repositorios", revisa la información acerca de los cambios en la configuración. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
4. En "Eliminación de propuestas en los repositorios", usa el menú desplegable y elige una política. ![Menú desplegable con opciones de políticas de eliminación de propuestas](/assets/images/help/business-accounts/repository-issue-deletion-policy-drop-down.png)

### Requerir una política para el nombre de la rama predeterminada

Puedes configurar el nombre de la rama predeterminada para cualquier repositorio nuevo que creen los miembros s lo largo de todas las organizaciones que pertenezcan a tu cuenta empresarial. Puedes elegir el requerir un nombre de rama predeterminado a través de todas las organizaciones o permitir a algunas configurar un nombre diferente.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
3. En la pestaña de **Políticas de los repositorios**, debajo de "Nombre de la rama predeterminada", ingresa el nombre de rama predeterminada que deberán utilizar los repositorios nuevos. ![Caja de texto para ingresar un nombre de rama predeterminado](/assets/images/help/business-accounts/default-branch-name-text.png)
4. Opcionalmente, para requerir el nombre de rama predeterminado para todas las organizaciones en la empresa, selecciona **Requerir en toda la empresa**. ![Casilla de requerir](/assets/images/help/business-accounts/default-branch-name-enforce.png)
5. Da clic en **Actualizar**. ![Botón de actualizar](/assets/images/help/business-accounts/default-branch-name-update.png)
