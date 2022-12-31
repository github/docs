---
title: Enterprise でリポジトリ管理ポリシーを適用する
intro: エンタープライズの組織内でリポジトリ管理のポリシーを適用することや、各組織でポリシーを設定することができます。
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
ms.openlocfilehash: 10b34ef1d0049ca68e1b0ec655f9d6351c06d396
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192642'
---
## Enterprise でのリポジトリ管理のポリシーについて

{% data variables.product.product_name %} で Enterprise のメンバーによるリポジトリ管理の方法を制御するポリシーを適用できます。 また、Organization 所有者がリポジトリ管理のポリシーを管理できるようにすることもできます。 詳しい情報については、「[リポジトリの作成と管理](/repositories/creating-and-managing-repositories)」と「[Organization とチーム](/organizations)」を参照してください。

{% ifversion ghes or ghae %}

## 新しいリポジトリの既定の可視性を構成する

ユーザーが Enterprise 内に新しいリポジトリを作成するたびに、そのユーザーはリポジトリの可視性を選ぶ必要があります。 その Enterprise のデフォルトの可視性の設定をする際には、デフォルトで選択される可視性を選択します。 リポジトリの可視性の詳細については、「[リポジトリについて](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)」を参照してください。

Enterprise オーナーがメンバーによる特定のタイプのリポジトリの作成を禁止している場合、可視性設定がデフォルトでそのタイプに設定されていても、メンバーはそのタイプのリポジトリを作成できません。 詳細については、「[リポジトリ作成のためのポリシーの適用](#enforcing-a-policy-for-repository-creation)」を参照してください。

{% data reusables.enterprise-accounts.access-enterprise %} {% ifversion ghes or ghae %} {% data reusables.enterprise-accounts.policies-tab %} {% else %} {% data reusables.enterprise-accounts.settings-tab %} {% endif %} {% data reusables.enterprise-accounts.options-tab %}
1. "Default repository visibility（デフォルトのリポジトリの可視性）"の下で、ドロップダウンメニューを使ってデフォルトの可視性を選択してください。
  ![Enterprise の既定のリポジトリ可視性を選ぶドロップダウン メニュー](/assets/images/enterprise/site-admin-settings/default-repository-visibility-settings.png)

{% data reusables.enterprise_installation.image-urls-viewable-warning %}

{% endif %}

## ベース リポジトリ権限ポリシーを適用する

自分の Enterprise が所有するすべての Organization で、Organization のメンバーに対してベース リポジトリ権限レベル (なし、読み取り、書き込み、または管理者) を設定したり、所有者が Organization レベルでの設定を管理できるようにしたりすることができます。

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.repositories-tab %}
4. [基本の権限] で、設定の変更に関する情報を確認します。 {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. [基本の権限] で、ドロップダウン メニューを使って、ポリシーを選びます。
  ![リポジトリ権限ポリシー オプションのドロップダウン メニュー](/assets/images/help/business-accounts/repository-permissions-policy-drop-down.png)


## リポジトリ作成に関するポリシーを適用する

Enterprise で所有しているすべての Organization 全体で、メンバーがリポジトリを作成できるようにしたり、リポジトリの作成を Organization の所有者に限定したり、所有者が Organization レベルで設定を管理できるようにしたりできます。 

メンバーが Organization 内でリポジトリを作成できるようにする場合は、メンバーが作成できるリポジトリの種類 (パブリック、プライベート、内部) を選ぶことができます。

{% ifversion enterprise-namespace-repo-setting %} {% ifversion ghec %}Enterprise で {% data variables.product.prodname_emus %} を使う場合は、{% else %}{% endif %}ユーザーが自分のユーザー アカウントで所有しているリポジトリを作成できないようすることができます。
{% endif %}

{% data reusables.repositories.internal-repo-default %}内部リポジトリの詳しい情報については、「[内部リポジトリを作成する](/articles/creating-an-internal-repository)」を参照してください。

{% data reusables.organizations.repo-creation-constants %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.repositories-tab %}
5. [Repository creation] で、設定変更に関する情報を読みます。 {% data reusables.enterprise-accounts.view-current-policy-config-orgs %} {% data reusables.enterprise-accounts.repo-creation-policy %} {% data reusables.enterprise-accounts.repo-creation-types %}{% ifversion enterprise-namespace-repo-setting %}
1. {% ifversion ghec %}Enterprise で {% data variables.product.prodname_emus %} を使っており、Enterprise のメンバーが{% endif %}自分のユーザー アカウントで所有しているリポジトリを作成できないようにする場合は、必要に応じて、 **[ユーザー名前空間リポジトリの作成をブロックする]** を選んでください。
  ![フォーク ポリシーによって無効にされたオプションのリストを示すスクリーンショット。](/assets/images/help/business-accounts/restrict-personal-namespace-enabled-setting.png){% endif %}

## プライベートまたは内部リポジトリのフォークに関するポリシーを適用する
Enterprise が所有しているすべての Organization 全体で、ユーザーにリポジトリのフォーク用にプライベートまたは内部リポジトリへのアクセスを許可したり、プライベートまたは内部リポジトリのフォークを一切禁止したり、オーナーが Organization レベルで設定を管理できるようにしたりすることができます。

{% ifversion org-owners-limit-forks-creation %} 管理者アクセス許可を持つ人はフォーク ポリシーをさらに細かく設定できます。 詳細については、「[Organization のフォーク ポリシーを管理する](/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization)」を参照してください。
{% endif %}

{% ifversion enterprise-namespace-repo-setting %} {% note %}

**メモ:** {% ifversion ghec %}Enterprise で {% data variables.product.prodname_emus %} を使っており、{% endif %}"リポジトリ作成" ポリシーによって Enterprise のメンバーが自分のユーザー アカウントで所有しているリポジトリを作成できない場合は、"リポジトリ作成" ポリシーにかかわらず、メンバーが自分のユーザー アカウントでリポジトリをフォークすることはできません。

{% endnote %} {% endif %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.repositories-tab %}
1. [リポジトリのフォーク] で、設定変更についての情報を確認します。 {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
2. [Repository forking] で、ドロップダウンメニューを使用してポリシーを選択します。

  ![リポジトリ フォーク ポリシーのオプションを含むドロップダウン メニュー](/assets/images/help/business-accounts/repository-forking-policy-drop-down.png){% ifversion innersource-fork-policies %}
5. フォークが有効な場合、リポジトリのフォークをユーザーに許可する場所を指定できます。 設定の変更に関する情報を確認し、ポリシーを選びます。

    ![リポジトリ フォーク ポリシー オプションのリストを示すスクリーンショット](/assets/images/help/business-accounts/repository-forking-policy-settings.png){% endif %}
  
## リポジトリへの{% ifversion ghec %}外部{% endif %}コラボレーターの招待に関するポリシーを適用する

エンタープライズが所有しているすべての組織全体で、メンバーが{% ifversion ghec %}外部{% endif %}コラボレーターをリポジトリに招待できるようにすること、{% ifversion ghec %}外部コラボレーターの{% endif %}招待を組織所有者に限定すること、{% ifversion prevent-org-admin-add-outside-collaborator %}{% ifversion ghec %}外部コラボレーターの{% endif %}招待をエンタープライズ所有者に限定すること、{% endif %}組織所有者が組織レベルで設定を管理できるようにすることができます。

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.repositories-tab %}
3. [リポジトリへの{% ifversion ghec %}外部コラボレーターの{% elsif ghes or ghae %}招待{% endif %}] で、設定変更についての情報を確認します。 {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
4. [リポジトリへの{% ifversion ghec %}外部コラボレーターの{% elsif ghes or ghae %}招待{% endif %}] で、ドロップダウン メニューを使ってポリシーを選びます。

  {% ifversion ghec %} ![外部コラボレーター招待ポリシーのオプションを含むドロップダウン メニュー](/assets/images/help/business-accounts/repository-invitation-policy-drop-down.png) {% elsif ghes or ghae %} ![招待ポリシーのオプションを含むドロップダウン メニュー](/assets/images/enterprise/business-accounts/repository-invitation-policy-drop-down.png)  
  {% endif %}

## 既定のブランチ名に関するポリシーを適用する

Enterprise で所有しているすべての Organization 全体で、メンバーが作成する新しいリポジトリの既定のブランチ名を設定できます。 すべての Organization 全体でそのデフォルトブランチ名を施行することも、Organization ごとに異なる名前を設定することもできます。

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %}
3. **[リポジトリのポリシー]** タブの [既定のブランチ名] に、新しいリポジトリに使う既定のブランチ名を入力します。
    ![既定のブランチ名を入力するためのテキスト ボックス](/assets/images/help/business-accounts/default-branch-name-text.png)
4. 必要に応じて、Enterprise 内のすべての Organization に既定のブランチ名を適用するには、 **[この Enterprise 全体に適用]** を選びます。
    ![強制のチェック ボックス](/assets/images/help/business-accounts/default-branch-name-enforce.png)
5. **[Update]** をクリックします。
    ![[更新] ボタン](/assets/images/help/business-accounts/default-branch-name-update.png)

## リポジトリの可視性の変更に関するポリシーを適用する

Enterprise で所有しているすべての Organization 全体で、管理者アクセス権を持つメンバーがリポジトリの可視性を変更できるようにしたり、リポジトリの可視性の変更を Organization 所有者に限定したり、所有者が Organization レベルで設定を管理できるようにしたりできます。 メンバーがリポジトリの可視性を変更できないようにした場合、Enterprise のオーナーのみがリポジトリの可視性を変更できます。

Enterprise のオーナーがリポジトリの作成を Organization のオーナーのみに制限している場合、メンバーはリポジトリの可視性を変更できません。 Enterprise のオーナーがメンバーリポジトリの作成をプライベートリポジトリのみに制限している場合、メンバーはリポジトリの可視性をプライベートにのみ変更できます。 詳細については、「[リポジトリ作成のためのポリシーの適用](#enforcing-a-policy-for-repository-creation)」を参照してください。

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.repositories-tab %}
1. [Repository visibility change] で、設定変更についての情報を確認します。 {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
1. "Repository visibility change（リポジトリの可視性の変更）"の下で、ドロップダウンメニューを使ってポリシーを選択してください。
   ![リポジトリの可視性のポリシーのオプションがあるドロップダウン メニュー](/assets/images/help/business-accounts/repository-visibility-policy-drop-down.png)

## リポジトリの削除と転送に関するポリシーを適用する

Enterprise で所有しているすべての Organization 全体で、管理者権限を持つメンバーがリポジトリを削除または転送できるようにしたり、リポジトリの削除と転送を Organization 所有者に限定したり、所有者が Organization レベルで設定を管理できるようにしたりできます。

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.repositories-tab %}
5. 「Repository deletion and transfer」で、設定変更に関する情報を確認します。 {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}

{% data reusables.enterprise-accounts.repository-deletion-policy %}

## Issue の削除に関するポリシーを適用する

Enterprise で所有しているすべての Organization 全体で、管理者アクセス権を持つメンバーがリポジトリ内の Issue を削除できるようにしたり、Issue の削除を Organization 所有者に限定したり、所有者が Organization レベルで設定を管理できるようにしたりできます。

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %}
3. **[リポジトリのポリシー]** タブの [リポジトリの Issue の削除] で、設定変更についての情報を確認します。 {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
4. [Repository issue deletion] で、ドロップダウンメニューを使用してポリシーを選択します。

  ![Issue 削除ポリシーのオプションを含むドロップダウン メニュー](/assets/images/help/business-accounts/repository-issue-deletion-policy-drop-down.png)

{% ifversion ghes or ghae %}

## Git プッシュ制限に関するポリシーを適用する

リポジトリのサイズを管理しやすくして、パフォーマンスの問題を防ぐために、Enterprise 内のリポジトリのファイルサイズ制限を設定できます。

デフォルトでは、リポジトリのアップロード制限を適用すると、100MB以上のファイルの追加やアップロードができなくなります。

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.options-tab %}
4. [Repository upload limit] で、ドロップダウンメニューを使用して最大オブジェクトサイズをクリックします。
![最大オブジェクト サイズのオプションを含むドロップダウン メニュー](/assets/images/enterprise/site-admin-settings/repo-upload-limit-dropdown.png)
5. 必要に応じて、Enterprise 内のすべてのリポジトリに対して最大アップロード制限を適用するには、 **[すべてのリポジトリに適用]** を選びます。
![すべてのリポジトリに最大オブジェクト サイズを適用するオプション](/assets/images/enterprise/site-admin-settings/all-repo-upload-limit-option.png)

