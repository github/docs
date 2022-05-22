---
title: 許可されていないアクセスを防止する
intro: '[Heartbleed bug](http://heartbleed.com/) などのセキュリティインシデントについては、メディアで警告を見たことがあるかもしれません。そうでなければ、{% data variables.product.product_location %} にサインインしている間にコンピュータから情報を盗まれている可能性があります。 そのような場合でも、パスワードを変更すれば、アカウントやプロジェクトにこれ以上不正にアクセスされるのを防ぐことができます。'
redirect_from:
  - /articles/preventing-unauthorized-access
  - /github/authenticating-to-github/preventing-unauthorized-access
versions:
  free-pro-team: '*'
  enterprise-server: '*'
topics:
  - Identity
  - Access management
---
{% data variables.product.product_name %} では、新しい SSH キーを追加する、アプリケーションを認証する、Team メンバーを変更するといった重要なアクションを実行するとき、パスワードが要求されます。

アカウントのセキュリティを保つために、パスワードを変更してから次のアクションを実行するようにしてください:

- アクセスするときパスワード以外の手段も要求されるように、[2 要素認証を有効化](/articles/about-two-factor-authentication)します。
- [SSH キー](/articles/reviewing-your-ssh-keys)、[デプロイキー](/articles/reviewing-your-deploy-keys)、および[許可されたインテグレーション](/articles/reviewing-your-authorized-integrations)をレビューして、SSH および Applications の設定で権限のない、または見覚えのないアクセスを削除します。
{% if currentVersion == "free-pro-team@latest" %}
- [すべてのメールアドレスを検証](/articles/verifying-your-email-address)します。 攻撃者があなたのアカウントにメールアドレスを追加していた場合、予想外のパスワードリセットの実行を許してしまう可能性があります。
{% endif %}
- [アカウントのセキュリティログをレビュー](/github/authenticating-to-github/reviewing-your-security-log)します。 これで、リポジトリに対する各種の設定について概要がわかります。 たとえば、プライベートリポジトリがパブリックに変更されていないか、リポジトリが移譲されていないかを確認できます。
- リポジトリで [webhook をレビュー](/articles/creating-webhooks)します。 webhook では、攻撃者がリポジトリへのプッシュを傍受する可能性があります。
- [新しいデプロイキーが作成されてないことを確認](/guides/managing-deploy-keys/#deploy-keys)します。 デプロイキーがあると、外部サーバーがあなたのプロジェクトにアクセスできる恐れがあります。
- リポジトリに対する最近のコミットをレビューします。
- リポジトリごとにコラボレーターのリストをレビューします。
