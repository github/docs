---
title: Adding a GPG key to your GitHub account
intro: 'To configure your account on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} to use your new (or existing) GPG key, you''ll also need the key to your account.'
redirect_from:
  - /articles/adding-a-gpg-key-to-your-github-account
  - /github/authenticating-to-github/adding-a-new-gpg-key-to-your-github-account
  - /github/authenticating-to-github/managing-commit-signature-verification/adding-a-new-gpg-key-to-your-github-account
  - /articles/updating-an-expired-gpg-key
  - /authentication/troubleshooting-commit-signature-verification/updating-an-expired-gpg-key
  - /github/authenticating-to-github/updating-an-expired-gpg-key
  - /github/authenticating-to-github/troubleshooting-commit-signature-verification/updating-an-expired-gpg-key
  - /authentication/managing-commit-signature-verification/adding-a-new-gpg-key-to-your-github-account
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Add a GPG key
---

## About addition of GPG keys to your account

To sign commits associated with your account on {% data variables.product.product_name %}, you can add a public GPG key to your personal account. Before you add a key, you should check for existing keys. If you don't find any existing keys, you can generate and copy a new key. For more information, see "[Checking for existing GPG keys](/articles/checking-for-existing-gpg-keys)" and "[Generating a new GPG key](/articles/generating-a-new-gpg-key)."

You can add multiple public keys to your account on {% data variables.product.product_name %}. Commits signed by any of the corresponding private keys will show as verified. If you remove a public key, any commits signed by the corresponding private key will no longer show as verified.

{% ifversion upload-expired-or-revoked-gpg-key %}
To verify as many of your commits as possible, you can add expired and revoked keys. If the key meets all other verification requirements, commits that were previously signed by any of the corresponding private keys will show as verified and indicate that their signing key is expired or revoked.

![A verified commit whose key expired](/assets/images/help/settings/gpg-verified-with-expired-key.png)
{% endif %}

{% data reusables.gpg.supported-gpg-key-algorithms %}

When verifying a signature, {% data variables.product.product_name %} extracts the signature and attempts to parse its key ID. The key ID is then matched with keys added to {% data variables.product.product_name %}. Until a matching GPG key is added to {% data variables.product.product_name %}, it cannot verify your signatures.

## GPG キーの追加

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.ssh %}
3. [**New GPG key**] をクリックします。 ![GPG キーボタン](/assets/images/help/settings/gpg-add-gpg-key.png)
4. [Key] フィールドに、[GPG キーを生成](/articles/generating-a-new-gpg-key)したときにコピーした GPG キーを貼り付けます。 ![キーフィールド](/assets/images/help/settings/gpg-key-paste.png)
5. [**Add GPG key**] をクリックします。 ![キーの追加ボタン](/assets/images/help/settings/gpg-add-key.png)
6. 処理を確認するには、{% data variables.product.product_name %}のパスワードを入力します。

{% ifversion upload-expired-or-revoked-gpg-key %}
{% else %}
## 期限切れ GPG キーを更新する

署名を検証するとき、{% data variables.product.product_name %} は、キーが取り消しまたは期限切れになっていないか確認します。 もしサインインのキーが取り消しまたは期限切れになっている場合、{% data variables.product.product_name %} は、お客様の署名を検証できません。

If your key is expired, you must [update its expiration](https://www.gnupg.org/gph/en/manual.html#AEN329), export the new key, delete the expired key in your account on {% data variables.product.product_name %}, and add the new key to your account as described above. キーが他のすべての検証の要件を満たしている限り、過去のコミットとタグは、検証済みとして表示されます。

キーが取り消されている場合、プライマリーまたは取り消されていない他のキーを使って、コミットに署名します。

キーが無効でキーセットに他に有効なキーを所有していないが、新しいクレデンシャルのセットで新しい GPG キーを作成した場合、取り消されたまたは期限切れのキーで作成されたコミットは、未検証として表示され続けます。 Also, your new credentials will not be able to re-sign or verify your old commits and tags.
{% endif %}

## 参考リンク

- [既存の GPG キーのチェック](/articles/checking-for-existing-gpg-keys)
- [新しい GPG キーの生成](/articles/generating-a-new-gpg-key)
- 「[Git へ署名キーを伝える](/articles/telling-git-about-your-signing-key)」
- [GPG キーとメールの関連付け](/articles/associating-an-email-with-your-gpg-key)
- [GPG キーを使ったコミットとタグへの署名](/articles/signing-commits-and-tags-using-gpg)
- [コミット署名の検証について](/articles/about-commit-signature-verification)
