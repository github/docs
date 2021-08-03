---
title: JIRA を個人プロジェクトに統合する
intro: Jira Cloud をユーザ アカウントに統合すると、コミットとプルリクエストをスキャンし、メンションされている JIRA の Issue で、関連するメタデータとハイパーリンクを作成できます。
redirect_from:
  - /articles/integrating-jira-with-your-personal-projects
  - /github/setting-up-and-managing-your-github-user-account/integrating-jira-with-your-personal-projects
versions:
  enterprise-server: '*'
  github-ae: '*'
---
{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.developer_settings %}
3. 左サイドバーで [**{% data variables.product.prodname_oauth_app %}s**] をクリックします。 ![左サイドバーの {% data variables.product.prodname_oauth_app %} タブ](/assets/images/help/settings/developer-settings-oauth-apps.png)
3. [**Register a new application**] をクリックします。
4. [**Application name**] に "Jira" と入力します。
5. [**Homepage URL**] に、JIRA インスタンスの完全な URL を入力します。
6. [**Authorization callback URL**] に、JIRA インスタンスの完全な URL を入力します。
7. **Register application** をクリックする。 ![[Register application] ボタン](/assets/images/help/oauth/register-application-button.png)
8. [**Developer applications**] で、[Client ID] と [Client Secret] の値を確認します。 ![クライアント ID とクライアントシークレット](/assets/images/help/oauth/client-id-and-secret.png)
{% data reusables.user_settings.jira_help_docs %}

### 参考リンク

- [Organization のプロジェクトボードに JIRA を統合する](/articles/integrating-jira-with-your-organization-project-board)
- <a href="https://confluence.atlassian.com/adminjiracloud/connect-jira-cloud-to-github-814188429.html" data-proofer-ignore>Jira Cloud を GitHub に接続する</a> (Atlassian ドキュメント)