{% ifversion profile-name-enterprise-setting %}

## リポジトリにメンバー名を表示するためのポリシーの適用

Enterprise で所有しているすべての Organization 全体で、メンバーに対して、パブリックと内部リポジトリの issue や pull request で、ユーザー名に加え、コメント作成者のプロファイル名の表示を許可することができます。

![コメントに表示されたコメント作者の名前](/assets/images/help/issues/commenter-full-name.png)

{% note %}

**注:** このポリシーが Enterprise 内のすべてのリポジトリに適用されると、プライベート リポジトリの Organization 設定がオーバーライドされます。 詳しくは、「[Organization のメンバー名表示を管理する](/organizations/managing-organization-settings/managing-the-display-of-member-names-in-your-organization)」を参照してください。

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.options-tab %}
4. [パブリックと内部リポジトリでコメント作成者のプロファイル名を表示することをメンバーに許可する] で、ドロップダウン メニューを選び、ポリシーをクリックします。
![ポリシー ドロップダウンが強調された [オプション] ページのスクリーンショット](/assets/images/enterprise/site-admin-settings/comment-authors-profile-name-drop-down.png)
5. 必要に応じて、Enterprise 内のすべてのリポジトリにプロファイル名の表示を適用するには、 **[インスタンス上のすべてのリポジトリに適用]** を選びます。
![強調されている [すべてのリポジトリに適用] オプションのスクリーンショット](/assets/images/enterprise/site-admin-settings/enforce-for-all-repositories-option.png)

