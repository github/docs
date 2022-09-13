---
title: アプリケーションの構成
intro: '{% data variables.product.product_location %} 向けに内部アプリケーションの設定を構成できます。'
redirect_from:
  - /enterprise/admin/installation/configuring-applications
  - /enterprise/admin/configuration/configuring-applications
  - /admin/configuration/configuring-applications
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
ms.openlocfilehash: bcc51bdabb5dc0b5ecdd4f77db9246a60c8df496
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145120726'
---
## 画像キャッシュを調整する

{% data variables.product.product_location %} がアバターをキャッシュする時間を選択できます。 キャッシュ時間を長くすると、ユーザのアバターをロードするのにかかる時間が長くなります。 キャッシュ時間を短すぎる値で設定すると、{% data variables.product.product_location %} のワーク プロセスが過負荷になる可能性があります。 

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %}
3. 左側のサイドバーで、 **[アプリケーション]** をクリックします。
![設定サイドバーの [アプリケーション] タブ](/assets/images/enterprise/management-console/sidebar-applications.png)
4. [アバター イメージ キャッシュ時間 (秒)] で、{% data variables.product.product_location %} にアバター画像をキャッシュさせる秒数を入力します。
![アバター画像キャッシュ フォーム フィールド](/assets/images/enterprise/management-console/add-image-caching-value-field.png) {% data reusables.enterprise_management_console.save-settings %}
