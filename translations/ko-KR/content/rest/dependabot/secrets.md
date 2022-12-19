---
title: Dependabot 비밀
shortTitle: Secrets
intro: '{% data variables.product.prodname_dependabot %} 비밀 API를 사용하면 조직 또는 리포지토리에 대한 {% data variables.product.prodname_dependabot %} 비밀을 관리하고 제어할 수 있습니다.'
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
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147882289'
---
## {% data variables.product.prodname_dependabot %} 비밀 API 정보

{% data variables.product.prodname_dependabot %} 비밀 API를 사용하면 암호화된 비밀에 대한 정보를 만들고, 업데이트하고, 삭제하고, 검색할 수 있습니다. {% data reusables.actions.about-secrets %} 자세한 내용은 “[Dependabot에 대한 암호화된 비밀 관리](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot)”를 참조하세요.

{% data reusables.actions.actions-authentication %} {% data variables.product.prodname_github_apps %}이 API를 사용하려면 `dependabot_secrets` 권한이 있어야 합니다. 인증된 사용자는 비밀을 만들고 업데이트하거나 읽기 위해 리포지토리에 대한 협력자 액세스 권한이 있어야 합니다.
