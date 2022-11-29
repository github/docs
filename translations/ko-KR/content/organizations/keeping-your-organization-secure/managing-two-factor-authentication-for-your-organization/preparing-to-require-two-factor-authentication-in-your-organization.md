---
title: 조직의 2단계 인증 요구 대비
intro: 2FA(2단계 인증)를 요구하기 전에 사용자에게 예정된 변경 내용을 알리고 이미 2FA를 사용하는 사용자를 확인할 수 있습니다.
redirect_from:
  - /articles/preparing-to-require-two-factor-authentication-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/preparing-to-require-two-factor-authentication-in-your-organization
  - /organizations/keeping-your-organization-secure/preparing-to-require-two-factor-authentication-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Prepare to require 2FA
ms.openlocfilehash: 67083113143145a6de7bba5412568609414f12a8
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145135106'
---
조직에서 2FA를 요구하기 최소 1주일 전에 {% ifversion fpt or ghec %}조직 멤버, 외부 협력자 및 청구 관리자{% else %}조직 멤버 및 외부 협력자{% endif %}에게 알리는 것이 좋습니다.

엔터프라이즈에 대해 2단계 인증을 사용하도록 요구하는 경우 2FA를 사용하지 않는 멤버, 외부 협력자 및 청구 관리자(봇 계정 포함)가 조직에서 제거되고 해당 리포지토리에 대한 액세스 권한이 손실됩니다. 또한 조직의 프라이빗 리포지토리 포크에 액세스할 수 없게 됩니다.

조직에서 2FA를 요구하기 전에 다음을 수행하는 것이 좋습니다.
  - 개인 계정에서 [2FA 사용](/articles/securing-your-account-with-two-factor-authentication-2fa/)
  - 조직의 사용자에게 계정에 대해 2FA를 설정하도록 요청
  - [조직의 사용자가 2FA를 사용하도록 설정했는지](/articles/viewing-whether-users-in-your-organization-have-2fa-enabled/) 여부 확인
  - 2FA를 사용하도록 설정하면 2FA가 없는 사용자가 조직에서 자동으로 제거됨을 사용자에게 경고
