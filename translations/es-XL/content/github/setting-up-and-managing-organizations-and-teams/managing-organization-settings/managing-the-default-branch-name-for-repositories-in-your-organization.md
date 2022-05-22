---
title: Administrar el nombre de la rama predeterminada para los repositorios en tu organización
intro: Puedes configurar el nombre de la rama predeterminada de los repositorios que crean los miembros de tu organizción.
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.23'
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/managing-the-default-branch-name-for-repositories-in-your-organization
---
### Acerca del nombre de la rama predeterminada

Cuando un miembro de tu organización crea un repositorio nuevo, {% data variables.product.prodname_dotcom %} creará una sola rama y la configurará como la rama predeterminada del repositorio. Actualmente, {% data variables.product.prodname_dotcom %} nombra a la rama predeterminada como `master`, pero puedes configurarla para que se llame como quieras de acuerdo con tu ambiente de desarrollo.

{% data reusables.branches.set-default-branch %}

{% data reusables.branches.rename-existing-branch %}

### Configurar el nombre de la rama predeterminada

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.repository-defaults %}
3. Debajo de "Rama predeterminada del repositorio", da clic en **Cambiar el nombre de la rama predeterminada ahora**. ![Botón de ignorar](/assets/images/help/organizations/repo-default-name-button.png)
    {% note %}

    **Nota:**Si el dueño de tu empresa requiere una política para el nombre predeterminado, no podrás cambiarlo aquí. Podrás configurar la rama predeterminada en repositorios individuales. Para obtener más información, consulta las secciones "[Requerir una política para el nombre de la rama predeterminada](/github/setting-up-and-managing-your-enterprise-account/enforcing-repository-management-policies-in-your-enterprise-account#enforcing-a-policy-on-the-default-branch-name)" y "[Configurar la rama predeterminada](/github/administering-a-repository/setting-the-default-branch)".

    {% endnote %}
4. Teclea el nombre predeterminado que quisieras utilizar para las ramas nuevas. ![Caja de texto para ingresar el nombre predeterminado](/assets/images/help/organizations/repo-default-name-text.png)
5. Da clic en **Actualizar**. ![Botón de actualizar](/assets/images/help/organizations/repo-default-name-update.png)

### Leer más

- [Administrar el nombre de la rama predeterminada para tus repositorios](/github/setting-up-and-managing-your-github-user-account/managing-the-default-branch-name-for-your-repositories)
