---
title: 通知について
intro: '通知は、関心のあるアクティビティや会話についての更新を知らせてくれます。 通知は、{% data variables.product.product_name %}上で、あるいはメールクライアントを通じて受け取れます。'
versions:
  enterprise-server: <2.21
---

### 通知の種類

受信する通知は、*参加*通知か*Watch対象の*通知です。 どちらの種類の通知も、Webの通知あるいはメール通知として受信できます。 詳しい情報については、以下を参照してください。

- 「[Web 通知について](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/about-web-notifications)」
- 「[メール通知について](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/about-email-notifications)」
- [通知の配信方法を選択する](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/choosing-the-delivery-method-for-your-notifications)

{% data reusables.notifications.outbound_email_tip %}

{% data reusables.notifications.shared_state %}

#### 参加通知

{% data variables.product.product_name %} は、あなたが直接リポジトリあるいはメンバーになっている Team 内のアクティビティや会話に関わった際に、*参加*通知を送信します。 通知は以下の場合に送られます:
  - あなた、あるいはあなたがメンバーになっている Team がメンションされた場合。 詳細は「[基本的な書き方とフォーマットの構文](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams)」を参照してください。
  - あなたがメンバーになっている子チームの親チームがメンションされた場合。 詳しい情報については[Team について](/articles/about-teams)を参照してください。
  - あなたに Issue あるいはプルリクエストが割り当てられた場合。
  - あなたがサブスクライブしている会話にコメントが追加された場合。
  - あなたがサブスクライブしているプルリクエストにコミットが行われた場合。
  - あなたが Issue あるいはプルリクエストをオープン、コメント、クローズした場合。
  - あなたがサブスクライブしているプルリクエストを承認したり、変更を要求したりするレビューがサブミットされた場合。
  - あなた、もしくはあなたがメンバーの Team がプルリクエストのレビューをリクエストされた場合。
  - あなた、あるいはあなたがメンバーの Team がファイルのオーナーに指名され、そのファイルを変更するプルリクエストを誰かがオープンした場合。 詳細は「[コードオーナーについて](/articles/about-code-owners)」を参照してください。
  - あなたが Team のディスカッションを作成したか、返信した場合。

#### Watch 対象の通知

{% data variables.product.product_name %} は、あなたが Watch しているリポジトリあるいは Team のディスカッションに更新があった場合、*Watch* 通知を送信します。  {% data reusables.notifications.auto-watch %} 詳細は、「[リポジトリの Watch と Watch 解除](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/watching-and-unwatching-repositories)」を参照してください。
通知は以下の場合に送られます:
  - Issue がオープンされた場合。
  - コミットがオープンな Issue に追加された場合。
  - プルリクエストがオープンされた場合。
  - オープンなプルリクエストにコメントが追加された場合。
  - コミットにコメントが追加された場合。
  - リリースが公開された場合。 詳細は「[リリースについて](/articles/about-releases)」を参照してください。 リポジトリのすべての更新ではなく、リポジトリでのリリースの公開のみを Watch することもできます。 詳細は「[リポジトリのリリースの Watch と Watch 解除](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/watching-and-unwatching-releases-for-a-repository)」を参照してください。
  - プルリクエストを承認したり、変更をリクエストしたりするレビューがサブミットされた場合。
  - あなたが Watch している Team のディスカッションにポストが作成されたか、リプライがあった場合。
  - あなたがメンバーで Watch しているチーム、もしくはその親チームのディスカッションのポストがオープン、編集、リプライされた場合。 詳細は「[入れ子チーム](/articles/about-teams/#nested-teams)」を参照してください。

また、フォローしている人、Watch しているリポジトリ、あなたがメンバーになっている Organization からのアクティビティをダッシュボード上でブラウズすることもできます。 詳しい情報については[パーソナルダッシュボードについて](/articles/about-your-personal-dashboard)を参照してください。

### 参考リンク

- 「[Watch しているリポジトリのリスト](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/listing-the-repositories-youre-watching)」
- [リポジトリの Watch と Watch 解除](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/watching-and-unwatching-repositories)
- 「[Team ディスカッションの Watch と Watch 解除](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/watching-and-unwatching-team-discussions)」
- 「[通知のサブスクライブとサブスクライブ解除](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/subscribing-to-and-unsubscribing-from-notifications)」
