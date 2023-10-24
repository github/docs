---
title: Building a GitHub App that responds to webhook events
shortTitle: Respond to webhooks
intro: 'Learn how to build a {% data variables.product.prodname_github_app %} that makes an API request in response to a webhook event.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
redirect_from:
  - /apps/creating-github-apps/guides/building-a-github-app-that-responds-to-webhook-events
layout: inline
---
## Introduction

This tutorial demonstrates how to write code to create a {% data variables.product.prodname_github_app %} that makes an API request in response to a webhook event. Specifically, when a pull request is opened in a repository that the app was granted access to, the app will receive a pull request webhook event. Then, the app will use {% data variables.product.company_short %}'s API to add a comment to the pull request.

In this tutorial, you will use your computer or codespace as a server while you develop your app. Once the app is ready for production use, you should deploy your app to a dedicated server.

This tutorial uses JavaScript, but you can use any programming language that you can run on your server.

### About webhooks

When you register a {% data variables.product.prodname_github_app %}, you can specify a webhook URL and subscribe to webhook events. When activity on {% data variables.product.company_short %} triggers an event that your app is subscribed to, {% data variables.product.company_short %} will send a webhook event to your app's webhook URL.

For example, you can subscribe your {% data variables.product.prodname_github_app %} to the pull request webhook event. When a pull request is opened in a repository that the app was granted access to, {% data variables.product.company_short %} will send a pull request webhook event to your app's webhook URL. If multiple actions can trigger the event, the event payload will include an `action` field to indicate what type of action triggered the event. In this example, the value of `action` would be `opened` since the event was triggered because a pull request was opened.

If your app is running on a server that is listening for these webhook events, then your app can take an action when it receives a webhook event. For example, your app can use the {% data variables.product.company_short %} API to post a comment to the pull request when it receives a pull request webhook event.

For more information, see "[AUTOTITLE](/apps/creating-github-apps/creating-github-apps/using-webhooks-with-github-apps)." For information about the possible webhook events and actions, see "[AUTOTITLE](/webhooks-and-events/webhooks/webhook-events-and-payloads)."

## Prerequisites

