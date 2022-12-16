---
title: テンプレートから codespace を作成する
intro: 新しいプロジェクトを開始する場合、空のテンプレートから codespace を作成するか、実行する作業の種類用に特別に設計されたテンプレートを選ぶことができます。
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
shortTitle: Create a codespace from a template
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 9e7ee0d110e962fa755f5f57cc70bc3cab341808
ms.sourcegitcommit: 1f3bd126ca000982c538f1621d47722737740943
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 12/01/2022
ms.locfileid: '148188313'
---
## {% data variables.product.prodname_github_codespaces %} のテンプレートについて

新しいプロジェクトを開始する場合、テンプレートから codespace を作成すると、開発作業をすばやく開始できます。 クラウドベースの開発環境でプロジェクトに取り組み、ファイルをクラウドに保存し、新しいリモート リポジトリに作業内容を公開することで、他のユーザーと共有したり、ローカル コンピューターに複製したりできます。

{% note %}

**注**: codespace をリポジトリではなくテンプレートから作成すると、常に個人アカウントに課金されます。 詳しくは、「[{% data variables.product.prodname_github_codespaces %} の支払いについて](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces)」をご覧ください。

{% endnote %}

空のテンプレートから開始する、{% data variables.product.company_short %} が管理するテンプレートから React や Jupyter Notebook などの一般的なテクノロジを選ぶ、または {% data variables.product.prodname_dotcom %} 上の任意のテンプレート リポジトリから codespace を起動できます。 空のテンプレートを使う場合は、まず空のディレクトリから始めます。クラウドベースのコンピューティング リソースと、既定の codespace イメージにプレインストールされているツール、言語、ランタイム環境にアクセスできます。 他のテンプレートを使う場合は、扱うテクノロジのスターター ファイルに加え、通常は、README ファイル、`.gitignore` ファイル、カスタム環境構成を含む開発コンテナー構成ファイルなどの追加ファイルをいくつか取得します。 開発コンテナーと既定のイメージについて詳しくは、「[開発コンテナーの概要](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)」を参照してください。

たとえば、{% data variables.product.company_short %} の React テンプレートから codespace を作成すると、`index.js`、`app.js`、`package.json` など、シンプルなアプリケーション向けのテンプレート ファイルが用意されているワークスペースが表示されます。 codespace が開いた直後に、開発サーバーが自動的に起動し、{% data variables.product.prodname_vscode_shortname %} Web クライアント内のシンプルなブラウザー タブで、実行中のアプリケーションを表示できるようになります。

![codespace で実行されている React テンプレートのスクリーンショット](/assets/images/help/codespaces/react-template.png)

テンプレートに含まれるファイルと構成は、テンプレート リポジトリで定義されています。 codespace を作成すると、テンプレート リポジトリは codespace に複製されます。 その後、リンクは切断され、公開するまで codespace はリモート リポジトリにリンクされないようになります。 

{% tip %}

**ヒント:** ユーザーがフレームワーク、ライブラリ、またはその他のプロジェクトを使い始められるように、{% data variables.product.prodname_github_codespaces %} で使うテンプレート リポジトリを設定できます。 詳しくは、「[{% data variables.product.prodname_github_codespaces %} のテンプレート リポジトリを設定する](/codespaces/setting-up-your-project-for-codespaces/setting-up-a-template-repository-for-github-codespaces)」を参照してください。

{% endtip %}

## {% data variables.product.company_short %} テンプレートから codespace を作成する

空のテンプレートなど、{% data variables.product.company_short %} が管理するテンプレートは、"自分の codespace" ページから入手できます。

{% data reusables.codespaces.your-codespaces-procedure-step %} {% data reusables.codespaces.view-all-templates-step %}
1. 必要に応じて、テンプレートのファイルを含むテンプレート リポジトリを表示するには、テンプレートの名前をクリックします。

   ![[クイック スタート テンプレートの探索] セクションの [React] が強調表示されているスクリーンショット](/assets/images/help/codespaces/react-template-name.png)

