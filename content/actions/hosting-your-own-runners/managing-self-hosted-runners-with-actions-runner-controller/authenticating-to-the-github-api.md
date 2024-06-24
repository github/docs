---
title: Authenticating to the GitHub API
shortTitle: Authenticating
intro: 'Learn how to authenticate to the {% data variables.product.company_short %} API to use {% data variables.product.prodname_actions_runner_controller %} with {% data variables.location.product_location %}.'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>= 3.9'
type: overview
topics:
  - Actions Runner Controller
defaultPlatform: linux
---

[Legal notice](#legal-notice)

## Overview

You can authenticate {% data variables.product.prodname_actions_runner_controller %} (ARC) to the {% data variables.product.prodname_dotcom %} API by using a {% data variables.product.prodname_github_app %} or by using a {% data variables.product.pat_v1 %}.

{% note %}

**Note:** You cannot authenticate using a {% data variables.product.prodname_github_app %} for runners at the enterprise level. For more information, see "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/managing-access-to-self-hosted-runners-using-groups#about-runner-groups)."

{% endnote %}

## Authenticating ARC with a {% data variables.product.prodname_github_app %}

1. Create a {% data variables.product.prodname_github_app %} that is owned by an organization. For more information, see "[AUTOTITLE](/apps/creating-github-apps/creating-github-apps/creating-a-github-app)". Configure the {% data variables.product.prodname_github_app %} as follows.

   1. For "Homepage URL," enter `https://github.com/actions/actions-runner-controller`.

   1. Under "Permissions," click **Repository permissions**. Then use the dropdown menus to select the following access permissions.
      * **Administration**: Read and write
        {% note %}

        **Note**: `Administration: Read and write` is only required when configuring {% data variables.product.prodname_actions_runner_controller %} to register at the repository scope. It is not required to register at the organization scope.

        {% endnote %}
      * **Metadata**: Read-only

   1. Under "Permissions," click **Organization permissions**. Then use the dropdown menus to select the following access permissions.
      * **Self-hosted runners**: Read and write

{% data reusables.actions.arc-app-post-install-steps %}

1. In the menu at the top-left corner of the page, click **Install app**, and next to your organization, click **Install** to install the app on your organization.

1. After confirming the installation permissions on your organization, note the app installation ID. You will use it later. You can find the app installation ID on the app installation page, which has the following URL format:

   `https://{% data variables.product.product_url %}/organizations/ORGANIZATION/settings/installations/INSTALLATION_ID`

{% data reusables.actions.arc-app-post-install-set-secrets %}

## Authenticating ARC with a {% data variables.product.pat_v1 %}

ARC can use {% data variables.product.pat_v1_plural %} to register self-hosted runners.

{% ifversion ghec or ghes %}
{% note %}

**Note:** Authenticating ARC with a {% data variables.product.pat_v1 %} is the only supported authentication method to register runners at the enterprise level.

{% endnote %}
{% endif %}

1. Create a {% data variables.product.pat_v1 %} with the required scopes. The required scopes are different depending on whether you are registering runners at the repository{% ifversion ghec or ghes %}, organization, or enterprise{% else %} or organization{% endif %} level. For more information on how to create a {% data variables.product.pat_v1 %}, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token#creating-a-personal-access-token-classic)."

    The following is the list of required {% data variables.product.pat_generic %} scopes for ARC runners.
    * Repository runners: `repo`
    * Organization runners: `admin:org`
    {% ifversion ghec or ghes %}
    * Enterprise runners: `manage_runners:enterprise`
    {% endif %}
1. To create a Kubernetes secret with the value of your {% data variables.product.pat_v1 %}, use the following command.

   {% data reusables.actions.arc-runners-namespace %}

   ```bash copy
   kubectl create secret generic pre-defined-secret \
      --namespace=arc-runners \
      --from-literal=github_token='YOUR-PAT'
   ```

1. In your copy of the [`values.yaml`](https://github.com/actions/actions-runner-controller/blob/master/charts/gha-runner-scale-set/values.yaml) file, pass the secret name as a reference.

   ```yaml
   githubConfigSecret: pre-defined-secret
   ```

   {% data reusables.actions.actions-runner-controller-helm-chart-options %}

## Legal notice

{% data reusables.actions.actions-runner-controller-legal-notice %}
