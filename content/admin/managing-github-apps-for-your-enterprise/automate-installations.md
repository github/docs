---
title: Automating app installations in your enterprise's organizations
intro: Automate a process consistently across organizations by creating a {% data variables.product.prodname_github_app %} in your enterprise and installing it programmatically.
versions:
  feature: enterprise-installed-apps
contentType: tutorials
shortTitle: Automate installations
---

## Introduction

To automate a process securely, you can create a {% data variables.product.prodname_github_app %} owned by an enterprise account, then install the app in the enterprise or organization where the automation will take place.

{% data variables.product.prodname_github_apps %} provide tokens that you can use to authenticate API calls to {% data variables.product.github %} in scripts and workflows. These tokens are suitable for enterprises with specific security and auditing requirements, because they are:

* Temporary
* Scoped to specific accounts and permissions
* Associated with the app's identity rather than a user account

A common need for large enterprises is to keep an automation consistent and up-to-date across many organizations. You can accomplish this by installing an app programmatically. For example, if you need to configure all organizations with certain policies and settings, you could install a {% data variables.product.prodname_github_app %} for this task in every organization.

This guide will demonstrate the steps required to programmatically install an enterprise-owned {% data variables.product.prodname_github_app %} in an organization. Once the app is installed, you'll use it to create a new repository.

## Overview of the process

In this guide, you'll use the {% data variables.product.prodname_cli %} to make the API calls required to request access tokens and install an app in an organization. In reality, this process would be part of a custom script tailored to your company's needs.

You will:

1. Create two apps owned by your enterprise account.
   * One will have permission to install apps in organizations.
   * The other will have permission to automate a process in an organization (in this case, creating a repository).
1. Authenticate the first app to obtain an **enterprise-scoped** access token.
1. Use the enterprise-scoped token to call an API that installs the automation app in an organization.
1. Authenticate the organization-installed app to obtain an **organization-scoped** access token.
1. Use the organization-scoped token to call an API that creates a repository in the organization.

At each stage, you will use a token that only has permission to perform specific actions in a specific account. From a security and auditing perspective, this approach is superior to relying on a single token with permission to perform actions across your enterprise and organizations.

## Prerequisites

To follow this guide on your own device, you must:

