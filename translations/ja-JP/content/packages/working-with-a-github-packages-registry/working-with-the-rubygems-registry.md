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
ms.openlocfilehash: 514a50358bf8171b3ea8d13b01375306e784e63f
ms.sourcegitcommit: cea091b5171ad05f18b3d35fa063cfea8aea12c4
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/17/2022
ms.locfileid: '148172146'
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

## {% data variables.product.prodname_registry %} への認証を行う

{% data reusables.package_registry.authenticate-packages %}

{% data reusables.package_registry.authenticate-packages-github-token %}

### {% data variables.product.pat_generic %} で認証を行う

{% data reusables.package_registry.required-scopes %}

gem を公開してインストールするには、{% data variables.product.pat_generic %}を使って {% data variables.product.prodname_registry %} に対する認証を行うように、RubyGems または Bundler を構成できます。

新しい gem を公開するには、 *~/.gem/credentials* ファイルを編集して{% data variables.product.pat_v1 %}を含めることによって、RubyGems で {% data variables.product.prodname_registry %} に対して認証を行う必要があります。 このファイルが存在しない場合は、新しい *~/.gem/credentials* ファイルを作成します。

たとえば、以下を含むように *~/.gem/credentials* を作成または編集し、*TOKEN* を{% data variables.product.pat_generic %}に置き換えます。

```shell
---
:github: Bearer TOKEN
```

gem をインストールするには、`https://USERNAME:TOKEN@{% ifversion fpt or ghec %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/OWNER/` を含むように gem ソースを更新することによって、{% data variables.product.prodname_registry %} に対する認証を行う必要があります。 以下のように置き換えてください。
  - `USERNAME` を {% data variables.product.prodname_dotcom %} に。
  - `TOKEN` を{% data variables.product.pat_v1 %} に。
  - `OWNER` を、プロジェクトを含むリポジトリを所有しているユーザーまたは Organization アカウントの名前に。{% ifversion ghes %}
  - `REGISTRY-URL` を、インスタンスの Rubygems レジストリの URL に。 インスタンスで Subdomain Isolation が有効になっている場合は、`rubygems.HOSTNAME` を使用します。 インスタンスで Subdomain Isolation が無効になっている場合は、`HOSTNAME/_registry/rubygems` を使用します。 いずれの場合でも、*HOSTNAME* を {% data variables.product.prodname_ghe_server %} インスタンスのホスト名に置き換えてください。
{% elsif ghae %}
  - `REGISTRY-URL` を、インスタンスの Rubygems レジストリの URL である `rubygems.HOSTNAME` に。 *HOSTNAME* は、{% data variables.location.product_location %} のホスト名に置き換えます。
{% endif %}

パッケージをグローバルに使用できるようにする場合は、次のコマンドを実行して、レジストリをソースとして追加できます。
```shell
gem sources --add https://USERNAME:TOKEN@{% ifversion fpt or ghec %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/OWNER/
```

Bundler で認証を行うには、{% data variables.product.pat_v1 %} を使うように Bundler を構成します。*USERNAME* は {% data variables.product.prodname_dotcom %} のユーザー名、*TOKEN* は{% data variables.product.pat_generic %}、*OWNER* はプロジェクトを含むリポジトリを所有しているユーザーまたは組織アカウントの名前に置き換えます。{% ifversion ghes %}`REGISTRY-URL` は、インスタンスの RubyGems レジストリの URL に置き換えます。 インスタンスで Subdomain Isolation が有効になっている場合は、`rubygems.HOSTNAME` を使用します。 インスタンスで Subdomain Isolation が無効になっている場合は、`HOSTNAME/_registry/rubygems` を使用します。 いずれの場合でも、*HOSTNAME* を {% data variables.product.prodname_ghe_server %} インスタンスのホスト名に置き換えてください。{% elsif ghae %}`REGISTRY-URL` は、インスタンスの Rubygems レジストリの URL である `rubygems.HOSTNAME` に置き換えます。 *HOSTNAME* は、{% data variables.location.product_location %} のホスト名に置き換えます。{% endif %}

```shell
$ bundle config https://{% ifversion fpt or ghec %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/OWNER USERNAME:TOKEN
```

## パッケージの公開

