---
ms.openlocfilehash: 0957d7c909250bfccb51681eac05e3f3196bb6d5
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 07/13/2022
ms.locfileid: "145122005"
---
{% ifversion fpt or ghec or ghes > 3.4 %}

{% data variables.product.prodname_actions %} ワークフロー内で {% data variables.product.prodname_container_registry %} の認証を受けるには、最高のセキュリティと体験を得るために `GITHUB_TOKEN` を使用します。 ワークフローで個人アクセス トークン (PAT) を使用し、`{% data reusables.package_registry.container-registry-hostname %}` の認証を受ける場合、`GITHUB_TOKEN` を使用するようにワークフローを更新することをお勧めします。

{% ifversion fpt or ghec %}個人用アクセス トークンで `{% data reusables.package_registry.container-registry-hostname %}` の認証を行うワークフローの更新に関するガイダンスについては、「[`ghcr.io` にアクセスするワークフローをアップグレードする](/packages/managing-github-packages-using-github-actions-workflows/publishing-and-installing-a-package-with-github-actions#upgrading-a-workflow-that-accesses-ghcrio)」をご覧ください。{% endif %}

`GITHUB_TOKEN` の詳細については「[ワークフローで認証する](/actions/reference/authentication-in-a-workflow#using-the-github_token-in-a-workflow)」を参照してください。

アクションで {% data variables.product.prodname_container_registry %} を使用している場合、「[GitHub Actions のセキュリティ強化](/actions/getting-started-with-github-actions/security-hardening-for-github-actions#considering-cross-repository-access)」にあるセキュリティのベスト プラクティスに従ってください。

{% endif %}
