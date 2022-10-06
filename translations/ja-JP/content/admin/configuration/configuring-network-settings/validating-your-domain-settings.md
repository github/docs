---
title: ドメイン設定の検証
intro: '{% data variables.product.product_location %} を最初に起動する前に、ドメイン設定が適切に行われていることを確実にします。'
redirect_from:
  - /enterprise/admin/installation/validating-your-domain-settings
  - /enterprise/admin/configuration/validating-your-domain-settings
  - /admin/configuration/validating-your-domain-settings
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Networking
shortTitle: Validate domain settings
ms.openlocfilehash: 113f7b3d3f335e73627cebf90a91cbf326c40c99
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145120742'
---
{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.hostname-menu-item %}
4. アプライアンスの DNS および SSL の設定をテストするには、 **[ドメイン設定のテスト]** をクリックしてください。
  ![[ドメイン設定のテスト] ボタン](/assets/images/enterprise/management-console/test-domain-settings.png) {% data reusables.enterprise_management_console.test-domain-settings-failure %} {% data reusables.enterprise_management_console.save-settings %}
