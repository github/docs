---
title: Enterprise の設定について
intro: 'サイト管理者ダッシュボード{% ifversion ghes %}、{% data variables.enterprise.management_console %}、管理シェル (SSH) {% elsif ghae %}Enterprise 設定またはサポートへの問い合わせ{% endif %}を使用して、Enterprise を管理できます。'
versions:
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Enterprise
  - Fundamentals
  - SSH
redirect_from:
  - /admin/configuration/about-enterprise-configuration
shortTitle: About configuration
ms.openlocfilehash: 86012c1fc7b56367d171fd271c5f3d12125cf461
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145112893'
---
{% ifversion ghes %} {% data reusables.enterprise_site_admin_settings.about-the-site-admin-dashboard %} 詳細については、「[サイト管理者ダッシュボード](/admin/configuration/site-admin-dashboard)」を参照してください。

{% data reusables.enterprise_site_admin_settings.about-the-management-console %} 詳細については、「[管理コンソールへのアクセス](/admin/configuration/accessing-the-management-console)」を参照してください。

{% data reusables.enterprise_site_admin_settings.about-ssh-access %} 詳細については、「[管理シェル (SSH) へのアクセス](/admin/configuration/accessing-the-administrative-shell-ssh)」を参照してください。
{% endif %}

{% ifversion ghae %} {% data variables.product.product_name %} の使用を開始するには、最初に {% data variables.product.product_name %} をデプロイする必要があります。 詳細については、「[{% data variables.product.product_name %} のデプロイ](/admin/configuration/configuring-your-enterprise/deploying-github-ae)」を参照してください。

初めてエンタープライズにアクセスするときは、初期構成を完了し、{% data variables.product.product_name %} を使用する準備を整えます。 初期設定には、Enterprise とアイデンティティプロバイダ (IdP) の接続、SAML SSO による認証、Enterprise 内のリポジトリと Organization のポリシーの設定、および送信メール用の SMTP の設定が含まれます。 詳細については、「[{% data variables.product.prodname_ghe_managed %} の初期化](/admin/configuration/initializing-github-ae)」を参照してください。

後で、サイトアドミンのダッシュボードと Enterprise 設定を使用して、さらに Enterprise の設定を行い、ユーザ、Organization、およびリポジトリを管理し、リスクを軽減して品質を向上させるポリシーを設定できます。 

すべての Enterprise は、Subdomain Isolation と、暗号化されたトラフィックに対してのみ TLS1.2 以降をサポートするように設定されています。
{% endif %}

## 参考資料

- 「[ユーザー、組織、リポジトリを管理する](/admin/user-management)」
- 「[エンタープライズのポリシーを設定する](/admin/policies)」
