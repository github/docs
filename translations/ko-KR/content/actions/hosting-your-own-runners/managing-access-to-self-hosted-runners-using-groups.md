---
title: 그룹을 사용하여 자체 호스팅 실행기에 대한 액세스 관리
shortTitle: Manage access with runner groups
intro: 정책을 사용하여 조직 또는 엔터프라이즈에 추가된 자체 호스팅 실행기에 대한 액세스를 제한할 수 있습니다.
redirect_from:
  - /actions/hosting-your-own-runners/managing-access-to-self-hosted-runners
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
ms.openlocfilehash: c6f53c3698800de519fe34231a8faf37924eacaa
ms.sourcegitcommit: d0cea547f6a5d991a28c310257cafd616235889f
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/01/2022
ms.locfileid: '148120891'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

{% ifversion target-runner-groups %} 특정 그룹의 실행기로 작업을 라우팅하는 방법에 대한 자세한 내용은 "그룹에서 [실행기 선택"을 참조하세요](/actions/using-jobs/choosing-the-runner-for-a-job#choosing-runners-in-a-group).
{% endif %}

## 실행기 그룹 정보

{% data reusables.actions.about-runner-groups %} {% ifversion fpt %}자세한 내용은 [{% data variables.product.prodname_ghe_cloud %} 설명서](/enterprise-cloud@latest/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups)를 참조하세요.{% endif %}

{% ifversion ghec or ghes or ghae %}

## 조직에 대한 자체 호스트된 실행기 그룹 만들기

{%- ifversion ghec or ghes %}

{% data reusables.actions.self-hosted-runner-security-admonition %}

{%- endif %}

{% data reusables.actions.creating-a-runner-group-for-an-organization %}

## 엔터프라이즈용 자체 호스트된 실행기 그룹 만들기

 {%- ifversion ghec or ghes %}

{% data reusables.actions.self-hosted-runner-security-admonition %}

{%- endif %}

{% data reusables.actions.creating-a-runner-group-for-an-enterprise %}

{% endif %}

## 자체 호스트된 실행기 그룹의 액세스 정책 변경

{%- ifversion fpt or ghec or ghes %}

{% data reusables.actions.self-hosted-runner-security-admonition %}

{%- endif %}

{% data reusables.actions.changing-the-access-policy-of-a-runner-group %}

## 실행기 그룹의 이름 변경

{% data reusables.actions.changing-the-name-of-a-runner-group %}

{% ifversion ghec or ghes or ghae %}
## 그룹에 자체 호스트된 실행기 자동 추가

{% data reusables.actions.automatically-adding-a-runner-to-a-group %}

## 자체 호스트된 실행기를 그룹으로 이동

{% data reusables.actions.moving-a-runner-to-a-group %}

## 자체 호스트된 실행기 그룹 제거

{% data reusables.actions.removing-a-runner-group %}

{% endif %}

{% data reusables.actions.section-using-unique-names-for-runner-groups %}
