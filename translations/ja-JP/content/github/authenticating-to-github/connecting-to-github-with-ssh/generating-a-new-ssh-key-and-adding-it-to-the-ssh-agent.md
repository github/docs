---
title: 新しい SSH キーを生成して ssh-agent に追加する
intro: 既存の SSH キーをチェックした後、新しい SSH キーを生成して認証に使用し、ssh-agent に追加できます。
redirect_from:
  - /articles/adding-a-new-ssh-key-to-the-ssh-agent/
  - /articles/generating-a-new-ssh-key/
  - /articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
  - /github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - SSH
---
### About SSH key generation

If you don't already have an SSH key, you must generate a new SSH key to use for authentication. If you're unsure whether you already have an SSH key, you can check for existing keys. For more information, see "[Checking for existing SSH keys](/github/authenticating-to-github/checking-for-existing-ssh-keys)."

{% if currentVersion == "free-pro-team@latest" %}

If you want to use a hardware security key to authenticate to {% data variables.product.product_name %}, you must generate a new SSH key for your hardware security key. You must connect your hardware security key to your computer when you authenticate with the key pair. For more information, see the [OpenSSH 8.2 release notes](https://www.openssh.com/txt/release-8.2).

{% endif %}
If you don't want to reenter your passphrase every time you use your SSH key, you can add your key to the SSH agent, which manages your SSH keys and remembers your passphrase.

### 新しい SSH キーを生成する

{% data reusables.command_line.open_the_multi_os_terminal %}
2. 以下のテキストを貼り付けます。メールアドレスは自分の {% data variables.product.product_name %} メールアドレスに置き換えてください。
  ```shell
  $ ssh-keygen -t ed25519 -C "<em>your_email@example.com</em>"
  ```
  {% note %}

  **注釈:** Ed25519 アルゴリズムをサポートしないレガシーシステムを使用している場合は、以下を使用します。
  ```shell
   $ ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
  ```

  {% endnote %}
  これにより、入力したメールアドレスをラベルとして使用して新しい SSH キーが作成されます。
  ```shell
  > Generating public/private ed25519 key pair.
  ```
3. 「Enter a file in which to save the key」というメッセージが表示されたら、Enter キーを押します。 これにより、デフォルトのファイル場所が受け入れられます。

  {% mac %}

  ```shell
  > Enter a file in which to save the key (/Users/<em>you</em>/.ssh/id_ed25519): <em>[Press enter]</em>
  ```

  {% endmac %}

  {% windows %}

  ```shell
  > Enter a file in which to save the key (/c/Users/<em>you</em>/.ssh/id_ed25519):<em>[Press enter]</em>
  ```

  {% endwindows %}

  {% linux %}

  ```shell
  > Enter a file in which to save the key (/home/<em>you</em>/.ssh/id_ed25519): <em>[Press enter]</em>
  ```

  {% endlinux %}

4. プロンプトで、安全なパスフレーズを入力します。 For more information, see ["Working with SSH key passphrases](/articles/working-with-ssh-key-passphrases)."
  ```shell
  > Enter passphrase (empty for no passphrase): <em>[Type a passphrase]</em>
  > Enter same passphrase again: <em>[Type passphrase again]</em>
  ```

### SSH キーを ssh-agent に追加する

Before adding a new SSH key to the ssh-agent to manage your keys, you should have checked for existing SSH keys and generated a new SSH key. <span class="platform-mac">エージェントに SSH キーを追加する際、デフォルトの macOS の `ssh-add` コマンドを使用してください。[macports] macports (https://www.macports.org/)、[homebrew] (http://brew.sh/)、またはその他の外部ソースによってインストールされたアプリケーションは使用しないでください。</span>

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

    * `~/.ssh/config` ファイルを開き、以下の行が含まれるようにファイルを変更します。 SSH キーファイルの名前またはパスがサンプルコードと異なる場合は、現在の設定に一致するようにファイル名またはパスを変更してください。

      ```
      Host *
        AddKeysToAgent yes
        UseKeychain yes
        IdentityFile ~/.ssh/id_ed25519
      ```

     {% note %}

     **注釈:** キーにパスフレーズを追加しない場合は、`UseKeychain` 行を省略してください。

     {% endnote %}

      {% mac %}
      {% note %}

      **Note:** If you see an error like this

      ```
      /Users/USER/.ssh/config: line 16: Bad configuration option: usekeychain
      ```

      add an additional config line to your `Host *` section:

      ```
      Host *
        IgnoreUnknown UseKeychain
      ```

      {% endnote %}
      {% endmac %}

3. SSH 秘密鍵を ssh-agent に追加して、パスフレーズをキーチェーンに保存します。 {% data reusables.ssh.add-ssh-key-to-ssh-agent %}
   ```shell
   $ ssh-add -K ~/.ssh/id_ed25519
  ```
  {% note %}

  **メモ: ** `-K` オプションは、`ssh-add` の Apple の標準バージョン内にあり、ssh-agent に SSH キーを追加する際にキーチェーンにパスフレーズを保存します。 キーにパスフレーズを追加しない場合は、`-K` オプションを指定せずにコマンドを実行します。

  Apple の標準バージョンをインストールしていない場合は、エラーが発生する場合があります。 このエラーの解決方法についての詳細は、「[エラー: ssh-add: illegal option -- K](/articles/error-ssh-add-illegal-option-k)」を参照してください。

  {% endnote %}

4. Add the SSH key to your account on {% data variables.product.product_name %}. For more information, see "[Adding a new SSH key to your {% data variables.product.prodname_dotcom %} account](/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account)."

{% endmac %}

{% windows %}

{% data reusables.desktop.windows_git_bash %}

1. ssh-agent が実行されていることを確認します. 「[SSH キーパスフレーズで操作する](/articles/working-with-ssh-key-passphrases)」の「ssh-agent を自動起動する」の手順を使用するか、手動で開始できます。
  ```shell
  # start the ssh-agent in the background
  $ eval `ssh-agent -s`
  > Agent pid 59566
  ```

2. SSH プライベートキーを ssh-agent に追加します。 {% data reusables.ssh.add-ssh-key-to-ssh-agent %}
   {% data reusables.ssh.add-ssh-key-to-ssh-agent-commandline %}

3. Add the SSH key to your account on {% data variables.product.product_name %}. For more information, see "[Adding a new SSH key to your {% data variables.product.prodname_dotcom %} account](/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account)."

{% endwindows %}

{% linux %}

1. {% data reusables.command_line.start_ssh_agent %}

  In some Linux environments, you need root access to run the command:

  ```
  $ sudo -s -H
  $ eval "$(ssh-agent -s)"
  > Agent pid 59566
  ```

2. SSH プライベートキーを ssh-agent に追加します。 {% data reusables.ssh.add-ssh-key-to-ssh-agent %}
   {% data reusables.ssh.add-ssh-key-to-ssh-agent-commandline %}

3. Add the SSH key to your account on {% data variables.product.product_name %}. For more information, see "[Adding a new SSH key to your {% data variables.product.prodname_dotcom %} account](/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account)."

{% endlinux %}

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@next" or currentVersion ver_gt "enterprise-server@3.1"  %}
### Generating a new SSH key for a hardware security key

If you are using macOS or Linux, you may need to update your SSH client or install a new SSH client prior to generating a new SSH key. For more information, see "[Error: Unknown key type](/github/authenticating-to-github/error-unknown-key-type)."

1. Insert your hardware security key into your computer.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Paste the text below, substituting in the email address for your account on {% data variables.product.product_name %}.
  ```shell
  $ ssh-keygen -t ed25519-sk -C "<em>your_email@example.com</em>"
  ```
  {% note %}

  **Note:** If the command fails and you receive the error `invalid format` or `feature not supported,` you may be using a hardware security key that does not support the Ed25519 algorithm. Enter the following command instead.
  ```shell
   $ ssh-keygen -t ecdsa-sk -C "your_email@example.com"
  ```

  {% endnote %}
4. When you are prompted, touch the button on your hardware security key.
5. When you are prompted to "Enter a file in which to save the key," press Enter to accept the default file location.

  {% mac %}

  ```shell
  > Enter a file in which to save the key (/Users/<em>you</em>/.ssh/id_ed25519_sk): <em>[Press enter]</em>
  ```

  {% endmac %}

  {% windows %}

  ```shell
  > Enter a file in which to save the key (/c/Users/<em>you</em>/.ssh/id_ed25519_sk):<em>[Press enter]</em>
  ```

  {% endwindows %}

  {% linux %}

  ```shell
  > Enter a file in which to save the key (/home/<em>you</em>/.ssh/id_ed25519_sk): <em>[Press enter]</em>
  ```

  {% endlinux %}

6. When you are prompted to type a passphrase, press **Enter**.
  ```shell
  > Enter passphrase (empty for no passphrase): <em>[Type a passphrase]</em>
  > Enter same passphrase again: <em>[Type passphrase again]</em>
  ```
7. Add the SSH key to your account on {% data variables.product.prodname_dotcom %}. For more information, see "[Adding a new SSH key to your {% data variables.product.prodname_dotcom %} account](/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account)."

{% endif %}

### 参考リンク

- 「[SSHについて](/articles/about-ssh)」
- [SSH キーのパスフレーズを使う](/articles/working-with-ssh-key-passphrases)
{%- if currentVersion == "free-pro-team@latest" %}
- [SAML シングルサインオンで使うためにSSHキーを認可する](/articles/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)
{%- endif %}
