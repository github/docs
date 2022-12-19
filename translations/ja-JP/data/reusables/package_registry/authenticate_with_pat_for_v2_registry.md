---
ms.openlocfilehash: 4cf4347384a6be2cadb240a15bc78efea0097799
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 12/09/2022
ms.locfileid: "148192754"
---
一部の {% data variables.product.prodname_registry %} レジストリでは、細かなアクセス許可がサポートされています。 つまり、パッケージをユーザーまたは組織が所有できるよう、あるいはリポジトリにリンクできるように選べます。 細かなアクセス許可をサポートするレジストリの一覧については、「[{% data variables.product.prodname_registry %} のアクセス許可について](/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages)」を参照してください。

細かなアクセス許可をサポートするレジストリについては、お使いのワークフローで {% data variables.product.pat_generic %} を使ってレジストリの認証を受ける場合、`GITHUB_TOKEN` を使うようにワークフローを更新することを強くお勧めします。

{% data variables.product.pat_generic %} を使ってレジストリの認証を受けるワークフローの更新に関するガイダンスは、「[{% data variables.product.pat_generic %} を使ってレジストリにアクセスするワークフローのアップグレード](/packages/managing-github-packages-using-github-actions-workflows/publishing-and-installing-a-package-with-github-actions#upgrading-a-workflow-that-accesses-a-registry-using-a-personal-access-token)」を参照してください。

`GITHUB_TOKEN` の詳細については「[ワークフローで認証する](/actions/reference/authentication-in-a-workflow#using-the-github_token-in-a-workflow)」を参照してください。

アクションでレジストリを使用するときのベスト プラクティスについては、「[GitHub Actions のセキュリティ強化](/actions/getting-started-with-github-actions/security-hardening-for-github-actions#considering-cross-repository-access)」を参照してください。
