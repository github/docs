---
title: secret scanning パターン
intro: 'サポートされているシークレットと、誤ってコミットされたシークレットの不正使用を防ぐために {% data variables.product.company_short %} が連携するパートナーの一覧。'
product: '{% data reusables.gated-features.secret-scanning-partner %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: reference
topics:
  - Secret scanning
  - Advanced Security
redirect_from:
  - /code-security/secret-scanning/secret-scanning-partners
ms.openlocfilehash: 5684239d27daef532adf9aec79309d7430525a9e
ms.sourcegitcommit: fc8b57e068b6922b45318029e22ceb3d6c1c3087
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/29/2022
ms.locfileid: '148184505'
---
{% data reusables.secret-scanning.beta %} {% data reusables.secret-scanning.enterprise-enable-secret-scanning %}

{% ifversion fpt or ghec %}
## {% data variables.product.prodname_secret_scanning %} パターンについて

{% data variables.product.product_name %} では、{% data variables.product.prodname_secret_scanning %} パターンの次のさまざまなセットが保持されています。

1. **パートナー パターン。** すべてのパブリック リポジトリで潜在的なシークレットを検出するために使われます。 詳しくは、「[パートナー パターンでサポートされるシークレット](#supported-secrets-for-partner-patterns)」をご覧ください。
2. **高度なセキュリティ パターン。** {% data variables.product.prodname_secret_scanning %} が有効になっているリポジトリで潜在的なシークレットを検出するために使われます。 {% ifversion ghec %}詳しくは、「[高度なセキュリティでサポートされるシークレット](#supported-secrets-for-advanced-security)」をご覧ください。{% endif %}{% ifversion secret-scanning-push-protection %}
3. **プッシュ保護パターン。** プッシュ保護として {% data variables.product.prodname_secret_scanning %} が有効になっているリポジトリで潜在的なシークレットを検出するために使われます。 詳しくは、「[プッシュ保護でサポートされるシークレット](#supported-secrets-for-push-protection)」をご覧ください。{% endif %}

{% ifversion fpt %} {% data variables.product.prodname_ghe_cloud %} と {% data variables.product.prodname_GH_advanced_security %} を使っている Organization は、リポジトリで {% data variables.product.prodname_secret_scanning_GHAS %} を有効にすることができます。 これらのパターンについて詳しくは、 [{% data variables.product.prodname_ghe_cloud %} のドキュメント](/enterprise-cloud@latest/code-security/secret-scanning/secret-scanning-patterns#supported-secrets-for-advanced-security)をご覧ください。
{% endif %}

## パートナー パターンでサポートされるシークレット

現在、{% data variables.product.product_name %} では、パブリック リポジトリで次のサービス プロバイダーによって発行されたシークレットをスキャンし、コミットでシークレットが検出されるたびに関連するサービス プロバイダーに警告します。 {% data variables.product.prodname_secret_scanning_partner %} について詳しくは、「[{% data variables.product.prodname_secret_scanning_partner %} について](/code-security/secret-scanning/about-secret-scanning#about-secret-scanning-for-partner-patterns)」をご覧ください。

{% data reusables.secret-scanning.secret-scanning-pattern-pair-matches %}

{% data reusables.secret-scanning.partner-secret-list-public-repo %} {% endif %}

{% ifversion ghec or ghae or ghes %}
## {% ifversion ghec %}高度なセキュリティ{% endif %}でサポートされるシークレット

{% data variables.product.prodname_secret_scanning_GHAS %} が有効になっていると、{% data variables.product.prodname_dotcom %} は、次のサービス プロバイダーによって発行されたシークレットをスキャンします。 {% ifversion ghec %}{% data variables.product.prodname_secret_scanning_GHAS %} について詳しくは、「[{% data variables.product.prodname_secret_scanning_GHAS %} について](/code-security/secret-scanning/about-secret-scanning#about-secret-scanning-for-advanced-security)」をご覧ください。{% endif %}

{% data reusables.secret-scanning.secret-scanning-pattern-pair-matches %}

secret scanning に REST API を使う場合は、`Secret type` を使って特定の発行者からのシークレットについて報告できます。 詳しくは、「[secret scanning](/enterprise-cloud@latest/rest/secret-scanning)」をご覧ください。
 
{% ifversion ghes or ghae or ghec %} {% note %}

**注:** リポジトリ、Organization、または Enterprise 用のカスタム {% data variables.product.prodname_secret_scanning %} パターンを定義することもできます。 詳細については、「[{% data variables.product.prodname_secret_scanning %}のカスタム パターンの定義](/code-security/secret-security/defining-custom-patterns-for-secret-scanning)」を参照してください。

{% endnote %} {% endif %}

{% data reusables.secret-scanning.partner-secret-list-private-repo %} {% endif %}

{% ifversion secret-scanning-push-protection %}
## プッシュ保護でサポートされるシークレット

プッシュ保護として {% data variables.product.prodname_secret_scanning_caps %} は、現在、次のサービス プロバイダーによって発行されたシークレットのリポジトリをスキャンします。

{% data reusables.secret-scanning.secret-scanning-pattern-pair-matches %}

{% data reusables.secret-scanning.secret-list-private-push-protection %}

{% endif %}
## 参考資料

- 「[リポジトリの保護](/code-security/getting-started/securing-your-repository)」
- 「[アカウントとデータを安全に保つ](/github/authenticating-to-github/keeping-your-account-and-data-secure)」{%- ifversion fpt or ghec %}
- [{% data variables.product.prodname_secret_scanning_caps %} パートナー プログラム](/developers/overview/secret-scanning-partner-program){%- else %}
- [{% data variables.product.prodname_secret_scanning_caps %} パートナー プログラム](/free-pro-team@latest/developers/overview/secret-scanning-partner-program) ({% data variables.product.prodname_ghe_cloud %} ドキュメント){% endif %}