1. 起動するテンプレートの下にある **[このテンプレートを使用]** をクリックします。
   
   ![React テンプレートの下にある [このテンプレートを使用] ボタンが強調表示されているクイック スタート テンプレートのスクリーンショット](/assets/images/help/codespaces/react-template-button.png)

{% data reusables.codespaces.template-codespaces-default-editor %}

## テンプレート リポジトリから codespace を作成する

任意のテンプレート リポジトリから codespace を作成し、準備ができたら新しいリポジトリに作業内容を公開できます。 テンプレート リポジトリについて詳しくは、「[テンプレートからリポジトリを作成する](/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template#about-repository-templates)」を参照してください。

{% data reusables.repositories.navigate-to-repo %} {% data reusables.codespaces.open-template-in-codespace-step %}

   {% note %}

   **注:** 自分がテンプレート リポジトリの保守管理者で、テンプレート リポジトリ自体に変更をコミットする場合は、 **[{% octicon "code" aria-label="The code icon" %} コード]** ドロップダウンから codespace を作成する必要があります。 詳しくは、「[リポジトリの codespace を作成する](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository#creating-a-codespace-for-a-repository)」を参照してください。

   {% endnote %}

{% data reusables.codespaces.template-codespaces-default-editor %}

## {% data variables.product.product_name %} のリポジトリに公開する

{% data reusables.codespaces.about-publishing-templates %}

### {% data variables.product.prodname_vscode_shortname %} から公開する 

{% data reusables.codespaces.publishing-template-codespaces %}

codespace が公開されると、自分の {% data variables.product.prodname_github_codespaces %} エクスペリエンスをカスタマイズするためのさまざまなオプションにアクセスできます。 たとえば、次のように操作できます。

- codespace のコンピューターの種類を変更して、作業に適したリソースを使っていることを確認します (「[codespace のコンピューターの種類を変更する](/codespaces/customizing-your-codespace/changing-the-machine-type-for-your-codespace)」を参照してください)。
- {% data variables.product.prodname_dotcom %} が自動的に GPG を使って codespace で行うコミットに署名できるようにします (「[{% data variables.product.prodname_github_codespaces %} の GPG 検証を管理する](/codespaces/managing-your-codespaces/managing-gpg-verification-for-github-codespaces)」を参照してください)。
- 暗号化されたシークレットを codespace と共有します (「[codespaces の暗号化されたシークレットを管理する](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)」を参照してください)。

### {% data variables.product.prodname_dotcom_the_website %} から公開する 

公開されていない codespace は、{% data variables.product.prodname_dotcom_the_website %} の "自分の codespace" ページから公開できます。 これは、ブラウザー内で現在開いていない codespace を公開する場合に便利です。 これを行うと、作業内容はリポジトリに保持されますが、既存の codespace と新しいリポジトリの間のリンクはなくなります。 ただし、新しいリポジトリに移動し、そこから codespace を作成すると、この codespace はそのリポジトリに接続されるようになります。

{% data reusables.codespaces.your-codespaces-procedure-step %}
1. 公開されていない codespace の横にある省略記号 ( **...** ) をクリックし、 **[新しいリポジトリに公開する]** を選びます。

   ![[新しいリポジトリに公開する] ボタンのスクリーンショット](/assets/images/help/codespaces/publish-to-new-repository.png)
1. 新しいリポジトリの名前を選び、 **[パブリック]** または **[プライベート]** に設定して、 **[リポジトリの作成]** をクリックします。

   ![[新しいリポジトリに公開する] ドロップダウンのスクリーンショット](/assets/images/help/codespaces/template-new-repository-settings.png)
1. 必要に応じて、新しいリポジトリを表示するには、 **[リポジトリの表示]** をクリックします。

## 参考資料

- [リポジトリの codespace を作成する](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository)
- [codespace ライフサイクル](/codespaces/getting-started/the-codespace-lifecycle)
- [codespace でソース管理を使う](/codespaces/developing-in-codespaces/using-source-control-in-your-codespace)
