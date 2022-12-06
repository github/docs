---
title: GitHub Code Search (ベータ版) について
intro: 新しいコード検索 (ベータ版) を使用すると、GitHub 全体のコードを検索、移動、理解できます。
allowTitleToDifferFromFilename: true
versions:
  feature: github-code-search
topics:
  - GitHub search
ms.openlocfilehash: 8bf3232e87de2fc773f69bf5047e75ab0e52c7e2
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/09/2022
ms.locfileid: '148160227'
---
{% note %}

**注:** {% data reusables.search.code-search-code-view-beta-note %}

{% data reusables.search.code-view-link %}

{% endnote %}

## 新しいコード検索 (ベータ版) について

新しいコード検索 (ベータ版) を使用すると、コード、チームのコード、オープン ソース コミュニティのコードを、すべて {% data variables.product.prodname_dotcom_the_website %} からすばやく検索、ナビゲート、理解できます。 この検索エンジンは、正規表現、ブール演算、特殊な修飾子、シンボル検索を使用して GitHub 全体でのコード検索がスケーラブルで、コード対応になり、サポートされるように設計されています。 新しいコード検索 (ベータ版) の構文について詳しくは、「[GitHub Code Search (ベータ版) 構文について](/search-github/github-code-search/understanding-github-code-search-syntax)」を参照してください。

新しいコード検索エンジンに加えて、コード検索 (ベータ版) には、{% data variables.product.prodname_dotcom_the_website %} の検索インターフェイスに、検索候補、入力候補、検索を保存する機能などの新機能が含まれています。 新しい検索インターフェイスを使用すると、探しているものをより迅速かつ簡単に見つけることができます。 詳細については、「[GitHub Code Search (ベータ版) の使用](/search-github/github-code-search/using-github-code-search)」を参照してください。

{% data reusables.search.non-code-search-explanation %}

新しいコード検索 (ベータ版) は、{% data variables.product.prodname_dotcom_the_website %} の再設計されたコード ビュー (ベータ版) と緊密に統合されています。 {% data reusables.search.code-view-link %}

新しいコード検索 (ベータ版) と新しいコード ビューにアクセスするには、[Waitlist](https://github.com/features/code-search-code-view/signup) にサインアップします。 

## 新しいコード検索とコード ビューの有効化と無効化 (ベータ版)

{% data reusables.search.enabling-and-disabling-code-search-and-view-beta %}

## 制限事項

新しいコード検索 (ベータ版) 用に多数のパブリック リポジトリにインデックスを作成し、さらにインデックスを作成し続けます。 さらに、ベータ版の GitHub ユーザーのプライベート リポジトリは、既に GitHub.com 上のプライベート リポジトリにアクセスできるベータ版の参加者によってインデックスが作成され、検索可能になっています。 ただし、現時点では非常に大きなリポジトリにインデックスを作成できない場合があり、すべてのコードにインデックスが作成されるわけではありません。 

インデックス付きコードに関する現在の制限は次のとおりです。
   - ベンダー化されたコードと生成されたコードは除外されます ([Enry](https://github.com/go-enry/go-enry) によって決定されます)
   - 空のファイルと 350 KiB を超えるファイルは除外されます
   - UTF-8 でエンコードされたファイルのみが含まれます
   - 非常に大きなリポジトリにインデックスを作成できない場合があります

現在、リポジトリの既定のブランチでのコードの検索のみがサポートされています。

新しいコード検索 (ベータ版) を使用した検索の結果は、100 件の結果 (10 ページ) に制限されます。 現時点では、コード検索結果の並べ替えはサポートされていません。 この制限は、新しいコード検索 (ベータ版) を使用したコードの検索にのみ適用され、他の種類の検索には適用されません。

新しいコード検索 (ベータ版) では、`symbol:` 修飾子を使用したコード内のシンボル定義 (関数やクラス定義など) の検索がサポートされています。 ただし、`symbol:` 修飾子は定義のみを検索し、参照は検索しないこと、また、すべてのシンボル型または言語がまだ完全にサポートされているわけではないことに注意してください。 サポートされている言語の一覧については、「[シンボル修飾子](/search-github/github-code-search/understanding-github-code-search-syntax#symbol-qualifier)」を参照してください。

## フィードバックとサポート

[ディスカッション フォーラム](https://github.com/orgs/community/discussions/categories/code-search-and-navigation)では、新しいコード検索 (ベータ版) に関するフィードバックを表示して共有できます。
