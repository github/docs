---
title: モバイルデバイスに対する 2 要素認証配信方法の変更
intro: 認証コードの受信方法を、テキストメッセージとモバイルアプリケーションとの間で切り替えることができます。
redirect_from:
  - /articles/changing-two-factor-authentication-delivery-methods
  - /articles/changing-two-factor-authentication-delivery-methods-for-your-mobile-device
  - /github/authenticating-to-github/changing-two-factor-authentication-delivery-methods-for-your-mobile-device
  - /github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa/changing-two-factor-authentication-delivery-methods-for-your-mobile-device
versions:
  fpt: '*'
  ghec: '*'
topics:
  - 2FA
shortTitle: Change 2FA delivery method
ms.openlocfilehash: 90f06f6e3a8b3c5614b78d7aee4055d903df2e80
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145088307'
---
{% note %}

**注:** 2 要素認証の主要な方法を変更すると、回復用コードを含め、現在の 2 要素認証設定が無効になります。 新しい回復用コードのセットを安全に保管します。 2 要素認証の主要な方法を変更しても、フォールバック SMS 構成 (構成されている場合) に影響することはありません。 詳細については、「[2 要素認証復旧方法の構成](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication-recovery-methods#setting-a-fallback-authentication-number)」を参照してください。

{% endnote %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security %}
3. [プライマリ 2 要素メソッド] の横にある **[変更]** をクリックします。
  ![プライマリ配信オプションを編集する](/assets/images/help/2fa/edit-primary-delivery-option.png)
4. [Delivery options]\(配信オプション\) で、 **[Reconfigure two-factor authentication]\(2 要素認証の再構成\)** をクリックします。
    ![2FA 配信オプションの切り替え](/assets/images/help/2fa/2fa-switching-methods.png)
5. 2 要素認証を TOTP モバイルアプリケーションで設定するかテキストメッセージで設定するかを決めます。 詳細については、「[2 要素認証の構成](/articles/configuring-two-factor-authentication)」を参照してください。
    - TOTP モバイル アプリケーションを使用した 2 要素認証を設定するには、 **[Set up using an app]\(アプリを使用した設定\)** をクリックします。
    - テキスト メッセージ (SMS)を使用した 2 要素認証を設定するには、 **[Set up using SMS]\(SMS を使用した設定\)** をクリックします。

## 参考資料

- "[2 要素認証について](/articles/about-two-factor-authentication)"
- "[2 要素認証復旧方法を設定する](/articles/configuring-two-factor-authentication-recovery-methods)"
