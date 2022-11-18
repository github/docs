---
title: 삭제되었거나 누락된 SSH 키
intro: '보안 예방 조치로서 {% data variables.product.prodname_dotcom %}는 1년 동안 사용되지 않은 SSH 키를 자동으로 삭제합니다.'
redirect_from:
  - /articles/deleted-or-missing-ssh-keys
  - /github/authenticating-to-github/deleted-or-missing-ssh-keys
  - /github/authenticating-to-github/troubleshooting-ssh/deleted-or-missing-ssh-keys
versions:
  fpt: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: Deleted or missing SSH keys
ms.openlocfilehash: aa26a5bf39db3f41aa3c3aa01f59c392a42f467f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145088225'
---
{% data variables.product.prodname_dotcom %}는 누군가가 퇴사하거나 컴퓨터를 분실한 후와 같은 경우에 계정을 안전하게 유지하기 위해 비활성 SSH 키를 자동으로 삭제합니다.

계정의 보안 로그를 검토하여 1년 동안 SSH 키를 사용하지 않았는지 확인할 수 있습니다. 자세한 내용은 “[보안 로그 검토](/articles/reviewing-your-security-log/)”를 참조하세요.

비활성 SSH 키가 삭제된 후에는 새 SSH 키를 생성하여 계정과 연결해야 합니다. 자세한 내용은 “[새 SSH 키 생성 및 ssh-agent에 추가](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/)” 및 “[GitHub 계정에 새 SSH 키 추가](/articles/adding-a-new-ssh-key-to-your-github-account/)”를 참조하세요.
