### 会話を解決する

プルリクエストをオープンしたり、プルリクエストがオープンされたリポジトリへの書き込みアクセス権を持っていたりすれば、プルリクエスト中の会話を解決できます。

**Files changed（変更されたファイル）**タブ上の会話が完了したことを示すには、**Resolve conversation（会話を解決）**をクリックしてください。

![会話の解決ボタンが付いたプルリクエストの会話](/assets/images/help/pull_requests/conversation-with-resolve-button.png)

会話全体が畳まれ、解決のマークが付きます。これで、まだ対応が必要な会話を見つけやすくなります。

![解決された会話](/assets/images/help/pull_requests/resolved-conversation.png)

コメントの示唆がプルリクエストの範囲を超えているなら、そのコメントへのフィードバックやリンクを追跡する新しいIssueをオープンできます。 詳しい情報については「[コメントからIssueを開く](/github/managing-your-work-on-github/opening-an-issue-from-a-comment)」を参照してください。

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" %}
#### 会話の発見とアクセス

**Files Changed（変更されたファイル）**タブの上部に表示される**Conversations（会話）**メニューを使い、Pull Request中のすべての会話を見つけてアクセスできます。

このビューから、未解決の会話、解決済みの会話、古くなった会話を見分けることができます。 これによって、会話を見つけて解決することが容易になります。

![会話メニューの表示](/assets/images/help/pull_requests/conversations-menu.png)
{% endif %}
