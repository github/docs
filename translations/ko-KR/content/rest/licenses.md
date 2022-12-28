---
title: 라이선스
intro: 라이선스 API를 사용하면 인기 있는 오픈 소스 라이선스와 특정 프로젝트의 라이선스 파일에 대한 정보를 검색할 수 있습니다.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
redirect_from:
  - /rest/reference/licenses
ms.openlocfilehash: f6d229eb27764441ae040abaaca211b5a894e7ef
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147064868'
---
## 라이선스 API 정보

라이선스 API는 [오픈 소스 Ruby Gem 라이선스 실시권자](https://github.com/benbalter/licensee)를 사용하여 프로젝트의 라이선스를 식별하려고 시도합니다. 라이선스 실시권자는 프로젝트 `LICENSE` 파일의 콘텐츠(있는 경우)를 알려진 라이선스의 짧은 목록과 일치합니다. 따라서 API는 프로젝트 종속성의 라이선스 또는 설명서의 라이선스 이름에 대한 참조와 같은 프로젝트 라이선스를 문서화하는 다른 방법을 고려하지 않습니다.

라이선스가 일치하는 경우 반환되는 라이선스 키와 이름은 [SPDX 사양](https://spdx.org/)을 준수합니다.

**참고:** 다음과 같은 엔드포인트는 리포지토리의 라이선스 정보도 반환합니다.

- [리포지토리 가져오기](/rest/reference/repos#get-a-repository)
- [사용자를 위한 리포지토리 나열](/rest/reference/repos#list-repositories-for-a-user)
- [조직 리포지토리 나열](/rest/reference/repos#list-organization-repositories)
- [포크 나열](/rest/reference/repos#list-forks)
- [사용자가 보는 리포지토리 나열](/rest/reference/activity#list-repositories-watched-by-a-user)
- [팀 리포지토리 나열](/rest/reference/teams#list-team-repositories)

{% warning %}

GitHub는 많은 기능을 제공하지만 법률 회사가 아닙니다. 따라서 GitHub는 법률 자문을 제공하지 않습니다. 라이선스 API를 사용하거나 이에 대한 메일을 보내는 것은 법률 자문을 구성하지 않으며 변호사와 클라이언트 관계를 만들지 않습니다. 특정 라이선스로 수행할 수 있는 작업과 수행할 수 없는 사항에 대한 질문이 있는 경우 진행하기 전에 자신의 법률 고문과 상의해야 합니다. 법적 파급 효과가 있거나 법적 권리에 영향을 미칠 수 있는 결정을 내리기 전에 항상 자신의 변호사와 상의해야 합니다.

GitHub에서는 사용자가 오픈 소스 라이선스 및 라이선스를 사용하는 프로젝트에 대한 정보를 얻을 수 있도록 라이선스 API를 만들었습니다. 그것이 도움이 되기를 바라지만 당사는 변호사가 아니며(적어도 우리 대부분은 그렇지 않음) 모든 사람들과 같이 실수할 수 있다는 것을 명심하시기 바랍니다. 해당 이유로 GitHub는 “있는 그대로” API를 제공하고 이를 통하거나 이에 제공된 정보 또는 라이선스에 대한 보증을 하지 않으며 API 사용으로 인한 손해에 대한 책임을 부인합니다.

{% endwarning %}
