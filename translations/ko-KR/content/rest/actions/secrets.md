---
title: GitHub Actions 비밀
allowTitleToDifferFromFilename: true
shortTitle: Secrets
intro: '{% data variables.product.prodname_actions %} 비밀 API를 사용하여 {% data variables.product.prodname_actions %} 워크플로에서 사용할 수 있는 암호화된 비밀에 관한 정보를 만들고, 업데이트하고, 삭제하고, 검색할 수 있습니다.'
topics:
  - API
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: bd72024abd61feb6b69e3efb09d1ddc2b8f27a23
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147061987'
---
## 비밀 API 정보

{% data variables.product.prodname_actions %} 비밀 API를 사용하여 {% data variables.product.prodname_actions %} 워크플로에서 사용할 수 있는 암호화된 비밀에 관한 정보를 만들고, 업데이트하고, 삭제하고, 검색할 수 있습니다. {% data reusables.actions.about-secrets %} 자세한 내용은 “[암호화된 비밀 만들기 및 사용](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)”을 참조하세요.

{% data reusables.actions.actions-authentication %} {% data variables.product.prodname_github_apps %}에서 API를 사용하려면 `secrets` 권한이 있어야 합니다. 인증된 사용자는 비밀을 만들고 업데이트하거나 읽기 위해 리포지토리에 대한 협력자 액세스 권한이 있어야 합니다.
