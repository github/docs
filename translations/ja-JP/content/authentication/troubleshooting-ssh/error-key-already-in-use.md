---
title: 'Error: Key already in use'
intro: 'このエラーは、既に別のアカウントまたはリポジトリに追加されている[キーを追加](/articles/adding-a-new-ssh-key-to-your-github-account)しようとすると発生します。'
redirect_from:
  - /articles/error-key-already-in-use
  - /github/authenticating-to-github/error-key-already-in-use
  - /github/authenticating-to-github/troubleshooting-ssh/error-key-already-in-use
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
ms.openlocfilehash: d202de2efe05951fe829a8198b20831fc15bbd72
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145088212'
---
## キーが使用されている場所を見つける

キーが既に使用されている場所を判断するには、ターミナルを開いて、`ssh` コマンドを入力します。 `-i` フラグを使用して、確認するキーへのパスを指定します。

```shell
$ ssh -T -ai <em>~/.ssh/id_rsa</em> git@{% data variables.command_line.codeblock %}
# Connect to {% data variables.product.product_location %} using a specific ssh key
> Hi <em>username</em>! You've successfully authenticated, but GitHub does not
> provide shell access.
```

応答内の *username* は、キーが現在アタッチされている {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} 上のアカウントです。 応答が "username/repo" のように表示されている場合、キーは、["*デプロイ キー*"](/guides/managing-deploy-keys#deploy-keys) としてリポジトリにアタッチされています。


コマンド ラインに指定されているキーのみを SSH に使用するように強制するには、`-o` を使用して、`IdentitiesOnly=yes` オプションを追加します。

```shell
$ ssh -v -o "IdentitiesOnly=yes" -i <em>~/.ssh/id_rsa</em> git@{% data variables.command_line.codeblock %}
```

## 問題の解決

Issue を解決するには、まず他のアカウントまたはリポジトリからキーを削除して、次に[アカウントに追加](/articles/adding-a-new-ssh-key-to-your-github-account)します。

キーを転送する権限を持っておらず、権限を持つユーザーに連絡できない場合は、そのキーペアを削除して、[新しいキーペアを生成](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)します。

## デプロイ キー

キーがリポジトリにデプロイキーとして一度添付されたら、他のリポジトリで使用することはできません。  デプロイ キーの設定中にこのエラーが発生した場合は、「[Managing deploy keys](/guides/managing-deploy-keys)」 (デプロイキーの管理) を参照してください。
