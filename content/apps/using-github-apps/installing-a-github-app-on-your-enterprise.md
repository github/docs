---
title: Installing a GitHub App on your enterprise
intro: 'You can install {% data variables.product.prodname_github_apps %} on your enterprise to manage your enterprise account and perform enterprise-level operations.'
versions:
  feature: enterprise-installed-apps
shortTitle: Install apps on your enterprise
permissions: 'Enterprise owners can install {% data variables.product.prodname_github_apps %} on their enterprise. App managers cannot install apps at the enterprise level.'
---

> [!NOTE]
> Enterprise-installed {% data variables.product.prodname_github_apps %} are in {% data variables.release-phases.public_preview %} and subject to change.

## About installing {% data variables.product.prodname_github_apps %} on your enterprise

Enterprise-installed {% data variables.product.prodname_github_apps %} are apps that request enterprise-level permissions and can perform operations on your enterprise account. Unlike organization or user installations, they do not have access to any organization or repository permissions—they only manage the enterprise itself.

When an enterprise owner installs a {% data variables.product.prodname_github_app %} on your enterprise, the app will be granted the enterprise permissions it requested. These permissions allow the app to perform operations such as creating organizations in the enterprise, installing applications across organizations, and managing SCIM provisioning.

## Requirements to install a {% data variables.product.prodname_github_app %} on your enterprise

The {% data variables.product.prodname_github_app %} must request enterprise-level permissions. It can request other permissions as well, but only the enterprise permissions will be granted during installation.

The app must be owned by your enterprise or an organization within your enterprise. You cannot install apps owned by an account outside your enterprise.

## Installing a {% data variables.product.prodname_github_app %} on your enterprise

To install an app on your enterprise, navigate to the {% data variables.product.prodname_github_app %} installation page. This may be provided by the app developer as an installation link, or you can find it in the app's registration. The URL will look something like `{% data variables.product.oauth_host_code %}/apps/APP-NAME/installations/new`, where `APP-NAME` is the name of the {% data variables.product.prodname_github_app %}.

If the app can be installed, the list of available installation locations will include your enterprise. You can select your enterprise to install the app.

After installation, the app will be able to create an installation token for your enterprise or sign in enterprise members in order to act on their behalf at the enterprise level. Acting on a user's behalf requires the user to be able to perform the desired operations within the enterprise. For example, if the app needs to invite a user to an enterprise, the user must have permission to invite members to the enterprise as well.

## What enterprise-installed apps can do

{% data reusables.enterprise-accounts.enterprise-apps-capabilities %}

For more information about available permissions and API endpoints, see [AUTOTITLE](/rest/authentication/permissions-required-for-github-apps).

{% ifversion not ghes %}

## Rate limits for enterprise-installed {% data variables.product.prodname_github_apps %}

The installation token for an enterprise-installed {% data variables.product.prodname_github_apps %} has the same rate limit as a {% data variables.product.prodname_ghe_cloud %} organization. Rate limits are per installation. For example, if an app is installed on an enterprise and two organizations, it will require 3 installation tokens to access them and have a full, independent rate limit budget for each installation. For more information, see [AUTOTITLE](/rest/overview/rate-limits-for-the-rest-api) and [AUTOTITLE](/graphql/overview/resource-limitations).
{% endif %}

## Current limitations

Enterprise-installed {% data variables.product.prodname_github_apps %} are currently in {% data variables.release-phases.public_preview %} with the following limitations.

### API support

Not all APIs support enterprise-installed {% data variables.product.prodname_github_apps %} yet. As more permissions are built and APIs updated, support will become broader. For more information about the APIs and permissions that support enterprise-installed {% data variables.product.prodname_github_apps %}, see [AUTOTITLE](/rest/authentication/permissions-required-for-github-apps).

### Webhook support

Enterprise installations do not currently support webhooks. Apps installed at the enterprise level cannot receive webhook events for enterprise-level activities. Install them on organizations or repositories to receive webhook events for those resources.

### Organization access

Enterprise installations are not granted access to organizations or repositories within your enterprise, with the exception of the organization installations API. To access organization or repository resources, you must install the app separately on each organization where access is needed.

If you need to install the same app in many organizations, you can automate this with an API. See [AUTOTITLE](/admin/managing-github-apps-for-your-enterprise/automate-installations).

## Next steps

* To grant the app access to specific organizations, install it on those organizations. For more information, see [AUTOTITLE](/apps/using-github-apps/installing-a-github-app-from-a-third-party).
* Learn about managing apps installed in your organizations. For more information, see [AUTOTITLE](/apps/using-github-apps/reviewing-and-modifying-installed-github-apps).
