---
title: ユーザー インタラクション
shortTitle: User
allowTitleToDifferFromFilename: true
intro: ユーザー インタラクション API を使用すると、自分のパブリック リポジトリでコメント作成、Issue のオープン、pull request の作成を行えるユーザーのタイプを一時的に制限できます。
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: e61096e6f09a9c17608e67846c138142c527c314
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147066899'
---
## ユーザー インタラクション API について

ユーザー インタラクション API を使用すると、自分のパブリック リポジトリでコメント作成、Issue のオープン、pull request の作成を行えるユーザーのタイプを一時的に制限できます。 {% data reusables.interactions.interactions-detail %} {% data variables.product.product_name %} ユーザのタイプについては以下を参照してください。

* {% data reusables.interactions.existing-user-limit-definition %}が自分のリポジトリの操作を制限されます。
* {% data reusables.interactions.contributor-user-limit-definition %}が自分のリポジトリの操作を制限されます。
* {% data reusables.interactions.collaborator-user-limit-definition %}が自分のリポジトリの操作を制限されます。

ユーザレベルでインタラクション制限を設定すると、ユーザが所有する個々のリポジトリに設定されているインタラクション制限は上書きされます。 ユーザーが所有する個々のリポジトリに対して異なるインタラクション制限を設定するには、代わりに[リポジトリ](#repository) インタラクション エンドポイントを使ってください。
