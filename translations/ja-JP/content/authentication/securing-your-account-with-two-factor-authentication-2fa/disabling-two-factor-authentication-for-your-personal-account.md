---
title: 個人アカウントの 2 要素認証を無効化する
intro: 自分の個人アカウントの 2 要素認証を無効化すると、所属する Organization へのアクセスも失う可能性があります。
redirect_from:
  - /articles/disabling-two-factor-authentication-for-your-personal-account
  - /github/authenticating-to-github/disabling-two-factor-authentication-for-your-personal-account
  - /github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa/disabling-two-factor-authentication-for-your-personal-account
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - 2FA
shortTitle: Disable 2FA
ms.openlocfilehash: 17135ec9a9458eeb2fc460e69dfc6af39d83ee1d
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145088272'
---
アカウントを保護するために 2 要素認証 (2FA) を使用することを強くお勧めします。 2FA を無効化する必要がある場合も、できるだけ速やかに再有効化することをお勧めします。

{% warning %}

**警告:** 2 要素認証を必要とする組織のメンバー{% ifversion fpt or ghec %}、課金マネージャー、{% endif %}または組織のパブリック リポジトリへの外部コラボレーターが 2 要素認証を無効化すると、組織から自動的に削除され、リポジトリへのアクセスを失います。 Organization へのアクセスを再取得するには、2 要素認証を再有効化し、Organization オーナーに連絡します。

{% endwarning %}

自分の属する Organization が 2 要素認証を必要とし、自分がその Organization のプライベートリポジトリのメンバー、オーナー、または外部コラボレーターである場合は、まず Organization を離脱しないと 2 要素認証を無効化できません。

Organization から自分を削除するには:
 - 組織のメンバーまたは所有者は、「[組織から自分を削除する](/articles/removing-yourself-from-an-organization/)」を参照してください。
 - 外部コラボレーターの場合は、Organization のオーナーかリポジトリの管理者に Organization のリポジトリから削除してもらうよう依頼してください。 詳細については、「[組織内のユーザーのロールを表示する](/articles/viewing-people-s-roles-in-an-organization)」および「[外部コラボレーターを組織リポジトリから削除する](/articles/removing-an-outside-collaborator-from-an-organization-repository/)」を参照してください。

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security %}
3. [無効] をクリックします。
  ![2 要素認証の無効化ボタン](/assets/images/help/2fa/disable-two-factor-authentication.png)

## 参考資料

- "[2 要素認証について](/articles/about-two-factor-authentication)"
- "[2 要素認証を設定する](/articles/configuring-two-factor-authentication)"
- "[2 要素認証復旧方法を設定する](/articles/configuring-two-factor-authentication-recovery-methods)"
