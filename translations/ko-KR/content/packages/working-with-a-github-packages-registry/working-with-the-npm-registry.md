---
title: npm 레지스트리 작업
intro: '패키지를 {% data variables.product.prodname_registry %}에 게시하고 {% data variables.product.prodname_registry %}에 저장된 패키지를 npm 프로젝트의 종속성으로 사용하도록 npm을 구성할 수 있습니다.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /articles/configuring-npm-for-use-with-github-package-registry
  - /github/managing-packages-with-github-package-registry/configuring-npm-for-use-with-github-package-registry
  - /github/managing-packages-with-github-packages/configuring-npm-for-use-with-github-packages
  - /packages/using-github-packages-with-your-projects-ecosystem/configuring-npm-for-use-with-github-packages
  - /packages/guides/configuring-npm-for-use-with-github-packages
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: npm registry
ms.openlocfilehash: 11b1ab58cd57c6cecdeb2366b83696166cdc6245
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193131'
---
{% data reusables.package_registry.packages-ghes-release-stage %} {% data reusables.package_registry.packages-ghae-release-stage %}

{% data reusables.package_registry.admins-can-configure-package-types %}

{% ifversion packages-npm-v2 %} {% else %}
## 게시된 npm 버전에 대한 제한

1,000개가 넘는 npm 패키지 버전을 {% data variables.product.prodname_registry %}에 게시하는 경우 사용 중에 성능 문제 및 시간 제한이 발생할 수 있습니다.

나중에 서비스 성능을 개선하기 위해 {% data variables.product.prodname_dotcom %}에 1,000개가 넘는 패키지 버전을 게시할 수 없습니다. 이 제한에 도달하기 전에 게시된 모든 버전은 계속 읽을 수 있습니다.

