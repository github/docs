---
title: Creating GitHub Apps for your enterprise
intro: 'Learn how to create a {% data variables.product.prodname_github_app %} for organizations within your enterprise.'
versions:
  feature: enterprise-apps-public-beta
type: how_to
topics:
  - Enterprise
permissions: Enterprise owners.
shortTitle: Create a GitHub App
---

{% data reusables.apps.enterprise-apps-beta %}

You can create a {% data variables.product.prodname_github_app %} under your enterprise account. The app can only be installed on organizations within your enterprise, and can only be authorized by members of your enterprise. The app can't be installed on user accounts.

## Step 1: Registering a {% data variables.product.prodname_github_app %}

To create a {% data variables.product.prodname_github_app %}, you must first register the app. See [AUTOTITLE](/apps/creating-github-apps/registering-a-github-app/registering-a-github-app).

## Step 2: Building a {% data variables.product.prodname_github_app %}

After registering a {% data variables.product.prodname_github_app %}, you will want to write code to make your {% data variables.product.prodname_github_app %} do something. For examples of how to write code, see:

* [AUTOTITLE](/apps/creating-github-apps/writing-code-for-a-github-app/quickstart)
* [AUTOTITLE](/apps/creating-github-apps/guides/building-a-github-app-that-responds-to-webhook-events)
* [AUTOTITLE](/apps/creating-github-apps/guides/building-a-login-with-github-button-with-a-github-app)
* [AUTOTITLE](/apps/creating-github-apps/guides/building-a-cli-with-a-github-app)
* [AUTOTITLE](/apps/creating-github-apps/writing-code-for-a-github-app/making-authenticated-api-requests-with-a-github-app-in-a-github-actions-workflow)

You should aim to follow best practices. See [AUTOTITLE](/apps/creating-github-apps/setting-up-a-github-app/best-practices-for-creating-a-github-app).

## Step 3: Authorizing or sharing your {% data variables.product.prodname_github_app %}

Once your {% data variables.product.prodname_github_app %} is registered, you'll need to make it available to organizations in your enterprise, either through **authorization** or **installation**, depending on the app’s purpose.

### Step 3a: Authorizing your {% data variables.product.prodname_github_app %}

Some {% data variables.product.prodname_github_apps %}, like {% data variables.product.prodname_copilot_short %} extensions, require **authorization** but do not need to be installed on an organization. Users in your enterprise can authorize the app to access resources within organizations. However, the app will only have access to {% data variables.product.github %} resources where it is installed. See [AUTOTITLE](/apps/using-github-apps/authorizing-github-apps).

### Step 3b: Sharing your {% data variables.product.prodname_github_app %} via an installation link

For apps that require installation to function, you can provide organization owners with an installation link. Once the app is installed, it will have access to the organization's resources. See [AUTOTITLE](/apps/sharing-github-apps/sharing-your-github-app#sharing-your-github-app-via-an-install-link).

## Step 4: Installing your {% data variables.product.prodname_github_app %} (if required)

If your {% data variables.product.prodname_github_app %} requires installation (not just authorization), organization owners can use the install link to install the app on their organization. See [AUTOTITLE](/apps/using-github-apps/installing-a-github-app-from-a-third-party).
