---
title: Team の同期
intro: 'Team Synchronization API では、{% data variables.product.product_name %} Team と外部アイデンティティプロバイダー (IdP) グループとの間の接続を管理できます。'
versions:
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 6a5d379b1050e10f9e31e14ed2b094a684676737
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147067163'
---
## Team の同期 API について

この API を使用するには、認証されたユーザーがチームメンテナまたは Team に関連づけられた Organization のコードオーナーである必要があります。 また、認証に使用するトークンも、お使いの IdP (SSO) プロバイダーで使用するための認可を受けている必要があります。 詳細については、「[SAML シングル サインオンの組織で利用するための個人用アクセス トークンの認可](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)」を参照してください。

Team 同期を使用して、IdPを通じて GitHubTeamメンバーを管理できます。 Team Synchronization API を使用するには、チーム同期が有効である必要があります。 詳細については、「[ID プロバイダーと GitHub の間でチームを同期する](/enterprise-cloud@latest/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization)」を参照してください。

{% note %}

**注:** Team Synchronization API を {% data variables.product.prodname_emus %} と共に使用することはできません。 {% data variables.product.prodname_emu_org %} の管理の詳細については、「[External groups API](/enterprise-cloud@latest/rest/reference/teams#external-groups)」を参照してください。

{% endnote %}
