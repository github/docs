---
title: 自分の GitHub ユーザ名またはメールアドレスを忘れた場合は
intro: Are you signing in to {% data variables.product.product_location %} for the first time in a while? If so, welcome back! If you can't remember the username for your personal account on {% data variables.product.product_name %}, you can try these methods for remembering it.
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
ms.openlocfilehash: 79cb3ba65390e384272540bd32a1ec9e598517f4
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 05/17/2022
ms.locfileid: "145090076"
---
{% mac %}

## <a name="-data-variablesproductprodname_desktop--users"></a>{% data variables.product.prodname_desktop %}ユーザ

1. **GitHub Desktop** メニューの **[基本設定]** をクリックします。
2. [Preferences] ウィンドウで、次のことについて検証します:
    - 自分の {% data variables.product.product_name %} ユーザー名を表示するには、 **[アカウント]** をクリックします。
    - Git メールを表示するには、 **[Git]** をクリックします。 このメール アドレスは、[ご自分のプライマリ {% data variables.product.product_name %} メール アドレス](/articles/changing-your-primary-email-address)であるとは限りません。

{% endmac %}

{% windows %}

## <a name="-data-variablesproductprodname_desktop--users"></a>{% data variables.product.prodname_desktop %}ユーザ

1. **[ファイル]** メニューの **[オプション]** をクリックします。
2. [Options] ウィンドウで、次のことについて検証します:
    - 自分の {% data variables.product.product_name %} ユーザー名を表示するには、 **[アカウント]** をクリックします。
    - Git メールを表示するには、 **[Git]** をクリックします。 このメール アドレスは、[ご自分のプライマリ {% data variables.product.product_name %} メール アドレス](/articles/changing-your-primary-email-address)であるとは限りません。
  
{% endwindows %}

## <a name="finding-your-username-in-your-username-configuration"></a>`user.name` の構成で自分のユーザー名を見つける

セットアップ中に、[Git で自分のユーザー名を設定](/github/getting-started-with-github/setting-your-username-in-git)している可能性があります。 その場合は、次の設定で値をレビューします:

```shell
$ git config user.name
# View the setting
<em>YOUR_USERNAME</em>
```

## <a name="finding-your-username-in-the-url-of-remote-repositories"></a>リモートリポジトリの URL からユーザ名を見つける

作成またはフォークしたパーソナルリポジトリのローカルコピーがある場合は、リモートリポジトリの URL をチェックします。

{% tip %}

**ヒント**: この方法が使えるのは、元のリポジトリか他の個人のリポジトリの独自のフォークがある場合のみです。 他の個人のリポジトリのクローンを作成した場合、ご自分のではなく、その個人のユーザ名が表示されます。 同様に、Organization リポジトリでは、リモート URL の特定のユーザのではなく Organization の名前が表示されます。

{% endtip %}

```shell
$ cd <em>YOUR_REPOSITORY</em>
# Change directories to the initialized Git repository
$ git remote -v
origin  https://{% data variables.command_line.codeblock %}/<em>YOUR_USERNAME</em>/<em>YOUR_REPOSITORY</em>.git (fetch)
origin  https://{% data variables.command_line.codeblock %}/<em>YOUR_USERNAME</em>/<em>YOUR_REPOSITORY</em>.git (push)
```

ユーザー名は `https://{% data variables.command_line.backticks %}/` の直後にあるものです。

{% ifversion fpt or ghec %}
## <a name="further-reading"></a>参考資料

- 「[メール アドレスを検証する](/articles/verifying-your-email-address)」 {% endif %}