This tutorial requires your computer or codespace to run Node.js version 12 or greater and npm version 6.12.0 or greater. For more information, see [Node.js](https://nodejs.org).

This tutorial assumes you have a basic understanding of JavaScript and ES6 syntax.

## Setup

The following sections will lead you through setting up the following components:

- a repository to store the code for your app
- a way to receive webhooks locally
- a {% data variables.product.prodname_github_app %} registration that is subscribed to "pull request" webhook events, has permission to add comments to pull requests, and uses a webhook URL that you can receive locally

### Create a repository to store code for your app

1. Create a repository to store the code for your app. For more information, see "[AUTOTITLE](/repositories/creating-and-managing-repositories/creating-a-new-repository)."
1. Clone your repository from the previous step. For more information, see "[AUTOTITLE](/repositories/creating-and-managing-repositories/cloning-a-repository)." You may use a local clone or {% data variables.product.prodname_github_codespaces %}.
1. In a terminal, navigate to the directory where your clone is stored.
1. If the directory doesn't already include a `.gitignore` file, add a `.gitignore` file. You will add content to this file later. For more information about `.gitignore` files, see "[AUTOTITLE](/get-started/getting-started-with-git/ignoring-files)."

You will add more code to this repository in later steps.

### Get a webhook proxy URL

In order to develop your app locally, you can use a webhook proxy URL to forward webhooks from {% data variables.product.company_short %} to your computer or codespace. This tutorial uses Smee.io to provide a webhook proxy URL and forward webhooks.

1. In your browser, navigate to https://smee.io/.
1. Click **Start a new channel**.
1. Copy the full URL under "Webhook Proxy URL". You will use this URL in a later step.

### Register a {% data variables.product.prodname_github_app %}

For this tutorial, you must have a {% data variables.product.prodname_github_app %} registration that:

- Has webhooks active
- Uses a webhook URL that you can receive locally
- Has the "Pull request" repository permission
- Subscribes to the "Pull request" webhook event

The following steps will guide you through registering a {% data variables.product.prodname_github_app %} with these settings. For more information about {% data variables.product.prodname_github_app %} settings, see "[AUTOTITLE](/apps/creating-github-apps/creating-github-apps/creating-a-github-app)."

{% data reusables.apps.settings-step %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.github_apps %}
1. Click **New GitHub App**.
1. Under "GitHub App name", enter a name for your app. For example, `USERNAME-webhook-test-app` where `USERNAME` is your {% data variables.product.company_short %} username.
1. Under "Homepage URL", enter a URL for your app. For example, you can use the URL of the repository that you created to store the code for your app.
1. Skip the "Identifying and authorizing users" and "Post installation" sections for this tutorial. For more information about these settings, see "[AUTOTITLE](/apps/creating-github-apps/creating-github-apps/creating-a-github-app)."
1. Make sure that **Active** is selected under "Webhooks."
1. Under "Webhook URL", enter your webhook proxy URL from earlier. For more information, see "[Get a webhook proxy URL](#get-a-webhook-proxy-url)."
1. Under "Webhook secret", enter a random string. You will use this string later.
1. Under "Repository permissions", next to "Pull requests," select **Read & write**.
1. Under "Subscribe to events", select **Pull request**.
1. Under "Where can this GitHub App be installed?", select **Only on this account**. You can change this later if you want to publish your app.
1. Click **Create GitHub App**.

## Write code for your app

The following sections will lead you through writing code to make your app respond to webhook events.

### Install dependencies

This tutorial uses {% data variables.product.company_short %}'s `octokit` module to handle webhook events and make API requests. For more information about Octokit.js, see "[AUTOTITLE](/rest/guides/scripting-with-the-rest-api-and-javascript)" and [the Octokit.js README](https://github.com/octokit/octokit.js/#readme).

This tutorial uses the `dotenv` module to read information about your app from a `.env` file. For more information, see [dotenv](https://www.npmjs.com/package/dotenv).

This tutorial uses Smee.io to forward webhooks from {% data variables.product.company_short %} to your local server. For more information, see [smee-client](https://www.npmjs.com/package/smee-client).

1. In a terminal, navigate to the directory where your clone is stored.
1. Run `npm init --yes` to create a `package.json` file using the npm defaults.
1. Run `npm install octokit`.
1. Run `npm install dotenv`.
1. Run `npm install smee-client --save-dev`. Since you will only use Smee.io to forward webhooks while you are developing your app, this is a dev dependency.
1. Add `node_modules` to your `.gitignore` file.

### Store your app's identifying information and credentials

This tutorial will show you how to store your app's credentials and identifying information as environment variables in a `.env` file. When you deploy your app, you will want to change how you store the credentials. For more information, see "[Deploy your app](#deploy-your-app)."

Make sure that you are on a secure machine before performing these steps since you will store your credentials locally.

1. In your terminal, navigate to the directory where your clone is stored.
1. Create a file called `.env` at the top level of this directory.
1. Add `.env` to your `.gitignore` file. This will prevent you from accidentally committing your app's credentials.
1. Add the following contents to your `.env` file. {% ifversion ghes or ghae %}Replace `YOUR_HOSTNAME` with the name of {% data variables.location.product_location %}. You will update the other values in a later step.{% else %}You will update the values in a later step.{% endif %}

   ```text copy
   APP_ID="YOUR_APP_ID"
   WEBHOOK_SECRET="YOUR_WEBHOOK_SECRET"
   PRIVATE_KEY_PATH="YOUR_PRIVATE_KEY_PATH"{% ifversion ghes or ghae %}
   ENTERPRISE_HOSTNAME="YOUR_HOSTNAME"{% endif %}
   ```

1. {% data reusables.apps.navigate-to-app-settings-page %}
1. On your app's settings page, next to "App ID", find the app ID for your app.
1. In your `.env` file, replace `YOUR_APP_ID` with the app ID of your app.
1. On your app's settings page, under "Private keys", click **Generate a private key**. You will see a private key in PEM format downloaded to your computer. For more information, see "[AUTOTITLE](/apps/creating-github-apps/authenticating-with-a-github-app/managing-private-keys-for-github-apps)."
1. If you are using a codespace, move the downloaded PEM file into your codespace so that your codespace can access the file.
1. In your `.env` file, replace `YOUR_PRIVATE_KEY_PATH` with the full path to your private key, including the `.pem` extension.
1. In your `.env` file, replace `YOUR_WEBHOOK_SECRET` with the webhook secret for your app. If you have forgotten your webhook secret, under "Webhook secret (optional)", click **Change secret**. Enter a new secret, then click **Save changes**.

### Add code to respond to webhook events

At the top level of the directory where your clone is stored, create a JavaScript file to hold the code for your app. This tutorial will name the file `app.js`.

Add the following code to `app.js`. The code includes annotations that explain each part.

```javascript copy annotate
// These are the dependencies for this file.
//
// You installed the `dotenv` and `octokit` modules earlier. The `@octokit/webhooks` is a dependency of the `octokit` module, so you don't need to install it separately. The `fs` and `http` dependencies are built-in Node.js modules.
import dotenv from "dotenv";
import {App{% ifversion ghes or ghae %}, Octokit{% endif %}} from "octokit";
import {createNodeMiddleware} from "@octokit/webhooks";
import fs from "fs";
import http from "http";

// This reads your `.env` file and adds the variables from that file to the `process.env` object in Node.js.
dotenv.config();

// This assigns the values of your environment variables to local variables.
const appId = process.env.APP_ID;
const webhookSecret = process.env.WEBHOOK_SECRET;
const privateKeyPath = process.env.PRIVATE_KEY_PATH;{% ifversion ghes or ghae %}
const enterpriseHostname = process.env.ENTERPRISE_HOSTNAME;{% endif %}

// This reads the contents of your private key file.
const privateKey = fs.readFileSync(privateKeyPath, "utf8");

// This creates a new instance of the Octokit App class.
const app = new App({
  appId: appId,
  privateKey: privateKey,
  webhooks: {
    secret: webhookSecret
  },{% ifversion ghes or ghae %}
  Octokit: Octokit.defaults({
    baseUrl: `https://${enterpriseHostname}/api/v3`,
  }),{% endif %}
});

