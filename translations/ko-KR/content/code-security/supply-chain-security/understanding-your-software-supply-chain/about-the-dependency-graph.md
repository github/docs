---
title: 종속성 그래프 정보
intro: 종속성 그래프를 사용하여 프로젝트의 모든 종속성을 식별할 수 있습니다. 종속성 그래프는 널리 사용되는 다양한 패키지 에코시스템을 지원합니다.
redirect_from:
  - /github/visualizing-repository-data-with-graphs/about-the-dependency-graph
  - /code-security/supply-chain-security/about-the-dependency-graph
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Dependency graph
  - Dependencies
  - Repositories
shortTitle: Dependency graph
ms.openlocfilehash: 4a8d58f0844337e7b8f88aabe72690a9a46bfaa0
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106495'
---
<!--For this article in earlier GHES versions, see /content/github/visualizing-repository-data-with-graphs-->
<!--Marketing-LINK: From /features/security and /features/security/software-supply-chain pages "How GitHub's dependency graph is generated".-->

## 종속성 그래프 정보

{% data reusables.dependabot.about-the-dependency-graph %}

지원되는 매니페스트 또는 잠금 파일을 변경하거나 기본 분기에 추가하는 {% data variables.product.product_name %}에 커밋을 푸시하면 종속성 그래프가 자동으로 업데이트됩니다.{% ifversion fpt or ghec %} 또한, 종속성 중 하나의 리포지토리에 변경 내용을 푸시할 때 그래프가 업데이트됩니다.{% endif %} 지원되는 에코시스템 및 매니페스트 파일에 대한 자세한 내용은 아래의 “[지원되는 패키지 에코시스템](#supported-package-ecosystems)”을 참조하세요.

{% ifversion dependency-submission-api %} {% data reusables.dependency-submission.dependency-submission-link %} {% endif %}

기본 분기를 대상으로 하는 종속성 변경 내용이 포함된 끌어오기 요청을 만들 때 {% data variables.product.prodname_dotcom %}는 종속성 그래프를 사용하여 끌어오기 요청에 종속성 검토를 추가합니다. 검토 결과는 종속성에 취약성이 포함되어 있는지 여부와 해당 취약성이 수정된 종속성 버전을 나타냅니다. 자세한 내용은 “[종속성 검토 정보](/code-security/supply-chain-security/about-dependency-review)”를 참조하세요.

## 종속성 그래프 가용성

{% ifversion fpt or ghec %}종속성 그래프는 지원되는 파일 형식을 사용하여 지원되는 패키지 에코시스템에서 종속성을 정의하는 모든 퍼블릭 리포지토리에 사용할 수 있습니다. 리포지토리 관리자는 프라이빗 리포지토리에 대한 종속성 그래프를 설정할 수도 있습니다. {% endif %} 종속성 그래프 구성에 대한 {% ifversion ghes %}에 대한 자세한 내용은 "종[속성 그래프 구성"을](/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-the-dependency-graph) 참조하세요.

{% data reusables.code-scanning.enterprise-enable-dependency-graph %}

{% data reusables.dependabot.dependabot-alerts-dependency-graph-enterprise %}

## 포함된 종속성

종속성 그래프에는 {% ifversion dependency-submission-api %}종속성 제출 API(베타)를 사용하여 제출된 모든 종속성뿐만 아니라{% endif %} 매니페스트 및 잠금 파일에 자세히 설명된 리포지토리의 모든 종속성 또는 지원되는 에코시스템에 대한 해당 종속성이 포함됩니다. 다음 내용이 포함됩니다.

- 매니페스트 또는 잠금 파일에 명시적으로 정의된 {% ifversion dependency-submission-api %}또는 종속성 제출 API(베타)를 사용하여 제출된{% endif %} 직접 종속성
- 직접 종속성의 간접 종속성(전이적 종속성 또는 하위 종속성이라고도 함)

종속성 그래프는 잠금 파일에서 명시적으로 또는 직접 종속성의 종속성을 확인하여 간접 종속성{% ifversion fpt or ghec %}을 식별합니다. 가장 신뢰할 수 있는 그래프의 경우 현재 사용 중인 직접 및 간접 종속성의 버전을 정확히 정의하기 때문에 잠금 파일(또는 이와 동등한 파일)을 사용해야 합니다. 잠금 파일을 사용하는 경우 리포지토리에 대한 모든 기여자가 동일한 버전을 사용하고 있는지 확인합니다. 이렇게 하면 잠금 파일{% endif %}에서 코드{% else %}를 더 쉽게 테스트하고 디버그할 수 있습니다.

{% data variables.product.product_name %}가 환경의 종속성을 이해하는 데 도움이 되는 방법에 대한 자세한 내용은 "[공급망 보안 정보](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-supply-chain-security)"를 참조하세요.

{% ifversion fpt or ghec %}

## 포함된 종속 항목

퍼블릭 리포지토리의 경우 이 리포지토리 또는 게시하는 패키지에 의존하는 퍼블릭 리포지토리만 보고됩니다. 이 정보는 프라이빗 리포지토리에 대해 보고되지 않습니다.{% endif %}

## 종속성 그래프 사용

종속성 그래프를 사용하여 다음을 수행할 수 있습니다.

