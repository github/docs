---
title: GitHub 앱
allowTitleToDifferFromFilename: true
intro: '{% data variables.product.prodname_github_apps %} API를 사용하면 {% data variables.product.prodname_github_apps %}에 대한 정보를 검색할 수 있습니다.'
topics:
  - API
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: b9bb851837d7a5c61a74917eacf2154e7f29bc71
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146769191'
---
## {% data variables.product.prodname_github_apps %} API 정보

{% data reusables.apps.general-apps-restrictions %}

이 페이지에는 GitHub 앱으로 인증하는 동안 액세스할 수 있는 엔드포인트가 나열됩니다. 자세한 내용은 “[GitHub 앱으로 인증](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app)”을 참조하세요.

GitHub 앱으로 인증되면 GitHub 앱 API를 사용하여 GitHub 앱에 대한 상위 수준 정보와 앱 설치에 대한 특정 정보를 얻을 수 있습니다.

GitHub 앱으로 인증된 상태에서 REST API 엔드포인트에 액세스할 수 있습니다. 이러한 엔드포인트에는 "GitHub 앱과 함께 작동"이라는 텍스트가 있습니다. 사용자로 인증된 상태에서 이러한 엔드포인트에 액세스할 수도 있습니다.

REST API 엔드포인트의 하위 집합은 GitHub 앱 설치로 인증해야 합니다. 이러한 엔드포인트 목록은 [설치](/rest/reference/apps#installations)를 참조하세요.
