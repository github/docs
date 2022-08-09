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

## はじめに

In this guide, you'll create a codespace from a template repository and explore some of the essential features available to you within the codespace.

From this quickstart, you'll learn how to create a codespace, connect to a forwarded port to view your running application, use version control in a codespace, and personalize your setup with extensions.

For more information on exactly how {% data variables.product.prodname_github_codespaces %} works, see the companion guide "[Deep dive into {% data variables.product.prodname_github_codespaces %}](/codespaces/getting-started/deep-dive)."

## codespace を作成する

1. Navigate to the [template repository](https://github.com/github/haikus-for-codespaces) and select **Use this template**.

1. Choose an owner for the new repository, enter a repository name, select your preferred privacy setting, and click **Create repository from template**.

1. Navigate to the main page of the newly created repository. Under the repository name, use the **{% octicon "code" aria-label="The code icon" %} Code** drop-down menu, and in the **Codespaces** tab, click **Create codespace on main**.

  ![[New codespace] ボタン](/assets/images/help/codespaces/new-codespace-button.png)

## Running the application

Once your codespace is created, your repository will be automatically cloned into it. Now you can run the application and launch it in a browser.

1. When the terminal becomes available, enter the command `npm run dev`. This example uses a Node.js project, and this command runs the script labeled "dev" in the _package.json_ file, which starts up the web application defined in the sample repository.

   ![ターミナルで dev を実行する npm](/assets/images/help/codespaces/codespaces-npm-run-dev.png)

   If you're following along with a different application type, enter the corresponding start command for that project.

1. When your application starts, the codespace recognizes the port the application is running on and displays a prompt to let you know it has been forwarded.

  ![ポートフォワーディングトースト](/assets/images/help/codespaces/quickstart-port-toast.png)

1. [**Open in Browser**] をクリックして、実行中のアプリケーションを新しいタブで表示します。

## Edit the application and view changes

1. Switch back to your codespace and open the _haikus.json_ file by double-clicking it in the Explorer.

1. Edit the `text` field of the first haiku to personalize the application with your own haiku.

1. Go back to the running application tab in your browser and refresh to see your changes.

  {% octicon "light-bulb" aria-label="The lightbulb icon" %}  If you've closed the tab, open the Ports panel and click the **Open in browser** icon for the running port.

  ![Port Forwarding Panel](/assets/images/help/codespaces/quickstart-forward-port.png)

## Committing and pushing your changes

Now that you've made a few changes, you can use the integrated terminal or the source view to commit and push the changes back to the remote.

{% data reusables.codespaces.source-control-display-dark %}
1. 変更をステージングするには、変更したファイルの隣にある [**+**] をクリックするか、複数のファイルを変更してすべてをステージングする場合は [**Changes**] の隣をクリックします。

   ![ステージングボタンが強調表示されたソースコントロールサイドバー](/assets/images/help/codespaces/codespaces-commit-stage.png)

1. 行った変更について説明するコミットメッセージを入力します。

   ![コミットメッセージがあるソースコントロールサイドバー](/assets/images/help/codespaces/codespaces-commit-commit-message.png)

1. ステージングされた変更をコミットするには、ソースコントロールサイドバーの上部にあるチェックマークをクリックします。

   ![チェックマークアイコンをクリックする](/assets/images/help/codespaces/codespaces-commit-checkmark-icon.png)

   行なった変更はプッシュできます。 それにより、変更がリモートリポジトリの上流ブランチに適用されます。 プルリクエストの作成準備が整っていない場合、または {% data variables.product.prodname_dotcom %} でプルリクエストを作成する場合は、この操作を行うことをお勧めします。
1. サイドバーの上部にある省略記号(**...**) をクリックします。

   ![[View] および [More Actions] の省略記号ボタン](/assets/images/help/codespaces/source-control-ellipsis-button-nochanges.png)

1. ドロップダウンメニューで、[**Push**] をクリックします。
1. Go back to your new repository on {% data variables.product.prodname_dotcom %} and view the _haikus.json_ file. Check that the change you made in your codespace has been successfully pushed to the repository.

## Personalizing with an extension

Within a codespace, you have access to the {% data variables.product.prodname_vscode_marketplace %}. For this example, you'll install an extension that alters the theme, but you can install any extension that is useful for your workflow.

{% note %}

**Note**: If you have [Settings Sync](https://code.visualstudio.com/docs/editor/settings-sync) turned on, any changes you make to your editor setup in the current codespace, such as changing your theme or keyboard bindings, are automatically synced to any other codespaces you open and any instances of {% data variables.product.prodname_vscode %} that are signed into your {% data variables.product.prodname_dotcom %} account.

{% endnote %}

1. 左サイトバーで、[Extensions] アイコンをクリックします。

1. 検索バーに「`fairyfloss`」と入力し、fairyfloss の機能拡張をインストールします。

   ![機能拡張を追加](/assets/images/help/codespaces/add-extension.png)

1. Click **Install in Codespaces**.
1. リストから `fairyfloss` のテーマを選択します。

   ![fairyfloss のテーマを選択](/assets/images/help/codespaces/fairyfloss.png)

## 次のステップ

codespace で最初のアプリケーションを正常に作成、パーソナライズ、および実行しましたが、その他にもできることはまだまだたくさんあります。 {% data variables.product.prodname_codespaces %} で次のステップを実行するための役立つリソースは以下のとおりです。
  - [Deep dive](/codespaces/getting-started/deep-dive): This quickstart presented some of the features of {% data variables.product.prodname_codespaces %}. The deep dive looks at these areas from a technical standpoint.
  - [Setting up your project for {% data variables.product.prodname_codespaces %}](/codespaces/getting-started-with-codespaces): These guides provide information on setting up your project to use {% data variables.product.prodname_codespaces %} with specific languages.
  - [Configuring {% data variables.product.prodname_codespaces %} for your project](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project): This guide provides details on creating a custom configuration for {% data variables.product.prodname_codespaces %} for your project.

## 参考リンク

- [Enabling {% data variables.product.prodname_codespaces %} for your organization](/codespaces/managing-codespaces-for-your-organization/enabling-codespaces-for-your-organization)
- [Managing billing for {% data variables.product.prodname_codespaces %} in your organization](/codespaces/managing-codespaces-for-your-organization/managing-billing-for-codespaces-in-your-organization)
