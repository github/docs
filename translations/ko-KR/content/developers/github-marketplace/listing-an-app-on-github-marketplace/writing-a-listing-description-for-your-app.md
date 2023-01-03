---
title: 앱에 대한 목록 설명 작성
intro: '{% data variables.product.prodname_marketplace %}에 [앱을 나열](/marketplace/listing-on-github-marketplace/)하려면 앱에 대한 설명을 작성하고 GitHub의 지침을 따르는 이미지를 제공해야 합니다.'
redirect_from:
  - /apps/marketplace/getting-started-with-github-marketplace-listings/guidelines-for-writing-github-app-descriptions
  - /apps/marketplace/creating-and-submitting-your-app-for-approval/writing-github-app-descriptions
  - /apps/adding-integrations/listing-apps-on-github-marketplace/guidelines-for-creating-a-github-marketplace-listing
  - /apps/marketplace/listing-apps-on-github/guidelines-for-creating-a-github-marketplace-listing
  - /apps/marketplace/getting-started-with-github-marketplace-listings/guidelines-for-creating-github-marketplace-listing-images
  - /apps/marketplace/creating-and-submitting-your-app-for-approval/creating-github-marketplace-listing-images
  - /apps/marketplace/listing-on-github-marketplace/writing-github-marketplace-listing-descriptions
  - /marketplace/listing-on-github-marketplace/writing-github-marketplace-listing-descriptions
  - /developers/github-marketplace/writing-a-listing-description-for-your-app
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
shortTitle: Write listing descriptions
ms.openlocfilehash: 84be7e69295be0426e792e9db25c9e397bc00384
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148099342'
---
다음은 초안 목록의 **목록 설명** 섹션에서 작성해야 하는 필드에 대한 지침입니다.

## 이름 지정 및 링크

### 목록 이름

