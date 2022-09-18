---
title: Organizationのカスタムリポジトリロールの管理
intro: カスタムのリポジトリロールを作成することで、Organizationのリポジトリへのアクセスをより詳細に制御できます。
permissions: Organization owners can manage custom repository roles.
versions:
  feature: custom-repository-roles
topics:
  - Organizations
  - Teams
shortTitle: Custom repository roles
redirect_from:
  - /early-access/github/articles/managing-custom-repository-roles-for-an-organization
ms.openlocfilehash: e37e7822abc378cd91fb719dd472edaf35af4465
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/09/2022
ms.locfileid: '147858685'
---
## カスタムリポジトリロールについて

リポジトリでのPull Requestの作成やOrganizationの支払い設定の変更など、{% data variables.product.product_name %}でなんらかのアクションを行うためには、ユーザは関連するアカウントやリソースに対する十分なアクセス権を持っていなければなりません。 このアクセスは、権限によって制御されます。 権限は、特定のアクションを行える能力です。 たとえばIssueを削除する能力は権限です。 ロールは、個人やTeamに割り当てることができる権限のセットです。

Organization内では、ロールをOrganization、Team、リポジトリのレベルで割り当てることができます。 さまざまなレベルのロールについて詳しくは、「[Organization 内のロール](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)」を参照してください。

最大 3 つのカスタム リポジトリ ロールを作成することで、リポジトリ レベルで付与するアクセス許可をより細かく制御できます。 カスタムリポジトリロールは、選択したカスタム名を持つ設定可能な権限のセットです。 カスタムロールを作成すると、リポジトリへの管理アクセスを持つユーザはそのロールを個人やTeamに割り当てることができます。 詳細については、「[組織のリポジトリに対する個人のアクセスを管理する](/organizations/managing-access-to-your-organizations-repositories/managing-an-individuals-access-to-an-organization-repository)」と「[組織のリポジトリに対するチームのアクセスを管理する](/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository)」を参照してください。

{% ifversion custom-repo-role-api %}

REST API を使って、カスタム リポジトリ ロールを作成して管理することもできます。 詳細については、「[カスタム リポジトリ ロール](/rest/orgs/custom-roles)」を参照してください。

{% else %}

REST API を使って、組織で使用できるカスタム リポジトリ ロールを一覧表示することもできます。 詳細については、[カスタム リポジトリ ロールの API](/rest/orgs/custom-roles) を参照してください。

{% endif %}

## 継承されたロールについて

