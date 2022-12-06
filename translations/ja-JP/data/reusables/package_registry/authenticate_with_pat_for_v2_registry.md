---
ms.openlocfilehash: 902af6bdbe3c48fe8b5930bdf1041151f343b60b
ms.sourcegitcommit: 27882d9b3f19979c817c25952a2fb4dc4c6f0a65
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/27/2022
ms.locfileid: "148113866"
---
お使いのワークフローで {% data variables.product.pat_generic %} を使用してレジストリの認証を受ける場合、`GITHUB_TOKEN` を使用するようにワークフローを更新することを強くお勧めします。

{% ifversion fpt or ghec %}{% data variables.product.pat_generic %} を使ってレジストリの認証を受けるワークフローの更新に関するガイダンスは、「[{% data variables.product.pat_generic %} を使ってレジストリにアクセスするワークフローのアップグレード](/packages/managing-github-packages-using-github-actions-workflows/publishing-and-installing-a-package-with-github-actions#upgrading-a-workflow-that-accesses-a-registry-using-a-personal-access-token)」を参照してください。{% endif %}

`GITHUB_TOKEN` の詳細については「[ワークフローで認証する](/actions/reference/authentication-in-a-workflow#using-the-github_token-in-a-workflow)」を参照してください。

アクションでレジストリを使用するときのベスト プラクティスについては、「[GitHub Actions のセキュリティ強化](/actions/getting-started-with-github-actions/security-hardening-for-github-actions#considering-cross-repository-access)」を参照してください。
