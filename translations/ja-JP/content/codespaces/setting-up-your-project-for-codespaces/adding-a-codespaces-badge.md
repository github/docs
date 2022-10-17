---
title: '[GitHub Codespaces で開く] バッジの追加'
shortTitle: Add a Codespaces badge
intro: リポジトリ内の Markdown ファイルにバッジを追加し、ユーザーがクリックして codespace を作成できるようにすることができます。
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
product: '{% data reusables.gated-features.codespaces %}'
ms.openlocfilehash: 4a45c11adc5d09888e6bb65b49b9f997f5233fea
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/09/2022
ms.locfileid: '147783131'
---
## 概要

Markdown ファイルに [{% data variables.product.prodname_github_codespaces %} で開く] バッジを追加すると、リポジトリの codespace を簡単に作成できます。

![README ページの Codespaces バッジのスクリーンショット](/assets/images/help/codespaces/codespaces-badge-on-readme.png)

バッジを作成するときに、そのバッジで作成される codespace に対して特定の構成オプションを選ぶことができます。

ユーザーがバッジをクリックすると、codespace の作成用の [詳細オプション] ページに移動します。選んだオプションは事前に選択されています。 詳細オプション ページについて詳しくは、「[codespace の作成](https://docs-internal-30445-bfc9ce.preview.ghdocs.com/en/codespaces/developing-in-codespaces/creating-a-codespace#creating-a-codespace)」を参照してください。

[詳細オプション] ページから、ユーザーは必要に応じて事前に選択された設定を変更し、 **[codespace の作成]** をクリックできます。

{% note %}

**注**: {% data variables.product.prodname_github_codespaces %} にまだアクセスできないユーザーは、このバッジをクリックすると 404 メッセージが表示されることに注意してください。

{% endnote %}

## [{% data variables.product.prodname_github_codespaces %} で開く] バッジの作成

{% data reusables.repositories.navigate-to-repo %}
1. リポジトリ名の下で、[ブランチ] ドロップダウンメニューを使用して、バッジを作成するブランチを選択します。

   ![[ブランチ] ドロップダウン メニューのスクリーンショット](/assets/images/help/codespaces/branch-drop-down.png)

1. **[{% octicon "code" aria-label="The code icon" %} コード]** ボタンをクリックし、 **[Codespaces]** タブをクリックします。

   ![[新しい codespace] ボタンのスクリーンショット](/assets/images/help/codespaces/new-codespace-button.png)

1. **[ブランチで codespace を作成する]** ボタンの横にある下矢印をクリックし、 **[codespace の構成と作成]** をクリックしてから、 **[codespace の構成と作成]** ボタンをクリックします。

   ![[codespace の構成と作成] オプションのスクリーンショット](/assets/images/help/codespaces/configure-and-create-option.png)

1. codespace 作成の [詳細オプション] ページで、各フィールドで事前に選択される値を選びます。

   ![[詳細オプション] ページのスクリーンショット](/assets/images/help/codespaces/advanced-options.png)

1. ブラウザーのアドレス バーから URL をコピーします。
1. たとえば、リポジトリの `README.md` ファイルに次の Markdown を追加します。

   ```Markdown{:copy}
   [![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](COPIED-URL)
   ```

   次に例を示します。

   ```Markdown
   [![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://github.com/codespaces/new?hide_repo_select=true&ref=main&repo=0000000&machine=premiumLinux&devcontainer_path=.devcontainer%2Fdevcontainer.json&location=WestUs2)
   ```

   上記の例では、`0000000` がリポジトリの参照番号になります。 URL のその他の詳細は、[詳細オプション] ページのフィールドで選んだ値によって決まります。
