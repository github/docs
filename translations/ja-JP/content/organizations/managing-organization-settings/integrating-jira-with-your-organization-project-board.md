---
title: Organization のプロジェクトボードに JIRA を統合する
intro: Jira Cloud を Organization のアカウントに統合すると、コミットとプルリクエストをスキャンし、メンションされている JIRA の Issue で、関連するメタデータとハイパーリンクを作成できます。
redirect_from:
  - /articles/integrating-jira-with-your-organization-project-board
  - /github/setting-up-and-managing-organizations-and-teams/integrating-jira-with-your-organization-project-board
versions:
  ghes: '*'
  ghae: '*'
shortTitle: Jiraの統合
---

{% ifversion ghes > 3.4 or ghae-issue-5658 %}
{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. 左のサイドバーで**{% octicon "code" aria-label="The code icon" %} Developer settings（開発者設定）**を選択し、続いて**OAuth Apps（OAuthアプリケーション）**をクリックしてください。 ![左サイドバーの [OAuth applications] タブ](/assets/images/help/organizations/org-oauth-applications-ghe.png)
1. [**New OAuth App**] をクリックします。
{% else %}
{% data reusables.user-settings.access_settings %}
1. 左サイドバーの [**Organization settings**] で、Organization の名前をクリックします。 ![サイドバーの Organization 名](/assets/images/help/settings/organization-settings-from-sidebar.png)
1. 左サイドバーの **[Developer settings]** で、[**OAuth applications**] をクリックします。 ![左サイドバーの [OAuth applications] タブ](/assets/images/help/organizations/org-oauth-applications-ghe.png)
1. [**Register a new application**] をクリックします。
{% endif %}
1. [**Application name**] に "Jira" と入力します。
2. [**Homepage URL**] に、JIRA インスタンスの完全な URL を入力します。
3. [**Authorization callback URL**] に、JIRA インスタンスの完全な URL を入力します。
4. **Register application** をクリックする。 ![[Register application] ボタン](/assets/images/help/oauth/register-application-button.png)
9. [**Organization owned applications**] で、[Client ID] と [Client Secret] の値を確認します。 ![クライアント ID とクライアントシークレット](/assets/images/help/oauth/client-id-and-secret.png)
{% data reusables.user-settings.jira_help_docs %}

## 参考リンク

- [「JIRA を個人プロジェクトに統合する」](/articles/integrating-jira-with-your-personal-projects)
- <a href="https://confluence.atlassian.com/adminjiracloud/connect-jira-cloud-to-github-814188429.html" data-proofer-ignore>Jira Cloud を GitHub に接続する</a> (Atlassian ドキュメント)
