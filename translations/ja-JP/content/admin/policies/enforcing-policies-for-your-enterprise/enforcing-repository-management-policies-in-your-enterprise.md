---
title: Enterprise でリポジトリ管理ポリシーを適用する
intro: 'You can enforce policies for repository management within your enterprise''s organizations, or allow policies to be set in each organization.'
permissions: Enterprise owners can enforce policies for repository management in an enterprise.
redirect_from:
  - /enterprise/admin/installation/configuring-the-default-visibility-of-new-repositories-on-your-appliance
  - /enterprise/admin/guides/user-management/preventing-users-from-changing-a-repository-s-visibility
  - /enterprise/admin/user-management/preventing-users-from-changing-a-repositorys-visibility
  - /enterprise/admin/user-management/restricting-repository-creation-in-your-instance
  - /enterprise/admin/user-management/preventing-users-from-deleting-organization-repositories
  - /enterprise/admin/installation/setting-git-push-limits
  - /enterprise/admin/guides/installation/git-server-settings
  - /enterprise/admin/articles/setting-git-push-limits
  - /enterprise/admin/user-management/allowing-admins-to-enable-anonymous-git-read-access-to-public-repositories
  - /enterprise/admin/installation/disabling-the-merge-conflict-editor-for-pull-requests-between-repositories
  - /enterprise/admin/developer-workflow/blocking-force-pushes-on-your-appliance
  - /enterprise/admin/developer-workflow/blocking-force-pushes-to-repositories-owned-by-a-user-account-or-organization
  - /enterprise/admin/developer-workflow/blocking-force-pushes-to-a-repository
  - /enterprise/admin/articles/blocking-force-pushes-on-your-appliance
  - /enterprise/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access-to-a-repository
  - /enterprise/admin/user-management/preventing-users-from-changing-anonymous-git-read-access
  - /enterprise/admin/articles/blocking-force-pushes-to-a-repository
  - /enterprise/admin/articles/block-force-pushes
  - /enterprise/admin/articles/blocking-force-pushes-for-a-user-account
  - /enterprise/admin/articles/blocking-force-pushes-for-an-organization
  - /enterprise/admin/articles/blocking-force-pushes-to-repositories-owned-by-a-user-account-or-organization
  - /enterprise/admin/developer-workflow/blocking-force-pushes
  - /enterprise/admin/policies/enforcing-repository-management-policies-in-your-enterprise
  - /admin/policies/enforcing-repository-management-policies-in-your-enterprise
  - /articles/enforcing-repository-management-settings-for-organizations-in-your-business-account
  - /articles/enforcing-repository-management-policies-for-organizations-in-your-enterprise-account
  - /articles/enforcing-repository-management-policies-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/enforcing-repository-management-policies-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/enforcing-repository-management-policies-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/setting-policies-for-organizations-in-your-enterprise-account/enforcing-repository-management-policies-in-your-enterprise-account
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Policies
  - Repositories
  - Security
shortTitle: Repository management policies
---

## About policies for repository management in your enterprise

You can enforce policies to control how members of your enterprise on {% data variables.product.product_name %} manage repositories. You can also allow organization owners to manage policies for repository management. For more information, see "[Creating and managing repositories](/repositories/creating-and-managing-repositories) and "[Organizations and teams](/organizations)."

{% ifversion ghes or ghae %}

## Configuring the default visibility of new repositories

Each time someone creates a new repository within your enterprise, that person must choose a visibility for the repository. その Enterprise のデフォルトの可視性の設定をする際には、デフォルトで選択される可視性を選択します。 リポジトリの可視性に関する詳しい情報については「[リポジトリについて](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)」を参照してください。

