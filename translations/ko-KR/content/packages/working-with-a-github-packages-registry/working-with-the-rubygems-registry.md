---
title: RubyGems 레지스트리 작업
intro: '패키지를 {% data variables.product.prodname_registry %}에 게시하고 {% data variables.product.prodname_registry %}에 저장된 패키지를 Bundler가 있는 Ruby 프로젝트의 종속성으로 사용하도록 RubyGems를 구성할 수 있습니다.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /articles/configuring-rubygems-for-use-with-github-package-registry
  - /github/managing-packages-with-github-package-registry/configuring-rubygems-for-use-with-github-package-registry
  - /github/managing-packages-with-github-packages/configuring-rubygems-for-use-with-github-packages
  - /packages/using-github-packages-with-your-projects-ecosystem/configuring-rubygems-for-use-with-github-packages
  - /packages/guides/configuring-rubygems-for-use-with-github-packages
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: RubyGems registry
ms.openlocfilehash: 514a50358bf8171b3ea8d13b01375306e784e63f
ms.sourcegitcommit: cea091b5171ad05f18b3d35fa063cfea8aea12c4
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/17/2022
ms.locfileid: '148172147'
---
{% data reusables.package_registry.packages-ghes-release-stage %} {% data reusables.package_registry.packages-ghae-release-stage %}

{% data reusables.package_registry.admins-can-configure-package-types %}

## 필수 조건

- RubyGems 2.4.1 이상이 있어야 합니다. RubyGems 버전을 찾으려면 다음을 수행합니다.

  ```shell
  $ gem --version
  ```

- 번들러 1.6.4 이상이 있어야 합니다. 번들러 버전을 찾으려면 다음을 수행합니다.

  ```shell
  $ bundle --version
  Bundler version 1.13.7
  ```

## {% data variables.product.prodname_registry %} 인증

{% data reusables.package_registry.authenticate-packages %}

{% data reusables.package_registry.authenticate-packages-github-token %}

### {% data variables.product.pat_generic %}을(를) 사용하여 인증

{% data reusables.package_registry.required-scopes %}

gem을 게시하고 설치하려면 {% data variables.product.pat_generic %}을(를) 사용하여 {% data variables.product.prodname_registry %}에 인증하도록 RubyGems 또는 Bundler를 구성할 수 있습니다.

새 gem을 게시하려면 {% data variables.product.pat_v1 %}을(를) 포함하도록 *~/.gem/credentials* 파일을 편집하여 RubyGems에서 {% data variables.product.prodname_registry %}에 인증해야 합니다. 이 파일이 없는 경우 새 *~/.gem/credentials* 파일을 만듭니다.

예를 들어 다음을 포함하도록 *~/.gem/credentials* 을 만들거나 편집하여 *TOKEN* 을 {% data variables.product.pat_generic %}로 바꿉다.

```shell
---
:github: Bearer TOKEN
```

gem을 설치하려면 를 포함 `https://USERNAME:TOKEN@{% ifversion fpt or ghec %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/OWNER/`하도록 gem 원본을 업데이트하여 {% data variables.product.prodname_registry %}에 인증해야 합니다. 아래와 같이 바꿔야 합니다.
  - `USERNAME`을 {% data variables.product.prodname_dotcom %} 사용자 이름으로 바꾸기.
  - `TOKEN` {% data variables.product.pat_v1 %}.
  - `OWNER`를 프로젝트를 포함하는 리포지토리를 소유하는 사용자 또는 조직 계정의 이름으로 바꾸기.{% ifversion ghes %}
  - `REGISTRY-URL`을 인스턴스의 Rubygems 레지스트리에 대한 URL로 바꾸기. 인스턴스에 하위 도메인 격리가 사용 설정된 경우 `rubygems.HOSTNAME`을 사용합니다. 인스턴스에 하위 도메인 격리가 사용 설정된 경우 `HOSTNAME/_registry/rubygems`을 사용합니다. 두 경우 모두 *HOSTNAME* 을 {% data variables.product.prodname_ghe_server %} 인스턴스의 호스트 이름으로 바꿉니다.
{% elsif ghae %}
  - `REGISTRY-URL`을 인스턴스의 Rubygems 레지스트리 `rubygems.HOSTNAME`에 대한 URL로 바꾸기. *HOSTNAME* 을 {% data variables.location.product_location %}의 호스트 이름으로 바꿉다.
{% endif %}

