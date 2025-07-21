---
title: Creating GitHub Apps for your enterprise
intro: 'Learn how to create a {% data variables.product.prodname_github_app %} for your enterprise.'
versions:
  feature: enterprise-apps-public-beta
type: how_to
topics:
  - Enterprise
permissions: Enterprise owners.
shortTitle: Create a GitHub App
---

You can create a {% data variables.product.prodname_github_app %} under your enterprise account. The app can only be installed on{% ifversion enterprise-installed-apps %} your enterprise or{% endif %} organizations within your enterprise, and can only be authorized by members of your enterprise. The app can't be installed on user accounts.

## Step 1: Registering a {% data variables.product.prodname_github_app %}

To create a {% data variables.product.prodname_github_app %}, you must first register the app. See [AUTOTITLE](/apps/creating-github-apps/registering-a-github-app/registering-a-github-app).

Apps can also be transferred to an enterprise from a member or organization. To transfer an app, see [AUTOTITLE](/apps/maintaining-github-apps/transferring-ownership-of-a-github-app).
{%- ifversion enterprise-app-manager %}

### Step 1a: Adding an enterprise app manager

Enterprise owners can add enterprise members to an app as an app manager. App managers can manage the app's settings and credentials, but cannot install the app. For more information, see [AUTOTITLE](/apps/maintaining-github-apps/about-github-app-managers).{% endif %}

## Step 2: Building a {% data variables.product.prodname_github_app %}

After registering a {% data variables.product.prodname_github_app %}, you will want to write code to make your {% data variables.product.prodname_github_app %} do something. For examples of how to write code, see:

* [AUTOTITLE](/apps/creating-github-apps/writing-code-for-a-github-app/quickstart)
* [AUTOTITLE](/apps/creating-github-apps/guides/building-a-github-app-that-responds-to-webhook-events)
* [AUTOTITLE](/apps/creating-github-apps/guides/building-a-login-with-github-button-with-a-github-app)
* [AUTOTITLE](/apps/creating-github-apps/guides/building-a-cli-with-a-github-app)
* [AUTOTITLE](/apps/creating-github-apps/writing-code-for-a-github-app/making-authenticated-api-requests-with-a-github-app-in-a-github-actions-workflow)

You should aim to follow best practices. See [AUTOTITLE](/apps/creating-github-apps/setting-up-a-github-app/best-practices-for-creating-a-github-app).

## Step 3: Authorizing or installing your {% data variables.product.prodname_github_app %}

Once your {% data variables.product.prodname_github_app %} is registered, you'll need to make it available for use, either through **authorization** or **installation**, depending on the app’s purpose.

Enterprise owners {% ifversion enterprise-app-manager %}and app managers {% endif %}can modify the permissions for apps owned by their enterprise at any time. Permissions changes will be automatically accepted by organizations in the enterprise{% ifversion enterprise-app-manager %} if the change was made by the enterprise owner. Otherwise, the changes will be accepted only where the app manager is also an organization owner, and an organization owner must accept the update request for all other organizations{% endif %}.

### Step 3a: Authorizing your {% data variables.product.prodname_github_app %}

Some {% data variables.product.prodname_github_apps %}, like {% data variables.product.prodname_copilot_short %} extensions, require **authorization** but do not need to be installed on an organization. Users in your enterprise can authorize the app to access resources within organizations. However, the app will only have access to {% data variables.product.github %} resources where it is installed. See [AUTOTITLE](/apps/using-github-apps/authorizing-github-apps).

### Step 3b: Sharing your {% data variables.product.prodname_github_app %} via an installation link

For apps that require installation to function, you can provide organization owners with an installation link. Once the app is installed, it will have access to the organization's resources. See [AUTOTITLE](/apps/sharing-github-apps/sharing-your-github-app#sharing-your-github-app-via-an-install-link).

## Step 4: Installing your {% data variables.product.prodname_github_app %} (if required)

If your {% data variables.product.prodname_github_app %} requires installation (not just authorization), organization owners can use the install link to install the app on their organization. See [AUTOTITLE](/apps/using-github-apps/installing-a-github-app-from-a-third-party).

{% ifversion enterprise-installed-apps %}If your app uses enterprise permissions, you can install it on your enterprise. To find the installation link, go to the app's settings page in your enterprise account. See [AUTOTITLE](/apps/using-github-apps/installing-a-github-app-on-your-enterprise).{% endif %}
