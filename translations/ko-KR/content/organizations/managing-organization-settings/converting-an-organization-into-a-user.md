---
title: 조직을 사용자로 변환
intro: 조직을 개인 계정으로 변환할 수는 없지만 새 개인 계정을 만들고 조직의 리포지토리를 해당 계정으로 이전할 수 있습니다.
redirect_from:
  - /articles/converting-an-organization-into-a-user
  - /github/setting-up-and-managing-organizations-and-teams/converting-an-organization-into-a-user
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Convert organization to user
ms.openlocfilehash: ef6baa2db188570476ee36d5f6932a87d615d2ec
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145149804'
---
{% ifversion fpt or ghec %}

{% note %}

**참고**: 계정이 삭제된 후에는 삭제 시 사용자 이름을 90일 동안 다시 사용할 수 없게 됩니다. 조직의 사용자 이름을 즉시 다시 사용하려면 조직을 삭제하기 전에 사용자 이름을 변경해야 합니다.

 {% endnote %}

1. GitHub에서 새 계정에 [등록](/articles/signing-up-for-a-new-github-account)합니다.
2. [사용자 역할을 소유자로 변경합니다](/articles/changing-a-person-s-role-to-owner).
3. 새 개인 계정에 {% data variables.product.signin_link %}합니다.
4. 새 개인 계정에 [각 조직 리포지토리를 전송](/articles/how-to-transfer-a-repository)합니다.
5. 현재 사용자 이름을 사용할 수 있도록 [조직의 이름을 바꿉니다](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/changing-your-github-username).
6. 조직 이름으로 [사용자 이름을 바꿉니다](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/changing-your-github-username).
7. [조직을 삭제](/organizations/managing-organization-settings/deleting-an-organization-account)합니다.


{% else %}

1. 새 GitHub Enterprise 개인 계정에 등록합니다.
2. [사용자 역할을 소유자로 변경합니다](/articles/changing-a-person-s-role-to-owner).
3. 새 개인 계정에 {% data variables.product.signin_link %}합니다.
4. 새 개인 계정에 [각 조직 리포지토리를 전송](/articles/how-to-transfer-a-repository)합니다.
5. [조직을 삭제](/articles/deleting-an-organization-account)합니다.
6. 조직 이름으로 [사용자 이름을 바꿉니다](/articles/changing-your-github-username).

{% endif %}
