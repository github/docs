---
title: GitHub Codespaces の概要
shortTitle: Overview
product: '{% data reusables.gated-features.codespaces %}'
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
ms.openlocfilehash: ea92784b32d63e5f5d9268a1077009ea7bf8b382
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147111219'
---
## codespace とは

codespace は、クラウドでホストされている開発環境です。 [構成ファイル](/codespaces/customizing-your-codespace/configuring-codespaces-for-your-project)をリポジトリにコミットすることで、{% data variables.product.prodname_github_codespaces %} のプロジェクトをカスタマイズできます (コードとしての構成とよく呼ばれます)。これにより、プロジェクトのすべてのユーザーに対して繰り返し可能な codespace 構成が作成されます。

{% data variables.product.prodname_github_codespaces %} は、{% data variables.product.product_location %} によってホストされるさまざまな VM ベースのコンピューティング オプションで実行されます。2 コアのコンピューターから最大 32 コアのコンピューターまで構成できます。 codespace には、ブラウザーから、または {% data variables.product.prodname_vscode %} を使用してローカルに、接続できます。

![{% data variables.product.prodname_codespaces %} のしくみを示す図](/assets/images/help/codespaces/codespaces-diagram.png)

## {% data variables.product.prodname_github_codespaces %} の使用

任意のブランチから codespace を作成するか、リポジトリにコミットして、クラウドベースのコンピューティング リソースを使用した開発を開始できます。 {% data reusables.codespaces.links-to-get-started %}

codespace のランタイムとツールをカスタマイズするには、リポジトリ用に 1 つ以上の開発コンテナー構成を作成できます。 開発コンテナー構成をリポジトリに追加すると、ユーザーがリポジトリで実行する作業に適したさまざまな開発環境の選択肢を定義できます。 

開発コンテナー構成を追加しない場合、{% data variables.product.prodname_github_codespaces %} によって、多くのツール、言語、ランタイム環境が含まれる既定の codespace イメージを含む環境に、リポジトリがクローンされます。 詳細については、「[開発コンテナーの概要](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project)」をご覧ください。

パブリックの [dotfiles](https://dotfiles.github.io/tutorials/) リポジトリと[設定同期](https://code.visualstudio.com/docs/editor/settings-sync)を使用して、codespace 環境の側面をパーソナル化することもできます。パーソナル化には、シェルの基本設定、追加のツール、エディターの設定、{% data variables.product.prodname_vscode_shortname %} 拡張機能を含めることができます。 詳細については、「[codespace のカスタマイズ](/codespaces/customizing-your-codespace)」を参照してください。

## {% data variables.product.prodname_codespaces %} の支払いについて

{% data variables.product.prodname_codespaces %} の価格、ストレージ、使用の詳細については、[{% data variables.product.prodname_codespaces %} の課金の管理](/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces)に関するページを参照してください。

{% data reusables.codespaces.codespaces-spending-limit-requirement %}組織の所有者と課金マネージャーが組織の {% data variables.product.prodname_codespaces %} の使用制限を管理する方法については、「[{% data variables.product.prodname_codespaces %} の利用制限の管理](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)」を参照してください。