Enterprise オーナーがメンバーによる特定のタイプのリポジトリの作成を禁止している場合、可視性設定がデフォルトでそのタイプに設定されていても、メンバーはそのタイプのリポジトリを作成できません。 詳しい情報については、「[リポジトリ作成のためのポリシーを設定する](#setting-a-policy-for-repository-creation)」を参照してください。

{% data reusables.enterprise-accounts.access-enterprise %}
{% ifversion ghes or ghae %}
{% data reusables.enterprise-accounts.policies-tab %}
{% else %}
{% data reusables.enterprise-accounts.settings-tab %}
{% endif %}
{% data reusables.enterprise-accounts.options-tab %}
1. "Default repository visibility（デフォルトのリポジトリの可視性）"の下で、ドロップダウンメニューを使ってデフォルトの可視性を選択してください。![Enterprise におけるデフォルトのリポジトリの可視化性を選択するためのドロップダウンメニュー](/assets/images/enterprise/site-admin-settings/default-repository-visibility-settings.png)

{% data reusables.enterprise_installation.image-urls-viewable-warning %}

{% endif %}

## Enforcing a policy for {% ifversion ghec or ghes > 3.1 or ghae %}base{% else %}default{% endif %} repository permissions

Across all organizations owned by your enterprise, you can set a {% ifversion ghec or ghes > 3.1 or ghae %}base{% else %}default{% endif %} repository permission level (none, read, write, or admin) for organization members, or allow owners to administer the setting on the organization level.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.repositories-tab %}
4. Under "{% ifversion ghec or ghes > 3.1 or ghae %}Base{% else %}Default{% endif %} permissions", review the information about changing the setting. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. Under "{% ifversion ghec or ghes > 3.1 or ghae %}Base{% else %}Default{% endif %} permissions", use the drop-down menu and choose a policy.
  {% ifversion ghec or ghes > 3.1 or ghae %}
  ![リポジトリ権限ポリシーオプションのドロップダウンメニュー](/assets/images/help/business-accounts/repository-permissions-policy-drop-down.png)
  {% else %}
  ![リポジトリ権限ポリシーオプションのドロップダウンメニュー](/assets/images/enterprise/business-accounts/repository-permissions-policy-drop-down.png)
  {% endif %}

## Enforcing a policy for repository creation

Across all organizations owned by your enterprise, you can allow members to create repositories, restrict repository creation to organization owners, or allow owners to administer the setting on the organization level. メンバーにリポジトリの作成を許可する場合は、パブリック、プライベート、内部の各リポジトリをどう組み合わせて作成するかを任意に選択できます。 {% data reusables.repositories.internal-repo-default %} 詳しい情報については「[内部リポジトリを作成する](/articles/creating-an-internal-repository)」を参照してください。

{% data reusables.organizations.repo-creation-constants %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.repositories-tab %}
5. [Repository creation] で、設定変更に関する情報を読みます。 {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
{% ifversion ghes or ghae %}
{% data reusables.enterprise-accounts.repo-creation-policy %}
{% data reusables.enterprise-accounts.repo-creation-types %}
{% else %}
6. [Repository creation（リポジトリの作成）] で、ドロップダウンメニューを使用してポリシーを選択します。 ![リポジトリ作成ポリシーのドロップダウンメニュー](/assets/images/enterprise/site-admin-settings/repository-creation-drop-down.png)
{% endif %}

## Enforcing a policy for forking private or internal repositories

Enterprise が所有しているすべての Organization 全体で、ユーザーにリポジトリのフォーク用にプライベートまたは内部リポジトリへのアクセスを許可したり、プライベートまたは内部リポジトリのフォークを一切禁止したり、オーナーが Organization レベルで設定を管理できるようにしたりすることができます。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.repositories-tab %}
3. Under "Repository forking", review the information about changing the setting. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
4. [Repository forking] で、ドロップダウンメニューを使用してポリシーを選択します。 ![リポジトリ フォーク ポリシー オプションのドロップダウンメニュー](/assets/images/help/business-accounts/repository-forking-policy-drop-down.png)

## Enforcing a policy for inviting{% ifversion ghec %} outside{% endif %} collaborators to repositories

Across all organizations owned by your enterprise, you can allow members to invite{% ifversion ghec %} outside{% endif %} collaborators to repositories, restrict {% ifversion ghec %}outside collaborator {% endif %}invitations to organization owners, {% if prevent-org-admin-add-outside-collaborator %}restrict {% ifversion ghec %}outside collaborator {% endif %}invitations to enterprise owners, {% endif %}or allow organization owners to administer the setting on the organization level.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.repositories-tab %}
3. Under "Repository {% ifversion ghec %}outside collaborators{% elsif ghes or ghae %}invitations{% endif %}", review the information about changing the setting. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
4. Under "Repository {% ifversion ghec %}outside collaborators{% elsif ghes or ghae %}invitations{% endif %}", use the drop-down menu and choose a policy.
  {% ifversion ghec %}
  ![外部コラボレーター招待ポリシーオプションのドロップダウンメニュー](/assets/images/help/business-accounts/repository-invitation-policy-drop-down.png)
  {% elsif ghes or ghae %}
  ![Drop-down menu with invitation policy options](/assets/images/enterprise/business-accounts/repository-invitation-policy-drop-down.png)
  {% endif %}