- 코드가 종속된{% ifversion fpt or ghec %} 리포지토리와 코드에 종속된 리포지토리를 탐색합니다{% endif %}. 자세한 내용은 “[리포지토리의 종속성 탐색](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository)”을 참조하세요. {% ifversion ghec %}
- 단일 대시보드에서 조직의 리포지토리에 사용되는 종속성의 요약을 봅니다. 자세한 내용은 “[조직에 대한 인사이트 보기](/articles/viewing-insights-for-your-organization#viewing-organization-dependency-insights)”를 참조하세요.{% endif %}
- 리포지토리에 대한 취약한 종속성을 보고 업데이트합니다. 자세한 내용은 “[{% data variables.product.prodname_dependabot_alerts %} 정보](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)”를 참조하세요.{% ifversion fpt or ghes or ghec %}
- 끌어오기 요청의 취약한 종속성에 대한 정보를 참조하세요. 자세한 내용은 “[끌어오기 요청에서 종속성 변경 검토](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-dependency-changes-in-a-pull-request)”를 참조하세요.{% endif %}

## 지원되는 패키지 에코시스템

권장되는 형식은 모든 직접 및 모든 간접 종속성에 사용되는 버전을 명시적으로 정의합니다. 이러한 형식을 사용하는 경우 종속성 그래프가 더 정확해집니다. 또한 현재 빌드 설정을 반영하고 종속성 그래프가 직접 및 간접 종속성 모두에서 취약성을 보고할 수 있도록 합니다.{% ifversion fpt or ghec %} 매니페스트 파일(또는 이와 동등한 파일)에서 유추되는 간접 종속성은 안전하지 않은 종속성에 대한 검사에서 제외됩니다.{% endif %}

| 패키지 관리자 | 언어 | 권장 형식 | 지원되는 모든 형식 |
| --- | --- | --- | ---|
{%- ifversion dependency-graph-rust-support %} | 화물 | Rust | `Cargo.lock` | `Cargo.toml`, `Cargo.lock` | {%- endif %} | 작성기 | PHP | `composer.lock` | `composer.json`, `composer.lock` | | NuGet | .NET 언어(C#, F#, VB), C++ |   `.csproj`, `.vbproj`, `.nuspec`, `.vcxproj`, `.fsproj` |  `.csproj`, `.vbproj`, `.nuspec`, `.vcxproj`, `.fsproj`, `packages.config` | {%- ifversion github-actions-in-dependency-graph %} | {% data variables.product.prodname_actions %} 워크플로<sup>[†]</sup> | YAML | `.yml`, `.yaml` | `.yml`, `.yaml` | {%- endif %} | go 모듈 | 이동 | `go.sum` | `go.mod`, `go.sum` | | Maven | Java, Scala |  `pom.xml`  | `pom.xml`  | | npm | JavaScript |            `package-lock.json` | `package-lock.json`, `package.json`| | pip | Python | `requirements.txt`, `pipfile.lock` | `requirements.txt`, `pipfile`, `pipfile.lock`, `setup.py`<sup>[\]</sup> | {%- ifversion dependency-graph-dart-support %} | pub | 다트 | `pubspec.lock` | `pubspec.yaml`, `pubspec.lock` | {%- endif %} {%- ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} | Python 시 | Python | `poetry.lock` | `poetry.lock`, `pyproject.toml` | {%- endif %} | RubyGems | Ruby | `Gemfile.lock` | `Gemfile.lock`, `Gemfile`, `*.gemspec` | | Yarn | JavaScript | `yarn.lock` | `package.json`, `yarn.lock` |

{% ifversion github-actions-in-dependency-graph %} [†] {% data reusables.enterprise.3-5-missing-feature %} {% data variables.product.prodname_actions %} 워크플로는 매니페스트로 인식되려면 리포지토리의 `.github/workflows/` 디렉터리에 있어야 합니다. 구문 `jobs[*].steps[*].uses` 또는 `jobs.<job_id>.uses`를 사용하여 참조되는 모든 작업 또는 워크플로는 종속성으로 구문 분석됩니다. 자세한 내용은 “[{% data variables.product.prodname_actions %}에 대한 워크플로 구문](/actions/using-workflows/workflow-syntax-for-github-actions)”을 참조하세요.

{% endif %}

[‡] `setup.py` 파일 내에 Python 종속성을 나열하는 경우 프로젝트의 모든 종속성을 구문 분석하고 나열하지 못할 수 있습니다.

{% ifversion github-actions-in-dependency-graph %} {% note %}

**참고:** {% data variables.product.prodname_actions %} 워크플로 종속성이 정보 제공을 위해 종속성 그래프에 표시됩니다. 현재 {% data variables.product.prodname_actions %} 워크플로에는 Dependabot 경고가 지원되지 않습니다.

{% endnote %} {% endif %}

{% ifversion dependency-submission-api %}에코시스템이 위의 지원되는 에코시스템 목록에 없는 경우에도 종속성 제출 API(베타)를 사용하여 선택한 패키지 관리자 또는 에코시스템의 종속성을 종속성 그래프에 추가할 수 있습니다. 종속성 그래프는 제출된 종속성을 에코시스템별로 그룹화하여 표시하지만 매니페스트 또는 잠금 파일에서 구문 분석된 종속성과는 별도로 표시됩니다. {% data variables.product.prodname_advisory_database %}의 [지원되는 에코시스템](https://github.com/github/advisory-database#supported-ecosystems) 중 하나에서 발생한 종속성에 대한 {% data variables.product.prodname_dependabot_alerts %}만 가져옵니다. 종속성 제출 API에 대한 자세한 내용은 “[종속성 제출 API 사용](/code-security/supply-chain-security/understanding-your-software-supply-chain/using-the-dependency-submission-api)”을 참조하세요.{% endif %}
## 추가 참고 자료

- Wikipedia의 “[종속성 그래프](https://en.wikipedia.org/wiki/Dependency_graph)”
- “[리포지토리의 종속성 탐색](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository)”
- “[{% data variables.product.prodname_dependabot_alerts %} 보기 및 업데이트](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts)”
- “[취약한 종속성 검색 문제 해결](/github/managing-security-vulnerabilities/troubleshooting-the-detection-of-vulnerable-dependencies)”
