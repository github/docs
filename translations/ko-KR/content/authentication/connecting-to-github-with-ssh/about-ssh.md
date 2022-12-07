---
title: SSH 정보
intro: 'SSH 프로토콜을 사용하여 원격 서버 및 서비스에 연결하고 인증할 수 있습니다. SSH 키를 사용하면 각 방문 시 사용자 이름 및 {% data variables.product.pat_generic %}를 제공하지 않고 {% data variables.product.product_name %}에 연결할 수 있습니다. {% ifversion ssh-commit-verification %} SSH 키를 사용하여 커밋에 서명할 수도 있습니다. {% endif %}'
redirect_from:
  - /articles/about-ssh
  - /github/authenticating-to-github/about-ssh
  - /github/authenticating-to-github/connecting-to-github-with-ssh/about-ssh
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
ms.openlocfilehash: 51a72821217e5d47092ed77e923b38f4cf248010
ms.sourcegitcommit: a0ad3bfe2a99c3092e76ca9b3d476cf30988ca55
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/28/2022
ms.locfileid: '148118981'
---
{% data reusables.ssh.about-ssh %} SSH에 대한 자세한 내용은 Wikipedia의 [Secure Shell](https://en.wikipedia.org/wiki/Secure_Shell)을 참조하세요.

SSH를 설정할 때 새 프라이빗 SSH 키를 생성하고 SSH 에이전트에 추가해야 합니다. 인증을{% ifversion ssh-commit-verification %} 또는 커밋에 서명하기{% endif %} 위해 키를 사용하기 전에 먼저 {% data variables.product.product_name %}의 계정에 공용 SSH 키도 추가해야 합니다. 자세한 내용은 “[새 SSH 키를 생성하여 ssh-agent에 추가](/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)”{% ifversion ssh-commit-verification %}, {% else %} 및 {% endif %} “[{% data variables.product.prodname_dotcom %} 계정에 새 SSH 키 추가](/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account){% ifversion ssh-commit-verification %}” 및 “[커밋 서명 확인 정보](/articles/about-commit-signature-verification){% endif %}”를 참조하세요.

SSH로 인증하기 위해 키 쌍을 사용할 때 물리적인 하드웨어 보안 키를 컴퓨터에 연결해야 하는 하드웨어 보안 키를 사용하면 SSH 키의 보안을 강화할 수 있습니다. ssh-agent에 키를 추가하고 암호를 사용하여 SSH 키를 보호할 수도 있습니다. 자세한 내용은 “[SSH 키 암호 사용](/authentication/connecting-to-github-with-ssh/working-with-ssh-key-passphrases)”을 참조하세요.

{% ifversion fpt or ghec %}SAML Single Sign-On을 사용하는 조직이 소유한 리포지토리에서 SSH 키를 사용하려면 키에 권한을 부여해야 합니다. 자세한 내용은 {% data variables.product.prodname_ghe_cloud %} 설명서에서 “[SAML Single Sign-On에 사용할 SSH 키 권한 부여](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/authorizing-an-ssh-key-for-use-with-saml-single-sign-on){% ifversion fpt %}”를 참조하세요.{% else %}.”{% endif %}{% endif %}

계정 보안을 유지하기 위해 SSH 키 목록을 정기적으로 검토하고 유효하지 않거나 손상된 키를 취소할 수 있습니다. 자세한 내용은 “[SSH 키 검토](/github/authenticating-to-github/reviewing-your-ssh-keys)”를 참조하세요.

{% ifversion fpt or ghec %} 1년 동안 SSH 키를 사용하지 않은 경우 {% data variables.product.prodname_dotcom %}은(는) 보안 예방 조치로 비활성 SSH 키를 자동으로 삭제합니다. 자세한 내용은 “[삭제되거나 누락된 SSH 키](/articles/deleted-or-missing-ssh-keys)”를 참조하세요.
{% endif %}

{% ifversion fpt %} {% data variables.product.prodname_ghe_cloud %}를 사용하는 조직은 SSH 인증서를 제공할 수 있습니다. 이 인증서는 멤버가 {% data variables.product.product_name %}의 계정에 인증서를 추가하지 않고도 해당 조직의 리포지토리에 액세스하는 데 사용할 수 있습니다. SSH 인증서를 사용하는 경우 포크가 개인 계정 소유라면 인증서를 사용하여 조직의 리포지토리 포크에 액세스할 수 없습니다. 자세한 내용은 {% data variables.product.prodname_ghe_cloud %} 설명서에서 “[SSH 인증 기관 정보](/enterprise-cloud@latest/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities)”를 참조하세요.
{% else ghec or ghes or ghae %} SSH 인증서를 제공하는 조직 멤버는 {% data variables.product.product_name %} 계정에 인증서를 추가하지 않고도 인증서를 사용하여 해당 조직의 리포지토리에 액세스할 수 있습니다. 포크가 개인 계정의 소유인 경우 인증서를 사용하여 조직 리포지토리의 포크에 액세스할 수 없습니다. 자세한 내용은 “[SSH 인증 기관 정보](/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities)”를 참조하세요.
{% endif %}
## 추가 참고 자료

- “[SSH 문제 해결](/articles/troubleshooting-ssh)”