{% ifversion ghec or ghes or ghae %}

## Enforcing a policy for the default branch name

Across all organizations owned by your enterprise, you can set the default branch name for any new repositories that members create. すべての Organization 全体でそのデフォルトブランチ名を施行することも、Organization ごとに異なる名前を設定することもできます。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
3. [**Repository policies**] タブの [Default branch name] で、新しいリポジトリに使用するデフォルトブランチ名を入力します。 ![デフォルトブランチ名を入力するテキストフィールド](/assets/images/help/business-accounts/default-branch-name-text.png)
4. オプションで、Enterprise のすべての Organization に対してデフォルトブランチ名を施行する場合は [**Enforce across this enterprise**] を選択します。 ![[Enforcement] チェックボックス](/assets/images/help/business-accounts/default-branch-name-enforce.png)
5. [**Update**] をクリックします。 ![[Update] ボタン](/assets/images/help/business-accounts/default-branch-name-update.png)

{% endif %}

## Enforcing a policy for changes to repository visibility

Across all organizations owned by your enterprise, you can allow members with admin access to change a repository's visibility, restrict repository visibility changes to organization owners, or allow owners to administer the setting on the organization level. メンバーがリポジトリの可視性を変更できないようにした場合、Enterprise のオーナーのみがリポジトリの可視性を変更できます。

Enterprise のオーナーがリポジトリの作成を Organization のオーナーのみに制限している場合、メンバーはリポジトリの可視性を変更できません。 Enterprise のオーナーがメンバーリポジトリの作成をプライベートリポジトリのみに制限している場合、メンバーはリポジトリの可視性をプライベートにのみ変更できます。 詳しい情報については、「[リポジトリ作成のためのポリシーを設定する](#setting-a-policy-for-repository-creation)」を参照してください。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.repositories-tab %}
5. [Repository visibility change] で、設定変更についての情報を確認します。 {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}

{% data reusables.enterprise-accounts.repository-visibility-policy %}

## Enforcing a policy for repository deletion and transfer

Across all organizations owned by your enterprise, you can allow members with admin permissions to delete or transfer a repository, restrict repository deletion and transfers to organization owners, or allow owners to administer the setting on the organization level.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.repositories-tab %}
5. 「Repository deletion and transfer」で、設定変更に関する情報を確認します。 {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}

{% data reusables.enterprise-accounts.repository-deletion-policy %}

## Enforcing a policy for deleting issues

Across all organizations owned by your enterprise, you can allow members with admin access to delete issues in a repository, restrict issue deletion to organization owners, or allow owners to administer the setting on the organization level.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
3. [**Repository policies**] タブの [Repository issue deletion] で、設定変更についての情報を確認します。 {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
4. [Repository issue deletion] で、ドロップダウンメニューを使用してポリシーを選択します。 ![Issue 削除ポリシーオプションのドロップダウンメニュー](/assets/images/help/business-accounts/repository-issue-deletion-policy-drop-down.png)

{% ifversion ghes or ghae %}

## Enforcing a policy for Git push limits

リポジトリのサイズを管理しやすくして、パフォーマンスの問題を防ぐために、Enterprise 内のリポジトリのファイルサイズ制限を設定できます。

デフォルトでは、リポジトリのアップロード制限を適用すると、100MB以上のファイルの追加やアップロードができなくなります。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.options-tab %}
4. [Repository upload limit] で、ドロップダウンメニューを使用して最大オブジェクトサイズをクリックします。 ![最大オブジェクトサイズのオプションを備えたドロップダウンメニュー](/assets/images/enterprise/site-admin-settings/repo-upload-limit-dropdown.png)
5. 必要に応じて、すべてのリポジトリにアップロードの最大制限を適用するには [**Enforce on all repositories**] を選択します。 ![すべてのリポジトリにオブジェクトの最大サイズを適用するオプション](/assets/images/enterprise/site-admin-settings/all-repo-upload-limit-option.png)

