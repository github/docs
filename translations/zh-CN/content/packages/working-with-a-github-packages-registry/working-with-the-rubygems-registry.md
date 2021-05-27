---
title: Working with the RubyGems registry
intro: '您可以配置 RubyGems 以将包发布到 {% data variables.product.prodname_registry %} 并将存储在 {% data variables.product.prodname_registry %} 上的包用作带 Bundler 的 Ruby 项目中的依赖项。'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /articles/configuring-rubygems-for-use-with-github-package-registry
  - /github/managing-packages-with-github-package-registry/configuring-rubygems-for-use-with-github-package-registry
  - /github/managing-packages-with-github-packages/configuring-rubygems-for-use-with-github-packages
  - /packages/using-github-packages-with-your-projects-ecosystem/configuring-rubygems-for-use-with-github-packages
  - /packages/guides/configuring-rubygems-for-use-with-github-packages
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
---

{% data reusables.package_registry.packages-ghes-release-stage %}
{% data reusables.package_registry.packages-ghae-release-stage %}

**注：**安装或发布 Docker 映像时，{% data variables.product.prodname_registry %} 当前不支持外部图层，如 Windows 映像。

### 基本要求

- 必须拥有 rubygems 2.4.1 或更高版本. 要查找您的 rubygems 版本：

  ```shell
  $ gem --version
  ```

  - 必须拥有 bundler 1.6.4 或更高版本. 要查找您的 Bundler 版本：
  ```shell
  $ bundle --version
  Bundler version 1.13.7
  ```

  - 安装 keycutter 以管理多个凭据. 要安装 keycutter：
  ```shell
  $ gem install keycutter
  ```

### 向 {% data variables.product.prodname_registry %} 验证

{% data reusables.package_registry.authenticate-packages %}

{% data reusables.package_registry.authenticate-packages-github-token %}

#### 使用个人访问令牌进行身份验证

{% data reusables.package_registry.required-scopes %}

通过编辑用于发布 gem 的 *~/.gem/credentials* 文件、编辑用于安装单个 gem 的 *~/.gemrc* 文件或使用用于跟踪和安装一个或多个 gem 的 Bundler，使用 RubyGems 向 {% data variables.product.prodname_registry %} 验证。

要发布新的 gem，您需要通过编辑 *~/.gem/credentials* 文件以包含您的个人访问令牌，使用 RubyGems 向 {% data variables.product.prodname_registry %} 验证。  如果 *~/.gem/credentials* 文件不存在，请新建该文件。

例如，您要创建或编辑 *~/.gem/credentials* 以包含以下内容，将 *TOKEN* 替换为您的个人访问令牌。

```shell
gem.metadata = { "github_repo" => "ssh://github.com/OWNER/REPOSITORY" }
```

要安装 gem，您需要通过编辑项目的 *~/.gemrc* 文件以包含 `https://USERNAME:TOKEN@{% if currentVersion == "free-pro-team@latest" %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/OWNER/`，向 {% data variables.product.prodname_registry %} 验证。 必须：
  - 将 `USERNAME` 替换为您的 {% data variables.product.prodname_dotcom %} 用户名。
  - 将 `TOKEN` 替换为您的个人访问令牌。
  - 将 `OWNER` 替换为拥有项目所在仓库的用户或组织帐户的名称。{% if enterpriseServerVersions contains currentVersion %}
  - `REGISTRY-URL` 替换为您实例的 Rubygems 注册表的 URL。 如果您的实例启用了子域隔离，请使用 `rubygems.HOSTNAME`。 如果您的实例禁用了子域隔离，请使用 `HOSTNAME/_registry/rubygems`。 在任一情况下，都将 *HOSTNAME* 替换为 {% data variables.product.prodname_ghe_server %} 实例的主机名。
{% elsif currentVersion == "github-ae@latest" %}
  - `REGISTRY-URL` 替换为您实例的 Rubygems 注册表的 URL `rubygems.HOSTNAME`。 将 *HOSTNAME* 替换为 {% data variables.product.product_location %} 的主机名。
{% endif %}

如果您没有 *~/.gemrc* 文件，请使用此示例创建新的 *~/.gemrc* 文件。

```shell
---
:backtrace: false
:bulk_threshold: 1000
:sources:
- https://rubygems.org/
- https://USERNAME:TOKEN@{% if currentVersion == "free-pro-team@latest" %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/OWNER/
:update_sources: true
:verbose: true  

```

要使用 Bundler 进行身份验证，请配置 Bundler 使用您的个人访问令牌，将 *USERNAME* 替换为您的 {% data variables.product.prodname_dotcom %} 用户名，将 *TOKEN* 替换为您的个人访问令牌，将 *OWNER* 替换为拥有项目所在仓库的用户或组织帐户的名称。{% if enterpriseServerVersions contains currentVersion %}将 `REGISTRY-URL` 替换为实例 Rubygems 注册表的 URL。 如果您的实例启用了子域隔离，请使用 `rubygems.HOSTNAME`。 如果您的实例禁用了子域隔离，请使用 `HOSTNAME/_registry/rubygems`。 在任一情况下，将 *HOSTNAME* 替换为您的 {% data variables.product.prodname_ghe_server %} 实例的主机名。{% elsif currentVersion == "github-ae@latest" %}将 `REGISTRY-URL` 替换为实例的 Rubygems 注册表 URL `rubygems.HOSTNAME`。 将 *HOSTNAME* 替换为 {% data variables.product.product_location %} 的主机名。{% endif %}

