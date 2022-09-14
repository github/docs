---
title: チーム メンバー
allowTitleToDifferFromFilename: true
shortTitle: Members
intro: ''
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 9f2e4a1bee298bddf1d1712c78b2bac41f15c27e
ms.sourcegitcommit: 5b1461b419dbef60ae9dbdf8e905a4df30fc91b7
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '147879000'
---
## チーム メンバー API について

{% data reusables.organizations.team-api %}

{% ifversion fpt or ghes or ghec %} {% note %}

**注:** Organization のアイデンティティプロバイダ (Idp) で Team に同期をセットアップしている場合、Team のメンバーシップを変更するためのこの API を使おうとすると、エラーが返されます。 グループのメンバーシップを管理するためにIdpにアクセスできるなら、GitHubのTeamメンバーシップをアイデンティティプロバイダを通じて管理できます。そうすれば、Organizationで自動的にTeamメンバーの追加や削除が行われます。 詳細については、「[ID プロバイダーと GitHub の間でチームを同期する](/enterprise-cloud@latest/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization)」を参照してください。

{% endnote %}

{% endif %}
