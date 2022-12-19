---
title: タグを管理する
intro: '{% data variables.product.prodname_desktop %} を使用して、タグの作成、プッシュ、表示することができます。'
redirect_from:
  - /desktop/contributing-to-projects/managing-tags
  - /desktop/contributing-and-collaborating-using-github-desktop/managing-tags
versions:
  fpt: '*'
ms.openlocfilehash: 980e47f6e3300995f6312499b23768d6f0401f36
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145090129'
---
## {% data variables.product.prodname_desktop %} のタグについて

{% data variables.product.prodname_desktop %} を使用すると、アノテーションされたタグを作成できます。 タグはコミットに関連付けられているため、タグを使用して、リリースのバージョン番号など、リポジトリの履歴内の個々のポイントをマークできます。 リリース タグの詳細については、「[リリースについて](/github/administering-a-repository/about-releases)」を参照してください。

{% data reusables.desktop.tags-push-with-commits %}

## タグを作成する

{% data reusables.desktop.history-tab %} {% data reusables.desktop.create-tag %} {% data reusables.desktop.name-tag %} {% data reusables.desktop.confirm-tag %}

## タグを表示する

{% data reusables.desktop.history-tab %}
2. コミットをクリックします。
  {% note %}

  **注**: タグがリモート リポジトリにプッシュされていない場合、{% data variables.product.prodname_desktop %} には矢印 {% octicon "arrow-up" aria-label="The up arrow icon" %} が表示されます。

  {% endnote %}

  ![履歴でタグを表示する](/assets/images/help/desktop/viewing-tags-in-history.png)

3. コミットに関連付けられているすべてのタグは、そのコミットのメタデータに表示されます。
![コミットでタグを表示する](/assets/images/help/desktop/viewing-tags-in-commit.png)

## タグを削除する

{% note %}

**注**: まだプッシュされていないコミットに関連付けられているタグのみを削除できます。

{% endnote %}

{% data reusables.desktop.history-tab %} {% data reusables.desktop.delete-tag %}

## 参考資料

- Git ドキュメントの「[Git の基本 - タグ付け](https://git-scm.com/book/en/v2/Git-Basics-Tagging)」
