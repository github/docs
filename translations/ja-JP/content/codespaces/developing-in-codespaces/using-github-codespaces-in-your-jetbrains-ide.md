---
title: JetBrains IDE で GitHub Codespaces を使う
shortTitle: JetBrains IDEs
intro: JetBrains Gateway を使って codespace に接続し、お気に入りの JetBrains IDE で作業できます。
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Developer
ms.openlocfilehash: f522bf481e932f9735560ee4a1fec21944ced2e7
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/09/2022
ms.locfileid: '148160157'
---
{% data reusables.codespaces.codespaces-jetbrains-beta-note %}

## JetBrains IDE 内の {% data variables.product.prodname_codespaces %} について

JetBrains IDE を使ってコードを処理する場合、codespace での作業を利用できます。 これを行うには、JetBrains Gateway アプリケーションを使います。

JetBrains Gateway をインストールした後、JetBrains を既定のエディターとして設定すると、{% data variables.product.prodname_dotcom_the_website %} から codespace を開くたびに JetBrains Gateway が起動し、お使いの JetBrains IDE を選んで codespace に接続できるようになります。

{% note %}

**注**: JetBrains Gateway では、既存の codespace のみを使用できます。 codespace は、{% data variables.product.prodname_dotcom_the_website %} で、または {% data variables.product.prodname_cli %} を使って作成できます。 詳しくは、「[リポジトリの codespace を作成する](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository)」を参照してください。

{% endnote %}

### JetBrains リモート開発接続プロセス

JetBrains IDE で codespace を使う基本的なプロセスは次のとおりです。

* JetBrains Gateway アプリケーションで、アクティブまたは停止している codespace の 1 つを選びます。 
* 次に、使う JetBrains IDE を選びます。 
* 選んだ JetBrains IDE が、codespace とソース コードをホストするリモート仮想マシンにダウンロードされます。
* JetBrains シン クライアント アプリケーションがローカル コンピューターにダウンロードされ、起動されます。
* クライアント アプリケーションは、完全なバックエンド IDE に接続します。
* ローカル環境の場合と同じ方法で、クライアント アプリケーションでコードを処理できます。

## 前提条件

JetBrains IDE 内の codespace で作業するには、次のものが必要です。

* 有効な JetBrains ライセンス
* JetBrains Gateway アプリケーション
* {% data variables.product.prodname_cli %} version 2.18.0 以降 
* SSH サーバーを実行している既存の codespace

### JetBrains ライセンス

JetBrains Gateway から codespace に接続するには、サポートされている JetBrains IDE の少なくとも 1 つに対するライセンスが必要です。

### JetBrains Gateway

JetBrains Gateway は、JetBrains Toolbox アプリケーションからインストールして更新できます。

