---
title: Codespaces 리포지토리 비밀
allowTitleToDifferFromFilename: true
shortTitle: Repository secrets
intro: 'Codespaces 리포지토리 비밀 API를 사용하면 Codespaces에서 사용자가 액세스할 수 있는 리포지토리에 대한 비밀(예: 클라우드 서비스에 대한 액세스 토큰)을 만들고, 나열하고, 삭제할 수 있습니다.'
permissions: 'Users with write access to a repository can manage {% data variables.product.prodname_codespaces %} repository secrets.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 95b3dfaafef598bf05f55d697716eb1036093697
ms.sourcegitcommit: 9490533fcb7b7d5c16f8fea082a06ee66dd5db8f
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/16/2022
ms.locfileid: '148165603'
---
## Codespaces 리포지토리 비밀 API 정보

Codespaces 리포지토리 비밀 API를 사용하면 사용자가 액세스할 수 있는 리포지토리에 대한 비밀(예: 클라우드 서비스에 대한 액세스 토큰)을 만들고, 나열하고, 삭제할 수 있습니다. 이러한 비밀은 런타임에 codespace에서 사용할 수 있습니다. 자세한 내용은 “[codespace에 대한 암호화된 비밀 관리](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)”를 참조하세요.
