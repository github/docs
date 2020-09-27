---
title: 入力オブジェクト
redirect_from:
  - /v4/input_object
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### 入力オブジェクトについて

[入力オブジェクト](https://graphql.github.io/graphql-spec/June2018/#sec-Input-Objects)は、オブジェクトを定義する入力フィールドの集合を含むことから、「構成可能オブジェクト」と呼ぶことができます。

たとえば、[` CommitAuthor`](/v4/input_object/commitauthor/)は`emails`というフィールドを取ります。 `emails`に値を提供すると、`CommitAuthor`はそのメールアドレスを含む`User`オブジェクトのリストに変換されます。 [オブジェクト](/v4/object)は入力オブジェクトを持つ**こともある**のに対して、[ミューテーション](/v4/mutation)は入力オブジェクトを**必要**とすることに注意してください。

詳しい情報については「[ミューテーションについて](/v4/guides/forming-calls#about-mutations)」を参照してください。

{% for item in graphql.schemaForCurrentVersion.inputObjects %}
  {% include graphql-input-object %}
{% endfor %}
