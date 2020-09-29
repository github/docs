---
title: GitHub Insightsのアップデート
intro: '{% data variables.product.prodname_insights %}を最新バージョンにアップデートし、改善やバグフィックスの恩恵を受けることができます。'
product: '{% data reusables.gated-features.github-insights %}'
redirect_from:
  - /github/installing-and-configuring-github-insights/updating-github-insights
permissions: '`github/insights-releases`リポジトリの読み取り権限を持ち、アプリケーションサーバーへの管理アクセスを持っている人は、{% data variables.product.prodname_insights %}をアップデートできます。'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### {% data variables.product.prodname_insights %}のアップデートについて

{% data variables.product.prodname_insights %}をアップデートする前に、任意のページの右下で現在使っているバージョンをチェックできます。

アップデートのプロセスには、最大で10分かかります。 この間、ユーザは{% data variables.product.prodname_insights %}にアクセスできません。

### {% data variables.product.prodname_insights %} 0.4.0+からのアップデート

{% data variables.product.prodname_insights %}を0.4.0+からアップデートするには、最新バージョンをインストールできます。 {% data variables.product.prodname_insights %}は、以前のインストール設定を使うかを尋ねてきます。

{% data reusables.github-insights.download-latest-release %}
4. シェルスクリプトの`install.sh`を実行してください。
5. SSLがすでに有効化されているなら、{% data variables.product.prodname_insights %}は既存のSSL証明書を見つけます。 "Y"で同意するか、"n"でSSL証明書を変更するかSSLを無効化します。
6. SSLがすでに有効化されているなら、{% data variables.product.prodname_insights %}は既存のSSL鍵を見つけます。 "Y”で同意するか、"n"でSSL鍵を変更します、
5. {% data variables.product.prodname_insights %}は、既存のホスト名を見つけます。 "Y”で同意するか、"n"で異なるホスト名を入力します。 ホスト名は、{% data variables.product.prodname_github_app %}を作成する時にアプリケーションサーバーに対して使ったのと同じURLです。
6. インストールの実行には数分かかります。 完了すると、メッセージがターミナルに出力されます。
  ```
  Installation complete
  Run /opt/insights/scripts/start.sh to start GitHub Insights
  ```
{% data reusables.github-insights.run-script %}

### {% data variables.product.prodname_insights %} 0.3.1あるいはそれ以前からのアップデート

{% data variables.product.prodname_insights %}のバージョン0.3.1あるいはそれ以前のバージョンは、バージョン0.4.0+とは互換性がありません。 {% data variables.product.prodname_insights %} 0.3.1もしくはそれ以前からアップデートするには、{% data variables.product.prodname_insights %}を新しいアプリケーションサーバーにインストールして設定してください。
