---
title: リポジトリについて
intro: リポジトリには、プロジェクトのすべてのファイルと各ファイルの改訂履歴が含まれています。 リポジトリ内でプロジェクトの作業について話し合い、管理できます。
redirect_from:
  - /articles/about-repositories
  - /github/creating-cloning-and-archiving-repositories/about-repositories
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-repositories
  - /github/creating-cloning-and-archiving-repositories/about-repository-visibility
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-repository-visibility
  - /articles/what-are-the-limits-for-viewing-content-and-diffs-in-my-repository
  - /articles/limits-for-viewing-content-and-diffs-in-a-repository
  - /github/creating-cloning-and-archiving-repositories/limits-for-viewing-content-and-diffs-in-a-repository
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/limits-for-viewing-content-and-diffs-in-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
---

## リポジトリについて

リポジトリを個人として所有することも、リポジトリの所有権を Organization 内の他の人々と共有することもできます。

リポジトリの表示設定を選択して、リポジトリにアクセスできるユーザを制限できます。 詳細は「[リポジトリの可視性について](#about-repository-visibility)」を参照してください。

ユーザが所有するリポジトリでは、他の人々にコラボレーターアクセスを与えて、プロジェクトでコラボレーションするようにできます。 リポジトリが Organization によって所有されている場合は、Organization のメンバーにアクセス権限を与え、リポジトリ上でコラボレーションするようにできます。 For more information, see "[Permission levels for a personal account repository](/articles/permission-levels-for-a-user-account-repository/)" and "[Repository roles for an organization](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)."

{% ifversion fpt or ghec %}
With {% data variables.product.prodname_free_team %} for personal accounts and organizations, you can work with unlimited collaborators on unlimited public repositories with a full feature set, or unlimited private repositories with a limited feature set. プライベートリポジトリの高度なツールを入手するには、 {% data variables.product.prodname_pro %}、{% data variables.product.prodname_team %}、または {% data variables.product.prodname_ghe_cloud %} にアップグレードします。 {% data reusables.gated-features.more-info %}
{% else %}
各個人および Organization は、無制限のリポジトリを所有でき、すべてのリポジトリにコラボレータを何人でも招待できます。
{% endif %}

リポジトリを使用して、作業を管理し、他のユーザと共同作業を行うことができます。
- Issue を使用して、ユーザフィードバックの収集、ソフトウェアバグの報告、および実行するタスクの整理を行うことができます。 詳しい情報については「[Issue について](/github/managing-your-work-on-github/about-issues)」を参照してください。{% ifversion fpt or ghec %}
- {% data reusables.discussions.you-can-use-discussions %}{% endif %}
- プルリクエストを使用して、リポジトリへの変更を提案できます。 詳しい情報については[プルリクエストについて](/github/collaborating-with-issues-and-pull-requests/about-pull-requests)を参照してください。
- プロジェクトボードを使用して、Issue とプルリクエストを整理して優先順位を付けることができます。 詳細は「[プロジェクトボードについて](/github/managing-your-work-on-github/about-project-boards)」を参照してください。

{% data reusables.repositories.repo-size-limit %}

## リポジトリの可視性について

You can restrict who has access to a repository by choosing a repository's visibility: {% ifversion ghes or ghec %}public, internal, or private{% elsif ghae %}private or internal{% else %} public or private{% endif %}.

{% ifversion fpt or ghec or ghes %}

When you create a repository, you can choose to make the repository public or private.{% ifversion ghec or ghes %} If you're creating the repository in an organization{% ifversion ghec %} that is owned by an enterprise account{% endif %}, you can also choose to make the repository internal.{% endif %}{% endif %}{% ifversion fpt %} Repositories in organizations that use {% data variables.product.prodname_ghe_cloud %} and are owned by an enterprise account can also be created with internal visibility. For more information, see [the {% data variables.product.prodname_ghe_cloud %} documentation](/enterprise-cloud@latest/repositories/creating-and-managing-repositories/about-repositories).

{% elsif ghae %}

When you create a repository owned by your personal account, the repository is always private. When you create a repository owned by an organization, you can choose to make the repository private or internal.

{% endif %}

{%- ifversion fpt or ghec %}
- パブリックリポジトリには、インターネット上のすべてのユーザがアクセスできます。
- プライベートリポジトリには、自分、明示的にアクセスを共有するユーザ、および Organization リポジトリの場合は特定の Organization メンバーのみがアクセスできます。
{%- elsif ghes %}
- If {% data variables.product.product_location %} is not in private mode or behind a firewall, public repositories are accessible to everyone on the internet. そうではない場合、外部のコラボレータを含め、{% data variables.product.product_location %} を使用するすべてのユーザがパブリックリポジトリを利用できます。
- プライベートリポジトリには、自分、明示的にアクセスを共有するユーザ、および Organization リポジトリの場合は特定の Organization メンバーのみがアクセスできます。
{%- elsif ghae %}
- プライベートリポジトリには、自分、明示的にアクセスを共有するユーザ、および Organization リポジトリの場合は特定の Organization メンバーのみがアクセスできます。
{%- endif %}
{%- ifversion ghec or ghes or ghae %}
- 内部リポジトリには、すべての Enterprise メンバーがアクセスできます。 詳しい情報については、「[内部リポジトリについて](#about-internal-repositories)」を参照してください。
{%- endif %}

Organization のオーナーは、Organization 内で作成されたすべてのリポジトリにいつでもアクセスできます。 詳しい情報については「[Organizationのリポジトリロール](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)」を参照してください。

リポジトリの管理者権限を持つユーザは、既存のリポジトリの可視性を変更できます。 詳細は「[リポジトリの可視性を設定する](/github/administering-a-repository/setting-repository-visibility)」を参照してください。

{% ifversion ghes or ghec or ghae %}
## インターナルリポジトリについて

{% data reusables.repositories.about-internal-repos %}インナーソースに関する詳しい情報については、{% data variables.product.prodname_dotcom %}のホワイトペーパー「[インナーソース入門](https://resources.github.com/whitepapers/introduction-to-innersource/)」を参照してください。

All enterprise members have read permissions to the internal repository, but internal repositories are not visible to people {% ifversion fpt or ghec %}outside of the enterprise{% else %}who are not members of any organization{% endif %}, including outside collaborators on organization repositories. For more information, see "[Roles in an enterprise](/github/setting-up-and-managing-your-enterprise/roles-in-an-enterprise#enterprise-members)" and "[Repository roles for an organization](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)."

{% ifversion ghes %}
{% note %}

**Note:** A user must be part of an organization to be an enterprise member and have access to internal repositories. If a user on {% data variables.product.product_location %} is not a member of any organization, that user will not have access to internal repositories.

{% endnote %}
{% endif %}

{% data reusables.repositories.internal-repo-default %}

Any member of the enterprise can fork any internal repository owned by an organization in the enterprise. The forked repository will belong to the member's personal account, and the visibility of the fork will be private. Enterprise が所有するすべての Organization からユーザが削除されると、そのユーザの内部リポジトリのフォークは自動的に削除されます。
{% endif %}

## リポジトリでコンテンツと diff の表示を制限する

ある種のリソースはきわめて大きくなり、{% data variables.product.product_name %} で負荷の大きな処理が必要になる場合があります。 そのため、リクエストが妥当な時間で終わるように、制限が設けられています。

以下の制限の多くは {% data variables.product.product_name %}と API の両方に影響します。

### テキストの制限

Text files over **512 KB** are always displayed as plain text. コードの構文は強調表示されず、prose ファイルは HTML (Markdown、AsciiDoc、*その他*) に変換されません。

**5 MB** を超えるテキスト ファイルは raw URL を介してしか使用できません。これは `{% data variables.product.raw_github_com %}` を通じて、たとえば `https://{% data variables.product.raw_github_com %}/octocat/Spoon-Knife/master/index.html` のように提供されます。 ファイルの raw URL を取得するには、[**Raw**] ボタンを押します。

### diff の制限

diff はきわめて大きくなることがあるため、コミット、プルリクエスト、比較ビューには制限が設けられています。

- In a pull request, no total diff may exceed *20,000 lines that you can load* or *1 MB* of raw diff data.
- No single file's diff may exceed *20,000 lines that you can load* or *500 KB* of raw diff data. 1 つのファイルについては、*400 行*および *20 KB* が自動的にロードされます。
- 1 つの diff あたりの最大ファイル数は *300* に制限されています。
- 1 つの diff あたりで表示可能な最大ファイル数 (画像、PDF、GeoJSON ファイル) は、*25* です。

制限された diff の一部が表示される場合もありますが、制限を超える部分は表示されません。

### コミット リストの制限

比較ビューとプルリクエストのページでは、`base` リビジョンと `head` リビジョンの間にコミットのリストが表示されます。 このリストは **250** コミットに制限されています。 その制限を超える場合は、追加のコミットがあるという注意書きが表示されます (コミット自体は表示されません)。

## 参考リンク

- 「[新しいリポジトリを作成する](/articles/creating-a-new-repository)」
- 「[フォークについて](/github/collaborating-with-pull-requests/working-with-forks/about-forks)」
- [Issue とプルリクエストでのコラボレーション](/categories/collaborating-with-issues-and-pull-requests)
- 「[{% data variables.product.prodname_dotcom %}での作業を管理する](/categories/managing-your-work-on-github/)」
- [リポジトリの管理](/categories/administering-a-repository)
- [グラフによるリポジトリデータの可視化](/categories/visualizing-repository-data-with-graphs/)
- 「[ウィキについて](/communities/documenting-your-project-with-wikis/about-wikis)」
- [{% data variables.product.prodname_dotcom %} 用語集](/articles/github-glossary)