{% data reusables.package_registry.default-name %} たとえば、`<GEM NAME>` を `octo-org` という Organization に公開するときは、{% data variables.product.prodname_registry %} によって gem が `octo-org/<GEM NAME>` リポジトリに公開されます。 gem の作成の詳細については、RubyGems ドキュメントの「[gem の作成](http://guides.rubygems.org/make-your-own-gem/)」を参照してください。

{% data reusables.package_registry.viewing-packages %}

{% data reusables.package_registry.authenticate-step %}
2. *gemspec* からパッケージをビルドして、*gem* パッケージを作成します。
  ```
  gem build <GEM NAME>.gemspec
  ```
3. パッケージを {% data variables.product.prodname_registry %} に公開します。`OWNER` を、プロジェクトを含むリポジトリを所有しているユーザーまたは Organization アカウントの名前に、`<GEM NAME>` を gem パッケージの名前に置き換えてください。{% ifversion ghes %}`REGISTRY-URL` を、インスタンスの Rubygems レジストリの URL に置き換えます。 インスタンスで Subdomain Isolation が有効になっている場合は、`rubygems.HOSTNAME` を使用します。 インスタンスで Subdomain Isolation が無効になっている場合は、`HOSTNAME/_registry/rubygems` を使用します。 いずれの場合でも、*HOSTNAME* を {% data variables.product.prodname_ghe_server %} インスタンスのホスト名に置き換えてください。{% elsif ghae %}`REGISTRY-URL` は、インスタンスの Rubygems レジストリの URL である `rubygems.HOSTNAME` に置き換えます。 *HOSTNAME* は、{% data variables.location.product_location %} のホスト名に置き換えます。{% endif %}

  ```
  $ gem push --key github \
  --host https://{% ifversion fpt or ghec %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/OWNER \
  <GEM NAME>-0.0.1.gem
  ```

## 同じリポジトリへの複数パッケージの公開

複数の gem を同じリポジトリに公開するには、{% data variables.product.prodname_dotcom %} リポジトリの URL を `gem.metadata` の `github_repo` フィールドに含めることができます。 このフィールドを含めた場合、{% data variables.product.prodname_dotcom %} でのリポジトリの照合は、gem 名を使うのではなく、この値に基づいて行われます。{% ifversion ghes or ghae %}*HOSTNAME* を、{% data variables.location.product_location %} のホスト名に置き換えます。{% endif %}

```ruby
gem.metadata = { "github_repo" => "ssh://{% ifversion fpt or ghec %}github.com{% else %}HOSTNAME{% endif %}/OWNER/REPOSITORY" }
```

## パッケージのインストール

{% data variables.product.prodname_registry %} の gem は、*rubygems.org* の gem を使うのと同じように使用できます。{% data variables.product.prodname_dotcom %} ユーザーまたは Organization をソースとして *~/.gemrc* ファイルに追加するか、Bundler を使用して *Gemfile* を編集することで、{% data variables.product.prodname_registry %} に対して認証を行う必要があります。

{% data reusables.package_registry.authenticate-step %}
1. Bundler については、{% data variables.product.prodname_dotcom %} ユーザーまたは Organization をソースとして *Gemfile* に追加して、この新しいソースから gem をフェッチするようにします。 たとえば、指定したパッケージに対してのみ {% data variables.product.prodname_registry %} を使用する新しい `source` ブロックを *Gemfile* に追加できます。*GEM NAME* を、{% data variables.product.prodname_registry %} からインストールするパッケージに、*OWNER* を、インストールする gem を含むリポジトリを所有しているユーザーまたは Organization に置き換えます。{% ifversion ghes %}`REGISTRY-URL` を、インスタンスの Rubygems レジストリの URL に置き換えます。 インスタンスで Subdomain Isolation が有効になっている場合は、`rubygems.HOSTNAME` を使用します。 インスタンスで Subdomain Isolation が無効になっている場合は、`HOSTNAME/_registry/rubygems` を使用します。 いずれの場合でも、*HOSTNAME* を {% data variables.product.prodname_ghe_server %} インスタンスのホスト名に置き換えてください。{% elsif ghae %}`REGISTRY-URL` は、インスタンスの Rubygems レジストリの URL である `rubygems.HOSTNAME` に置き換えます。 *HOSTNAME* は、{% data variables.location.product_location %} のホスト名に置き換えます。{% endif %}

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
  ```
  $ gem install <GEM NAME> --version "0.1.1"
  ```

## 参考資料

- 「[パッケージを削除および復元する](/packages/learn-github-packages/deleting-and-restoring-a-package)」

