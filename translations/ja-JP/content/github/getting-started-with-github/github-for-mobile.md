---
title: GitHub for mobile
intro: '{% data variables.product.product_name %} での作業をモバイルデバイスからトリアージ、コラボレーション、および管理します。'
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
---

{% data reusables.mobile.ghes-release-phase %}

### {% data variables.product.prodname_mobile %} について

{% data reusables.mobile.about-mobile %}

{% data variables.product.prodname_mobile %} を使用すると、{% data variables.product.product_name %} に対してインパクトのある作業をすばやく、どこからでも行うことができます。 {% data variables.product.prodname_mobile %} は、信頼できるファーストパーティクライアントアプリケーションを介して {% data variables.product.product_name %} データにアクセスする安心で安全な方法です。

{% data variables.product.prodname_mobile %} では、次のことができます。
- 通知の管理、トリアージ、クリア
- Issue とプルリクエストの読み取り、レビュー、コラボレーション
- ユーザ、リポジトリ、Organization の検索、参照、操作
- あなたのユーザー名がメンションされたときのプッシュ通知の受信

{% data variables.product.prodname_mobile %} の通知の詳細については、「[通知を設定する](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#enabling-push-notifications-with-github-for-mobile)」を参照してください。

### {% data variables.product.prodname_mobile %}のインストール

Android または iOS に {% data variables.product.prodname_mobile %} をインストールするには、「[{% data variables.product.prodname_mobile %}](https://github.com/mobile)」を参照してください。

### Managing accounts

You can be simultaneously signed into mobile with one user account on {% data variables.product.prodname_dotcom_the_website %} and one user account on {% data variables.product.prodname_ghe_server %}.

{% data reusables.mobile.push-notifications-on-ghes %}

{% data variables.product.prodname_mobile %} may not work with your enterprise if you're required to access your enterprise over VPN.

#### 必要な環境

You must install {% data variables.product.prodname_mobile %} 1.4 or later on your device to use {% data variables.product.prodname_mobile %} with {% data variables.product.prodname_ghe_server %}.

To use {% data variables.product.prodname_mobile %} with {% data variables.product.prodname_ghe_server %}, {% data variables.product.product_location %} must be version 3.0 or greater, and your enterprise owner must enable mobile support for your enterprise. For more information, see "[Release notes](/enterprise-server/admin/release-notes)" and "[Managing {% data variables.product.prodname_mobile %} for your enterprise](/admin/configuration/managing-github-for-mobile-for-your-enterprise)."

During the beta for {% data variables.product.prodname_mobile %} with {% data variables.product.prodname_ghe_server %}, you must be signed in with a user account on {% data variables.product.prodname_dotcom_the_website %}.

#### Adding, switching, or signing out of accounts

You can sign into mobile with a user account on {% data variables.product.product_location %}. At the bottom of the app, long-press {% octicon "person" aria-label="The person icon" %} **Profile**, then tap {% octicon "plus" aria-label="The plus icon" %} **Add Enterprise Account**. Follow the prompts to sign in.

After you sign into mobile with a user account on {% data variables.product.product_location %}, you can switch between the account and your account on  {% data variables.product.prodname_dotcom_the_website %}.  At the bottom of the app, long-press {% octicon "person" aria-label="The person icon" %} **Profile**, then tap the account you want to switch to.

If you no longer need to access data for your user account on {% data variables.product.product_location %} from {% data variables.product.prodname_mobile %}, you can sign out of the account. At the bottom of the app, long-press {% octicon "person" aria-label="The person icon" %} **Profile**, swipe left on the account to sign out of, then tap **Sign out**.

### {% data variables.product.prodname_mobile %} でサポートされている言語

{% data variables.product.prodname_mobile %} は次の言語で利用できます。

- 英語
- 日本語
- ポルトガル語 (ブラジル)
- Simplified Chinese
- スペイン語

デバイスの言語をサポートされている言語に設定すると、{% data variables.product.prodname_mobile %} はデフォルトでその言語になります。 {% data variables.product.prodname_mobile %} の [**Settings**] メニューで {% data variables.product.prodname_mobile %} の言語を変更できます。

### iOS で {% data variables.product.prodname_mobile %} のユニバーサルリンクを管理する

{% data variables.product.prodname_mobile %} は、iOS のユニバーサルリンクを自動的に有効にします。 {% data variables.product.product_name %} リンクをタップすると、リンク先 URL が Safari ではなく {% data variables.product.prodname_mobile %} で開きます。 詳しい情報については、Apple Developer サイトの「[Universal Links](https://developer.apple.com/ios/universal-links/)」を参照してください。

ユニバーサルリンクを無効にするには、{% data variables.product.product_name %} リンクを長押しして、[**Open**] をタップします。 今後 {% data variables.product.product_name %} リンクをタップするたびに、リンク先 URL は {% data variables.product.prodname_mobile %} ではなく Safari で開きます。

ユニバーサルリンクを再度有効にするには、{% data variables.product.product_name %} リンクを長押しして、[**Open in {% data variables.product.prodname_dotcom %}**] をタップします。

### フィードバックを送る

{% data variables.product.prodname_mobile %} でバグを見つけた場合は、<a href="mailto:mobilefeedback@github.com">mobilefeedback@github.com</a> までメールでお知らせください。

[GitHub Discussions](https://github.com/github/feedback/discussions?discussions_q=category%3A%22Mobile+Feedback%22) で {% data variables.product.prodname_mobile %} の機能リクエストやその他のフィードバックを送信できます。

### iOS のベータリリースをオプトアウトする

TestFlight を使用して{% data variables.product.prodname_mobile %} iOS 版のベータをテストしている場合は、いつでもベータを終了できます。

1. お使いの iOS デバイスで TestFlight アプリを開きます。
2. [Apps] の下の、[**{% data variables.product.prodname_dotcom %}**] をタップします。
3. ページの下部で、[**Stop Testing**] をクリックします。
