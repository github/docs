---
title: GitHub アカウントへの新しい GPG キーの追加
intro: '{% data variables.product.product_name %} アカウントが新しい (あるいは既存の) GPG キーを使うように設定するには、そのキーを {% data variables.product.product_name %} アカウントに追加する必要もあります。'
redirect_from:
  - /articles/adding-a-new-gpg-key-to-your-github-account
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

新しい GPG キーを {% data variables.product.product_name %} アカウントに追加する前に、以下のことを済ませておかなければなりません:
- [既存の GPG キーの確認](/articles/checking-for-existing-gpg-keys)
- [新しい GPG キーの生成とコピー](/articles/generating-a-new-gpg-key)

{% data reusables.gpg.supported-gpg-key-algorithms %}

署名の検証の際には、署名が抽出され、そのキー id のパースが試行されます。 そのキー id が、{% data variables.product.product_name %}にアップロードされたキーと照合されます。 GPG キーが {% data variables.product.product_name %}にアップロードされるまで、署名は検証できません。

### GPG キーの追加

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.ssh %}
3. [**New GPG key**] をクリックします。 ![GPG キーボタン](/assets/images/help/settings/gpg-add-gpg-key.png)
4. [Key] フィールドに、[GPG キーを生成](/articles/generating-a-new-gpg-key)したときにコピーした GPG キーを貼り付けます。 ![キーフィールド](/assets/images/help/settings/gpg-key-paste.png)
5. [**Add GPG key**] をクリックします。 ![キーの追加ボタン](/assets/images/help/settings/gpg-add-key.png)
6. 処理を確認するには、{% data variables.product.product_name %}のパスワードを入力します。

### 参考リンク

* [既存の GPG キーのチェック](/articles/checking-for-existing-gpg-keys)
* [新しい GPG キーの生成](/articles/generating-a-new-gpg-key)
* 「[Git へ署名キーを伝える](/articles/telling-git-about-your-signing-key)」
* [GPG キーとメールの関連付け](/articles/associating-an-email-with-your-gpg-key)
* [GPG キーを使ったコミットとタグへの署名](/articles/signing-commits-and-tags-using-gpg)