* Be an enterprise owner.
* Be an owner of an enterprise-owned organization where you will perform the automation.
* Have the {% data variables.product.prodname_cli %} installed for making API calls. See [Installation](https://github.com/cli/cli?tab=readme-ov-file#installation) in the {% data variables.product.prodname_cli %} repository.
* Have `openssl` installed in order to generate a JSON web token (JWT). Many devices have OpenSSL installed by default. You can check by running `openssl -v`, which returns a version number if installed.
* Use a Unix shell such as Bash, ZSH, or Git Bash.

## 1. Prepare to generate a JWT

To request an access token from an app, you need a JSON web token (JWT) generated from the app's client ID and private key. Many programming languages have built-in methods for generating a JWT. In this tutorial, you will use a Bash script to generate a JWT from the command line using `openssl`.

1. Copy the contents of the Bash script for generating a JWT from [AUTOTITLE](/apps/creating-github-apps/authenticating-with-a-github-app/generating-a-json-web-token-jwt-for-a-github-app#example-using-bash-to-generate-a-jwt).
1. Save the contents in a new file in your home directory, called `gen-jwt.sh`.
1. Make the script executable.

   ```shell copy
   chmod +x ~/gen-jwt.sh
   ```

## 2. Create two enterprise apps

{% data variables.product.prodname_github_apps %} can only generate tokens with the fine-grained permissions and account scopes you allow. In this step, you will create two enterprise-owned apps: one with **enterprise-level** permission to install apps, and another with **organization-level** permission to create a repository.

### a. Create the installer app

The "installer app" will be installed on the enterprise account, and will have permission to install the other app in an organization.

1. Create a new app under your enterprise account.

   1. Go to your enterprise account settings.
   1. In the left sidebar, click **{% data variables.product.prodname_github_apps %}**.
   1. Click **New {% data variables.product.prodname_github_app %}**.

1. You can leave most of the values as defaults, except:

   * Call the app `YOUR-HANDLE-installer-app`, replacing `YOUR-HANDLE` with your {% data variables.product.github %} username.
   * Set the "Homepage URL" to `https://github.com`.
   * Deselect **Expire user authorization tokens** and, under "Webhook", deselect **Active**.
   * Under "Enterprise permissions", give the app read and write permissions for **Enterprise organization installations**.

1. After creating the app, copy the **Client ID** and save it as a variable called `INSTALLER_APP_CLIENT_ID`. For example, on the command line:

   ``` shell copy
   export INSTALLER_APP_CLIENT_ID='abcde12345'
   ```

1. On the app page, scroll down and click **Generate a private key**. The private key file will be downloaded.
1. Make a note of the file path, which will look something like `~/YOUR-HANDLE-installer-app.DOWNLOAD-DATE.private-key.pem`.
1. In the left sidebar of the app page, click **Install app**, then install the new app on the enterprise account. Installing an app gives the app permission to perform actions in the account.
1. Look at the URL in your browser to find the app's installation ID. This is a string of numbers at the end of the `/enterprises/ENTERPRISE/settings/installations/ID` URL. Save this as the `INSTALLER_APP_INSTALL_ID` variable.

   ``` shell copy
   export INSTALLER_APP_INSTALL_ID='12345678'
   ```

1. Save the name of the enterprise where the app is installed as a variable.

   ``` shell copy
   export ENTERPRISE='octo-enterprise'
   ```

### b. Create the automation app

The "automation app" will be installed in an organization, and will have permission to create repositories in that organization. In reality, you would give this app whatever permissions are required to automate a process in your organizations.

1. Create a new app under your enterprise account.
   * Call the app `YOUR-HANDLE-automation-app`, replacing `YOUR-HANDLE` with your {% data variables.product.github %} username.
   * Set the "Homepage URL" to `https://github.com`.
   * Deselect **Expire user authorization tokens** and, under "Webhook", deselect **Active**.
   * Under "Repository permissions", give the app read and write permissions for **Administration**.
1. After creating the app, copy the **Client ID** and save it as the `AUTOMATION_APP_CLIENT_ID` variable.

   ``` shell copy
   export AUTOMATION_APP_CLIENT_ID='abcde12345'
   ```

1. Scroll down and click **Generate a private key**. The private key file will be downloaded.
1. Make a note of the file path, which will look something like `~/YOUR-HANDLE-automation-app.DOWNLOAD-DATE.private-key.pem`.
1. Save the name of the organization where the app will be installed as a variable.

   ``` shell copy
   export ORG='octo-org'
   ```

## 3. Authenticate the installer app

Authenticating an app allows you to obtain a token with the scope and permissions you defined when you registered the app. In this case, you will obtain a token for the installer app, which will give you permission to install the automation app in an organization.

1. Generate a JWT using the Bash script you saved. For example:

   ``` shell copy
   ~/gen-jwt.sh $INSTALLER_APP_CLIENT_ID ~/YOUR-HANDLE-installer-app.DOWNLOAD-DATE.private-key.pem
   ```

1. Copy the JWT (the long string after `JWT= `) and save it as a variable.

   ``` shell copy
   export INSTALL_JWT='abcde12345'
   ```

1. Use the JWT to authenticate a request for an installation access token. This step uses the [Create an installation access token for an app](/rest/apps/apps#create-an-installation-access-token-for-an-app) API endpoint and requires the app's installation ID.

   ```shell copy
   gh api --method POST "/app/installations/$INSTALLER_APP_INSTALL_ID/access_tokens" --header "Authorization: Bearer $INSTALL_JWT"
   ```

1. You should see a JSON object containing a `token` property. Copy the access token (the value of the `token` property, without quotes) and save it as the `INSTALLER_APP_INSTALL_TOKEN` variable.

   ``` shell copy
   export INSTALLER_APP_INSTALL_TOKEN='abcde12345'
   ```

## 4. Install the automation app

The installation access token you just received gives you permission to call the API for installing apps in an organization. Here, we will use the token to install the automation app (the second app you created) in a specific organization. In reality, you could call this API multiple times to install an app in multiple organizations.

1. Run the following command. We're using the [Install a GitHub App on an enterprise-owned organization](/rest/enterprise-admin/organization-installations#install-a-github-app-on-an-enterprise-owned-organization) API endpoint, authenticating with the installation token you just requested, and passing the client ID of the automation app that we want to install.

   ```shell copy
   gh api --method POST \
     "/enterprises/$ENTERPRISE/apps/organizations/$ORG/installations" \
     --header "Authorization: Bearer $INSTALLER_APP_INSTALL_TOKEN" \
     --header "Accept: application/vnd.github+json" \
     --header "X-GitHub-Api-Version: 2022-11-28" \
     --field "client_id=$AUTOMATION_APP_CLIENT_ID" \
     --field "repository_selection=all"
    ```

1. If successful, you should see a large number of properties returned, starting with the app's installation ID.

   To check the app was successfully installed, go to `https://github.com/organizations/ORG/settings/installations`, replacing ORG with the organization name. You should see the newly installed app on the page.

1. Find the installation ID of the new installation, and save it as `AUTOMATION_APP_INSTALL_ID`. To find the ID, you can either copy the first ID property returned by the API, or click **Configure** next to the app installation in the UI and copy the ID from the URL.

   ``` shell copy
   export AUTOMATION_APP_INSTALL_ID='12345678'
   ```

## 5. Authenticate the automation app

Just as you authenticated the installer app to obtain an enterprise-scoped token, you now need to perform the same process for the automation app. This will give you an organization-scoped token with permission to create repositories.

1. Generate a JWT with the automation app's client ID and private key. For example:

   ``` shell copy
   ~/gen-jwt.sh $AUTOMATION_APP_CLIENT_ID ~/octocat-automation-app.2025-10-08.private-key.pem
   ```

1. Copy the JWT (the long string after `JWT= `) and save it as a variable.

   ``` shell copy
   export AUTO_JWT='abcde12345'
   ```

1. Use the JWT to authenticate a request for an installation access token, this time passing the installation ID and JWT for the newly installed automation app.

   ```shell copy
   gh api --method POST "/app/installations/$AUTOMATION_APP_INSTALL_ID/access_tokens" --header "Authorization: Bearer $AUTO_JWT"
   ```

1. Copy the new installation access token and save it as the `AUTOMATION_APP_INSTALL_TOKEN` variable.

   ``` shell copy
   export AUTOMATION_APP_INSTALL_TOKEN='abcde12345'
   ```

## 6. Automate a process

The installation token you just received gives you permission to create a repository in the organization where the app is installed.

1. Run the following command. Notice we're authenticating with the installation token we just obtained.

   ```shell copy
   gh api --method POST \
     "/orgs/$ORG/repos" \
     --header "Authorization: Bearer $AUTOMATION_APP_INSTALL_TOKEN" \
     --header "Accept: application/vnd.github+json" \
     --header "X-GitHub-Api-Version: 2022-11-28" \
     --field "name=automatic-repo" \
     --field "description=Repository created automatically using GitHub App automation" \
     --field "private=false" \
     --field "auto_init=true"
    ```

1. To check the repository was created successfully, go to `https://github.com/orgs/ORG/repositories`, replacing ORG with the name of your organization.

{% note %}

Was the repository created successfully?

<a href="https://docs.github.io/success-test/yes.html" target="_blank" class="btn btn-outline mt-3 mr-3 no-underline"><span>Yes</span></a>  <a href="https://docs.github.io/success-test/no.html" target="_blank" class="btn btn-outline mt-3 mr-3 no-underline"><span>No</span></a>

{% endnote %}

## 7. Uninstall the apps

For security, uninstall the apps from the enterprise and organization. This will revoke all tokens associated with the apps. For instructions, see [AUTOTITLE](/apps/using-github-apps/reviewing-and-modifying-installed-github-apps).

## Next steps

You have seen how to install an app programmatically in organizations and run an automation. Now, you should be ready to automate a real process across multiple organizations. For more information about what apps can do, see [AUTOTITLE](/apps/creating-github-apps/about-creating-github-apps/about-creating-github-apps).

>[!TIP] In the real world, you would likely perform the installation as a one-time process. The organization-level automation would be defined in a separate script, triggered by webhooks or cron jobs. However, security-conscious enterprises may prefer to install and uninstall an app every time the automation runs, in order to limit impact if the app's private key is exposed.
