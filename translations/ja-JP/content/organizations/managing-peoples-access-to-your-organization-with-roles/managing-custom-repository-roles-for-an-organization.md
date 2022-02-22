---
title: Organizationのカスタムリポジトリロールの管理
intro: カスタムのリポジトリロールを作成することで、Organizationのリポジトリへのアクセスをより詳細に制御できます。
permissions: Organization owners can manage custom repository roles.
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: カスタムリポジトリロール
redirect_from:
  - /early-access/github/articles/managing-custom-repository-roles-for-an-organization
---

{% data reusables.pre-release-program.custom-roles-public-beta %}

## カスタムリポジトリロールについて

リポジトリでのPull Requestの作成やOrganizationの支払い設定の変更など、{% data variables.product.product_name %}でなんらかのアクションを行うためには、ユーザは関連するアカウントやリソースに対する十分なアクセス権を持っていなければなりません。 このアクセスは、権限によって制御されます。 権限は、特定のアクションを行える能力です。 たとえばIssueを削除する能力は権限です。 ロールは、個人やTeamに割り当てることができる権限のセットです。

Organization内では、ロールをOrganization、Team、リポジトリのレベルで割り当てることができます。 ロールの様々なレベルに関する詳しい情報については「[Organizationのロール](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)」を参照してください。

Organizationが{% data variables.product.prodname_ghe_cloud %}を使っているなら、最大で3つのカスタムリポジトリロールを作成することで、リポジトリレベルで付与する権限をより詳細に制御できます。 カスタムリポジトリロールは、選択したカスタム名を持つ設定可能な権限のセットです。 カスタムロールを作成すると、リポジトリへの管理アクセスを持つユーザはそのロールを個人やTeamに割り当てることができます。 詳しい情報については「[Organizationのリポジトリへの個人のアクセスの管理](/organizations/managing-access-to-your-organizations-repositories/managing-an-individuals-access-to-an-organization-repository)」及び「[OrganizationのリポジトリへのTeamのアクセスの管理](/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository)」を参照してください。

{% data reusables.enterprise.link-to-ghec-trial %}

## 継承されたロールについて

