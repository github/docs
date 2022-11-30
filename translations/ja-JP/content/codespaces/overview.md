---
title: GitHub Codespaces の概要
shortTitle: Overview
intro: 'このガイドでは、{% data variables.product.prodname_github_codespaces %} について紹介し、そのしくみと使用方法について詳しく説明します。'
allowTitleToDifferFromFilename: true
redirect_from:
  - /codespaces/codespaces-reference/about-codespaces
  - /github/developing-online-with-github-codespaces/about-github-codespaces
  - /github/developing-online-with-codespaces/about-codespaces
  - /codespaces/getting-started-with-codespaces/about-codespaces
  - /codespaces/about-codespaces
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
  - Codespaces
ms.openlocfilehash: 9d01df3f8dae7ceb788e2dd57b02fb3cc977400d
ms.sourcegitcommit: 1529de77bfcbe45519131b5f5fb3ab319758c2d2
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/14/2022
ms.locfileid: '148164324'
---
## codespace とは

codespace は、クラウドでホストされている開発環境です。 [構成ファイル](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)をリポジトリにコミットすることで、{% data variables.product.prodname_github_codespaces %} のプロジェクトをカスタマイズできます (コードとしての構成とよく呼ばれます)。これにより、プロジェクトのすべてのユーザーに対して繰り返し可能な codespace 構成が作成されます。

各 codespace は、{% data variables.product.prodname_dotcom %} によってホストされる仮想マシン上で実行されます。 必要なリソースに応じて、使用するマシンの種類を選ぶことができます。 2 コア プロセッサ、4 GB の RAM、32 GB のストレージから始まるさまざまな種類のマシンをお使いいただけます。 

codespace への接続には、ブラウザー、{% data variables.product.prodname_vscode %}、JetBrains Gateway アプリケーション、または {% data variables.product.prodname_cli %} を使うことができます。

![{% data variables.product.prodname_github_codespaces %} のしくみを示す図](/assets/images/help/codespaces/codespaces-diagram.png)

## {% data variables.product.prodname_github_codespaces %} の使用

クラウドベースのコンピューティング リソースを使用して開発を開始するには、テンプレートまたは任意のブランチから codespace を作成するか、リポジトリにコミットします。 テンプレートから codespace を作成する場合は、空白のテンプレートから開始するか、作業に適したテンプレートを選ぶことができます。

{% data reusables.codespaces.links-to-get-started %}

### 個人アカウントが所有する codespace の使用

すべての個人 {% data variables.product.prodname_dotcom_the_website %} アカウントには、無料または Pro プランに含まれる {% data variables.product.prodname_github_codespaces %} の無料使用の月次クォータがあります。 設定を変更したり、支払いの詳細を指定したりせずに、個人アカウントで {% data variables.product.prodname_github_codespaces %} を使い始めることができます。

クローンできる任意のリポジトリに対して codespace を作成して使うことができます。 テンプレートを使用して、最初はリポジトリに関連付けられていない codespace を作成することもできます。 Organization 所有のリポジトリから codespace を作成した場合、codespace の使用は Organization (Organization がこれに対して構成されている場合) または個人アカウントに対して課金されます。 テンプレートから作成された codespace は、常に個人アカウントに課金されます。 

{% data reusables.codespaces.codespaces-continue-by-paying %} 

### Organization 所有の codespace の使用

Organization の所有者は、{% data variables.product.prodname_github_codespaces %} の使用を有効にすることができ、Organization または Enterprise アカウントに対して課金できます。 これは、Organization が所有するリポジトリから作成された codespace に適用されます。 詳しくは、「[Organization での {% data variables.product.prodname_github_codespaces %} の有効化](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization)」をご覧ください。 Organization または Enterprise アカウントで {% data variables.product.prodname_github_codespaces %} を使用するための使用制限を設定できます。 詳しくは、「[{% data variables.product.prodname_github_codespaces %} の利用上限の管理](/billing/managing-billing-for-github-codespaces/managing-the-spending-limit-for-github-codespaces)」をご覧ください。

codespace の使用が Organization または Enterprise に課金される場合は、codespace の作成時に表示されます。 詳しくは、「[リポジトリの codespace を作成する](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository#creating-a-codespace-for-a-repository)」を参照してください。 組織、またはその親エンタープライズに課金される codespace は、組織によって所有され、組織の所有者が削除できます。 詳細については、「[codespace の削除](/codespaces/developing-in-codespaces/deleting-a-codespace#deleting-codespaces-in-your-organization)」を参照してください。 

### {% data variables.product.prodname_github_codespaces %} のカスタマイズ

codespace のランタイムとツールをカスタマイズするには、リポジトリ用に 1 つ以上の開発コンテナー構成を作成できます。 開発コンテナー構成をリポジトリに追加すると、ユーザーがリポジトリで実行する作業に適したさまざまな開発環境の選択肢を定義できます。 

開発コンテナーを構成せずに、リポジトリから codespace を作成する場合、{% data variables.product.prodname_github_codespaces %} によって、多くのツール、言語、ランタイム環境が含まれる既定の codespace イメージを含む環境に、リポジトリがクローンされます。 テンプレートから codespace を作成する場合は、既定のイメージの上のいくつかの初期構成から開始できます。 詳細については、[開発コンテナーの概要](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)に関するページをご覧ください。

パブリック [ドットファイル](https://dotfiles.github.io/tutorials/) リポジトリを使用して、codespace 環境の側面をカスタマイズできます。 ドットファイルを使用して、シェルのエイリアスと基本設定を設定したり、使用するツールの個人用設定をインストールしたりすることができます。 ブラウザーまたは {% data variables.product.prodname_vscode %} で {% data variables.product.prodname_github_codespaces %} を使う場合は、[設定同期](https://code.visualstudio.com/docs/editor/settings-sync) を使用して、{% data variables.product.prodname_vscode %} のローカル インストールで設定したのと同じ設定、キーボード ショートカット、スニペット、拡張機能を codespace エディターに付与できます。 

詳細については、「[codespace のカスタマイズ](/codespaces/customizing-your-codespace)」を参照してください。

## {% data variables.product.prodname_codespaces %} への請求

{% data variables.product.prodname_github_codespaces %} の価格、ストレージ、使用方法について詳しくは、「[{% data variables.product.prodname_github_codespaces %} の課金について](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces)」を参照してください。

{% data reusables.codespaces.codespaces-spending-limit-requirement %} 

{% data reusables.codespaces.codespaces-monthly-billing %} Organization オーナーと課金マネージャーが Organization での {% data variables.product.prodname_github_codespaces %} の利用制限を管理する方法については、「[{% data variables.product.prodname_github_codespaces %} の利用制限の管理](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-github-codespaces)」を参照してください。
