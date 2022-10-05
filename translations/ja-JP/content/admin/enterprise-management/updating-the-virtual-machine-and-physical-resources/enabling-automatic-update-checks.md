---
title: 自動アップデートチェックの有効化
intro: '自動アップデートを有効にすると、{% data variables.product.product_location %} によって、最新の {% data variables.product.prodname_ghe_server %} リリースの確認とダウンロードが行われます。'
redirect_from:
  - /enterprise/admin/installation/enabling-automatic-update-checks
  - /enterprise/admin/enterprise-management/enabling-automatic-update-checks
  - /admin/enterprise-management/enabling-automatic-update-checks
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Upgrades
shortTitle: Enable automatic update checks
ms.openlocfilehash: c566dc54958cc7d4f26a9279ea3bf8a76aafa636
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '146331889'
---
{% data variables.product.product_location %}のアップグレードパッケージが自動的にダウンロードされると、{% data variables.product.prodname_ghe_server %} をアップグレードできることを知らせるメッセージが送信されます。 パッケージは {% data variables.product.product_location %}の `/var/lib/ghe-updates` ディレクトリにダウンロードされます。 詳細については、「[{% data variables.product.prodname_ghe_server %} をアップグレードする](/enterprise/admin/guides/installation/upgrading-github-enterprise-server)」を参照してください。

アップグレードにホットパッチを使用できる場合は、`.hpkg` が自動的にダウンロードされます。 管理コンソールでは、ホットパッチを直ちにインストールするか、後でインストールするようにスケジュール設定するかを選択できます。 詳細については、「[ホットパッチでのアップグレード](/enterprise/admin/guides/installation/upgrading-github-enterprise-server#upgrading-with-a-hotpatch)」を参照してください。

{% tip %}

**ヒント:** 自動更新チェックを有効にするには、{% data variables.product.product_location %}から `https://github-enterprise.s3.amazonaws.com` に接続できる必要があります。

{% endtip %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.updates-tab %}
4. **[更新を自動的に確認]** をクリックします。
![自動更新を有効にするためのボタン](/assets/images/enterprise/management-console/enable_updates_button.png) {% data reusables.enterprise_management_console.save-settings %}

インスタンスが最新の状態になっているかを知るには、Updatesタブのバナーを調べてください。

![GitHub Enterprise Server のリリースを示すバナー](/assets/images/enterprise/management-console/up-to-date-banner.png)

**[ログ]** で、最新の更新チェックの状態を確認できます。

![アップデートのログ](/assets/images/enterprise/management-console/update-log.png)
