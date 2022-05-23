---
title: GitHub のフォームスキーマの構文
intro: '{% data variables.product.company_short %} のフォームスキーマを使用して、サポートされている機能のフォームを設定できます。'
versions:
  fpt: '*'
  ghec: '*'
miniTocMaxHeadingLevel: 3
topics:
  - Community
---

{% note %}

**注釈:** {% data variables.product.company_short %} のフォームスキーマは現在ベータであり、変更される可能性があります。

{% endnote %}

## {% data variables.product.company_short %} のフォームスキーマについて

{% data variables.product.company_short %} のフォームスキーマを使用して、サポートされている機能のフォームを設定できます。 詳しい情報については、「[リポジトリ用に Issue テンプレートを設定する](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository#creating-issue-forms)」を参照してください。

フォームは、ユーザ入力を要求するための要素のセットです。 フォームを設定するには、フォーム要素の配列である YAML フォーム定義を作成します。 各フォーム要素は、要素のタイプ、要素のプロパティ、および要素に適用する制約を決定するキー/値ペアのセットです。 一部のキーでは、値はキー/値ペアの別のセットです。

たとえば、次のフォーム定義には、ユーザのオペレーティングシステムを提供するためのテキスト領域、ユーザが実行しているソフトウェアバージョンを選択するためのドロップダウンメニュー、行動規範を確認するためのチェックボックス、およびフォームへの入力を完了したユーザに感謝する Markdown の 4 つのフォーム要素が含まれます。

```yaml{:copy}
- type: textarea
  attributes:
    label: Operating System
    description: What operating system are you using?
    placeholder: Example: macOS Big Sur
    value: operating system
  validations:
    required: true
- type: dropdown
  attributes:
    label: Version
    description: What version of our software are you running?
    multiple: false
    options:
      - label: 1.0.2 (Default)
      - label: 1.0.3 (Edge)
  validations:
    required: true
- type: checkboxes
  attributes:
    label: Code of Conduct
    description: The Code of Conduct helps create a safe space for everyone. We require
      that everyone agrees to it.
    options:
      - label: I agree to follow this project's [Code of Conduct](link/to/coc)
        required: true
- type: markdown
  attributes:
    value: "Thanks for completing our form!"
```

## キー

フォーム要素ごとに、次のキーを設定できます。

| キー            | 説明                                                                                                                                                                            | 必須 | 種類   | デフォルト                                           | 有効な値                                            |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -- | ---- | ----------------------------------------------- | ----------------------------------------------- |
| `type`        | 定義する要素のタイプ。                                                                                                                                                                   | 必須 | 文字列型 | {% octicon "dash" aria-label="The dash icon" %} | <ul><li>`checkboxes`</li><li>`dropdown`</li><li>`input`</li><li>`markdown`</li><li>`textarea`</li></ul>                       |
| `id`          | The identifier for the element, except when `type` is set to `markdown`. {% data reusables.form-schema.id-must-be-unique %} 指定されている場合、`id` は URL クエリパラメータの事前入力のフィールドの正規識別子です。 | 任意 | 文字列型 | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %}
| `属性`          | 要素のプロパティを定義するキー/値ペアのセット。                                                                                                                                                      | 必須 | ハッシュ | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %}
| `validations` | 要素に制約を設定するキー/値ペアのセット。                                                                                                                                                         | 任意 | ハッシュ | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %}

以下のタイプのフォーム要素から選択できます。 各タイプには、固有の属性と検証があります。