カスタムリポジトリロールを作成する際は、事前設定された選択肢のセットから継承されたロールを選択することから始めます。 継承されたロールは、カスタムロールに含まれる権限の初期セットを決定します。 そして、そのロールは付与する追加権限を選択することによって、さらにカスタマイズできます。 利用可能な権限の完全なリストについては「[カスタムロールのための追加権限](#additional-permissions-for-custom-roles)」を参照してください。

継承されたロールの選択肢については、リポジトリの様々な種類のコントリビューターに対して標準化されています。

| 継承されたロール     | 設計対象                                                    |
| ------------ | ------------------------------------------------------- |
| **Read**     | プロジェクトを見たり議論したりしたい非コードコントリビューター。                        |
| **Triage**   | 書き込みアクセスなしに、積極的にIssueやPull Requestを管理する必要があるコントリビューター。  |
| **Write**    | アクティブにプロジェクトに対してプッシュを行うOrganizationのメンバーとコントリビューター。     |
| **Maintain** | 機微あるいは破壊的なアクションを行うためアクセスなしにリポジトリを管理する必要があるプロジェクトマネージャー。 |

## カスタムロールの例

以下は、設定できるカスタムリポジトリロールの例です。

| カスタムリポジトリロール      | 概要                                     | 継承されたロール     | 追加の権限                                                                                                                                                 |
| ----------------- | -------------------------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| Security engineer | コードをコントリビュートし、セキュリティパイプラインをメンテナンスできる   | **Maintain** | Code scanningの結果の削除                                                                                                                                   |
| Contractor        | webhookのインテグレーションを開発できる                | **Write**    | webhookの管理                                                                                                                                            |
| Community manager | コードをコントリビュートすることなく、コミュニティのすべてのやりとりを扱える | **Read**     | - Issueを重複としてマーク<br> - GitHub Pageの設定を管理<br> - Wikiの設定を管理<br> - ソーシャルプレビューの設定<br> - リポジトリのメタデータを編集<br> - ディスカッションのトリアージ |

## カスタムロールの追加権限

継承されたロールを選択した後、カスタムロールの追加権限を選択できます。

継承されたロールにまだ含まれていない場合にのみ、追加の権限を選択できます。 たとえば、継承されたロールがリポジトリへの**Write**アクセスを提供しているなら、"Close a pull request"権限は継承されたロールに既に含まれています。

### IssueとPull Request

- **Assign or remove a user（ユーザをアサインあるいは外す）**: ユーザをIssueあるいはPull Requestにアサインするか、ユーザをIssueあるいはPull Requestから外す。
- **Add or remove a label（ラベルの追加あるいは削除）**: ラベルをIssueあるいはPull Requestに追加するか、ラベルをIssueあるいはPull Requestから削除する。

### Issue

- **Close an issue（Issueのクローズ）**
- **Reopen a closed issue（クローズされたIssueの再オープン）**
- **Delete an issue（Issueの削除）**
- **Mark an issue as a duplicate（Issueを複製としてマーク）**

### Pull Request

- **Close a pull request（Pull Requestをクローズ）**
- **Reopen a closed pull request（クローズされたPull Requestを再オープン）**
- **Request a pull request review（Pull Requestのレビューをリクエスト）**: ユーザあるいはTeamからのレビューをリクエスト。

### リポジトリ

- **Set milestones（マイルストーンの設定）**: IssueあるいはPull Requestにマイルストーンを追加。
- **Manage wiki settings（Wiki設定の管理）**: リポジトリでWikiを有効化。
- **Manage project settings（プロジェクト設定の管理）**: リポジトリでプロジェクトを有効化。
- **Manage pull request merging settings（Pull Requestのマージ設定の管理）**: マージ、squash、リベースなど、リポジトリで許可されるマージコミットの種類を選択。
- **Manage {% data variables.product.prodname_pages %} settings**: Enable {% data variables.product.prodname_pages %} for the repository, and select the branch you want to publish. 詳しい情報については「[{% data variables.product.prodname_pages %} サイトの公開元を設定する](/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)」を参照してください。
- **Manage webhooks**: Add webhooks to the repository.
- **Manage deploy keys**: Add deploy keys to the repository.
- **Edit repository metadata**: Update the repository description as well as the repository topics.
- **Set interaction limits**: Temporarily restrict certain users from commenting, opening issues, or creating pull requests in your public repository to enforce a period of limited activity. For more information, see "[Limiting interactions in your repository](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)."
- **Set the social preview**: Add an identifying image to your repository that appears on social media platforms when your repository is linked. 詳細は「[リポジトリのソーシャルメディア向けプレビューをカスタマイズする](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/customizing-your-repositorys-social-media-preview)」を参照してください。
- **Push commits to protected branches**: Push to a branch that is marked as a protected branch.

### セキュリティ

- **View {% data variables.product.prodname_code_scanning %} results**: Ability to view {% data variables.product.prodname_code_scanning %} alerts.
- **Dismiss or reopen {% data variables.product.prodname_code_scanning %} results**: Ability to dismiss or reopen {% data variables.product.prodname_code_scanning %} alerts.
- **Delete {% data variables.product.prodname_code_scanning %} results**: Ability to delete {% data variables.product.prodname_code_scanning %} alerts.
- **View {% data variables.product.prodname_dependabot_alerts %}**: Ability to view {% data variables.product.prodname_dependabot_alerts %}.
- **Dismiss or reopen {% data variables.product.prodname_dependabot_alerts %}**: Ability to dismiss or reopen {% data variables.product.prodname_dependabot_alerts %}.
- **View {% data variables.product.prodname_secret_scanning %} results**: Ability to view {% data variables.product.prodname_secret_scanning %} alerts.
- **Dismiss or reopen {% data variables.product.prodname_secret_scanning %} results**: Ability to dismiss or reopen {% data variables.product.prodname_secret_scanning %} alerts.

## Precedence for different levels of access

If a person is given different levels of access through different avenues, such as team membership and the base permissions for an organization, the highest access overrides the others. For example, if an organization owner gives an organization member a custom role that uses the "Read" inherited role, and then an organization owner sets the organization's base permission to "Write", then this custom role will have write access, along with any additional permissions included in the custom role.

{% data reusables.organizations.mixed-roles-warning %}

To resolve conflicting access, you can adjust your organization's base permissions or the team's access, or edit the custom role. 詳しい情報については、以下を参照してください。
  - 「[Organization の基本レベルの権限の設定](/github/setting-up-and-managing-organizations-and-teams/setting-base-permissions-for-an-organization)」
  - [OrganizationのリポジトリへのTeamのアクセスの管理](/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository)
  - "[Editing a repository role](#editing-a-repository-role)"

## Creating a repository role

To create a new repository role, you add permissions to an inherited role and give the custom role a name.

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.org-list %}
{% data reusables.organizations.org-settings-repository-roles %}
5. Click **Create a Role**. ![Screenshot of "Create a Role" button](/assets/images/help/organizations/repository-role-create-role.png)
4. Under "Name", type the name of your repository role. ![Field to type a name for the repository role](/assets/images/help/organizations/repository-role-name.png)
5. Under "Description", type a description of your repository role. ![Field to type a description for the repository role](/assets/images/help/organizations/repository-role-description.png)
6. Under "Choose a role to inherit", select the role you want to inherit. ![Selecting repository role base role option](/assets/images/help/organizations/repository-role-base-role-option.png)
7. Under "Add Permissions", use the drop-down menu to select the permissions you want your custom role to include. ![Selecting permission levels from repository role drop-down](/assets/images/help/organizations/repository-role-drop-down.png)
7. Click **Create role**. ![Confirm creating a repository role](/assets/images/help/organizations/repository-role-creation-confirm.png)

## Editing a repository role

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.org-list %}
{% data reusables.organizations.org-settings-repository-roles %}
3. To the right of the role you want to edit, click {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}, then click **Edit**. ![Edit option in drop-down menu for repository roles](/assets/images/help/organizations/repository-role-edit-setting.png)
4. Edit, then click **Update role**. ![Edit fields and update repository roles](/assets/images/help/organizations/repository-role-update.png)

## Deleting a repository role

If you delete an existing repository role, all pending invitations, teams, and users with the custom role will be reassigned to the organization's base permissions.

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.org-list %}
{% data reusables.organizations.org-settings-repository-roles %}
3. To the right of the role you want to delete, click {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}, then click **Delete**. ![Edit option in drop-down menu for repository roles](/assets/images/help/organizations/repository-role-delete-setting.png)
4. Review changes for the role you want to remove, then click **Delete role**. ![Confirm deleting a repository role](/assets/images/help/organizations/repository-role-delete-confirm.png)
