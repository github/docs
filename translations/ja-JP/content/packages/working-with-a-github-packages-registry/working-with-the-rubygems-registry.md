---
title: RubyGemsレジストリの利用
intro: '{% data variables.product.prodname_registry %} にパッケージを公開し、{% data variables.product.prodname_registry %} に保存されたパッケージを依存関係としてBundlerを使うRubyのプロジェクトで利用するよう、RubyGemsを設定できます。'
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
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147062514'
---
{% data reusables.package_registry.packages-ghes-release-stage %} {% data reusables.package_registry.packages-ghae-release-stage %}

{% data reusables.package_registry.admins-can-configure-package-types %}

## 前提条件

- RubyGemsは2.4.1以降を使わなければなりません。 RubyGemsのバージョンは、以下のようにすれば分かります。

  ```shell
  $ gem --version
  ```

- Bundler 1.6.4 以降が必要です。 Bundlerのバージョンは以下のようにすれば分かります。

  ```shell
  $ bundle --version
  Bundler version 1.13.7
  ```

- 複数の資格情報を扱うには、keycutter をインストールしてください。 keycutterは以下のようにすればインストールできます。

  ```shell
  $ gem install keycutter
  ```

## {% data variables.product.prodname_registry %} への認証を行う

{% data reusables.package_registry.authenticate-packages %}

{% data reusables.package_registry.authenticate-packages-github-token %}

### 個人アクセストークンでの認証

{% data reusables.package_registry.required-scopes %}

RubyGems を使用して {% data variables.product.prodname_registry %} に対する認証を行うには、gem を公開するための *~/.gem/credentials* ファイルを編集するか、単一の gem をインストールするための *~/.gemrc* ファイルを編集するか、1 つ以上の gem を追跡してインストールする Bundler を使用します。

新しい gem を公開するには、 *~/.gem/credentials* ファイルを編集して個人用アクセス トークンを含めることによって、RubyGems で {% data variables.product.prodname_registry %} に対して認証を行う必要があります。  このファイルが存在しない場合は、新しい *~/.gem/credentials* ファイルを作成します。

たとえば、以下を含むように *~/.gem/credentials* を作成または編集します。*TOKEN* は個人用アクセス トークンに置き換えます。

```shell
---
:github: Bearer <em>TOKEN</em>
```

gem をインストールするには、プロジェクトの *~/.gemrc* ファイルを編集して `https://USERNAME:TOKEN@{% ifversion fpt or ghec %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/OWNER/` を含めることによって、{% data variables.product.prodname_registry %} に対する認証を行う必要があります。 以下のように置き換えてください。
  - `USERNAME` を {% data variables.product.prodname_dotcom %} に。
  - `TOKEN` を個人用アクセス トークンに。
  - `OWNER` を、プロジェクトを含むリポジトリを所有しているユーザーまたは Organization アカウントの名前に。{% ifversion ghes %}
  - `REGISTRY-URL` を、インスタンスの Rubygems レジストリの URL に。 インスタンスで Subdomain Isolation が有効になっている場合は、`rubygems.HOSTNAME` を使用します。 インスタンスで Subdomain Isolation が無効になっている場合は、`HOSTNAME/_registry/rubygems` を使用します。 いずれの場合でも、*HOSTNAME* を {% data variables.product.prodname_ghe_server %} インスタンスのホスト名に置き換えてください。
{% elsif ghae %}
  - `REGISTRY-URL` を、インスタンスの Rubygems レジストリの URL である `rubygems.HOSTNAME` に。 *HOSTNAME* を {% data variables.product.product_location %} のホスト名に置き換えてください。
{% endif %}

*~/.gemrc* ファイルがない場合は、この例を使用して新しい *~/.gemrc* ファイルを作成します。

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

Bundler で認証するには、個人用アクセス トークンを使用するように Bundler を構成します。*USERNAME* を {% data variables.product.prodname_dotcom %} ユーザー名に、*TOKEN* を個人用アクセス トークンに置き換えてください。*OWNER* は、プロジェクトを含むリポジトリを所有しているユーザーまたは Organization アカウントの名前に置き換えます。{% ifversion ghes %}`REGISTRY-URL` は、インスタンスの RubyGems レジストリの URL に置き換えます。 インスタンスで Subdomain Isolation が有効になっている場合は、`rubygems.HOSTNAME` を使用します。 インスタンスで Subdomain Isolation が無効になっている場合は、`HOSTNAME/_registry/rubygems` を使用します。 いずれの場合でも、*HOSTNAME* を {% data variables.product.prodname_ghe_server %} インスタンスのホスト名に置き換えてください。{% elsif ghae %}`REGISTRY-URL` は、インスタンスの Rubygems レジストリの URL である `rubygems.HOSTNAME` に置き換えます。 *HOSTNAME* を {% data variables.product.product_location %} のホスト名に置き換えてください。{% endif %}

```shell
$ bundle config https://{% ifversion fpt or ghec %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/<em>OWNER USERNAME:TOKEN</em>
```

## パッケージの公開

