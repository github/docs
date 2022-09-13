---
title: 使用 RubyGems 注册表
intro: '您可以配置 RubyGems 以将包发布到 {% data variables.product.prodname_registry %} 并将存储在 {% data variables.product.prodname_registry %} 上的包用作带 Bundler 的 Ruby 项目中的依赖项。'
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
ms.openlocfilehash: 56fb2fda7c50e6f1a1a3265e55c77d65a7af8705
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: '147882325'
---
{% data reusables.package_registry.packages-ghes-release-stage %} {% data reusables.package_registry.packages-ghae-release-stage %}

{% data reusables.package_registry.admins-can-configure-package-types %}

## 先决条件

- 您必须具有 RubyGems 2.4.1 或更高版本。 要查找您的 RubyGems 版本：

  ```shell
  $ gem --version
  ```

- 必须拥有 bundler 1.6.4 或更高版本。 要查找您的 Bundler 版本：

  ```shell
  $ bundle --version
  Bundler version 1.13.7
  ```

- 安装 keycutter 以管理多个凭据。 要安装 keycutter：

  ```shell
  $ gem install keycutter
  ```

## 向 {% data variables.product.prodname_registry %} 验证

{% data reusables.package_registry.authenticate-packages %}

{% data reusables.package_registry.authenticate-packages-github-token %}

### 使用个人访问令牌进行身份验证

{% data reusables.package_registry.required-scopes %}

通过编辑用于发布 gem 的 ~/.gem/credentials 文件、编辑用于安装单个 gem 的 ~/.gemrc 文件或使用用于跟踪和安装一个或多个 gem 的 Bundler，可使用 RubyGems 向 {% data variables.product.prodname_registry %} 进行身份验证 。

要发布新的 gem，需要通过编辑 ~/.gem/credentials 文件以包含你的个人访问令牌，使用 RubyGems 向 {% data variables.product.prodname_registry %} 进行身份验证。  如果此文件不存在，请创建新的 ~/.gem/credentials 文件。

例如，创建或编辑 ~/.gem/credentials 以包含以下内容，将“令牌”替换为个人访问令牌 。

```shell
---
:github: Bearer <em>TOKEN</em>
```

要安装 gem，需要通过编辑项目的 ~/.gemrc 文件以包含 `https://USERNAME:TOKEN@{% ifversion fpt or ghec %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/OWNER/`，来对 {% data variables.product.prodname_registry %} 进行身份验证。 必须：
  - 将 `USERNAME` 替换为 {% data variables.product.prodname_dotcom %} 用户名。
  - 将 `TOKEN` 替换为个人访问令牌。
  - 将 `OWNER` 替换为拥有项目所在存储库的用户或组织帐户的名称。{% ifversion ghes %}
  - 将 `REGISTRY-URL` 替换为实例的 Rubygems 注册表的 URL。 如果实例启用了子域隔离功能，请使用 `rubygems.HOSTNAME`。 如果实例禁用了子域隔离功能，请使用 `HOSTNAME/_registry/rubygems`。 在任一情况下，都将 HOSTNAME 替换为 {% data variables.product.prodname_ghe_server %} 实例的主机名。
{% elsif ghae %}
  - 将 `REGISTRY-URL` 替换为实例的 Rubygems 注册表 `rubygems.HOSTNAME` 的 URL。 将 HOSTNAME 替换为 {% data variables.product.product_location %} 的主机名。
{% endif %}

如果没有 ~/.gemrc 文件，请使用此示例创建新的 ~/.gemrc 文件 。

```shell
---
:backtrace: false
:bulk_threshold: 1000
:sources:
- https://rubygems.org/
- https://USERNAME:TOKEN@{% ifversion fpt or ghec %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/OWNER/
:update_sources: true
:verbose: true  

```

若要使用 Bundler 进行身份验证，请将 Bundler 配置为使用个人访问令牌，将“用户名”替换为 {% data variables.product.prodname_dotcom %} 用户名，将“令牌”替换为个人访问令牌，并将“所有者”替换为拥有包含项目的存储库的用户或组织帐户的名称。{% ifversion ghes %} 将 `REGISTRY-URL` 替换为实例的 RubyGems 注册表的 URL  。 如果实例启用了子域隔离功能，请使用 `rubygems.HOSTNAME`。 如果实例禁用了子域隔离功能，请使用 `HOSTNAME/_registry/rubygems`。 在任一情况下，请将“主机名”替换为 {% data variables.product.prodname_ghe_server %} 实例的主机名。{% elsif ghae %}将 `REGISTRY-URL` 替换为实例的 Rubygems 注册表 `rubygems.HOSTNAME` 的 URL。 将 HOSTNAME 替换为 {% data variables.product.product_location %} 的主机名。{% endif %}

```shell
$ bundle config https://{% ifversion fpt or ghec %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/<em>OWNER USERNAME:TOKEN</em>
```