// This defines the message that your app will post to pull requests.
const messageForNewPRs = "Thanks for opening a new PR! Please follow our contributing guidelines to make your PR easier to review.";

// This adds an event handler that your code will call later. When this event handler is called, it will log the event to the console. Then, it will use {% data variables.product.company_short %}'s REST API to add a comment to the pull request that triggered the event.
async function handlePullRequestOpened({octokit, payload}) {
  console.log(`Received a pull request event for #${payload.pull_request.number}`);

  try {
    await octokit.request("POST /repos/{owner}/{repo}/issues/{issue_number}/comments", {
      owner: payload.repository.owner.login,
      repo: payload.repository.name,
      issue_number: payload.pull_request.number,
      body: messageForNewPRs,{% ifversion api-date-versioning %}
      headers: {
        "x-github-api-version": "{{ allVersions[currentVersion].latestApiVersion }}",
      },{% endif %}
    });
  } catch (error) {
    if (error.response) {
      console.error(`Error! Status: ${error.response.status}. Message: ${error.response.data.message}`)
    }
    console.error(error)
  }
};

// This sets up a webhook event listener. When your app receives a webhook event from {% data variables.product.company_short %} with a `X-GitHub-Event` header value of `pull_request` and an `action` payload value of `opened`, it calls the `handlePullRequestOpened` event handler that is defined above.
app.webhooks.on("pull_request.opened", handlePullRequestOpened);

