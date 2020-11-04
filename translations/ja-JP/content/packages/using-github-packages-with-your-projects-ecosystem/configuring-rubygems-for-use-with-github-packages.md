---
title: GitHub Packagesで利用するために RubyGems を設定する
intro: '{% data variables.product.prodname_registry %} にパッケージを公開し、{% data variables.product.prodname_registry %} に保存されたパッケージを依存関係としてBundlerを使うRubyのプロジェクトで利用するよう、RubyGemsを設定できます。'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /articles/configuring-rubygems-for-use-with-github-package-registry
  - /github/managing-packages-with-github-package-registry/configuring-rubygems-for-use-with-github-package-registry
  - /github/managing-packages-with-github-packages/configuring-rubygems-for-use-with-github-packages
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.package_registry.packages-ghes-release-stage %}

{% data reusables.package_registry.default-name %} たとえば、{% data variables.product.prodname_dotcom %}は`OWNER/test`というリポジトリ内の`com.example:test`という名前のパッケージを公開します。

### 必要な環境

- rubygems 2.4.1 以上. rubygemsのバージョンは以下のようにすればわかります。

  ```shell
  $ gem --version
  ```

  - Bundler 1.6.4 以上. Bundlerのバージョンは以下のようにすれば分かります。
  ```shell
  $ bundle --version
  Bundler version 1.13.7
  ```

  - 複数の認証情報を扱うには、keycutter をインストールしてください. keycutterは以下のようにすればインストールできます。
  ```shell
  $ gem install keycutter
  ```

### {% data variables.product.prodname_registry %} への認証を行う

{% data reusables.package_registry.authenticate-packages %}

#### 個人アクセストークンでの認証

{% data reusables.package_registry.required-scopes %}

gemの公開なら*~/.gem/credentials*ファイルを編集することで、単一のgemのインストールなら*~/.gemrc*ファイルを編集することで、Bundlerを使って1つ以上のgemを追跡してインストールするなら*~/.gemrc*ファイルを編集することで、RubyGemsで{% data variables.product.prodname_registry %}に認証を受けることができます。

新しいgemsを公開するには、*~/.gem/credentials*ファイルを編集して個人アクセストークンを含めることによって、RubyGemsで{% data variables.product.prodname_registry %}に認証を受けなければなりません。  *~/.gem/credentials*ファイルが存在しない場合、新しく作成してください。

たとえば、*~/.gem/credentials*を作成もしくは編集して、以下を含めてください。*TOKEN*は個人アクセストークンで置き換えてください。

```shell
gem.metadata = { "github_repo" => "ssh://github.com/OWNER/REPOSITORY" }
```

gemをインストールするには、プロジェクトの*~/.gemrc*ファイルを編集し、`https://USERNAME:TOKEN@{% if currentVersion == "free-pro-team@latest" %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/OWNER/`を含めることによって{% data variables.product.prodname_registry %}の認証を受けなければなりません。 以下のように置き換えてください。
  - `USERNAME`を{% data variables.product.prodname_dotcom %}のユーザ名で。
  - `TOKEN`を個人アクセストークンで。
  - `OWNER` with the name of the user or organization account that owns the repository containing your project.{% if enterpriseServerVersions contains currentVersion %}
  - `REGISTRY-URL` をインスタンスの Rubygems レジストリの URL で。 インスタンスで Subdomain Isolation が有効になっている場合は、`rubygems.HOSTNAME` を使用します。 インスタンスで Subdomain Isolation が無効になっている場合は、`HOSTNAME/_registry/rubygems` を使用します。 いずれの場合でも、 *HOSTNAME* を {% data variables.product.prodname_ghe_server %} インスタンスのホスト名に置き換えてください。
{% endif %}

*~/.gemrc*ファイルがないなら、以下の例を使って新しい*~/.gemrc*ファイルを作成してください。

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

To authenticate with Bundler, configure Bundler to use your personal access token, replacing *USERNAME* with your {% data variables.product.prodname_dotcom %} username, *TOKEN* with your personal access token, and *OWNER* with the name of the user or organization account that owns the repository containing your project.{% if enterpriseServerVersions contains currentVersion %} Replace `REGISTRY-URL` with the URL for your instance's Rubygems registry. インスタンスで Subdomain Isolation が有効になっている場合は、`rubygems.HOSTNAME` を使用します。 インスタンスで Subdomain Isolation が無効になっている場合は、`HOSTNAME/_registry/rubygems` を使用します。 いずれの場合でも、 *HOSTNAME* を {% data variables.product.prodname_ghe_server %} インスタンスのホスト名に置き換えてください。{% endif %}

{% data reusables.package_registry.lowercase-name-field %}

```shell
$ bundle config https://{% if currentVersion == "free-pro-team@latest" %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/<em>OWNER USERNAME:TOKEN</em>
```

