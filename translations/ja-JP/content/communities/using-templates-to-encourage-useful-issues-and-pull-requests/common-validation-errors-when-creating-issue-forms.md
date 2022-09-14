---
title: Issue フォームを作成するときの一般的な検証エラー
intro: issue フォームを作成、保存、または表示すると、これらの一般的な検証エラーの一部が表示されることがあります。
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Community
ms.openlocfilehash: 55eae6e043f82bfbaa49f7af42e23e4cb56f0ee8
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147650342'
---
<!--UI-LINK: We link to individual anchors within this file from the issue template editor when the given YAML error is thrown. Links to and anchors within this file should be preserved or should be updated in github/github if they are changed -->
{% data reusables.community.issue-forms-beta %}

## 必須の最上位レベルのキー `name` が欠落しています

テンプレートに `name` フィールドが含まれていません。つまり、ユーザーにオプションのリストを示すときに Issue テンプレートを呼び出す内容が明確ではありません。

### 例

```yaml
description: "Thank you for reporting a bug!"
...
```

このエラーは、キーとして `name` を追加することで修正できます。

```yaml
name: "Bug report"
description: "Thank you for reporting a bug!"
...
```

## `key` は文字列である必要があります

このエラー メッセージは、許可されたキーは指定されていますが、データの種類がサポートされていないため、その値を解析できないことを意味します。

### 例

以下の `description` はブール値として解析されていますが、文字列である必要があります。

```yaml
name: "Bug report"
description: true
...
```

このエラーは、値として文字列を指定することで修正できます。 文字列を正しく解析するには、二重引用符で囲む必要がある場合があります。 たとえば、`'` を含む文字列は二重引用符で囲む必要があります。

```yaml
name: "Bug report"
description: "true"
...
```

空の文字列、または空白のみで構成される文字列は、フィールドで文字列が必要な場合にも許可されません。

```yaml
name: ""
description: "File a bug report"
assignees: "      "
...
```

このエラーは、値を空以外の文字列に修正することで修正できます。 フィールドが必要ない場合は、キーと値のペアを削除する必要があります。

```yaml
name: "Bug Report"
description: "File a bug report"
...
```

## `input` が許可されているキーではありません

