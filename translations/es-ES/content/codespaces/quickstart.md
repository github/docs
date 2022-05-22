---
title: Quickstart for GitHub Codespaces
intro: 'Try out {% data variables.product.prodname_codespaces %} in 5 minutes or less.'
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

### Introducción

In this guide, you'll create a codespace from the [sample repository](https://github.com/2percentsilk/haikus-for-codespaces) and explore some of the essential features available to you within the codespace.

The following example shows you how to create a codespace, connect to a forwarded port to view your running application, and personalize your setup with additional extensions and dotfiles.

### Creating your codespace

1. Navigate to the main page of the [sample repository](https://github.com/2percentsilk/haikus-for-codespaces).

2. Debajo del nombre del repositorio, utiliza el menú desplegable {% octicon "download" aria-label="The download icon" %} **Código**, y selecciona **Abrir con codespaces**.

  ![Botón de abrir con codespaces](/assets/images/help/codespaces/open-with-codespaces-button.png)

3. To create a codespace, click {% octicon "plus" aria-label="The plus icon" %} **New codespace**.

  ![Botón de codespace nuevo](/assets/images/help/codespaces/new-codespace-button.png)

### Run the application

With your project open in a codespace, you can now run the application and launch it in a browser.

1. Start the application by entering `npm run dev` in the terminal. This command executes the `dev` script in the package.json file and starts up the web application defined in the sample repository.

   ![npm run dev in terminal](/assets/images/help/codespaces/codespaces-npm-run-dev.png)

2. When your project starts, you should see a toast in the bottom right corner with a prompt to connect to the port your project uses.

  ![Port forwarding toast](/assets/images/help/codespaces/quickstart-port-toast.png)

3. Click **Open in Browser** to view your running application in a new tab.

### Personalize with a theme extension

Within a codespace, you have access to the Visual Studio Code Marketplace. For this example, you'll install an extension that alters the theme but you can install any extension that is useful for your workflow.

1. In the left sidebar, click the Extensions icon.

2.  In the search bar, enter `fairyfloss` and install the fairyfloss extension.

  ![Add an extension](/assets/images/help/codespaces/add-extension.png)

3. Select the `fairyfloss` theme by selecting it from the list.

  ![Select the fairyfloss theme](/assets/images/help/codespaces/fairyfloss.png)

4. Changes you make to your editor setup in the current codespace, such as theme and keyboard bindings, are synced automatically to other codespaces via [Settings Sync](https://code.visualstudio.com/docs/editor/settings-sync).

### Personalize with dotfiles

If your user account on GitHub owns a public repository named dotfiles, GitHub automatically uses this repository to personalize your codespace environment during codespace creation.

This example guides you through creating a dotfiles repository for your codespaces.

1. Navigate to the sample [dotfiles repository](https://github.com/aw-test-93/dotfiles/).

2. Fork the repository to your account and ensure it's public.

   Verify the repository created under your account is named dotfiles, for example `yourname/dotfiles`. Any other name will cause {% data variables.product.prodname_codespaces %} to ignore the repository for personalization.

3. Create a new codespace from the [sample application repository](https://github.com/2percentsilk/haikus-for-codespaces) as dotfile updates are only applied at creation time. The sample dotfiles will change the command prompt to bold purple and blue text.

  ![Custom command prompt](/assets/images/help/codespaces/custom-prompt.png)

### Next Steps

You've successfully created, personalized, and run your first application within a codespace but there's so much more to explore! Aquí tienes algunos recursos útiles para que tomes tus siguientes pasos con {% data variables.product.prodname_codespaces %}.
  - "[Getting Started guides](/codespaces/getting-started-with-codespaces)" for using {% data variables.product.prodname_codespaces %} with specific languages
  - [Create a custom configuration](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project) to configure {% data variables.product.prodname_codespaces %} for your project.
