---
title: Git에서 항상 암호를 묻는 메시지를 표시하는 이유는 무엇인가요?
intro: GitHub와 상호 작용하려고 할 때마다 Git에서 사용자 이름 및 암호를 묻는 메시지가 표시되면 리포지토리에 HTTPS 복제 URL을 사용 중일 것입니다.
redirect_from:
  - /articles/why-is-git-always-asking-for-my-password
  - /github/using-git/why-is-git-always-asking-for-my-password
  - /github/getting-started-with-github/why-is-git-always-asking-for-my-password
  - /github/getting-started-with-github/getting-started-with-git/why-is-git-always-asking-for-my-password
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Git passwords
ms.openlocfilehash: a0812060e1e9aeb7e4d36049678e77e542bd8919
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098573'
---
HTTPS 원격 URL을 사용하는 경우 SSH를 사용할 때와 비교하여 몇 가지 이점이 있습니다. SSH보다 쉽게 설정할 수 있으며, 일반적으로 엄격한 방화벽 및 프록시를 통해 작동합니다. 그러나 리포지토리를 끌어오거나 푸시할 때마다 {% data variables.product.product_name %} 자격 증명을 입력하라는 메시지가 표시됩니다. 

{% data reusables.user-settings.password-authentication-deprecation %}

[자격 증명을 캐시](/github/getting-started-with-github/caching-your-github-credentials-in-git)하도록 Git을 구성하면 암호를 묻는 메시지가 표시되지 않도록 할 수 있습니다. 자격 증명 캐싱을 구성하면 HTTPS를 사용하여 리포지토리를 끌어오거나 푸시할 때 Git에서 캐시된 {% 데이터 variables.product.pat_generic %}을(를) 자동으로 사용합니다.

## 추가 참고 자료

- “[원격 리포지토리 정보](/github/getting-started-with-github/about-remote-repositories)”
- “[{% data variables.product.prodname_dotcom %}에 대한 인증 정보](/github/authenticating-to-github/about-authentication-to-github)”
- “[ssh-agent에 SSH 키 추가](/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#adding-your-ssh-key-to-the-ssh-agent)”
