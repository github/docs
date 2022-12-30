---
title: GitHub Packages 빠른 시작
intro: '{% data variables.product.prodname_actions %}를 사용해 {% data variables.product.prodname_registry %}에 게시합니다.'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Quickstart
ms.openlocfilehash: 887c4ee6c5e6b3e2c391c2d5754cfcb2787e4b86
ms.sourcegitcommit: cfe91073c844cb762131b2de9fb41f7f9db792fc
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/24/2022
ms.locfileid: '148181259'
---
{% data reusables.actions.enterprise-github-hosted-runners %}

## 소개

이 가이드에서는 {% data variables.product.prodname_actions %} 워크플로를 만들어 코드를 테스트한 다음 {% data variables.product.prodname_registry %}에 게시합니다.

## 패키지 게시

1. {% data variables.product.prodname_dotcom %}에 새 리포지토리를 만들고 Node에 `.gitignore`를 추가합니다. 자세한 내용은 “[새 리포지토리 만들기](/github/creating-cloning-and-archiving-repositories/creating-a-new-repository)”를 참조하세요.
2. 로컬 컴퓨터에 리포지토리를 복제합니다.
    ```shell
    $ git clone https://{% ifversion ghes or ghae %}YOUR-HOSTNAME{% else %}github.com{% endif %}/YOUR-USERNAME/YOUR-REPOSITORY.git
    $ cd YOUR-REPOSITORY
    ```
3. `index.js` 파일을 만들고 “Hello world!”라는 기본 알림을 추가합니다.
    {% raw %}
    ```javascript{:copy}
    console.log("Hello, World!");
    ```
    {% endraw %}
4. `npm init`을 사용하여 npm 패키지를 초기화합니다. 패키지 초기화 마법사에서 _`@YOUR-USERNAME/YOUR-REPOSITORY`_ 와 같은 이름의 패키지를 입력하고 테스트 스크립트를 `exit 0`으로 설정합니다. 그러면 패키지에 대한 정보가 포함된 `package.json` 파일이 생성됩니다.
    {% raw %}
    ```shell
    $ npm init
      ...
      package name: @YOUR-USERNAME/YOUR-REPOSITORY
      ...
      test command: exit 0
      ...    
    ```
    {% endraw %}
5. `npm install`을 실행하여 `package-lock.json` 파일을 생성한 다음 변경 내용을 {% data variables.product.prodname_dotcom %}에 푸시합니다.
    ```shell
    $ npm install
    $ git add index.js package.json package-lock.json
    $ git commit -m "initialize npm package"
    $ git push
    ```
6. `.github/workflows` 디렉터리를 만듭니다. 디렉터리에서 `release-package.yml`이라는 파일을 만듭니다.
7. 다음 YAML 콘텐츠를 `release-package.yml` 파일{% ifversion ghes or ghae %}로 복사하여 `YOUR-HOSTNAME`을(를) 엔터프라이즈{% endif %}의 이름으로 바꿉니다.
    ```yaml{:copy}
    name: Node.js Package

    on:
      release:
        types: [created]

    jobs:
      build:
        runs-on: ubuntu-latest
        steps:
          - uses: {% data reusables.actions.action-checkout %}
          - uses: {% data reusables.actions.action-setup-node %}
            with:
              node-version: 16
          - run: npm ci
          - run: npm test

      publish-gpr:
        needs: build
        runs-on: ubuntu-latest
        permissions:
          packages: write
          contents: read
        steps:
          - uses: {% data reusables.actions.action-checkout %}
          - uses: {% data reusables.actions.action-setup-node %}
            with:
              node-version: 16
              registry-url: {% ifversion ghes or ghae %}https://npm.YOUR-HOSTNAME.com/{% else %}https://npm.pkg.github.com/{% endif %}
          - run: npm ci
          - run: npm publish
            env:
              NODE_AUTH_TOKEN: ${% raw %}{{secrets.GITHUB_TOKEN}}{% endraw %}
    ```
8. 다음 방법 중 하나를 사용하여 패키지를 게시할 범위 및 레지스트리를 NPM에 알릴 수 있습니다.
   - 다음과 같은 콘텐츠의 루트 디렉터리에 `.npmrc` 파일을 만들어 리포지토리에 대한 NPM 구성 파일을 추가합니다. {% raw %}
      ```shell
      @YOUR-USERNAME:registry=https://npm.pkg.github.com
      ```
      {% endraw %}
   - `package.json` 파일을 편집하고 `publishConfig` 키를 지정합니다.{% raw %}
      ```shell
      "publishConfig": {
        "@<em>YOUR-USERNAME</em>:registry": "https://npm.pkg.github.com"
      }
      ```
      {% endraw %}
9. 변경 내용을 커밋하고 {% data variables.product.prodname_dotcom %}에 푸시합니다.
    ```shell
    $ git add .github/workflows/release-package.yml
    # Also add the file you created or edited in the previous step.
    $ git add .npmrc or package.json
    $ git commit -m "workflow to publish package"
    $ git push
    ```
10.  만든 워크플로는 리포지토리에 새 릴리스가 만들어질 때마다 실행됩니다. 테스트가 통과하면 패키지가 {% data variables.product.prodname_registry %}에 게시됩니다.
    
    이를 테스트하려면 리포지토리의 **코드** 탭으로 이동하여 새 릴리스를 만듭니다. 자세한 내용은 “[리포지토리에서 릴리스 관리](/github/administering-a-repository/managing-releases-in-a-repository#creating-a-release)”를 참조하세요.

## 게시된 패키지 보기

게시한 모든 패키지를 볼 수 있습니다.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.package_registry.packages-from-code-tab %} {% data reusables.package_registry.navigate-to-packages %}

## 게시된 패키지 설치

이제 패키지를 게시했으므로 전체 프로젝트에서 종속성으로 사용할 수 있습니다. 자세한 내용은 “[npm 레지스트리 작업](/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#installing-a-package)”을 참조하세요.

## 다음 단계

방금 추가한 기본 워크플로는 리포지토리에 새 릴리스가 만들어질 때마다 실행됩니다. 그러나 이것은 {% data variables.product.prodname_registry %}로 수행할 수 있는 작업의 시작에 불과합니다. 단일 워크플로를 사용하여 여러 레지스트리에 패키지를 게시하고, 병합된 끌어오기 요청과 같은 다른 이벤트에서 실행되도록 워크플로를 트리거하고, 컨테이너를 관리하는 등 여러 작업을 할 수 있습니다.

{% data variables.product.prodname_registry %}와 {% data variables.product.prodname_actions %}를 결합하면 애플리케이션 개발 프로세스의 거의 모든 측면을 자동화할 수 있습니다. 시작할 준비가 되셨나요? {% data variables.product.prodname_registry %}와 {% data variables.product.prodname_actions %}를 사용하여 다음 단계를 수행하는 데 유용한 리소스는 다음과 같습니다.

- GitHub Packages에 대한 심층적인 자습서인 “[{% data variables.product.prodname_registry %} 알아보기](/packages/learn-github-packages)”
- GitHub Actions에 대한 심층적인 자습서인 “[{% data variables.product.prodname_actions %} 알아보기](/actions/learn-github-actions)”
- 특정 사용 사례 및 예제가 담긴 “[{% data variables.product.prodname_registry %} 레지스트리 작업](/packages/working-with-a-github-packages-registry)”
