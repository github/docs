---
title: Handling failed webhook deliveries
shortTitle: Handling failed deliveries
intro: '{% data variables.product.company_short %} does not automatically redeliver failed webhook deliveries, but you can handle failed deliveries manually or by writing code.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Webhooks
layout: inline
---

## About webhook delivery failures

A webhook delivery can fail for multiple reasons. For example, if your server is down or takes longer than {% ifversion fpt or ghec %}10{% else %}30{% endif %} seconds to respond, {% data variables.product.company_short %} will record the delivery as a failure.

{% data variables.product.company_short %} does not automatically redeliver failed deliveries.

## Handling delivery failures

You can manually redeliver failed deliveries. For more information, see "[AUTOTITLE](/webhooks/testing-and-troubleshooting-webhooks/redelivering-webhooks)."

You can also write a script that checks for failed deliveries and attempts to redeliver any that failed. Your script should run on a schedule and do the following:

- Use the {% data variables.product.company_short %} REST API to fetch data about any webhook deliveries that were attempted since the last time that your script ran. For more information, see "[AUTOTITLE](/rest/webhooks/repo-deliveries#list-deliveries-for-a-repository-webhook)," "[AUTOTITLE](/rest/orgs/webhooks#list-deliveries-for-an-organization-webhook)," and "[AUTOTITLE](/rest/apps/webhooks#list-deliveries-for-an-app-webhook)."

   {% ifversion fpt %}There are no API endpoints to get data about {% data variables.product.prodname_marketplace %} webhooks or {% data variables.product.prodname_sponsors %} webhooks.{% endif %}{% ifversion ghec %}There are no API endpoints to get data about {% data variables.product.prodname_marketplace %} webhooks, {% data variables.product.prodname_sponsors %} webhooks, or global webhooks.{% endif %}{% ifversion ghes or ghae %}There are no API endpoints to get data about global webhook deliveries.{% endif %}

- Look at the fetched data to see if any deliveries failed. The data for a failed delivery will have a `status` value that is not `OK`.
- Use the {% data variables.product.company_short %} REST API to redeliver any deliveries that failed. For more information, see "[AUTOTITLE](/rest/webhooks/repo-deliveries#redeliver-a-delivery-for-a-repository-webhook)," "[AUTOTITLE](/rest/orgs/webhooks#redeliver-a-delivery-for-an-organization-webhook)," and "[AUTOTITLE](/rest/apps/webhooks#redeliver-a-delivery-for-an-app-webhook)."

If a webhook delivery fails repeatedly, you should investigate the cause. Each failed delivery will give a reason for failure. For more information, see "[AUTOTITLE](/webhooks/testing-and-troubleshooting-webhooks/troubleshooting-webhooks)."

## Example for repository webhooks

You can use {% data variables.product.prodname_actions %} to run a script periodically to find and redeliver any failed deliveries. For more information about {% data variables.product.prodname_actions %}, see "[AUTOTITLE](/actions)."

The built in `GITHUB_TOKEN` does not have sufficient permissions to redeliver webhooks. Instead of using `GITHUB_TOKEN`, this example uses a {% data variables.product.pat_generic %}. Alternatively, instead of creating a {% data variables.product.pat_generic %}, you can create a {% data variables.product.prodname_github_app %} and use the app's credentials to create an installation access token during the {% data variables.product.prodname_actions %} workflow. For more information, see "[AUTOTITLE](/apps/creating-github-apps/authenticating-with-a-github-app/making-authenticated-api-requests-with-a-github-app-in-a-github-actions-workflow)."

{% ifversion pat-v2 %}
1. Create a {% data variables.product.pat_generic %} with the following access. For more information, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)."
   - For a {% data variables.product.pat_v2 %}, grant the token:
     - write access to the repository webhooks permission
     - write access to the repository variables permission
     - access to the repository where your webhook was created
   - For a {% data variables.product.pat_v1 %}, grant the token the `repo` scope.
{% else %}
1. Create a {% data variables.product.pat_v1 %} with the `repo` scope. For more information, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)."
{% endif %}
1. Store your {% data variables.product.pat_generic %} as a {% data variables.product.prodname_actions %} secret in the repository where you want the workflow to run. For more information, see "[AUTOTITLE](/actions/security-guides/encrypted-secrets)."

