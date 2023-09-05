---
title: Using GitHub Codespaces in your JetBrains IDE
shortTitle: JetBrains IDEs
intro: You can use the JetBrains Gateway to connect to your codespace and work in your favorite JetBrains IDE.
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Developer
---

{% data reusables.codespaces.codespaces-jetbrains-beta-note %}

## About {% data variables.product.prodname_codespaces %} in JetBrains IDEs

If you use a JetBrains IDE to work on your code, you can take advantage of working in a codespace. You do this by using the JetBrains Gateway application.

After installing the JetBrains Gateway, you can set JetBrains as your default editor and then whenever you open a codespace from {% data variables.product.prodname_dotcom_the_website %} the JetBrains Gateway will launch to allow you to choose your JetBrains IDE and connect to the codespace.

{% note %}

**Note**: Only existing codespaces are available in the JetBrains Gateway. You can create codespaces in {% data variables.product.prodname_dotcom_the_website %}, or by using {% data variables.product.prodname_cli %}. For more information, see "[AUTOTITLE](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository)."

{% endnote %}

### The JetBrains remote development connection process

The basic process behind using a codespace in your JetBrains IDE is as follows.

- In the JetBrains Gateway application you select one of your active or stopped codespaces.
- You then choose which JetBrains IDE you want to use.
- The selected JetBrains IDE is then downloaded to the remote virtual machine that hosts your codespace and source code.
- The JetBrains thin client application is then downloaded to your local machine and started.
- The client application connects to the full backend IDE.
- You can work on your code in the client application in just the same way you would in a local environment.

## Prerequisites

To work in a codespace in a JetBrains IDE you need:

- A valid JetBrains license
- The JetBrains Gateway application
- {% data variables.product.prodname_cli %} version 2.18.0 or later
- An existing codespace that's running an SSH server

### JetBrains license

You must have a JetBrains license that supports the IDE you choose in the JetBrains Gateway.

### JetBrains Gateway

You can install and update the JetBrains Gateway from the JetBrains Toolbox application.

1. Download and install the [JetBrains Toolbox](https://www.jetbrains.com/toolbox-app).
1. Open the JetBrains Toolbox.
1. Find **Gateway** in the list of available tools and click **Install**.

   ![Screenshot of the JetBrains Toolbox with "Gateway" at the bottom of the list of applications. Each application has an "Install" button next to it.](/assets/images/help/codespaces/jetbrains-toolbox.png)

### {% data variables.product.prodname_cli %}

The {% data variables.product.prodname_github_codespaces %} plugin for the JetBrains Gateway requires that you have installed and configured {% data variables.product.prodname_cli %} version 2.18.0 or later before opening a codespace from the JetBrains Gateway.

Use this command to check your version of {% data variables.product.prodname_cli %}:

```shell copy
gh --version
```

For more information, see "[AUTOTITLE](/github-cli/github-cli/about-github-cli)."

### Codespace running an SSH server

You must have an existing codespace to connect to. {% data reusables.codespaces.ways-to-create-a-codespace %} For more information, see "[AUTOTITLE](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository)."

{% data reusables.codespaces.ssh-server-installed %}

For more information about the `devcontainer.json` file and the default container image, see "[AUTOTITLE](/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers)."

{% note %}

**Note**: For help with connecting to your codespace over SSH, see "[AUTOTITLE](/codespaces/troubleshooting/troubleshooting-github-codespaces-clients?tool=jetbrains#ssh-connection-issues)."

{% endnote %}

## Setting up the JetBrains Gateway

The first time you use JetBrains Gateway for {% data variables.product.prodname_github_codespaces %}, you must install the {% data variables.product.prodname_codespaces %} plugin. You must also allow the JetBrains Gateway to access {% data variables.product.prodname_dotcom_the_website %} using your {% data variables.product.prodname_dotcom %} account.

1. Open the JetBrains Gateway application.
1. Under **Install More Providers** click the **Install** link for {% data variables.product.prodname_github_codespaces %}.

   ![Screenshot of the "Welcome to JetBrains Gateway" page, with  "{% data variables.product.prodname_github_codespaces %}" listed under "Install More Providers."](/assets/images/help/codespaces/jetbrains-gateway-initial-view.png)

1. Click **Connect to Codespace**.

   ![Screenshot of the Gateway with the "Connect to {% data variables.product.prodname_codespaces %}" button.](/assets/images/help/codespaces/jetbrains-gateway-connect.png)

1. In the "Welcome to JetBrains Gateway" dialog, click **Sign In with {% data variables.product.prodname_dotcom %}**.
1. Click the icon beside the one-time code to copy it.

   ![Screenshot of a one-time login code. The copy icon beside the code is highlighted with a dark orange outline.](/assets/images/help/codespaces/jetbrains-gateway-login-code.png)

1. Click the login link, below the login code.
1. If you are not currently signed in to {% data variables.product.prodname_dotcom %}, the sign-in page is displayed.
   - Enter your details and click **Sign in**.
   - Verify your authentication, for example by entering a two-factor authentication code.
1. On the "Device activation" page, paste the copied code and click **Continue**.
1. If you belong to organizations, the "Single sign-on to your organizations" page is displayed. Click **Authorize** beside the organizations you want to authorize the JetBrains Gateway to access, then click **Continue**.
1. On the "Authorize {% data variables.product.prodname_github_codespaces %} for JetBrains" page, click **Authorize {% data variables.product.prodname_dotcom %}**.
1. Return to the JetBrains Gateway application and open a codespace from the list of your currently active or stopped codespaces, see step 3 of the following procedure.

## Opening a codespace in your JetBrains IDE

{% data reusables.codespaces.opening-codespace-in-jetbrains %}

   The first time you connect to a codespace, the backend IDE will be downloaded to the remote machine. This may take a few minutes. The next time you connect to the same codespace this step won't be necessary, making the connection process quicker.

   The backend IDE is then started. Again, this step will not be required in future if you are reconnecting to a backend IDE that you have left running.

   The client application is then launched.

## Further reading

- "[AUTOTITLE](/codespaces/developing-in-codespaces/developing-in-a-codespace)"
- "[AUTOTITLE](/codespaces/codespaces-reference/using-the-github-codespaces-plugin-for-jetbrains)"
- "[AUTOTITLE](/codespaces/troubleshooting/troubleshooting-github-codespaces-clients?tool=jetbrains)"
