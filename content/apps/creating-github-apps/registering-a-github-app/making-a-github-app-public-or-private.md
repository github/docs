---
title: Making a GitHub App public or private
intro: 'When registering a {% data variables.product.prodname_github_app %}, you can make it public so that other GitHub accounts can install the app, or private so that you can only install it on the account that owns the app.'
redirect_from:
  - /apps/building-integrations/setting-up-and-registering-github-apps/about-installation-options-for-github-apps
  - /apps/building-github-apps/installation-options-for-github-apps
  - /apps/building-integrations/managing-github-apps/changing-a-github-app-s-installation-option
  - /apps/managing-github-apps/changing-a-github-app-s-installation-option
  - /apps/managing-github-apps/making-a-github-app-public-or-private
  - /developers/apps/making-a-github-app-public-or-private
  - /developers/apps/managing-github-apps/making-a-github-app-public-or-private
  - /apps/creating-github-apps/creating-github-apps/making-a-github-app-public-or-private
  - /apps/creating-github-apps/setting-up-a-github-app/making-a-github-app-public-or-private
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: Visibility
---

## About visibility for {% data variables.product.prodname_github_apps %}

A {% data variables.product.prodname_github_app %} can be {% ifversion fpt %}public or private{% elsif enterprise-apps-public-beta %}public, private, or internal{% endif %}.{% ifversion fpt or ghec %} If you set your {% data variables.product.prodname_github_app %} registration to public, any user on {% data variables.product.github %} can install it and authorize it. If you set your {% data variables.product.prodname_github_app %} registration to private, it can only be installed on the account that owns the app. Only members of the organization that owns it can authorize it.

{% elsif ghes %} If you set your {% data variables.product.prodname_github_app %} registration to public, anyone on your {% data variables.product.prodname_ghe_server %} instance can install it, but the app is not available outside of your instance. If you set your {% data variables.product.prodname_github_app %} registration to private, it can only be installed on the account that owns the app. {% endif %}

{% ifversion enterprise-apps-public-beta %}
{% data variables.product.prodname_github_apps %} owned by an enterprise account{% ifversion ghec %}, or by a {% data variables.enterprise.prodname_managed_user %} in an enterprise,{% endif %} have "internal" visibility. Internal apps can only be installed by{% ifversion enterprise-installed-apps %} that enterprise and{% endif %} organizations within the enterprise and can only be authorized by users within the enterprise. Members of the enterprise and unaffiliated users can authorize these apps, but outside collaborators cannot.
{% endif %}{% ifversion enterprise-installed-apps %}

If you want your organization-owned application to be installed on your enterprise, transfer it to the enterprise or make it `public` or `internal`. If it is `private` it can only be installed on the organization.{% endif %}

If you want your {% data variables.product.prodname_github_app %} to be available to organizations in a {% data variables.product.prodname_ghe_server %} instance that you are not part of, then you need to take additional steps. For more information, see [AUTOTITLE](/apps/sharing-github-apps/making-your-github-app-available-for-github-enterprise-server).

If it is important for {% ifversion ghes %}other {% endif %}{% data variables.product.prodname_ghe_server %} users to be able to use your tool, consider using {% data variables.product.prodname_actions %} instead of a {% data variables.product.prodname_github_app %}. Public actions are available on {% data variables.product.prodname_ghe_server %} instances with GitHub Connect. For more information, see [AUTOTITLE]({% ifversion not ghes %}/enterprise-server@latest{% endif %}/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect) and [AUTOTITLE]({% ifversion not ghes %}/enterprise-server@latest{% endif %}/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/about-github-actions-for-enterprises){% ifversion ghes %}.{% else %} in the {% data variables.product.prodname_ghe_server %} documentation.{% endif %}

For information about changing the visibility of a {% data variables.product.prodname_github_app %} registration, see [AUTOTITLE](/apps/maintaining-github-apps/modifying-a-github-app).

### Public installation flow

Public {% data variables.product.prodname_github_apps %} have a landing page with an **Install** button, so that other people can install the app on their accounts. {% ifversion fpt or ghec %}If your {% data variables.product.prodname_github_app %} is public to all users on {% data variables.product.github %}, you can also choose to publish it to {% data variables.product.prodname_marketplace %}. For more information, see [AUTOTITLE](/apps/publishing-apps-to-github-marketplace/github-marketplace-overview/about-github-marketplace).{% endif %}

### Private installation flow

Private {% data variables.product.prodname_github_apps %} can only be installed on the user or organization account of the app owner. Limited information about the app will exist on a landing page for the app, and the **Install** button will only be available to organization owners and app managers for the organization that owns the app, or the personal account if the {% data variables.product.prodname_github_app %} is owned by an individual account.

{% ifversion enterprise-apps-public-beta %}

### "Internal" installation flow

Enterprise-owned {% data variables.product.prodname_github_apps %}{% ifversion ghec %} and apps owned by {% data variables.enterprise.prodname_managed_users %}{% endif %} can only be installed on {% ifversion enterprise-installed-apps %}that enterprise and{% endif %} organizations within the enterprise by using the installation URL. The app can not be installed on user accounts.

{% endif %}