// This logs any errors that occur.
app.webhooks.onError((error) => {
  if (error.name === "AggregateError") {
    console.error(`Error processing request: ${error.event}`);
  } else {
    console.error(error);
  }
});

// This determines where your server will listen.
//
// For local development, your server will listen to port 3000 on `localhost`. When you deploy your app, you will change these values. For more information, see "[Deploy your app](#deploy-your-app)."
const port = 3000;
const host = 'localhost';
const path = "/api/webhook";
const localWebhookUrl = `http://${host}:${port}${path}`;

// This sets up a middleware function to handle incoming webhook events.
//
// Octokit's `createNodeMiddleware` function takes care of generating this middleware function for you. The resulting middleware function will:
//
//    - Check the signature of the incoming webhook event to make sure that it matches your webhook secret. This verifies that the incoming webhook event is a valid {% data variables.product.company_short %} event.
//    - Parse the webhook event payload and identify the type of event.
//    - Trigger the corresponding webhook event handler.
const middleware = createNodeMiddleware(app.webhooks, {path});

// This creates a Node.js server that listens for incoming HTTP requests (including webhook payloads from {% data variables.product.company_short %}) on the specified port. When the server receives a request, it executes the `middleware` function that you defined earlier. Once the server is running, it logs messages to the console to indicate that it is listening.
http.createServer(middleware).listen(port, () => {
  console.log(`Server is listening for events at: ${localWebhookUrl}`);
  console.log('Press Ctrl + C to quit.')
});
```

### Add a script to run the code for your app

1. To the `scripts` object in your `package.json` file, add a script called `server` that runs `node app.js`. For example:

   ```json copy
   "scripts": {
     "server": "node app.js"
   }
   ```

   If you called the file that holds your app's code something other than `app.js`, replace `app.js` with the relative path to the file that holds your app's code.

1. In your `package.json` file, add a top level key `type` with the value `module`. For example:

   ```jsonc
      {
       // rest of the JSON object,
       "version": "1.0.0",
       "description": "",
       "type": "module",
       // rest of the JSON object,
     }
   ```

Your `package.json` file should look something like this. The `name` value and the version numbers under `dependencies` and `devDependencies` may differ for you.

```json
  {
  "name": "github-app-webhook-tutorial",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "server": "node app.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "dotenv": "^16.0.3",
    "octokit": "^2.0.14"
  },
  "devDependencies": {
    "smee-client": "^1.2.3"
  }
}
```

## Testing

Follow these steps to test the app that you created above.

### Install your app

In order for your app to leave a comment on pull requests in a repository, it must be installed on the account that owns the repository and granted access to that repository. Since your app is private, it can only be installed on the account that owns the app.

1. In the account that owns the app you created, create a new repository to install the app on. For more information, see "[AUTOTITLE](/repositories/creating-and-managing-repositories/creating-a-new-repository)."
1. {% data reusables.apps.navigate-to-app-settings-page %}
1. Click **Public page**.
1. Click **Install**.
1. Select **Only select repositories**.
1. Select the **Select repositories** dropdown menu and click the repository that you chose at the start of this section.
1. Click **Install**.

### Start your server

For testing, you will use your computer or codespace as a server. Your app will only respond to webhooks when your server is running.

1. In a terminal, navigate to the directory where your app's code is stored.
1. To receive forwarded webhooks from Smee.io, run `npx smee -u WEBHOOK_PROXY_URL -t http://localhost:3000/api/webhook`. Replace `WEBHOOK_PROXY_URL` with your webhook proxy URL from earlier. If you forgot your URL, you can find it in the "webhook URL" field on your app's settings page.

   You should see output that looks like this, where `WEBHOOK_PROXY_URL` is your webhook proxy URL:

   ```shell
   Forwarding WEBHOOK_PROXY_URL to http://localhost:3000/api/webhook
   Connected WEBHOOK_PROXY_URL
   ```

