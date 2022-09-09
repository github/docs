---
title: ホスト名の設定
intro: アプライアンスには、ハードコードされたIPアドレスを使うのではなくホスト名を設定することをおすすめします。
redirect_from:
  - /enterprise/admin/guides/installation/configuring-hostnames
  - /enterprise/admin/installation/configuring-a-hostname
  - /enterprise/admin/configuration/configuring-a-hostname
  - /admin/configuration/configuring-a-hostname
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
ms.openlocfilehash: 120827f8eca8061d90d397a7e2a21d46ae33f243
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 07/13/2022
ms.locfileid: '146681318'
---
ハードコードされた IP アドレスの代わりにホスト名を設定すれば、ユーザーやクライアント ソフトウェアに影響を与えることなく {% data variables.product.product_location %}を動作させる物理ハードウェアを変更できるようになります。

{% data variables.enterprise.management_console %} のホスト名の設定は、適切な完全修飾ドメイン名 (FQDN) に設定して、インターネット上または内部ネットワーク内で解決できるようにしてください。 たとえば、ホスト名を `github.companyname.com.` に設定できます。Web と API のリクエストでは、{% data variables.enterprise.management_console %} で設定されたホスト名に自動的にリダイレクトされます。 `localhost` は有効なホスト名設定ではないことにご留意ください。

ホスト名を設定したら、サブドメイン分離を有効化して、{% data variables.product.product_location %}のセキュリティをさらに強化できます。 詳細については、「[サブドメイン分離の有効化](/enterprise/admin/guides/installation/enabling-subdomain-isolation/)」を参照してください。

サポートされているホスト名の種類の詳細については、 [HTTP RFC の Section 2.1](https://tools.ietf.org/html/rfc1123#section-2) を参照してください。

{% data reusables.enterprise_installation.changing-hostname-not-supported %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.hostname-menu-item %}
4. {% data variables.product.product_location %}に設定するホスト名を入力します。
  ![ホスト名を設定するためのフィールド](/assets/images/enterprise/management-console/hostname-field.png)
5. 新しいホスト名のための DNS 及び SSL の設定をテストするには **[ドメイン設定のテスト]** をクリックします。
  ![[ドメイン設定のテスト] ボタン](/assets/images/enterprise/management-console/test-domain-settings.png) {% data reusables.enterprise_management_console.test-domain-settings-failure %} {% data reusables.enterprise_management_console.save-settings %}

さまざまなクロスサイト スクリプティングの脆弱性を軽減するために、ホスト名を設定した後、{% data variables.product.product_location %}のサブドメイン分離を有効にすることをお勧めします。 詳細については、「[サブドメイン分離の有効化](/enterprise/admin/guides/installation/enabling-subdomain-isolation/)」を参照してください。
