---
title: Developing in a codespace
intro: 'You can open a codespace on {% data variables.product.product_name %}, then develop using {% data variables.product.prodname_vscode %}''s features.'
product: '{% data reusables.gated-features.codespaces %}'
redirect_from:
  - /github/developing-online-with-github-codespaces/developing-in-a-codespace
  - /github/developing-online-with-codespaces/developing-in-a-codespace
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
shortTitle: Develop in a codespace
---

 

## About development with {% data variables.product.prodname_github_codespaces %}

{% data variables.product.prodname_github_codespaces %} provides you with the full development experience of {% data variables.product.prodname_vscode %}. {% data reusables.codespaces.use-visual-studio-features %}

{% data reusables.codespaces.links-to-get-started %}

![Codespace overview with annotations](/assets/images/help/codespaces/codespace-overview-annotated.png)

1. Side Bar - By default, this area shows your project files in the Explorer.
2. Activity Bar - This displays the Views and provides you with a way to switch between them. You can reorder the Views by dragging and dropping them.
3. Editor - This is where you edit your files. You can use the tab for each editor to position it exactly where you need it.
4. Panels - This is where you can see output and debug information, as well as the default place for the integrated Terminal.
5. Status Bar - This area provides you with useful information about your codespace and project. For example, the branch name, configured ports, and more.

For more information on using {% data variables.product.prodname_vscode_shortname %}, see the [User Interface guide](https://code.visualstudio.com/docs/getstarted/userinterface) in the {% data variables.product.prodname_vscode_shortname %} documentation.

{% data reusables.codespaces.connect-to-codespace-from-vscode %}

{% data reusables.codespaces.use-chrome %} For more information, see "[Troubleshooting Codespaces clients](/codespaces/troubleshooting/troubleshooting-codespaces-clients)."

### Personalizing your codespace

{% data reusables.codespaces.about-personalization %} For more information, see "[Personalizing {% data variables.product.prodname_github_codespaces %} for your account](/codespaces/customizing-your-codespace/personalizing-github-codespaces-for-your-account)."

{% data reusables.codespaces.apply-devcontainer-changes %} For more information, see "[Configuring {% data variables.product.prodname_codespaces %} for your project](/github/developing-online-with-codespaces/configuring-codespaces-for-your-project#apply-changes-to-your-configuration)."

### Running your app from a codespace
{% data reusables.codespaces.about-port-forwarding %} For more information, see "[Forwarding ports in your codespace](/github/developing-online-with-codespaces/forwarding-ports-in-your-codespace)."

### Committing your changes

{% data reusables.codespaces.committing-link-to-procedure %} 

### Using the {% data variables.product.prodname_vscode_command_palette %}

The {% data variables.product.prodname_vscode_command_palette %} allows you to access and manage many features for {% data variables.product.prodname_codespaces %} and {% data variables.product.prodname_vscode_shortname %}. For more information, see "[Using the {% data variables.product.prodname_vscode_command_palette_shortname %} in {% data variables.product.prodname_codespaces %}](/codespaces/codespaces-reference/using-the-vs-code-command-palette-in-codespaces)."