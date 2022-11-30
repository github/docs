---
title: SAML Single Sign-On을 사용하여 봇 및 서비스 계정 관리
intro: SAML Single Sign-On을 사용하도록 설정한 조직은 봇 및 서비스 계정에 대한 액세스를 유지할 수 있습니다.
redirect_from:
  - /articles/managing-bots-and-service-accounts-with-saml-single-sign-on
  - /github/setting-up-and-managing-organizations-and-teams/managing-bots-and-service-accounts-with-saml-single-sign-on
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage bots & service accounts
ms.openlocfilehash: 57f1150929db674a658d52a5cb7e455444cc48de
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145135177'
---
봇 및 서비스 계정에 대한 액세스를 유지하기 위해 조직 관리자는 조직에 SAML Single Sign-On을 [사용하도록 설정](/articles/enabling-and-testing-saml-single-sign-on-for-your-organization)할 수 있지만 [적용](/articles/enforcing-saml-single-sign-on-for-your-organization)할 수는 **없습니다**. 조직에 SAML Single Sign-On을 적용해야 하는 경우 IdP(ID 공급자)를 사용하여 봇 또는 서비스 계정에 대한 외부 ID를 만들 수 있습니다.

{% warning %}

**참고:** 조직에 SAML Single Sign-On을 적용하고 IdP를 사용하여 봇 및 서비스 계정에 대해 외부 ID를 설정 **하지 않은** 경우 조직에서 제거됩니다.

{% endwarning %}

## 추가 참고 자료

- [SAML Single Sign-On을 사용하는 ID 및 액세스 관리 정보](/articles/about-identity-and-access-management-with-saml-single-sign-on)
