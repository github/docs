---
title: Organization の所有権を移譲する
intro: '他の誰かを Organization アカウントのオーナーにするには、新しいオーナーを追加し、{% ifversion fpt or ghec %}請求情報が更新されることを確実にし、{% endif %}アカウントから自分を削除します。'
redirect_from:
  - /articles/needs-polish-how-do-i-give-ownership-to-an-organization-to-someone-else
  - /articles/transferring-organization-ownership
  - /github/setting-up-and-managing-organizations-and-teams/transferring-organization-ownership
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Transfer ownership
ms.openlocfilehash: 2605af47d008eff7ee786d80f64142a267676ee1
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145068314'
---
{% ifversion ghec %} {% note %}

**注:** {% data reusables.enterprise-accounts.invite-organization %}

{% endnote %}{% endif %}

1. もしあなたが *オーナー* の権限をもつ唯一のメンバーである場合、他の Organization メンバーにオーナー ロールを付与します。 詳細については、「[Organization のオーナーの指名](/organizations/managing-peoples-access-to-your-organization-with-roles/maintaining-ownership-continuity-for-your-organization#appointing-an-organization-owner)」を参照してください。
2. 新しいオーナーに連絡し、その人が[Organization の設定にアクセス](/articles/accessing-your-organization-s-settings)できることを確認します。
{% ifversion fpt or ghec %}
3. Organization で GitHub への支払いを現在担当している場合、新しいオーナーまたは[支払いマネージャー](/articles/adding-a-billing-manager-to-your-organization/)に Organization の支払い情報を更新してもらう必要があります。 詳細については、「[支払い方法を追加または編集する](/articles/adding-or-editing-a-payment-method)」を参照してください。

  {% warning %}

  **警告**: Organization から自分を削除しても、Organization アカウントのファイル上の支払い情報は更新 **されません**。 新しいコードオーナーまたは支払いマネージャーは、あなたのクレジットカードまたは Paypal の情報を削除するためにファイル上の支払い情報を更新しなければなりません。

  {% endwarning %}

{% endif %}
4. Organization から[自分を削除](/articles/removing-yourself-from-an-organization)します。
