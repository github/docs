---
title: Automatically redelivering failed deliveries for an organization webhook
shortTitle: Automatically redeliver for organization
intro: You can write a script to handle failed deliveries of an organization webhook.
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Webhooks
layout: inline
redirect_from:
  - /webhooks/using-webhooks/creating-a-script-to-automatically-redeliver-failed-deliveries-for-an-organization-webhook
---

## About automatically redelivering failed deliveries

This article describes how to write a script to find and redeliver failed deliveries for an organization webhook. For more information about failed deliveries, see "[AUTOTITLE](/webhooks/using-webhooks/handling-failed-webhook-deliveries)."

This example shows you:

- A script that will find and redeliver failed deliveries for an organization webhook
- What credentials your script will need, and how to store the credentials securely as {% data variables.product.prodname_actions %} secrets
- A {% data variables.product.prodname_actions %} workflow that can securely access your credentials and run the script periodically

This example uses {% data variables.product.prodname_actions %}, but you can also run this script on your server that handles webhook deliveries. For more information, see "[Alternative methods](#alternative-methods)."

## Storing credentials for the script

The built in `GITHUB_TOKEN` does not have sufficient permissions to redeliver webhooks. Instead of using `GITHUB_TOKEN`, this example uses a {% data variables.product.pat_generic %}. Alternatively, instead of creating a {% data variables.product.pat_generic %}, you can create a {% data variables.product.prodname_github_app %} and use the app's credentials to create an installation access token during the {% data variables.product.prodname_actions %} workflow. For more information, see "[AUTOTITLE](/apps/creating-github-apps/authenticating-with-a-github-app/making-authenticated-api-requests-with-a-github-app-in-a-github-actions-workflow)."

{% ifversion pat-v2 %}
1. Create a {% data variables.product.pat_generic %} with the following access. For more information, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)."
   - For a {% data variables.product.pat_v2 %}:
     - Set resource owner to be the organization where your webhook was created
     - Grant the token access to the repository where this workflow will run
     - Grant the token write access to the organization webhooks permission
     - Grant the token write access to the repository variables permission
   - For a {% data variables.product.pat_v1 %}, grant the token the `admin:org_hook` and `repo` scope.
{% else %}
1. Create a {% data variables.product.pat_v1 %} with the `admin:org_hook` and `repo` scope. For more information, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)."
{% endif %}
1. Store your {% data variables.product.pat_generic %} as a {% data variables.product.prodname_actions %} secret in the repository where you want the workflow to run. For more information, see "[AUTOTITLE](/actions/security-guides/encrypted-secrets)."

## Adding a workflow that will run the script

This section demonstrates how you can use a {% data variables.product.prodname_actions %} workflow to securely access the credentials that you stored in the previous section, set environment variables, and periodically run a script to find and redeliver failed deliveries.

Copy this {% data variables.product.prodname_actions %} workflow into a YAML file in the `.github/workflows` directory in the repository where you want the workflow to run. Replace the placeholders in the `Run script` step as described below.

```yaml copy annotate
#
name: Redeliver failed webhook deliveries

# This workflow runs every 6 hours or when manually triggered.
on:
  schedule:
    - cron: '15 */6 * * *'
  workflow_dispatch:

# This workflow will use the built in `GITHUB_TOKEN` to check out the repository contents. This grants `GITHUB_TOKEN` permission to do that.
permissions:
  contents: read

#
jobs:
  redeliver-failed-deliveries:
    name: Redeliver failed deliveries
    runs-on: ubuntu-latest
    steps:
      # This workflow will run a script that is stored in the repository. This step checks out the repository contents so that the workflow can access the script.
      - name: Check out repo content
        uses: {% data reusables.actions.action-checkout %}

      # This step sets up Node.js. The script that this workflow will run uses Node.js.
      - name: Setup Node.js
        uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: '18.x'

      # This step installs the octokit library. The script that this workflow will run uses the octokit library.
      - name: Install dependencies
        run: npm install octokit

      # This step sets some environment variables, then runs a script to find and redeliver failed webhook deliveries.
      # - Replace `YOUR_SECRET_NAME` with the name of the secret where you stored your {% data variables.product.pat_generic %}.
      # - Replace `YOUR_ORGANIZATION_NAME` with the name of the organization where the webhook was created.
      # - Replace `YOUR_HOOK_ID` with the ID of the webhook.
      # - Replace `YOUR_LAST_REDELIVERY_VARIABLE_NAME` with the name that you want to use for a configuration variable that will be stored in the repository where this workflow is stored. The name can be any string that contains only alphanumeric characters and `_`, and does not start with `GITHUB_` or a number. For more information, see "[AUTOTITLE](/actions/learn-github-actions/variables#defining-configuration-variables-for-multiple-workflows)."
      {% ifversion ghes %}# - Replace `YOUR_HOSTNAME` with the name of {% data variables.location.product_location %}.{% endif %}
      - name: Run script
        env:
          TOKEN: {% raw %}${{ secrets.YOUR_SECRET_NAME }}{% endraw %}
          ORGANIZATION_NAME: 'YOUR_ORGANIZATION_NAME'
          HOOK_ID: 'YOUR_HOOK_ID'
          LAST_REDELIVERY_VARIABLE_NAME: 'YOUR_LAST_REDELIVERY_VARIABLE_NAME'
          {% ifversion ghes %}HOSTNAME: 'YOUR_HOSTNAME'{% endif %}
          WORKFLOW_REPO_NAME: {% raw %}${{ github.event.repository.name }}{% endraw %}
          WORKFLOW_REPO_OWNER: {% raw %}${{ github.repository_owner }}{% endraw %}
        run: |
          node .github/workflows/scripts/redeliver-failed-deliveries.js
```

