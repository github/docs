---
title: SSH キーのパスフレーズを使う
intro: SSH キーを使用するたびにパスフレーズを再入力する必要がないように、SSH キーを保護し、認証エージェントを設定できます。
redirect_from:
  - /ssh-key-passphrases
  - /working-with-key-passphrases
  - /articles/working-with-ssh-key-passphrases
  - /github/authenticating-to-github/working-with-ssh-key-passphrases
  - /github/authenticating-to-github/connecting-to-github-with-ssh/working-with-ssh-key-passphrases
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: SSH key passphrases
ms.openlocfilehash: 5ddacfa052b866fe1cbd601caa8a1ff9ab6934fd
ms.sourcegitcommit: 80842b4e4c500daa051eff0ccd7cde91c2d4bb36
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/12/2022
ms.locfileid: '147409116'
---
## SSH キーのパスフレーズについて

SSH キーにより、誰かがあなたのコンピューターにアクセスすると、攻撃者はそのキーを使用するすべてのシステムにアクセスできます。 セキュリティをさらに強化するには、SSH キーにパスフレーズを追加します。 接続するたびにパスフレーズを入力しないようにするために、SSH エージェントにパスフレーズを安全に保存できます。

## パスフレーズを追加または変更する

次のコマンドを入力して、鍵ペアを再生成せずに既存の秘密鍵のパスフレーズを変更できます:

```shell
$ ssh-keygen -p -f ~/.ssh/id_{% ifversion ghae %}rsa{% else %}ed25519{% endif %}
> Enter old passphrase: <em>[Type old passphrase]</em>
> Key has comment '<em>your_email@example.com</em>'
> Enter new passphrase (empty for no passphrase): <em>[Type new passphrase]</em>
> Enter same passphrase again: <em>[Repeat the new passphrase]</em>
> Your identification has been saved with the new passphrase.
```

鍵にすでにパスフレーズがある場合は、新しいパスフレーズに変更する前にそれを入力するように求められます。

{% windows %}

## Git for Windows で `ssh-agent` を自動的に起動する

bash または Git シェルを開いたときに、`ssh-agent` を自動的に実行できます。 次の行をコピーし、Git シェルの `~/.profile` または `~/.bashrc` ファイルに貼り付けます。

``` bash
env=~/.ssh/agent.env

agent_load_env () { test -f "$env" && . "$env" >| /dev/null ; }

agent_start () {
    (umask 077; ssh-agent >| "$env")
    . "$env" >| /dev/null ; }

agent_load_env

# agent_run_state: 0=agent running w/ key; 1=agent w/o key; 2=agent not running
agent_run_state=$(ssh-add -l >| /dev/null 2>&1; echo $?)

if [ ! "$SSH_AUTH_SOCK" ] || [ $agent_run_state = 2 ]; then
    agent_start
    ssh-add
elif [ "$SSH_AUTH_SOCK" ] && [ $agent_run_state = 1 ]; then
    ssh-add
fi

unset env
```

秘密キーがデフォルトの場所 (`~/.ssh/id_rsa` など) に保存されていない場合は、SSH 認証エージェントにその場所を指定する必要があります。 ssh-agent にキーを追加するには、「`ssh-add ~/path/to/my_key`」と入力します。 詳細については、「[新しい SSH キーを生成して ssh-agent に追加する](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/)」を参照してください。

{% tip %}

**ヒント:** しばらくして `ssh-agent` からキーを消去させたい場合は、`ssh-add -t <seconds>` を実行すればそのように構成できます。

{% endtip %}

最初に Git Bash を実行するとき、パスフレーズを求められます:

```shell
> Initializing new SSH agent...
> succeeded
> Enter passphrase for /c/Users/<em>you</em>/.ssh/id_rsa:
> Identity added: /c/Users/<em>you</em>/.ssh/id_rsa (/c/Users/<em>you</em>/.ssh/id_rsa)
> Welcome to Git (version <em>1.6.0.2-preview20080923</em>)
>
> Run 'git help git' to display the help index.
> Run 'git help <command>' to display help for specific commands.
```

`ssh-agent` プロセスは、ログアウトするか、コンピューターをシャットダウンするか、プロセスを中止するまで実行され続けます。

{% endwindows %}

{% mac %}

## パスフレーズをキーチェーンに保存する

OS X El Capitan を介する Mac OS X Leopard では、これらのデフォルトの秘密鍵ファイルは自動的に処理されます。

- *.ssh/id_rsa*
- *.ssh/identity*

初めてキーを使用するときは、パスフレーズを入力するよう求められます。 キーチェーンと一緒にパスフレーズを保存することを選択した場合は、もう一度入力する必要はありません。

それ以外の場合は、鍵を ssh-agent に追加するときに、パスフレーズをキーチェーンに格納できます。 詳細については、「[SSH キーを ssh-agent に追加する](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#adding-your-ssh-key-to-the-ssh-agent)」を参照してください。

{% endmac %}
