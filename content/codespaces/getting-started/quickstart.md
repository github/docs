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

For more information on exactly how {% data variables.product.prodname_github_codespaces %} works, see the companion guide "[AUTOTITLE](/codespaces/getting-started/deep-dive)."

## Creating your codespace

1. Navigate to the [github/haikus-for-codespaces](https://github.com/github/haikus-for-codespaces) template repository.
{% data reusables.codespaces.use-this-template %}

## Running the application

Once your codespace is created, the template repository will be automatically cloned into it. Now you can run the application and launch it in a browser.

1. When the terminal becomes available, enter the command `npm run dev`. This example uses a Node.js project, and this command runs the script labeled "dev" in the `package.json` file, which starts up the web application defined in the sample repository.

   ![Screenshot of the Terminal in {% data variables.product.prodname_vscode_shortname %} with the "npm run dev" command entered.](/assets/images/help/codespaces/codespaces-npm-run-dev.png)

   If you're following along with a different application type, enter the corresponding start command for that project.

1. When your application starts, the codespace recognizes the port the application is running on and displays a pop-up message to let you know that the port has been forwarded.

   ![Screenshot of the pop-up message: "Your application running on port 3000 is available." Below this is a green button, labeled "Open in Browser."](/assets/images/help/codespaces/quickstart-port-toast.png)

1. Click **Open in Browser** to view your running application in a new tab.

## Edit the application and view changes

1. Switch back to your codespace and open the `haikus.json` file by clicking it in the Explorer.

1. Edit the `text` field of the first haiku to personalize the application with your own haiku.

1. Go back to the running application tab in your browser and refresh to see your changes.

   {% octicon "light-bulb" aria-hidden="true" %} If you've closed the browser tab, click the Ports tab in {% data variables.product.prodname_vscode_shortname %}, hover over the **Local Address** value for the running port, and click the **Open in Browser** icon.

   ![Screenshot of the "Ports" panel. The "Ports" tab and a globe icon, which opens the forwarded port in a browser, are highlighted with orange outlines.](/assets/images/help/codespaces/quickstart-forward-port.png)

## Committing and pushing your changes

Now that you've made a few changes, you can use the integrated terminal or the source view to publish your work to a new repository.

{% data reusables.codespaces.source-control-activity-bar %}
1. To stage your changes, click {% octicon "plus" aria-label="Stage Changes" %} next to the `haikus.json` file, or next to **Changes** if you've changed multiple files and you want to stage them all.

   ![Screenshot of the "Source control" side bar with the staging button (a plus sign), to the right of "Changes," highlighted with a dark orange outline.](/assets/images/help/codespaces/codespaces-commit-stage.png)

1. To commit your staged changes, type a commit message describing the change you've made, then click **Commit**.

   ![Screenshot of the "Source control" side bar. A commit message, with "Change haiku text and styles" entered, and the "Commit" button are highlighted with an orange outline.](/assets/images/help/codespaces/vscode-commit-button.png)

1. Click **Publish Branch**.

   ![Screenshot of the "Source control" side bar showing the "Publish Branch" button.](/assets/images/help/codespaces/vscode-publish-branch-button.png)

1. In the "Repository Name" dropdown, type a name for your new repository, then select **Publish to {% data variables.product.prodname_dotcom %}  private repository** or **Publish to {% data variables.product.prodname_dotcom %}  public repository**.

   ![Screenshot of the repository name dropdown in VS Code. Two options are shown, for publishing to a private or a public repository.](/assets/images/help/codespaces/choose-new-repository.png)

   The owner of the new repository will be the {% data variables.product.prodname_dotcom %} account with which you created the codespace.
1. In the pop-up that appears in the lower right corner of the editor, click **Open on {% data variables.product.prodname_dotcom %}** to view the new repository on {% data variables.product.prodname_dotcom_the_website %}. In the new repository, view the `haikus.json` file and check that the change you made in your codespace has been successfully pushed to the repository.

   ![Screenshot of a confirmation message for a successfully published repository, showing the "Open on {% data variables.product.prodname_dotcom %}" button.](/assets/images/help/codespaces/open-on-github.png)

## Personalizing with an extension

When you connect to a codespace using the browser, or the {% data variables.product.prodname_vscode %} desktop application, you can access the Visual Studio Code Marketplace directly from the editor. For this example, you'll install a {% data variables.product.prodname_vscode_shortname %} extension that alters the theme, but you can install any extension that's useful for your workflow.

1. In the Activity Bar, click the Extensions icon.

   ![Screenshot of the Activity Bar. The Extensions icon is highlighted with an orange outline.](/assets/images/help/codespaces/extensions-activity-bar-icon.png)

1. In the search bar, type `fairyfloss` and click **Install**.

   ![Screenshot of the "Extensions: Marketplace" side bar. "fairyfloss" is entered into the search box and, below it, the "fairyfloss" extension is displayed, with an "Install" button.](/assets/images/help/codespaces/add-extension.png)

1. Select the `fairyfloss` theme by selecting it from the list.

   ![Screenshot of the "Select Color Theme" dropdown, with the "fairyfloss" theme selected.](/assets/images/help/codespaces/fairyfloss.png)

### About Settings Sync

You can enable Settings Sync to sync extensions and other settings across devices and instances of {% data variables.product.prodname_vscode_shortname %}. {% data reusables.codespaces.about-settings-sync %} For more information, see "[AUTOTITLE](/codespaces/customizing-your-codespace/personalizing-github-codespaces-for-your-account#settings-sync)."

## Next steps

You've successfully created, personalized, and run your first application within a codespace but there's so much more to explore! Here are some helpful resources for taking your next steps with {% data variables.product.prodname_github_codespaces %}.

- "[AUTOTITLE](/codespaces/getting-started/deep-dive)": This quickstart presented some of the features of {% data variables.product.prodname_github_codespaces %}. The deep dive looks at these areas from a technical standpoint.
- "[AUTOTITLE](/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration)": These guides provide information on setting up your repository to use {% data variables.product.prodname_github_codespaces %} with specific languages.
- "[AUTOTITLE](/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers)": This guide provides details on creating a custom configuration for {% data variables.product.prodname_codespaces %} for your project.

## Further reading

- "[AUTOTITLE](/codespaces/managing-codespaces-for-your-organization/enabling-or-disabling-github-codespaces-for-your-organization)"
- "[AUTOTITLE](/codespaces/developing-in-codespaces/using-github-codespaces-in-visual-studio-code)"
- "[AUTOTITLE](/codespaces/developing-in-codespaces/using-github-codespaces-in-your-jetbrains-ide)"
- "[AUTOTITLE](/codespaces/developing-in-codespaces/using-github-codespaces-with-github-cli)"
- "[AUTOTITLE](/codespaces/customizing-your-codespace/setting-your-default-editor-for-github-codespaces)."
- "[AUTOTITLE](/codespaces/managing-codespaces-for-your-organization/managing-the-cost-of-github-codespaces-in-your-organization)"
