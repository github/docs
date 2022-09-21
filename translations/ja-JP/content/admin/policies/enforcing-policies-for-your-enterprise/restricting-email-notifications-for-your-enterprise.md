---
title: Enterprise のメール通知を制限する
intro: エンタープライズが所有する組織のアクティビティに関するメール通知をメンバーが受信できるドメインに制限することで、エンタープライズの情報が個人のメール アカウントに漏洩するのを防ぐことができます。
product: '{% data reusables.gated-features.restrict-email-domain %}'
versions:
  ghec: '*'
  ghes: '*'
permissions: Enterprise owners can restrict email notifications for an enterprise.
type: how_to
topics:
  - Enterprise
  - Notifications
  - Organizations
  - Policies
redirect_from:
  - /admin/policies/restricting-email-notifications-for-your-enterprise
  - /github/setting-up-and-managing-your-enterprise/restricting-email-notifications-for-your-enterprise-account-to-approved-domains
  - /github/setting-up-and-managing-your-enterprise/restricting-email-notifications-for-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/setting-policies-for-organizations-in-your-enterprise-account/restricting-email-notifications-for-your-enterprise-account
shortTitle: Restrict email notifications
ms.openlocfilehash: f5ef3b4ffd3db266e96d4f7fc90f43cbd226034f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147066498'
---
## Enterprise のメール制限について

メール通知を制限すると、Enterprise のメンバーは、Enterprise が所有する Organization 内のアクティビティに関するメール通知を受け取ために、検証または承認済みのドメイン内のメール アドレスしか使用できなくなります。

{% data reusables.enterprise-accounts.approved-domains-beta-note %}

ドメインは、Enterprise から継承することも、特定の Organization 用に設定することもできます。 詳細については、「[Enterprise のドメインを検証または承認する](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise)」および「[Organization のメール通知の制限](/organizations/keeping-your-organization-secure/restricting-email-notifications-for-your-organization)」を参照してください。

{% data reusables.notifications.email-restrictions-verification %}

Enterprise でメール制限が有効になっている場合、Organization のオーナーは、Enterprise が所有する Organization のメール制限を無効にすることはできません。 Organization を所有する Enterprise から継承されたか、特定の Organization の検証済みまたは承認済みのドメインを持たない Organization になるような変更が発生した場合、その Organization のメール制限は無効になります。

## Enterprise のメール通知を制限する

Enterprise のメール通知を制限する前に、少なくとも 1 つのドメインを Enterprise 用に検証または承認する必要があります。 {% ifversion ghec %} 詳細については、「[Enterprise のドメインを検証または承認する](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise)」を参照してください。"{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.verified-domains-tab %} {% data reusables.organizations.restrict-email-notifications %}
1. **[保存]** をクリックします。
