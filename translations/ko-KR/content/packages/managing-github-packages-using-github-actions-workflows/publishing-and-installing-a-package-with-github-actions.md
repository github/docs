---
title: GitHub Actions를 사용하여 패키지 게시 및 설치
intro: '{% data variables.product.prodname_actions %}에서 워크플로를 구성하여 {% data variables.product.prodname_registry %}에서 자동으로 패키지를 게시 또는 설치할 수 있습니다.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /github/managing-packages-with-github-packages/using-github-packages-with-github-actions
  - /packages/using-github-packages-with-your-projects-ecosystem/using-github-packages-with-github-actions
  - /packages/guides/using-github-packages-with-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Publish & install with Actions
ms.openlocfilehash: 80516eb55e9ffc8f2de3f92cf24a7d7f230b8407
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193124'
---
{% data reusables.package_registry.packages-ghes-release-stage %} {% data reusables.package_registry.packages-ghae-release-stage %}

## {% data variables.product.prodname_actions %}를 사용한 {% data variables.product.prodname_registry %} 정보

{% data reusables.repositories.about-github-actions %} {% data reusables.repositories.actions-ci-cd %} 자세한 내용은 “[{% data variables.product.prodname_actions %} 정보](/github/automating-your-workflow-with-github-actions/about-github-actions)”를 참조하세요.

워크플로의 일부로 패키지를 게시하거나 설치하여 리포지토리의 CI 및 CD 기능을 확장할 수 있습니다.

{% ifversion packages-registries-v2 %}
### 세분화된 권한으로 패키지 레지스트리에 인증

{% data reusables.package_registry.authenticate_with_pat_for_v2_registry %}

### 리포지토리 범위 권한이 있는 패키지 레지스트리에 인증

{% endif %}

{% ifversion packages-registries-v2 %} 일부 {% 데이터 variables.product.prodname_registry %} 레지스트리는 리포지토리 범위 권한만 지원하고 세분화된 권한은 지원하지 않습니다. 이러한 레지스트리 목록은 "[{% data variables.product.prodname_registry %}에 대한 권한 정보"를 참조하세요](/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages).

워크플로가 세분화된 권한을 지원하지 않는 {% data variables.product.prodname_registry %} 레지스트리에 액세스하려면 {% else %}{% else %}{% data variables.product.product_name %}에서 패키지 레지스트리에 인증하려면 {% data variables.product.product_name %}이(가) {% data variables.product.prodname_actions %}을(를) 사용하도록 설정할 때 리포지토리에 대해 자동으로 만드는 {% data variables.product.product_name %}을(를) 사용하는 `GITHUB_TOKEN` 것이 좋습니다. `contents` 범위에 대한 읽기 권한을 부여하고 `packages` 범위에 대한 쓰기 권한을 부여하려면 워크플로 파일에서 이 액세스 토큰에 대한 사용 권한을 설정해야 합니다. 포크의 경우 `GITHUB_TOKEN`은 부모 리포지토리에 대한 읽기 권한이 부여됩니다. 자세한 내용은 “[GITHUB_TOKEN을 사용한 인증](/actions/configuring-and-managing-workflows/authenticating-with-the-github_token)”을 참조하세요.

{% raw %}`{{secrets.GITHUB_TOKEN}}`{% endraw %} 컨텍스트를 사용하여 워크플로 파일에서 `GITHUB_TOKEN`을 참조할 수 있습니다. 자세한 내용은 “[GITHUB_TOKEN을 사용한 인증](/actions/automating-your-workflow-with-github-actions/authenticating-with-the-github_token)”을 참조하세요.

## 권한 및 패키지 액세스 정보

{% ifversion packages-registries-v2 %}

### 사용자 또는 조직으로 범위가 지정된 패키지

