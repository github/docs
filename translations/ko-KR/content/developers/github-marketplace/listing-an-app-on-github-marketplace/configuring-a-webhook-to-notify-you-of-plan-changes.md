---
title: 플랜 변경 내용을 알리도록 웹후크 구성
intro: '[{% data variables.product.prodname_marketplace %} 목록 초안을 만든](/marketplace/listing-on-github-marketplace/creating-a-draft-github-marketplace-listing/) 후 고객 계정 플랜에 변경이 발생할 때 알림을 제공하는 웹후크를 구성할 수 있습니다. 웹후크를 구성한 후 앱에서[ `marketplace_purchase`이벤트 유형](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/)을 처리할 수 있습니다.'
redirect_from:
  - /apps/adding-integrations/managing-listings-on-github-marketplace/adding-webhooks-for-a-github-marketplace-listing
  - /apps/marketplace/managing-github-marketplace-listings/adding-webhooks-for-a-github-marketplace-listing
  - /apps/marketplace/setting-up-github-marketplace-webhooks/creating-a-webhook-for-a-github-marketplace-listing
  - /apps/marketplace/listing-on-github-marketplace/configuring-the-github-marketplace-webhook
  - /marketplace/listing-on-github-marketplace/configuring-the-github-marketplace-webhook
  - /developers/github-marketplace/configuring-a-webhook-to-notify-you-of-plan-changes
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
shortTitle: Webhooks for plan changes
ms.openlocfilehash: 85ffaa8809860ff4b693075e416723717296f86c
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145089702'
---
{% data variables.product.prodname_marketplace %} 이벤트 웹후크는 애플리케이션의 {% data variables.product.prodname_marketplace %} 목록 페이지에서만 설정할 수 있습니다. [애플리케이션의 개발자 설정 페이지](https://github.com/settings/developers)에서 다른 모든 이벤트를 구성할 수 있습니다. {% data variables.product.prodname_marketplace %} 목록을 만들지 않았다면, “[{% data variables.product.prodname_marketplace %} 목록 초안 만들기](/marketplace/listing-on-github-marketplace/creating-a-draft-github-marketplace-listing/)”를 읽고 방법을 확인하세요.

## webhook 만들기

{% data variables.product.prodname_marketplace %} 목록에서 웹후크를 만들려면 [{% data variables.product.prodname_marketplace %} 목록 페이지](https://github.com/marketplace/manage)의 왼쪽 사이드바에서 **웹후크** 를 클릭합니다. 웹후크를 구성하는 데 필요한 다음 웹후크 구성 옵션이 표시됩니다.

### 페이로드 URL

{% data reusables.webhooks.payload_url %}

### 내용 유형

{% data reusables.webhooks.content_type %} GitHub에서는 `application/json` 콘텐츠 형식을 사용하는 것이 좋습니다.

### 비밀

{% data reusables.webhooks.secret %}

### Active

기본적으로 웹후크는 “활성”으로 제공됩니다. 개발 중에 “활성”을 선택 취소하여 웹후크 페이로드의 제공을 사용하지 않도록 선택할 수 있습니다. 웹후크 제공을 사용하지 않도록 설정한 경우 검토를 위해 앱을 제출하기 전 “활성”을 선택해야 합니다.

## 웹후크 제공 보기

{% data variables.product.prodname_marketplace %} 웹후크를 구성하면 애플리케이션의 [{% data variables.product.prodname_marketplace %} 목록](https://github.com/marketplace/manage)에 대한 **웹후크** 페이지에서 `POST` 요청 페이로드를 검사할 수 있습니다. GitHub는 제공 시도가 실패하면 다시 전송하지 않습니다. 앱이 GitHub에서 보낸 모든 웹후크 페이로드를 받을 수 있는지 확인합니다.

![최근 {% data variables.product.prodname_marketplace %} 웹후크 제공 검사](/assets/images/marketplace/marketplace_webhook_deliveries.png)