```shell
$ bundle config https://{% if currentVersion == "free-pro-team@latest" %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/<em>OWNER USERNAME:TOKEN</em>
```

### 发布包

{% data reusables.package_registry.default-name %} 例如，您将 `octo-gem` 发布到 `octo-org` 组织时，{% data variables.product.prodname_registry %} 将 gem 发布到 `octo-org/octo-gem` 仓库。 有关创建 gem 的更多信息，请参阅 RubyGems 文档中的“[创建自己的 gem](http://guides.rubygems.org/make-your-own-gem/)”。

{% data reusables.package_registry.viewing-packages %}

{% data reusables.package_registry.authenticate-step %}
2. 从 *gemspec* 构建包以创建 *.gem* 包。
  ```shell
  gem build OCTO-GEM.gemspec
  ```
3. 将包发布到 {% data variables.product.prodname_registry %}，将 `OWNER` 替换为拥有项目所在仓库的用户或组织帐户的名称，将 `OCTO-GEM` 替换为 gem 包的名称。{% if enterpriseServerVersions contains currentVersion %}将 `REGISTRY-URL` 替换为实例 Rubygems 注册表的 URL。 如果您的实例启用了子域隔离，请使用 `rubygems.HOSTNAME`。 如果您的实例禁用了子域隔离，请使用 `HOSTNAME/_registry/rubygems`。 在任一情况下，将 *HOSTNAME* 替换为您的 {% data variables.product.prodname_ghe_server %} 实例的主机名。{% elsif currentVersion == "github-ae@latest" %}将 `REGISTRY-URL` 替换为实例的 Rubygems 注册表 URL `rubygems.HOSTNAME`。 将 *HOSTNAME* 替换为 {% data variables.product.product_location %} 的主机名。{% endif %}

  ```shell
  $ gem push --key github \
  --host https://{% if currentVersion == "free-pro-team@latest" %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/<em>OWNER</em> \
  <em>OCTO-GEM-0.0.1</em>.gem
  ```

### 将多个包发布到同一个仓库

要将多个 gem 发布到同一个仓库，您可以在 `gem.metadata` 的 `github_repo` 字段中包含 {% data variables.product.prodname_dotcom %} 仓库的 URL。 如果您包含此字段，则 {% data variables.product.prodname_dotcom %} 根据此值匹配仓库，而不使用 gem 名称。{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %} 将 *HOSTNAME* 替换为 {% data variables.product.product_location %} 的主机名称。{% endif %}

```ruby
gem.metadata = { "github_repo" => "ssh://{% if currentVersion == "free-pro-team@latest" %}github.com{% else %}HOSTNAME{% endif %}/OWNER/REPOSITORY" }
```

### 安装包

您可以使用来自 {% data variables.product.prodname_registry %} 的 gem，就像使用来自 *rubygems.org* 的 gem 一样。 You need to authenticate to {% data variables.product.prodname_registry %} by adding your {% data variables.product.prodname_dotcom %} user or organization as a source in the *~/.gemrc* file or by using Bundler and editing your *Gemfile*.

{% data reusables.package_registry.authenticate-step %}
1. 对于 Bundler，请将您的 {% data variables.product.prodname_dotcom %} 用户或组织添加为 *Gemfile* 中的源，以便从这个新源获取 gem。 例如，您可以将新的 `source` 块添加到仅对您指定的包使用 {% data variables.product.prodname_registry %} 的 *Gemfile*，将 *GEM NAME* 替换为要从 {% data variables.product.prodname_registry %} 安装的包，将 *OWNER* 替换为拥有要安装的 gem 所在仓库的用户或组织。{% if enterpriseServerVersions contains currentVersion %}将 `REGISTRY-URL` 替换为实例 Rubygems 注册表的 URL。 如果您的实例启用了子域隔离，请使用 `rubygems.HOSTNAME`。 如果您的实例禁用了子域隔离，请使用 `HOSTNAME/_registry/rubygems`。 在任一情况下，将 *HOSTNAME* 替换为您的 {% data variables.product.prodname_ghe_server %} 实例的主机名。{% elsif currentVersion == "github-ae@latest" %}将 `REGISTRY-URL` 替换为实例的 Rubygems 注册表 URL `rubygems.HOSTNAME`。 将 *HOSTNAME* 替换为 {% data variables.product.product_location %} 的主机名。{% endif %}

  ```ruby
  source "https://rubygems.org"

  gem "rails"

  source "https://{% if currentVersion == "free-pro-team@latest" %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/OWNER" do
    gem "GEM NAME"
  end
  ```

3. 对于 1.7.0 之前的 Bundler 版本，您需要增加新的全局 `source`。 有关使用 Bundler 的更多信息，请参阅 [bundler.io 文档](http://bundler.io/v1.5/gemfile.html)。

  ```ruby
  source "https://{% if currentVersion == "free-pro-team@latest" %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/OWNER"
  source "https://rubygems.org"

  gem "rails"
  gem "GEM NAME"
  ```

4. 安装包：
  ```shell
  $ gem install octo-gem --version "0.1.1"
  ```

### 延伸阅读

- "{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}[删除和恢复包](/packages/learn-github-packages/deleting-and-restoring-a-package){% elsif currentVersion ver_lt "enterprise-server@3.1" or currentVersion == "github-ae@latest" %}[删除包](/packages/learn-github-packages/deleting-a-package){% endif %}"
