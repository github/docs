---
title: 新しい SSH キーを生成して ssh-agent に追加する
intro: 既存の SSH キーをチェックした後、新しい SSH キーを生成して認証に使用し、ssh-agent に追加できます。
redirect_from:
  - /articles/adding-a-new-ssh-key-to-the-ssh-agent
  - /articles/generating-a-new-ssh-key
  - /articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
  - /github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
  - /github/authenticating-to-github/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: Generate new SSH key
ms.openlocfilehash: 024d74d62b99b6dd94fcecdc835d6094f83234f4
ms.sourcegitcommit: a0ad3bfe2a99c3092e76ca9b3d476cf30988ca55
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/28/2022
ms.locfileid: '148118973'
---
## SSH キー パスフレーズについて

{% data reusables.ssh.about-ssh %}詳しくは、「[SSH について](/authentication/connecting-to-github-with-ssh/about-ssh)」を参照してください。

SSH キーを生成するときに、パスフレーズを追加してキーをさらにセキュリティで保護できます。 キーを使用するときは、必ずパスフレーズを入力する必要があります。 キーにパスフレーズがあり、キーを使用するたびにパスフレーズを入力したくない場合は、SSH エージェントにキーを追加できます。 SSH エージェントでは SSH キーを管理し、パスフレーズを記憶します。

SSH キーがまだない場合は、認証に使う新しい SSH キーを生成する必要があります。 SSH キーが既にあるかどうかがわからない場合は、既存のキーを確認できます。 詳しくは、「[既存の SSH キーの確認](/authentication/connecting-to-github-with-ssh/checking-for-existing-ssh-keys)」をご覧ください。

