---
title: Enforcing project board policies in your enterprise
intro: 'You can enforce policies for projects within your enterprise''s organizations, or allow policies to be set in each organization.'
permissions: Enterprise owners can enforce policies for project boards in an enterprise.
product: '{% data reusables.gated-features.enterprise-accounts %}'
redirect_from:
  - /articles/enforcing-project-board-settings-for-organizations-in-your-business-account/
  - /articles/enforcing-project-board-policies-for-organizations-in-your-enterprise-account/
  - /articles/enforcing-project-board-policies-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/enforcing-project-board-policies-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/enforcing-project-board-policies-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/setting-policies-for-organizations-in-your-enterprise-account/enforcing-project-board-policies-in-your-enterprise-account
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Policies
  - Projects
shortTitle: Project board policies
---

## About policies for project boards in your enterprise

You can enforce policies to control how members of your enterprise on {% data variables.product.product_name %} manage project boards. You can also allow organization owners to manage policies for project boards. Para obtener más información, consulta "[Acerca de los tableros de proyectos](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards)."

## Hacer cumplir una política para tableros de proyecto en toda la organización

Across all organizations owned by your enterprise, you can enable or disable organization-wide project boards, or allow owners to administer the setting on the organization level.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.projects-tab %}
4. En "Proyectos de la organización", revisa la información sobre cómo modificar los parámetros. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. En "Proyectos de la organización", usa el menú desplegable y elige una política. ![Menú desplegable con opciones de políticas de tableros de proyecto de la organización](/assets/images/help/business-accounts/organization-projects-policy-drop-down.png)

## Hacer cumplir una política para tableros de proyecto de repositorios

Across all organizations owned by your enterprise, you can enable or disable repository-level project boards, or allow owners to administer the setting on the organization level.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.projects-tab %}
4. En "Proyectos de repositorios", revisa la información sobre cómo modificar los parámetros. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. En "Proyectos de repositorios", usa el menú desplegable y elige una política. ![Menú desplegable con opciones de políticas de tableros de proyecto de repositorios](/assets/images/help/business-accounts/repository-projects-policy-drop-down.png)
