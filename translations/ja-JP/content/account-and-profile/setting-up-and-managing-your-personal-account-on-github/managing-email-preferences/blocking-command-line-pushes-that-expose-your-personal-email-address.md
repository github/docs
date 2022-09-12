---
title: 個人のメールアドレスを公開するコマンドラインのプッシュのブロック
intro: Web ベースの操作をする際にメールアドレスをプライベートに保つよう選択したなら、個人のメールアドレスを公開してしまうかもしれないコマンドラインのプッシュをブロックするように選択することもできます。
redirect_from:
  - /articles/blocking-command-line-pushes-that-expose-your-personal-email-address
  - /github/setting-up-and-managing-your-github-user-account/blocking-command-line-pushes-that-expose-your-personal-email-address
  - /github/setting-up-and-managing-your-github-user-account/managing-email-preferences/blocking-command-line-pushes-that-expose-your-personal-email-address
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-email-preferences/blocking-command-line-pushes-that-expose-your-personal-email-address
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Accounts
  - Notifications
shortTitle: Block push with personal email
ms.openlocfilehash: 2c79886af1e35e0f02419610dfca1459a9693731
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145165462'
---
コマンド ラインからコミットをプッシュすると、[Git で設定](/articles/setting-your-commit-email-address)したメール アドレスがコミットに関連付けられます。 この設定を有効にした場合、GitHub にプッシュするたびに、最新のコミットが確認されます。 そのコミットの作成者のメール アドレスが GitHub アカウントのプライベート メール アドレスである場合は、プッシュはブロックされ、プライベート メール アドレスの公開について警告されます。

{% data reusables.user-settings.about-commit-email-addresses %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.emails %} {% data reusables.user-settings.keeping_your_email_address_private %}
4. コマンド ラインからプッシュするコミットでメール アドレスを非公開に保つには、 **[メール アドレスを公開するコマンド ライン プッシュをブロックする]** を選択します。
![メール アドレスを公開するコマンド ライン プッシュをブロックするオプション](/assets/images/help/settings/email_privacy_block_command_line_pushes.png)

## 参考資料

- 「[コミット メール アドレスを設定する](/articles/setting-your-commit-email-address)」
