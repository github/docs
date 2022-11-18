---
title: Viewing your GitHub Actions usage(GitHub Actions 사용량 보기)
intro: '{% data variables.product.prodname_actions %}에 대한 컴퓨팅(분) 및 스토리지 사용량에 대한 세부 정보를 볼 수 있습니다.'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/viewing-your-github-actions-usage
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions/viewing-your-github-actions-usage
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Actions
  - Enterprise
  - Organizations
  - User account
shortTitle: View your Actions usage
ms.openlocfilehash: a41da21abe606b0de11bf7cf7e1b8be6f4e2edbe
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147065172'
---
개별 워크플로 실행의 청구 가능한 작업 실행 시간(분)을 볼 수도 있습니다. 자세한 내용은 “[작업 실행 시간 보기](/actions/managing-workflow-runs/viewing-job-execution-time)”를 참조하세요.

## 개인 계정의 {% data variables.product.prodname_actions %} 사용량 보기

모든 사용자는 개인 계정의 {% data variables.product.prodname_actions %} 사용량을 볼 수 있습니다.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.billing_plans %} {% data reusables.dotcom_billing.actions-minutes %} {% data reusables.dotcom_billing.actions-packages-storage %} {% data reusables.dotcom_billing.actions-packages-report-download %}

## 조직의 {% data variables.product.prodname_actions %} 사용량 보기

조직 소유자와 청구 관리자는 조직의 {% data variables.product.prodname_actions %} 사용량을 볼 수 있습니다. 엔터프라이즈 계정으로 관리되는 조직의 경우 조직 소유자만 조직 청구 페이지에서 {% data variables.product.prodname_actions %} 사용량을 볼 수 있습니다.

{% data reusables.organizations.billing-settings %} {% data reusables.dotcom_billing.actions-minutes %} {% data reusables.dotcom_billing.actions-packages-storage %} {% data reusables.dotcom_billing.actions-packages-report-download-org-account %}

{% ifversion ghec %}
## 엔터프라이즈 계정의 {% data variables.product.prodname_actions %} 사용량 보기

엔터프라이즈 소유자와 청구 관리자는 엔터프라이즈 계정의 {% data variables.product.prodname_actions %} 사용량을 볼 수 있습니다.

{% note %}

**참고:** 엔터프라이즈 계정에 대한 청구 세부 정보에 각 운영 체제의 사용 시간(분)은 요약되지 않습니다. {% data reusables.actions.enterprise-billing-details %}

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.billing-tab %}
1. “{% data variables.product.prodname_actions %}”에서 엔터프라이즈 계정의 각 조직별 데이터 전송량에 대한 세부 정보를 봅니다.
  ![사용 시간(분) 세부 정보](/assets/images/help/billing/actions-minutes-enterprise.png) {% data reusables.dotcom_billing.actions-packages-storage-enterprise-account %} {% data reusables.enterprise-accounts.actions-packages-report-download-enterprise-accounts %} {% endif %}
