---
title: codespace で開発する
intro: '{% data variables.product.product_name %} で codespace を開き、{% data variables.product.prodname_vscode %} の機能を使用して開発できます。'
permissions: Anyone can develop in a codespace owned by their user account.
redirect_from:
  - /github/developing-online-with-github-codespaces/developing-in-a-codespace
  - /github/developing-online-with-codespaces/developing-in-a-codespace
versions:
  free-pro-team: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
---

{% data reusables.codespaces.release-stage %}

### About development with {% data variables.product.prodname_codespaces %}

{% data variables.product.prodname_codespaces %} provides you with the full development experience of {% data variables.product.prodname_vscode %}. {% data reusables.codespaces.use-visual-studio-features %}

![Codespace overview with annotations](/assets/images/help/codespaces/codespace-overview-annotated.png)

1. Side Bar - By default, this area shows your project files in the Explorer.
2. Activity Bar - This displays the Views and provides you with a way to switch between them. You can reorder the Views by dragging and dropping them.
3. Editor - This is where you edit your files. You can use the tab for each editor to position it exactly where you need it.
4. Panels - This is where you can see output and debug information, as well as the default place for the integrated Terminal.
5. Status Bar - This area provides you with useful information about your codespace and project. For example, the branch name, configured ports, and more.

For more information on using {% data variables.product.prodname_vscode %}, see the [User Interface guide](https://code.visualstudio.com/docs/getstarted/userinterface) in the {% data variables.product.prodname_vscode %} documentation.

{% data reusables.codespaces.connect-to-codespace-from-vscode %}

{% data reusables.codespaces.use-chrome %} 詳しい情報については、「[codespace のトラブルシューティング](/github/developing-online-with-codespaces/troubleshooting-your-codespace)」を参照してください。

#### Personalizing your codespace

{% data reusables.codespaces.about-personalization %} 詳しい情報については、「[アカウントの {% data variables.product.prodname_codespaces %} をパーソナライズする](/codespaces/setting-up-your-codespace/personalizing-codespaces-for-your-account)」を参照してください。

{% data reusables.codespaces.apply-devcontainer-changes %}詳しい情報については、「[プロジェクトの {% data variables.product.prodname_codespaces %} を設定する](/github/developing-online-with-codespaces/configuring-codespaces-for-your-project#apply-changes-to-your-configuration)」を参照してください。

#### Running your app from a codespace
{% data reusables.codespaces.about-port-forwarding %} For more information, see "[Forwarding ports in your codespace](/github/developing-online-with-codespaces/forwarding-ports-in-your-codespace)."

#### Committing your changes

{% data reusables.codespaces.committing-link-to-procedure %}

### Navigating to an existing codespace

1. {% data reusables.codespaces.you-can-see-all-your-codespaces %}
2. 開発する codespace の名前をクリックします。 ![codespace の名前](/assets/images/help/codespaces/click-name-codespace.png)

Alternatively, you can see any active codespaces for a repository by navigating to the repository in which it was made and selecting **{% octicon "codespaces" aria-label="The codespaces icon" %} Codespaces**.
