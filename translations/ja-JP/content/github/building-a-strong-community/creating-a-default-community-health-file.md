---
title: デフォルトのコミュニティ健全性ファイルを作成する
intro: 'CONTRIBUTING や CODE_OF_CONDUCT など、デフォルトのコミュニティ健全性ファイルを作成できます。 デフォルトのファイルは、そのような独自ファイルを持たないあらゆるパブリックリポジトリに使用されます。'
redirect_from:
  - /articles/creating-a-default-community-health-file-for-your-organization
  - /github/building-a-strong-community/creating-a-default-community-health-file-for-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### デフォルトのコミュニティ健全性ファイルについて

You can add default community health files to the root of a public repository called `.github` that is owned by an organization{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %} or user account{% endif %}.

{% data variables.product.product_name %}は、次のいずれかの場所にそのタイプの独自のファイルがないアカウントのパブリックリポジトリについては、デフォルトファイルを使用および表示します。
- リポジトリのルート
- `.github` フォルダ
- `docs` フォルダ

たとえば、独自の CONTRIBUTING ファイルを持たないパブリックリポジトリに Issue やプルリクエストを作成する人は誰でも、デフォルトの CONTRIBUTING ファイルへのリンクが見られます。 If a repository has any files in its own `.github/ISSUE_TEMPLATE` folder{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}, including issue templates or a *config.yml* file,{% endif %} none of the contents of the default `.github/ISSUE_TEMPLATE` folder will be used.

デフォルトのファイルは `.github` リポジトリにのみ格納されるものであって、クローン、パッケージ、リポジトリ個別のダウンロードには含まれません。

### サポートされているファイルの種類

You can create defaults in your organization{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %} or user account{% endif %} for the following community health files:

| コミュニティ健全性ファイル                                                                                                                                                   | 説明                                                                                                                                                                                                                                                    |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |{% if currentVersion == "free-pro-team@latest" %}
| *CODE_OF_CONDUCT.md*                                                                                                                                          | CODE_OF_CONDUCT ファイルは、コミュニティへの関わり方についての基準を定義します。 詳しい情報については、「[プロジェクトへの行動規範の追加](/articles/adding-a-code-of-conduct-to-your-project/)」を参照してください。{% endif %}
| *CONTRIBUTING.md*                                                                                                                                               | CONTRIBUTING ファイルは、人々がプロジェクトにどのように貢献すべきかを伝えます。 For more information, see "[Setting guidelines for repository contributors](/articles/setting-guidelines-for-repository-contributors/)."{% if currentVersion == "free-pro-team@latest" %}
| *FUNDING.yml*                                                                                                                                                   | FUNDING ファイルは、あなたのオープンソースプロジェクトに対する資金提供のオプションについての認知度を高める目的で、リポジトリにスポンサーボタンを表示するためのものです。 詳細は「[リポジトリにスポンサーボタンを表示する](/articles/displaying-a-sponsor-button-in-your-repository)」を参照してください。{% endif %}
| Issue and pull request templates{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %} and *config.yml*{% endif %} | Issue およびプルリクエストのテンプレートは、リポジトリで Issue およびプルリクエストを開くときに含める情報をカスタマイズして標準化します。 For more information, see "[About issue and pull request templates](/articles/about-issue-and-pull-request-templates/)."{% if currentVersion == "free-pro-team@latest" %}
| *SECURITY.md*                                                                                                                                                   | SECURITY ファイルには、プロジェクトのセキュリティ脆弱性について責任を持って報告する方法が記載されています。 詳しい情報については「[リポジトリにセキュリティポリシーを追加する](/articles/adding-a-security-policy-to-your-repository)」を参照してください。{% endif %}
| *SUPPORT.md*                                                                                                                                                    | SUPPORT ファイルは、プロジェクトについて支援を受ける方法を伝えるためのものです。 詳しい情報については"[プロジェクトへのサポートリソースの追加](/articles/adding-support-resources-to-your-project/)"を参照してください。                                                                                                         |

デフォルトのライセンスファイルを作成することはできません。 ライセンスファイルは、プロジェクトのクローン時、パッケージ時、またはダウンロード時に含められるよう、個々のリポジトリに追加する必要があります。

### デフォルトのファイル用にリポジトリを作成

{% data reusables.repositories.create_new %}
2. Use the **Owner** drop-down menu, and select the organization{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %} or user account{% endif %} you want to create default files for. ![[Owner] ドロップダウンメニュー](/assets/images/help/repository/create-repository-owner.png)
3. リポジトリの名前として **.github** と入力し、任意で説明を入力します。 ![リポジトリ作成フィールド](/assets/images/help/repository/default-file-repository-name.png)
4. Make sure the repository status is set to **Public** (a repository for default files cannot be private). ![プライベートまたはパブリックのステータスを選択するラジオボタン](/assets/images/help/repository/create-repository-public-private.png)
{% data reusables.repositories.initialize-with-readme %}
{% data reusables.repositories.create-repo %}
7. リポジトリの中に、サポートされているコミュニティ健全性ファイルの 1 つを作成します。 Issue templates{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %} and their configuration file{% endif %} must be in a folder called `.github/ISSUE_TEMPLATE`. その他のサポートされているファイルは、リポジトリのルートにある必要があります。 詳細は「[新しいファイルを作成する](/articles/creating-new-files/)」を参照してください。