{% endif %}

## リポジトリ間のプルリクエストのためのマージコンフリクトエディタを設定する

ユーザが自分のコンピュータ上でローカルにマージコンフリクトを解決するように要求すれば、うっかりフォークから上流のリポジトリに書き込んでしまうことを回避できます。

{% data reusables.enterprise-accounts.access-enterprise %} {% ifversion ghes or ghae %} {% data reusables.enterprise-accounts.policies-tab %} {% else %} {% data reusables.enterprise-accounts.settings-tab %} {% endif %} {% data reusables.enterprise-accounts.options-tab %}
1. [リポジトリ間の pull request の競合エディター] で、ドロップダウン メニューを使って **[無効]** を選びます。
 ![マージ競合エディターを無効にするオプションを含むドロップダウン メニュー](/assets/images/enterprise/settings/conflict-editor-settings.png)

## フォースプッシュを設定する

各リポジトリは、リポジトリを所有するユーザー アカウントまたは Organization の設定から既定の強制プッシュ設定を継承します。 各 Organization とユーザー アカウントは、Enterprise の強制プッシュ設定から既定の強制プッシュ設定を継承します。 Enterprise の強制プッシュ設定を変更した場合、ポリシーは任意のユーザーまたは Organization が所有しているすべてのリポジトリに適用されます。

