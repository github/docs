---
title: Enforcing policies for dependency insights in your enterprise
intro: 'You can enforce policies for dependency insights within your enterprise''s organizations, or allow policies to be set in each organization.'
permissions: Enterprise owners can enforce policies for dependency insights in an enterprise.
product: '{% data reusables.gated-features.enterprise-accounts %}'
redirect_from:
  - /articles/enforcing-a-policy-on-dependency-insights/
  - /articles/enforcing-a-policy-on-dependency-insights-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/enforcing-a-policy-on-dependency-insights-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/enforcing-a-policy-on-dependency-insights-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/setting-policies-for-organizations-in-your-enterprise-account/enforcing-a-policy-on-dependency-insights-in-your-enterprise-account
versions:
  ghec: '*'
type: how_to
topics:
  - Dependencies
  - Enterprise
  - Organizations
  - Policies
shortTitle: Policies for dependency insights
---

## About policies for dependency insights in your enterprise

Dependency insights show all packages that repositories within your enterprise's organizations depend on. Dependency insights include aggregated information about security advisories and licenses. Para obtener más información, consulta "[Ver información de tu organización](/organizations/collaborating-with-groups-in-organizations/viewing-insights-for-your-organization)".

## Enforcing a policy for visibility of dependency insights

Across all organizations owned by your enterprise, you can control whether organization members can view dependency insights. You can also allow owners to administer the setting on the organization level. Para obtener más información, consulta "[Cambiar la visibilidad de la información de dependencias de la organización](/organizations/managing-organization-settings/changing-the-visibility-of-your-organizations-dependency-insights)".

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
3. In the left sidebar, click **Organizations**. ![Organizations tab in the enterprise sidebar](/assets/images/help/business-accounts/settings-policies-org-tab.png)
4. En "Políticas de la organización", revisa la información sobre cómo modificar los parámetros. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. En "Políticas de la organización", usa el menú desplegable y elige una política. ![Menú desplegable con opciones de políticas de la organización](/assets/images/help/business-accounts/organization-policy-drop-down.png)
