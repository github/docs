---
title: Managing access and security for your organization's codespaces
shortTitle: Managing access and security for your organization
intro: 'You can manage the repositories in your organization that {% data variables.product.prodname_codespaces %} can access.'
permissions: 'To manage access and security for Codespaces for an organization, you must be an organization owner.'
versions:
  free-pro-team: '*'
type: how_to
topics:
  - Codespaces
  - Security
  - Administrator
redirect_from:
  - /github/developing-online-with-codespaces/managing-access-and-security-for-codespaces
  - /codespaces/working-with-your-codespace/managing-access-and-security-for-codespaces
---

{% data reusables.codespaces.release-stage %}

Organization owners can manage which repositories a codespace can access.

By default, a codespace can only access the repository where it was created. When you enable access and security for a repository owned by your organization, any codespaces that are created for that repository will also have read and write permissions to all other repositories the organization owns and the codespace creator has permissions to access. If you want to restrict the repositories a codespace can access, you can limit to it to either the repository where the codespace was created, or to specific repositories. Solo debes habilitar el acceso y la seguridad para los repositorios en los cuales confíes.

To manage which users in your organization can use {% data variables.product.prodname_codespaces %}, see "[Managing user permissions for your organization](/codespaces/managing-codespaces-for-your-organization/managing-user-permissions-for-your-organization)."

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.click-codespaces %}
1. Debajo de "Acceso y seguridad", selecciona la configuración que quieras para tu organización.![Botones radiales para adminsitrar los repositorios confiables](/assets/images/help/settings/codespaces-org-access-and-security-radio-buttons.png)
1. Si eliges "Repositorios seleccionados"; entonces selecciona el menú desplegable y da clic en un repositorio para permitir que los codespaces de éste accedan al resto de los repositorios que pertenecen a tu organización. Repite esto para todos los repositorios cuyos codespaces quieras que accedan al resto de los repositorios. ![Menú desplegable de "Repositorios seleccionados"](/assets/images/help/settings/codespaces-access-and-security-repository-drop-down.png)
