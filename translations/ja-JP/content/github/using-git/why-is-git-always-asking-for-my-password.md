---
title: Git が常にパスワードを要求するのはなぜですか？
intro: GitHub とやり取りしようとするたびに Git がユーザ名とパスワードの入力を求めてくる場合は、おそらくリポジトリに HTTPS クローン URL を使用しています。
redirect_from:
  - /articles/why-is-git-always-asking-for-my-password
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

HTTPS リモート URL を使用すると、 SSH を使用するときと比べていくつかの利点があります。 SSH よりも、設定が簡単です。 通常は厳密なファイアウォールやプロキシを介して動作します。 ただし、リポジトリをプルまたはプッシュするたびに GitHub の認証情報を入力するように求められます。

[認証情報をキャッシュする](/github/using-git/caching-your-github-credentials-in-git)よう Git を設定すれば、パスワードの入力を求められなくなります。 {% data reusables.user_settings.password-authentication-deprecation %}

認証情報のキャッシュを設定すると、HTTPS を使用してリポジトリをプルまたはプッシュするとき、Git は自動的にパスワードではなくキャッシュされた個人アクセストークンを使用します。


### 参考リンク

* [どのリモート URL を使うべきか](/articles/which-remote-url-should-i-use/#cloning-with-https-urls)
* "[{% data variables.product.prodname_dotcom %} への認証について](/github/authenticating-to-github/about-authentication-to-github)"
* [ssh-agent に SSH キーを追加する](/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#adding-your-ssh-key-to-the-ssh-agent)
