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
ms.openlocfilehash: 8714cb24a6ed46fda17f53295601748ebffdc255
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '147409140'
---
## SSH キー パスフレーズについて

{% data reusables.ssh.about-ssh %}詳しくは、「[SSH について](/authentication/connecting-to-github-with-ssh/about-ssh)」を参照してください。

SSH キーを生成するときに、パスフレーズを追加してキーをさらにセキュリティで保護できます。 キーを使用するときは、必ずパスフレーズを入力する必要があります。 キーにパスフレーズがあり、キーを使用するたびにパスフレーズを入力したくない場合は、SSH エージェントにキーを追加できます。 SSH エージェントでは SSH キーを管理し、パスフレーズを記憶します。

SSH キーがまだない場合は、認証に使う新しい SSH キーを生成する必要があります。 SSH キーが既にあるかどうかがわからない場合は、既存のキーを確認できます。 詳しくは、「[既存の SSH キーの確認](/github/authenticating-to-github/checking-for-existing-ssh-keys)」をご覧ください。

ハードウェア セキュリティ キーを使って {% data variables.product.product_name %} の認証を行う場合は、ハードウェア セキュリティ キー用に新しい SSH キーを生成する必要があります。 キー ペアで認証を行うときに、ハードウェア セキュリティ キーをコンピューターに接続する必要があります。 詳しくは、[OpenSSH 8.2 のリリース ノート](https://www.openssh.com/txt/release-8.2)をご覧ください。

## 新しい SSH キーを生成する

ローカル コンピューターで新しい SSH キーを生成できます。 キーを生成した後、{% ifversion fpt or ghec or ghes %}{% data variables.product.product_location %}{% elsif ghae %}{% data variables.product.product_name %}{% endif %} 上のアカウントにキーを追加して、SSH 経由の Git 操作の認証を有効にすることができます。

{% data reusables.ssh.key-type-support %}

{% data reusables.command_line.open_the_multi_os_terminal %}
2. 以下のテキストを貼り付けます。メールアドレスは自分の {% data variables.product.product_name %} メールアドレスに置き換えてください。
   {%- ifversion ghae %}  <!-- GitHub AE is FIPS 140-2 compliant. FIPS does not yet permit keys that use the ed25519 algorithm. -->
   ```shell
   $ ssh-keygen -t rsa -b 4096 -C "<em>your_email@example.com</em>" 
   ```
   {%- else %}
   ```shell
   $ ssh-keygen -t ed25519 -C "<em>your_email@example.com</em>"
   ```
   {% note %}
   
   **注:** Ed25519 アルゴリズムをサポートしていないレガシ システムを使っている場合は、以下を使います。
   ```shell
    $ ssh-keygen -t rsa -b 4096 -C "<em>your_email@example.com</em>"
   ```

   {% endnote %} {%- endif %}

   これにより、指定したメールアドレスをラベルとして使って新しい SSH キーが作成されます。
   ```shell
   > Generating public/private <em>algorithm</em> key pair.
   ```
3. 「Enter a file in which to save the key」というメッセージが表示されたら、Enter キーを押します。 これにより、ファイルの既定の場所が受け入れられます。

   {% mac %}
   
   ```shell
   > Enter a file in which to save the key (/Users/<em>you</em>/.ssh/id_<em>algorithm</em>): <em>[Press enter]</em>
   ```
   
   {% endmac %}
   
   {% windows %}
   
   ```shell
   > Enter a file in which to save the key (/c/Users/<em>you</em>/.ssh/id_<em>algorithm</em>):<em>[Press enter]</em>
   ```

   {% endwindows %}
   
   {% linux %}
   
   ```shell
   > Enter a file in which to save the key (/home/<em>you</em>/.ssh/<em>algorithm</em>): <em>[Press enter]</em>
   ```
   
   {% endlinux %}

4. プロンプトが表示されたら、セキュアなパスフレーズを入力します。 詳しくは、「[SSH キーのパスフレーズを使う](/articles/working-with-ssh-key-passphrases)」をご覧ください。
   ```shell
   > Enter passphrase (empty for no passphrase): <em>[Type a passphrase]</em>
   > Enter same passphrase again: <em>[Type passphrase again]</em>
   ```

## SSH キーを ssh-agent に追加する

ssh-agent に新しい SSH キーを追加してキーを管理する前に、既存の SSH キーを確認し、新しい SSH キーを生成しておく必要があります。 <span class="platform-mac">SSH キーをエージェントに追加するときは、macOS の既定の `ssh-add` コマンドを使うようにし、[macports](https://www.macports.org/)、[homebrew](http://brew.sh/)、またはその他の外部ソースによってインストールされるアプリケーションは使わないでください。</span>

{% mac %}

{% data reusables.command_line.start_ssh_agent %}

2. macOS Sierra 10.12.2 以降を使っている場合は、`~/.ssh/config` ファイルを修正して、キーが ssh-agent に自動的に読み込まれ、パスフレーズがキーチェーンに格納されるようにする必要があります。

   * まず、`~/.ssh/config` ファイルが既定の場所に存在するかどうかを調べます。

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
       IdentityFile ~/.ssh/id_{% ifversion ghae %}ecdsa{% else %}ed25519{% endif %}
     ```

     {% note %}

     **注:**
     
     - キーにパスフレーズを追加しないようにする場合は、`UseKeychain` の行を省略する必要があります。
  
     - `Bad configuration option: usekeychain` エラーが発生した場合は、構成の `Host *` セクションに行をさらに追加します。

       ```
       Host *
         IgnoreUnknown UseKeychain
       ```
     {% endnote %}

3. SSH 秘密鍵を ssh-agent に追加して、パスフレーズをキーチェーンに保存します。 {% data reusables.ssh.add-ssh-key-to-ssh-agent %}
   ```shell
   $ ssh-add -K ~/.ssh/id_{% ifversion ghae %}rsa{% else %}ed25519{% endif %}
   ```
   {% note %}

   **注:** `-K` オプションは、`ssh-add` の Apple の標準バージョンであり、ssh-agent に SSH キーを追加すると、パスフレーズがキーチェーンに自動的に格納されます。 パスフレーズをキーに追加しない場合は、`-K` オプションを指定せずにコマンドを実行します。 

   Apple の標準バージョンをインストールしていない場合は、エラーが発生する場合があります。 このエラーの解決について詳しくは、「[エラー: ssh-add: 無効なオプション -- K](/articles/error-ssh-add-illegal-option-k)」をご覧ください。
  
   MacOS Monterey (12.0) では、フラグ `-K` と `-A` は非推奨になっており、それぞれフラグ `--apple-use-keychain` と `--apple-load-keychain` に置き換えられています。 

   {% endnote %}

4. {% data variables.product.product_name %} で自分のアカウントに SSH キーを追加します。 詳しくは、「[{% data variables.product.prodname_dotcom %} アカウントへの新しい SSH キーの追加](/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account)」をご覧ください。

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

3. {% data variables.product.product_name %} で自分のアカウントに SSH キーを追加します。 詳しくは、「[{% data variables.product.prodname_dotcom %} アカウントへの新しい SSH キーの追加](/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account)」をご覧ください。

{% endwindows %}

{% linux %}

{% data reusables.command_line.start_ssh_agent %}

2. SSH プライベートキーを ssh-agent に追加します。 {% data reusables.ssh.add-ssh-key-to-ssh-agent %} {% data reusables.ssh.add-ssh-key-to-ssh-agent-commandline %}

3. {% data variables.product.product_name %} で自分のアカウントに SSH キーを追加します。 詳しくは、「[{% data variables.product.prodname_dotcom %} アカウントへの新しい SSH キーの追加](/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account)」をご覧ください。

{% endlinux %}

## ハードウェア セキュリティ キー用の新しい SSH キーを生成する

macOS または Linux を使っている場合は、新しい SSH キーを生成する前に、SSH クライアントの更新または新しい SSH クライアントのインストールが必要になる場合があります。 詳しくは、「[エラー: 不明なキーの種類](/github/authenticating-to-github/error-unknown-key-type)」をご覧ください。

1. ハードウェア セキュリティ キーをコンピューターに挿入します。
{% data reusables.command_line.open_the_multi_os_terminal %}
3. 次のテキストを貼り付けて、{% data variables.product.product_name %} での自分のアカウントのメール アドレスに置き換えます。
   ```shell
   $ ssh-keygen -t {% ifversion ghae %}ecdsa{% else %}ed25519{% endif %}-sk -C "<em>your_email@example.com</em>"
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
   > Enter a file in which to save the key (/Users/<em>you</em>/.ssh/id_{% ifversion ghae %}ecdsa{% else %}ed25519{% endif %}_sk): <em>[Press enter]</em>
   ```

   {% endmac %}
   
   {% windows %}
   
   ```shell
   > Enter a file in which to save the key (/c/Users/<em>you</em>/.ssh/id_{% ifversion ghae %}ecdsa{% else %}ed25519{% endif %}_sk):<em>[Press enter]</em>
   ```

   {% endwindows %}
   
   {% linux %}
   
   ```shell
   > Enter a file in which to save the key (/home/<em>you</em>/.ssh/id_{% ifversion ghae %}ecdsa{% else %}ed25519{% endif %}_sk): <em>[Press enter]</em>
   ```
   
   {% endlinux %}

6. パスフレーズの入力を求められたら、**Enter** キーを押します。
   ```shell
   > Enter passphrase (empty for no passphrase): <em>[Type a passphrase]</em>
   > Enter same passphrase again: <em>[Type passphrase again]</em>
   ```
7. {% data variables.product.prodname_dotcom %} で自分のアカウントに SSH キーを追加します。 詳しくは、「[{% data variables.product.prodname_dotcom %} アカウントへの新しい SSH キーの追加](/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account)」をご覧ください。
