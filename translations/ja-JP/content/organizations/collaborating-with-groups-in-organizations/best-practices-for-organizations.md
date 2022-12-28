---
title: 組織のベスト プラクティス
shortTitle: Best practices
intro: '組織向けに {% data variables.product.prodname_dotcom %} が推奨するプラクティスについて説明します。'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
ms.openlocfilehash: 015c74d7a69a1feb5c8ff9467a4219753f2cb5eb
ms.sourcegitcommit: c2aa10a61db44ee111c09565b6114dd5c97b6e2e
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/14/2022
ms.locfileid: '148163459'
---
## 複数の所有者を割り当てる

{% data reusables.organizations.org-ownership-recommendation %}詳しくは、「[Organization の所有権の継続性を管理する](/organizations/managing-peoples-access-to-your-organization-with-roles/maintaining-ownership-continuity-for-your-organization)」をご覧ください。

## チームを使う

チームを使って、組織内でのコラボレーションを促進することをお勧めします。 詳細については、「[Team について](/organizations/organizing-members-into-teams/about-teams)」を参照してください。

{% ifversion ghec %}ID プロバイダー (IdP) を使用してチーム メンバーシップを管理することを強くお勧めします。 詳細については、「[Organization の Team 同期を管理する](/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization)」を参照してください。

{% data reusables.enterprise-accounts.emu-scim-note %} {% endif %}

チームは可能な限り見えるようにして、機密性の高い状況に備えてシークレット チームを用意しておくことをお勧めします。 詳細については、「[Team の可視性の変更](/organizations/organizing-members-into-teams/changing-team-visibility)」を参照してください。

{% ifversion ghec or ghes or ghae %}
## セキュリティの概要を使う

{% data reusables.security-overview.about-the-security-overview %} 詳しくは、「[セキュリティの概要について](/code-security/security-overview/about-the-security-overview)」を参照してください。
{% endif %}
