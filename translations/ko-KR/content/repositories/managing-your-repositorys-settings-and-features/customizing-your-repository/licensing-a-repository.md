---
title: 리포지토리 라이선싱
intro: 'GitHub의 퍼블릭 리포지토리는 오픈 소스 소프트웨어를 공유하는 데 자주 사용됩니다. 리포지토리가 진정으로 오픈 소스가 되려면 다른 사용자가 소프트웨어를 자유롭게 사용, 변경 및 배포할 수 있도록 라이선스를 부여해야 합니다.'
redirect_from:
  - /articles/open-source-licensing
  - /articles/licensing-a-repository
  - /github/creating-cloning-and-archiving-repositories/licensing-a-repository
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/licensing-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: 98ccb37379d8d639e02e98afab5bd170cca581c7
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098015'
---
## 올바른 라이선스 선택

코드를 라이선싱하는 방법을 이해하는 데 도움이 되는 [choosealicense.com](https://choosealicense.com)을 만들었습니다. 소프트웨어 라이선스는 소스 코드로 수행할 수 있는 작업과 수행할 수 없는 작업을 다른 사용자에게 알려주므로 정보에 입각한 결정을 내리는 것이 중요합니다.

라이선스를 선택할 의무는 없습니다. 그러나 라이선스가 없으면 기본 저작권법이 적용됩니다. 즉, 소스 코드에 대한 모든 권한을 보유하게 되며 아무도 결과물을 재현하거나, 배포하거나, 파생 결과물을 만들 수 없습니다. 오픈 소스 프로젝트를 만드는 경우 오픈 소스 라이선스를 포함하는 것이 좋습니다. [오픈 소스 가이드](https://opensource.guide/legal/#which-open-source-license-is-appropriate-for-my-project)는 프로젝트에 적절한 라이선스를 선택하는 방법에 대한 추가 지침을 제공합니다.

{% note %}

**참고:** {% 데이터 variables.product.product_name %}, 서비스 약관에 따라 {% ifversion fpt 또는 ghec %} [의](/free-pro-team@latest/github/site-policy/github-terms-of-service) 공용 리포지토리에 소스 코드를 게시하는 경우 {% endif %}의 다른 {% 데이터 variables.location.product_location %} 사용자는 리포지토리를 보고 포크할 권리가 있습니다. 리포지토리를 이미 만들었으며 더 이상 사용자가 리포지토리에 액세스할 수 없도록 하려면 리포지토리를 프라이빗으로 만들 수 있습니다. 리포지토리의 표시 유형을 프라이빗으로 변경하면 다른 사용자가 만든 기존 포크 또는 로컬 복사본이 계속 존재합니다. 자세한 내용은 “[리포지토리 표시 여부 설정](/github/administering-a-repository/setting-repository-visibility)”을 참조하세요.

{% endnote %}

## 라이선스 위치 결정

대부분의 사람들은 리포지토리의 루트에 `LICENSE.txt`(또는 `LICENSE.md`나 `LICENSE.rst`) 라이선스 텍스트를 배치합니다. [다음은 Hubot의 예제입니다](https://github.com/github/hubot/blob/master/LICENSE.md).

일부 프로젝트에는 추가 정보에 라이선스에 대한 정보가 포함됩니다. 예를 들어 프로젝트의 추가 정보에는 "이 프로젝트는 MIT 라이선스 조건에 따라 라이선스가 부여됩니다."라는 설명이 포함될 수 있습니다.

모범 사례로 프로젝트에 라이선스 파일을 포함하는 것이 좋습니다.

## 라이선스 유형별 GitHub 검색

`license` 한정자와 정확한 라이선스 키워드를 사용하여 라이선스 또는 라이선스 패밀리에 따라 리포지토리를 필터링할 수 있습니다.

라이선스 | 라이선스 키워드
---  | ---
| Academic Free License v3.0 | `afl-3.0` |
| Apache license 2.0 | `apache-2.0` |
| Artistic license 2.0 | `artistic-2.0` |
| Boost Software License 1.0 | `bsl-1.0` |
| BSD 2-clause "Simplified" 라이선스 | `bsd-2-clause` |
| BSD 3-clause "New" 또는 "Revised" 라이선스 | `bsd-3-clause` |
| BSD 3-clause Clear 라이선스 | `bsd-3-clause-clear` |
| Creative Commons 라이선스 제품군 | `cc` |
| Creative Commons Zero v1.0 Universal | `cc0-1.0` |
| Creative Commons Attribution 4.0 | `cc-by-4.0` |
| Creative Commons Attribution Share Alike 4.0 | `cc-by-sa-4.0` |
| Do What The F*ck You Want To Public License | `wtfpl` |
| Educational Community License v2.0 | `ecl-2.0` |
| Eclipse Public License 1.0 | `epl-1.0` |
| Eclipse Public License 2.0 | `epl-2.0` |
| European Union Public License 1.1 | `eupl-1.1` |
| GNU Affero General Public License v3.0 | `agpl-3.0` |
| GNU General Public License 제품군 | `gpl` |
| GNU General Public License v2.0 | `gpl-2.0` |
| GNU General Public License v3.0 | `gpl-3.0` |
| GNU Lesser General Public License 제품군 | `lgpl` |
| GNU Lesser General Public License v2.1 | `lgpl-2.1` |
| GNU Lesser General Public License v3.0 | `lgpl-3.0` |
| ISC | `isc` |
| LaTeX Project Public License v1.3c | `lppl-1.3c` |
| Microsoft 퍼블릭 라이선스 | `ms-pl` |
| MIT | `mit` |
| Mozilla Public License 2.0 | `mpl-2.0` |
| Open Software License 3.0 | `osl-3.0` |
| PostgreSQL 라이선스 | `postgresql` |
| SIL Open Font License 1.1 | `ofl-1.1` |
| 일리노이 대학교/NCSA 오픈 소스 라이선스 | `ncsa` |
| Unlicense | `unlicense` |
| zLib License | `zlib` |

패밀리 라이선스로 검색하는 경우 결과에는 해당 패밀리의 모든 라이선스가 포함됩니다. 예를 들어 쿼리 `license:gpl`을 사용하는 경우 결과에는 GNU General Public License v2.0 및 GNU General Public License v3.0에서 라이선스가 부여된 리포지토리가 포함됩니다. 자세한 내용은 “[리포지토리 검색](/search-github/searching-on-github/searching-for-repositories/#search-by-license)”을 참조하세요.

## 라이선스 검색

[오픈 소스 Ruby gem 라이선스 실시권자](https://github.com/licensee/licensee)는 리포지토리의 ‘라이선스’ 파일을 알려진 라이선스의 짧은 목록과 비교합니다. 또한 라이선스 실시권자는 [라이선스 API](/rest/reference/licenses)를 제공하며 [{% data variables.product.product_name %}의 리포지토리에 라이선스가 부여되는 방법에 대한 인사이트를 제공합니다](https://github.com/blog/1964-open-source-license-usage-on-github-com). 리포지토리에서 [라이선스 선택 웹 사이트](https://choosealicense.com/appendix/)에 나열되지 않은 라이선스를 사용하는 경우 [라이선스를 포함하도록 요청](https://github.com/github/choosealicense.com/blob/gh-pages/CONTRIBUTING.md#adding-a-license)할 수 있습니다.

리포지토리에서 라이선스 선택 웹 사이트에 나열된 라이선스를 사용하고 있고 리포지토리 페이지의 맨 위에 명확하게 표시되지 않는 경우 여러 라이선스 또는 기타 복잡성이 있는 것일 수 있습니다. 라이선스를 검색하려면 ‘라이선스’ 파일을 단순화하고 리포지토리의 ‘추가 정보’ 파일과 같은 다른 곳에서 복잡성을 기록해 둡니다.

## 기존 라이선스를 사용하여 리포지토리에 라이선스 적용

라이선스 선택기는 GitHub에서 새 프로젝트를 만들 때만 사용할 수 있습니다. 브라우저를 사용하여 라이선스를 수동으로 추가할 수 있습니다. 리포지토리에 라이선스를 추가하는 방법에 대한 자세한 내용은 "[리포지토리에 라이선스 추가](/articles/adding-a-license-to-a-repository)"를 참조하세요.

![GitHub.com의 라이선스 선택기 스크린샷](/assets/images/help/repository/repository-license-picker.png)

## 고지 사항

GitHub 오픈 소스 라이선싱 작업의 목표는 정보에 입각해서 선택을 할 수 있는 시작점을 제공하는 것입니다. GitHub에서는 사용자가 오픈 소스 라이선스 및 라이선스를 사용하는 프로젝트에 대한 정보를 얻을 수 있도록 라이선스 정보를 표시합니다. 그것이 도움이 되기를 바라지만 당사는 변호사가 아니며 모든 사람들과 같이 실수할 수 있다는 것을 명심하시기 바랍니다. 해당 이유로 GitHub는 “있는 그대로” 정보를 제공하고 이를 통하거나 이에 제공된 정보 또는 라이선스에 대한 보증을 하지 않으며 라이선스 정보 사용으로 인한 손해에 대한 책임을 부인합니다. 코드에 적합한 라이선스 또는 코드와 관련된 기타 법적 문제에 대해 질문이 있는 경우 항상 전문가와 상의하는 것이 가장 좋습니다.

## 추가 참고 자료

- 오픈 소스 가이드 섹션 "[오픈 소스의 법적 측면](https://opensource.guide/legal/)"{% ifversion fpt or ghec %}
- [{% data variables.product.prodname_learning %}]({% data variables.product.prodname_learning_link %}){% endif %}