カスタムリポジトリロールを作成する際は、事前設定された選択肢のセットから継承されたロールを選択することから始めます。 継承されたロールは、カスタムロールに含まれる権限の初期セットを決定します。 そして、そのロールは付与する追加権限を選択することによって、さらにカスタマイズできます。 使用可能なアクセス許可の完全なリストについては、「[カスタム ロールの追加のアクセス許可](#additional-permissions-for-custom-roles)」を参照してください。

継承されたロールの選択肢については、リポジトリの様々な種類のコントリビューターに対して標準化されています。

| 継承されたロール | 対象 |
|----|----|
| **読み取り** | プロジェクトを見たり議論したりしたい非コードコントリビューター。 |
| **トリアージ** | 書き込みアクセスなしに、積極的にIssueやPull Requestを管理する必要があるコントリビューター。 |
| **書き込み** | アクティブにプロジェクトに対してプッシュを行うOrganizationのメンバーとコントリビューター。 |
| **管理** | 機微あるいは破壊的なアクションを行うためアクセスなしにリポジトリを管理する必要があるプロジェクトマネージャー。

## カスタム ロールの例

以下は、設定できるカスタムリポジトリロールの例です。

| カスタムリポジトリロール | まとめ | 継承されたロール | 追加の権限 |
|----|----|----|----|
| セキュリティ エンジニア | コードをコントリビュートし、セキュリティパイプラインをメンテナンスできる | **管理** | Code scanningの結果の削除 |
| Contractor | webhookのインテグレーションを開発できる | **書き込み** | webhookの管理 |
| Community manager | コードをコントリビュートすることなく、コミュニティのすべてのやりとりを扱える | **読み取り** | - issue を複製としてマークする <br> - GitHub ページの設定を管理する <br> - Wiki 設定を管理する <br> - ソーシャル プレビューを設定する <br> - リポジトリのメタデータを編集する <br> - ディスカッションをトリアージする |

## カスタムロールの追加権限

継承されたロールを選択した後、カスタムロールの追加権限を選択できます。

継承されたロールにまだ含まれていない場合にのみ、追加の権限を選択できます。 たとえば、継承されたロールでリポジトリへの **書き込み** アクセスが提供されている場合は、"pull request をクローズする" 権限は継承されたロールに既に含まれています。

{% ifversion discussions %}
### ディスカッション

- **ディスカッション カテゴリを作成する**: 新しいディスカッション カテゴリを作成する機能。 詳しくは、[新しいディスカッション カテゴリの作成](/discussions/managing-discussions-for-your-community/managing-categories-for-discussions#creating-a-category)に関するページをご覧ください。
- **ディスカッション カテゴリを編集する**: ディスカッション カテゴリを編集する機能。 詳しくは、[ディスカッション カテゴリの編集](/discussions/managing-discussions-for-your-community/managing-categories-for-discussions#editing-a-category)に関するページをご覧ください。
- **ディスカッション カテゴリを削除する**: ディスカッション カテゴリを削除する機能。 詳しくは、[ディスカッション カテゴリの削除](/discussions/managing-discussions-for-your-community/managing-categories-for-discussions#deleting-a-category)に関するページをご覧ください。
- **ディスカッションの回答をマークまたはマーク解除する**: ディスカッションのカテゴリが回答を受け入れる場合に、ディスカッションへの回答をマークする機能。 詳しくは、[ディスカッションのコメントを回答としてマークまたはマークの解除](/discussions/managing-discussions-for-your-community/moderating-discussions#marking-a-comment-as-an-answer)に関するページをご覧ください。 
- **ディスカッション コメントを非表示または再表示する**: ディスカッション内のコメントを非表示または再表示する機能。  詳細については、「[ディスカッションをモデレートする](/communities/moderating-comments-and-conversations/managing-disruptive-comments#hiding-a-comment)」を参照してください。
- **Issue をディスカッションに変換する**: Issue をディスカッションに変換する機能。  詳しくは、「[Issue をディスカッションに変換する](/discussions/managing-discussions-for-your-community/moderating-discussions#converting-an-issue-to-a-discussion)」をご覧ください。
{% endif %}

### IssueとPull Request

- **ユーザーを割り当てる、または削除する**: ユーザーを issue または pull request に割り当てるか、ユーザーを issue または pull request から削除します。
- **ラベルを追加または削除する**: ラベルを issue または pull request に追加するか、ラベルを issue または pull request から削除します。

### 問題

- **issue をクローズする**
- **クローズされた issue を再オープンする**
- **issue を削除する**
- **issue を複製としてマークする**

### Pull Request

- **pull request をクローズする**
- **クローズされた pull request を再オープンする**
- **pull request のレビューを要求する**: ユーザーまたは Team にレビューを要求します。

### リポジトリ

- **マイルストーンを設定する**: issue または pull request にマイルストーンを追加します。
- **Wiki 設定を管理する**: リポジトリに対して Wiki を有効にします。
- **プロジェクト設定を管理する**: リポジトリのプロジェクトを有効にします。
- **pull request のマージ設定を管理する**: マージ、squash、リベースなど、リポジトリで許可されるマージ コミットの種類を選びます。
- **{% data variables.product.prodname_pages %} 設定を管理する**: リポジトリに対して {% data variables.product.prodname_pages %} を有効にし、公開するブランチを選択します。 詳細については、「[{% data variables.product.prodname_pages %} サイトの公開元を設定する](/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)」を参照してください。
- **Webhook を管理する**: リポジトリに Webhook を追加します。
- **デプロイ キーを管理する**: リポジトリにデプロイ キーを追加します。
- **リポジトリのメタデータを編集する**: リポジトリの説明およびポジトリのトピックを更新します。
{%- ifversion ghec %}
- **インタラクションの制限を設定する**: 自分のパブリック リポジトリで特定のユーザーによるコメント、issue のオープン、pull request の作成を一時的に制限し、制限されたアクティビティの期間を適用します。 詳細については、「[リポジトリでのインタラクションを制限する](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)」を参照してください。
{%- endif %}
- **ソーシャル プレビューを設定する**: リポジトリがリンクされたときにソーシャル メディア プラットフォーム上に表示される識別画像をリポジトリに追加します。 詳細については、「[リポジトリのソーシャル メディア プレビューのカスタマイズ](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/customizing-your-repositorys-social-media-preview)」を参照してください。
- **保護されたブランチにコミットをプッシュする**: 保護されたブランチとしてマークされているブランチにプッシュします。 ブランチ保護ルールは引き続き適用され、プッシュが拒否される可能性があります。
- **保護されたタグを作成する**: タグ保護ルールに一致するタグを作成します。 詳細については、「[タグ保護ルールの構成](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/configuring-tag-protection-rules)」を参照してください。
- **タグ保護ルールを削除する**: タグ保護ルールに一致するタグを削除します。 詳しくは、「[タグ保護ルールの構成](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/configuring-tag-protection-rules)」を参照してください。{% ifversion bypass-branch-protections %}
- **ブランチ保護をバイパスする**: ブランチ保護ルールに準拠せず、保護されたブランチにプッシュします。{% endif %}

### セキュリティ

- **{% data variables.product.prodname_code_scanning %} の結果を表示する**: {% data variables.product.prodname_code_scanning %} アラートを表示できます。
- **{% data variables.product.prodname_code_scanning %} の結果を無視または再オープンする**: {% data variables.product.prodname_code_scanning %} アラートを無視または再オープンできます。
- **{% data variables.product.prodname_code_scanning %} の結果を削除する**: {% data variables.product.prodname_code_scanning %} アラートを削除できます。
- **{% data variables.product.prodname_dependabot_alerts %} を表示する**: {% data variables.product.prodname_dependabot_alerts %} を表示できます。
- **{% data variables.product.prodname_dependabot_alerts %} を無視または再オープンする**: {% data variables.product.prodname_dependabot_alerts %} を無視または再オープンできます。
- **{% data variables.product.prodname_secret_scanning %} の結果を表示する**: {% data variables.product.prodname_secret_scanning %} アラートを表示できます。
- **{% data variables.product.prodname_secret_scanning %} の結果を無視または再オープンする**: {% data variables.product.prodname_secret_scanning %} アラートを無視または再オープンできます。

## 様々なアクセスレベルの優先順位

TeamのメンバーシップやOrganizationの基本権限など、様々な方法を通じて様々なレベルのアクセスを与えられている場合、最上位のアクセスが他よりも優先されます。 たとえば、OrganizationのオーナーがOrganizationのメンバーに継承ロールの"Read"を使うカスタムロールを与え、そしてOrganizationのオーナーがOrganizationの基本権限を"Write"にした場合、このカスタムロールはカスタムロールに含まれている追加の権限とともに、書き込みアクセスを持つことになります。

{% data reusables.organizations.mixed-roles-warning %}

競合するアクセスを解決するには、Organizationの基本アクセスあるいはTeamのアクセスを調整するか、カスタムロールを編集してください。 詳細については、次を参照してください。
  - [Organization の基本レベルの権限の設定](/github/setting-up-and-managing-organizations-and-teams/setting-base-permissions-for-an-organization)
  - [Organization のリポジトリに対するチームのアクセスを管理する](/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository)
  - [リポジトリ ロールの編集](#editing-a-repository-role)

## リポジトリロールの作成

新しいリポジトリロールを作成するには、継承されたロールに権限を追加し、カスタムロールに名前を付けます

{% ifversion ghec %} {% note %}

**注:** カスタム リポジトリ ロールを作成できるのは、{% data variables.product.prodname_ghe_cloud %} を使用する Organization のみです。 {% data reusables.enterprise.link-to-ghec-trial %}

{% endnote %} {% endif %}

{% data reusables.profile.access_profile %} {% data reusables.profile.access_org %} {% data reusables.organizations.org_settings %} {% data reusables.organizations.org-list %} {% data reusables.organizations.org-settings-repository-roles %}
5. **[ロールの作成]** をクリックします。
  ![[ロールの作成] ボタンのスクリーンショット](/assets/images/help/organizations/repository-role-create-role.png)
4. "Name（名前）"の下で、リポジトリロールの名前を入力してください。
  ![リポジトリ ロールの名前の入力フィールド](/assets/images/help/organizations/repository-role-name.png)
5. "Description（説明）"の下で、リポジトリロールの説明を入力してください。
  ![リポジトリ ロールの説明の入力フィールド](/assets/images/help/organizations/repository-role-description.png)
6. "Choose a role to inherit（継承するロールの選択）"の下で、継承したいロールを選択してください。
  ![リポジトリ ロールの基本ロール オプションの選択](/assets/images/help/organizations/repository-role-base-role-option.png)
7. "Add Permissions（権限の追加）"の下で、ドロップダウンメニューを使ってカスタムロールに含めたい権限を選択してください。
  ![リポジトリ ロールのドロップダウンからの権限レベルの選択](/assets/images/help/organizations/repository-role-drop-down.png)
7. **[ロールの作成]** をクリックします。
  ![リポジトリ ロールの作成の確認](/assets/images/help/organizations/repository-role-creation-confirm.png)

## リポジトリロールの編集

{% data reusables.profile.access_profile %} {% data reusables.profile.access_org %} {% data reusables.organizations.org_settings %} {% data reusables.organizations.org-list %} {% data reusables.organizations.org-settings-repository-roles %}
3. 編集するロールの右にある [{% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}] をクリックしてから **[編集]** をクリックします。
  ![リポジトリ ロールのドロップダウン メニューの編集オプション](/assets/images/help/organizations/repository-role-edit-setting.png)
4. 編集してから、 **[ロールの更新]** をクリックします。
  ![フィールドを編集して、リポジトリ ロールを更新する](/assets/images/help/organizations/repository-role-update.png)

## リポジトリロールの削除

既存のリポジトリロールを削除すると、そのカスタムロールを持つ保留中の招待、Team、ユーザはすべてOrganizationの基本権限に割り当てなおされます。

{% data reusables.profile.access_profile %} {% data reusables.profile.access_org %} {% data reusables.organizations.org_settings %} {% data reusables.organizations.org-list %} {% data reusables.organizations.org-settings-repository-roles %}
3. 削除するロールの右にある [{% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}] をクリックしてから、 **[削除]** をクリックします。
  ![リポジトリ ロールのドロップダウン メニューの編集オプション](/assets/images/help/organizations/repository-role-delete-setting.png)
4. 削除するロールに対する変更をレビューしてから、 **[ロールの削除]** をクリックします。
  ![リポジトリ ロールの削除を確認する](/assets/images/help/organizations/repository-role-delete-confirm.png)