1. Copy this {% data variables.product.prodname_actions %} workflow into a YAML file in the `.github/workflows` directory in the repository where you want the workflow to run. Replace the placeholders in the `Run script` step as described below.

```yaml copy annotate
#
name: Redeliver failed webhook deliveries

# This workflow runs every 6 hours or when manually triggered.
on:
  schedule:
    - cron: '20 */6 * * *'
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
      # The endpoints that the script will use need the repository name, repository owner, and hook ID.
      # - Replace `YOUR_SECRET_NAME` with the name of the secret that you created in the previous step.
      # - Replace `YOUR_REPO_OWNER` with the owner of the repository where the webhook was created.
      # - Replace `YOUR_REPO_NAME` with the name of the repository where the webhook was created.
      # - Replace `YOUR_HOOK_ID` with the ID of the webhook.
      # - Replace `YOUR_LAST_REDELIVERY_VARIABLE_NAME` with the name that you want to use for a configuration variable that will be stored in your repository. The name can be any string that contains only alphanumeric characters and `_` and does not start with `GITHUB_` or a number. For more information, see "[AUTOTITLE](/actions/learn-github-actions/variables#defining-configuration-variables-for-multiple-workflows)."
      {% ifversion ghes or ghae %}# - Replace `YOUR_HOSTNAME` with the name of {% data variables.location.product_location %}.{% endif %}
      - name: Run script
        env:
          TOKEN: {% raw %}${{ secrets.YOUR_SECRET_NAME }}{% endraw %}
          REPO_OWNER: 'YOUR_REPO_OWNER'
          REPO_NAME: 'YOUR_REPO_NAME'
          HOOK_ID: 'YOUR_HOOK_ID'
          LAST_REDELIVERY_VARIABLE_NAME: 'YOUR_LAST_REDELIVERY_VARIABLE_NAME'
          {% ifversion ghes or ghae %}HOSTNAME: 'YOUR_HOSTNAME'{% endif %}
        run: |
          node .github/workflows/scripts/redeliver-failed-deliveries.js
```

1. Copy this script into a file called `.github/workflows/scripts/redeliver-failed-deliveries.js` in the same repository where you saved the {% data variables.product.prodname_actions %} workflow file above.

