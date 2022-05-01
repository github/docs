---
title: JIRA を個人プロジェクトに統合する
intro: 'You can integrate Jira Cloud with your personal account to scan commits and pull requests, creating relevant metadata and hyperlinks in any mentioned Jira issues.'
redirect_from:
  - /articles/integrating-jira-with-your-personal-projects
  - /github/setting-up-and-managing-your-github-user-account/integrating-jira-with-your-personal-projects
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/integrating-jira-with-your-personal-projects
versions:
  ghes: '*'
  ghae: '*'
shortTitle: Integrate Jira with projects
---

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.oauth_apps %}
1. [**Register a new application**] をクリックします。
2. [**Application name**] に "Jira" と入力します。
3. [**Homepage URL**] に、JIRA インスタンスの完全な URL を入力します。
4. [**Authorization callback URL**] に、JIRA インスタンスの完全な URL を入力します。
5. **Register application** をクリックする。 ![[Register application] ボタン](/assets/images/help/oauth/register-application-button.png)
8. [**Developer applications**] で、[Client ID] と [Client Secret] の値を確認します。 ![クライアント ID とクライアントシークレット](/assets/images/help/oauth/client-id-and-secret.png)
{% data reusables.user-settings.jira_help_docs %}

## 参考リンク

- [Organization のプロジェクトボードに JIRA を統合する](/articles/integrating-jira-with-your-organization-project-board)
- <a href="https://confluence.atlassian.com/adminjiracloud/connect-jira-cloud-to-github-814188429.html" data-proofer-ignore>Jira Cloud を GitHub に接続する</a> (Atlassian ドキュメント)
