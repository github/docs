---
title: Organization のインタラクション
shortTitle: Organization
intro: Organization のインタラクション API を使うと、Organization の所有者は Organization のパブリック リポジトリでコメント、Issue のオープン、pull request の作成ができるユーザーの種類を一時的に制限できます。
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
ms.openlocfilehash: f06bfbe50c7fa43d03329d69bba8816e4559565a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147062467'
---
## Organization のインタラクション API について

Organization のインタラクション API を使うと、Organization の所有者は Organization のパブリック リポジトリでコメント、Issue のオープン、pull request の作成ができるユーザーの種類を一時的に制限できます。 {% data reusables.interactions.interactions-detail %} {% data variables.product.product_name %} ユーザのタイプについては以下を参照してください。

* Organizationの{% data reusables.interactions.existing-user-limit-definition %}
* Organizationの{% data reusables.interactions.contributor-user-limit-definition %}
* Organizationの{% data reusables.interactions.collaborator-user-limit-definition %}

Organizationレベルでインタラクション制限を設定すると、Organizationが所有する個々のリポジトリに設定されているインタラクション制限は上書きされます。 Organization が所有する個々のリポジトリに対して異なるインタラクション制限を設定するには、代わりに[リポジトリ](#repository) インタラクション エンドポイントを使ってください。
