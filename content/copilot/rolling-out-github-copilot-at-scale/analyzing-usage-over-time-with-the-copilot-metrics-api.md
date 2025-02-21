---
title: Analyzing usage over time with the Copilot metrics API
shortTitle: Analyze usage over time
intro: 'Learn how to connect to the API, store data, and analyze usage trends.'
versions:
  feature: copilot
product: '{% data variables.product.prodname_copilot_for_business %} or {% data variables.product.prodname_copilot_enterprise %}'
redirect_from:
  - /copilot/managing-copilot/managing-github-copilot-in-your-organization/reviewing-activity-related-to-github-copilot-in-your-organization/analyzing-usage-over-time-with-the-copilot-metrics-api
permissions: 'Organization owners, enterprise owners, and billing managers'
layout: inline
topics:
  - Copilot
---

## Introduction

You can use the [AUTOTITLE](/rest/copilot/copilot-metrics) to see trends in how users are adopting {% data variables.product.prodname_copilot %}. During a rollout of {% data variables.product.prodname_copilot %}, it's useful to view these trends to check that people are using their assigned licenses, see which features people are using, and understand the effect of your company's enablement plan on developers.

The API includes:

* Data for the last 28 days
* Numbers of active users and engaged users
* Breakdowns by language and IDE
* The option to view metrics for an enterprise, organization, or team

If you currently use the [AUTOTITLE](/rest/copilot/copilot-usage), we recommend migrating to the [AUTOTITLE](/rest/copilot/copilot-metrics) as soon as possible.

This guide demonstrates how to query the API, store data, and analyze a trend for changes to the number of users per week. The examples in this guide use the endpoint for an organization, but you can adapt the examples to meet your needs.

## About endpoint availability

Endpoints are available to get data for an enterprise, organization, organization team, or enterprise team.

* If you have a {% data variables.product.prodname_copilot_for_business %} or {% data variables.product.prodname_copilot_enterprise %} subscription as part of a regular organization or enterprise, you can use the endpoints for **an enterprise, an organization, or an organization team**. You don't have access to enterprise teams unless you're enrolled in a preview.
* If you use a dedicated enterprise for {% data variables.product.prodname_copilot_for_business %}—an enterprise account without the ability to create organizations—you can use the endpoints for **an enterprise or an enterprise team**.

## Prerequisites

* The **{% data variables.product.prodname_copilot_short %} metrics API access** policy must be enabled for your enterprise or organization. See [AUTOTITLE](/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-policies-for-copilot-in-your-organization) or [AUTOTITLE](/enterprise-cloud@latest/copilot/managing-copilot/managing-copilot-for-your-enterprise/managing-policies-and-features-for-copilot-in-your-enterprise).
* The organization, enterprise, or team that you're querying must have enough active {% data variables.product.prodname_copilot_short %} users. The API only returns results for a given day if there are **five or more members with active {% data variables.product.prodname_copilot_short %} licenses** for that day.
* In this example, we'll create a JavaScript script for querying and analyzing the data. To run this script locally, you must install [Node.js](https://nodejs.org/en), then install the [Octokit.js SDK](https://github.com/octokit/octokit.js#usage) with `npm install -g octokit`.

## 1. Create a {% data variables.product.pat_generic %}

For our example, to get metrics for an organization, we'll create a {% data variables.product.pat_v1 %} with the `manage_billing:copilot` scope. See [AUTOTITLE](/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-personal-access-token-classic).

If you're using another endpoint, you may need different scopes. See [AUTOTITLE](/rest/copilot/copilot-metrics).

## 2. Connect to the API

We will call the API from a script and save the response as a variable. We can then store the data externally and analyze trends in the data.

