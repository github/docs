---
title: ユーザ
intro: User Interactions APIを使用すると、自分のパブリックリポジトリでコメント、Issueのオープン、プルリクエストの作成ができるユーザのタイプを一時的に制限することができます。
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

{% data reusables.interactions.interactions-detail %} {% data variables.product.product_name %} ユーザのタイプについては以下を参照してください。

* {% data reusables.interactions.existing-user-limit-definition %}によるリポジトリの操作を制限します。
* {% data reusables.interactions.contributor-user-limit-definition %}によるリポジトリの操作を制限します。
* {% data reusables.interactions.collaborator-user-limit-definition %}によるリポジトリの操作を制限します。

ユーザレベルでインタラクション制限を設定すると、ユーザが所有する個々のリポジトリに設定されているインタラクション制限は上書きされます。 ユーザが所有する個々のリポジトリに対して異なるインタラクション制限を設定するには、かわりに[リポジトリ](#repository)インタラクションエンドポイントを使用してください。
