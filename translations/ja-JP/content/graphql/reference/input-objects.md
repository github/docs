---
title: 入力オブジェクト
redirect_from:
  - /v4/input_object
  - /v4/reference/input_object
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - api
---

### 入力オブジェクトについて

[入力オブジェクト](https://graphql.github.io/graphql-spec/June2018/#sec-Input-Objects)は、オブジェクトを定義する入力フィールドの集合を含むことから、「構成可能オブジェクト」と呼ぶことができます。

たとえば、[` CommitAuthor`](/graphql/reference/input-objects#commitauthor)は`emails`というフィールドを取ります。 `emails`に値を提供すると、`CommitAuthor`はそのメールアドレスを含む`User`オブジェクトのリストに変換されます。 [オブジェクト](/graphql/reference/objects)は入力オブジェクトを持つ**こともある**のに対して、[ミューテーション](/graphql/reference/mutations)は入力オブジェクトを**必要**とすることに注意してください。

詳しい情報については「[ミューテーションについて](/graphql/guides/forming-calls-with-graphql#about-mutations)」を参照してください。

{% for item in graphql.schemaForCurrentVersion.inputObjects %}
  {% include graphql-input-object %}
{% endfor %}
