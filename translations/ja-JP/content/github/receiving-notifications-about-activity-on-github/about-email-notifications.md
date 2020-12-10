---
title: メール通知について
intro: 'メール通知を有効化すると、参加および Watch 対象の通知をメールクライアントで受け取るようになり、メールヘッダ情報でそれらをフィルタリングできます。'
versions:
  enterprise-server: <2.21
---

*参加*と *Watch* 対象との通知の違いについては、「[通知について](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/about-notifications)」を参照してください。

メール通知を有効化すると、{% data variables.product.product_name %} はコンテンツを HTML とプレーンテキストの両方で含むマルチパートのメールとして通知を送信します。 メール通知のコンテンツには、{% data variables.product.product_name %} のオリジナルのコンテンツに含まれる Markdown、@メンション、絵文字、ハッシュリンクなどがすべて含まれます。 メールでテキストだけを見たいなら、プレーンテキストのコピーだけを表示するようにメールクライアントを設定できます。 メール通知の有効化に関する詳しい情報については「[通知の配信方法を選択する](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/choosing-the-delivery-method-for-your-notifications)」を参照してください。

{% data reusables.notifications.outbound_email_tip %}

{% data reusables.notifications.shared_state %}

### メール通知のフィルタリング

{% data variables.product.product_name %} が送信する各メール通知には、ヘッダ情報が含まれています。 各メールのヘッダ情報には一貫性があるので、それを使ってメールクライアントですべての {% data variables.product.product_name %} 通知あるいは特定の種類の {% data variables.product.product_name %} 通知をフィルタリングしたりフォワードしたりできます。

{% data variables.product.product_name %} からのメール通知には、以下のヘッダ情報が含まれています:

| ヘッダ                                                       | 情報                                                                                                                                                                                                                                                                |
| --------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `From` アドレス                                               | このアドレスは常に、サイト管理者が設定した no-reply メールアドレスになります。                                                                                                                                                                                                                      |
| `To` フィールド                                                | このフィールドは、直接スレッドに接続します。 メールに返信すると、会話に新しいコメントを追加することになります。                                                                                                                                                                                                          |
| `Cc` アドレス                                                 | あなたが会話をサブスクライブしていれば、{% data variables.product.product_name %}はあなたに `Cc` します。 2番目の`Cc`メールアドレスは、通知の理由にマッチします。 これらの通知理由に対するサフィックスは{% data variables.notifications.cc_address %}です。 通知の理由には以下のようなものがあります。 <ul><li>`assign`: 受信者はIssueあるいはプルリクエストに割り当てられました。</li><li>`author`: 受信者はIssueあるいはプルリクエストの作者です。</li><li>`comment`: 受信者はIssueあるいはプルリクエストにコメントしました。</li><li>`manual`: 手作業でサブスクライブした Issue あるいはプルリクエストが更新されました。</li><li>`mention`: 受信者は Issue あるいはプルリクエストにメンションされました。</li><li>`push`: 受信者がサブスクライブしているプルリクエストに誰かがコミットしました。</li><li>`review_requested`: 受信者あるいは受信者がメンバーになっている Team にプルリクエストのレビューがリクエストされました。</li><li>`security_alert`: {% data variables.product.prodname_dotcom %} は、受信者がセキュリティのアラートを受け取るリポジトリに脆弱性を検出しました。</li><li>`state_change`: 受信者がサブスクライブしている Issue あるいはプルリクエストがクローズもしくはオープンされました。</li><li>`subscribed`: 受信者が Watch しているリポジトリに更新がありました。</li><li>`team_mention`: 受信者が属している Team が Issue あるいはプルリクエストでメンションされました。</li><li>`your_activity`: 受信者が Issue あるいはプルリクエストをオープン、コメントあるいはクローズしました。</li></ul>                                    |
| `mailing list` フィールド                                      | このフィールドはリポジトリの名前とそのオーナーを特定します。 このアドレスのフォーマットは常に`<repository name>.<repository owner>.{% data variables.command_line.backticks %}`となります。                                                                                                               |{% if currentVersion ver_gt "enterprise-server@2.19" % %}
| `X-GitHub-Severity`フィールド                                  | {% data reusables.repositories.security-alerts-x-github-severity %} 考えられる重大度レベルは次のとおりです。<ul><li>`low`</li><li>`moderate`</li><li>`high`</li><li>`critical`</li></ul>詳しい情報については、「[脆弱性のある依存関係に対するアラートについて](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)」を参照してください。 |{% endif %}

### 参考リンク

- 「[Watch しているリポジトリのリスト](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/listing-the-repositories-youre-watching)」
- [リポジトリの Watch と Watch 解除](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/watching-and-unwatching-repositories)
- 「[通知のサブスクライブとサブスクライブ解除](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/subscribing-to-and-unsubscribing-from-notifications)」
- [Gistの作成](/articles/creating-gists)