## リポジトリ間のプルリクエストのためのマージコンフリクトエディタを設定する

ユーザが自分のコンピュータ上でローカルにマージコンフリクトを解決するように要求すれば、うっかりフォークから上流のリポジトリに書き込んでしまうことを回避できます。

{% data reusables.enterprise-accounts.access-enterprise %}
{% ifversion ghes or ghae %}
{% data reusables.enterprise-accounts.policies-tab %}
{% else %}
{% data reusables.enterprise-accounts.settings-tab %}
{% endif %}
{% data reusables.enterprise-accounts.options-tab %}
1. "Conflict editor for pull requests between repositories（リポジトリ間のプルリクエストのコンフリクトエディタ）"の下でドロップダウンメニューを使い、**Disabled（無効化）**を選択してください。 ![マージコンフリクトエディタを無効化するオプションを持つドロップダウンメニュー](/assets/images/enterprise/settings/conflict-editor-settings.png)

## フォースプッシュを設定する

Each repository inherits a default force push setting from the settings of the user account or organization that owns the repository. Each organization and user account inherits a default force push setting from the force push setting for the enterprise. If you change the force push setting for the enterprise, the policy applies to all repositories owned by any user or organization.

### Blocking force pushes to all repositories

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.options-tab %}
4. [Force pushes] の下のドロップダウンメニューから、[**Allow**]、[**Block**]、[**Block to the default branch**] のいずれかをクリックしてください。 ![フォースプッシュのドロップダウン](/assets/images/enterprise/site-admin-settings/force-pushes-dropdown.png)
5. [**Enforce on all repositories（すべてのリポジトリに強制）**] を選択して、フォースプッシュに関する Organization およびリポジトリレベルの設定をオーバーライドすることもできます。

### 特定のリポジトリへのフォースプッシュをブロックする

{% data reusables.enterprise_site_admin_settings.override-policy %}

{% data reusables.enterprise_site_admin_settings.sign-in %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.repository-search %}
{% data reusables.enterprise_site_admin_settings.click-repo %}
{% data reusables.enterprise_site_admin_settings.admin-top-tab %}
{% data reusables.enterprise_site_admin_settings.admin-tab %}
4. [**Push and Pull**] の下で [**Block**] または [**Block to the default branch**] を選択してください。 ![フォースプッシュのブロック](/assets/images/enterprise/site-admin-settings/repo/repo-block-force-pushes.png)

### ユーザアカウントもしくはOrganizationが所有するリポジトリへのフォースプッシュのブロック

リポジトリは、所属するユーザアカウントもしくはOrganizationからフォースプッシュの設定を引き継ぎます。 そして、それぞれの Organization およびユーザアカウントは、フォースプッシュの設定を Enterprise のフォースプッシュの設定から引き継ぎます。

引き継がれたデフォルトの設定は、ユーザアカウントもしくはOrganizationの設定をすることで上書きできます。

{% data reusables.enterprise_site_admin_settings.sign-in %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.search-user-or-org %}
{% data reusables.enterprise_site_admin_settings.click-user-or-org %}
{% data reusables.enterprise_site_admin_settings.admin-top-tab %}
{% data reusables.enterprise_site_admin_settings.admin-tab %}
5. [Repository default settings（リポジトリのデフォルト設定）] の下の [Force pushes（フォースプッシュ）] セクションで、以下から選択してください。
    - [**Block（ブロック）**] ですべてのブランチへのフォースプッシュがブロックされます。
    - [**Block to the default branch（デフォルトブランチへのブロック）**] でデフォルトブランチへのフォースプッシュのみがブロックされます。 ![フォースプッシュのブロック](/assets/images/enterprise/site-admin-settings/user/user-block-force-pushes.png)
6. **Enforce on all repositories（すべてのリポジトリに対して強制）**を選択して、リポジトリ固有の設定を上書きすることもできます。 これは、Enterprise 全体のポリシーを**上書きしません**のでご注意ください。 ![フォースプッシュのブロック](/assets/images/enterprise/site-admin-settings/user/user-block-all-force-pushes.png)

{% endif %}

