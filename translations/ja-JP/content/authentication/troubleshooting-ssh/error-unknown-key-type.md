---
title: 'エラー: 不明なキーの種類'
intro: 'このエラーは、使用した SSH キーの種類が認識されないか、SSH クライアントでサポートされていないことを意味します。 '
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
redirect_from:
  - /github/authenticating-to-github/error-unknown-key-type
  - /github/authenticating-to-github/troubleshooting-ssh/error-unknown-key-type
ms.openlocfilehash: 83bf8714255a4d8f028beb73fd5c8fbcdbb0ef52
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147065899'
---
## `unknown key type` エラーについて

新しい SSH キーを生成するときに、SSH クライアントが指定したキーの種類をサポートしていない場合、`unknown key type` エラーが発生することがあります。{% mac %}macOS でこの問題を解決するには、SSH クライアントを更新するか、新しい SSH クライアントをインストールします。

## 前提条件

Homebrew がインストールされている必要があります。 詳細については、Homebrew ドキュメントの[インストール ガイド](https://docs.brew.sh/Installation)を参照してください。

## 問題の解決

{% warning %}

**警告:** OpenSSH をインストールすると、お使いのコンピューターで Apple キーチェーンに保存されているパスフレーズを取得できなくなります。 SSH を使用して {% data variables.product.prodname_dotcom %} または別の Web サービスへの認証を行うたびに、パスフレーズを入力するか、ハードウェア セキュリティ キーを操作する必要があります。

OpenSSH を削除すると、キーチェーンに保存されているパスフレーズが再び取得できるようになります。 ターミナルでコマンド `brew uninstall openssh` を入力すると、OpenSSH を削除できます。

{% endwarning %}

1. ターミナルを開きます。
2. `brew install openssh` コマンドを入力します。
3. ターミナルを終了して再起動します。
4. 新しい SSH キーを生成する手順をもう一度試してください。 詳細については、「[新しい SSH キーを生成して ssh-agent に追加する](/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#generating-a-new-ssh-key-for-a-hardware-security-key)」を参照してください。

{% endmac %}{% linux %}Linux でこの Issue を解決するには、Linux ディストリビューションのパッケージ マネージャーを使用して新しいバージョンの OpenSSH をインストールするか、ソースから新しいバージョンをコンパイルします。 別のバージョンの OpenSSH をインストールした場合、SSH 経由で認証する他のアプリケーションの機能が影響を受ける可能性があります。 詳細については、ディストリビューションのドキュメントを参照してください。{% endlinux %}
