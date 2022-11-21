---
title: 'Quickstart for {% data variables.product.prodname_github_codespaces %}'
shortTitle: 'Quickstart for {% data variables.product.prodname_codespaces %}'
intro: 'Try out {% data variables.product.prodname_github_codespaces %} in 5 minutes.'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghec: '*'
type: quick_start
topics:
  - Codespaces
redirect_from:
  - /codespaces/codespaces-quickstart
---

## Introduction

In this guide, you'll create a codespace from a template repository and explore some of the essential features available to you within the codespace. You'll work in the browser version of {% data variables.product.prodname_vscode %}, which is initially the default editor for {% data variables.product.prodname_github_codespaces %}. After trying out this quickstart you can use {% data variables.product.prodname_codespaces %} in other editors, and you can change the default editor. Links are provided at the end of this guide.

From this quickstart, you'll learn how to create a codespace, connect to a forwarded port to view your running application, publish your codespace to a new repository, and personalize your setup with extensions.

For more information on exactly how {% data variables.product.prodname_github_codespaces %} works, see the companion guide "[Deep dive into {% data variables.product.prodname_github_codespaces %}](/codespaces/getting-started/deep-dive)."

## Creating your codespace

1. Navigate to the [github/haikus-for-codespaces](https://github.com/github/haikus-for-codespaces) template repository.
{% data reusables.codespaces.open-template-in-codespace-step %}

## Running the application

Once your codespace is created, the template repository will be automatically cloned into it. Now you can run the application and launch it in a browser.

1. When the terminal becomes available, enter the command `npm run dev`. This example uses a Node.js project, and this command runs the script labeled "dev" in the `package.json` file, which starts up the web application defined in the sample repository.
   
   ![npm run dev in terminal](/assets/images/help/codespaces/codespaces-npm-run-dev.png)

   If you're following along with a different application type, enter the corresponding start command for that project.

2. When your application starts, the codespace recognizes the port the application is running on and displays a prompt to let you know it has been forwarded. 

   ![Port forwarding "toast" notification](/assets/images/help/codespaces/quickstart-port-toast.png)

3. Click **Open in Browser** to view your running application in a new tab.

## Edit the application and view changes

1. Switch back to your codespace and open the `haikus.json` file by clicking it in the Explorer.

2. Edit the `text` field of the first haiku to personalize the application with your own haiku.

3. Go back to the running application tab in your browser and refresh to see your changes.
   
   {% octicon "light-bulb" aria-label="The lightbulb icon" %} If you've closed the tab, open the Ports panel and click the **Open in browser** icon for the running port.

   ![Port Forwarding Panel](/assets/images/help/codespaces/quickstart-forward-port.png)

## Committing and pushing your changes

Now that you've made a few changes, you can use the integrated terminal or the source view to publish your work to a new repository.

{% data reusables.codespaces.source-control-display-dark %}
1. To stage your changes, click  **+** next to the `haikus.json` file, or next to **Changes** if you've changed multiple files and you want to stage them all.

   ![Source control side bar with staging button highlighted](/assets/images/help/codespaces/codespaces-commit-stage.png)

2. To commit your staged changes, type a commit message describing the change you've made, then click **Commit**.

   ![Source control side bar with a commit message](/assets/images/help/codespaces/vscode-commit-button.png)

3. Click **Publish Branch**.
   
   ![Screenshot of the "Publish branch" button in VS Code](/assets/images/help/codespaces/vscode-publish-branch-button.png)

4. In the "Repository Name" dropdown, type a name for your new repository, then select **Publish to {% data variables.product.company_short %} private repository** or **Publish to {% data variables.product.company_short %} public repository**.
   
   ![Screenshot of the "Repository Name" dropdown in VS Code](/assets/images/help/codespaces/choose-new-repository.png)

   The owner of the new repository will be the {% data variables.product.prodname_dotcom %} account with which you created the codespace.
5. In the pop-up that appears in the lower right corner of the editor, click **Open on {% data variables.product.company_short %}** to view the new repository on {% data variables.product.prodname_dotcom_the_website %}. In the new repository, view the `haikus.json` file and check that the change you made in your codespace has been successfully pushed to the repository.
   
   ![Screenshot of the "Open in GitHub" pop-up in VS Code](/assets/images/help/codespaces/open-on-github.png)

## Personalizing with an extension

When you connect to a codespace using the browser, or the {% data variables.product.prodname_vscode %} desktop application, you can access the Visual Studio Code Marketplace directly from the editor. For this example, you'll install a {% data variables.product.prodname_vscode_shortname %} extension that alters the theme, but you can install any extension that's useful for your workflow.

1. In the left sidebar, click the Extensions icon.
1. In the search bar, type `fairyfloss` and click **Install**.

   ![Add an extension](/assets/images/help/codespaces/add-extension.png)

1. Select the `fairyfloss` theme by selecting it from the list.

   ![Select the fairyfloss theme](/assets/images/help/codespaces/fairyfloss.png)

If you are using a codespace in the browser, or in the {% data variables.product.prodname_vscode %} desktop application, and you have [Settings Sync](https://code.visualstudio.com/docs/editor/settings-sync) turned on, any changes you make to your editor setup in the current codespace, such as changing your theme or keyboard bindings, are automatically synced to any instances of {% data variables.product.prodname_vscode %} that are signed into your {% data variables.product.prodname_dotcom %} account and to any other codespaces you create.

## Next steps

You've successfully created, personalized, and run your first application within a codespace but there's so much more to explore! Here are some helpful resources for taking your next steps with {% data variables.product.prodname_github_codespaces %}.

* "[Deep dive](/codespaces/getting-started/deep-dive)": This quickstart presented some of the features of {% data variables.product.prodname_github_codespaces %}. The deep dive looks at these areas from a technical standpoint.
* "[Add a dev container configuration to your repository](/codespaces/setting-up-your-project-for-codespaces/setting-up-your-project-for-codespaces)": These guides provide information on setting up your repository to use {% data variables.product.prodname_github_codespaces %} with specific languages.
* "[Introduction to dev containers](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)": This guide provides details on creating a custom configuration for {% data variables.product.prodname_codespaces %} for your project.

## Further reading

* "[Enabling {% data variables.product.prodname_github_codespaces %} for your organization](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization)"
* "[Using {% data variables.product.prodname_github_codespaces %} in {% data variables.product.prodname_vscode %}](/codespaces/developing-in-codespaces/using-github-codespaces-in-visual-studio-code)"
* "[Using {% data variables.product.prodname_github_codespaces %} in your JetBrains IDE](/codespaces/developing-in-codespaces/using-github-codespaces-in-your-jetbrains-ide)"
* "[Using {% data variables.product.prodname_github_codespaces %} with {% data variables.product.prodname_cli %}](/codespaces/developing-in-codespaces/using-github-codespaces-with-github-cli)"
* "[Setting your default editor for {% data variables.product.prodname_github_codespaces %}](/codespaces/customizing-your-codespace/setting-your-default-editor-for-github-codespaces)."
* "[Managing the cost of {% data variables.product.prodname_github_codespaces %} in your organization](/codespaces/managing-codespaces-for-your-organization/managing-the-cost-of-github-codespaces-in-your-organization)"
