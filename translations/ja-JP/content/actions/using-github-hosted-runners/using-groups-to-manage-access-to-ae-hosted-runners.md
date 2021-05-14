---
title: Using groups to manage access to AE hosted runners
intro: 'You can use policies to limit access to {% data variables.actions.hosted_runner %}s that have been added to an organization or enterprise.'
versions:
  github-ae: '*'
---

{% data reusables.actions.ae-beta %}

### About {% data variables.actions.hosted_runner %} groups

{% data variables.actions.hosted_runner %} groups are used to control access to {% data variables.actions.hosted_runner %}s at the organization and enterprise level. Enterprise の管理者は、Enterprise 内のどの Organization がランナーグループにアクセスできるかを制御するアクセスポリシーを設定できます。 Organization の管理者は、Organization 内のどのリポジトリがランナーグループにアクセスできるかを制御するアクセスポリシーを設定できます。

When an enterprise admin grants an organization access to a runner group, organization admins can see the runner group listed in the organization's {% data variables.actions.hosted_runner %} settings. Organization の管理者は、追加の詳細なリポジトリアクセスポリシーを Enterprise ランナーグループに割り当てることができます。

新しいランナーが作成されると、それらは自動的にデフォルトグループに割り当てられます。 ランナーは一度に1つのグループにのみ参加できます。 ランナーはデフォルトグループから別のグループに移動できます。 For more information, see "[Moving an {% data variables.actions.hosted_runner %} to a group](#moving-an-ae-hosted-runner-to-a-group)."

### Creating an {% data variables.actions.hosted_runner %} group for an organization

All organizations have a single default {% data variables.actions.hosted_runner %} group. Organizations within an enterprise account can create additional runner groups. Organization の管理者は、個々のリポジトリにランナーグループへのアクセスを許可できます。

{% data variables.actions.hosted_runner %}s are automatically assigned to the default group when created, and can only be members of one group at a time. ランナーはデフォルトグループから作成した任意のグループに移動できます。

グループを作成する場合、ランナーグループにアクセスできるリポジトリを定義するポリシーを選択する必要があります。

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.settings-sidebar-actions %}
1. [**Self-hosted runners**] セクションで、[**Add new**] をクリックし、次に [**New group**] をクリックします。

    ![新しいランナーを追加](/assets/images/help/settings/actions-hosted-runner-add-new-group.png)

1. ランナーグループの名前を入力し、リポジトリアクセスのポリシーを割り当てます。

     You can configure a runner group to be accessible to a specific list of repositories, or to all repositories in the organization. By default, only private repositories can access runners in a runner group, but you can override this. ![ランナーグループのオプションを追加](/assets/images/help/settings/actions-org-add-runner-group-options.png)

1. [**Save group**] をクリックしてグループを作成し、ポリシーを適用します。

### Creating an {% data variables.actions.hosted_runner %} group for an enterprise

Enterprises can add their {% data variables.actions.hosted_runner %}s to groups for access management. Enterprises can create groups of {% data variables.actions.hosted_runner %}s that are accessible to specific organizations in the enterprise account. Organization の管理者は、追加の詳細なリポジトリアクセスポリシーを Enterprise ランナーグループに割り当てることができます。

{% data variables.actions.hosted_runner %}s are automatically assigned to the default group when created, and can only be members of one group at a time. 登録処理中にランナーを特定のグループに割り当てることも、後でランナーをデフォルトグループからカスタムグループに移動することもできます。

グループを作成するときは、ランナーグループにアクセスできる Organization を定義するポリシーを選択する必要があります。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
1. [**Self-hosted runners**] タブをクリックします。
1. [**Add new**] をクリックしてから、[**New group**] をクリックします。

    ![新しいランナーを追加](/assets/images/help/settings/actions-hosted-runner-add-new-group.png)

1. ランナーグループの名前を入力し、Organization アクセスのポリシーを割り当てます。

   You can configure a runner group to be accessible to a specific list of organizations, or all organizations in the enterprise.  By default, only private repositories can access runners in a runner group, but you can override this. ![ランナーグループのオプションを追加](/assets/images/help/settings/actions-enterprise-account-add-runner-group-options.png)

1. [**Save group**] をクリックしてグループを作成し、ポリシーを適用します。

### Changing the access policy of an {% data variables.actions.hosted_runner %} group

ランナーグループのアクセスポリシーを更新したり、ランナーグループの名前を変更したりすることができます。

{% data reusables.github-actions.hosted-runner-configure-runner-group-access %}

### Moving an {% data variables.actions.hosted_runner %} to a group

New {% data variables.actions.hosted_runner %}s are automatically assigned to the default group, and can then be moved to another group.

1. In the **Self-hosted runners** section of the settings page, locate the current group of the runner you want to move and expand the list of group members. ![ランナーグループのメンバーを表示](/assets/images/help/settings/actions-hosted-runner-group-members.png)
1. Select the checkbox next to the runner, and then click **Move to group** to see the available destinations. ![ランナーグループのメンバーを移動](/assets/images/help/settings/actions-hosted-runner-group-member-move.png)
1. To move the runner, click on the destination group. ![ランナーグループのメンバーを移動](/assets/images/help/settings/actions-hosted-runner-group-member-move-destination.png)

### Removing an {% data variables.actions.hosted_runner %} group

{% data variables.actions.hosted_runner %}s are automatically returned to the default group when their group is removed.

1. 設定ページの [**Self-hosted runners**] セクションで、削除するグループを見つけて、{% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} ボタンをクリックします。 ![ランナーグループの設定を表示](/assets/images/help/settings/actions-hosted-runner-group-kebab.png)

1. グループを削除するには、[**Remove group**] をクリックします。

    ![ランナーグループの設定を表示](/assets/images/help/settings/actions-hosted-runner-group-remove.png)

1. 確認プロンプトを確認し、[**Remove this runner group**] をクリックします。
