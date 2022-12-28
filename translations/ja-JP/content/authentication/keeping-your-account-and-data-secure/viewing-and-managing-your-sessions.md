---
title: セッションの表示と管理
intro: 設定でアクティブなセッションを表示および取り消すことができます。
versions:
  feature: device-and-settings-management-page
type: how_to
topics:
  - SSO
shortTitle: Viewing and managing sessions
ms.openlocfilehash: 15a0bdc17a913ceb6da27e8809610306adb1de25
ms.sourcegitcommit: b2e5d14036a700b781e91158a552f8c0b1f04839
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/15/2022
ms.locfileid: '148165581'
---
アカウントにログインしているデバイスの一覧を表示し、認識できないセッションを取り消すことができます。

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.sessions %}
1. [Web セッション] の下で、アクティブな Web セッションを確認できます。
   
   ![アクティブなセッション一覧のスクリーンショット](/assets/images/help/settings/saml-active-sessions.png) {% ifversion fpt or ghec %} [{% data variables.product.prodname_mobile %} セッション] の下で、{% data variables.product.prodname_mobile %} アプリを使用してアカウントにログインしているデバイスの一覧を確認できます。

   ![アクティブなセッションの一覧のスクリーンショット](/assets/images/help/settings/github-mobile-active-sessions.png){% endif %}

1. Web セッションの詳細を表示するには、 **[詳細情報]** をクリックします。
   
   ![セッションの詳細を開くボタンが強調された [セッション] ページのスクリーンショット](/assets/images/help/settings/saml-expand-session-details.png)

1. Web セッションを取り消すには、 **[セッションの取り消し]** をクリックします。
    
    ![セッションを取り消すボタンが強調されたセッションの詳細ページのスクリーンショット](/assets/images/help/settings/revoke-session.png)

{% ifversion fpt or ghec %}
1. {% data variables.product.prodname_mobile %} セッションを取り消す場合、セッションの概要ページに戻り、取り消すデバイスの横の **[取り消し]** をクリックして取り消すオプションもあります。 

    {% note %}

    **メモ:** モバイル セッションを取り消すと、そのデバイス上で {% data variables.product.prodname_mobile %} アプリケーションからサインアウトされ、2 要素のオプションとして削除されます。 

    {% endnote %}

    ![モバイル セッションを取り消すボタンが強調されたセッション ページのスクリーンショット](/assets/images/help/settings/revoke-mobile-session.png)
    
{% endif %}

