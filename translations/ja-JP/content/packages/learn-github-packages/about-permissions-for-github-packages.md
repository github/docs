---
title: GitHub Packagesの権限について
intro: パッケージの権限の管理方法を学んでください。
product: '{% data reusables.gated-features.packages %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: 権限について
---

{% ifversion fpt or ghec %}
パッケージの権限は、リポジトリスコープかユーザ/Organizationスコープです。
{% endif %}

## リポジトリスコープのパッケージの権限

リポジトリスコープのパッケージは、パッケージを所有するリポジトリの権限と可視性を継承します。 リポジトリをスコープとするパッケージは、リポジトリのメインページにアクセスし、ページ右にある**パッケージ**リンクをクリックすれば見つかります。 {% ifversion fpt or ghec %}詳しい情報については「[リポジトリのパッケージへの接続](/packages/learn-github-packages/connecting-a-repository-to-a-package)」を参照してください。{% endif %}

以下の{% data variables.product.prodname_registry %}レジストリは、リポジトリスコープの権限を使います。

  {% ifversion not fpt or ghec %}-Dockerレジストリ（`docker.pkg.github.com`）{% endif %}
  - npmレジストリ
  - RubyGemsレジストリ
  - Apache Mavenレジストリ
  - NuGetレジストリ

{% ifversion fpt or ghec %}
## ユーザ/Organizationスコープのパッケージの詳細な権限

詳細な権限を持つパッケージは、個人ユーザもしくはOrganizationアカウントをスコープとします。 パッケージのアクセス制御と可視性は、パッケージに接続された（あるいはリンクされた）リポジトリは別個に変更できます。

現在の処、{% data variables.product.prodname_container_registry %}だけがコンテナイメージパッケージに関する詳細な権限を提供しています。

## コンテナイメージの可視性とアクセス権限

{% data reusables.package_registry.visibility-and-access-permissions %}

詳しい情報については「[パッケージのアクセス制御と可視性](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility)」を参照してください。

{% endif %}

## パッケージの管理

パッケージレジストリでホストされているパッケージを使用もしくは管理するためには、適切なスコープを持つトークンを使わなければならず、個人アカウントが適切な権限を持っていなければなりません。

例:
-  リポジトリからパッケージをダウンロードしてインストールするには、トークンは`read:packages`スコープを持っていなければならず、ユーザアカウントは読み取り権限を持っていなければなりません。
- |{% ifversion fpt or ghes > 3.1 or ghec %}{% data variables.product.product_name %}上のパッケージを削除するには、トークンが少なくとも`delete:packages`と`read:packages`のスコープを持っている必要があります。 リポジトリをスコープとするパッケージには、 `repo`スコープも必要です。 詳しい情報については「[パッケージの削除と復元](/packages/learn-github-packages/deleting-and-restoring-a-package)」を参照してください。{% elsif ghae %}{% data variables.product.product_name %}上のパッケージの指定されたバージョンを削除するには、トークンが`delete:packages`及び`repo`スコープを持っていなければなりません。 詳しい情報については、「[パッケージの削除とリストア](/packages/learn-github-packages/deleting-and-restoring-a-package)」を参照してください。{% endif %}
| スコープ                                                                                                                                                                                          | 説明                                                                   | 必要な権限        |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- | ------------ |
| `read:packages`                                                                                                                                                                               | {% data variables.product.prodname_registry %}からのパッケージのダウンロードとインストール | 読み取り         |
| `write:packages`                                                                                                                                                                              | {% data variables.product.prodname_registry %}へのパッケージのアップロードと公開      | 書き込み         |
| `delete:packages`                                                                                                                                                                             |                                                                      |              |
| {% ifversion fpt or ghes or ghec %} {% data variables.product.prodname_registry %}からのパッケージの削除{% elsif ghae %}{% data variables.product.prodname_registry %}からの指定したバージョンのパッケージの削除{% endif %} |                                                                      |              |
| 管理                                                                                                                                                                                            |                                                                      |              |
| `repo`                                                                                                                                                                                        | パッケージのアップロードと削除 (`write:packages`または`delete:packages`と併せて)           | 書き込みもしくは読み取り |

{% data variables.product.prodname_actions %}ワークフローを作成する際には、`GITHUB_TOKEN`を使って{% data variables.product.prodname_registry %}にパッケージを公開してインストールでき、個人アクセストークンを保存して管理する必要はありません。

詳しい情報については以下を参照してください:{% ifversion fpt or ghec %}
- 「[パッケージのアクセス制御と可視性](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility)」{% endif %}
- 「[{% data variables.product.prodname_actions %}でのパッケージの公開とインストール](/packages/managing-github-packages-using-github-actions-workflows/publishing-and-installing-a-package-with-github-actions)」
- [個人アクセストークンを作成する](/github/authenticating-to-github/creating-a-personal-access-token/)
- GDPR違反、APIキー、個人を識別する情報といったセンシティブなデータを含むパッケージを公開した時

## {% data variables.product.prodname_actions %}ワークフローでのパッケージへのアクセスのメンテナンス

ワークフローがパッケージへのアクセスを確実に維持するためには、確実にワークフローで正しいアクセストークンを使用し、パッケージへの{% data variables.product.prodname_actions %}アクセスを有効化してください。

{% data variables.product.prodname_actions %}に関する概念的な背景や、ワークフローでのパッケージの使用例については、「[GitHub Actionsワークフローを使用したGitHub Packagesの管理](/packages/managing-github-packages-using-github-actions-workflows)」を参照してください。

### アクセストークン

- ワークフローリポジトリに関連するパッケージを公開するには、`GITHUB_TOKEN`を使用してください。
- `GITHUB_TOKEN`がアクセスできない他のプライベートリポジトリに関連するパッケージをインストールするには、個人アクセストークンを使用してください。

{% data variables.product.prodname_actions %}ワークフローで使われる`GITHUB_TOKEN`に関する詳しい情報については「[ワークフローでの認証](/actions/reference/authentication-in-a-workflow#using-the-github_token-in-a-workflow)」を参照してください。

{% ifversion fpt or ghec %}
### コンテナイメージに対する{% data variables.product.prodname_actions %}アクセス

ワークフローがコンテナイメージに確実にアクセスできるようにするには、ワークフローが実行されるリポジトリへの{% data variables.product.prodname_actions %}アクセスを有効化しなければなりません。 この設定は、パッケージの設定ページにあります。 詳しい情報については「[パッケージへのワークフローアクセスの保証](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-workflow-access-to-your-package)」を参照してください。

{% endif %}