1. In a second terminal window, navigate to the directory where your app's code is stored.
1. Run `npm run server`. Your terminal should say, `Server is listening for events at: http://localhost:3000/api/webhook`.

### Test your app

Now that your server is running and receiving forwarded webhooks events, test your app by opening a pull request on the repository that you selected when you installed your app.

1. Open a pull request on the repository that you selected when you installed your app. For more information, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)."

   Make sure to use the repository that you selected when you installed your app, not the repository where your app's code is stored. For more information, see "[Install your app](#install-your-app)."

1. Navigate to your webhook proxy URL on smee.io. You should see a `pull_request` event. This indicates that {% data variables.product.company_short %} successfully sent a pull request event when you created a pull request.
1. In the terminal where you ran `npm run server`, you should see something like "Received a pull request event for #1" where the integer after the `#` is the number of the pull request that you opened.
1. In the timeline of your pull request, you should see a comment from your app.
1. In both terminal windows, enter <kbd>Ctrl</kbd>+<kbd>C</kbd> to stop your server and stop listening for forwarded webhooks.

## Next steps

Now that you have an app that responds to webhook events, you might want to expand your app's code, deploy your app, and make your app public.

### Modify the app code

This tutorial demonstrated how to post a comment on a pull request in when a pull request was opened. You can update the code to respond to different types of webhook events or to do something different in response to the webhook event.

Remember to update your app's permissions if your app needs additional permissions for the API requests that you want to make or the webhook events you want to receive. For more information, see "[AUTOTITLE](/apps/creating-github-apps/creating-github-apps/setting-permissions-for-github-apps)."

This tutorial stored all of the code into a single file, but you may want to move functions and components into separate files.

### Deploy your app

This tutorial demonstrated how to develop your app locally. When you are ready to deploy your app, you need to make changes to serve your app and keep your app's credential secure. The steps you take depend on the server that you use, but the following sections offer general guidance.

#### Host your app on a server

This tutorial used your computer or codespace as a server. Once the app is ready for production use, you should deploy your app to a dedicated server. For example, you can use [Azure App Service](https://azure.microsoft.com/products/app-service/).

#### Update the webhook URL

Once you have a server that is set up to receive webhook traffic from {% data variables.product.company_short %}, update the webhook URL in your app settings. You should not use Smee.io to forward your webhooks in production.

#### Update the `port` and `host` constants

When you deploy your app, you will want to change the host and port where your server is listening.

For example, you can set a `PORT` environment variable on your server to indicate the port where your server should listen. You can set a `NODE_ENV` environment variable on your server to `production`. Then, you can update the place where your code defines the `port` and `host` constants so that your server listens to all available network interfaces (`0.0.0.0`) instead of the local network interface (`localhost`) on your deployment port:

```javascript copy
const port = process.env.PORT || 3000;
const host = process.env.NODE_ENV === 'production' ? '0.0.0.0' : 'localhost';
```

#### Secure your app's credentials

You should never publicize your app's private key or webhook secret. This tutorial stored your app's credentials in a gitignored `.env` file. When you deploy your app, you should choose a secure way to store the credentials and update your code to get the value accordingly. For example, you can store the credentials with a secret management service like [Azure Key Vault](https://azure.microsoft.com/en-us/products/key-vault). When your app runs, it can retrieve the credentials and store them in environment variables on the server where your app is deployed.

For more information, see "[AUTOTITLE](/apps/creating-github-apps/setting-up-a-github-app/best-practices-for-creating-a-github-app)."

### Share your app

If you want to share your app with other users and organizations, make your app public. For more information, see "[AUTOTITLE](/apps/creating-github-apps/creating-github-apps/making-a-github-app-public-or-private)."

### Follow best practices

You should aim to follow best practices with your {% data variables.product.prodname_github_app %}. For more information, see "[AUTOTITLE](/apps/creating-github-apps/setting-up-a-github-app/best-practices-for-creating-a-github-app)."