ハードウェア セキュリティ キーを使って {% data variables.product.product_name %} の認証を行う場合は、ハードウェア セキュリティ キー用に新しい SSH キーを生成する必要があります。 キー ペアで認証を行うときに、ハードウェア セキュリティ キーをコンピューターに接続する必要があります。 詳しくは、[OpenSSH 8.2 のリリース ノート](https://www.openssh.com/txt/release-8.2)をご覧ください。

## 新しい SSH キーを生成する

ローカル コンピューターで新しい SSH キーを生成できます。 キーを生成した後、{% ifversion fpt or ghec or ghes %}{% data variables.location.product_location %}{% elsif ghae %}{% data variables.product.product_name %}{% endif %} 上のアカウントにキーを追加して、SSH 経由の Git 操作の認証を有効にすることができます。

{% ifversion ghes %}

{% data variables.location.product_location %} のサイト管理者である場合は、同じキーを使用して、インスタンスへの管理 SSH アクセスを自分に許可できます。 詳細については、「[管理シェル (SSH) にアクセスする](/admin/configuration/configuring-your-enterprise/accessing-the-administrative-shell-ssh)」を参照してください。

{% endif %}

{% data reusables.ssh.key-type-support %}

{% data reusables.command_line.open_the_multi_os_terminal %}
2. 以下のテキストを貼り付けます。メールアドレスは自分の {% data variables.product.product_name %} メールアドレスに置き換えてください。
   {%- ifversion ghae %}  <!-- GitHub AE is FIPS 140-2 compliant. FIPS does not yet permit keys that use the ed25519 algorithm. -->
   ```shell
   $ ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
   $ ssh-keygen -t rsa -b 4096 -C "your_email@example.com"

   ```
   {%- else %}
   ```shell
   $ ssh-keygen -t ed25519 -C "your_email@example.com"
   ```
   {% note %}

   **注:** Ed25519 アルゴリズムをサポートしていないレガシ システムを使っている場合は、以下を使います。
   ```shell
    $ ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
   ```

   {% endnote %} {%- endif %}

   これにより、指定したメールアドレスをラベルとして使って新しい SSH キーが作成されます。
   ```shell
   > Generating public/private ALGORITHM key pair.
   ```
"キーを保存するファイルを入力してください" というメッセージが表示されたら、**Enter** キーを押して既定のファイルの場所をそのまま使うことができます。 以前に SSH キーを作成した場合、ssh-keygen から別のキーの書き換えを求められる場合があることに注意してください。その場合は、カスタム名の SSH キーを作成することをお勧めします。 これを行うには、既定のファイルの場所を入力し、id_ssh_keyname をカスタム キー名に置き換えます。


   {% mac %}

   ```shell
   > Enter a file in which to save the key (/Users/YOU/.ssh/id_ALGORITHM: [Press enter]
   ```

   {% endmac %}

   {% windows %}

   ```shell
   > Enter a file in which to save the key (/c/Users/YOU/.ssh/id_ALGORITHM):[Press enter]
   ```

   {% endwindows %}

   {% linux %}

   ```shell
   > Enter a file in which to save the key (/home/YOU/.ssh/ALGORITHM):[Press enter]
   ```

   {% endlinux %}

4. プロンプトが表示されたら、セキュアなパスフレーズを入力します。 詳しくは、「[SSH キーのパスフレーズを使う](/articles/working-with-ssh-key-passphrases)」をご覧ください。
   ```shell
   > Enter passphrase (empty for no passphrase): [Type a passphrase]
   > Enter same passphrase again: [Type passphrase again]
   ```

## SSH キーを ssh-agent に追加する

ssh-agent に新しい SSH キーを追加してキーを管理する前に、既存の SSH キーを確認し、新しい SSH キーを生成しておく必要があります。 <span class="platform-mac">SSH キーをエージェントに追加するときは、macOS の既定の `ssh-add` コマンドを使うようにし、[macports](https://www.macports.org/)、[homebrew](http://brew.sh/)、またはその他の外部ソースによってインストールされるアプリケーションは使わないでください。</span>

{% mac %}

{% data reusables.command_line.start_ssh_agent %}

2. macOS Sierra 10.12.2 以降を使っている場合は、`~/.ssh/config` ファイルを修正して、キーが ssh-agent に自動的に読み込まれ、パスフレーズがキーチェーンに格納されるようにする必要があります。

   * まず、`~/.ssh/config` ファイルが既定の場所に存在するかどうかを調べます。

     ```shell
     $ open ~/.ssh/config
     > The file /Users/YOU/.ssh/config does not exist.
     ```

   * ファイルがない場合は、ファイルを作成します。

     ```shell
     $ touch ~/.ssh/config
     ```

   * `~/.ssh/config` ファイルを開き、以下の行が含まれるようにファイルを変更します。 SSH キーファイルの名前またはパスがサンプルコードと異なる場合は、現在の設定に一致するようにファイル名またはパスを変更してください。

     ```
     Host *.{% ifversion ghes or ghae %}HOSTNAME{% else %}github.com{% endif %}
       AddKeysToAgent yes
       UseKeychain yes
       IdentityFile ~/.ssh/id_{% ifversion ghae %}ecdsa{% else %}ed25519{% endif %}
     ```

     {% note %}

     **注:**

     - キーにパスフレーズを追加しないようにする場合は、`UseKeychain` の行を省略する必要があります。

     - `Bad configuration option: usekeychain` エラーが発生した場合は、構成の `Host *.{% ifversion ghes or ghae %}HOSTNAME{% else %}github.com{% endif %}` セクションに行をさらに追加します。

       ```
       Host *.{% ifversion ghes or ghae %}HOSTNAME{% else %}github.com{% endif %}
         IgnoreUnknown UseKeychain
       ```
     {% endnote %}

3. SSH 秘密鍵を ssh-agent に追加して、パスフレーズをキーチェーンに保存します。 {% data reusables.ssh.add-ssh-key-to-ssh-agent %}
   ```shell
   $ ssh-add --apple-use-keychain ~/.ssh/id_{% ifversion ghae %}rsa{% else %}ed25519{% endif %}
  ```
  {% note %}

   **注:** `--apple-use-keychain` オプションでは、ssh-agent に SSH キーを追加すると、パスフレーズがキーチェーンに自動的に格納されます。 パスフレーズをキーに追加しない場合は、`--apple-use-keychain` オプションを指定せずにコマンドを実行します。

   `--apple-use-keychain` オプションは、Apple の標準バージョンの `ssh-add` です。 Monterey (12.0) より前の MacOS バージョンでは、`--apple-use-keychain` と `--apple-load-keychain` フラグでそれぞれ構文 `-K` と `-A` が使用されていました。

  Apple の標準バージョンの `ssh-add` をインストールしていない場合は、エラーが発生することがあります。 詳しくは、「[エラー: ssh-add: 無効なオプション -- K](/articles/error-ssh-add-illegal-option-k)」をご覧ください。


   {% endnote %}

4. {% data variables.product.product_name %} で自分のアカウントに SSH キーを追加します。 詳しくは、「[{% data variables.product.prodname_dotcom %} アカウントへの新しい SSH キーの追加](/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)」をご覧ください。

{% endmac %}

{% windows %}

{% data reusables.desktop.windows_git_bash %}

1. ssh-agent が実行されていることを確認します。 「[SSH キーのパスフレーズを使う](/articles/working-with-ssh-key-passphrases)」の ssh-agent の自動起動に関する手順を使うか、手動で開始できます。
   ```shell
   # start the ssh-agent in the background
   $ eval "$(ssh-agent -s)"
   > Agent pid 59566
   ```

2. SSH プライベートキーを ssh-agent に追加します。 {% data reusables.ssh.add-ssh-key-to-ssh-agent %} {% data reusables.ssh.add-ssh-key-to-ssh-agent-commandline %}

3. {% data variables.product.product_name %} で自分のアカウントに SSH キーを追加します。 詳しくは、「[{% data variables.product.prodname_dotcom %} アカウントへの新しい SSH キーの追加](/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)」をご覧ください。

{% endwindows %}

{% linux %}

{% data reusables.command_line.start_ssh_agent %}

2. SSH プライベートキーを ssh-agent に追加します。 {% data reusables.ssh.add-ssh-key-to-ssh-agent %} {% data reusables.ssh.add-ssh-key-to-ssh-agent-commandline %}

3. {% data variables.product.product_name %} で自分のアカウントに SSH キーを追加します。 詳しくは、「[{% data variables.product.prodname_dotcom %} アカウントへの新しい SSH キーの追加](/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)」をご覧ください。

{% endlinux %}

## ハードウェア セキュリティ キー用の新しい SSH キーを生成する

macOS または Linux を使っている場合は、新しい SSH キーを生成する前に、SSH クライアントの更新または新しい SSH クライアントのインストールが必要になる場合があります。 詳しくは、「[エラー: 不明なキーの種類](/github/authenticating-to-github/error-unknown-key-type)」をご覧ください。

1. ハードウェア セキュリティ キーをコンピューターに挿入します。
{% data reusables.command_line.open_the_multi_os_terminal %}
3. 次のテキストを貼り付けて、{% data variables.product.product_name %} での自分のアカウントのメール アドレスに置き換えます。
   ```shell
   $ ssh-keygen -t {% ifversion ghae %}ecdsa{% else %}ed25519{% endif %}-sk -C "YOUR_EMAIL"
   ```

   {%- ifversion not ghae %} {% note %}

   **注:** コマンドが失敗し、エラー `invalid format` または `feature not supported,` を受け取る場合は、Ed25519 アルゴリズムをサポートしていないハードウェア セキュリティ キーを使っている可能性があります。 代わりに、次のコマンドを入力します。
   ```shell
    $ ssh-keygen -t ecdsa-sk -C "your_email@example.com"
   ```

   {% endnote %} {%- endif %}
4. メッセージが表示されたら、ハードウェア セキュリティ キーのボタンにタッチします。
5. "キーを保存するファイルを入力してください" というメッセージが表示されたら、Enter キーを押して既定のファイルの場所をそのまま使います。

   {% mac %}

   ```shell
   > Enter a file in which to save the key (/Users/YOU/.ssh/id_{% ifversion ghae %}ecdsa{% else %}ed25519{% endif %}_sk): [Press enter]
   ```

   {% endmac %}

   {% windows %}

   ```shell
   > Enter a file in which to save the key (/c/Users/YOU/.ssh/id_{% ifversion ghae %}ecdsa{% else %}ed25519{% endif %}_sk):[Press enter]
   ```

   {% endwindows %}

   {% linux %}

   ```shell
   > Enter a file in which to save the key (/home/YOU/.ssh/id_{% ifversion ghae %}ecdsa{% else %}ed25519{% endif %}_sk):[Press enter]
   ```

   {% endlinux %}

6. パスフレーズの入力を求められたら、**Enter** キーを押します。
   ```shell
   > Enter passphrase (empty for no passphrase): [Type a passphrase]
   > Enter same passphrase again: [Type passphrase again]
   ```
7. {% data variables.product.prodname_dotcom %} で自分のアカウントに SSH キーを追加します。 詳しくは、「[{% data variables.product.prodname_dotcom %} アカウントへの新しい SSH キーの追加](/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)」をご覧ください。
