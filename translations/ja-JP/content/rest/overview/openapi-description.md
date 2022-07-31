---
title: OpenAPI の記述
intro: '{% data variables.product.product_name %} の REST API は、OpenAPI 3.0 準拠のドキュメントで詳細に記述されています。'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - API
---

## OpenAPI の記述について

[OpenAPI](https://swagger.io/docs/specification/about/) は、REST API を記述するための標準仕様です。 OpenAPI の記述は、人間にとっても機械にとっても判読しやすくなっており、 あらかじめドキュメントを読んだり実装を理解したりする必要がありません。 {% data variables.product.company_short %} は、REST API を OpenAPI 3.0 準拠のドキュメントとして公開しています。

## {% data variables.product.company_short %} OpenAPI の記述を取得する

OpenAPI の記述は、オープンソースの [REST API OpenAPI Description](https://github.com/github/rest-api-description) リポジトリにあります。

OpenAPI の記述には 2 つの形式があります。 バンドルバージョンは、再利用と判読に適した OpenAPI コンポーネントを含んでいるため、たいていの場合に有効です。 完全逆参照バージョンは、ツール環境でコンポーネントへのインライン参照がサポートされていない場合のために用意されています。

## {% data variables.product.company_short %} OpenAPI 記述を使用する

OpenAPI の記述にはいろいろな使い方があります。 たとえば、次のような方法を使用します。

* 独自の API クライアントを生成する。
* {% data variables.product.company_short %} REST API の記述を検証してテストする。
* Insomnia や Postman といったサードパーティツールを使用して、{% data variables.product.product_name %} REST API を調べ、操作する。

たとえば、{% data variables.product.company_short %} は REST OpenAPI の記述を使用して {% data variables.product.product_name %} [REST API リファレンスドキュメント](/rest)を生成します。
