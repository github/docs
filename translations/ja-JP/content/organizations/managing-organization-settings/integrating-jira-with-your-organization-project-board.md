---
title: Organization のプロジェクトボードに JIRA を統合する
intro: 'Jira Cloud を Organization のアカウントに統合すると、コミットとプルリクエストをスキャンし、メンションされている JIRA の Issue で、関連するメタデータとハイパーリンクを作成できます。'
redirect_from:
  - /articles/integrating-jira-with-your-organization-project-board
  - /github/setting-up-and-managing-organizations-and-teams/integrating-jira-with-your-organization-project-board
versions:
  enterprise-server: '*'
  github-ae: '*'
---

{% data reusables.user_settings.access_settings %}
2. 左サイドバーの [**Organization settings**] で、Organization の名前をクリックします。 ![サイドバーの Organization 名](/assets/images/help/settings/organization-settings-from-sidebar.png)
3. 左サイドバーの **[Developer settings]** で、[**OAuth applications**] をクリックします。 ![左サイドバーの [OAuth applications] タブ](/assets/images/help/organizations/org-oauth-applications-ghe.png)
4. [**Register a new application**] をクリックします。
5. [**Application name**] に "Jira" と入力します。
6. [**Homepage URL**] に、JIRA インスタンスの完全な URL を入力します。
7. [**Authorization callback URL**] に、JIRA インスタンスの完全な URL を入力します。
8. **Register application** をクリックする。 ![[Register application] ボタン](/assets/images/help/oauth/register-application-button.png)
9. [**Organization owned applications**] で、[Client ID] と [Client Secret] の値を確認します。 ![クライアント ID とクライアントシークレット](/assets/images/help/oauth/client-id-and-secret.png)
{% data reusables.user_settings.jira_help_docs %}

### 参考リンク

- [「JIRA を個人プロジェクトに統合する」](/articles/integrating-jira-with-your-personal-projects)
- <a href="https://confluence.atlassian.com/adminjiracloud/connect-jira-cloud-to-github-814188429.html" data-proofer-ignore>Jira Cloud を GitHub に接続する</a> (Atlassian ドキュメント)