テンプレートの最上位レベルで予期しないキーが指定されました。 サポートされている最上位レベルのキーの詳細については、「[Issue フォームの構文](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-issue-forms#top-level-syntax)」を参照してください。

### 例

```yaml
name: "Bug report"
hello: world
...
```

このエラーは予期しないキーを削除することで修正できます。

```yaml
name: "Bug report"
...
```

## 禁止されているキー

YAML では特定の文字列を `Boolean` 値として解析します。 これを回避するために、次のキーの使用を明示的に禁止しています。

`y`, `Y`, `yes`, `Yes`, `YES`, `n`, `N`, `no`, `No`, `NO`, `true`, `True`, `TRUE`, `false`, `False`, `FALSE`, `on`, `On`, `ON`, `off`, `Off`, `OFF`

このエラーは、禁止されているキーを削除することで修正できます。

## 本文には、マークダウン以外のフィールドが少なくとも 1 つ含まれている必要があります

Issue フォームではユーザー入力を受け入れる必要があります。つまり、そのフィールドの少なくとも 1 つにユーザー入力フィールドが含まれている必要があります。 `markdown` 要素は静的テキストであるため、`body` 配列に `markdown` 要素のみを含めることはできません。

### 例

```yaml
name: "Bug report"
body:
- type: markdown
  attributes:
    value: "Bugs are the worst!"
```

このエラーは、ユーザー入力を受け入れるマークダウン以外の要素を追加することで修正できます。

```yaml
name: "Bug report"
body:
- type: markdown
  attributes:
    value: "Bugs are the worst!"
- type: textarea
  attributes:
    label: "What's wrong?"
```

## 本文には一意の ID が必要です

`id` 属性を使用して複数の要素を区別する場合、各 `id` 属性は一意である必要があります。

### 例

```yaml
name: "Bug report"
body:
- type: input
  id: name
  attributes:
    label: First name
- type: input
  id: name
  attributes:
    label: Last name
```

このエラーは、これらの入力のいずれかの `id` を変更し、すべての `input` フィールドが一意の `id` 属性を持つように変更することで修正できます。

```yaml
name: "Bug report"
body:
- type: input
  id: name
  attributes:
    label: First name
- type: input
  id: surname
  attributes:
    label: Last name
```

## 本文には一意のラベルが必要です

ユーザー入力を受け入れる `body` 要素が複数ある場合、各ユーザー入力フィールドの `label` 属性は一意である必要があります。

### 例

```yaml
name: "Bug report"
body:
- type: textarea
  attributes:
    label: Name
- type: textarea
  attributes:
    label: Name
```

このエラーは、いずれかの入力フィールドの `label` 属性を変更し、各 `label` が必ず一意であるようにすることで、修正できます。

```yaml
name: "Bug report"
body:
- type: textarea
  attributes:
    label: Name
- type: textarea
  attributes:
    label: Operating System
```

入力フィールドは、`id` 属性によって区別することもできます。 重複する `label` 属性が必要な場合は、少なくとも 1 つの `id` を指定して、同じラベルを持つ 2 つの要素を区別できます。

```yaml
name: "Bug report"
body:
- type: textarea
  id: name_1
  attributes:
    label: Name
- type: textarea
  id: name_2
  attributes:
    label: Name
```

`id` 属性は Issue 本文に表示されません。 結果の Issue のフィールドを区別する場合は、個別の `label` 属性を使用する必要があります。


## ラベルが似すぎています

似たようなラベルは同じ参照に処理される場合があります。 `id` 属性が `input` に対して指定されていない場合、`input` フィールドへの参照を生成するために `label` 属性が使用されます。 これを行うには、Rails の [parameterize](https://apidock.com/rails/ActiveSupport/Inflector/parameterize) メソッドを利用して `label` を処理します。 場合によっては、異なる 2 つのラベルを同じパラメーター化された文字列に処理できます。

### 例

```yaml
name: "Bug report"
body:
- type: input
  attributes:
    label: Name?
- type: input
  id: name
  attributes:
    label: Name???????
```

このエラーは、少なくとも 1 つの差別化英数字、`-`、または `_` を競合するラベルのいずれかに追加することで修正できます。

```yaml
name: "Bug report"
body:
- type: input
  attributes:
    label: Name?
- type: input
  attributes:
    label: Your name
```

このエラーは、競合するラベルのいずれかに一意の `id` を付けることで修正することもできます。

```yaml
name: "Bug report"
body:
- type: input
  attributes:
    label: Name?
- type: input
  id: your-name
  attributes:
    label: Name???????
```

## checkboxes には一意のラベルが必要です

`checkboxes` 要素が存在する場合、その入れ子になった各ラベルは、そのピアと他の入力の種類の間で一意である必要があります。

### 例

```yaml
name: "Bug report"
body:
- type: textarea
  attributes:
    label: Name
- type: checkboxes
  attributes:
    options:
    - label: Name
```

このエラーは、これらの入力のいずれかの `label` 属性を変更することで修正できます。

```yaml
name: "Bug report"
body:
- type: textarea
  attributes:
    label: Name
- type: checkboxes
  attributes:
    options:
    - label: Your name
```

または、競合する最上位レベルの要素に対して `id` を指定することもできます。 入れ子になった checkbox 要素では `id` 属性はサポートされていません。

```yaml
name: "Bug report"
body:
- type: textarea
  id: name_1
  attributes:
    label: Name
- type: checkboxes
  attributes:
    options:
    - label: Name
```

`id` 属性は Issue 本文に表示されません。 結果の Issue のフィールドを区別する場合は、個別の `label` 属性を使用する必要があります。

## Body[i]: 必須のキーの種類が欠落しています

各本文ブロックにはキー `type` が含まれている必要があります。

`body` に関するエラーの先頭には `body[i]` があります。ここで `i` は、エラーを含む本文ブロックのゼロから始まるインデックスを表します。 たとえば、`body[0]` は、`body` リストの最初のブロックが原因でエラーが発生したことを示します。

### 例

```yaml
body:
- attributes:
    value: "Thanks for taking the time to fill out this bug! If you need real-time help, join us on Discord."
```

このエラーは、値として入力の種類が有効な `type` を追加することで修正できます。 使用可能な `body` の入力の種類とその構文については、「[{% data variables.product.prodname_dotcom %} のフォーム スキーマの構文](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-githubs-form-schema#keys)」を参照してください。

```yaml
body:
- type: markdown
  attributes:
    value: "Thanks for taking the time to fill out this bug! If you need real-time help, join us on Discord."
```

## Body[i]: `x` が有効な入力の種類ではありません

本体ブロックの 1 つに、[許可されている種類](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-githubs-form-schema#keys)の 1 つではない種類の値が含まれています。

`body` に関するエラーの先頭には `body[i]` があります。ここで `i` は、エラーを含む本文ブロックのインデックスを表します。 たとえば、`body[0]` は、`body` リストの最初のブロックが原因でエラーが発生したことを示します。

### 例

```yaml
body:
- type: x
  attributes:
    value: "Thanks for taking the time to fill out this bug! If you need real-time help, join us on Discord."
```

エラーは、`x` を有効な種類のいずれかに変更することで修正できます。

```yaml
body:
- type: markdown
  attributes:
    value: "Thanks for taking the time to fill out this bug! If you need real-time help, join us on Discord."
```

## Body[i]: 必須の属性キー `value` が欠落しています

必須の `value` 属性の 1 つが指定されていません。 このエラーは、ブロックに `attributes` キーがない場合、または `attributes` キーの下に `value` キーがない場合に発生します。

`body` に関するエラーの先頭には `body[i]` があります。ここで `i` は、エラーを含む本文ブロックのインデックスを表します。 たとえば、`body[0]` は、`body` リストの最初のブロックが原因でエラーが発生したことを示します。

### 例

```yaml
body:
- type: markdown
  attributes:
    value: "Thanks for taking the time to fill out this bug! If you need real-time help, join us on Discord."
- type: markdown
```

この例のエラーは、`body` の 2 番目のリスト要素の `attributes` の下にキーとして `value` を追加することで修正できます。

```yaml
body:
- type: markdown
  attributes:
    value: "Thanks for taking the time to fill out this bug! If you need real-time help, join us on Discord."
- type: markdown
  attributes:
    value: "This is working now!"
```

## Body[i]: ラベルは文字列である必要があります

その `attributes` ブロック内で、値のデータ型が間違っています。

`body` に関するエラーの先頭には `body[i]` があります。ここで `i` は、エラーを含む本文ブロックのインデックスを表します。 たとえば、`body[0]` は、`body` リストの最初のブロックが原因でエラーが発生したことを示します。

### 例

以下の `label` はブール値として解析されていますが、文字列である必要があります。


```yaml
body:
- type: markdown
  attributes:
    value: "Thanks for taking the time to fill out this bug! If you need real-time help, join us on Discord."
- type: textarea
  attributes:
    label: Bug Description
- type: textarea
  attributes:
    label: true
```

このエラーは、`label` に対して文字列値を指定することで修正できます。 ブール値、整数、または 10 進数として解析できる `label` 値を使用する場合は、その値を引用符で囲む必要があります。 たとえば、`true` や `1.3` ではなく、`"true"` や `"1.3"` とします。

```yaml
- type: markdown
  attributes:
    value: "Thanks for taking the time to fill out this bug! If you need real-time help, join us on Discord."
- type: textarea
  attributes:
    label: Bug Description
- type: textarea
  attributes:
    label: Environment Details
```

空の文字列、または空白のみで構成される文字列は、属性で文字列が必要な場合に許可されません。 たとえば、`""` や `"     "` は許可されません。

属性が必要な場合、値は空ではない文字列である必要があります。 フィールドが必要ない場合は、キーと値のペアを削除する必要があります。

```yaml
body:
- type: input
  attributes:
    label: "Name"
```

## Body[i]: `id` に含めることができるのは数字、文字、-、_ のみです

`id` 属性に含めることができるのは、英数字、`-`、および `_` のみです。 テンプレートの `id` には、空白などの許可されていない文字が含まれる場合があります。

`body` に関するエラーの先頭には `body[i]` があります。ここで `i` は、エラーを含む本文ブロックのインデックスを表します。 たとえば、`body[0]` は、`body` リストの最初のブロックが原因でエラーが発生したことを示します。

### 例

```yaml
name: "Bug report"
body:
- type: input
  id: first name
  attributes:
    label: First name
```

空白やその他の許可されていない文字が確実に `id` 値から削除されるようにすることで、このエラーを修正できます。

```yaml
name: "Bug report"
body:
- type: input
  id: first-name
  attributes:
    label: First name
```

## Body[i]: `x` は許可されているキーではありません

予期しないキー `x` が、`type` および `attributes` と同じインデント レベルで指定されました。

`body` に関するエラーの先頭には `body[i]` があります。ここで `i` は、エラーを含む本文ブロックのインデックスを表します。 たとえば、`body[0]` は、`body` リストの最初のブロックが原因でエラーが発生したことを示します。

### 例

```yaml
body:
- type: markdown
  x: woof
  attributes:
    value: "Thanks for taking the time to fill out this bug! If you need real-time help, join us on Discord."
```

このエラーは、余分なキーを削除し、`type`、`attributes`、および `id` のみを使用することで修正できます。

```yaml
body:
- type: markdown
  attributes:
    value: "Thanks for taking the time to fill out this bug! If you need real-time help, join us on Discord."
```

## Body[i]: `label` に禁止された単語が含まれています

GitHub Issues で個人情報と資格情報が公開されるリスクを最小限に抑えるために、攻撃者が一般的に使用する一部の単語は、入力や textarea 要素の `label` では許可されません。

`body` に関するエラーの先頭には `body[i]` があります。ここで `i` は、エラーを含む本文ブロックのインデックスを表します。 たとえば、`body[0]` は、`body` リストの最初のブロックが原因でエラーが発生したことを示します。

### 例

```yaml
body:
- type: markdown
  attributes:
    value: Hello world!
- type: input
  attributes:
    label: Password
```

このエラーは、すべての `label` フィールドから "password" のような用語を削除することで修正できます。

```yaml
body:
- type: markdown
  attributes:
    value: Hello world!
- type: input
  attributes:
    label: Username
```

## Body[i]: `x` は許可されている属性ではありません

無効なキーが `attributes` ブロックに指定されています。

`body` に関するエラーの先頭には `body[i]` があります。ここで `i` は、エラーを含む本文ブロックのインデックスを表します。 たとえば、`body[0]` は、`body` リストの最初のブロックが原因でエラーが発生したことを示します。

### 例

```yaml
body:
- type: markdown
  attributes:
    x: "a random key!"
    value: "Thanks for taking the time to fill out this bug!"
```

このエラーは、余分なキーを削除し、許可されている属性のみを使用することで修正できます。

```yaml
body:
- type: markdown
  attributes:
    value: "Thanks for taking the time to fill out this bug!"
```

## Body[i]: `options` は一意である必要があります

checkboxes とドロップダウン入力の種類の場合、`options` 配列で定義されている選択肢は一意である必要があります。

`body` に関するエラーの先頭には `body[i]` があります。ここで `i` は、エラーを含む本文ブロックのインデックスを表します。 たとえば、`body[0]` は、`body` リストの最初のブロックが原因でエラーが発生したことを示します。

### 例

```yaml
body:
- type: dropdown
  attributes:
    label: Favorite dessert
    options:
      - ice cream
      - ice cream
      - pie
```

`options` 配列に重複する選択肢が確実に存在しないようにすることで、エラーを修正できます。

```yaml
body:
- type: dropdown
  attributes:
    label: Favorite dessert
    options:
      - ice cream
      - pie
```

## Body[i]: `options` に予約語 none を含めることはできません

"None" は `options` セット内の予約語です。これは、`dropdown` が不要な場合に非選択を示すために使用されるためです。

`body` に関するエラーの先頭には `body[i]` があります。ここで `i` は、エラーを含む本文ブロックのインデックスを表します。 たとえば、`body[0]` は、`body` リストの最初のブロックが原因でエラーが発生したことを示します。

### 例

```yaml
body:
- type: dropdown
  attributes:
    label: What types of pie do you like?
    options:
      - Steak & Ale
      - Chicken & Leek
      - None
  validations:
    required: true
```

このエラーは、オプションとして "None" を削除することで修正できます。 コントリビューターがこのような種類のいずれのパイも好みでないことを示せるようにする場合は、さらに `required` 検証を削除できます。

```yaml
body:
- type: dropdown
  attributes:
    label: What types of pie do you like?
    options:
      - Steak & Ale
      - Chicken & Leek
```

この例では、選択可能なオプションとして "None" が自動的に設定されます。

## Body[i]: `options` にブール値を含めることはできません。 'yes' や 'true' など、値を引用符で囲んでください

引用符で囲まれている場合を除き、YAML パーサーによってブール値に処理されるようになる英単語がいくつかあります。 ドロップダウンの `options` の場合、すべての項目はブール値ではなく文字列である必要があります。

`body` に関するエラーの先頭には `body[i]` があります。ここで `i` は、エラーを含む本文ブロックのインデックスを表します。 たとえば、`body[0]` は、`body` リストの最初のブロックが原因でエラーが発生したことを示します。

### 例

```yaml
body:
- type: dropdown
  attributes:
    label: Do you like pie?
    options:
      - Yes
      - No
      - Maybe
```

問題のある各オプションを引用符で囲んで、ブール値として処理されないようにすることで、このエラーを修正できます。

```yaml
body:
- type: dropdown
  attributes:
    label: Do you like pie?
    options:
      - "Yes"
      - "No"
      - Maybe
```

## 本体を空にすることはできない

テンプレート本体の `key:value` のペアを空にすることはできません。 必要な最上位レベルのキーについて詳しくは、「[Issue フォームの構文](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-issue-forms#top-level-syntax)」をご覧ください。

このエラーは、`body:` セクションを追加することで修正できます。

### 例

```yaml
name: Support Request
description: Something went wrong and you need help?
---
body:
- type: textarea
  attributes:
    label: "What's wrong?"
```

この例では、ヘッダーと `body` セクションの間の `---` (ドキュメント区切り記号) を削除することで、エラーを修正できます。

```yaml
name: Support Request
description: Something went wrong and you need help?

body:
- type: textarea
  attributes:
    label: "What's wrong?"
```

## 参考資料

- [YAML](https://yaml.org/)
- [Issue フォームの構文](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-issue-forms)
