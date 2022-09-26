---
title: Jira を使用するプロジェクトの管理
intro: 'プロジェクト管理用に {% data variables.product.product_name %} と Jira を統合することができます。'
redirect_from:
  - /enterprise/admin/guides/installation/project-management-using-jira
  - /enterprise/admin/articles/project-management-using-jira
  - /enterprise/admin/developer-workflow/managing-projects-using-jira
  - /enterprise/admin/developer-workflow/customizing-your-instance-with-integrations
  - /enterprise/admin/user-management/managing-projects-using-jira
  - /admin/user-management/managing-projects-using-jira
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Project management
shortTitle: Project management with Jira
ms.openlocfilehash: da1a02894bf8c916089de94a8642396ba7ceabe4
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145115142'
---
## {% data variables.product.prodname_enterprise %}Organization への Jira の接続

1. http[s]://[hostname]/login で {% data variables.product.prodname_enterprise %}のアカウントにサインインする。 既にサインインしている場合は、左上隅にある {% data variables.product.prodname_dotcom %} ロゴをクリックします。
2. {% data variables.product.prodname_dotcom %} ロゴの下にあるプロファイル アイコンをクリックし、Jira に接続する Organization を選択します。

  ![Organization を選択する](/assets/images/enterprise/orgs-and-teams/profile-select-organization.png)

3. **[_Organization 名_ の設定の編集]** リンクをクリックします。

  ![Organization の設定を編集する](/assets/images/enterprise/orgs-and-teams/edit-organization-settings.png)

4. 左側のサイドバーの **[開発者向け設定]** で、 **[OAuth アプリ]** をクリックします。

  ![OAuth アプリを選択する](/assets/images/enterprise/orgs-and-teams/organization-dev-settings-oauth-apps.png)

5. **[新しいアプリケーションの登録]** ボタンをクリックします。

  ![[新しいアプリケーションの登録] ボタン](/assets/images/enterprise/orgs-and-teams/register-oauth-application-button.png)

6. アプリケーションの設定を次のように記入する。
    - **[アプリケーション名]** フィールドに「Jira」と入力するか、Jira インスタンスを特定するために使用する任意の名前を入力します。
    - **[ホームページの URL]** フィールドに、Jira インスタンスの完全な URL を入力します。
    - **[承認コールバック URL]** に、Jira インスタンスの完全な URL を入力します。
7. **[Register application](アプリケーションを登録する)** をクリックします。
8. ページの上部にある **[クライアント ID]** と **[クライアント シークレット]** を書き留めます。 これらは Jira インスタンスを構成するために必要になります。

## Jira インスタンスの構成

1. Jira インスタンスで、管理アクセス権を持つアカウントにログインします。
2. ページの上部にある設定 (歯車) アイコンをクリックし、 **[アプリケーション]** を選択します。

  ![Jira 設定でアプリケーションを選択する](/assets/images/enterprise/orgs-and-teams/jira/jira-applications.png)

3. 左側のサイドバーの **[統合]** で、 **[DVCS アカウント]** をクリックします。

  ![Jira [統合] メニュー - [DVCS アカウント]](/assets/images/enterprise/orgs-and-teams/jira/jira-integrations-dvcs.png)

4. **[Bitbucket Cloud または {% data variables.product.prodname_dotcom %} アカウントのリンク]** をクリックします。

  ![GitHub アカウントを Jira にリンクする](/assets/images/enterprise/orgs-and-teams/jira/jira-link-github-account.png)

5. **[新しいアカウントの追加]** モーダルで、{% data variables.product.prodname_enterprise %} 設定を入力します。
    - **[ホスト]** ドロップダウン メニューから **[{% data variables.product.prodname_enterprise %}]** を選択します。
    - **[チームまたはユーザー アカウント]** フィールドに、{% data variables.product.prodname_enterprise %} 組織かユーザー アカウントの名前を入力します。
    - **[OAuth キー]** フィールドに、{% data variables.product.prodname_enterprise %} 開発者アプリケーションのクライアント ID を入力します。
    - **[OAuth シークレット]** フィールドに、{% data variables.product.prodname_enterprise %} 開発者アプリケーションのクライアント シークレットを入力します。
    - {% data variables.product.prodname_enterprise %} 組織またはユーザー アカウントが所有する新しいリポジトリをリンクしない場合は、 **[新しいリポジトリの自動リンク]** の選択を解除します。
    - スマート コミットを有効にしない場合は、 **[スマート コミットの有効化]** の選択を解除します。
    - **[追加]** をクリックします。
6. {% data variables.product.prodname_enterprise %} アカウントに付与するアクセス許可を確認し、 **[アプリケーションの承認]** をクリックします。
7. 必要であれば、パスワードを入力する。
