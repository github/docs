---
title: クライアントの有料 Organization をアップグレードまたはダウングレードする
intro: 支払いマネージャーは、クライアントの有料 Organization をいつでもアップグレードまたはダウングレードできます。
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/upgrading-or-downgrading-your-clients-paid-organization
  - /articles/upgrading-or-downgrading-your-client-s-paid-organization
  - /articles/upgrading-or-downgrading-your-clients-paid-organization
  - /github/setting-up-and-managing-billing-and-payments-on-github/setting-up-paid-organizations-for-procurement-companies/upgrading-or-downgrading-your-clients-paid-organization
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Organizations
  - Upgrades
shortTitle: Upgrade or downgrade
ms.openlocfilehash: 2309c89fabf2a81aab18df90b8c545f0f3f684e1
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145087750'
---
{% data reusables.organizations.reseller-ask-to-become-billing-manager %}

{% tip %}

**ヒント**:
- クライアントの Organization をアップグレードする前に、[Organization のファイルの支払い方法を表示または更新](/articles/adding-or-editing-a-payment-method)できます。
- これらの手順は、*シートごとのプラン* で Organization をアップグレードおよびダウングレードするためのものです。 クライアントが *従来のリポジトリごとの* プランを使用して {% data variables.product.product_name %} に支払う場合は、レガシ プランをアップグレードまたは [ダウングレード](/articles/downgrading-your-github-subscription) するか、 [組織をシートごとの価格に切り替えることができます](/articles/upgrading-your-github-subscription)。

{% endtip %}

## Organization の有料シート数をアップグレードする

{% data reusables.organizations.billing-settings %} {% data reusables.dotcom_billing.add-seats %} {% data reusables.dotcom_billing.number-of-seats %} {% data reusables.dotcom_billing.confirm-add-seats %}

シートを追加した後は、追加したシート数と支払いサイクルの残り時間に基づいて、Organization のファイルに支払われた支払い方法に比例額が課金されます。

## Organization の有料シート数を無料にダウングレードする

{% data reusables.organizations.billing-settings %} {% data reusables.dotcom_billing.downgrade-org-to-free %} {% data reusables.dotcom_billing.confirm_cancel_org_plan %}
