---
title: GitHubでのディスカッションについて
intro: '{% data variables.product.product_name %} 上で様々な種類のディスカッションを用い、特定のプロジェクトや変更について、そしてもっと幅広くプロジェクトや Team のゴールについて議論できます。'
redirect_from:
  - /articles/about-discussions-in-issues-and-pull-requests/
  - /articles/about-conversations-on-github
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### {% data variables.product.product_name %}上でのディスカッション

持ちたい会話の種類に応じて、Issue、プルリクエスト、Team ディスカッションを作成して参加できます。

Issueは、バグレポートや計画された改善など、プロジェクトの特定の詳細についての議論に役立ちます。 詳細は「[Issue について](/articles/about-issues)」を参照してください。 プルリクエストでは、提案された変更に直接コメントできます。 詳しい情報については[プルリクエストについて](/articles/about-pull-requests)及び[プルリクエストへコメントする](/articles/commenting-on-a-pull-request)を参照してください。

{% data reusables.organizations.team-discussions-purpose %}詳しい情報については「[Team ディスカッションについて](/articles/about-team-discussions)」を参照してください。

### コメント中のアイデアへの反応

議論の中のアイデアに対する賛意や異議を示すことができます。 Team ディスカッション、Issue、プルリクエストのコメントや本体に反応を加えても、その会話をサブスクライブしている人には通知が送信されません。 サブスクリプションの詳細については、 {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %}「[通知について](/github/managing-subscriptions-and-notifications-on-github/about-notifications){% else %}「[通知のサブスクライブとサブスクライブ解除 ](/github/receiving-notifications-about-activity-on-github/subscribing-to-and-unsubscribing-from-notifications){% endif %}」を参照してください。

![反応を含むIssueの例](/assets/images/help/repository/issue-reactions.png)

{% if currentVersion == "free-pro-team@latest" %}

{% tip %}

**ヒント：**反応の追加はモバイルデバイスを使っても行えます。

{% endtip %}

{% endif %}
### コントリビューションガイドラインへの追従

Issueあるいはプルリクエストをオープンする前に、そのリポジトリにコントリビューションガイドラインがあるかを確認してください。 *CONTRIBUTING.md*ファイルには、リポジトリメンテナが期待するプロジェクトへのアイデアのコントリビュートの方法に関する情報が含まれています。

コントリビューションガイドラインに似たものとして、リポジトリメンテナがIssueあるいはプルリクエスト中に含める情報のテンプレートを含めていることがあります。 テンプレートで求められている内容を記載すれば、メンテナーからよりよい反応を得るための役に立つかもしれません。

### 参考リンク

- [健全なコントリビューションを促すプロジェクトをセットアップする](/articles/setting-up-your-project-for-healthy-contributions)
- 「[テンプレートを使用して便利な Issue およびプルリクエストを推進する](/github/building-a-strong-community/using-templates-to-encourage-useful-issues-and-pull-requests)」
- [コメントと会話の管理](/articles/moderating-comments-and-conversations)
- [{% data variables.product.prodname_dotcom %}での執筆](/articles/writing-on-github)
