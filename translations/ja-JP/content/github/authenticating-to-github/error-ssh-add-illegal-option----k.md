---
title: 'Error: ssh-add: illegal option -- K'
intro: 'このエラーは、「ssh-add」のバージョンが、パスフレーズをキーチェーンに保管できる機能である、macOS のキーチェーンインテグレーションをサポートしていないことを意味しています。'
redirect_from:
  - /articles/error-ssh-add-illegal-option-k
  - /articles/error-ssh-add-illegal-option----k
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

`-K` オプションは、`ssh-add` の Apple の標準バージョン内にあり、ssh-agent に SSH キーを追加する際にキーチェーンにパスフレーズを保存します。 `ssh-add` の別のバージョンをインストールした場合は、`-K` がサポートされていない可能性があります。

### 問題の解決

SSH プライベートキーを ssh-agent に追加するには、`ssh-add` の Apple のバージョンへのパスを指定できます:

```shell
  $ /usr/bin/ssh-add -K ~/.ssh/id_rsa
```

{% note %}

**メモ:** {% data reusables.ssh.add-ssh-key-to-ssh-agent %}

{% endnote %}

### 参考リンク

- [新しい SSH キーを生成して ssh-agent へ追加する](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
- [SSH-ADD のための Linux man ページ](http://man7.org/linux/man-pages/man1/ssh-add.1.html)
- SSH-ADD 用の Apple の man ページを表示するには、ターミナルで `man ssh-add` を実行します
