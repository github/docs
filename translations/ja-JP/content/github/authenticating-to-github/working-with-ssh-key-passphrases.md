---
title: SSH キーのパスフレーズを使う
intro: SSH キーを使用するたびにパスフレーズを再入力する必要がないように、SSH キーを保護し、認証エージェントを設定できます。
redirect_from:
  - /ssh-key-passphrases/
  - /working-with-key-passphrases/
  - /articles/working-with-ssh-key-passphrases
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - SSH
---

SSH キーにより、誰かがあなたのコンピュータにアクセスすると、そのキーを使用するすべてのシステムにもアクセスすることになります。 セキュリティをさらに強化するには、SSH キーにパスフレーズを追加します。 パスフレーズを安全に保存するために `ssh-agent` を使用すると、パスフレーズを再入力する必要がありません。

### パスフレーズを追加または変更する

次のコマンドを入力して、鍵ペアを再生成せずに既存の秘密鍵のパスフレーズを変更できます:

```shell
$ ssh-keygen -p -f ~/.ssh/id_ed25519
> Enter old passphrase: <em>[Type old passphrase]</em>
> Key has comment '<em>your_email@example.com</em>'
> Enter new passphrase (empty for no passphrase): <em>[Type new passphrase]</em>
> Enter same passphrase again: <em>[Repeat the new passphrase]</em>
> Your identification has been saved with the new passphrase.
```

鍵にすでにパスフレーズがある場合は、新しいパスフレーズに変更する前にそれを入力するように求められます。

{% windows %}

### Git for Windows で `ssh-agent` を自動的に起動する

bash または Git シェルを開いたときに、`ssh-agent` を自動的に実行できます。 以下の行をコピーして Git シェルの `~/.profile` または `~/.bashrc` ファイルに貼り付けます:

``` bash
env=~/.ssh/agent.env

agent_load_env () { test -f "$env" && . "$env" >| /dev/null ; }

agent_start () {
    (umask 077; ssh-agent >| "$env")
    . env=~/.ssh/agent.env

agent_load_env () { test -f "$env" && .

"$env" >| /dev/null ; }

agent_start () {
    (umask 077; ssh-agent >| "$env")
    . "$SSH_AUTH_SOCK" ] || [ $agent_run_state = 2 ]; then
    agent_start
    ssh-add
elif [ "$SSH_AUTH_SOCK" ] && [ $agent_run_state = 1 ]; then
    ssh-add
fi
```

秘密鍵がデフォルトの場所 (`~/.ssh/id_rsa` など) に保存されていない場合は、SSH 認証エージェントにその場所を指定する必要があります。 キーを ssh-agent に追加するには、`ssh-add ~/path/to/my_key` と入力します。 詳細は「[新しい SSH キーを生成して ssh-agent に追加する](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/)」を参照してください。

{% tip %}

**ヒント:** しばらくしてから、`ssh-agent` からキーを消去する場合、`ssh-add -t<seconds>` を実行して、キーを設定することができます。

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
> 「git help <command>」を実行して、特定のコマンドのヘルプを表示します。
```

`ssh-agent` プロセスは、ログアウトするか、コンピュータをシャットダウンするか、プロセスを強制終了するまで実行され続けます。

{% endwindows %}

{% mac %}

### パスフレーズをキーチェーンに保存する

OS X El Capitan を介する OS X Leopard では、これらのデフォルトの秘密鍵ファイルは自動的に処理されます:

- *.ssh/id_rsa*
- *.ssh/identity*

初めてキーを使用するときは、パスフレーズを入力するよう求められます。 キーチェーンと一緒にパスフレーズを保存することを選択した場合は、もう一度入力する必要はありません。

それ以外の場合は、鍵を ssh-agent に追加するときに、パスフレーズをキーチェーンに格納できます。 詳細は「[SSH キーを ssh-agent に追加する](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#adding-your-ssh-key-to-the-ssh-agent)」を参照してください。

{% endmac %}

### 参考リンク

- 「[SSHについて](/articles/about-ssh)」
