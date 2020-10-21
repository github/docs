---
title: SSH について
intro: 'SSH プロトコルを利用すれば、リモートのサーバーやサービスに接続し、認証を受けられます。 SSH キーがあれば、ユーザ名やパスワードをアクセスのたびに入力することなく {% data variables.product.product_name %}に接続できます。'
redirect_from:
  - /articles/about-ssh
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

SSH をセットアップする際には、[SSH キーを生成し、ssh-agent に追加](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)し、それから [ キーを自分の {% data variables.product.product_name %}アカウントに追加](/articles/adding-a-new-ssh-key-to-your-github-account)します。 SSH キーを ssh-agent に追加することで、パスフレーズの利用を通じて SSH キーに追加のセキュリティのレイヤーを持たせることができます。 詳しい情報については[SSH キーのパスフレーズを使う](/articles/working-with-ssh-key-passphrases)を参照してください。

{% if currentVersion == "free-pro-team@latest" %}To use your SSH key with a repository owned by an organization that uses SAML single sign-on, you'll need to authorize it first. 詳しい情報については、「[SAML シングルサインオンで使うために SSH キーを認可する](/articles/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)」を参照してください。{% endif %}

定期的に [SSH キーのリストをレビュー](/articles/reviewing-your-ssh-keys)し、不正になったものや悪用されたものを取り除くことをおすすめします。

{% if currentVersion == "free-pro-team@latest" %}
If you haven't used your SSH key for a year, then
{% data variables.product.prodname_dotcom %} will automatically delete your inactive SSH key as a security precaution. 詳細は「[削除されたか存在しない SSH キー](/articles/deleted-or-missing-ssh-keys)」を参照してください。
{% endif %}

SSH 証明書を提供する Organization のメンバーである場合、{% data variables.product.product_name %} アカウントにあなたの証明書を追加することなく、その証明書で Organization のリポジトリにアクセスできます。 詳しい情報については、「[SSH 認証局について](/articles/about-ssh-certificate-authorities)」を参照してください。

### 参考リンク

- [既存の SSH キーのチェック](/articles/checking-for-existing-ssh-keys)
- [SSH コネクションのテスト](/articles/testing-your-ssh-connection)
- [SSH キーのパスフレーズを使う](/articles/working-with-ssh-key-passphrases)
- [SSH のトラブルシューティング](/articles/troubleshooting-ssh)
{%- if currentVersion == "free-pro-team@latest" %}
- [SAML シングルサインオンで使うためにSSHキーを認可する](/articles/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)
{%- endif %}
