---
title: 新しい SSH キーを生成して ssh-agent に追加する
intro: 既存の SSH キーをチェックした後、新しい SSH キーを生成して認証に使用し、ssh-agent に追加できます。
redirect_from:
  - /articles/adding-a-new-ssh-key-to-the-ssh-agent/
  - /articles/generating-a-new-ssh-key/
  - /articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

SSH キーをまだお持ちでない場合は、[新しい SSH キーを生成](#generating-a-new-ssh-key)する必要があります。 SSH キーを持っているかどうかわからない場合は、[既存のキー](/articles/checking-for-existing-ssh-keys)をチェックします。

SSH キーを使用するたびにパスフレーズを再入力したくない場合は、[キーを SSH エージェントに追加](#adding-your-ssh-key-to-the-ssh-agent)できます。これにより、SSH キーが管理されパスフレーズが記憶されます。

### 新しい SSH キーを生成する

{% data reusables.command_line.open_the_multi_os_terminal %}
2. 以下のテキストを貼り付けます。メールアドレスは自分の {% data variables.product.product_name %} メールアドレスに置き換えてください。
  ```shell
  $ ssh-keygen -t rsa -b 4096 -C "<em>your_email@example.com</em>"
  ```
  これにより、入力したメールアドレスをラベルとして使用して新しい SSH キーが作成されます。
  ```shell
  > Generating public/private rsa key pair.
  ```
3. 「Enter a file in which to save the key」というメッセージが表示されたら、Enter キーを押します。 これにより、デフォルトのファイル場所が受け入れられます。

  {% mac %}

  ```shell
  > Enter a file in which to save the key (/Users/<em>you</em>/.ssh/id_rsa): <em>[Press enter]</em>
  ```

  {% endmac %}

  {% windows %}

  ```shell
  > Enter a file in which to save the key (/c/Users/<em>you</em>/.ssh/id_rsa):<em>[Press enter]</em>
  ```

  {% endwindows %}

  {% linux %}

  ```shell
  > Enter a file in which to save the key (/home/<em>you</em>/.ssh/id_rsa): <em>[Press enter]</em>
  ```

  {% endlinux %}

4. プロンプトで、安全なパスフレーズを入力します。 詳細は「[SSH キーのパスフレーズを使う](/articles/working-with-ssh-key-passphrases)」を参照してください。
  ```shell
  > Enter passphrase (empty for no passphrase): <em>[Type a passphrase]</em>
  > Enter same passphrase again: <em>[Type passphrase again]</em>
  ```

### SSH キーを ssh-agent に追加する

キーを管理するために新しい SSH キーを ssh-agent に追加する前に、[既存の SSH キーの確認](/articles/checking-for-existing-ssh-keys)と[新しい SSH キーの生成](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#generating-a-new-ssh-key)を済ませておく必要があります。 <span class="platform-mac">エージェントに SSH キーを追加する際、デフォルトの macOS の `ssh-add` コマンドを使用してください。[macports] macports (https://www.macports.org/)、[homebrew] (http://brew.sh/)、またはその他の外部ソースによってインストールされたアプリケーションは使用しないでください。</span>

{% mac %}

1. {% data reusables.command_line.start_ssh_agent %}

2. macOS Sierra 10.12.2 以降を使用している場合は、`~/.ssh/config` ファイルを修正して、キーが自動で ssh-agent に読み込まれ、キーチェーンにパスフレーズが記憶されるようにする必要があります。

    * まず、`~/.ssh/config` ファイルがデフォルトの場所にあるかどうかを確認します。

      ```shell
      $ open ~/.ssh/config
      > The file /Users/<em>you</em>/.ssh/config does not exist.
      ```

    * ファイルがない場合は、ファイルを作成します。

      ```shell
      $ touch ~/.ssh/config
      ```

    * `~/.ssh/config` ファイルを開いてファイルを変更し、`id_rsa` キーのデフォルトの場所と名前を使用していない場合は `~/.ssh/id_rsa` を置き換えます。

      ```
      Host *
        AddKeysToAgent yes
        UseKeychain yes
        IdentityFile ~/.ssh/id_rsa
      ```

3. SSH 秘密鍵を ssh-agent に追加して、パスフレーズをキーチェーンに保存します。 {% data reusables.ssh.add-ssh-key-to-ssh-agent %}
   ```shell
   $ ssh-add -K ~/.ssh/id_rsa
  ```
  {% note %}

  **メモ: ** `-K` オプションは、`ssh-add` の Apple の標準バージョン内にあり、ssh-agent に SSH キーを追加する際にキーチェーンにパスフレーズを保存します。

  Apple の標準バージョンをインストールしていない場合は、エラーが発生する場合があります。 このエラーの解決方法についての詳細は、「[エラー: ssh-add: illegal option -- K](/articles/error-ssh-add-illegal-option-k)」を参照してください。

  {% endnote %}

4. [SSH キーを GitHub アカウントに追加します](/articles/adding-a-new-ssh-key-to-your-github-account)。

{% endmac %}

{% windows %}

{% data reusables.desktop.windows_git_bash %}

1. ssh-agent が実行されていることを確認します. 「[SSH キーパスフレーズで操作する](/articles/working-with-ssh-key-passphrases)」の「ssh-agent を自動起動する」の手順を使用するか、手動で開始できます。
  ```shell
  # ssh-agent をバックグラウンドで起動
  $ eval $(ssh-agent -s)
  > Agent pid 59566
  ```

2. SSH プライベートキーを ssh-agent に追加します。 {% data reusables.ssh.add-ssh-key-to-ssh-agent %}
   {% data reusables.ssh.add-ssh-key-to-ssh-agent-commandline %}

3. [SSH キーを GitHub アカウントに追加します](/articles/adding-a-new-ssh-key-to-your-github-account)。

{% endwindows %}

{% linux %}

1. {% data reusables.command_line.start_ssh_agent %}

2. SSH プライベートキーを ssh-agent に追加します。 {% data reusables.ssh.add-ssh-key-to-ssh-agent %}
   {% data reusables.ssh.add-ssh-key-to-ssh-agent-commandline %}

3. [SSH キーを GitHub アカウントに追加します](/articles/adding-a-new-ssh-key-to-your-github-account)。

{% endlinux %}

### 参考リンク

- 「[SSHについて](/articles/about-ssh)」
- [SSH キーのパスフレーズを使う](/articles/working-with-ssh-key-passphrases)
{%- if currentVersion == "free-pro-team@latest" %}
- [SAML シングルサインオンで使うためにSSHキーを認可する](/articles/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)
{%- endif %}
