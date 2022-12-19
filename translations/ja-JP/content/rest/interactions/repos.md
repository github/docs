---
title: リポジトリ インタラクション
shortTitle: Repository
intro: リポジトリ インタラクション API を使うと、所有者または管理者のアクセス権を持つユーザーは、パブリック リポジトリでコメントしたり、issue を開いたり、pull request を作成したりできるユーザーの種類を、一時的に制限することができます。
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
ms.openlocfilehash: e1d7d0137ddc2334bb08e17a0c8d7069c13d982d
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '147064667'
---
## リポジトリ インタラクション API について

リポジトリ インタラクション API を使うと、所有者または管理者のアクセス権を持つユーザーは、パブリック リポジトリでコメントしたり、issue を開いたり、pull request を作成したりできるユーザーの種類を、一時的に制限することができます。 {% data reusables.interactions.interactions-detail %} {% data variables.product.product_name %} ユーザのタイプについては以下を参照してください。

* リポジトリの{% data reusables.interactions.existing-user-limit-definition %}
* リポジトリの{% data reusables.interactions.contributor-user-limit-definition %}
* リポジトリの{% data reusables.interactions.collaborator-user-limit-definition %}

リポジトリを所有しているユーザまたはOrganizationについてインタラクション制限を有効にしている場合、個々のリポジトリについてその制限を変更することはできません。 代わりに、[User](#user) または [Organization](#organization) インタラクション エンドポイントを使って、インタラクションの制限を変更します。