### すべてのリポジトリへの強制プッシュをブロックする

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.options-tab %}
4. [強制プッシュ] で、ドロップダウン メニューを使って、 **[許可]** 、 **[ブロック]** 、または **[既定ブランチへのブロック]** をクリックします。
![強制プッシュのドロップダウン](/assets/images/enterprise/site-admin-settings/force-pushes-dropdown.png)
5. 必要に応じて、 **[すべてのリポジトリで強制]** を選ぶと、Organization およびリポジトリ レベルの強制プッシュの設定がオーバーライドされます。

### 特定のリポジトリへのフォースプッシュをブロックする

{% data reusables.enterprise_site_admin_settings.override-policy %}

{% data reusables.enterprise_site_admin_settings.sign-in %} {% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.repository-search %} {% data reusables.enterprise_site_admin_settings.click-repo %} {% data reusables.enterprise_site_admin_settings.admin-top-tab %} {% data reusables.enterprise_site_admin_settings.admin-tab %}
4. **[プッシュとプル]** で、 **[ブロック]** または **[既定ブランチへのブロック]** を選びます。
   ![強制プッシュのブロック](/assets/images/enterprise/site-admin-settings/repo/repo-block-force-pushes.png)

### ユーザアカウントもしくはOrganizationが所有するリポジトリへのフォースプッシュのブロック

