---
ms.openlocfilehash: b5c33a751c34b9a3e0e804c6c5153fbcdc96a7f6
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "147705070"
---
お使いのワークフローで個人アクセス トークン (PAT) を使用してレジストリの認証を受ける場合、`GITHUB_TOKEN` を使用するようにワークフローを更新することを強くお勧めします。

{% ifversion fpt or ghec %}個人用アクセス トークンでレジストリの認証を行うワークフローの更新についてのガイダンスは、「[PAT を使ってレジストリにアクセスするワークフローをアップグレードする](/packages/managing-github-packages-using-github-actions-workflows/publishing-and-installing-a-package-with-github-actions#upgrading-a-workflow-that-accesses-a-registry-using-a-pat)」をご覧ください。{% endif %}

`GITHUB_TOKEN` の詳細については「[ワークフローで認証する](/actions/reference/authentication-in-a-workflow#using-the-github_token-in-a-workflow)」を参照してください。

アクションでレジストリを使用するときのベスト プラクティスについて詳しくは「[GitHub Actions のセキュリティ強化](/actions/getting-started-with-github-actions/security-hardening-for-github-actions#considering-cross-repository-access)」をご覧ください。
