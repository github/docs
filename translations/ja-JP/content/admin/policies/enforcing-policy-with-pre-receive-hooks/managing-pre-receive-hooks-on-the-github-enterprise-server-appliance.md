---
title: GitHub Enterprise Server アプライアンスで pre-receive フックを管理する
intro: 'pre-receive フックの {% data variables.product.prodname_ghe_server %} アプライアンス内での利用方法を設定する'
redirect_from:
  - /enterprise/admin/developer-workflow/managing-pre-receive-hooks-on-the-github-enterprise-server-appliance
  - /enterprise/admin/guides/developer-workflow/managing-pre-receive-hooks-on-the-github-enterprise-appliance
  - /enterprise/admin/policies/managing-pre-receive-hooks-on-the-github-enterprise-server-appliance
  - /admin/policies/managing-pre-receive-hooks-on-the-github-enterprise-server-appliance
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Policies
  - Pre-receive hooks
shortTitle: Manage pre-receive hooks
ms.openlocfilehash: 0e57f86b9a15d5001d6ab0d9f20578690ab5361f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145112502'
---
## pre-receiveフックの作成

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.hooks-tab %}
4. **[Add pre-receive hook]\(pre-receive フックを追加する\)** をクリックします。
![pre-receive フックを追加する](/assets/images/enterprise/site-admin-settings/add-pre-receive-hook.png)
5. **[Hook name]\(フック名\)** フィールドに、作成するフックの名前を入力します。
![pre-receive フックに名前を付ける](/assets/images/enterprise/site-admin-settings/hook-name.png)
6. **[Environment]\(環境\)** ドロップダウン メニューから、フックを実行する環境を選びます。
![フックの環境](/assets/images/enterprise/site-admin-settings/environment.png)
7. **[Script]\(スクリプト\)** の下にある **[Select hook repository]\(フック リポジトリの選択\)** ドロップダウン メニューから、pre-receive フック スクリプトを含むリポジトリを選びます。 **[Select file]\(ファイルの選択\)** ドロップダウン メニューから、pre-receive フック スクリプトのファイル名を選びます。
![フック スクリプト](/assets/images/enterprise/site-admin-settings/hook-script.png)
8. スクリプトを強制するには、 **[Use the exit-status to accept or reject pushes]\(プッシュを受け入れるか拒否するかを終了ステータスで決める\)** を選びます。 このオプションの選択を外すと、終了ステータスの値が無視され、スクリプトをテストできるようになります。 このモードでは、スクリプトの出力はコマンドラインでユーザに見えますが、Web インターフェースには表示されません。
![終了ステータスを使う](/assets/images/enterprise/site-admin-settings/use-exit-status.png)
9. すべてのリポジトリ上で pre-receive フックを実行する場合は、 **[Enable this pre-receive hook on all repositories by default]\(既定ですべてのリポジトリ上でこの pre-receive フックを有効にする\)** を選びます。
![すべてのリポジトリでフックを有効にする](/assets/images/enterprise/site-admin-settings/enable-hook-all-repos.png)
10. 管理者または所有者アクセス許可を持つ組織メンバーが、この pre-receive フックを有効にするか無効にするかを選択できるようにするには、 **[Administrators can enable and disable this hook]\(管理者はこのフックを有効および無効にすることができる\)** を選びます。
![管理者によるフックの有効化または無効化](/assets/images/enterprise/site-admin-settings/admins-enable-hook.png)

## pre-receiveフックの編集

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.hooks-tab %}
1. 編集する pre-receive フックの横にある {% octicon "pencil" aria-label="The edit icon" %} をクリックします。
![pre-receive の編集](/assets/images/enterprise/site-admin-settings/edit-pre-receive-hook.png)

## pre-receiveフックの削除

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.hooks-tab %}
2. 削除する pre-receive フックの横にある {% octicon "x" aria-label="X symbol" %} をクリックします。
![pre-receive の編集](/assets/images/enterprise/site-admin-settings/delete-pre-receive-hook.png)

## Organizationのためのpre-receiveフックの設定

組織管理者が組織のフックのアクセス許可を構成できるのは、サイト管理者が pre-receive フックの作成時に **[Administrators can enable and disable this hook]\(管理者はこのフックを有効および無効にすることができる\)** オプションを選んだ場合のみです。 リポジトリのpre-receiveフックを設定するには、Organizationの管理者もしくはオーナーでなければなりません。

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
4. 左サイドバーにある **[Hooks]\(フック\)** をクリックします。
![フック サイドバー](/assets/images/enterprise/orgs-and-teams/hooks-sidebar.png)
5. 設定する pre-receive フックの横にある **[Hook permissions]\(フックのアクセス許可\)** ドロップダウン メニューをクリックします。 pre-receiveフックの有効化もしくは無効化を選択するか、リポジトリ管理者による設定を許可してください。
![フックのアクセス許可](/assets/images/enterprise/orgs-and-teams/hook-permissions.png)

## リポジトリのためのpre-receiveフックの設定

リポジトリ所有者がフックを構成できるのは、サイト管理者が pre-receive フックの作成時に **[Administrators can enable and disable this hook]\(管理者はこのフックを有効および無効にすることができる\)** オプションを選んだ場合のみです。 組織で、組織所有者が **[Configurable]\(構成可能\)** フックアクセス許可を選んでいる必要もあります。 リポジトリのpre-receiveフックを設定するには、リポジトリのオーナーでなければなりません。

{% data reusables.profile.enterprise_access_profile %}
2. **[Repositories]\(リポジトリ\)** をクリックし、pre-receive フックを構成するリポジトリを選びます。
![リポジトリ](/assets/images/enterprise/repos/repositories.png) {% data reusables.repositories.sidebar-settings %}
4. 左サイドバーにある **[Hooks & Services]\(フックとサービス\)** をクリックします。
![フックとサービス](/assets/images/enterprise/repos/hooks-services.png)
5. 設定する pre-receive フックの横にある **[Hook permissions]\(フックのアクセス許可\)** ドロップダウン メニューをクリックします。 pre-receiveフックを有効化するか無効化するかを選択してください。
![リポジトリ フックのアクセス許可](/assets/images/enterprise/repos/repo-hook-permissions.png)
