---
title: Dependabot シークレット
shortTitle: Secrets
intro: '{% data variables.product.prodname_dependabot %} シークレット API を使うと、組織またはリポジトリの {% data variables.product.prodname_dependabot %} シークレットを管理し、制御できます。'
topics:
  - API
versions:
  fpt: '*'
  ghes: '>=3.4'
  ghec: '*'
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 0cabee9ace44e75d8fcd2ce81aa9d7583b39e59d
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '147882288'
---
## {% data variables.product.prodname_dependabot %} シークレット API について

{% data variables.product.prodname_dependabot %} シークレット API では、暗号化されたシークレットに関する情報を作成、更新、削除、および取得できます。 {% data reusables.actions.about-secrets %} 詳細については、「[Dependabot に対する暗号化されたシークレットを管理する](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot)」を参照してください。

{% data reusables.actions.actions-authentication %} {% data variables.product.prodname_github_apps %} には、この API を使用するための `dependabot_secrets` アクセス許可が必要です。 認証されたユーザは、シークレットを作成、更新、または読み取るために、リポジトリへのコラボレータアクセス権を持っている必要があります。