リポジトリは、所属するユーザアカウントもしくはOrganizationからフォースプッシュの設定を引き継ぎます。 そして、それぞれの Organization およびユーザアカウントは、フォースプッシュの設定を Enterprise のフォースプッシュの設定から引き継ぎます。

引き継がれたデフォルトの設定は、ユーザアカウントもしくはOrganizationの設定をすることで上書きできます。

{% data reusables.enterprise_site_admin_settings.sign-in %} {% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.search-user-or-org %} {% data reusables.enterprise_site_admin_settings.click-user-or-org %} {% data reusables.enterprise_site_admin_settings.admin-top-tab %} {% data reusables.enterprise_site_admin_settings.admin-tab %}
5. [Repository default settings（リポジトリのデフォルト設定）] の下の [Force pushes（フォースプッシュ）] セクションで、以下から選択してください。
    - **[ブロック]** ですべてのブランチへの強制プッシュがブロックされます。
    - **[既定のブランチへのブロック]** で既定のブランチへの強制プッシュのみがブロックされます。
  ![強制プッシュのブロック](/assets/images/enterprise/site-admin-settings/user/user-block-force-pushes.png)
6. 必要に応じて、 **[すべてのリポジトリで強制]** を選ぶと、リポジトリ固有の設定がオーバーライドされます。 これは、Enterprise 全体のポリシーをオーバーライド **しない** ことに注意してください。
   ![強制プッシュのブロック](/assets/images/enterprise/site-admin-settings/user/user-block-all-force-pushes.png)

{% endif %}

{% ifversion ghes %}

## 匿名 Git 読み取りアクセスを設定する

{% data reusables.enterprise_user_management.disclaimer-for-git-read-access %}

{% data variables.location.product_location %} に対して[プライベート モードを有効にしている](/enterprise/admin/configuration/enabling-private-mode)場合、リポジトリ管理者にパブリック リポジトリへの匿名 Git 読み取りアクセスの有効化を許可できます。

匿名 Git 読み取りアクセスを有効化すると、ユーザは Enterprise 上のカスタムツールの認証をバイパスできるようになります。 ユーザーまたはリポジトリ管理者がリポジトリに対してこのアクセス設定を有効にすると、認証されていない Git 操作 (そして {% data variables.product.product_name %} へのネットワーク アクセスができる人は誰でも) が、認証なしでリポジトリに読み取りアクセスできることになります。

匿名 Git の読み取りアクセスは既定で無効になっています。{% ifversion ghes = 3.4 or ghes = 3.5 or ghes = 3.6 or ghes = 3.7 %}{% data variables.product.product_name %} 3.6 以降にアップグレードすると、匿名 Git 読み取りアクセスはアプリケーション レベルで自動的に無効になり、ポート 9418 での `git://` 接続で次のエラーが返されます。

```
The unauthenticated git protocol on port 9418 is no longer supported.
```

{% ifversion ghes > 3.5 %}