이 제한에 도달하면 패키지 버전을 삭제하거나 고객 지원팀에 문의하여 도움을 받으세요. 이 제한이 적용되면 이 제한을 해결하는 방법으로 설명서가 업데이트됩니다. 자세한 내용은 “[패키지 삭제 및 복원](/packages/learn-github-packages/deleting-and-restoring-a-package)” 또는 “[지원에 문의](/packages/learn-github-packages/about-github-packages#contacting-support)”를 참조하세요.
{% endif %}

## {% data variables.product.prodname_registry %} 인증

{% data reusables.package_registry.authenticate-packages %}

{% ifversion packages-npm-v2 %} {% data reusables.package_registry.authenticate_with_pat_for_v2_registry %}

{% data variables.product.prodname_codespaces %} 및 {% data variables.product.prodname_actions %}에 대해 패키지에 대한 액세스 권한을 독립적으로 부여하도록 선택할 수도 있습니다. 자세한 내용은 “[Codespaces가 패키지에 액세스하도록 보장](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-codespaces-access-to-your-package) 및 [패키지에 대한 워크플로 액세스 보장](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-workflow-access-to-your-package)”을 참조하세요.
{% endif %}

### {% data variables.product.pat_generic %}을(를) 사용하여 인증

{% data reusables.package_registry.required-scopes %}

사용자별 *~/.npmrc* 파일을 편집하여 {% data variables.product.pat_v1 %}을(를) 포함하거나 사용자 이름 및 {% data variables.product.pat_generic %}를 사용하여 명령줄에서 npm에 로그인하여 npm으로 {% data variables.product.prodname_registry %}에 인증할 수 있습니다.

{% data variables.product.pat_v1 %}을(를) *~/.npmrc* 파일에 추가하여 인증하려면 다음 줄을 포함하도록 프로젝트의 *~/.npmrc* 파일을 편집하여 {% ifversion ghes or ghae %}*HOSTNAME* 을 {% data variables.location.product_location %}의 호스트 이름으로 바꾸고 {% endif %}*TOKEN* 을 {% data variables.product.pat_generic %}로 바꿉니다. 새 *~/.npmrc* 파일이 없으면 만듭니다.

{% ifversion ghes %} 인스턴스에 하위 도메인 격리가 사용된 경우: {% endif %}

```shell
//{% ifversion fpt or ghec %}npm.pkg.github.com{% else %}npm.HOSTNAME/{% endif %}/:_authToken=TOKEN
```

{% ifversion ghes %} 인스턴스에 하위 도메인 격리가 사용되지 않은 경우:

```shell
//HOSTNAME/_registry/npm/:_authToken=TOKEN
```
{% endif %}

npm에 로그인하여 인증하려면 명령을 사용하여 `npm login` *USERNAME* 을 {% data variables.product.prodname_dotcom %} 사용자 이름으로 바꾸고, *TOKEN* 을 {% data variables.product.pat_v1 %}로 바꾸고, *PUBLIC-EMAIL-ADDRESS* 를 전자 메일 주소로 바꿉니다.

{% data variables.product.prodname_registry %}가 npm을 사용하기 위한 기본 패키지 레지스트리가 아니며 `npm audit` 명령을 사용하려는 경우 {% data variables.product.prodname_registry %}에 인증할 때 패키지 소유자에 `--scope` 플래그를 사용하는 것이 좋습니다.

{% ifversion ghes %} 인스턴스에 하위 도메인 격리가 사용된 경우: {% endif %}

```shell
$ npm login --scope=@OWNER --registry=https://{% ifversion fpt or ghec %}npm.pkg.github.com{% else %}npm.HOSTNAME/{% endif %}

> Username: USERNAME
> Password: TOKEN
> Email: PUBLIC-EMAIL-ADDRESS
```

{% ifversion ghes %} 인스턴스에 하위 도메인 격리가 사용되지 않은 경우:

```shell
$ npm login --scope=@OWNER --registry=https://HOSTNAME/_registry/npm/
> Username: USERNAME
> Password: TOKEN
> Email: PUBLIC-EMAIL-ADDRESS
```
{% endif %}

## 패키지 게시

{% note %}

**참고:** 패키지 이름 및 범위는 소문자만 사용해야 합니다.

{% endnote %}

{% ifversion packages-npm-v2 %} {% data variables.product.prodname_registry %} 레지스트리는 조직 또는 개인 계정 내에 npm 패키지를 저장하고 패키지를 리포지토리와 연결하도록 합니다. 리포지토리에서 사용 권한을 상속할지 또는 리포지토리와 독립적으로 세분화된 권한을 설정할지 선택할 수 있습니다.

{% data reusables.package_registry.publishing-user-scoped-packages %} {% endif %}

기본적으로 {% data variables.product.prodname_registry %}는 *package.json* 파일의 이름 필드에 지정한 {% data variables.product.prodname_dotcom %} 리포지토리에 패키지를 게시합니다. 예를 들어 `@my-org/test`라는 패키지를 `my-org/test` {% data variables.product.prodname_dotcom %} 리포지토리에 게시할 수 있습니다. [npm v8.5.3](https://github.com/npm/cli/releases/tag/v8.5.3) 이상을 실행 중인 경우 패키지 디렉터리에 *README.md* 파일을 포함하여 패키지 목록 페이지에 대한 요약을 추가할 수 있습니다. 자세한 내용은 npm 설명서에서 “[package.json 작업](https://docs.npmjs.com/getting-started/using-a-package.json)” 및 “[Node.js 모듈을 만드는 방법](https://docs.npmjs.com/getting-started/creating-node-modules)”을 참조하세요.

*package.json* 파일에 `URL` 필드를 포함하여 동일한 {% data variables.product.prodname_dotcom %} 리포지토리에 여러 패키지를 게시할 수 있습니다. 자세한 내용은 “[동일한 리포지토리에 여러 패키지 게시](#publishing-multiple-packages-to-the-same-repository)”를 참조하세요.

프로젝트의 로컬 *.npmrc* 파일을 사용하거나 *package.json* 의 `publishConfig` 옵션을 사용하여 프로젝트에 대한 범위 매핑을 설정할 수 있습니다. {% data variables.product.prodname_registry %}는 범위가 지정된 npm 패키지만 지원합니다. 범위가 지정된 패키지에는 `@owner/name` 형식의 이름이 있습니다. 범위가 지정된 패키지는 항상 `@` 기호로 시작합니다. 범위가 지정된 이름을 사용하려면 *package.json* 의 이름을 업데이트해야 할 수 있습니다. 예: `"name": "@codertocat/hello-world-npm"`.

{% data reusables.package_registry.viewing-packages %}

### 로컬 *.npmrc* 파일을 사용하여 패키지 게시

*.npmrc* 파일을 사용하여 프로젝트에 대한 범위 매핑을 구성할 수 있습니다. *.npmrc* 파일에서 {% data variables.product.prodname_registry %} URL 및 계정 소유자를 사용하여 {% data variables.product.prodname_registry %}에서 패키지 요청을 라우팅할 위치를 알 수 있도록 합니다. *.npmrc* 파일을 사용하면 다른 개발자가 실수로 패키지를 {% data variables.product.prodname_registry %}가 아닌 npmjs.org에 게시하지 않도록 합니다.

{% data reusables.package_registry.authenticate-step %} {% data reusables.package_registry.create-npmrc-owner-step %} {% data reusables.package_registry.add-npmrc-to-repo-step %}
1. 프로젝트의 *package.json* 에서 패키지 이름을 확인합니다. `name` 필드에는 패키지의 범위와 이름이 포함되어야 합니다. 예를 들어 패키지 이름이 “test”이고 “My-org” {% data variables.product.prodname_dotcom %} 조직에 게시하는 경우 *package.json* 의 `name` 필드는 `@my-org/test`여야 합니다.
{% data reusables.package_registry.verify_repository_field %} {% data reusables.package_registry.publish_package %}

### `publishConfig`를 사용하여 *package.json* 파일에 패키지 게시

*package.json* 파일의 `publishConfig` 요소를 사용하여 패키지를 게시할 레지스트리를 지정할 수 있습니다. 자세한 내용은 npm 설명서에서 “[publishConfig](https://docs.npmjs.com/files/package.json#publishconfig)”를 참조하세요.

1. 패키지의 *package.json* 파일을 편집하고 `publishConfig` 항목을 포함합니다.
  {% ifversion ghes %} 인스턴스에 하위 도메인 격리가 사용된 경우: {% endif %}
  ```shell
  "publishConfig": {
    "registry": "https://{% ifversion fpt or ghec %}npm.pkg.github.com{% else %}npm.HOSTNAME/{% endif %}"
  },
  ```
  {% ifversion ghes %} 인스턴스에 하위 도메인 격리가 사용되지 않은 경우:
   ```shell
   "publishConfig": {
     "registry": "https://HOSTNAME/_registry/npm/"
   },
  ```
  {% endif %} {% data reusables.package_registry.verify_repository_field %} {% data reusables.package_registry.publish_package %}

## 동일한 리포지토리에 여러 패키지 게시

여러 패키지를 동일한 리포지토리에 게시하려면 각 패키지에 대한 *package.json* 파일의 `repository` 필드에 {% data variables.product.prodname_dotcom %} 리포지토리의 URL을 포함할 수 있습니다.

리포지토리의 URL이 올바른지 확인하려면 REPOSITORY를 게시할 패키지가 포함된 리포지토리의 이름으로, OWNER를 리포지토리를 소유하는 {% data variables.product.prodname_dotcom %}의 사용자 또는 조직 계정 이름으로 바꿉니다.

{% data variables.product.prodname_registry %}는 패키지 이름 대신 URL을 기반으로 리포지토리를 맞춥니다.

```shell
"repository":"https://{% ifversion fpt or ghec %}github.com{% else %}HOSTNAME{% endif %}/OWNER/REPOSITORY",
```

## 패키지 설치

패키지를 프로젝트의 *package.json* 파일에 종속성으로 추가하여 {% data variables.product.prodname_registry %}의 패키지를 설치할 수 있습니다. 프로젝트에서 *package.json* 을 사용하는 방법에 대한 자세한 내용은 npm 설명서의 “[package.json 작업](https://docs.npmjs.com/getting-started/using-a-package.json)”을 참조하세요.

기본적으로 한 조직의 패키지를 추가할 수 있습니다. 자세한 내용은 “[다른 조직에서 패키지 설치](#installing-packages-from-other-organizations)”를 참조하세요.

또한 패키지를 설치하는 모든 요청이 {% data variables.product.prodname_registry %}{% ifversion ghae %}로 라우팅되도록{% else %}를 통과하도록{% endif %} 프로젝트에 *.npmrc* 파일을 추가해야 합니다. {% ifversion fpt or ghes or ghec %}{% data variables.product.prodname_registry %}를 통해 모든 패키지 요청을 라우팅하는 경우 *npmjs.org* 에서 범위가 지정된 패키지와 범위가 지정되지 않은 패키지를 모두 사용할 수 있습니다. 자세한 내용은 npm 설명서의 “[npm - 범위](https://docs.npmjs.com/misc/scope)”를 참조하세요.{% endif %}

{% ifversion ghae %} 기본적으로 엔터프라이즈에서 호스트되는 npm 패키지만 사용할 수 있으며 범위가 지정되지 않은 패키지는 사용할 수 없습니다. 패키지 범위 지정에 대한 자세한 내용은 npm 설명서의 “[npm - 범위](https://docs.npmjs.com/misc/scope)”를 참조하세요. 필요한 경우 {% data variables.product.prodname_dotcom %} 지원을 통해 npmjs.org에 대한 업스트림 프록시를 사용할 수 있습니다. 업스트림 프록시를 사용하면 엔터프라이즈에서 요청된 패키지를 찾을 수 없는 경우 {% data variables.product.prodname_registry %}는 npmjs.org에 프록시를 요청합니다.  
{% endif %}

{% data reusables.package_registry.authenticate-step %} {% data reusables.package_registry.create-npmrc-owner-step %} {% data reusables.package_registry.add-npmrc-to-repo-step %}
1. 설치 중인 패키지를 사용하도록 프로젝트의 *package.json* 을 구성합니다. {% data variables.product.prodname_registry %}에 대한 *package.json* 파일에 패키지 종속성을 추가하려면 전체 범위의 패키지 이름(예: `@my-org/server`)을 지정합니다. *npmjs.com* 패키지의 경우 전체 이름(예: `@babel/core` 또는 `@lodash`)을 지정합니다. 를 패키지 종속성으로 대체 `<organization_name>/<package_name>` 합니다.

  ```json
  {
    "name": "@my-org/server",
    "version": "1.0.0",
    "description": "Server app that uses the <organization_name>/<package_name> package",
    "main": "index.js",
    "author": "",
    "license": "MIT",
    "dependencies": {
      "<organization_name>/<package_name>": "1.0.0"
    }
  }
  ```
5. 패키지를 설치합니다.

  ```shell
  $ npm install
  ```

### 다른 조직에서 패키지 설치

기본적으로 한 조직의 {% data variables.product.prodname_registry %} 패키지만 사용할 수 있습니다. 패키지 요청을 여러 조직 및 사용자에게 라우팅하려는 경우 *.npmrc* 파일에 줄을 추가하여 {% ifversion ghes or ghae %}*HOSTNAME* 을 {% data variables.location.product_location %}의 호스트 이름으로 바꾸고 {% endif %}*OWNER* 를 프로젝트가 포함된 리포지토리를 소유하는 사용자 또는 조직 계정의 이름으로 바꿀 수 있습니다.

{% ifversion ghes %} 인스턴스에 하위 도메인 격리가 사용된 경우: {% endif %}

```shell
@OWNER:registry=https://{% ifversion fpt or ghec %}npm.pkg.github.com{% else %}npm.HOSTNAME{% endif %}
@OWNER:registry=https://{% ifversion fpt or ghec %}npm.pkg.github.com{% else %}npm.HOSTNAME{% endif %}
```

{% ifversion ghes %} 인스턴스에 하위 도메인 격리가 사용되지 않은 경우:

```shell
@OWNER:registry=https://HOSTNAME/_registry/npm
@OWNER:registry=https://HOSTNAME/_registry/npm
```
{% endif %}

{% ifversion ghes %}
## 공식 NPM 레지스트리 사용

{% data variables.product.prodname_registry %}를 사용하면 {% data variables.product.prodname_ghe_server %} 관리자가 이 기능을 사용한 경우 `registry.npmjs.com`에서 공식 NPM 레지스트리에 액세스할 수 있습니다. 자세한 내용은 [공식 NPM 레지스트리에 연결](/admin/packages/configuring-packages-support-for-your-enterprise#connecting-to-the-official-npm-registry)을 참조하세요.
{% endif %}
