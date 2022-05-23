---
title: Requerir políticas de tableros de proyecto en tu empresa
intro: Puedes requerir políticas para los proyectos dentro de las organizaciones de tu empresa o permitir que se configuren políticas en cada organización.
permissions: Enterprise owners can enforce policies for project boards in an enterprise.
redirect_from:
  - /articles/enforcing-project-board-settings-for-organizations-in-your-business-account
  - /articles/enforcing-project-board-policies-for-organizations-in-your-enterprise-account
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
shortTitle: Políticas del tablero de proyectos
---

## Acerca de las políticas para los tableros de proyecto en tu empresa

Puedes requerir políticas para controlar la forma en la que los miembros de tu empresa de {% data variables.product.product_name %} administran los tableros de proyecto. También puedes permitir que los propietarios de la organización administren las políticas para los tableros de proyecto. Para obtener más información, consulta "[Acerca de los tableros de proyectos](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards)."

## Hacer cumplir una política para tableros de proyecto en toda la organización

En todas las organizaciones que son propiedad de tu empresa, puedes habilitar o inhabilitar tableros de proyecto en toda la organización o permitir que los propietarios administren este parámetro a nivel de la organización.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.projects-tab %}
4. En "Proyectos de la organización", revisa la información sobre cómo modificar los parámetros. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. En "Proyectos de la organización", usa el menú desplegable y elige una política. ![Menú desplegable con opciones de políticas de tableros de proyecto de la organización](/assets/images/help/business-accounts/organization-projects-policy-drop-down.png)

## Hacer cumplir una política para tableros de proyecto de repositorios

En todas las organizaciones que pertenezcan a tu empresa, puedes habilitar o inhabilitar tableros de proyecto a nivel de los repositorios o permitir que los propietarios administren este parámetro a nivel de la organización.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.projects-tab %}
4. En "Proyectos de repositorios", revisa la información sobre cómo modificar los parámetros. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. En "Proyectos de repositorios", usa el menú desplegable y elige una política. ![Menú desplegable con opciones de políticas de tableros de proyecto de repositorios](/assets/images/help/business-accounts/repository-projects-policy-drop-down.png)
