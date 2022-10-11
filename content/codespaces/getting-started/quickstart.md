---
title: Quickstart for Codespaces
intro: 'Try out {% data variables.product.prodname_codespaces %} in 5 minutes.'
allowTitleToDifferFromFilename: true
versions:
  free-pro-team: '*'
type: quick_start
topics:
  - Codespaces
redirect_from:
  - /codespaces/codespaces-quickstart
---

{% data reusables.codespaces.release-stage %}

## Introduction

In this guide, you'll create a codespace from a [template repository](https://github.com/2percentsilk/haikus-for-codespaces) and explore some of the essential features available to you within the codespace.

From this quickstart, you will learn how to create a codespace, connect to a forwarded port to view your running application, use version control in a codespace, and personalize your setup with extensions.

For more information on exactly how {% data variables.product.prodname_codespaces %} works, see the companion guide "[Deep dive into {% data variables.product.prodname_codespaces %}](/codespaces/getting-started/deep-dive)."

## Creating your codespace

1. Navigate to the [template repository](https://github.com/2percentsilk/haikus-for-codespaces) and select **Use this template**. 

2. Name your repository, select your preferred privacy setting, and click **Create repository from this template**.

3. Navigate to the main page of the newly created repository. Under the repository name, use the {% octicon "download" aria-label="The download icon" %} **Code** drop-down menu, and select **Open with Codespaces**.

  ![Open with Codespaces button](/assets/images/help/codespaces/open-with-codespaces-button.png)

4. To create a codespace, click {% octicon "plus" aria-label="The plus icon" %} **New codespace**.

  ![New codespace button](/assets/images/help/codespaces/new-codespace-button.png)

## Running the application

Once your codespace is created, your repository will be automatically cloned into it. Now you can run the application and launch it in a browser.

1. Since this example uses a Node.js project, start the application by entering `npm run dev` in the terminal. This command executes the `dev` script in the package.json file and starts up the web application defined in the sample repository.
   
   ![npm run dev in terminal](/assets/images/help/codespaces/codespaces-npm-run-dev.png)

    If you're following along with a different application type, enter the corresponding start command for that project.

2. When your application starts, the codespace recognizes the port the application is running on and displays a prompt to forward that port so you can connect to it. 

  ![Port forwarding toast](/assets/images/help/codespaces/quickstart-port-toast.png)

3. Click **Open in Browser** to view your running application in a new tab.

## Edit the application and view changes

1. Switch back to your codespace and open the `haikus.json` file by double-clicking it in the File Explorer.

2. Edit the `text` field of the first haiku to personalize the application with your own haiku.

3. Go back to the running application tab in your browser and refresh to see your changes.
   
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

## Personalizing with an extension

Within a codespace, you have access to the Visual Studio Code Marketplace. For this example, you'll install an extension that alters the theme, but you can install any extension that is useful for your workflow.

1. In the left sidebar, click the Extensions icon.

2.  In the search bar, enter `fairyfloss` and install the fairyfloss extension.

  ![Add an extension](/assets/images/help/codespaces/add-extension.png)

3. Select the `fairyfloss` theme by selecting it from the list.

  ![Select the fairyfloss theme](/assets/images/help/codespaces/fairyfloss.png)

4. Changes you make to your editor setup in the current codespace, such as theme and keyboard bindings, are synced automatically via [Settings Sync](https://code.visualstudio.com/docs/editor/settings-sync) to any other codespaces you open and any instances of Visual Studio Code that are signed into your GitHub account.

## Next Steps

You've successfully created, personalized, and run your first application within a codespace but there's so much more to explore! Here are some helpful resources for taking your next steps with {% data variables.product.prodname_codespaces %}.
  - [Deep dive](/codespaces/getting-started/deep-dive): This quickstart presented some of the features of {% data variables.product.prodname_codespaces %}. The deep dive looks at these areas from a technical standpoint.
  - [Setting up your project for {% data variables.product.prodname_codespaces %}](/codespaces/getting-started-with-codespaces). These guides provide information on setting up your project to use {% data variables.product.prodname_codespaces %} with specific languages
  - [Configuring {% data variables.product.prodname_codespaces %} for your project](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project): This guide provides details on creating a custom configuration for {% data variables.product.prodname_codespaces %} for your project.