{% ifversion ghes %}

## 匿名 Git 読み取りアクセスを設定する

{% data reusables.enterprise_user_management.disclaimer-for-git-read-access %}

{% ifversion ghes %} Enterprise で[プライベートモードを有効化](/enterprise/admin/configuration/enabling-private-mode)している場合は、{% else %}{% endif %}リポジトリ管理者がパブリックリポジトリへの匿名 Git 読み取りアクセスを有効化できるようにすることができます。

匿名 Git 読み取りアクセスを有効化すると、ユーザは Enterprise 上のカスタムツールの認証をバイパスできるようになります。 あなたもしくはリポジトリ管理者がこのアクセス設定をリポジトリで有効化すると、認証を受けていない Git の操作 (そして {% data variables.product.product_name %} へのネットワークアクセスができる人はだれでも) は、認証なしでリポジトリに読み取りアクセスできることになります。

必要に応じて、リポジトリのアクセス設定をロックすることで、リポジトリ管理者が Enterprise のリポジトリの匿名 Git アクセス設定を変更不可にすることができます。 リポジトリのGit読み取りアクセス設定をロックすると、サイト管理者だけがこの設定を変更できるようになります。

{% data reusables.enterprise_site_admin_settings.list-of-repos-with-anonymous-git-read-access-enabled %}

{% data reusables.enterprise_user_management.exceptions-for-enabling-anonymous-git-read-access %}

### すべてのリポジトリに対する匿名 Git 読み取りアクセスを設定する

{% data reusables.enterprise-accounts.access-enterprise %}
{% ifversion ghes or ghae %}
{% data reusables.enterprise-accounts.policies-tab %}
{% else %}
{% data reusables.enterprise-accounts.settings-tab %}
{% endif %}
{% data reusables.enterprise-accounts.options-tab %}
4. [Anonymous Git read access（匿名 Git 読み取りアクセス）] の下で、ドロップダウンメニューを使って [**Enabled（有効化）**] をクリックしてください。 ![[Enabled] と [Disabled] のメニューオプションが表示されている [Anonymous Git read access] ドロップダウンメニュー](/assets/images/enterprise/site-admin-settings/enable-anonymous-git-read-access.png)
3. Enterprise のすべてのリポジトリでリポジトリ管理者が匿名 Git 読み取りアクセス設定を変更するのを避けるために、[**Prevent repository admins from changing anonymous Git read access**] を選択することもできます。 ![Enterprise のすべてのリポジトリへの匿名 Git 読み取りアクセス設定をリポジトリ管理者が変更するのを避けるための選択チェックボックス](/assets/images/enterprise/site-admin-settings/globally-lock-repos-from-changing-anonymous-git-read-access.png)

### 特定のリポジトリでの匿名 Git 読み取りアクセスを設定する

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.repository-search %}
{% data reusables.enterprise_site_admin_settings.click-repo %}
{% data reusables.enterprise_site_admin_settings.admin-top-tab %}
{% data reusables.enterprise_site_admin_settings.admin-tab %}
6. "Danger Zone（危険区域）"の下で、"Enable Anonymous Git read access（匿名Git読み取りアクセスの有効化）"の隣の**Enable（有効化）**をクリックしてください。 ![リポジトリのサイト管理設定の危険地域内の "匿名 Git 読み取りアクセスの有効化" の下の "有効化" ボタン ](/assets/images/enterprise/site-admin-settings/site-admin-enable-anonymous-git-read-access.png)
7. 変更を確認します。 確定するには、[**Yes, enable anonymous Git read access**] をクリックします。 ![ポップアップウィンドウの [Confirm anonymous Git read access] 設定](/assets/images/enterprise/site-admin-settings/confirm-anonymous-git-read-access-for-specific-repo-as-site-admin.png)
8. このリポジトリの設定をリポジトリ管理者が変更するのを避けるために、[**Prevent repository admins from changing anonymous Git read access（リポジトリ管理者による匿名Git読み取りアクセスの変更の回避）**] を選択することもできます。 ![このリポジトリへの匿名Git読み取りアクセス設定をリポジトリ管理者が変更するのを避けるための選択チェックボックス](/assets/images/enterprise/site-admin-settings/lock_anonymous_git_access_for_specific_repo.png)

{% endif %}
