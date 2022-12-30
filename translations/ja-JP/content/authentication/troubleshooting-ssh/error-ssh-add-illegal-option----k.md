---
title: 'Error: ssh-add: illegal option -- K'
intro: このエラーは、`ssh-add` のバージョンが、パスフレーズをキーチェーンに保存できる、macOS のキーチェーン統合をサポートしていないことを意味しています。
redirect_from:
  - /articles/error-ssh-add-illegal-option-k
  - /articles/error-ssh-add-illegal-option----k
  - /github/authenticating-to-github/error-ssh-add-illegal-option----k
  - /github/authenticating-to-github/troubleshooting-ssh/error-ssh-add-illegal-option----k
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: 'ssh-add: illegal option -- K'
ms.openlocfilehash: a9c563f637d2deb544611c8b357761ff1148fa1c
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145088200'
---
`-K` オプションは、`ssh-add` の Apple の標準バージョンであり、ssh-agent に SSH キーを追加すると、パスフレーズがキーチェーンに自動的に格納されます。 別のバージョンの `ssh-add` をインストールしている場合は、`-K` のサポートがないことがあります。

## 問題の解決

SSH プライベートキーを ssh-agent に追加するには、`ssh-add` の Apple のバージョンへのパスを指定できます。

```shell
  $ /usr/bin/ssh-add -K ~/.ssh/id_ed25519
```

{% note %}

**注:** {% data reusables.ssh.add-ssh-key-to-ssh-agent %}

{% endnote %}

## 参考資料

- 「[新しい SSH キーを生成して ssh-agent に追加する](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)」
- [SSH-ADD の Linux man ページ](http://man7.org/linux/man-pages/man1/ssh-add.1.html)
- SSH-ADD の Apple man ページを表示するには、ターミナルで `man ssh-add` を実行します
