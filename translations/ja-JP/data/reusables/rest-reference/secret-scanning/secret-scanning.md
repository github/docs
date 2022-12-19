---
ms.openlocfilehash: 0829badf7ff90936b21ccf90489a2aebe2130682
ms.sourcegitcommit: ea9a577cff7ec16ded25ed57417c83ec04816428
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 04/07/2022
ms.locfileid: "141528370"
---
{% data reusables.secret-scanning.api-beta %}

{% data variables.product.prodname_secret_scanning %} API を使用すると、{% ifversion fpt or ghec or ghes > 3.1 or ghae %} を使用できます。

- リポジトリの {% data variables.product.prodname_secret_scanning %}{% if secret-scanning-push-protection %} とプッシュ保護 {% endif %} を有効または無効にします。 詳細については、「[リポジトリ](/rest/reference/repos#update-a-repository)」を参照し、REST API ドキュメントの "`security_and_analysis` オブジェクトのプロパティ" セクションを展開します。
- リポジトリから {% data variables.product.prodname_secret_scanning_GHAS %} アラートを取得して更新します。 詳細については、以下のセクションを参照してください。
{%- else %} リポジトリから {% data variables.product.prodname_secret_scanning %} アラートを取得して更新します。{% endif %}

{% data variables.product.prodname_secret_scanning %} の詳細については、「[{% data variables.product.prodname_secret_scanning %} について](/code-security/secret-security/about-secret-scanning)」を参照してください。
