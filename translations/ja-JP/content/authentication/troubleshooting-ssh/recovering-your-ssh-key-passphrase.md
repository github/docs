---
title: SSH キーのパスフレーズのリカバリ
intro: SSH キーのパスフレーズをなくした場合、ご使用のオペレーティングシステムによって、リカバリができることもあれば、SSH キーのパスフレーズを新たに生成することが必要なこともあります。
redirect_from:
  - /articles/how-do-i-recover-my-passphrase
  - /articles/how-do-i-recover-my-ssh-key-passphrase
  - /articles/recovering-your-ssh-key-passphrase
  - /github/authenticating-to-github/recovering-your-ssh-key-passphrase
  - /github/authenticating-to-github/troubleshooting-ssh/recovering-your-ssh-key-passphrase
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: Recover SSH key passphrase
ms.openlocfilehash: 28d768e81f3076898c23b2b1668314ae5573ec5c
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145088163'
---
{% mac %}

[macOS キーチェーンを使用して SSH パスフレーズを構成](/articles/working-with-ssh-key-passphrases#saving-your-passphrase-in-the-keychain)した場合は、リカバリできる場合があります。

1. Finder で、**キーチェーン アクセス** アプリを検索します。
   ![スポットライト検索バー](/assets/images/help/setup/keychain-access.png)
2. キーチェーン アクセスで、**SSH** を検索します。
3. SSH キーのエントリをダブルクリックして、新しいダイアログボックスを開きます。
4. 左下隅で、 **[パスワードを表示]** を選択します。
   ![キーチェーン アクセス ダイアログ](/assets/images/help/setup/keychain_show_password_dialog.png)
5. 管理者パスワードを入力するようプロンプトが表示されます。 [Keychain Access] ダイアログボックスに入力します。
6. パスワードのマスクが解除されます。

{% endmac %}

{% windows %}

SSH キーパスフレーズをなくした場合、リカバリの方法はありません。 代わりに GitHub パスワードを使用できるように、[新しい SSH キーペアを生成](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)するか、[HTTPS 複製に切り替える](/github/getting-started-with-github/managing-remote-repositories)必要があります。

{% endwindows %}

{% linux %}

SSH キーパスフレーズをなくした場合、リカバリの方法はありません。 代わりに GitHub パスワードを使用できるように、[新しい SSH キーペアを生成](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)するか、[HTTPS 複製に切り替える](/github/getting-started-with-github/about-remote-repositories/#cloning-with-https-urls)必要があります。

{% endlinux %}
