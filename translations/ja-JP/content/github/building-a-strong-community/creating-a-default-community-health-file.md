---
title: デフォルトのコミュニティ健全性ファイルを作成する
intro: CONTRIBUTING や CODE_OF_CONDUCT など、デフォルトのコミュニティ健全性ファイルを作成できます。 デフォルトのファイルは、そのような独自ファイルを持たないあらゆるパブリックリポジトリに使用されます。
redirect_from:
  - /articles/creating-a-default-community-health-file-for-your-organization
  - /github/building-a-strong-community/creating-a-default-community-health-file-for-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### デフォルトのコミュニティ健全性ファイルについて

Organization{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %} またはユーザアカウント{% endif %}が所有する `.github` というパブリックリポジトリのルートにデフォルトのコミュニティ健全性ファイルを追加できます。

{% data variables.product.product_name %}は、次のいずれかの場所にそのタイプの独自のファイルがないアカウントのパブリックリポジトリについては、デフォルトファイルを使用および表示します。
- リポジトリのルート
- `.github` フォルダ
- `docs` フォルダ

たとえば、独自の CONTRIBUTING ファイルを持たないパブリックリポジトリに Issue やプルリクエストを作成する人は誰でも、デフォルトの CONTRIBUTING ファイルへのリンクが見られます。 リポジトリの独自の `.github/ISSUE_TEMPLATE` フォルダ内に
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}、Issue テンプレートや *config.yml* ファイルなどの{% endif %}ファイルがある場合、デフォルトの`.github/ISSUE_TEMPLATE`フォルダにあるコンテンツは使用されません。

デフォルトのファイルは `.github` リポジトリにのみ格納されるものであって、クローン、パッケージ、リポジトリ個別のダウンロードには含まれません。

### サポートされているファイルの種類

Organization {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}またはユーザアカウント{% endif %}に対して、次のコミュニティ健全性ファイルにデフォルトを作成できます。

| コミュニティ健全性ファイル                                                                                                   | 説明                                                                                                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |{% if currentVersion == "free-pro-team@latest" %}
| *CODE_OF_CONDUCT.md*                                                                                          | CODE_OF_CONDUCT ファイルは、コミュニティへの関わり方についての基準を定義します。 詳しい情報については、「[プロジェクトへの行動規範の追加](/articles/adding-a-code-of-conduct-to-your-project/)」を参照してください。{% endif %}
| *CONTRIBUTING.md*                                                                                               | CONTRIBUTING ファイルは、人々がプロジェクトにどのように貢献すべきかを伝えます。 詳しい情報については、「[リポジトリコントリビューターのためのガイドラインを定める](/articles/setting-guidelines-for-repository-contributors/)」を参照してください。{% if currentVersion == "free-pro-team@latest" %}
| *FUNDING.yml*                                                                                                   | FUNDING ファイルは、あなたのオープンソースプロジェクトに対する資金提供のオプションについての認知度を高める目的で、リポジトリにスポンサーボタンを表示するためのものです。 詳細は「[リポジトリにスポンサーボタンを表示する](/articles/displaying-a-sponsor-button-in-your-repository)」を参照してください。{% endif %}
| Issue およびプルリクエストテンプレート{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}および*config.yml*{% endif %} | Issue およびプルリクエストのテンプレートは、リポジトリで Issue およびプルリクエストを開くときに含める情報をカスタマイズして標準化します。 詳しい情報については、「[Issue およびプルリクエストのテンプレートについて](/articles/about-issue-and-pull-request-templates/)」を参照してください。{% if currentVersion == "free-pro-team@latest" %}
| *SECURITY.md*                                                                                                   | SECURITY ファイルには、プロジェクトのセキュリティ脆弱性について責任を持って報告する方法が記載されています。 詳しい情報については「[リポジトリにセキュリティポリシーを追加する](/articles/adding-a-security-policy-to-your-repository)」を参照してください。{% endif %}
| *SUPPORT.md*                                                                                                    | SUPPORT ファイルは、プロジェクトについて支援を受ける方法を伝えるためのものです。 詳しい情報については"[プロジェクトへのサポートリソースの追加](/articles/adding-support-resources-to-your-project/)"を参照してください。                                                                        |

デフォルトのライセンスファイルを作成することはできません。 ライセンスファイルは、プロジェクトのクローン時、パッケージ時、またはダウンロード時に含められるよう、個々のリポジトリに追加する必要があります。

### デフォルトのファイル用にリポジトリを作成

{% data reusables.repositories.create_new %}
2. [**Owner**] ドロップダウンメニューを使用して、デフォルトファイルを作成する Organization {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}またはユーザアカウント{% endif %}を選択します。 ![[Owner] ドロップダウンメニュー](/assets/images/help/repository/create-repository-owner.png)
3. リポジトリの名前として **.github** と入力し、任意で説明を入力します。 ![リポジトリ作成フィールド](/assets/images/help/repository/default-file-repository-name.png)
4. リポジトリをパブリックにします。 ![プライベートまたはパブリックのステータスを選択するラジオボタン](/assets/images/help/repository/create-repository-public-private.png)
{% data reusables.repositories.initialize-with-readme %}
{% data reusables.repositories.create-repo %}
7. リポジトリの中に、サポートされているコミュニティ健全性ファイルの 1 つを作成します。 Issue テンプレート{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}とその設定ファイル{% endif %}は、`.github/ISSUE_TEMPLATE` というフォルダ内になければなりません。 その他のサポートされているファイルは、リポジトリのルートにある必要があります。 詳細は「[新しいファイルを作成する](/articles/creating-new-files/)」を参照してください。