| 種類                          | 説明                                                   |
| --------------------------- | ---------------------------------------------------- |
| [`markdown`](#markdown)     | ユーザに追加のコンテキストを提供するためにフォームに表示されるが、**未送信**のマークダウンテキスト。 |
| [`textarea`](#textarea)     | 複数行のテキストフィールド。                                       |
| [`input`](#input)           | 単一行のテキストフィールド。                                       |
| [`ドロップダウン`](#dropdown)      | ドロップダウンメニュー。                                         |
| [`checkboxes`](#checkboxes) | チェックボックスのセット。                                        |

### `markdown`

`markdown` 要素を使用して、ユーザに追加のコンテキストを提供する Markdown をフォームに表示できますが、これは送信されません。

#### 属性

{% data reusables.form-schema.attributes-intro %}

| キー      | 説明                                             | 必須 | 種類   | デフォルト                                           | 有効な値                                            |
| ------- | ---------------------------------------------- | -- | ---- | ----------------------------------------------- | ----------------------------------------------- |
| `value` | そのテキストはレンダリングされます。 Markdown フォーマットはサポートされています。 | 必須 | 文字列型 | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %}

{% tip %}

**参考:** YAML 処理では、ハッシュ記号がコメントとして扱われます。 Markdown ヘッダを挿入するには、テキストを引用符で囲みます。

複数行のテキストの場合は、パイプ演算子を使用できます。

{% endtip %}

#### サンプル

```YAML{:copy}
body:
- type: markdown
  attributes:
    value: "## Thank you for contributing to our project!"
- type: markdown
  attributes:
    value: |
      Thanks for taking the time to fill out this bug report.
```

### `textarea`

`textarea` 要素を使用して、フォームに複数行のテキストフィールドを追加できます。 コントリビューターは、`textarea` フィールドにファイルを添付することもできます。

#### 属性

{% data reusables.form-schema.attributes-intro %}

| キー            | 説明                                                                                          | 必須 | 種類   | デフォルト                                           | 有効な値                                                                                                                                                                    |
| ------------- | ------------------------------------------------------------------------------------------- | -- | ---- | ----------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ラベル`         | 予想されるユーザ入力の簡単な説明。これもフォームに表示されます。                                                            | 必須 | 文字列型 | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %}
| `説明`          | フォームに表示される、コンテキストまたはガイダンスを提供するテキスト領域の説明。                                                    | 任意 | 文字列型 | 空の文字列                                           | {% octicon "dash" aria-label="The dash icon" %}
| `placeholder` | 空のときにテキスト領域に表示される半透明のプレースホルダ。                                                               | 任意 | 文字列型 | 空の文字列                                           | {% octicon "dash" aria-label="The dash icon" %}
| `value`       | テキスト領域に事前入力されているテキスト。                                                                       | 任意 | 文字列型 | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %}
| `render`      | 値が指定されている場合、送信されたテキストはコードブロックにフォーマットされます。 このキーを指定すると、添付ファイルや Markdown 編集のためにテキスト領域が拡張されません。 | 任意 | 文字列型 | {% octicon "dash" aria-label="The dash icon" %} | {% data variables.product.prodname_dotcom %} に知られている言語。 詳しい情報については、[言語の YAML ファイル](https://github.com/github/linguist/blob/master/lib/linguist/languages.yml)を参照してください。 |

#### 検証

{% data reusables.form-schema.validations-intro %}

| キー | 説明 | 必須 | 種類 | デフォルト | 有効な値 |
| -- | -- | -- | -- | ----- | ---- |
|    |    |    |    |       |      |
{% data reusables.form-schema.required-key %}

#### サンプル

```YAML{:copy}
body:
- type: textarea
  id: repro
  attributes:
    label: Reproduction steps
    description: "How do you trigger this bug? Please walk us through it step by step."
    value: |
      1.
      2.
      3.
      ...
    render: bash
  validations:
    required: true
```

### `input`

`input` 要素を使用して、フォームに単一のテキストフィールドを追加できます。

#### 属性

{% data reusables.form-schema.attributes-intro %}

| キー            | 説明                                      | 必須 | 種類   | デフォルト                                           | 有効な値                                            |
| ------------- | --------------------------------------- | -- | ---- | ----------------------------------------------- | ----------------------------------------------- |
| `ラベル`         | 予想されるユーザ入力の簡単な説明。これもフォームに表示されます。        | 必須 | 文字列型 | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %}
| `説明`          | フォームに表示される、コンテキストまたはガイダンスを提供するフィールドの説明。 | 任意 | 文字列型 | 空の文字列                                           | {% octicon "dash" aria-label="The dash icon" %}
| `placeholder` | 空のときにフィールドにレンダリングされる半透明のプレースホルダ。        | 任意 | 文字列型 | 空の文字列                                           | {% octicon "dash" aria-label="The dash icon" %}
| `value`       | フィールドに事前に入力されているテキスト。                   | 任意 | 文字列型 | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %}

#### 検証

{% data reusables.form-schema.validations-intro %}

| キー | 説明 | 必須 | 種類 | デフォルト | 有効な値 |
| -- | -- | -- | -- | ----- | ---- |
|    |    |    |    |       |      |
{% data reusables.form-schema.required-key %}

#### サンプル

```YAML{:copy}
body:
- type: input
  id: prevalence
  attributes:
    label: Bug prevalence
    description: "How often do you or others encounter this bug?"
    placeholder: "Example: Whenever I visit the personal account page (1-2 times a week)"
  validations:
    required: true
```

### `ドロップダウン`

`dropdown` 要素を使用して、フォームにドロップダウンメニューを追加できます。

#### 属性

{% data reusables.form-schema.attributes-intro %}

| キー         | 説明                                                 | 必須 | 種類     | デフォルト                                           | 有効な値                                            |
| ---------- | -------------------------------------------------- | -- | ------ | ----------------------------------------------- | ----------------------------------------------- |
| `ラベル`      | フォームに表示される、予想されるユーザ入力の簡単な説明。                       | 必須 | 文字列型   | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %}
| `説明`       | フォームに表示される、追加のコンテキストまたはガイダンスを提供するドロップダウンの説明。       | 任意 | 文字列型   | 空の文字列                                           | {% octicon "dash" aria-label="The dash icon" %}
| `multiple` | ユーザが複数のオプションを選択できるかどうかを指定します。                      | 任意 | 論理値    | false                                           | {% octicon "dash" aria-label="The dash icon" %}
| `options`  | ユーザが選択できるオプションの配列。 空にすることはできず、すべての選択肢を区別する必要があります。 | 必須 | 文字列の配列 | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %}

#### 検証

{% data reusables.form-schema.validations-intro %}

| キー | 説明 | 必須 | 種類 | デフォルト | 有効な値 |
| -- | -- | -- | -- | ----- | ---- |
|    |    |    |    |       |      |
{% data reusables.form-schema.required-key %}

#### サンプル

```YAML{:copy}
body:
- type: dropdown
  id: download
  attributes:
    label: How did you download the software?
    options:
      - Homebrew
      - MacPorts
      - apt-get
      - Built from source
  validations:
    required: true
```

### `checkboxes`

`checkboxes` 要素を使用して、チェックボックスのセットをフォームに追加できます。

#### 属性

{% data reusables.form-schema.attributes-intro %}

| キー        | 説明                                                  | 必須 | 種類   | デフォルト                                           | 有効な値                                            |
| --------- | --------------------------------------------------- | -- | ---- | ----------------------------------------------- | ----------------------------------------------- |
| `ラベル`     | フォームに表示される、予想されるユーザ入力の簡単な説明。                        | 必須 | 文字列型 | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %}
| `説明`      | フォームに表示されるチェックボックスのセットの説明。 Markdown フォーマットをサポートします。 | 任意 | 文字列型 | 空の文字列                                           | {% octicon "dash" aria-label="The dash icon" %}
| `options` | ユーザが選択できるチェックボックスの配列。 構文については、以下を参照してください。          | 必須 | 配列   | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %}

{% data reusables.form-schema.options-syntax %}
{% data reusables.form-schema.required-key %}

#### サンプル

```YAML{:copy}
body:
- type: checkboxes
  id: operating-systems
  attributes:
    label: Which operating systems have you used?
    description: You may select more than one.
    options:
      - label: macOS
      - label: Windows
      - label: Linux
```

## 参考リンク

- [YAML](https://yaml.org)
