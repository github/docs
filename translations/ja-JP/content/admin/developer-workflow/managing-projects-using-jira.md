---
title: JIRA を使用してプロジェクトを管理する
intro: 'プロジェクト管理用に {% data variables.product.prodname_enterprise %}に JIRA を統合することができます。'
redirect_from:
  - /enterprise/admin/guides/installation/project-management-using-jira/
  - /enterprise/admin/articles/project-management-using-jira/
  - /enterprise/admin/developer-workflow/managing-projects-using-jira
versions:
  enterprise-server: '*'
---

### {% data variables.product.prodname_enterprise %}のOrganizationへの JIRA の繋ぎ方

1. http[s]://[hostname]/login で {% data variables.product.prodname_enterprise %}のアカウントにサインインする。
1. ページ右上にあるアカウント設定のアイコン（歯車）をクリックする。
1. 左のサイドバーで、あなたのOrganizationの名前をクリックする。
1. 左のサイドバーで、**Applications** をクリックする。
1. **Organization applications** のボックスの右上隅にある、**Register new application** をクリックする。
1. アプリケーションの設定を次のように記入する。
    - **Application name** の欄に "JIRA" と入力する。
    - **Homepage URL** の欄には、JIRA インスタンスの全 URL を入力する。
    - **Authorization callback URL** の欄には、JIRAインスタンスの全URLを入力する。
1. **Register application** をクリックする。
1. ページの上部の [**Client ID**] と [**Client Secret**] をメモしてください。 これらは JIRA のインスタンスの設定に必要です。

### {% data variables.product.prodname_enterprise %}の個人アカウントへの JIRA の繋ぎ方

1. http[s]://[hostname]/login で {% data variables.product.prodname_enterprise %}のアカウントにサインインする。
1. ページ右上にあるアカウント設定のアイコン（歯車）をクリックする。
1. 左のサイドバーで、**Applications** をクリックする。
1. **Developer applications** のボックスの右上隅にある、**Register new application** をクリックする。
1. アプリケーションの設定を次のように記入する。
    - **Application name** の欄に "JIRA" と入力する。
    - **Homepage URL** の欄には、JIRA インスタンスの全 URL を入力する。
    - **Authorization callback URL** の欄には、JIRAインスタンスの全URLを入力する。
1. **Register application** をクリックする。
1. ページの上部の [**Client ID**] と [**Client Secret**] をメモしてください。 これらは JIRA のインスタンスの設定に必要です。

### JIRA インスタンス を設定

1. JIRA インスタンス で、管理人権限でアカウントにログインする。
1. ページ上部の、設定アイコン（歯車）をクリックする。
1. 設定のドロップダウンで、**Add-ons** を選択する。
1. 左のサイドバーにある**Source control** で、**DVCS accounts** をクリックする。
1. **Link Bitbucket or GitHub account** をクリックする。
1. [**Add New Account**] (新規アカウントを追加) モーダルで、{% data variables.product.prodname_enterprise %} の設定を記入してください。
    - **Host** のドロップダウンメニューで、**GitHub Enterprise** を選択する。
    - **Team or User Account** の欄には、{% data variables.product.prodname_enterprise %}のOrganization、または個人アカウントの名前を入力する。
    - **OAuth Key** の欄には、{% data variables.product.prodname_enterprise %}のディベロッパーアプリケーションのClient ID を入力する。
    - **OAuth Secret** の欄には、{% data variables.product.prodname_enterprise %}のデベロッパーアプリケーションの Client Secret を入力する。
    - {% data variables.product.prodname_enterprise %}の Organization、または個人アカウントが所有している新規リポジトリをリンクしたくない場合は、**Auto Link New Repositories** の選択を解除する。
    - スマートコミットを有効にしたくない場合は、**Enable Smart Commits** の選択を解除する。
    - **Add** をクリックする。
1. {% data variables.product.prodname_enterprise %}に対して与えるアクセス権を確認して、**Authorize application** をクリックする。
1. 必要であれば、パスワードを入力する。