```javascript copy annotate
// This script uses {% data variables.product.company_short %}'s Octokit SDK to make API requests. For more information, see "[AUTOTITLE](/rest/guides/scripting-with-the-rest-api-and-javascript)."
const { Octokit } = require("octokit");

// Get the values of environment variables that were set by the {% data variables.product.prodname_actions %} workflow.
const TOKEN = process.env.TOKEN;
const REPO_OWNER = process.env.REPO_OWNER;
const REPO_NAME = process.env.REPO_NAME;
const HOOK_ID = process.env.HOOK_ID;
const LAST_REDELIVERY_VARIABLE_NAME = process.env.LAST_REDELIVERY_VARIABLE_NAME;
{% ifversion ghes or ghae %}const HOSTNAME = process.env.HOSTNAME;{% endif %}

// Create an instance of `Octokit` using the token{% ifversion ghes or ghae %} and hostname{% endif %} values that were set in the {% data variables.product.prodname_actions %} workflow.
const octokit = new Octokit({ {% ifversion ghes or ghae %}
  baseUrl: "{% data variables.product.api_url_code %}",{% endif %}
  auth: TOKEN,
});

//
async function checkAndRedeliverWebhooks() {
  try {
    // Get the last time that this script ran from the configuration variable. If the variable is not defined, use the current time minus 24 hours.
    const lastStoredRedeliveryTime = await getVariable(LAST_REDELIVERY_VARIABLE_NAME);
    const lastWebhookRedeliveryTime = lastStoredRedeliveryTime || `${Date.now() - (24 * 60 * 60 * 1000)}`;

    // Record the time that this script started redelivering webhooks.
    const newWebhookRedeliveryTime = `${Date.now()}`;

    // Get the webhook deliveries that were delivered after `lastWebhookRedeliveryTime`.
    const deliveries = await fetchWebhookDeliveriesSince(lastWebhookRedeliveryTime);

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
    for (const id of failedDeliveryIDs) {
      await redeliverWebhook(id);
    }

    // Update the configuration variable (or create the variable if it doesn't already exist) to store the time that this script started.
    // This value will be used next time this script runs.
    await updateVariable({
      name: LAST_REDELIVERY_VARIABLE_NAME,
      value: newWebhookRedeliveryTime,
      variableExists: Boolean(lastStoredRedeliveryTime),
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
    if (error.response) {
      console.error(
        `Failed to check and redeliver webhooks: ${error.response.data.message}`
      );
    }
    console.error(error);
  }
}

// This function will fetch all of the webhook deliveries that were delivered since `lastWebhookRedeliveryTime`.
// It uses the `octokit.paginate.iterator()` method to iterate through paginated results. For more information, see "[AUTOTITLE](/rest/guides/scripting-with-the-rest-api-and-javascript#making-paginated-requests)."
//
// If a page of results includes deliveries that occurred before `lastWebhookRedeliveryTime`,
// it will store only the deliveries that occurred after `lastWebhookRedeliveryTime` and then stop.
// Otherwise, it will store all of the deliveries from the page and request the next page.
async function fetchWebhookDeliveriesSince(lastWebhookRedeliveryTime) {
  const iterator = octokit.paginate.iterator(
    "GET /repos/{owner}/{repo}/hooks/{hook_id}/deliveries",
    {
      owner: REPO_OWNER,
      repo: REPO_NAME,
      hook_id: HOOK_ID,
      per_page: 100,{% ifversion api-date-versioning %}
      headers: {
        "x-github-api-version": "{{ allVersions[currentVersion].latestApiVersion }}",
      },{% endif %}
    }
  );

  const deliveries = [];
  
  for await (const { data } of iterator) {
    const oldestDeliveryTimestamp = new Date(
      data[data.length - 1].delivered_at
    ).getTime();

    if (oldestDeliveryTimestamp < lastWebhookRedeliveryTime) {
      for (const delivery of data) {
        if (new Date(delivery.delivered_at).getTime() > lastWebhookRedeliveryTime) {
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
async function redeliverWebhook(deliveryId) {
  await octokit.request("POST /repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}/attempts", {
    owner: REPO_OWNER,
    repo: REPO_NAME,
    hook_id: HOOK_ID,
    delivery_id: deliveryId,
  });
}

// This function gets the value of a configuration variable.
// If the variable does not exist, the endpoint returns a 404 response and this function returns `undefined`.
async function getVariable(variableName) {
  try {
    const {
      data: { value },
    } = await octokit.request(
      "GET /repos/{owner}/{repo}/actions/variables/{name}",
      {
        owner: REPO_OWNER,
        repo: REPO_NAME,
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
async function updateVariable({name, value, variableExists}) {
  if (variableExists) {
    await octokit.request(
      "PATCH /repos/{owner}/{repo}/actions/variables/{name}",
      {
        owner: REPO_OWNER,
        repo: REPO_NAME,
        name: name,
        value: value,
      }
    );
  } else {
    await octokit.request("POST /repos/{owner}/{repo}/actions/variables", {
      owner: REPO_OWNER,
      repo: REPO_NAME,
      name: name,
      value: value,
    });
  }
}

// This will execute the `checkAndRedeliverWebhooks` function.
(async () => {
  await checkAndRedeliverWebhooks();
})();

```

1. You can manually trigger your workflow to test it. For more information, see "[AUTOTITLE](/actions/using-workflows/manually-running-a-workflow)."
