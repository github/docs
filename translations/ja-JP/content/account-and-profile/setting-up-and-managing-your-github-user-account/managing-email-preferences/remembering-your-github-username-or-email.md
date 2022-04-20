---
title: 自分の GitHub ユーザ名またはメールアドレスを忘れた場合は
intro: '{% data variables.product.product_location %} へのサインインは久しぶりでしょうか? そうであれば、改めてようこそ。 If you can''t remember the username for your personal account on {% data variables.product.product_name %}, you can try these methods for remembering it.'
redirect_from:
  - /articles/oh-noes-i-ve-forgotten-my-username-email
  - /articles/oh-noes-i-ve-forgotten-my-username-or-email
  - /articles/remembering-your-github-username-or-email
  - /github/setting-up-and-managing-your-github-user-account/remembering-your-github-username-or-email
  - /github/setting-up-and-managing-your-github-user-account/managing-email-preferences/remembering-your-github-username-or-email
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Accounts
  - Notifications
shortTitle: Find your username or email
---

{% mac %}

## {% data variables.product.prodname_desktop %}ユーザ

1. [**GitHub Desktop**] メニューで、[**Preferences**] をクリックします。
2. [Preferences] ウィンドウで、次のことについて検証します:
    - {% data variables.product.product_name %}ユーザ名を表示するには [**Accounts**] をクリックします。
    - Git メールを表示するには [**Git**] をクリックします。 このメールは [{% data variables.product.product_name %} のプライマリメール](/articles/changing-your-primary-email-address)となることが保証されているわけではありませんので、注意してください。

{% endmac %}

{% windows %}

## {% data variables.product.prodname_desktop %}ユーザ

1. [**File**] メニューで、[**Options**] をクリックします。
2. [Options] ウィンドウで、次のことについて検証します:
    - {% data variables.product.product_name %}ユーザ名を表示するには [**Accounts**] をクリックします。
    - Git メールを表示するには [**Git**] をクリックします。 このメールは [{% data variables.product.product_name %} のプライマリメール](/articles/changing-your-primary-email-address)となることが保証されているわけではありませんので、注意してください。

{% endwindows %}

## `user.name` 設定からユーザ名を見つける

セットアップ時に、[Git でユーザ名を設定](/github/getting-started-with-github/setting-your-username-in-git)してあることがあります。 その場合は、次の設定で値をレビューします:

```shell
$ git config user.name
# 設定を見る
<em>あなたのユーザ名</em>
```

## リモートリポジトリの URL からユーザ名を見つける

作成またはフォークしたパーソナルリポジトリのローカルコピーがある場合は、リモートリポジトリの URL をチェックします。

{% tip %}

**参考**: この方法が使えるのは、元のリポジトリか他の個人のリポジトリの独自のフォークがある場合のみです。 他の個人のリポジトリのクローンを作成した場合、ご自分のではなく、その個人のユーザ名が表示されます。 同様に、Organization リポジトリでは、リモート URL の特定のユーザのではなく Organization の名前が表示されます。

{% endtip %}

```shell
$ cd <em>ご使用のリポジトリ</em>
# 初期化された Git リポジトリへディレクトリを変更する
$ git remote -v
origin  https://{% data variables.command_line.codeblock %}/<em>ご使用のユーザ名</em>/<em>ご使用のリポジトリ</em>.git (fetch)
origin  https://{% data variables.command_line.codeblock %}/<em>ご使用のユーザ名</em>/<em>ご使用のリポジトリ</em>.git (push)
```

ご使用のユーザ名は `https://{% data variables.command_line.backticks %}/` の直後にあるものです。

{% ifversion fpt or ghec %}
## 参考リンク

- "[メールアドレスを検証する](/articles/verifying-your-email-address)"
{% endif %}
