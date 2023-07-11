---
title: Installing a GitHub App from a third party
intro: 'You can install {% data variables.product.prodname_github_apps %} directly from the app owner to use on your personal account or organizations.'
versions:
  fpt: '*'
  ghec: '*'
  ghae: '*'
  ghes: '*'
shortTitle: Install from third party
---

{% ifversion ghes or ghae %}

You cannot install third-party {% data variables.product.prodname_github_apps %} on organizations owned by your instance.{% ifversion ghes %} If you want to use the functionality of a third-party {% data variables.product.prodname_github_app %}, you can contact the app developer about making the {% data variables.product.prodname_github_app %} available for {% data variables.product.prodname_ghe_server %}. For more information, see "[AUTOTITLE](/apps/sharing-github-apps/making-your-github-app-available-for-github-enterprise-server)."{% endif %}

For more information about installing {% data variables.product.prodname_github_apps %} that you own, see "[AUTOTITLE](/apps/maintaining-github-apps/installing-your-own-github-app)."

{% else %}

## About installing {% data variables.product.prodname_github_apps %}

This article describes how to install a {% data variables.product.prodname_github_app %} directly from the app owner instead of from {% data variables.product.prodname_marketplace %}. For more information on installing {% data variables.product.prodname_github_apps %} from {% data variables.product.prodname_marketplace %}, see "[AUTOTITLE](/apps/using-github-apps/installing-a-github-app-in-your-personal-account)" and "[AUTOTITLE](/apps/using-github-apps/installing-a-github-app-in-your-organization)." For more information about installing {% data variables.product.prodname_github_apps %} that you own, see "[AUTOTITLE](/apps/maintaining-github-apps/installing-your-own-github-app)."

{% data reusables.apps.about-installation %}

### Difference between installation and authorization

After you install a {% data variables.product.prodname_github_app %}, you may also be asked to authorize the app.

{% data reusables.apps.install-vs-authorize %}

For more information about authorizing {% data variables.product.prodname_github_apps %}, see "[AUTOTITLE](/apps/using-github-apps/authorizing-github-apps)."

## Requirements to install a {% data variables.product.prodname_github_app %}

Anyone can install {% data variables.product.prodname_github_apps %} on their personal account.

Organization owners can install {% data variables.product.prodname_github_apps %} on their organization.

Admins of repositories that are owned by an organization can also install {% data variables.product.prodname_github_apps %} on the organization if they only grant the app access to repositories that they are an admin of and if the app does not request any organization resources. Organization owners can prevent outside collaborators who are repository admins from installing {% data variables.product.prodname_github_apps %}.

Organization members who are not organization owners or repository admins can still select the organization during the install process. Instead of installing the app, {% data variables.product.company_short %} will send a notification to the organization owner to request the organization owner to install the app.

The "app manager" role in an organization does not give a person the ability to install a {% data variables.product.prodname_github_app %} in the organization. For more information, see "[AUTOTITLE](/apps/maintaining-github-apps/about-github-app-managers)."

## Installing a {% data variables.product.prodname_github_app %}

During the installation process, the app owner will direct you to a {% data variables.product.company_short %} URL to install the {% data variables.product.prodname_github_app %}. The URL will look something like `{% data variables.product.oauth_host_code %}/{% ifversion ghes or ghae %}github-apps{% else %}apps{% endif %}/APP-NAME/installations/new`, where `APP-NAME` is the name of the {% data variables.product.prodname_github_app %}.

1. Select the location where you want to install the {% data variables.product.prodname_github_app %}. You can select your personal account or an organization that you are a member of.

   {% ifversion ghec %}
   {% note %}

   **Note**: {% data reusables.apps.github_app_install_saml %}

   {% endnote %}
   {% endif %}

1. If the app requires repository permissions, select **All repositories** or **Only select repositories**. The app will always have at least read-only access to all public repositories on {% data variables.product.company_short %}.

   If the app does not require repository permissions, these options will be omitted.
1. If you selected **Only select repositories** in the previous step, under the **Select repositories** dropdown, select the repositories that you want the app to access.

   If the app creates any repositories, the app will automatically be granted access to those repositories as well.
1. Review the permissions that the app is requesting. For more information about the REST API requests the {% data variables.product.prodname_github_app %} can make with those permissions, see "[AUTOTITLE](/rest/overview/permissions-required-for-github-apps)."
1. Click **Install**, **Install and request**, or **Request**. The button that is presented depends on whether your organization owner must approve none, some, or all of the requested access for the app. For more information, see "[Requirements to install a {% data variables.product.prodname_github_app %}](#requirements-to-install-a-github-app)."

{% endif %}
