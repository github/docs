---
title: GitHub Actions Importer를 사용하여 마이그레이션 자동화
intro: '{% data variables.product.prodname_actions_importer %}을(를) 사용하여 {% data variables.product.prodname_actions %}로 마이그레이션을 계획하고 자동화합니다.'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
miniTocMaxHeadingLevel: 3
topics:
  - Migration
  - CI
  - CD
shortTitle: 'Automate migration with {% data variables.product.prodname_actions_importer %}'
ms.openlocfilehash: 391455eb90a3a71ab0e0cb5a1573a0ee48527d8e
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148160081'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

[법적 고지 사항](#legal-notice)

{% note %}

**참고**: {% data variables.product.prodname_actions_importer %}은(는) 현재 공개 미리 보기로 제공됩니다. [등록 페이지를](https://github.com/features/actions-importer/signup) 방문하여 미리 보기에 대한 액세스를 요청합니다. 액세스 권한이 부여되면 CLI 확장을 사용할 `gh-actions-importer` 수 있습니다.

{% endnote %}

## {% data variables.product.prodname_actions_importer %} 정보

{% data variables.product.prodname_actions_importer %}를 사용하여 AZURE DevOps, CircleCI, GitLab, Jenkins 및 Travis CI에서 {% data variables.product.prodname_actions %}로 CI/CD 파이프라인을 계획하고 자동으로 마이그레이션할 수 있습니다.

{% data variables.product.prodname_actions_importer %}은(는) Docker 컨테이너로 배포되며 [{% data variables.product.prodname_dotcom %} CLI](https://cli.github.com) 확장을 사용하여 컨테이너와 상호 작용합니다.

{% data variables.product.prodname_actions_importer %}에 의해 변환된 워크플로는 프로덕션 워크로드로 사용하기 전에 정확성을 검사해야 합니다. 목표는 모든 워크플로에 대해 80%의 변환률을 달성하는 것이지만 실제 변환 속도는 변환되는 각 개별 파이프라인의 구성에 따라 달라집니다.

## 지원되는 CI 플랫폼

{% data variables.product.prodname_actions_importer %}을(를) 사용하여 다음 플랫폼에서 마이그레이션할 수 있습니다.

- Azure DevOps
- CircleCI
- GitLab
- Jenkins
- Travis CI

미리 보기에 대한 액세스 권한이 부여되면 지원되는 각 플랫폼에 대한 추가 참조 설명서에 액세스할 수 있습니다.

## 필수 구성 요소

{% data variables.product.prodname_actions_importer %}에는 다음과 같은 요구 사항이 있습니다.

- {% data variables.product.prodname_actions_importer %}에 대한 공개 미리 보기에 대한 액세스 권한이 부여되어 있어야 합니다.
{%- ifversion ghes < 3.5 or ghae %}
- 범위가 활성화된 {% 데이터 variables.product.pat_generic %}을(를) `read:packages` 사용합니다.
{%- else %}
- {% data variables.product.prodname_registry %} {% data variables.product.prodname_container_registry %}에 인증하려면 자격 증명이 있어야 합니다. 자세한 내용은 "[컨테이너 레지스트리 작업](/packages/working-with-a-github-packages-registry/working-with-the-container-registry#authenticating-to-the-container-registry)"을 참조하세요.
{% endif %}
- Linux 기반 컨테이너를 실행하고 필요한 도구를 설치할 수 있는 환경입니다.
  - Docker가 [설치되고](https://docs.docker.com/get-docker/) 실행됩니다.
  - [{% data variables.product.prodname_dotcom %} CLI](https://cli.github.com) 가 설치되어 있습니다.

  {% note %}

  **참고**: {% data variables.product.prodname_actions_importer %} 컨테이너 및 CLI는 CI 플랫폼과 동일한 서버에 설치할 필요가 없습니다.

  {% endnote %}

### {% data variables.product.prodname_actions_importer %} CLI 확장 설치

1. {% data variables.product.prodname_actions_importer %} CLI 확장을 설치합니다.

   ```bash
   $ gh extension install github/gh-actions-importer
   ```
1. 확장이 설치되어 있는지 확인합니다.

   ```bash
   $ gh actions-importer -h
   Options:
     -?, -h, --help  Show help and usage information

   Commands:
     update     Update to the latest version of the GitHub Actions Importer.
     version    Display the version of the GitHub Actions Importer.
     configure  Start an interactive prompt to configure credentials used to authenticate with your CI server(s).
     audit      Plan your CI/CD migration by analyzing your current CI/CD footprint.
     forecast   Forecast GitHub Actions usage from historical pipeline utilization.
     dry-run    Convert a pipeline to a GitHub Actions workflow and output its yaml file.
     migrate    Convert a pipeline to a GitHub Actions workflow and open a pull request with the changes.
   ```

### {% data variables.product.prodname_actions_importer %} CLI 업데이트

최신 버전의 {% data variables.product.prodname_actions_importer %}을(를) 실행하려면 명령을 정기적으로 실행 `update` 해야 합니다.

```bash
$ gh actions-importer update
```

이 명령이 성공하려면 {% data variables.product.prodname_container_registry %}로 인증해야 합니다. 또는 및 `--password-stdin` 매개 변수를 사용하여 자격 증명을 `--username` 제공할 수 있습니다.

```bash
$ echo $GITHUB_TOKEN | gh actions-importer update --username $GITHUB_HANDLE --password-stdin
```

### 명령줄에서 인증

{% data variables.product.prodname_actions_importer %}이(가) {% data variables.product.prodname_dotcom %} 및 현재 CI 서버와 통신할 수 있도록 자격 증명을 구성해야 합니다. 환경 변수 또는 파일을 사용하여 이러한 자격 증명을 `.env.local` 구성할 수 있습니다. 다음 명령을 실행하여 대화형 프롬프트에서 환경 변수를 구성할 수 있습니다.

```bash
$ gh actions-importer configure
```

미리 보기에 대한 액세스 권한이 부여되면 환경 변수 사용에 대한 추가 참조 설명서에 액세스할 수 있습니다.

## {% data variables.product.prodname_actions_importer %} CLI 사용

의 `gh actions-importer` 하위 명령을 사용하여 , , `forecast``dry-run`및 를 포함하여 `audit`{% data variables.product.prodname_actions %}로 마이그레이션을 `migrate`시작합니다.

### 기존 CI 파이프라인 감사

`audit` 하위 명령을 사용하여 현재 CI/CD 공간을 분석하여 CI/CD 마이그레이션을 계획할 수 있습니다. 이 분석을 사용하여 {% data variables.product.prodname_actions %}로 마이그레이션하기 위한 타임라인을 계획할 수 있습니다.

감사를 실행하려면 다음 명령을 사용하여 사용 가능한 옵션을 결정합니다.

```bash
$ gh actions-importer audit -h
Description:
  Plan your CI/CD migration by analyzing your current CI/CD footprint.

[...]

Commands:
  azure-devops  An audit will output a list of data used in an Azure DevOps instance.
  circle-ci     An audit will output a list of data used in a CircleCI instance.
  gitlab        An audit will output a list of data used in a GitLab instance.
  jenkins       An audit will output a list of data used in a Jenkins instance.
  travis-ci     An audit will output a list of data used in a Travis CI instance.
```

미리 보기에 대한 액세스 권한이 부여되면 감사 실행에 대한 추가 참조 설명서에 액세스할 수 있습니다.

### 사용량 예측

`forecast` 하위 명령은 기록 파이프라인 사용량을 검토하여 {% data variables.product.prodname_actions %} 사용량에 대한 예측을 만듭니다.

예측을 실행하려면 다음 명령을 사용하여 사용 가능한 옵션을 결정합니다.

```bash
$ gh actions-importer forecast -h
Description:
  Forecasts GitHub Actions usage from historical pipeline utilization.

[...]

Commands:
  azure-devops  Forecasts GitHub Actions usage from historical Azure DevOps pipeline utilization.
  jenkins       Forecasts GitHub Actions usage from historical Jenkins pipeline utilization.
  gitlab        Forecasts GitHub Actions usage from historical GitLab pipeline utilization.
  circle-ci     Forecasts GitHub Actions usage from historical CircleCI pipeline utilization.
  travis-ci     Forecasts GitHub Actions usage from historical Travis CI pipeline utilization.
  github        Forecasts GitHub Actions usage from historical GitHub pipeline utilization.
```

미리 보기에 대한 액세스 권한이 부여되면 예측 실행에 대한 추가 참조 설명서에 액세스할 수 있습니다.

### 마이그레이션 프로세스 테스트

`dry-run` 하위 명령을 사용하여 파이프라인을 해당 {% data variables.product.prodname_actions %}로 변환한 다음, 워크플로를 로컬 파일 시스템에 쓸 수 있습니다.

시험 실행을 수행하려면 다음 명령을 사용하여 사용 가능한 옵션을 결정합니다.

```bash
$ gh actions-importer dry-run -h
Description:
  Convert a pipeline to a GitHub Actions workflow and output its yaml file.

[...]

Commands:
  azure-devops  Convert an Azure DevOps pipeline to a GitHub Actions workflow and output its yaml file.
  circle-ci     Convert a CircleCI pipeline to GitHub Actions workflows and output the yaml file(s).
  gitlab        Convert a GitLab pipeline to a GitHub Actions workflow and output the yaml file.
  jenkins       Convert a Jenkins job to a GitHub Actions workflow and output its yaml file.
  travis-ci     Convert a Travis CI pipeline to a GitHub Actions workflow and output its yaml file.
```

미리 보기에 대한 액세스 권한이 부여되면 시험 실행 수행에 대한 추가 참조 설명서에 액세스할 수 있습니다.

### 파이프라인을 {% data variables.product.prodname_actions %}로 마이그레이션

`migrate` 하위 명령을 사용하여 파이프라인을 해당 GitHub Actions 변환한 다음 콘텐츠를 사용하여 끌어오기 요청을 만들 수 있습니다.

마이그레이션을 실행하려면 다음 명령을 사용하여 사용 가능한 옵션을 결정합니다.

```bash
$ gh actions-importer migrate -h
Description:
  Convert a pipeline to a GitHub Actions workflow and open a pull request with the changes.

[...]

Commands:
  azure-devops  Convert an Azure DevOps pipeline to a GitHub Actions workflow and open a pull request with the changes.
  circle-ci     Convert a CircleCI pipeline to GitHub Actions workflows and open a pull request with the changes.
  gitlab        Convert a GitLab pipeline to a GitHub Actions workflow and open a pull request with the changes.
  jenkins       Convert a Jenkins job to a GitHub Actions workflow and open a pull request with the changes.
  travis-ci     Convert a Travis CI pipeline to a GitHub Actions workflow and and open a pull request with the changes.
```

미리 보기에 대한 액세스 권한이 부여되면 마이그레이션 실행에 대한 추가 참조 설명서에 액세스할 수 있습니다.

## 법적 고지 사항

일부는 MIT 라이선스에 따라 조정 https://github.com/github/gh-actions-importer/ 되었습니다.

```
MIT License

Copyright (c) 2022 GitHub

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
