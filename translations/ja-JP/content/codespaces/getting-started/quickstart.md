---
title: 'Quickstart for {% data variables.product.prodname_github_codespaces %}'
shortTitle: 'Quickstart for {% data variables.product.prodname_codespaces %}'
intro: 'Try out {% data variables.product.prodname_github_codespaces %} in 5 minutes.'
allowTitleToDifferFromFilename: true
product: '{% data reusables.gated-features.codespaces %}'
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

In this guide, you'll create a codespace from a template repository and explore some of the essential features available to you within the codespace.

From this quickstart, you'll learn how to create a codespace, connect to a forwarded port to view your running application, use version control in a codespace, and personalize your setup with extensions.

For more information on exactly how {% data variables.product.prodname_github_codespaces %} works, see the companion guide "[Deep dive into {% data variables.product.prodname_github_codespaces %}](/codespaces/getting-started/deep-dive)."

## Creating your codespace

1. Navigate to the [template repository](https://github.com/github/haikus-for-codespaces) and select **Use this template**. 
{% data reusables.codespaces.open-codespace-from-template-repo %}

## Running the application

Once your codespace is created, your repository will be automatically cloned into it. Now you can run the application and launch it in a browser.

1. When the terminal becomes available, enter the command `npm run dev`. This example uses a Node.js project, and this command runs the script labeled "dev" in the _package.json_ file, which starts up the web application defined in the sample repository.
   
   ![npm run dev in terminal](/assets/images/help/codespaces/codespaces-npm-run-dev.png)

   If you're following along with a different application type, enter the corresponding start command for that project.

1. When your application starts, the codespace recognizes the port the application is running on and displays a prompt to let you know it has been forwarded. 

  ![Port forwarding toast](/assets/images/help/codespaces/quickstart-port-toast.png)

1. Click **Open in Browser** to view your running application in a new tab.

## Edit the application and view changes

1. Switch back to your codespace and open the _haikus.json_ file by double-clicking it in the Explorer.

1. Edit the `text` field of the first haiku to personalize the application with your own haiku.

1. Go back to the running application tab in your browser and refresh to see your changes.
   
  {% octicon "light-bulb" aria-label="The lightbulb icon" %}  If you've closed the tab, open the Ports panel and click the **Open in browser** icon for the running port.

  ![Port Forwarding Panel](/assets/images/help/codespaces/quickstart-forward-port.png)

## Committing and pushing your changes

Now that you've made a few changes, you can use the integrated terminal or the source view to commit and push the changes back to the remote.

{% data reusables.codespaces.source-control-display-dark %}
1. To stage your changes, click  **+** next to the file you've changed, or next to **Changes** if you've changed multiple files and you want to stage them all.

   ![Source control side bar with staging button highlighted](/assets/images/help/codespaces/codespaces-commit-stage.png)

1. Type a commit message describing the change you've made.

   ![Source control side bar with a commit message](/assets/images/help/codespaces/codespaces-commit-commit-message.png)  

1. To commit your staged changes, click the check mark at the top the source control side bar.

   ![Click the check mark icon](/assets/images/help/codespaces/codespaces-commit-checkmark-icon.png)  

   You can push the changes you've made. This applies those changes to the upstream branch on the remote repository. You might want to do this if you're not yet ready to create a pull request, or if you prefer to create a pull request on {% data variables.product.prodname_dotcom %}.
1. At the top of the side bar, click the ellipsis (**...**).
 
   ![Ellipsis button for View and More Actions](/assets/images/help/codespaces/source-control-ellipsis-button-nochanges.png)

1. In the drop-down menu, click **Push**.
1. Go back to your new repository on {% data variables.product.prodname_dotcom %} and view the _haikus.json_ file. Check that the change you made in your codespace has been successfully pushed to the repository.

## Personalizing with an extension

Within a codespace, you have access to the {% data variables.product.prodname_vscode_marketplace %}. For this example, you'll install an extension that alters the theme, but you can install any extension that is useful for your workflow.

{% note %}

**Note**: If you have [Settings Sync](https://code.visualstudio.com/docs/editor/settings-sync) turned on, any changes you make to your editor setup in the current codespace, such as changing your theme or keyboard bindings, are automatically synced to any other codespaces you open and any instances of {% data variables.product.prodname_vscode %} that are signed into your {% data variables.product.prodname_dotcom %} account.

{% endnote %}

1. In the left sidebar, click the Extensions icon.

1. In the search bar, enter `fairyfloss` and install the fairyfloss extension.

   ![Add an extension](/assets/images/help/codespaces/add-extension.png)

1. Click **Install in Codespaces**.
1. Select the `fairyfloss` theme by selecting it from the list.

   ![Select the fairyfloss theme](/assets/images/help/codespaces/fairyfloss.png)

## Next Steps

You've successfully created, personalized, and run your first application within a codespace but there's so much more to explore! Here are some helpful resources for taking your next steps with {% data variables.product.prodname_github_codespaces %}.
  - "[Deep dive](/codespaces/getting-started/deep-dive)": This quickstart presented some of the features of {% data variables.product.prodname_github_codespaces %}. The deep dive looks at these areas from a technical standpoint.
  - "[Add a dev container configuration to your repository](/codespaces/setting-up-your-project-for-codespaces/setting-up-your-project-for-codespaces)": These guides provide information on setting up your repository to use {% data variables.product.prodname_github_codespaces %} with specific languages.
  - "[Introduction to dev containers](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)": This guide provides details on configuring a development container for your codespace.

## Further reading

- "[Enabling {% data variables.product.prodname_github_codespaces %} for your organization](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization)"
- "[Managing billing for {% data variables.product.prodname_github_codespaces %} in your organization](/codespaces/managing-codespaces-for-your-organization/managing-billing-for-github-codespaces-in-your-organization)"
