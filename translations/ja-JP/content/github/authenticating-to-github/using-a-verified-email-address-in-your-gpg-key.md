---
title: GPG キーで検証済みのメールアドレスを使う
intro: '署名を検証するとき、{% data variables.product.product_name %} は、コミッターまたはタガーのメールアドレスが GPG キーの ID からのメールアドレスと一致し、ユーザアカウントの確認済みメールアドレスであることを確認します。 これにより、キーが自分のものであり、自分がコミットまたはタグを作成したことが保証されます。'
redirect_from:
  - /articles/using-a-verified-email-address-in-your-gpg-key
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Identity
  - Access management
---

{% if currentVersion == "free-pro-team@latest" %}
GitHub のメールアドレスを確認する必要がある場合は、「[メールアドレスを検証する](/articles/verifying-your-email-address/)」を参照してください。
{% endif %}GPG キーのメールアドレスを更新または追加する必要がある場合は、「[メールを GPG キーに関連付ける](/articles/associating-an-email-with-your-gpg-key)」を参照してください。

コミットとタグには複数のメールアドレスが含まれる場合があります。 コミットについては、作者 - コードを書いた人 - とコミッター - ツリーにコミットを追加した人がいます。 マージ中、チェリーピック中、あるいは通常の `git commit` のいずれであっても、Git でコミットに署名すると、作者のメールアドレスがそうでなくても、コミッターのメールアドレスがあなたのものになります。 タグの方が簡単です: タガーのメールアドレスは常にタグを作成したユーザです。

コミッターまたはタガーのメールアドレスを変更する必要がある場合は、「[コミットメールアドレスを設定する](/articles/setting-your-commit-email-address/)」を参照してください。

### 参考リンク

- [コミット署名の検証について](/articles/about-commit-signature-verification)
