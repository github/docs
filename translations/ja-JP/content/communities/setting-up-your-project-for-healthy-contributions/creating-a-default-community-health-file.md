---
title: デフォルトのコミュニティ健全性ファイルを作成する
intro: CONTRIBUTING や CODE_OF_CONDUCT など、デフォルトのコミュニティ健全性ファイルを作成できます。 デフォルトのファイルは、そのような種類の独自ファイルを持たないアカウントが所有するすべてのリポジトリに使用されます。
redirect_from:
  - /articles/creating-a-default-community-health-file-for-your-organization
  - /github/building-a-strong-community/creating-a-default-community-health-file-for-your-organization
  - /github/building-a-strong-community/creating-a-default-community-health-file
versions:
  fpt: '*'
  ghes: '*'
topics:
  - Community
shortTitle: コミュニティ健全性ファイル
---

## デフォルトのコミュニティ健全性ファイルについて

You can add default community health files to a public repository called `.github`, in the root of the repository or in the `docs` or `.github` folders.

{% data variables.product.product_name %} は、次のいずれかの場所にその種類の独自ファイルを持たないアカウントが所有するリポジトリのデフォルトファイルを使用および表示します。
- リポジトリのルート
- `.github` フォルダ
- `docs` フォルダ

たとえば、独自の CONTRIBUTING ファイルを持たないリポジトリで Issue またはプルリクエストを作成すると、デフォルトの CONTRIBUTING ファイルへのリンクが表示されます。 リポジトリの独自の `.github/ISSUE_TEMPLATE` フォルダ内に
{% ifversion fpt or ghae or ghes %}、Issue テンプレートや *config.yml* ファイルなどの{% endif %}ファイルがある場合、デフォルトの`.github/ISSUE_TEMPLATE`フォルダにあるコンテンツは使用されません。

デフォルトのファイルは `.github` リポジトリにのみ格納されるものであって、クローン、パッケージ、リポジトリ個別のダウンロードには含まれません。

## サポートされているファイルの種類

Organization {% ifversion fpt or ghae or ghes %}またはユーザアカウント{% endif %}に対して、次のコミュニティ健全性ファイルにデフォルトを作成できます。

| コミュニティ健全性ファイル                                                                       | 説明                                                                                                                                                                                                                   |
| ----------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |{% ifversion fpt %}
| *CODE_OF_CONDUCT.md*                                                              | CODE_OF_CONDUCT ファイルは、コミュニティへの関わり方についての基準を定義します。 詳しい情報については、「[プロジェクトへの行動規範の追加](/articles/adding-a-code-of-conduct-to-your-project/)」を参照してください。{% endif %}
| *CONTRIBUTING.md*                                                                   | CONTRIBUTING ファイルは、人々がプロジェクトにどのように貢献すべきかを伝えます。 詳しい情報については、「[リポジトリコントリビューターのためのガイドラインを定める](/articles/setting-guidelines-for-repository-contributors/)」を参照してください。{% ifversion fpt %}
| *FUNDING.yml*                                                                       | FUNDING ファイルは、あなたのオープンソースプロジェクトに対する資金提供のオプションについての認知度を高める目的で、リポジトリにスポンサーボタンを表示するためのものです。 詳細は「[リポジトリにスポンサーボタンを表示する](/articles/displaying-a-sponsor-button-in-your-repository)」を参照してください。{% endif %}
| Issue およびプルリクエストテンプレート{% ifversion fpt or ghae or ghes %}および*config.yml*{% endif %} | Issue およびプルリクエストのテンプレートは、リポジトリで Issue およびプルリクエストを開くときに含める情報をカスタマイズして標準化します。 詳しい情報については、「[Issue およびプルリクエストのテンプレートについて](/articles/about-issue-and-pull-request-templates/)」を参照してください。{% ifversion fpt or ghes > 3.0 %}
| *SECURITY.md*                                                                       | SECURITY ファイルには、プロジェクトのセキュリティの脆弱性について報告する方法が記載されています。 詳しい情報については「[リポジトリにセキュリティポリシーを追加する](/code-security/getting-started/adding-a-security-policy-to-your-repository)」を参照してください。{% endif %}
| *SUPPORT.md*                                                                        | SUPPORT ファイルは、プロジェクトについて支援を受ける方法を伝えるためのものです。 詳しい情報については"[プロジェクトへのサポートリソースの追加](/articles/adding-support-resources-to-your-project/)"を参照してください。                                                                        |

デフォルトのライセンスファイルを作成することはできません。 ライセンスファイルは、プロジェクトのクローン時、パッケージ時、またはダウンロード時に含められるよう、個々のリポジトリに追加する必要があります。

## デフォルトのファイル用にリポジトリを作成

{% data reusables.repositories.create_new %}
2. [**Owner**] ドロップダウンメニューを使用して、デフォルトファイルを作成する Organization {% ifversion fpt or ghae or ghes %}またはユーザアカウント{% endif %}を選択します。 ![[Owner] ドロップダウンメニュー](/assets/images/help/repository/create-repository-owner.png)
3. リポジトリの名前として **.github** と入力し、任意で説明を入力します。 ![リポジトリ作成フィールド](/assets/images/help/repository/default-file-repository-name.png)
4. リポジトリのステータスが **Public** に設定されていることを確認してください (デフォルトファイルのリポジトリをプライベートにすることはできません)。 ![プライベートまたはパブリックのステータスを選択するラジオボタン](/assets/images/help/repository/create-repository-public-private.png)
{% data reusables.repositories.initialize-with-readme %}
{% data reusables.repositories.create-repo %}
7. リポジトリの中に、サポートされているコミュニティ健全性ファイルの 1 つを作成します。 Issue テンプレート{% ifversion fpt or ghae or ghes %}とその設定ファイル{% endif %}は、`.github/ISSUE_TEMPLATE` というフォルダ内になければなりません。 All other supported files may be in the root of the repository, the `.github` folder, or the `docs` folder. 詳細は「[新しいファイルを作成する](/articles/creating-new-files/)」を参照してください。
