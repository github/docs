---
title: macOS キーチェーンからの認証情報を更新する
intro: '{% data variables.product.product_name %} で{% ifversion not ghae %}ユーザー名、パスワード、または{% endif %}個人アクセス トークンを変更した場合は、保存されている認証情報を `git-credential-osxkeychain` ヘルパーで更新する必要があります。'
redirect_from:
  - /articles/updating-credentials-from-the-osx-keychain
  - /github/using-git/updating-credentials-from-the-osx-keychain
  - /github/using-git/updating-credentials-from-the-macos-keychain
  - /github/getting-started-with-github/updating-credentials-from-the-macos-keychain
  - /github/getting-started-with-github/getting-started-with-git/updating-credentials-from-the-macos-keychain
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: macOS Keychain credentials
ms.openlocfilehash: ce2e225bcff1aca0c034e564fe3233e5f9cb68d2
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145131267'
---
{% tip %}

**注:** macOS キーチェーンからの資格情報の更新は、macOS に組み込まれている `osxkeychain` ヘルパーを使って PAT を手動で構成したユーザーにのみ適用されます。 

代わりに、[SSH を構成する](/articles/generating-an-ssh-key)か、[Git Credential Manager](/get-started/getting-started-with-git/caching-your-github-credentials-in-git) (GCM) にアップグレードすることをお勧めします。 GCM は、2FA (2 要素認証) を含め、ユーザーに代わって認証を管理できます (手動の PAT は不要)。

{% endtip %}

{% data reusables.user-settings.password-authentication-deprecation %}

## キーチェーンアクセスを介して認証情報を更新する

1. メニューバーの右側にある Spotlight アイコン (虫眼鏡) をクリックします。 「`Keychain access`」と入力して Enter キーを押し、アプリを起動します。
   ![スポットライト検索バー](/assets/images/help/setup/keychain-access.png)
2. キーチェーン アクセスで、 **{% data variables.command_line.backticks %}** を検索します。
3. `{% data variables.command_line.backticks %}` の "インターネット パスワード" エントリを見つけます。
4. 適宜、エントリを編集または削除します。

## コマンドラインで認証情報を削除する

コマンドラインから、認証情報ヘルパーを直接使用して、キーチェーンエントリを消去できます。

```shell
$ git credential-osxkeychain erase
host={% data variables.command_line.codeblock %}
protocol=https
> <em>[Press Return]</em>
```

成功した場合、何も出力されません。機能することをテストするには、{% data variables.product.product_location %} からプライベート リポジトリをクローンしてみます。 パスワードの入力を求められた場合は、キーチェーンエントリが削除されています。

## 参考資料

- [Git に {% data variables.product.prodname_dotcom %} の認証情報をキャッシュする](/github/getting-started-with-github/caching-your-github-credentials-in-git/)
