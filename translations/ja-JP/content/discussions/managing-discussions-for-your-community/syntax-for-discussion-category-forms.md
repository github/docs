---
title: ディスカッション カテゴリ フォームの構文
shortTitle: Syntax for discussion category forms
intro: YAML 構文を使用すると、ディスカッション カテゴリ フォームのフィールドを定義できます。
versions:
  feature: discussion-category-forms
ms.openlocfilehash: 73bb77967d5a7db3452e067c35d567a8279a0cb2
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193564'
---
{% data reusables.discussions.discussion-category-forms-beta %}

## ディスカッション カテゴリ フォームの YAML 構文について

YAML フォーム定義ファイルをリポジトリの `/.github/DISCUSSION_TEMPLATE/` フォルダーに追加することで、カスタム ディスカッション カテゴリ フォームを作成できます。 {% data reusables.actions.learn-more-about-yaml %} 

{% data reusables.discussions.discussion-category-forms-name %}

フィールドごとに、入力の種類、検証、および既定のラベルを定義できます。

コミュニティ メンバーがディスカッション フォームに入力すると、それぞれの入力に対する回答が Markdown に変換され、ディスカッションの本文に追加されます。 コミュニティ メンバーは、ディスカッション フォームで作成されたディスカッションを編集でき、他のユーザーは、他の方法で作成されたディスカッションのようにディスカッションとやり取りできます。

この YAML 構成ファイルの例では、一般的なディスカッション カテゴリ フォームを定義します。

{% data reusables.discussions.discussion-category-forms-sample %}

## 最上位の構文

ディスカッション カテゴリ フォームの構成ファイルには `body` キーが含まれている必要があり、`body` には少なくとも 1 つの Markdown 以外のフィールドが含まれている必要があります。

```YAML{:copy}
body:
- type: input
  id: suggestion
  attributes:
    label: Suggestion
    description: "How might we make this project better?"
    placeholder: "Adding a CODE_OF_CONDUCT.md file would be a great idea."
  validations:
    required: true
```

各 Issue フォームに次の最上位のキーを設定できます。

| Key | 説明 | 必須 | 型 |
| :-- | :-- | :-- | :-- | :-- |
| `body` | ディスカッション フォームでの入力の種類の定義。 | 必須 | Array |
| `labels` | このテンプレートで作成されたディスカッションに自動的に追加されるラベル。 | オプション | 配列またはコンマ区切りの文字列 |
| `title` | ディスカッション送信フォームに事前に設定される既定のタイトル。 | オプション | String |

フォームにフィールドを追加するには、フォーム要素の配列を `body` キーに含めます。 使用可能な要素とその構文の一覧については、「[{% data variables.product.prodname_dotcom %} のフォーム スキーマの構文](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-githubs-form-schema)」を参照してください。
