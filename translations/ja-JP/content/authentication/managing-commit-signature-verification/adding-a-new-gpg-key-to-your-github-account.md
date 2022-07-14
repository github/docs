---
title: GitHub アカウントへの新しい GPG キーの追加
intro: 'To configure your account on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} to use your new (or existing) GPG key, you''ll also need the key to your account.'
redirect_from:
  - /articles/adding-a-new-gpg-key-to-your-github-account
  - /github/authenticating-to-github/adding-a-new-gpg-key-to-your-github-account
  - /github/authenticating-to-github/managing-commit-signature-verification/adding-a-new-gpg-key-to-your-github-account
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Add a new GPG key
---

Before adding a new GPG key to your account on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}, you should have:
- [既存の GPG キーの確認](/articles/checking-for-existing-gpg-keys)
- [新しい GPG キーの生成とコピー](/articles/generating-a-new-gpg-key)

You can add multiple public keys to your GitHub account. Commits signed by any of the corresponding private keys will show as verified. If you remove a public key, any commits signed by the corresponding private key will no longer show as verified.

{% data reusables.gpg.supported-gpg-key-algorithms %}

署名の検証の際には、署名が抽出され、そのキー id のパースが試行されます。 そのキー id が、{% data variables.product.product_name %}にアップロードされたキーと照合されます。 GPG キーが {% data variables.product.product_name %}にアップロードされるまで、署名は検証できません。

## GPG キーの追加

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.ssh %}
3. [**New GPG key**] をクリックします。 ![GPG キーボタン](/assets/images/help/settings/gpg-add-gpg-key.png)
4. [Key] フィールドに、[GPG キーを生成](/articles/generating-a-new-gpg-key)したときにコピーした GPG キーを貼り付けます。 ![キーフィールド](/assets/images/help/settings/gpg-key-paste.png)
5. [**Add GPG key**] をクリックします。 ![キーの追加ボタン](/assets/images/help/settings/gpg-add-key.png)
6. 処理を確認するには、{% data variables.product.product_name %}のパスワードを入力します。

## 参考リンク

* [既存の GPG キーのチェック](/articles/checking-for-existing-gpg-keys)
* [新しい GPG キーの生成](/articles/generating-a-new-gpg-key)
* 「[Git へ署名キーを伝える](/articles/telling-git-about-your-signing-key)」
* [GPG キーとメールの関連付け](/articles/associating-an-email-with-your-gpg-key)
* [GPG キーを使ったコミットとタグへの署名](/articles/signing-commits-and-tags-using-gpg)