1. [JetBrains Toolbox](https://www.jetbrains.com/toolbox-app) をダウンロードしてインストールします。
1. JetBrains Toolbox を開きます。
1. 使用可能なツールの一覧で **Gateway** を見つけて、 **[インストール]** をクリックします。

   ![JetBrains Toolbox のスクリーンショット](/assets/images/help/codespaces/jetbrains-toolbox.png)

### {% data variables.product.prodname_cli %}

JetBrains Gateway の {% data variables.product.prodname_github_codespaces %} プラグインを使うには、JetBrains Gateway から codespace を開く前に、{% data variables.product.prodname_cli %} バージョン 2.18.0 以降をインストールして構成しておく必要があります。

次のコマンドを使用して、{% data variables.product.prodname_cli %} のバージョンを確認します。

```shell{:copy}
gh --version
```

詳しくは、「[GitHub CLI について](/github-cli/github-cli/about-github-cli)」を参照してください。

### SSH サーバーを実行する codespace

接続先の既存の codespace が必要です。 {% data reusables.codespaces.ways-to-create-a-codespace %} 詳しくは、「[リポジトリの codespace を作成する](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository)」を参照してください。

{% data reusables.codespaces.ssh-server-installed %}

`devcontainer.json` ファイルと既定のコンテナー イメージについて詳しくは、「[開発コンテナーの概要](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)」を参照してください。

{% note %}

**注**: SSH 経由で codespace に接続する方法については、「[{% data variables.product.prodname_github_codespaces %} クライアントのトラブルシューティング](/codespaces/troubleshooting/troubleshooting-github-codespaces-clients?tool=jetbrains#ssh-connection-issues)」を参照してください。

{% endnote %}

## JetBrains Gateway を設定する

{% data variables.product.prodname_github_codespaces %} に JetBrains Gateway を初めて使う際は、{% data variables.product.prodname_codespaces %} プラグインをインストールする必要があります。 また、{% data variables.product.prodname_dotcom %} アカウントを使って、JetBrains Gateway から {% data variables.product.prodname_dotcom_the_website %} へのアクセスを許可する必要があります。 

1. JetBrains Gateway アプリケーションを開きます。
1. **[その他のプロバイダーのインストール]** で、{% data variables.product.prodname_github_codespaces %} の **[インストール]** リンクをクリックします。

   ![JetBrains Gateway の初期ビューのスクリーンショット](/assets/images/help/codespaces/jetbrains-gateway-initial-view.png)

1. **[codespace に接続]** をクリックします。

   ![Gateway に [codespace に接続] ボタンが表示されているスクリーンショット](/assets/images/help/codespaces/jetbrains-gateway-connect.png)

1. [JetBrains Gateway へようこそ] ダイアログ ボックスで、 **[{% data variables.product.prodname_dotcom %} でサインイン]** をクリックします。

   ![サインイン ボタンのスクリーンショット](/assets/images/help/codespaces/jetbrains-gateway-sign-in.png)

1. ワンタイム コードの横にあるアイコンをクリックしてコピーし、ログイン リンクをクリックします。

   ![ワンタイム ログイン コードのスクリーンショット](/assets/images/help/codespaces/jetbrains-gateway-login-code.png)

1. 現在 {% data variables.product.prodname_dotcom %} にサインインしていない場合、サインイン ページが表示されます。 
   * 詳細を入力し、 **[サインイン]** をクリックします。
   * たとえば、2 要素認証コードを入力して、認証を確認します。
1. [デバイスのアクティブ化] ページで、コピーしたコードを貼り付け、 **[続行]** をクリックします。
1. 組織に所属している場合は、"組織へのシングル サインオン" ページが表示されます。 JetBrains Gateway からアクセスすることを承認する組織の横にある **[承認]** をクリックし、 **[続行]** をクリックします。
1. [JetBrains の {% data variables.product.prodname_github_codespaces %} の承認] ページで、 **[{% data variables.product.prodname_dotcom %} の承認]** をクリックします。
1. JetBrains Gateway アプリケーションに戻り、現在アクティブまたは停止している codespace の一覧から codespace を開き、次の手順のステップ 3 を参照してください。

## JetBrains IDE で codespace を開く

{% data reusables.codespaces.opening-codespace-in-jetbrains %}

   codespace に初めて接続すると、バックエンド IDE がリモート コンピューターにダウンロードされます。 これには数分かかることがあります。 次に同じ codespace に接続する際、このステップは必要なく、接続プロセスが迅速になります。 

   その後、バックエンド IDE が開始されます。 繰り返しになりますが、実行したままのバックエンド IDE に再接続する場合、このステップは今後は必要ありません。 
   
   クライアント アプリケーションが起動します。

## 参考資料

- [codespace で開発する](/codespaces/developing-in-codespaces/developing-in-a-codespace)
- [JetBrains に {% data variables.product.prodname_github_codespaces %} プラグインを使う](/codespaces/codespaces-reference/using-the-github-codespaces-plugin-for-jetbrains)
- [{% data variables.product.prodname_github_codespaces %} で {% data variables.product.prodname_copilot %} を使う](/codespaces/codespaces-reference/using-github-copilot-in-github-codespaces)
- [{% data variables.product.prodname_github_codespaces %} クライアントのトラブルシューティング](/codespaces/troubleshooting/troubleshooting-github-codespaces-clients?tool=jetbrains)
