---
title: SSH について
intro: 'SSH プロトコルを利用すれば、リモートのサーバーやサービスに接続し、認証を受けられます。 SSH キーを使用すると、アクセスのたびにユーザ名と個人アクセストークンを入力することなく {% data variables.product.product_name %} に接続できます。'
redirect_from:
  - /articles/about-ssh
  - /github/authenticating-to-github/about-ssh
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - SSH
---

When you set up SSH, you will need to generate a new SSH key and add it to the ssh-agent. You must add the SSH key to your account on {% data variables.product.product_name %} before you use the key to authenticate. For more information, see "[Generating a new SSH key and adding it to the ssh-agent](/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)" and "[Adding a new SSH key to your {% data variables.product.prodname_dotcom %} account](/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account)."

You can further secure your SSH key by using a hardware security key, which requires the physical hardware security key to be attached to your computer when the key pair is used to authenticate with SSH. You can also secure your SSH key by adding your key to the ssh-agent and using a passphrase. 詳しい情報については[SSH キーのパスフレーズを使う](/github/authenticating-to-github/working-with-ssh-key-passphrases)を参照してください。

{% if currentVersion == "free-pro-team@latest" %}To use your SSH key with a repository owned by an organization that uses SAML single sign-on, you must authorize the key. 詳しい情報については、「[SAML シングルサインオンで使うために SSH キーを認可する](/articles/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)」を参照してください。{% endif %}

To maintain account security, you can regularly review your SSH keys list and revoke any keys that are invalid or have been compromised. 詳細は「[SSH キーをレビューする](/github/authenticating-to-github/reviewing-your-ssh-keys)」を参照してください。

{% if currentVersion == "free-pro-team@latest" %}
SSH キーを 1 年間使っていない場合、セキュリティ上の理由により {% data variables.product.prodname_dotcom %} は使われていない SSH キーを自動的に削除します。 詳細は「[削除されたか存在しない SSH キー](/articles/deleted-or-missing-ssh-keys)」を参照してください。
{% endif %}

SSH 証明書を提供する Organization のメンバーである場合、{% data variables.product.product_name %} アカウントにあなたの証明書を追加することなく、その証明書で Organization のリポジトリにアクセスできます。 詳しい情報については、「[SSH 認証局について](/articles/about-ssh-certificate-authorities)」を参照してください。

### 参考リンク

- [既存の SSH キーのチェック](/articles/checking-for-existing-ssh-keys)
- [SSH コネクションのテスト](/articles/testing-your-ssh-connection)
- [SSH のトラブルシューティング](/articles/troubleshooting-ssh)