The following example uses the [Octokit client](https://github.com/octokit) for JavaScript. You can use other methods to call the API, such as cURL or the {% data variables.product.prodname_cli %}.

### Example

In this example:

* Replace YOUR_TOKEN with your {% data variables.product.pat_generic %}.
* Replace YOUR_ORG with your organization name, such as `octo-org`.

```javascript annotate
// Import Octokit
import { Octokit } from "octokit";

// Set your token and organization
const octokit = new Octokit({
  auth: 'YOUR_TOKEN'
});
const org = 'YOUR_ORG';

// Set other variables if required for the endpoint you're using
/*
const team = 'YOUR_TEAM';
const enterprise = 'YOUR_ENTERPRISE';
const entTeam = 'YOUR_ENTERPRISE_TEAM';
*/

// Call the API
async function orgMetrics() {
  const resp = await octokit.request(`GET /orgs/${org}/copilot/metrics`, {
    org: 'ORG',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  });

  const copilotUsage = resp.data;

  console.log(copilotUsage);
  }

// Call the function
orgMetrics();
```

### Run the script locally

To test the script locally, save the file as `copilot.mjs`, then run `node copilot.mjs`.

>[!IMPORTANT] The **.mjs** file type is important. The `import { Octokit }` statement may not work with a regular `.js` file.

In your terminal, you should see output with a JSON array like the following.

```json
[
  {
    date: '2024-11-07',
    copilot_ide_chat: { editors: [Array], total_engaged_users: 14 },
    total_active_users: 28,
    copilot_dotcom_chat: { models: [Array], total_engaged_users: 4 },
    total_engaged_users: 28,
    copilot_dotcom_pull_requests: { total_engaged_users: 0 },
    copilot_ide_code_completions: { editors: [Array], total_engaged_users: 22 }
  },
...
```

## 3. Store the data

To analyze trends over longer than 28 days, you will need to:

* Call the API daily, using a cron job or scheduled {% data variables.product.prodname_actions %} workflow.
* Store data locally or with a database service such as MySQL.
* Query the data to identify trends over time.

### Example

In this example we'll save the data to a local `.json` file. To do this, we will import some modules for working with files, and update the `orgMetrics` function to save the response data.

The function saves new data that is returned each day, without overwriting old data in the file.

New steps are annotated in **bold**.

```javascript annotate
// Import Octokit
import { Octokit } from "octokit";

// **Import modules for working with files**
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// **Declare variables for working with files**
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Set your token and organization
const octokit = new Octokit({
  auth: 'YOUR_TOKEN'
});

const org = 'YOUR_ORG';

// Call the API
async function orgMetrics() {
  const resp = await octokit.request(`GET /orgs/${org}/copilot/metrics`, {
    org: 'ORG',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  });

  const copilotUsage = resp.data;

  // **Define the path to the local file where data will be stored**
  const dataFilePath = path.join(__dirname, 'copilotMetricsData.json');

  // **Read existing data from the file, if it exists**
  let existingData = [];
  if (fs.existsSync(dataFilePath)) {
    const fileContent = fs.readFileSync(dataFilePath, 'utf8');
    existingData = JSON.parse(fileContent);
  }

  // **Filter out the new data that is not already in the existing data**
  const newData = copilotUsage.filter(entry => !existingData.some(existingEntry => existingEntry.date === entry.date));

  // **Append new data to the existing data**
  if (newData.length > 0) {
    existingData = existingData.concat(newData);

    // **Save the updated data back to the file**
    fs.writeFileSync(dataFilePath, JSON.stringify(existingData, null, 2));
    console.log(`Saved ${newData.length} new entries.`);
  } else {
    console.log('No new data to save.');
  }
}

// Call the function
orgMetrics();
```

### Run the script locally

After running the script with `node copilot.mjs`, you should have a new file in your directory called `copilotMetricsData.json`. The file should contain data from the API response.

If you run the script again tomorrow, it should only save data for one new day to the file.

## 4. Analyze trends

You can work with the data from the API to identify trends over the last 28 days or, if you've stored data from previous API calls, over a longer period.

### Example

In the following example, we update the `orgMetrics` function to extract the total and average number of active and engaged users per week. We could then use that data to track changes over time. This example uses the data returned directly from the API, and doesn't require stored data.

New steps are annotated in **bold**.

```javascript annotate
// Call the API
async function orgMetrics() {
  const resp = await octokit.request(`GET /orgs/${org}/copilot/metrics`, {
    org: 'ORG',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  });

  const copilotUsage = resp.data;

  // **Create an object to store data for each week**
  let userTrends ={
    week1: {
      days:0,
      activeUsers:0,
      engagedUsers:0,
    },
    week2: {
      days:0,
      activeUsers:0,
      engagedUsers:0,
    },
    week3: {
      days:0,
      activeUsers:0,
      engagedUsers:0,
    },
    week4: {
      days:0,
      activeUsers:0,
      engagedUsers:0,
    },
  };

 // **Iterate over the data**
 for (let i =0; i<copilotUsage.length; i++) {
    // **Determine the week number (1-4) based on the index**
    const week = Math.ceil((i+1)/7);
    // **Increment userTrends for the current week**
    userTrends[`week${week}`].days += 1;
    userTrends[`week${week}`].activeUsers += copilotUsage[i].total_active_users;
    userTrends[`week${week}`].engagedUsers += copilotUsage[i].total_engaged_users;
  }

 // **Calculate the average number of active and engaged users per day for each week, rounded to two decimal places**
 for (const week in userTrends) {
  userTrends[week].avgActiveUsers = (userTrends[week].activeUsers / userTrends[week].days).toFixed(2);
  userTrends[week].avgEngagedUsers = (userTrends[week].engagedUsers / userTrends[week].days).toFixed(2);
  }

  // Output to the console
  console.log(userTrends);
}
```

### Run the script locally

After running the script with `node copilot.mjs`, you should see output in your terminal like the following.

```json
{
  week1: {
    days: 7,
    activeUsers: 174,
    engagedUsers: 174,
    avgActiveUsers: '24.86',
    avgEngagedUsers: '24.86'
  },
  week2: {
    days: 7,
    activeUsers: 160,
    engagedUsers: 151,
    avgActiveUsers: '22.86',
    avgEngagedUsers: '21.57'
  },
  week3: {
    days: 7,
    activeUsers: 134,
    engagedUsers: 123,
    avgActiveUsers: '19.14',
    avgEngagedUsers: '17.57'
  },
  week4: {
    days: 6,
    activeUsers: 143,
    engagedUsers: 132,
    avgActiveUsers: '23.83',
    avgEngagedUsers: '22.00'
  }
}
```
