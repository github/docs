---
title: Viewing your GitHub Packages usage(GitHub Packages 사용량 보기)
intro: '{% data variables.product.prodname_registry %}에 대한 스토리지 및 데이터 전송 사용량 세부 정보를 확인할 수 있습니다.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/viewing-your-github-packages-usage
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages/viewing-your-github-packages-usage
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Enterprise
  - Packages
  - Organizations
  - User account
shortTitle: View your usage
ms.openlocfilehash: 98cce486487c5f8a3801852b6a2b4ce7fdeb210d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147060444'
---
## 개인 계정에 대한 {% data variables.product.prodname_registry %} 사용량 보기

누구나 자신의 개인 계정에 대한 {% data variables.product.prodname_registry %} 사용량을 볼 수 있습니다.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.billing_plans %} {% data reusables.dotcom_billing.packages-data %} {% data reusables.dotcom_billing.actions-packages-storage %} {% data reusables.dotcom_billing.actions-packages-report-download %}

## 조직의 {% data variables.product.prodname_registry %} 사용량 보기

조직 소유자 및 청구 관리자는 조직의 {% data variables.product.prodname_registry %} 사용량을 볼 수 있습니다. 엔터프라이즈 계정으로 관리되는 조직의 경우 조직 소유자만 조직 청구 페이지에서 {% data variables.product.prodname_registry %} 사용량을 볼 수 있습니다.

{% data reusables.organizations.billing-settings %} {% data reusables.dotcom_billing.packages-data %} {% data reusables.dotcom_billing.actions-packages-storage %} {% data reusables.dotcom_billing.actions-packages-report-download-org-account %}

{% ifversion ghec %}
## 엔터프라이즈 계정에 대한 {% data variables.product.prodname_registry %} 사용량 보기

엔터프라이즈 소유자 및 청구 관리자는 엔터프라이즈 계정에 대한 {% data variables.product.prodname_registry %} 사용량을 볼 수 있습니다.

{% note %}

**참고:** 엔터프라이즈 계정에 대한 청구 세부 정보는 조직당 스토리지 데이터 사용량만 요약합니다. {% data reusables.actions.enterprise-billing-details %}

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.billing-tab %}
1. “{% data variables.product.prodname_registry %}” 아래에서 엔터프라이즈 계정의 각 조직별 데이터 전송 사용량에 대한 세부 정보를 봅니다.
  ![데이터 전송 사용량에 대한 세부 정보](/assets/images/help/billing/packages-data-enterprise.png) {% data reusables.dotcom_billing.actions-packages-storage-enterprise-account %} {% data reusables.enterprise-accounts.actions-packages-report-download-enterprise-accounts %} {% endif %}
