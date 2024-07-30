---
title: Creating custom deployment protection rules
shortTitle: Create custom protection rules
intro: 'Use {% data variables.product.prodname_github_apps %} to automate protecting deployments with third-party systems.'
product: '{% data reusables.actions.custom-deployment-protection-rules-availability %}'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Actions
  - CD
  - Deployment
redirect_from:
  - /actions/deployment/protecting-deployments/creating-custom-deployment-protection-rules
---

{% data reusables.actions.custom-deployment-protection-rules-beta-note %}

## About custom deployment protection rules

{% data reusables.actions.about-custom-deployment-protection-rules %}

Custom deployment protection rules are powered by {% data variables.product.prodname_github_apps %} and run based on webhooks and callbacks. Approval or rejection of a workflow job is based on consumption of the `deployment_protection_rule` webhook. For more information, see "[AUTOTITLE](/webhooks-and-events/webhooks/webhook-events-and-payloads#deployment_protection_rule)" and "[Approving or rejecting deployments](#approving-or-rejecting-deployments)."

Once you have created a custom deployment protection rule and installed it on your repository, the custom deployment protection rule will automatically be available for all environments in the repository.

## Using custom deployment protection rules to approve or reject deployments

Deployments to an environment can be approved or rejected based on the conditions defined in any external service like an approved ticket in an IT Service Management (ITSM) system, vulnerable scan result on dependencies, or stable health metrics of a cloud resource. The decision to approve or reject deployments is at the discretion of the integrating third-party application and the gating conditions you define in them. The following are a few use cases for which you can create a deployment protection rule.

* ITSM & Security Operations: you can check for service readiness by validating quality, security, and compliance processes that verify deployment readiness.
* Observability systems: you can consult monitoring or observability systems (Asset Performance Management Systems and logging aggregators, cloud resource health verification systems, etc.) for verifying the safety and deployment readiness.
* Code quality & testing tools: you can check for automated tests on CI builds which need to be deployed to an environment.

Alternatively, you can write your own protection rules for any of the above use cases or you can define any custom logic to safely approve or reject deployments from pre-production to production environments.

## Creating a custom deployment protection rule with {% data variables.product.prodname_github_apps %}

1. Create a {% data variables.product.prodname_github_app %}. For more information, see "[AUTOTITLE](/apps/creating-github-apps/creating-github-apps/creating-a-github-app)." Configure the {% data variables.product.prodname_github_app %} as follows.
   1. Optionally, in the **Callback URL** text field under "Identifying and authorizing users," enter the callback URL. For more information, see "[AUTOTITLE](/apps/creating-github-apps/creating-github-apps/about-the-user-authorization-callback-url)."
   1. Under "Permissions," select **Repository permissions**.
   1. To the right of "Actions," click the drop down menu and select **Access: Read-only**.
   ![Screenshot of the "Repository permissions" section when creating a new GitHub App. The button to configure permissions, with the "read-only" permission selected, for Actions is highlighted by a dark orange rectangle.](/assets/images/help/actions/actions-repo-permissions-read-only.png)
   1. To the right of "Deployments," click the drop down menu and select **Access: Read and write**.
   ![Screenshot of the "Deployments" permission settings in the "Repository permissions" section while creating a new GitHub App. The button to configure permissions, with the "read-only" permission selected, for Deployments is highlighted by a dark orange rectangle.](/assets/images/help/actions/actions-deployments-repo-permissions-read-and-write.png)
   1. Under "Subscribe to events," select **Deployment protection rule**.
   ![Screenshot of the "Subscribe to events section" section while creating a new GitHub App. The checkbox to subscribe to the deployment protection rule event is highlighted by a dark orange rectangle.](/assets/images/help/actions/actions-subscribe-to-events-deployment-protection-rules.png)

1. Install the custom deployment protection rule in your repositories and enable it for use. For more information, see "[AUTOTITLE](/actions/deployment/protecting-deployments/configuring-custom-deployment-protection-rules)."

## Approving or rejecting deployments

Once a workflow reaches a job that references an environment that has the custom deployment protection rule enabled, {% data variables.product.company_short %} sends a `POST` request to a URL you configure containing the `deployment_protection_rule` payload. You can write your deployment protection rule to automatically send REST API requests that approve or reject the deployment based on the `deployment_protection_rule` payload. Configure your REST API requests as follows.

1. Validate the incoming `POST` request. For more information, see "[AUTOTITLE](/webhooks-and-events/webhooks/securing-your-webhooks#validating-payloads-from-github)."
1. Use a JSON Web Token to authenticate as a {% data variables.product.prodname_github_app %}. For more information, see "[AUTOTITLE](/apps/creating-github-apps/authenticating-with-a-github-app/authenticating-as-a-github-app#about-authentication-as-a-github-app)."
1. Using the installation ID from the `deployment_protection_rule` webhook payload, generate an install token. For more information, see "[AUTOTITLE](/developers/apps/building-github-apps/authenticating-with-github-apps#authenticating-as-a-github-app)."

   ```shell
   curl --request POST \
   --url "{% data variables.product.rest_url %}/app/installations/INSTALLATION_ID/ACCESS_TOKENS" \
   --header "Accept: application/vnd.github+json" \
   --header "Authorization: Bearer {jwt}" \
   --header "Content-Type: application/json" \
   --data \
   '{ \
      "repository_ids": [321], \
      "permissions": { \
         "deployments": "write" \
      } \
   }'
   ```

1. Optionally, to add a status report without taking any other action to {% data variables.product.prodname_dotcom %}, send a `POST` request to `/repos/OWNER/REPO/actions/runs/RUN_ID/deployment_protection_rule`. In the request body, omit the `state`. For more information, see "[AUTOTITLE](/rest/actions/workflow-runs#review-custom-deployment-protection-rules-for-a-workflow-run)." You can post a status report on the same deployment up to 10 times. Status reports support Markdown formatting and can be up to 1024 characters long.

1. To approve or reject a request, send a `POST` request to `/repos/OWNER/REPO/actions/runs/RUN_ID/deployment_protection_rule`. In the request body, set the `state` property to either `approved` or `rejected`. For more information, see "[AUTOTITLE](/rest/actions/workflow-runs#review-custom-deployment-protection-rules-for-a-workflow-run)."

1. Optionally, request the status of an approval for a workflow run by sending a `GET` request to `/repos/OWNER/REPOSITORY_ID/actions/runs/RUN_ID/approvals`. For more information, see "[AUTOTITLE](/rest/actions/workflow-runs#get-the-review-history-for-a-workflow-run)."

1. Optionally, review the deployment on {% data variables.product.prodname_dotcom %}. For more information, see "[AUTOTITLE](/actions/managing-workflow-runs/reviewing-deployments)."

{% ifversion fpt or ghec %}

## Publishing custom deployment protection rules in the {% data variables.product.prodname_marketplace %}

You can publish your {% data variables.product.prodname_github_app %} to the {% data variables.product.prodname_marketplace %} to allow developers to discover suitable protection rules and install it across their {% data variables.product.company_short %} repositories. Or you can browse existing custom deployment protection rules to suit your needs. For more information, see "[AUTOTITLE](/apps/publishing-apps-to-github-marketplace/github-marketplace-overview/about-github-marketplace)" and "[AUTOTITLE](/apps/publishing-apps-to-github-marketplace/listing-an-app-on-github-marketplace)."

{% endif %}