環境内で認証されていない Git プロトコルをサポートする場合は、この機能を手動で再度有効にする必要があります。 アップグレード後に次のコマンドを実行します。

```ShellSession
$ sudo ghe-config app.gitauth.git-protocol true
$ sudo ghe-config-apply
```

{% endif %}

匿名 Git 読み取りアクセスは {% data variables.product.prodname_ghe_server %} の今後のリリースで完全に削除される予定です。 {% data variables.product.company_short %} では、Git プロトコルの代わりに SSH を使用することが推奨されています。 この変更の詳細については、「[{% data variables.product.prodname_blog %}](https://github.blog/2022-06-28-improving-git-protocol-security-on-github-enterprise-server)」をご覧ください。

{% endif %}



必要に応じて、リポジトリのアクセス設定をロックすることで、リポジトリ管理者が Enterprise のリポジトリの匿名 Git アクセス設定を変更不可にすることができます。 リポジトリのGit読み取りアクセス設定をロックすると、サイト管理者だけがこの設定を変更できるようになります。

{% data reusables.enterprise_site_admin_settings.list-of-repos-with-anonymous-git-read-access-enabled %}

{% data reusables.enterprise_user_management.exceptions-for-enabling-anonymous-git-read-access %}

### すべてのリポジトリに対する匿名 Git 読み取りアクセスを設定する

{% data reusables.enterprise-accounts.access-enterprise %} {% ifversion ghes or ghae %} {% data reusables.enterprise-accounts.policies-tab %} {% else %} {% data reusables.enterprise-accounts.settings-tab %} {% endif %} {% data reusables.enterprise-accounts.options-tab %}
4. [匿名 Git 読み取りアクセス] で、ドロップダウン メニューを使って **[有効]** をクリックします。
![[有効] と [無効] のメニュー オプションを示す匿名 Git 読み取りアクセスのドロップダウン メニュー](/assets/images/enterprise/site-admin-settings/enable-anonymous-git-read-access.png)
3. 必要に応じて、リポジトリ管理者が Enterprise のすべてのリポジトリで匿名 Git 読み取りアクセスの設定を変更できないようにするには、 **[リポジトリ管理者が匿名 Git 読み取りアクセスを変更できないようにする]** を選びます。
![Enterprise のすべてのリポジトリの匿名 Git 読み取りアクセス設定をリポジトリ管理者が変更できないようにするチェック ボックスをオンにする](/assets/images/enterprise/site-admin-settings/globally-lock-repos-from-changing-anonymous-git-read-access.png)

### 特定のリポジトリでの匿名 Git 読み取りアクセスを設定する

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.repository-search %} {% data reusables.enterprise_site_admin_settings.click-repo %} {% data reusables.enterprise_site_admin_settings.admin-top-tab %} {% data reusables.enterprise_site_admin_settings.admin-tab %}
6. [危険なゾーン] で、[匿名 Git 読み取りアクセスを有効にする] の横にある **[有効にする]** をクリックします。
![リポジトリのサイト管理者設定の危険なゾーンにある [匿名 Git 読み取りアクセスを有効にする] の [有効] ボタン ](/assets/images/enterprise/site-admin-settings/site-admin-enable-anonymous-git-read-access.png)
7. 変更を確認します。 確認するには、 **[はい、匿名 Git 読み取りアクセスを有効にします]** をクリックします。
![ポップアップ ウィンドウで匿名 Git 読み取りアクセスの設定を確認する](/assets/images/enterprise/site-admin-settings/confirm-anonymous-git-read-access-for-specific-repo-as-site-admin.png)
8. 必要に応じて、リポジトリ管理者がこのリポジトリのこの設定を変更できないようにするには、 **[リポジトリ管理者が匿名 Git 読み取りアクセスを変更できないようにする]** を選びます。
![このリポジトリへの匿名 Git 読み取りアクセスの設定をリポジトリ管理者が変更できないようにするチェック ボックスをオンにする](/assets/images/enterprise/site-admin-settings/lock_anonymous_git_access_for_specific_repo.png)

{% endif %}
