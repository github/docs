---
title: Enterprise アカウントでリポジトリ管理ポリシーを施行する
intro: Enterprise のオーナーは、自分の Enterprise のアカウントが所有するすべての Organization に対して特定のリポジトリの管理ポリシーを強制したり、Organization ごとのポリシーの設定を許可したりすることができます。
product: '{% data reusables.gated-features.enterprise-accounts %}'
redirect_from:
  - /articles/enforcing-repository-management-settings-for-organizations-in-your-business-account/
  - /articles/enforcing-repository-management-policies-for-organizations-in-your-enterprise-account/
  - /articles/enforcing-repository-management-policies-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/enforcing-repository-management-policies-in-your-enterprise-account
versions:
  free-pro-team: '*'
topics:
  - Enterprise
---

詳細は「[Organization のためのリポジトリの権限レベル](/articles/repository-permission-levels-for-an-organization)」を参照してください。

### デフォルトのリポジトリの権限に関するポリシーを施行する

自分の Enterprise アカウントによって所有されているすべての Organization 全体で、デフォルトのリポジトリ権限レベル (なし、読み取り、書き込み、管理) を Organization のメンバー用に設定したり、オーナーが Organization レベルで設定を管理できるようにしたりできます。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
4. [**Repository policies**] タブの [Default permissions] で、設定変更についての情報を読みます。 {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. [Default permissions] で、ドロップダウンメニューを使用してポリシーを選択します。 ![リポジトリ権限ポリシーオプションのドロップダウンメニュー](/assets/images/help/business-accounts/repository-permissions-policy-drop-down.png)

### リポジトリの作成に関するポリシーを施行する

自分の Enterprise アカウントで所有しているすべての Organization 全体で、メンバーがリポジトリを作成したり、Organization のオーナーへのリポジトリの作成を制限したり、オーナーが Organization レベルで設定を管理できるようにしたりできます。 メンバーにリポジトリの作成を許可する場合は、パブリック、プライベート、内部の各リポジトリをどう組み合わせて作成するかを任意に選択できます。 {% data reusables.repositories.internal-repo-default %} 詳しい情報については「[内部リポジトリを作成する](/articles/creating-an-internal-repository)」を参照してください。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
3. [**Repository policies**] タブの [Repository creation] で、設定変更についての情報を読みます。 {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
{% data reusables.enterprise-accounts.repo-creation-policy %}
{% data reusables.enterprise-accounts.repo-creation-types %}
6. [**Save**] をクリックします。

### プライベートまたは内部リポジトリのフォークに関するポリシーを施行する

自分の Enterprise アカウントで所有しているすべての Organization 全体で、ユーザーにリポジトリのフォーク用にプライベートまたは内部リポジトリへのアクセスを許可したり、プライベートまたは内部リポジトリのフォークを一切禁止したり、オーナーが Organization レベルで設定を管理できるようにしたりできます。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
3. [**Repository policies**] タブの [Repository forking] で、設定変更についての情報を読みます。 {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
4. [Repository forking] で、ドロップダウンメニューを使用してポリシーを選択します。 ![リポジトリ フォーク ポリシー オプションのドロップダウンメニュー](/assets/images/help/business-accounts/repository-forking-policy-drop-down.png)

### 外部コラボレーターのリポジトリへの招待に関するポリシーを施行する

自分の企業アカウントで所有しているすべての Organization 全体で、メンバーが外部コラボレーターをリポジトリに招待したり、外部コラボレーターの Organization オーナーへの招待を制限したり、オーナーが Organization レベルで設定を管理できるようにしたりできます。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
3. [**Repository policies**] タブの [Repository invitations] で、設定変更についての情報を確認します。 {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
4. Under "Repository invitations", use the drop-down menu and choose a policy. ![外部コラボレーター招待ポリシーオプションのドロップダウンメニュー](/assets/images/help/business-accounts/repository-invitation-policy-drop-down.png)

### リポジトリの表示の変更に関するポリシーを施行する

自分の Enterprise アカウントで所有しているすべての Organization 全体で、管理者権限を持つメンバーがリポジトリの表示を変更したり、Organization のオーナーへのリポジトリの表示の変更を制限したり、オーナーが Organization レベルで設定を管理できるようにしたりできます。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
3. [**Repository policies**] タブの [Repository visibility change] で、設定変更についての情報を確認します。 {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
{% data reusables.enterprise-accounts.repository-visibility-policy %}

### リポジトリの削除または移譲に関するポリシーを施行する

自分の Enterprise アカウントで所有しているすべての Organization 全体で、管理者権限を持つメンバーがリポジトリを削除または転送したり、Organization のオーナーへのリポジトリの削除と転送を制限したり、オーナーが Organization レベルで設定を管理できるようにしたりできます。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
3. [**Repository policies**] タブの [Repository deletion and transfer] で、設定変更についての情報を確認します。 {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
{% data reusables.enterprise-accounts.repository-deletion-policy %}

### Issue の削除に関するポリシーを施行する

自分のEnterprise アカウントで所有しているすべての Organization 全体で、管理者権限を持つメンバーがリポジトリ内の Issue を削除したり、Organization のオーナーに対して Issue の削除を制限したり、オーナーが Organization レベルで設定を管理できるようにしたりできます。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
3. [**Repository policies**] タブの [Repository issue deletion] で、設定変更についての情報を確認します。 {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
4. [Repository issue deletion] で、ドロップダウンメニューを使用してポリシーを選択します。 ![Issue 削除ポリシーオプションのドロップダウンメニュー](/assets/images/help/business-accounts/repository-issue-deletion-policy-drop-down.png)

### デフォルトブランチ名に関するポリシーを試行する

Enterprise アカウントによって所有されているすべての Organization 全体で、メンバーが作成する新しいリポジトリのデフォルトブランチ名を設定できます。 すべての Organization 全体でそのデフォルトブランチ名を施行することも、Organization ごとに異なる名前を設定することもできます。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
3. [**Repository policies**] タブの [Default branch name] で、新しいリポジトリに使用するデフォルトブランチ名を入力します。 ![デフォルトブランチ名を入力するテキストフィールド](/assets/images/help/business-accounts/default-branch-name-text.png)
4. オプションで、Enterprise のすべての Organization に対してデフォルトブランチ名を施行する場合は [**Enforce across this enterprise**] を選択します。 ![[Enforcement] チェックボックス](/assets/images/help/business-accounts/default-branch-name-enforce.png)
5. [**Update**] をクリックします。 ![[Update] ボタン](/assets/images/help/business-accounts/default-branch-name-update.png)
