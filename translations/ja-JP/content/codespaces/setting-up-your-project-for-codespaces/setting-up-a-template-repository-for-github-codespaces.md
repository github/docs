---
title: GitHub Codespaces 用のテンプレート リポジトリを設定する
shortTitle: Set up a template repo
intro: '{% data variables.product.prodname_github_codespaces %} で使うテンプレート リポジトリを設定することで、ユーザーがプロジェクトを開始するのを手助けできます。'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
ms.openlocfilehash: 155aa9bf839301439d2746b4b6f0f0575d2e60ff
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159912'
---
## はじめに

テンプレート リポジトリを設定することで、ユーザーが {% data variables.product.prodname_github_codespaces %} でフレームワーク、ライブラリ、またはその他のプロジェクトを開始するのを手助けできます。 ユーザーは、クラウドベースの開発環境でテンプレート ファイルの操作をすぐに開始でき、リポジトリの複製や、ツールなどの依存関係のインストールについて気にする必要がありません。 一部の構成で、重要なファイルが既に編集用に開かれ、{% data variables.product.prodname_vscode_shortname %} Web エディター内のプレビュー ブラウザー タブでアプリケーションが既に実行されている codespace でユーザーを設定できるようになります。

テンプレート リポジトリへの読み取りアクセス権があればだれでも、{% data variables.product.product_name %} のリポジトリのページから codespace を作成できます。 既存のリポジトリをテンプレートに変換でき、ユーザーがテンプレート リポジトリから codespace を作成できるように設定を変更する必要はありません。 リポジトリをテンプレートに変換する方法について詳しくは、「[テンプレート リポジトリを作成する](/repositories/creating-and-managing-repositories/creating-a-template-repository)」を参照してください。

`https://github.com/codespaces/new?template_repository=OWNER/TEMPLATE-REPO` の形式でリンクを提供して、ユーザーをテンプレートの [新しい codespace の作成] ページに直接誘導できます。

![[新しい codespace の作成] ページのスクリーンショット](/assets/images/help/codespaces/create-a-new-codespace-page.png)

たとえば、フレームワークの使用を開始するためのチュートリアル内で、このリンクを提供できます。 リンク内の `OWNER/TEMPLATE-REPO` をお使いのテンプレート リポジトリの名前 (例: `monalisa/octo-template`) に置き換えます。

他のユーザーがテンプレートから codespace を作成すると、テンプレート リポジトリの内容がユーザーの codespace に複製されます。 ユーザーの準備ができたら、{% data variables.product.product_name %} 上で、その個人アカウントに属する新しいリポジトリに作業内容を公開できるようになります。 codespace の使用料金は、それを作成したユーザーに課金されます。 詳しくは、「[テンプレートから codespace を作成する](/codespaces/developing-in-codespaces/creating-a-codespace-from-a-template)」を参照してください。

## テンプレートについて説明する

テンプレート リポジトリ用の README がない場合は作成して、テンプレートの目的と使用開始方法について説明します。 詳細については、「[README について](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes)」を参照してください。

テンプレートの簡単な説明は、`https://github.com/codespaces/new?template_repository=OWNER/TEMPLATE-REPO` リンクをクリックしたユーザーに示される [新しい codespace の作成] ページに表示されます。 この説明は、リポジトリの作成時に設定できる **[説明]** フィールドから取得されます。 この説明はいつでも編集できます。リポジトリのページに移動し、ページの右側にある **[情報]** セクションの横にある **{% octicon "gear" aria-label="The Settings gear" %}** をクリックします。

![リポジトリ ページの [情報] セクションのスクリーンショット](/assets/images/help/repository/repository-settings-icon.png)

## スターター ファイルを追加する

ユーザーがライブラリ、フレームワーク、またはその他のテクノロジをすぐに使い始めることができるように、通常は、定型コードを含むスターター ファイルがテンプレート リポジトリに用意されています。

含めるファイルの種類に関するガイダンスについては、次のように、{% data variables.product.prodname_github_codespaces %} の公式 {% data variables.product.company_short %} テンプレートに含まれるスターター ファイルを確認できます。

{% data reusables.codespaces.your-codespaces-procedure-step %} {% data reusables.codespaces.view-all-templates-step %}
1. テンプレート用のファイルが含まれるテンプレート リポジトリを表示するには、テンプレートの名前をクリックします。

   ![[クイック スタート テンプレートの探索] セクションの [React] が強調表示されているスクリーンショット](/assets/images/help/codespaces/react-template-name.png)

## コンテナー イメージを構成する

開発コンテナー構成ファイルをテンプレート リポジトリに追加して、{% data variables.product.prodname_github_codespaces %} でテンプレートを使うユーザーの開発環境をカスタマイズできます。 {% data variables.product.prodname_vscode %} で定義済みの構成設定の一覧から選ぶか、独自の `devcontainer.json` ファイルを記述してカスタム構成を作成できます。 構成ファイルを追加しない場合は、既定のコンテナー イメージが使用されます。 詳しくは、「[開発コンテナーの概要](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)」と「[開発コンテナー構成をリポジトリに追加する](/codespaces/setting-up-your-project-for-codespaces/setting-up-your-project-for-codespaces)」を参照してください。

{% note %}

**注:** {% data reusables.codespaces.configuration-choice-templates %}

{% endnote %}

テンプレートを使ってユーザーに最適なエクスペリエンスを提供するには、ツールとカスタマイズを使って開発コンテナーを構成する必要があります。 たとえば、`devcontainer.json` ファイル内で、次のようにします。 
- `openFiles` プロパティを使って、テンプレートから codespace を作成するときに {% data variables.product.prodname_vscode_shortname %} Web クライアントで自動的に開くファイルの一覧を定義できます。
- テンプレートに Web アプリケーションのファイルを含めると、アプリケーションが、ユーザーの codespace で自動的に実行されるようにできます。 これを行うには、`postAttachCommand` プロパティを使って、{% data variables.product.prodname_vscode_shortname %} Web クライアントが codespace に接続するとすぐにローカル サーバーでアプリケーションを起動するスクリプトを実行し、ポートの `onAutoForward` プロパティを `openPreview` に設定して、{% data variables.product.prodname_vscode_shortname %} Web クライアントに埋め込まれたシンプルなブラウザー内に、そのポートで実行されているアプリケーションを表示します。

React テンプレートの次の構成設定によって、ユーザーのエディターで `app.js` ファイルが開き、`npm start` (`package.json` ファイルで定義) を実行してローカル サーバーを起動し、codespace のプレビュー ブラウザー タブにポート `3000` を転送します。

```JSON
{
    "postAttachCommand": {
      "server": "npm start",
    },

    "portsAttributes": {
      "3000": {
        "label": "Application",
        "onAutoForward": "openPreview"
      }
    },

    "customizations": {
      "codespaces": {
        "openFiles": ["src/App.js"]
      }
    }
}
```
詳しくは、「[リポジトリの codespace にあるファイルを自動的に開く](/codespaces/setting-up-your-project-for-codespaces/automatically-opening-files-in-the-codespaces-for-a-repository)」と、containers.dev の [開発コンテナーの仕様](https://containers.dev/implementors/json_reference/#general-properties)を参照してください。
