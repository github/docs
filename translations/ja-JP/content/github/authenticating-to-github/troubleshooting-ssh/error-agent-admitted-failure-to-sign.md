---
title: 'Error: Agent admitted failure to sign'
intro: 'ごくまれに、Linux で SSH 経由で {% data variables.product.product_name %} に接続すると、「Agent admitted failure to sign using the key」というエラーが発生する場合があります。 この問題を解決するには以下の手順に従ってください。'
redirect_from:
  - /articles/error-agent-admitted-failure-to-sign-using-the-key/
  - /articles/error-agent-admitted-failure-to-sign
  - /github/authenticating-to-github/error-agent-admitted-failure-to-sign
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - SSH
---
Linux コンピュータで {% data variables.product.product_location %}に SSH 接続しようとすると、ターミナルに以下のメッセージが表示されることがあります:

```shell
$ ssh -vT git@{% data variables.command_line.codeblock %}
> ...
> Agent admitted failure to sign using the key.
> debug1: No more authentication methods to try.
> Permission denied (publickey).
```

詳細については、<a href="https://bugs.launchpad.net/ubuntu/+source/gnome-keyring/+bug/201786" data-proofer-ignore>こちらの問題レポート</a>をご覧ください。

### 解決策

`ssh-add` を使用してキーを SSH エージェントに読み込ませることでこのエラーを解決できます。

```shell
# バックグラウンドで ssh-agent を開始
$ eval "$(ssh-agent -s)"
> Agent pid 59566
$ ssh-add
> Enter passphrase for /home/<em>you</em>/.ssh/id_rsa: <em>[tippy tap]</em>
> Identity added: /home/<em>you</em>/.ssh/id_rsa (/home/<em>you</em>/.ssh/id_rsa)
```

キーのファイル名がデフォルト (`/.ssh/id_rsa`) ではない場合、そのパスを `ssh-add` に渡す必要があります。

```shell
# バックグラウンドで ssh-agent を開始
$ eval "$(ssh-agent -s)"
> Agent pid 59566
$ ssh-add ~/.ssh/my_other_key
> Enter passphrase for /home/<em>you</em>/.ssh/my_other_key: <em>[tappity tap tap]</em>
> Identity added: /home/<em>you</em>/.ssh/my_other_key (/home/<em>you</em>/.ssh/my_other_key)
```