패키지를 전역적으로 사용할 수 있도록 하려면 다음 명령을 실행하여 레지스트리를 원본으로 추가할 수 있습니다.
```shell
gem sources --add https://USERNAME:TOKEN@{% ifversion fpt or ghec %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/OWNER/
```

Bundler로 인증하려면 {% data variables.product.pat_v1 %}을(를) 사용하도록 Bundler를 구성하고 *, USERNAME* 을 {% data variables.product.prodname_dotcom %} 사용자 이름으로 바꾸고, *TOKEN* 을 {% data variables.product.pat_generic %}로 바꾸고, *OWNER* 를 프로젝트가 포함된 리포지토리를 소유한 사용자 또는 조직 계정의 이름으로 바꿉다. {% ifversion ghes %} 를 인스턴스의 RubyGems 레지스트리에 대한 URL로 바꿉 `REGISTRY-URL` 니다. 인스턴스에 하위 도메인 격리가 사용 설정된 경우 `rubygems.HOSTNAME`을 사용합니다. 인스턴스에 하위 도메인 격리가 사용 설정된 경우 `HOSTNAME/_registry/rubygems`을 사용합니다. 두 경우 모두 *HOSTNAME* 을 {% data variables.product.prodname_ghe_server %} 인스턴스의 호스트 이름으로 바꿉니다. {% elsif ghae %} `REGISTRY-URL`을 인스턴스의 Rubygems 레지스트리 `rubygems.HOSTNAME`에 대한 URL로 바꿉니다. *HOSTNAME* 을 {% data variables.location.product_location %}의 호스트 이름으로 바꿉다. {% endif %}

```shell
$ bundle config https://{% ifversion fpt or ghec %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/OWNER USERNAME:TOKEN
```

## 패키지 게시