세분화된 권한을 지원하는 레지스트리를 사용하면 사용자가 조직 수준에서 패키지를 자유형 리소스로 만들고 관리할 수 있습니다. 패키지는 조직 또는 개인 계정에서 소유할 수 있으며 리포지토리 권한과 별도로 각 패키지에 대한 액세스를 사용자 지정할 수 있습니다.

세분화된 권한을 지원하는 레지스트리에 액세스하는 모든 워크플로는 {% data variables.product.pat_generic %} 대신 을 사용해야 `GITHUB_TOKEN` 합니다. 보안 모범 사례에 대한 자세한 내용은 “[GitHub Actions 보안 강화](/actions/learn-github-actions/security-hardening-for-github-actions#using-secrets)”를 참조하세요.

### 리포지토리로 범위가 지정된 패키지

{% endif %}

GitHub Actions를 사용하면 GitHub가 리포지토리에 GitHub 앱을 설치합니다. `GITHUB_TOKEN` 비밀은 GitHub 앱 설치 액세스 토큰입니다. 설치 액세스 토큰을 사용하여 리포지토리에 설치된 GitHub 앱을 대신하여 인증할 수 있습니다. 토큰의 권한은 워크플로를 포함하는 리포지토리로 제한됩니다. 자세한 내용은 “[GITHUB_TOKEN에 대한 권한](/actions/reference/authentication-in-a-workflow#about-the-github_token-secret)”을 참조하세요.

{% data variables.product.prodname_registry %}를 사용하면 {% data variables.product.prodname_actions %} 워크플로에서 사용할 수 있는 `GITHUB_TOKEN`을 통해 패키지를 푸시하고 풀할 수 있습니다.

{% ifversion packages-registries-v2 %}

## 워크플로를 통해 수정된 컨테이너에 대한 기본 권한 및 액세스 설정

워크플로를 통해 컨테이너를 만들거나 설치, 수정 또는 삭제할 때 관리자가 워크플로에 액세스할 수 있도록 하기 위해 사용되는 몇 가지 기본 권한 및 액세스 설정이 있습니다. 액세스 설정을 조정할 수도 있습니다.

예를 들어 워크플로가 `GITHUB_TOKEN`을 사용하여 컨테이너를 만드는 경우 기본적으로 다음이 적용됩니다.
- 컨테이너는 워크플로가 실행되는 리포지토리의 표시 여부 및 권한 모델을 상속합니다.
- 워크플로를 실행하는 리포지토리 관리자는 컨테이너가 만들어지면 컨테이너의 관리자가 됩니다.

다음은 패키지를 관리하는 워크플로에 대해 기본 사용 권한이 작동하는 방식에 대한 더 많은 예입니다.

| {% data variables.product.prodname_actions %} 워크플로 작업 | 기본 권한 및 액세스 |
|----|----|
| 기존 컨테이너 다운로드 | - 컨테이너가 퍼블릭인 경우 모든 리포지토리에서 실행되는 모든 워크플로에서 컨테이너를 다운로드할 수 있습니다. <br> - 컨테이너가 내부용인 경우 엔터프라이즈 계정이 소유한 리포지토리에서 실행되는 모든 워크플로가 컨테이너를 다운로드할 수 있습니다. 엔터프라이즈 소유 조직의 경우 엔터프라이즈의 모든 리포지토리를 읽을 수 있습니다. <br> - 컨테이너가 비공개인 경우 해당 컨테이너에 대한 읽기 권한이 부여된 리포지토리에서 실행되는 워크플로만 컨테이너를 다운로드할 수 있습니다. <br>
| 기존 컨테이너에 새 버전 업로드 | - 컨테이너가 프라이빗, 내부용 또는 퍼블릭인 경우 해당 컨테이너에 대한 쓰기 권한이 부여된 리포지토리에서 실행되는 워크플로만 컨테이너에 새 버전을 업로드할 수 있습니다.
| 컨테이너 또는 컨테이너 버전 삭제 | - 컨테이너가 프라이빗, 내부용 또는 퍼블릭인 경우 삭제 권한이 부여된 리포지토리에서 실행되는 워크플로만 기존 버전의 컨테이너를 삭제할 수 있습니다.

컨테이너에 대한 액세스를 보다 세부적으로 조정하거나 일부 기본 권한 동작을 조정할 수도 있습니다. 자세한 내용은 “[패키지의 액세스 제어 및 표시 여부 구성](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility)”을 참조하세요.

{% endif %}

## 작업을 사용하여 패키지 게시

{% data variables.product.prodname_actions %}를 사용하여 CI(연속 통합) 흐름의 일부로 패키지를 자동으로 게시할 수 있습니다. CD(지속적인 배포)에 대한 이 접근 방식을 사용하면 코드가 품질 표준을 충족하는 경우 새 패키지 버전 만들기를 자동화할 수 있습니다. 예를 들어 개발자가 코드를 특정 분기에 푸시할 때마다 CI 테스트를 실행하는 워크플로를 만들 수 있습니다. 테스트가 통과하면 워크플로에서 새 패키지 버전을 {% data variables.product.prodname_registry %}에 게시할 수 있습니다.

{% data reusables.package_registry.actions-configuration %}

다음 예제에서는 {% data variables.product.prodname_actions %}를 사용하여 앱을 빌드하고 {% ifversion not fpt or ghec %}테스트한 다음 {% endif %}자동으로 Docker 이미지를 만들어 {% data variables.product.prodname_registry %}에 게시하는 방법을 보여 줍니다.

리포지토리에 새 워크플로 파일(예: `.github/workflows/deploy-image.yml`)을 만들고 다음 YAML을 추가합니다.

{% ifversion fpt or ghec %} {% data reusables.package_registry.publish-docker-image %}

{% else %}

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

name: Create and publish a Docker image

on:
  push:
    branches: ['release']

jobs:
  run-npm-build:
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: npm install and build webpack
        run: |
          npm install
          npm run build
      - uses: {% data reusables.actions.action-upload-artifact %}
        with:
          name: webpack artifacts
          path: public/

  run-npm-test:
    runs-on: ubuntu-latest
    needs: run-npm-build
    strategy:
      matrix:
        os: [ubuntu-latest]
        node-version: [12.x, 14.x]
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Use Node.js {% raw %}${{ matrix.node-version }}{% endraw %}
        uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: {% raw %}${{ matrix.node-version }}{% endraw %}
      - uses: {% data reusables.actions.action-download-artifact %}
        with:
          name: webpack artifacts
          path: public
      - name: npm install, and test
        run: |
          npm install
          npm test
        env:
          CI: true

  build-and-push-image:
    runs-on: ubuntu-latest
    needs: run-npm-test {% ifversion ghes or ghae %}
    permissions: 
      contents: read
      packages: write {% endif %}
    steps:
      - name: Checkout
        uses: {% data reusables.actions.action-checkout %}
      - name: Log in to GitHub Docker Registry
        uses: docker/login-action@f054a8b539a109f9f41c372932f1ae047eff08c9
        with:
          registry: {% ifversion ghae %}docker.YOUR-HOSTNAME.com{% else %}docker.pkg.github.com{% endif %}
          username: {% raw %}${{ github.actor }}{% endraw %}
          password: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
      - name: Build and push Docker image
        uses: docker/build-push-action@ad44023a93711e3deb337508980b4b5e9bcdc5dc
        with:
          push: true
          tags: |
            {% ifversion ghae %}docker.YOUR-HOSTNAME.com{% else %}docker.pkg.github.com{% endif %}/{% raw %}${{ github.repository }}/octo-image:${{ github.sha }}{% endraw %}
```
{% endif %}

관련 설정은 다음 표에 설명되어 있습니다. 워크플로의 각 요소에 대한 자세한 내용은 “[{% data variables.product.prodname_actions %}에 대한 워크플로 구문](/actions/reference/workflow-syntax-for-github-actions)”을 참조하세요.

<table>
<tr>
<td>
{% raw %} ```yaml
on:
  push:
    branches: ['release']
```
{% endraw %}
</td>
<td>
변경 내용이 <code>release</code>라는 분기에 푸시될 때마다 실행되도록 <code>Create and publish a Docker image</code> 워크플로를 구성합니다.
</td>
</tr>

{% ifversion fpt or ghec %}

<tr>
<td>
{% raw %}
```yaml
env:
  REGISTRY: ghcr.io
  IMAGE_NAME: ${{ github.repository }}
```
{% endraw %}
</td>
<td>
  워크플로에 대한 두 가지 사용자 지정 환경 변수를 정의합니다. 변수는 {% data variables.product.prodname_container_registry %} 도메인과, 워크플로가 빌드하는 Docker 이미지의 이름에 사용됩니다.
</td>
</tr>

<tr>
<td>
{% raw %}
```yaml
jobs:
  build-and-push-image:
    runs-on: ubuntu-latest
```
{% endraw %}
</td>
<td>
  이 워크플로에는 단일 작업이 있습니다. 사용 가능한 최신 버전의 Ubuntu에서 실행되도록 구성되었습니다.
</td>
</tr>

{% else %}

<tr>
<td>

```yaml
run-npm-build:
  runs-on: ubuntu-latest
  steps:
    - uses: {% data reusables.actions.action-checkout %}
    - name: npm install and build webpack
      run: |
        npm install
        npm run build
    - uses: {% data reusables.actions.action-upload-artifact %}
      with:
        name: webpack artifacts
        path: public/
```

</td>
<td>
  이 작업은 NPM을 설치하고 이를 사용하여 앱을 빌드합니다.
</td>
</tr>

<tr>
<td>

```yaml
run-npm-test:
  runs-on: ubuntu-latest
  needs: run-npm-build
  strategy:
    matrix:
      os: [ubuntu-latest]
      node-version: [12.x, 14.x]
  steps:
    - uses: {% data reusables.actions.action-checkout %}
    - name: Use Node.js {% raw %}${{ matrix.node-version }}{% endraw %}
      uses: {% data reusables.actions.action-setup-node %}
      with:
        node-version: {% raw %}${{ matrix.node-version }}{% endraw %}
    - uses: {% data reusables.actions.action-download-artifact %}
      with:
        name: webpack artifacts
        path: public
    - name: npm install, and test
      run: |
        npm install
        npm test
      env:
        CI: true
```

</td>
<td>
이 작업은 <code>npm test</code>를 사용하여 코드를 테스트합니다. <code>needs: run-npm-build</code> 명령은 이 작업을 <code>run-npm-build</code> 작업에 종속시킵니다.
</td>
</tr>

<tr>
<td>
{% raw %} ```yaml
build-and-push-image:
  runs-on: ubuntu-latest
  needs: run-npm-test
```
{% endraw %}
</td>
<td>
이 작업은 패키지를 게시합니다. <code>needs: run-npm-test</code> 명령은 이 작업을 <code>run-npm-test</code> 작업에 종속시킵니다.
</td>
</tr>

{% endif %}

<tr>
<td>
{% raw %} ```yaml
permissions: 
  contents: read
  packages: write 
```
{% endraw %}
</td>
<td>
이 작업의 동작에 대해 <code>GITHUB_TOKEN</code>에 부여된 사용 권한을 설정합니다.
</td>
</tr> 

{% ifversion fpt or ghec %}
<tr>
<td>
{% raw %} ```yaml
- name: Log in to the Container registry
  uses: docker/login-action@f054a8b539a109f9f41c372932f1ae047eff08c9
  with:
    registry: ${{ env.REGISTRY }}
    username: ${{ github.actor }}
    password: ${{ secrets.GITHUB_TOKEN }}
```
{% endraw %}
</td>
<td>
패키지를 게시할 계정 및 암호를 사용하여 레지스트리에 로그인하는 <code>Log in to the {% data variables.product.prodname_container_registry %}</code>라는 단계를 만듭니다. 게시되면 패키지는 여기에 정의된 계정이 소유합니다.
</td>
</tr>

<tr>
<td>
{% raw %} ```yaml
- name: Extract metadata (tags, labels) for Docker
  id: meta
  uses: docker/metadata-action@98669ae865ea3cffbcbaa878cf57c20bbf1c6c38
  with:
    images: ${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}
```
{% endraw %}
</td>
<td>
이 단계에서는 <code><a href="https://github.com/docker/metadata-action#about">docker/metadata-action</a></code>을 사용하여 지정된 이미지에 적용할 태그 및 레이블을 추출합니다. <code>id</code> “meta”를 사용하면 이 단계의 출력을 후속 단계에서 참조할 수 있습니다. <code>images</code> 값은 태그 및 레이블의 기본 이름을 제공합니다.
</td>
</tr>

{% else %}
<tr>
<td>
{% raw %} ```yaml
- name: Log in to GitHub Docker Registry
  uses: docker/login-action@f054a8b539a109f9f41c372932f1ae047eff08c9
  with:
    registry: {% endraw %}{% ifversion ghae %}docker.YOUR-HOSTNAME.com{% else %}docker.pkg.github.com{% endif %}{% raw %}
    username: ${{ github.actor }}
    password: ${{ secrets.GITHUB_TOKEN }}
```
{% endraw %}
</td>
<td>
패키지를 게시할 계정 및 암호를 사용하여 레지스트리에 로그인하는 <code>Log in to GitHub Docker Registry</code>라는 새 단계를 만듭니다. 게시되면 패키지는 여기에 정의된 계정이 소유합니다.
</td>
</tr>
{% endif %}

<tr>
<td>
{% raw %} ```yaml
- name: Build and push Docker image
```
{% endraw %}
</td>
<td>
<code>Build and push Docker image</code>라는 새 단계를 만듭니다. 이 단계는 <code>build-and-push-image</code> 작업의 일부로 실행됩니다.
</td>
</tr>

<tr>
<td>
{% raw %} ```yaml
uses: docker/build-push-action@ad44023a93711e3deb337508980b4b5e9bcdc5dc
```
{% endraw %}
</td>
<td>
Docker <code>build-push-action</code> 작업을 사용하여 리포지토리의 <code>Dockerfile</code>에 따라 이미지를 빌드합니다. 빌드가 성공하면 이미지를 {% data variables.product.prodname_registry %}에 푸시합니다.
</td>
</tr>

<tr>
<td>
{% raw %} ```yaml
with:
```
{% endraw %}
</td>
<td>
필요한 매개 변수를 <code>build-push-action</code> 작업에 보냅니다. 매개 변수는 후속 줄에서 정의됩니다.
</td>
</tr>

{% ifversion fpt or ghec %}
<tr>
<td>
{% raw %} ```yaml
context: .
```
{% endraw %}
</td>
<td>
빌드의 컨텍스트를 지정된 경로에 있는 파일 집합으로 정의합니다. 자세한 내용은 “<a href="https://github.com/docker/build-push-action#usage">사용법</a>”을 참조하세요.
</td>
</tr>
{% endif %}

<tr>
<td>
{% raw %} ```yaml
push: true
```
{% endraw %}
</td>
<td>
성공적으로 빌드된 경우 이 이미지를 레지스트리에 푸시합니다.
</td>
</tr>

{% ifversion fpt or ghec %}
<tr>
<td>
{% raw %}
```yaml
tags: ${{ steps.meta.outputs.tags }}
labels: ${{ steps.meta.outputs.labels }}
```
{% endraw %}
</td>
<td>
  “meta” 단계에서 추출된 태그 및 레이블을 추가합니다.
</td>
</tr>

{% else %}
<tr>
<td>
{% ifversion ghae %} {% raw %} ```yaml
tags: |
docker.YOUR-HOSTNAME.com/${{ github.repository }}/octo-image:${{ github.sha }}
```
{% endraw %} {% else %} {% raw %} ```yaml
tags: |
docker.pkg.github.com/${{ github.repository }}/octo-image:${{ github.sha }}
```
{% endraw %} {% endif %}
</td>
<td>
워크플로를 트리거한 커밋의 SHA를 사용하여 이미지에 태그를 지정합니다.
</td>
</tr>
{% endif %}

</table>

이 새 워크플로는 리포지토리에서 `release`라고 명명된 분기에 변경 사항을 푸시할 때마다 자동으로 실행됩니다. **작업** 탭에서 진행 상황을 볼 수 있습니다.

워크플로가 완료된 후 몇 분 후에 새 패키지가 리포지토리에 표시됩니다. 사용 가능한 패키지를 찾으려면 “[리포지토리의 패키지 보기](/packages/publishing-and-managing-packages/viewing-packages#viewing-a-repositorys-packages)”를 참조하세요.

## 작업을 사용하여 패키지 설치

{% data variables.product.prodname_actions %}를 사용하여 CI 흐름의 일부로 패키지를 설치할 수 있습니다. 예를 들어 개발자가 코드를 끌어오기 요청에 푸시할 때마다 워크플로가 {% data variables.product.prodname_registry %}에서 호스트하는 패키지를 다운로드하고 설치하여 종속성을 처리하도록 워크플로를 구성할 수 있습니다. 그런 다음, 워크플로는 종속성이 필요한 CI 테스트를 실행할 수 있습니다.

`GITHUB_TOKEN`을 사용하는 경우 {% data variables.product.prodname_actions %}를 통해 {% data variables.product.prodname_registry %}에서 호스트되는 패키지를 설치하려면 최소한의 구성 또는 추가 인증이 필요합니다.{% ifversion fpt or ghec %} 데이터 전송은 작업에서 패키지를 설치할 때도 무료입니다. 자세한 내용은 “[{% data variables.product.prodname_registry %}에 대한 청구 정보](/billing/managing-billing-for-github-packages/about-billing-for-github-packages)”를 참조하세요.{% endif %}

{% data reusables.package_registry.actions-configuration %}

{% ifversion packages-registries-v2 %}
## {% data variables.product.pat_generic %}을(를) 사용하여 레지스트리에 액세스하는 워크플로 업그레이드

{% data variables.product.prodname_registry %}는 워크플로에서 쉽고 안전한 인증을 위해 을 지원 `GITHUB_TOKEN` 합니다. 세분화된 권한을 지원하는 레지스트리를 사용하고 워크플로가 {% data variables.product.pat_generic %}를 사용하여 레지스트리에 인증하는 경우 워크플로를 업데이트하여 를 사용하는 `GITHUB_TOKEN`것이 좋습니다.

`GITHUB_TOKEN`에 대한 자세한 내용은 “[워크플로의 인증](/actions/reference/authentication-in-a-workflow#using-the-github_token-in-a-workflow)”을 참조하세요.

`GITHUB_TOKEN`범위와 함께 `repo` {% data variables.product.pat_v1 %} 대신 를 사용하면 워크플로가 실행되는 리포지토리에 불필요한 액세스를 제공하는 수명이 긴 {% data variables.product.pat_generic %}을(를) 사용할 필요가 없으므로 리포지토리의 보안이 강화됩니다. 보안 모범 사례에 대한 자세한 내용은 “[GitHub Actions 보안 강화](/actions/learn-github-actions/security-hardening-for-github-actions#using-secrets)”를 참조하세요.

1. 패키지 방문 페이지로 이동합니다.
1. 왼쪽 사이드바에서 **작업 액세스** 를 클릭합니다.
  ![왼쪽 메뉴의 “작업 액세스” 옵션](/assets/images/help/package-registry/organization-repo-access-for-a-package.png)
1. 컨테이너 패키지가 워크플로에 액세스할 수 있도록 하려면 워크플로가 컨테이너에 저장되는 리포지토리를 추가해야 합니다. **리포지토리 추가** 를 클릭하고 추가할 리포지토리를 검색합니다.
   ![“리포지토리 추가” 단추](/assets/images/help/package-registry/add-repository-button.png) {% note %}

  **참고:** **작업 액세스** 메뉴 옵션을 통해 리포지토리를 컨테이너에 추가하는 것은 컨테이너를 리포지토리에 연결하는 것과 다릅니다. 자세한 내용은 “[패키지에 대한 워크플로 액세스 보장](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-workflow-access-to-your-package)” 및 “[패키지에 리포지토리 연결](/packages/learn-github-packages/connecting-a-repository-to-a-package)”을 참조하세요.

  {% endnote %}
1. 필요에 따라, “역할” 드롭다운 메뉴를 사용하여 컨테이너 이미지에 대해 리포지토리에 부여할 기본 액세스 수준을 선택합니다.
  ![리포지토리에 부여할 권한 액세스 수준](/assets/images/help/package-registry/repository-permission-options-for-package-access-through-actions.png)
1. 워크플로 파일을 엽니다. 레지스트리에 로그인하는 줄에서 {% data variables.product.pat_generic %}을(를) {% raw %}`${{ secrets.GITHUB_TOKEN }}`{% endraw %}로 바꿉 있습니다.

예를 들어 이 워크플로는 {% data variables.product.prodname_container_registry %}에 Docker 이미지를 게시하고 {% raw %}`${{ secrets.GITHUB_TOKEN }}`{% endraw %}을 사용하여 인증합니다.

```yaml{:copy}
name: Demo Push

on:   
  push:
    # Publish `master` as Docker `latest` image.
    branches:
      - master
      - seed

    # Publish `v1.2.3` tags as releases.
    tags:
      - v*

  # Run tests for any PRs.
  pull_request:

env:
  IMAGE_NAME: ghtoken_product_demo

jobs:
  # Push image to GitHub Packages.
  # See also https://docs.docker.com/docker-hub/builds/
  push:
    runs-on: ubuntu-latest
    permissions:
      packages: write
      contents: read

    steps:
      - uses: {% data reusables.actions.action-checkout %}

      - name: Build image
        run: docker build . --file Dockerfile --tag $IMAGE_NAME --label "runnumber=${GITHUB_RUN_ID}"

      - name: Log in to registry
        # This is where you will update the {% data variables.product.pat_generic %} to GITHUB_TOKEN
        run: echo "{% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}" | docker login ghcr.io -u ${{ github.actor }} --password-stdin

      - name: Push image
        run: |
          IMAGE_ID=ghcr.io/{% raw %}${{ github.repository_owner }}{% endraw %}/$IMAGE_NAME

          # Change all uppercase to lowercase
          IMAGE_ID=$(echo $IMAGE_ID | tr '[A-Z]' '[a-z]')
          # Strip git ref prefix from version
          VERSION=$(echo "{% raw %}${{ github.ref }}{% endraw %}" | sed -e 's,.*/\(.*\),\1,')
          # Strip "v" prefix from tag name
          [[ "{% raw %}${{ github.ref }}{% endraw %}" == "refs/tags/"* ]] && VERSION=$(echo $VERSION | sed -e 's/^v//')
          # Use Docker `latest` tag convention
          [ "$VERSION" == "master" ] && VERSION=latest
          echo IMAGE_ID=$IMAGE_ID
          echo VERSION=$VERSION
          docker tag $IMAGE_NAME $IMAGE_ID:$VERSION
          docker push $IMAGE_ID:$VERSION
```

{% endif %}