{% data reusables.package_registry.default-name %} たとえば、`octo-gem` を `octo-org` という Organization に公開するときは、{% data variables.product.prodname_registry %} によって gem が `octo-org/octo-gem` リポジトリに公開されます。 gem の作成の詳細については、RubyGems ドキュメントの「[gem の作成](http://guides.rubygems.org/make-your-own-gem/)」を参照してください。

{% data reusables.package_registry.viewing-packages %}

{% data reusables.package_registry.authenticate-step %}
2. *gemspec* からパッケージをビルドして、*gem* パッケージを作成します。
  ```shell
  gem build OCTO-GEM.gemspec
  ```
3. パッケージを {% data variables.product.prodname_registry %} に公開します。`OWNER` を、プロジェクトを含むリポジトリを所有しているユーザーまたは Organization アカウントの名前に、`OCTO-GEM` を gem パッケージの名前に置き換えてください。{% ifversion ghes %}`REGISTRY-URL` を、インスタンスの Rubygems レジストリの URL に置き換えます。 インスタンスで Subdomain Isolation が有効になっている場合は、`rubygems.HOSTNAME` を使用します。 インスタンスで Subdomain Isolation が無効になっている場合は、`HOSTNAME/_registry/rubygems` を使用します。 いずれの場合でも、*HOSTNAME* を {% data variables.product.prodname_ghe_server %} インスタンスのホスト名に置き換えてください。{% elsif ghae %}`REGISTRY-URL` は、インスタンスの Rubygems レジストリの URL である `rubygems.HOSTNAME` に置き換えます。 *HOSTNAME* を {% data variables.product.product_location %} のホスト名に置き換えてください。{% endif %}

  ```shell
  $ gem push --key github \
  --host https://{% ifversion fpt or ghec %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/<em>OWNER</em> \
  <em>OCTO-GEM-0.0.1</em>.gem
  ```

## 同じリポジトリへの複数パッケージの公開

複数の gem を同じリポジトリに公開するには、{% data variables.product.prodname_dotcom %} リポジトリの URL を `gem.metadata` の `github_repo` フィールドに含めることができます。 このフィールドを含めた場合、{% data variables.product.prodname_dotcom %} でのリポジトリの照合は、gem 名を使用するのではなく、この値に基づいて行われます。{% ifversion ghes or ghae %}*HOSTNAME* を、{% data variables.product.product_location %} のホスト名に置き換えます。{% endif %}

```ruby
gem.metadata = { "github_repo" => "ssh://{% ifversion fpt or ghec %}github.com{% else %}HOSTNAME{% endif %}/OWNER/REPOSITORY" }
```

## パッケージのインストール

{% data variables.product.prodname_registry %} の gem は、*rubygems.org* の gem を使うのと同じように使用できます。{% data variables.product.prodname_dotcom %} ユーザーまたは Organization をソースとして *~/.gemrc* ファイルに追加するか、Bundler を使用して *Gemfile* を編集することで、{% data variables.product.prodname_registry %} に対して認証を行う必要があります。

{% data reusables.package_registry.authenticate-step %}
1. Bundler については、{% data variables.product.prodname_dotcom %} ユーザーまたは Organization をソースとして *Gemfile* に追加して、この新しいソースから gem をフェッチするようにします。 たとえば、指定したパッケージに対してのみ {% data variables.product.prodname_registry %} を使用する新しい `source` ブロックを *Gemfile* に追加できます。*GEM NAME* を、{% data variables.product.prodname_registry %} からインストールするパッケージに、*OWNER* を、インストールする gem を含むリポジトリを所有しているユーザーまたは Organization に置き換えます。{% ifversion ghes %}`REGISTRY-URL` を、インスタンスの Rubygems レジストリの URL に置き換えます。 インスタンスで Subdomain Isolation が有効になっている場合は、`rubygems.HOSTNAME` を使用します。 インスタンスで Subdomain Isolation が無効になっている場合は、`HOSTNAME/_registry/rubygems` を使用します。 いずれの場合でも、*HOSTNAME* を {% data variables.product.prodname_ghe_server %} インスタンスのホスト名に置き換えてください。{% elsif ghae %}`REGISTRY-URL` は、インスタンスの Rubygems レジストリの URL である `rubygems.HOSTNAME` に置き換えます。 *HOSTNAME* を {% data variables.product.product_location %} のホスト名に置き換えてください。{% endif %}

  ```ruby
  source "https://rubygems.org"

  gem "rails"

  source "https://{% ifversion fpt or ghec %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/OWNER" do
    gem "GEM NAME"
  end
  ```

3. 1\.7.0 より前の Bundler バージョンの場合は、新しいグローバルな `source` を追加する必要があります。 Bundler の使用方法の詳細については、[bundler.io のドキュメント](https://bundler.io/gemfile.html)を参照してください。

  ```ruby
  source "https://{% ifversion fpt or ghec %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/OWNER"
  source "https://rubygems.org"

  gem "rails"
  gem "GEM NAME"
  ```

4. パッケージをインストールしてください。
  ```shell
  $ gem install octo-gem --version "0.1.1"
  ```

## 参考資料

- 「[パッケージを削除および復元する](/packages/learn-github-packages/deleting-and-restoring-a-package)」