## Adding the script

This section demonstrates how you can write a script to find and redeliver failed deliveries.

Copy this script into a file called `.github/workflows/scripts/redeliver-failed-deliveries.js` in the same repository where you saved the {% data variables.product.prodname_actions %} workflow file above.

```javascript copy annotate
// This script uses {% data variables.product.company_short %}'s Octokit SDK to make API requests. For more information, see "[AUTOTITLE](/rest/guides/scripting-with-the-rest-api-and-javascript)."
const { Octokit } = require("octokit");

//
async function checkAndRedeliverWebhooks() {
  // Get the values of environment variables that were set by the {% data variables.product.prodname_actions %} workflow.
  const TOKEN = process.env.TOKEN;
  const ORGANIZATION_NAME = process.env.ORGANIZATION_NAME;
  const HOOK_ID = process.env.HOOK_ID;
  const LAST_REDELIVERY_VARIABLE_NAME = process.env.LAST_REDELIVERY_VARIABLE_NAME;
  {% ifversion ghes %}const HOSTNAME = process.env.HOSTNAME;{% endif %}
  const WORKFLOW_REPO_NAME = process.env.WORKFLOW_REPO_NAME;
  const WORKFLOW_REPO_OWNER = process.env.WORKFLOW_REPO_OWNER;

  // Create an instance of `Octokit` using the token{% ifversion ghes %} and hostname{% endif %} values that were set in the {% data variables.product.prodname_actions %} workflow.
  const octokit = new Octokit({ {% ifversion ghes %}
    baseUrl: "{% data variables.product.rest_url %}",{% endif %}
    auth: TOKEN,
  });

  try {
    // Get the last time that this script ran from the configuration variable. If the variable is not defined, use the current time minus 24 hours.
    const lastStoredRedeliveryTime = await getVariable({
      variableName: LAST_REDELIVERY_VARIABLE_NAME,
      repoOwner: WORKFLOW_REPO_OWNER,
      repoName: WORKFLOW_REPO_NAME,
      octokit,
    });
    const lastWebhookRedeliveryTime = lastStoredRedeliveryTime || (Date.now() - (24 * 60 * 60 * 1000)).toString();

    // Record the time that this script started redelivering webhooks.
    const newWebhookRedeliveryTime = Date.now().toString();

    // Get the webhook deliveries that were delivered after `lastWebhookRedeliveryTime`.
    const deliveries = await fetchWebhookDeliveriesSince({
      lastWebhookRedeliveryTime,
      organizationName: ORGANIZATION_NAME,
      hookId: HOOK_ID,
      octokit,
    });

    // Consolidate deliveries that have the same globally unique identifier (GUID). The GUID is constant across redeliveries of the same delivery.
    let deliveriesByGuid = {};
    for (const delivery of deliveries) {
      deliveriesByGuid[delivery.guid]
        ? deliveriesByGuid[delivery.guid].push(delivery)
        : (deliveriesByGuid[delivery.guid] = [delivery]);
    }

    // For each GUID value, if no deliveries for that GUID have been successfully delivered within the time frame, get the delivery ID of one of the deliveries with that GUID.
    //
    // This will prevent duplicate redeliveries if a delivery has failed multiple times.
    // This will also prevent redelivery of failed deliveries that have already been successfully redelivered.
    let failedDeliveryIDs = [];
    for (const guid in deliveriesByGuid) {
      const deliveries = deliveriesByGuid[guid];
      const anySucceeded = deliveries.some(
        (delivery) => delivery.status === "OK"
      );
      if (!anySucceeded) {
        failedDeliveryIDs.push(deliveries[0].id);
      }
    }

    // Redeliver any failed deliveries.
    for (const deliveryId of failedDeliveryIDs) {
      await redeliverWebhook({
        deliveryId,
        organizationName: ORGANIZATION_NAME,
        hookId: HOOK_ID,
        octokit,
      });
    }

    // Update the configuration variable (or create the variable if it doesn't already exist) to store the time that this script started.
    // This value will be used next time this script runs.
    await updateVariable({
      variableName: LAST_REDELIVERY_VARIABLE_NAME,
      value: newWebhookRedeliveryTime,
      variableExists: Boolean(lastStoredRedeliveryTime),
      repoOwner: WORKFLOW_REPO_OWNER,
      repoName: WORKFLOW_REPO_NAME,
      octokit,
    });

    // Log the number of redeliveries.
    console.log(
      `Redelivered ${
        failedDeliveryIDs.length
      } failed webhook deliveries out of ${
        deliveries.length
      } total deliveries since ${Date(lastWebhookRedeliveryTime)}.`
    );
  } catch (error) {
    // If there was an error, log the error so that it appears in the workflow run log, then throw the error so that the workflow run registers as a failure.
    if (error.response) {
      console.error(
        `Failed to check and redeliver webhooks: ${error.response.data.message}`
      );
    }
    console.error(error);
    throw(error);
  }
}

// This function will fetch all of the webhook deliveries that were delivered since `lastWebhookRedeliveryTime`.
// It uses the `octokit.paginate.iterator()` method to iterate through paginated results. For more information, see "[AUTOTITLE](/rest/guides/scripting-with-the-rest-api-and-javascript#making-paginated-requests)."
//
// If a page of results includes deliveries that occurred before `lastWebhookRedeliveryTime`,
// it will store only the deliveries that occurred after `lastWebhookRedeliveryTime` and then stop.
// Otherwise, it will store all of the deliveries from the page and request the next page.
async function fetchWebhookDeliveriesSince({
  lastWebhookRedeliveryTime,
  organizationName,
  hookId,
  octokit,
}) {
  const iterator = octokit.paginate.iterator(
    "GET /orgs/{org}/hooks/{hook_id}/deliveries",
    {
      org: organizationName,
      hook_id: hookId,
      per_page: 100,
      headers: {
        "x-github-api-version": "{{ allVersions[currentVersion].latestApiVersion }}",
      },
    }
  );

  const deliveries = [];

  for await (const { data } of iterator) {
    const oldestDeliveryTimestamp = new Date(
      data[data.length - 1].delivered_at
    ).getTime();

    if (oldestDeliveryTimestamp < lastWebhookRedeliveryTime) {
      for (const delivery of data) {
        if (
          new Date(delivery.delivered_at).getTime() > lastWebhookRedeliveryTime
        ) {
          deliveries.push(delivery);
        } else {
          break;
        }
      }
      break;
    } else {
      deliveries.push(...data);
    }
  }

  return deliveries;
}

// This function will redeliver a failed webhook delivery.
async function redeliverWebhook({
  deliveryId,
  organizationName,
  hookId,
  octokit,
}) {
  await octokit.request(
    "POST /orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}/attempts",
    {
      org: organizationName,
      hook_id: hookId,
      delivery_id: deliveryId,
    }
  );
}

// This function gets the value of a configuration variable.
// If the variable does not exist, the endpoint returns a 404 response and this function returns `undefined`.
async function getVariable({ variableName, repoOwner, repoName, octokit }) {
  try {
    const {
      data: { value },
    } = await octokit.request(
      "GET /repos/{owner}/{repo}/actions/variables/{name}",
      {
        owner: repoOwner,
        repo: repoName,
        name: variableName,
      }
    );
    return value;
  } catch (error) {
    if (error.status === 404) {
      return undefined;
    } else {
      throw error;
    }
  }
}

// This function will update a configuration variable (or create the variable if it doesn't already exist). For more information, see "[AUTOTITLE](/actions/learn-github-actions/variables#defining-configuration-variables-for-multiple-workflows)."
async function updateVariable({
  variableName,
  value,
  variableExists,
  repoOwner,
  repoName,
  octokit,
}) {
  if (variableExists) {
    await octokit.request(
      "PATCH /repos/{owner}/{repo}/actions/variables/{name}",
      {
        owner: repoOwner,
        repo: repoName,
        name: variableName,
        value: value,
      }
    );
  } else {
    await octokit.request("POST /repos/{owner}/{repo}/actions/variables", {
      owner: repoOwner,
      repo: repoName,
      name: variableName,
      value: value,
    });
  }
}

// This will execute the `checkAndRedeliverWebhooks` function.
(async () => {
  await checkAndRedeliverWebhooks();
})();

```

## Testing the script

You can manually trigger your workflow to test the script. For more information, see "[AUTOTITLE](/actions/using-workflows/manually-running-a-workflow)" and "[AUTOTITLE](/actions/monitoring-and-troubleshooting-workflows/using-workflow-run-logs)."

## Alternative methods

This example used {% data variables.product.prodname_actions %} to securely store credentials and to run the script on a schedule. However, if you prefer to run this script on your server than handles webhook deliveries, you can:

- Store the credentials in another secure manner, such as a secret manager like [Azure key vault](https://azure.microsoft.com/products/key-vault). You will also need to update the script to access the credentials from their new location.
- Run the script on a schedule on your server, for example by using a cron job or task scheduler.
- Update the script to store the last run time somewhere that your server can access and update. If you choose not to store the last run time as a {% data variables.product.prodname_actions %} secret, you can remove the API calls to access and update the configuration variable.