목록의 이름은 [{% data variables.product.prodname_marketplace %} homepage](https://github.com/marketplace)에 표시됩니다. 이름은 255자로 제한되며 앱 이름과 다를 수 있습니다. 이름이 사용자 또는 조직 이름이 아니면 {% 데이터 variables.location.product_location %}의 기존 계정과 이름이 같을 수 없습니다. 

### 간단한 설명

[{% data variables.product.prodname_marketplace %} 홈페이지](https://github.com/marketplace)의 앱 이름 아래에 “간단한” 설명이 표시됩니다.

![{% data variables.product.prodname_marketplace %} 간단한 앱 설명](/assets/images/marketplace/marketplace_short_description.png)

#### 길이

간단한 설명은 40~80자로 유지하는 것이 좋습니다. 더 많은 문자를 사용할 수 있지만 설명이 간결해야 고객이 빠르게 읽고 더 쉽게 이해할 수 있습니다.

#### 콘텐츠

- 앱의 기능을 설명합니다. 이 공간을 활용 방안에 사용하지 마세요. 예를 들면 다음과 같습니다.

  **적절한 예:** Lightweight project management for GitHub issues

  **잘못된 예:** Manage your projects and issues on GitHub

  **팁:** 활용 방안에서 동사의 끝에 “s”를 추가하여 허용 가능한 설명으로 바꿉니다. _GitHub에서 프로젝트 및 문제 관리_

- 설명에서 앱 이름을 반복해서 사용하지 마세요.

  **적절한 예:** A container-native continuous integration tool

  **잘못된 예:** Skycap is a container-native continuous integration tool

#### 서식 지정

- 문장은 항상 대문자로 시작합니다. 첫 글자와 적절한 명사만 대문자로 시작합니다.

- 짧은 설명 끝에 문장 부호를 사용하지 마세요. 간단한 설명에는 전체 문장이 포함되면 안 되고, 문장이 두 개 이상 포함되면 안 됩니다.

- 고유 명사만 대문자로 시작합니다. 예를 들면 다음과 같습니다.

  **적절한 예:** One-click delivery automation for web developers

  **잘못된 예:** One-click delivery automation for Web Developers

- 목록에서는 항상 [연속 쉼표](https://en.wikipedia.org/wiki/Serial_comma)를 사용합니다.

- GitHub 커뮤니티를 “사용자”로 언급하지 마세요.

  **적절한 예:** Create issues automatically for people in your organization

  **잘못된 예:** Create issues automatically for an organization's users

- API와 같이 잘 알려진 경우가 아니면 약어를 사용하지 마세요. 예를 들면 다음과 같습니다.

  **적절한 예:** Agile task boards, estimates, and reports without leaving GitHub

  **잘못된 예:** Agile task boards, estimates, and reports without leaving GitHub’s UI

### 범주

{% data variables.product.prodname_marketplace %}의 앱은 범주별로 표시할 수 있습니다. **기본 범주** 드롭다운에서 앱의 기본 기능을 가장 잘 설명하는 범주를 선택하고, 경우에 따라 앱에 잘 맞는 **보조 범주** 를 선택합니다.

### 지원되는 언어

앱이 특정 언어로만 작동하는 경우 앱에서 지원하는 프로그래밍 언어를 최대 10개 선택합니다. 이러한 언어는 앱의 {% data variables.product.prodname_marketplace %} 목록 페이지에 표시됩니다. 이 필드는 선택 사항입니다.

### 목록 URL

**필요한 URL**
* **고객 지원 URL:** 기술 지원, 제품 또는 계정 문의가 있을 때 고객이 이동하는 웹 페이지의 URL입니다.
* **개인정보처리방침 URL:** 앱의 개인정보처리방침을 표시하는 웹 페이지입니다.
* **설치 URL:** 이 필드는 OAuth 앱에 대해서만 표시됩니다. (GitHub 앱은 대신 GitHub 앱의 설정 페이지에서 선택적 설정 URL을 사용하기 때문에 이 URL을 사용하지 않습니다.) 고객이 OAuth 앱을 구매한 다음 설치하면 GitHub가 고객을 설치 URL로 리디렉션합니다. OAuth 권한 부여 흐름을 시작하려면 `https://github.com/login/oauth/authorize`로 고객을 리디렉션해야 합니다. 자세한 내용은 “[New purchases for OAuth Apps](/marketplace/integrating-with-the-github-marketplace-api/handling-new-purchases-and-free-trials/)”를 참조하세요. GitHub 앱을 나열하는 경우 이 필드를 건너뛰세요.

**선택적 URL**
* **회사 URL:** 회사 웹 사이트에 대한 링크입니다.
* **상태 URL:** 앱의 상태를 표시하는 웹 페이지에 대한 링크입니다. 상태 페이지에는 현재 및 과거 인시던트 보고서, 웹 애플리케이션 작동 시간 상태 및 예약된 유지 관리가 포함될 수 있습니다.
* **문서 URL:** 고객에게 앱을 사용하는 방법을 가르치는 문서에 대한 링크입니다.

## 로고 및 기능 카드

{% data variables.product.prodname_marketplace %}는 목록에 사각형 로고 이미지가 그려진 원형 배지를 함께 표시하여 앱을 시각적으로 구분합니다.

![GitHub Marketplace 로고 및 배지 이미지](/assets/images/marketplace/marketplace-logo-and-badge.png)

기능 카드는 앱의 로고, 이름과 브랜드 개성을 드러낸 사용자 지정 배경 이미지로 구성됩니다. 앱이 [홈페이지](https://github.com/marketplace) 맨 위에 있는 무작위 추천 앱 4개 중 하나인 경우 {% data variables.product.prodname_marketplace %}에서 이 카드를 표시합니다. 각 앱의 간단한 설명은 기능 카드 아래에 표시됩니다.

![기능 카드](/assets/images/marketplace/marketplace_feature_card.png)

이미지를 업로드하고 색을 선택하면 {% data variables.product.prodname_marketplace %} 초안 목록에 로고 및 기능 카드의 미리 보기가 표시됩니다.

#### 로고에 대한 지침

로고에 대한 사용자 지정 이미지를 업로드해야 합니다. 배지의 경우 배경색을 선택합니다.

- 목록을 게시할 때 로고를 확대할 필요가 없도록 200픽셀 x 200픽셀 이상의 로고 이미지를 업로드합니다.
- 로고가 사각형으로 잘립니다. 중앙에 로고가 있는 사각형 이미지 파일을 업로드하는 것이 좋습니다.
- 최상의 결과를 얻으려면 배경이 투명한 로고 이미지를 업로드하세요.
- 원활한 배지 모양을 제공하려면 로고 이미지의 배경색(또는 투명도)과 일치하는 배지 배경색을 선택합니다.
- 단어 또는 텍스트가 포함된 로고 이미지는 사용하지 마세요. 텍스트가 포함된 로고는 작은 화면에서 크기가 잘 조정되지 않습니다.

#### 기능 카드에 대한 지침

기능 카드에 대한 사용자 지정 배경 이미지를 업로드해야 합니다. 앱 이름에 대해 텍스트 색을 선택합니다.

- 배경 이미지에서 패턴 또는 질감을 사용하여 카드에 시각적 특성을 주고 {% data variables.product.prodname_marketplace %} 홈페이지의 어두운 배경에서 잘 보이도록 만듭니다. 기능 카드는 앱의 브랜드 개성을 잘 보여줘야 합니다.
- 배경 이미지는 965픽셀 x 482픽셀(너비 x 높이)입니다.
- 앱 이름 텍스트는 배경 이미지 위에서 뚜렷하게 잘 보이는 색상으로 선택합니다.

## 목록 세부 정보

앱의 방문 페이지로 이동하려면 {% data variables.product.prodname_marketplace %} 홈페이지 또는 범주 페이지에서 앱의 이름을 클릭합니다. 방문 페이지에는 앱에 대한 더 긴 설명이 표시되는데, “소개 설명”과 “자세한 설명”, 이렇게 두 부분으로 구성되어 있습니다.

“소개 설명”은 앱의 {% data variables.product.prodname_marketplace %} 방문 페이지 맨 위에 표시됩니다.

![{% data variables.product.prodname_marketplace %} 소개 설명](/assets/images/marketplace/marketplace_intro_description.png)

**자세히 읽기...** 를 클릭하면 “자세한 설명”이 표시됩니다.

![{% data variables.product.prodname_marketplace %} 자세한 설명](/assets/images/marketplace/marketplace_detailed_description.png)

이러한 설명을 작성하려면 다음 지침을 따르세요.

### 길이

[앱을 나열](/marketplace/listing-on-github-marketplace/)할 때 필수 “소개 설명” 필드에 1~2개 문장으로 구성된 150~250자 사이의 요약을 작성하는 것이 좋습니다. 더 많은 문자를 사용할 수 있지만 요약이 간결해야 고객이 빠르게 읽고 더 쉽게 이해할 수 있습니다.

선택적 “자세한 설명” 필드에서는 자세한 정보를 추가할 수 있습니다. 앱 방문 페이지의 소개 설명 아래에서 **자세히 알아보기...** 를 클릭하면 이 설명이 표시됩니다. 자세한 설명은 3~5개 [가치 제안](https://en.wikipedia.org/wiki/Value_proposition)으로 구성되며, 각 가치 제안은 1~2개 문장으로 설명합니다. 이 설명에는 최대 1,000자를 사용할 수 있습니다.

### 콘텐츠

- 소개 설명은 항상 앱 이름으로 시작합니다.

- 설명 및 가치 제안은 항상 능동태로 작성합니다.

### 서식 지정

- 가치 제안 제목은 항상 대문자로 시작합니다. 첫 글자와 적절한 명사만 대문자로 시작합니다.

- 설명에는 마침표를 사용합니다. 느낌표를 사용하지 마세요.

- 가치 제안 제목 끝에는 문장 부호를 사용하지 마세요. 가치 제안 제목은 전체 문장을 포함해서는 안 되며 둘 이상의 문장을 포함하면 안 됩니다.

- 각 가치 제안의 경우 제목 다음에 설명 단락이 따라옵니다. Markdown을 사용하여 제목을 [3레벨 헤더](/articles/basic-writing-and-formatting-syntax/#headings)로 서식을 지정합니다. 예를 들면 다음과 같습니다.

  ### 필요한 기술 알아보기

  GitHub 기술을 사용하면 GitHub를 사용하고, Markdown과 보다 효과적으로 통신하고, 병합 충돌을 처리하는 방법 등을 알아볼 수 있습니다.

- 고유 명사만 대문자로 시작합니다.

- 목록에서는 항상 [연속 쉼표](https://en.wikipedia.org/wiki/Serial_comma)를 사용합니다.

- GitHub 커뮤니티를 “사용자”로 언급하지 마세요.

  **적절한 예:** Create issues automatically for people in your organization

  **잘못된 예:** Create issues automatically for an organization's users

- API와 같이 잘 알려진 경우가 아니면 약어를 사용하지 마세요.

## 제품 스크린샷

앱의 방문 페이지에 표시할 앱의 스크린샷 이미지를 최대 5개 업로드할 수 있습니다. 각 스크린샷에 선택적 캡션을 추가하여 컨텍스트를 제공할 수 있습니다. 스크린샷을 업로드한 후에는 스크린샷을 방문 페이지에 표시하려는 순서로 끌 수 있습니다.

### 스크린샷에 대한 지침

- 이미지는 고해상도여야 합니다(너비 1200px 이상).
- 사용자가 한 이미지에서 다음 이미지로 클릭할 때 페이지 점프를 방지하려면 모든 이미지의 높이와 너비(가로 세로 비율)가 같아야 합니다.
- 사용자가 앱의 기능을 볼 수 있도록 사용자 인터페이스를 가급적 많이 표시합니다.
- 브라우저에서 앱의 스크린샷을 만들 때는 표시 창의 콘텐츠만 포함하세요. 더 작은 화면 크기에 맞춰 크기가 잘 조정되지 않는 주소 표시줄, 제목 표시줄 또는 도구 모음 아이콘은 포함하지 마세요.
- GitHub는 업로드한 스크린샷을 앱 방문 페이지의 상자에 업로드하는 표시하므로 스크린샷 주위에 상자나 테두리를 추가할 필요가 없습니다.
- 캡션은 짧고 명확할 때 가장 효과적입니다.

![GitHub Marketplace 스크린샷 이미지](/assets/images/marketplace/marketplace-screenshots.png)