## 发布包

{% data reusables.package_registry.default-name %} 例如，将 `octo-gem` 发布到 `octo-org` 组织时，{% data variables.product.prodname_registry %} 会将 gem 发布到 `octo-org/octo-gem` 存储库。 有关创建 gem 的详细信息，请参阅 RubyGems 文档中的“[创建自己的 gem](http://guides.rubygems.org/make-your-own-gem/)”。

{% data reusables.package_registry.viewing-packages %}

{% data reusables.package_registry.authenticate-step %}
2. 从 gemspec 生成包以创建 .gem 包 。
  ```shell
  gem build OCTO-GEM.gemspec
  ```
3. 将包发布到 {% data variables.product.prodname_registry %}，将 `OWNER` 替换为拥有包含项目的存储库的用户或组织帐户的名称，并将 `OCTO-GEM` 替换为 gem 包的名称。{% ifversion ghes %} 将 `REGISTRY-URL` 替换为实例的 Rubygems 注册表的 URL。 如果实例启用了子域隔离功能，请使用 `rubygems.HOSTNAME`。 如果实例禁用了子域隔离功能，请使用 `HOSTNAME/_registry/rubygems`。 在任一情况下，请将“主机名”替换为 {% data variables.product.prodname_ghe_server %} 实例的主机名。{% elsif ghae %} 将 `REGISTRY-URL` 替换为实例的 Rubygems 注册表 `rubygems.HOSTNAME` 的 URL。 将 HOSTNAME 替换为 {% data variables.product.product_location %} 的主机名。{% endif %}

  ```shell
  $ gem push --key github \
  --host https://{% ifversion fpt or ghec %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/<em>OWNER</em> \
  <em>OCTO-GEM-0.0.1</em>.gem
  ```

## 将多个包发布到同一个仓库

要将多个 gem 发布到同一存储库，可在 `gem.metadata` 的 `github_repo` 字段中包含指向 {% data variables.product.prodname_dotcom %} 存储库的 URL。 如果包含此字段，则 {% data variables.product.prodname_dotcom %} 将基于此值匹配存储库，而不是使用 gem 名称。{% ifversion ghes or ghae %} 将“主机名”替换为 {% data variables.product.product_location %} 的主机名。{% endif %}

```ruby
gem.metadata = { "github_repo" => "ssh://{% ifversion fpt or ghec %}github.com{% else %}HOSTNAME{% endif %}/OWNER/REPOSITORY" }
```

## 安装包

可使用来自 {% data variables.product.prodname_registry %} 的 gem，就像使用来自 rubygems.org 的 gem 一样。需要通过在 ~/.gemrc 文件中将 {% data variables.product.prodname_dotcom %} 用户或组织添加为源，或者通过使用 Bundler 并编辑 Gemfile，对 {% data variables.product.prodname_registry %} 进行身份验证  。

{% data reusables.package_registry.authenticate-step %}
1. 对于 Bundler，请将 {% data variables.product.prodname_dotcom %} 用户或组织添加为 Gemfile 中的源，以便从这个新源获取 gem。 例如，可以将一个新的 `source` 块添加到 Gemfile，其仅对指定的包使用 {% data variables.product.prodname_registry %}，将 GEM NAME 替换为要从 {% data variables.product.prodname_registry %} 安装的包，并将“所有者”替换为拥有包含要安装的 gem 的存储库的用户或组织。{% ifversion ghes %} 将 `REGISTRY-URL` 替换为实例的 Rubygems 注册表的 URL  。 如果实例启用了子域隔离功能，请使用 `rubygems.HOSTNAME`。 如果实例禁用了子域隔离功能，请使用 `HOSTNAME/_registry/rubygems`。 在任一情况下，请将“主机名”替换为 {% data variables.product.prodname_ghe_server %} 实例的主机名。{% elsif ghae %} 将 `REGISTRY-URL` 替换为实例的 Rubygems 注册表 `rubygems.HOSTNAME` 的 URL。 将 HOSTNAME 替换为 {% data variables.product.product_location %} 的主机名。{% endif %}

  ```ruby
  source "https://rubygems.org"

  gem "rails"

  source "https://{% ifversion fpt or ghec %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/OWNER" do
    gem "GEM NAME"
  end
  ```

3. 对于低于 1.7.0 的 Bundler 版本，需要添加新的全局 `source`。 有关使用 Bundler 的详细信息，请参阅 [bundler.io 文档](https://bundler.io/gemfile.html)。

  ```ruby
  source "https://{% ifversion fpt or ghec %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/OWNER"
  source "https://rubygems.org"

  gem "rails"
  gem "GEM NAME"
  ```

4. 安装包：
  ```shell
  $ gem install octo-gem --version "0.1.1"
  ```

## 延伸阅读

- [删除和还原包](/packages/learn-github-packages/deleting-and-restoring-a-package)

