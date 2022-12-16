---
title: 2단계 인증 및 SAML Single Sign-On 정보
intro: 조직 관리자는 SAML Single Sign-On 및 2단계 인증을 모두 사용하도록 설정하여 조직 구성원에 대한 추가 인증 조치를 추가할 수 있습니다.
redirect_from:
  - /articles/about-two-factor-authentication-and-saml-single-sign-on
  - /github/setting-up-and-managing-organizations-and-teams/about-two-factor-authentication-and-saml-single-sign-on
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: 2FA & SAML single sign-on
ms.openlocfilehash: f435097c61c12387d1d4f40bbdc924a8c56a3de4
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148099157'
---
2FA(2단계 인증)는 조직 구성원에 대한 기본 인증을 제공합니다. 조직 관리자는 2FA를 사용하도록 설정하여 {% 데이터 variables.location.product_location %}에 대한 구성원의 계정이 손상될 가능성을 제한합니다. 2FA에 대한 자세한 내용은 “[2단계 인증 정보](/articles/about-two-factor-authentication)”를 참조하세요.

추가 인증 조치를 추가하기 위해 조직 관리자는 [SAML SSO(Single Sign-On)를 사용하도록 설정](/articles/enabling-and-testing-saml-single-sign-on-for-your-organization)하여 조직 구성원이 Single Sign-On을 사용하여 조직에 액세스하도록 해야 합니다. SAML SSO에 대한 자세한 내용은 “[SAML Single Sign-On을 사용한 ID 및 액세스 관리 정보](/articles/about-identity-and-access-management-with-saml-single-sign-on)”를 참조하세요.

2FA 및 SAML SSO를 모두 사용하는 경우 조직 구성원은 다음을 수행해야 합니다.
- 2FA를 사용하여 {% 데이터 variables.location.product_location %}에서 계정에 로그인
- Single Sign-On을 사용하여 조직에 액세스
- API 또는 Git 액세스에 대해 권한 있는 토큰을 사용하고 Single Sign-On을 사용하여 토큰에 권한 부여

## 추가 참고 자료

- [조직에 SAML SSO(Single Sign-On) 적용](/articles/enforcing-saml-single-sign-on-for-your-organization).