{% data reusables.package_registry.default-name %} 예를 들어 `octo-org` 조직에 `<GEM NAME>`을 게시하는 경우 {% data variables.product.prodname_registry %}에서는 gem을 `octo-org/<GEM NAME>` 리포지토리에 게시합니다. gem을 만드는 방법에 대한 자세한 내용은 RubyGems 설명서에서 “[Make your own gem(직접 gem 만들기)](http://guides.rubygems.org/make-your-own-gem/)”을 참조하세요.

{% data reusables.package_registry.viewing-packages %}

{% data reusables.package_registry.authenticate-step %}
2. *gemspec* 에서 패키지를 빌드하여 *.gem* 패키지를 만듭니다.
  ```
  gem build <GEM NAME>.gemspec
  ```
3. {% data variables.product.prodname_registry %}에 패키지를 게시하여 `OWNER`를 프로젝트를 포함하는 리포지토리를 소유하는 사용자 또는 조직 계정의 이름으로, `<GEM NAME>`을 gem 패키지의 이름으로 바꿉니다.{% ifversion ghes %} `REGISTRY-URL`을 인스턴스의 Rubygems 레지스트리에 대한 URL로 바꿉니다. 인스턴스에 하위 도메인 격리가 사용 설정된 경우 `rubygems.HOSTNAME`을 사용합니다. 인스턴스에 하위 도메인 격리가 사용 설정된 경우 `HOSTNAME/_registry/rubygems`을 사용합니다. 두 경우 모두 *HOSTNAME* 을 {% data variables.product.prodname_ghe_server %} 인스턴스의 호스트 이름으로 바꿉니다. {% elsif ghae %} `REGISTRY-URL`을 인스턴스의 Rubygems 레지스트리 `rubygems.HOSTNAME`에 대한 URL로 바꿉니다. *HOSTNAME* 을 {% data variables.location.product_location %}의 호스트 이름으로 바꿉다. {% endif %}

  ```
  $ gem push --key github \
  --host https://{% ifversion fpt or ghec %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/OWNER \
  <GEM NAME>-0.0.1.gem
  ```

## 동일한 리포지토리에 여러 패키지 게시

여러 gem을 동일한 리포지토리에 게시하기 위해 `gem.metadata`의 `github_repo` 필드에 {% data variables.product.prodname_dotcom %} 리포지토리에 대한 URL을 포함할 수 있습니다. 이 필드를 포함하는 경우 {% data variables.product.prodname_dotcom %}은 gem 이름을 사용하는 대신 이 값을 기반으로 리포지토리와 일치합니다. {% ifversion ghes or ghae %} *HOSTNAME* 을 {% data variables.location.product_location %}의 호스트 이름으로 바꿉 있습니다. {% endif %}

```ruby
gem.metadata = { "github_repo" => "ssh://{% ifversion fpt or ghec %}github.com{% else %}HOSTNAME{% endif %}/OWNER/REPOSITORY" }
```

## 패키지 설치

*rubygems.org* 에서 gem을 사용하는 것처럼 {% data variables.product.prodname_registry %}에서 gem을 사용할 수 있습니다. *~/.gemrc* 파일에서 {% data variables.product.prodname_dotcom %} 사용자 또는 조직을 소스로 추가하거나 번들러를 사용하여 *Gemfile* 파일을 편집하여 {% data variables.product.prodname_registry %}를 인증할 수 있습니다.

{% data reusables.package_registry.authenticate-step %}
1. 번들러의 경우 *Gemfile* 에서 {% data variables.product.prodname_dotcom %} 사용자 또는 조직을 소스로 추가하여 새 소스에서 gem을 가져옵니다. 예를 들어 지정한 패키지에만 {% data variables.product.prodname_registry %}를 사용하는 *Gemfile* 에 새 `source` 블록을 추가하여 *GEM NAME* 을 {% data variables.product.prodname_registry %}에서 설치하려는 패키지로, *OWNER* 를 설치하려는 gem이 포함된 리포지토리를 소유하는 사용자 또는 조직으로 바꿀 수 있습니다.{% ifversion ghes %} `REGISTRY-URL`을 인스턴스의 Rubygems 레지스트리에 대한 URL로 바꿉니다. 인스턴스에 하위 도메인 격리가 사용 설정된 경우 `rubygems.HOSTNAME`을 사용합니다. 인스턴스에 하위 도메인 격리가 사용 설정된 경우 `HOSTNAME/_registry/rubygems`을 사용합니다. 두 경우 모두 *HOSTNAME* 을 {% data variables.product.prodname_ghe_server %} 인스턴스의 호스트 이름으로 바꿉니다. {% elsif ghae %} `REGISTRY-URL`을 인스턴스의 Rubygems 레지스트리 `rubygems.HOSTNAME`에 대한 URL로 바꿉니다. *HOSTNAME* 을 {% data variables.location.product_location %}의 호스트 이름으로 바꿉다. {% endif %}

  ```ruby
  source "https://rubygems.org"

  gem "rails"

  source "https://{% ifversion fpt or ghec %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/OWNER" do
    gem "GEM NAME"
  end
  ```

3. 버전이 1.7.0 이전인 번들러의 경우 새 전역 `source`를 추가해야 합니다. 번들러 사용에 대한 자세한 내용은 [bundler.io documentation](https://bundler.io/gemfile.html)을 참조하세요.

  ```ruby
  source "https://{% ifversion fpt or ghec %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/OWNER"
  source "https://rubygems.org"

  gem "rails"
  gem "GEM NAME"
  ```

4. 다음을 수행하여 패키지를 설치합니다.
  ```
  $ gem install <GEM NAME> --version "0.1.1"
  ```

## 추가 참고 자료

- “[패키지 삭제 및 복원](/packages/learn-github-packages/deleting-and-restoring-a-package)”

