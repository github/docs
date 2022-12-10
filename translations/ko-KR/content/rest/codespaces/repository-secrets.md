---
title: Codespaces 리포지토리 비밀
allowTitleToDifferFromFilename: true
shortTitle: Repository secrets
intro: REST API를 사용하여 사용자가 codespace에서 액세스할 수 있는 리포지토리에 대한 비밀을 관리합니다.
permissions: 'Users with write access to a repository can manage {% data variables.product.prodname_codespaces %} repository secrets.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: f38e196db7ab0601a28612cf13c363f18181342a
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192731'
---
## {% data variables.product.prodname_codespaces %} 리포지토리 비밀 정보

사용자가 액세스할 수 있는 리포지토리에 대한 비밀(예: 클라우드 서비스에 대한 액세스 토큰)을 만들고 나열하고 삭제할 수 있습니다. 이러한 비밀은 런타임에 codespace에서 사용할 수 있습니다. 자세한 내용은 “[codespace에 대한 암호화된 비밀 관리](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)”를 참조하세요.
