---
title: 会話をロックする
intro: 'リポジトリのオーナーおよびコラボレーター、そしてリポジトリへの書き込みアクセスを持つユーザは、過熱した議論を和らげるために、Issue、プルリクエスト、およびコミットに関する会話を、恒久的または一時的にロックすることができます。'
redirect_from:
  - /articles/locking-conversations
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

It's appropriate to lock a conversation when the entire conversation is not constructive or violates your community's code of conduct{% if currentVersion == "free-pro-team@latest" %} or GitHub's [Community Guidelines](/articles/github-community-guidelines){% endif %}. 会話をロックするとき、理由を指定することもできます。これは誰にでも見ることができます。

会話をロックすると、リポジトリに対する読み取りアクセスを持つユーザなら誰でも見ることのできるタイムラインイベントが作成されます。 ただし、会話をロックしたユーザの名前は、リポジトリへの書き込みアクセスを持つユーザにしか見えません。 書き込みアクセスを持たないユーザから見ると、タイムラインイベントは匿名化されています。

![ロックした会話について匿名化されたタイムラインイベント](/assets/images/help/issues/anonymized-timeline-entry-for-locked-conversation.png)

会話がロックされている間も、[書き込みアクセスを持つユーザ](/articles/repository-permission-levels-for-an-organization/)と[リポジトリのオーナーおよびコラボレーター](/articles/permission-levels-for-a-user-account-repository/#collaborator-access-on-a-repository-owned-by-a-user-account)はコメントを追加または削除したり、非表示にしたりできます。

アーカイブされていないリポジトリでロックされた会話を検索するには、検索修飾子 `is:locked` および `archived:false` を使用できます。 会話はアーカイブされたリポジトリで自動的にロックされます。 詳細は「[Issue およびプルリクエストを検索する](/articles/searching-issues-and-pull-requests#search-based-on-whether-a-conversation-is-locked)」を参照してください。

1. オプションで、会話をロックする理由を説明するコメントを書いてください。
2. Issue またはプルリクエストの右マージン、またはコメント ページのコメント ボックスの上で、[**Lock conversation**] をクリックします。 ![[Lock conversation] リンク](/assets/images/help/repository/lock-conversation.png)
3. オプションで、会話をロックする理由を選択します。 ![会話をロックする理由のメニュー](/assets/images/help/repository/locking-conversation-reason-menu.png)
4. 会話のロックに関する情報を読み、[**Lock conversation on this issue**]、[**Lock conversation on this pull request**]、または [ **Lock conversation on this commit**] をクリックします。 ![ロックを確定するダイアログ ボックス](/assets/images/help/repository/lock-conversation-confirm-with-reason.png)
5. 会話のロックを解除できるようになったら、[**Unlock conversation**] をクリックします。 ![[Unlock conversation] リンク](/assets/images/help/repository/unlock-conversation.png)

### 参考リンク

- [健全なコントリビューションを促すプロジェクトをセットアップする](/articles/setting-up-your-project-for-healthy-contributions)
- 「[テンプレートを使用して便利な Issue およびプルリクエストを推進する](/github/building-a-strong-community/using-templates-to-encourage-useful-issues-and-pull-requests)」
- "[Managing disruptive comments](/articles/managing-disruptive-comments)"{% if currentVersion == "free-pro-team@latest" %}
- 「[{% data variables.product.prodname_dotcom %} での安全性を維持する](/github/building-a-strong-community/maintaining-your-safety-on-github)」
- [悪用あるいはスパムのレポート](/articles/reporting-abuse-or-spam)
- 「[リポジトリでのインタラクションを制限する](/github/building-a-strong-community/limiting-interactions-in-your-repository)」
{% endif %}
