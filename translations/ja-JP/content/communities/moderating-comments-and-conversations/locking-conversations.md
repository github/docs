---
title: 会話をロックする
intro: リポジトリのオーナーおよびコラボレーター、そしてリポジトリへの書き込みアクセスを持つユーザは、過熱した議論を和らげるために、Issue、プルリクエスト、およびコミットに関する会話を、恒久的または一時的にロックすることができます。
redirect_from:
  - /articles/locking-conversations
  - /github/building-a-strong-community/locking-conversations
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
---

会話が全体的に非建設的になったときや、コミュニティの行動規範{% ifversion fpt or ghec %} または GitHub の [コミュニティ ガイドライン](/free-pro-team@latest/github/site-policy/github-community-guidelines){% endif %} に違反しているときは、会話をロックすることが妥当です。 会話をロックするとき、理由を指定することもできます。これは誰にでも見ることができます。

会話をロックすると、リポジトリに対する読み取りアクセスを持つユーザなら誰でも見ることのできるタイムラインイベントが作成されます。 ただし、会話をロックしたユーザの名前は、リポジトリへの書き込みアクセスを持つユーザにしか見えません。 書き込みアクセスを持たないユーザから見ると、タイムラインイベントは匿名化されています。

![ロックした会話について匿名化されたタイムラインイベント](/assets/images/help/issues/anonymized-timeline-entry-for-locked-conversation.png)

会話がロックされている間も、[書き込みアクセスを持つユーザ](/articles/repository-permission-levels-for-an-organization/)と[リポジトリのオーナーおよびコラボレーター](/articles/permission-levels-for-a-user-account-repository/#collaborator-access-for-a-repository-owned-by-a-personal-account)はコメントを追加または削除したり、非表示にしたりできます。

アーカイブされていないリポジトリでロックされた会話を検索するには、検索修飾子 `is:locked` および `archived:false` を使用できます。 会話はアーカイブされたリポジトリで自動的にロックされます。 詳細は「[Issue およびプルリクエストを検索する](/search-github/searching-on-github/searching-issues-and-pull-requests#search-based-on-whether-a-conversation-is-locked)」を参照してください。

1. オプションで、会話をロックする理由を説明するコメントを書いてください。
2. Issue またはプルリクエストの右マージン、またはコメント ページのコメント ボックスの上で、[**Lock conversation**] をクリックします。 ![[Lock conversation] リンク](/assets/images/help/repository/lock-conversation.png)
3. オプションで、会話をロックする理由を選択します。 ![会話をロックする理由のメニュー](/assets/images/help/repository/locking-conversation-reason-menu.png)
4. 会話のロックに関する情報を読み、[**Lock conversation on this issue**]、[**Lock conversation on this pull request**]、または [ **Lock conversation on this commit**] をクリックします。 ![ロックを確定するダイアログ ボックス](/assets/images/help/repository/lock-conversation-confirm-with-reason.png)
5. 会話のロックを解除できるようになったら、[**Unlock conversation**] をクリックします。 ![[Unlock conversation] リンク](/assets/images/help/repository/unlock-conversation.png)

## 参考リンク

- [健全なコントリビューションを促すプロジェクトをセットアップする](/communities/setting-up-your-project-for-healthy-contributions)
- 「[テンプレートを使用して便利な Issue およびプルリクエストを推進する](/communities/using-templates-to-encourage-useful-issues-and-pull-requests)」
- 「[混乱を生むコメントを管理する](/communities/moderating-comments-and-conversations/managing-disruptive-comments)」{% ifversion fpt or ghec %}
- 「[{% data variables.product.prodname_dotcom %} での安全性を維持する](/communities/maintaining-your-safety-on-github)」
- [悪用あるいはスパムのレポート](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)
- 「[リポジトリでのインタラクションを制限する](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)」
{% endif %}
