---
title: 個人のメールアドレスを公開するコマンドラインのプッシュのブロック
intro: If you've chosen to keep your email address private when performing web-based operations, you can also choose to block command line pushes that may expose your personal email address.
redirect_from:
- /articles/blocking-command-line-pushes-that-expose-your-personal-email-address
- /github/setting-up-and-managing-your-github-user-account/blocking-command-line-pushes-that-expose-your-personal-email-address
- /github/setting-up-and-managing-your-github-user-account/managing-email-preferences/blocking-command-line-pushes-that-expose-your-personal-email-address
versions:
  fpt: '*'
  ghec: '*'
topics:
- Accounts
- Notifications
shortTitle: Block push with personal email
ms.openlocfilehash: e085c19339cc530537626d9bf987125aebfd3427
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 05/17/2022
ms.locfileid: "145090082"
---
コマンド ラインからコミットをプッシュすると、[Git で設定](/articles/setting-your-commit-email-address)したメール アドレスがコミットに関連付けられます。 この設定を有効にした場合、GitHub にプッシュするたびに、最新のコミットが確認されます。 そのコミットの作成者のメール アドレスが GitHub アカウントのプライベート メール アドレスである場合は、プッシュはブロックされ、プライベート メール アドレスの公開について警告されます。

{% data reusables.user-settings.about-commit-email-addresses %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.emails %} {% data reusables.user-settings.keeping_your_email_address_private %}
4. コマンド ラインからプッシュするコミットでメール アドレスを非公開に保つには、 **[メール アドレスを公開するコマンド ライン プッシュをブロックする]** を選択します。
![メール アドレスを公開するコマンド ライン プッシュをブロックするオプション](/assets/images/help/settings/email_privacy_block_command_line_pushes.png)

## <a name="further-reading"></a>参考資料

- 「[コミット メール アドレスを設定する](/articles/setting-your-commit-email-address)」
