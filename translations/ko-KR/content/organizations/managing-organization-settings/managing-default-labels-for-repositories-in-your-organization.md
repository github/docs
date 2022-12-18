---
title: 조직의 리포지토리에 대한 기본 레이블 관리
intro: 조직의 모든 새 리포지토리에 포함된 레이블을 사용자 지정할 수 있습니다.
redirect_from:
  - /articles/managing-default-labels-for-repositories-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/managing-default-labels-for-repositories-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage default labels
ms.openlocfilehash: a2591c84d3844bfdadc3c7321d7ce8eec2adf293
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145125727'
---
조직 소유자는 조직의 리포지토리에 대한 기본 레이블을 관리할 수 있습니다.

기본 레이블은 조직의 모든 새 리포지토리에 포함되지만 리포지토리에 대한 쓰기 권한이 있는 모든 사용자는 나중에 해당 리포지토리에서 레이블을 편집하거나 삭제할 수 있습니다. 기본 레이블을 추가, 편집 또는 삭제해도 기존 리포지토리에서 레이블이 추가, 편집 또는 삭제되지 않습니다.

## 기본 레이블 만들기

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.repository-defaults %}

5. "리포지토리 레이블"에서 **새 레이블** 을 클릭합니다.
  ![새 레이블 단추](/assets/images/help/organizations/new-label-button.png) {% data reusables.project-management.name-label %} {% data reusables.project-management.label-description %} {% data reusables.project-management.label-color-randomizer %} {% data reusables.project-management.create-label %}

## 기본 레이블 편집

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.repository-defaults %}

{% data reusables.project-management.edit-label %} {% data reusables.project-management.name-label %} {% data reusables.project-management.label-description %} {% data reusables.project-management.label-color-randomizer %} {% data reusables.project-management.save-label %}

## 기본 레이블 삭제

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.repository-defaults %}

{% data reusables.project-management.delete-label %} {% data reusables.project-management.confirm-label-deletion %}

## 추가 참고 자료

- “[레이블 정보](/articles/about-labels)”
