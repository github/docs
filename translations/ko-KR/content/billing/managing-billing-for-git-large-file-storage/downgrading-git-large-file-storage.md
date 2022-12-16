---
title: Git Large File Storage 다운그레이드
intro: '{% data variables.large_files.product_name_short %}의 스토리지 및 대역폭을 매월 50GB씩 증분하여 다운그레이드할 수 있습니다.'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/downgrading-git-large-file-storage
  - /articles/downgrading-storage-and-bandwidth-for-a-personal-account
  - /articles/downgrading-storage-and-bandwidth-for-an-organization
  - /articles/downgrading-git-large-file-storage
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-git-large-file-storage/downgrading-git-large-file-storage
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Downgrades
  - LFS
  - Organizations
  - User account
shortTitle: Downgrade Git LFS storage
ms.openlocfilehash: 9e23d3d8eaee5362375ca427a7b58505eccbaa05
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145088144'
---
데이터 팩 수를 다운그레이드하는 경우 다음 청구 날짜에 변경 내용이 적용됩니다. 자세한 내용은 “[{% data variables.large_files.product_name_long %} 요금 청구 정보](/articles/about-billing-for-git-large-file-storage)”를 참조하세요.

## 개인 계정의 스토리지 및 대역폭 다운그레이드

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.billing_plans %} {% data reusables.dotcom_billing.lfs-remove-data %} {% data reusables.large_files.downgrade_data_packs %}

## 조직의 스토리지 및 대역폭 다운그레이드

{% data reusables.dotcom_billing.org-billing-perms %}

{% data reusables.organizations.billing-settings %} {% data reusables.dotcom_billing.lfs-remove-data %} {% data reusables.large_files.downgrade_data_packs %}
