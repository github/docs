---
title: Quickstart for Codespaces
intro: 'Try out {% data variables.product.prodname_codespaces %} in 5 minutes.'
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

In this guide, you'll create a codespace from a [template repository](https://github.com/2percentsilk/haikus-for-codespaces) and explore some of the essential features available to you within the codespace.

From this quickstart, you will learn how to create a codespace, connect to a forwarded port to view your running application, use version control in a codespace, and personalize your setup with extensions.

For more information on exactly how {% data variables.product.prodname_codespaces %} works, see the companion guide "[Deep dive into {% data variables.product.prodname_codespaces %}](/codespaces/getting-started/deep-dive)."

## codespace を作成する

1. Navigate to the [template repository](https://github.com/2percentsilk/haikus-for-codespaces) and select **Use this template**.

2. Name your repository, select your preferred privacy setting, and click **Create repository from template**.

3. Navigate to the main page of the newly created repository. Under the repository name, use the **{% octicon "code" aria-label="The code icon" %} Code** drop-down menu, and in the **Codespaces** tab, click **Create codespace on main**.

  ![[New codespace] ボタン](/assets/images/help/codespaces/new-codespace-button.png)

## Running the application

Once your codespace is created, your repository will be automatically cloned into it. Now you can run the application and launch it in a browser.

1. Since this example uses a Node.js project, start the application by entering `npm run dev` in the terminal. このコマンドは、package.json ファイルの `dev` スクリプトを実行し、サンプルリポジトリで定義された Web アプリケーションを起動します。

   ![ターミナルで dev を実行する npm](/assets/images/help/codespaces/codespaces-npm-run-dev.png)

    If you're following along with a different application type, enter the corresponding start command for that project.

2. When your application starts, the codespace recognizes the port the application is running on and displays a prompt to let you know it has been forwarded.

  ![ポートフォワーディングトースト](/assets/images/help/codespaces/quickstart-port-toast.png)

3. [**Open in Browser**] をクリックして、実行中のアプリケーションを新しいタブで表示します。

## Edit the application and view changes

1. Switch back to your codespace and open the `haikus.json` file by double-clicking it in the File Explorer.

2. Edit the `text` field of the first haiku to personalize the application with your own haiku.

3. Go back to the running application tab in your browser and refresh to see your changes.

  {% octicon "light-bulb" aria-label="The lightbulb icon" %}  If you've closed the tab, open the Ports panel and click the **Open in browser** icon for the running port.
  ![Port Forwarding Panel](/assets/images/help/codespaces/quickstart-forward-port.png)

## Committing and pushing your changes

Now that you've made a few changes, you can use the integrated terminal or the source view to commit and push the changes back to the remote.

{% data reusables.codespaces.source-control-display-dark %}
1. 変更をステージングするには、変更したファイルの隣にある [**+**] をクリックするか、複数のファイルを変更してすべてをステージングする場合は [**Changes**] の隣をクリックします。 ![ステージングボタンが強調表示されたソースコントロールサイドバー](/assets/images/help/codespaces/codespaces-commit-stage.png)
1. 行った変更について説明するコミットメッセージを入力します。 ![コミットメッセージがあるソースコントロールサイドバー](/assets/images/help/codespaces/codespaces-commit-commit-message.png)
1. ステージングされた変更をコミットするには、ソースコントロールサイドバーの上部にあるチェックマークをクリックします。 ![Click the check mark icon](/assets/images/help/codespaces/codespaces-commit-checkmark-icon.png)  
   You can push the changes you've made. それにより、変更がリモートリポジトリの上流ブランチに適用されます。 プルリクエストの作成準備が整っていない場合、または {% data variables.product.prodname_dotcom %} でプルリクエストを作成する場合は、この操作を行うことをお勧めします。
1. サイドバーの上部にある省略記号(**...**) をクリックします。 ![[View] および [More Actions] の省略記号ボタン](/assets/images/help/codespaces/source-control-ellipsis-button-nochanges.png)
1. ドロップダウンメニューで、[**Push**] をクリックします。

## Personalizing with an extension

codespace 内で、Visual Studio Code Marketplace にアクセスできます。 For this example, you'll install an extension that alters the theme, but you can install any extension that is useful for your workflow.

1. 左サイトバーで、[Extensions] アイコンをクリックします。

2.  検索バーに「`fairyfloss`」と入力し、fairyfloss の機能拡張をインストールします。

  ![機能拡張を追加](/assets/images/help/codespaces/add-extension.png)

3. リストから `fairyfloss` のテーマを選択します。

  ![fairyfloss のテーマを選択](/assets/images/help/codespaces/fairyfloss.png)

4. Changes you make to your editor setup in the current codespace, such as theme and keyboard bindings, are synced automatically via [Settings Sync](https://code.visualstudio.com/docs/editor/settings-sync) to any other codespaces you open and any instances of Visual Studio Code that are signed into your GitHub account.

## 次のステップ

codespace で最初のアプリケーションを正常に作成、パーソナライズ、および実行しましたが、その他にもできることはまだまだたくさんあります。 {% data variables.product.prodname_codespaces %} で次のステップを実行するための役立つリソースは以下のとおりです。
  - [Deep dive](/codespaces/getting-started/deep-dive): This quickstart presented some of the features of {% data variables.product.prodname_codespaces %}. The deep dive looks at these areas from a technical standpoint.
  - [Setting up your project for {% data variables.product.prodname_codespaces %}](/codespaces/getting-started-with-codespaces): These guides provide information on setting up your project to use {% data variables.product.prodname_codespaces %} with specific languages.
  - [Configuring {% data variables.product.prodname_codespaces %} for your project](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project): This guide provides details on creating a custom configuration for {% data variables.product.prodname_codespaces %} for your project.

## 参考リンク

- [Enabling {% data variables.product.prodname_codespaces %} for your organization](/codespaces/managing-codespaces-for-your-organization/enabling-codespaces-for-your-organization)
- [Managing billing for {% data variables.product.prodname_codespaces %} in your organization](/codespaces/managing-codespaces-for-your-organization/managing-billing-for-codespaces-in-your-organization)