#### `GITHUB_TOKEN`での認証

{% data reusables.package_registry.package-registry-with-github-tokens %}

### パッケージを公開する

{% data reusables.package_registry.default-name %} たとえば、`octo-gem`を`octo-org`というOrganizationに公開するなら、{% data variables.product.prodname_registry %}はそのgemを`octo-org/octo-gem`リポジトリに公開します。 gem の作成に関する詳しい情報については、RubyGems ドキュメンテーションの「[gem の作成](http://guides.rubygems.org/make-your-own-gem/)」を参照してください。

{% data reusables.package_registry.viewing-packages %}

{% data reusables.package_registry.authenticate-step %}
2. *gemspec*からパッケージをビルドして、*.gem*パッケージを作成してください。
  ```shell
  gem build OCTO-GEM.gemspec
  ```
3. Publish a package to {% data variables.product.prodname_registry %}, replacing `OWNER` with the name of the user or organization account that owns the repository containing your project and `OCTO-GEM` with the name of your gem package.{% if enterpriseServerVersions contains currentVersion %} Replace `REGISTRY-URL` with the URL for your instance's Rubygems registry. インスタンスで Subdomain Isolation が有効になっている場合は、`rubygems.HOSTNAME` を使用します。 インスタンスで Subdomain Isolation が無効になっている場合は、`HOSTNAME/_registry/rubygems` を使用します。 いずれの場合でも、 *HOSTNAME* を {% data variables.product.prodname_ghe_server %} インスタンスのホスト名に置き換えてください。{% endif %}

  ```shell
  $ gem push --key github \
  --host https://{% if currentVersion == "free-pro-team@latest" %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/<em>OWNER</em> \
  <em>OCTO-GEM-0.0.1</em>.gem
  ```

### 同じリポジトリへの複数パッケージの公開

複数のgemを同じリポジトリに公開したい場合は、{% data variables.product.prodname_dotcom %}リポジトリの`gem.metadata`にある`github_repo`フィールドに、URL を記述できます。 If you include this field, {% data variables.product.prodname_dotcom %} matches the repository based on this value, instead of using the gem name.{% if enterpriseServerVersions contains currentVersion %} Replace *HOSTNAME* with the host name of your {% data variables.product.prodname_ghe_server %} instance.{% endif %}

```
gem.metadata = { "github_repo" => "ssh://{% if currentVersion == "free-pro-team@latest" %}github.com{% else %}HOSTNAME{% endif %}/OWNER/REPOSITORY" }
```

### パッケージをインストールする

{% data variables.product.prodname_registry %}からのgemsは、*rubygems.org*からのgemsを使うのと同じように利用できます。 {% data variables.product.prodname_dotcom %}ユーザあるいはOrganizationをソースとして*~/.gemrc*ファイルに追加するか、Bundlerを使い、*Gemfile*を編集することで、{% data variables.product.prodname_registry %}の認証を受けなければなりません。

{% data reusables.package_registry.authenticate-step %}
2. Bundlerについては、{% data variables.product.prodname_dotcom %}ユーザもしくはOrganizationをソースとして*Gemfile*に追加して、この新しいソースからgemsをフェッチするようにしてください。 For example, you can add a new `source` block to your *Gemfile* that uses {% data variables.product.prodname_registry %} only for the packages you specify, replacing *GEM NAME* with the package you want to install from {% data variables.product.prodname_registry %} and *OWNER* with the user or organization that owns the repository containing the gem you want to install.{% if enterpriseServerVersions contains currentVersion %} Replace `REGISTRY-URL` with the URL for your instance's Rubygems registry. インスタンスで Subdomain Isolation が有効になっている場合は、`rubygems.HOSTNAME` を使用します。 インスタンスで Subdomain Isolation が無効になっている場合は、`HOSTNAME/_registry/rubygems` を使用します。 いずれの場合でも、 *HOSTNAME* を {% data variables.product.prodname_ghe_server %} インスタンスのホスト名に置き換えてください。{% endif %}

  ```
  source "https://rubygems.org"

  gem "rails"

  source "https://{% if currentVersion == "free-pro-team@latest" %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/OWNER" do
    gem "GEM NAME"
  end
  ```

3. 1.7.0以前のバージョンのBundlerの場合、新しいグローバルな`source`を追加する必要があります。 Bundlerの利用に関する詳しい情報については[bundler.ioのドキュメンテーション](http://bundler.io/v1.5/gemfile.html)を参照してください。

  ```
  source "https://{% if currentVersion == "free-pro-team@latest" %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/OWNER"
  source "https://rubygems.org"

  gem "rails"
  gem "GEM NAME"
  ```

4. パッケージをインストールしてください。
  ```shell
  $ gem install octo-gem --version "0.1.1"
  ```

### 参考リンク

- [パッケージの削除](/packages/publishing-and-managing-packages/deleting-a-package/)
