---
title: 暗号化されたシークレット
intro: '暗号化されたシークレットを使用すると、組織{% ifversion fpt or ghes or ghec %}、リポジトリ、またはリポジトリ環境{% else %}またはリポジトリ{% endif %}に機密情報を格納できます。'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets
  - /actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets
  - /actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets
  - /actions/configuring-and-managing-workflows/using-variables-and-secrets-in-a-workflow
  - /actions/reference/encrypted-secrets
  - /actions/managing-workflows/storing-secrets
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 4f45a2e0a3ac0c93215f7e4a095c2b8033450808
ms.sourcegitcommit: aa488e9e641139f9056885b1479c8801e9906131
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/11/2022
ms.locfileid: '148162800'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 暗号化されたシークレットについて

シークレットは、組織、リポジトリ、またはリポジトリ環境内に作成する、暗号化された環境変数です。 作成したシークレットは、{% data variables.product.prodname_actions %}ワークフローで利用できます。 {% data variables.product.prodname_dotcom %} はシークレットが {% data variables.product.prodname_dotcom %} に到達する前に暗号化され、ワークフローで使用されるまで暗号化されたままになっていることを確実にするのを助けるために [libsodium シールド ボックス](https://libsodium.gitbook.io/doc/public-key_cryptography/sealed_boxes)を使います。

{% data reusables.actions.secrets-org-level-overview %}

環境レベルで保存されたシークレットについては、それらへのアクセスを制御するために必須のレビュー担当者を有効化することができます。 必須の承認者によって許可されるまで、ワークフローのジョブは環境のシークレットにアクセスできません。

{% ifversion fpt or ghec or ghes > 3.4 %}

{% note %}

**注**: {% data reusables.actions.about-oidc-short-overview %}

{% endnote %}

{% endif %}

### シークレットに名前を付ける

{% data reusables.codespaces.secrets-naming %}

  たとえば、環境のレベルで作成されたシークレットはその環境内でユニークな名前になっていなければならず、リポジトリのレベルで作成されたシークレットはそのリポジトリ内でユニークな名前になっていなければならず、組織のレベルで作成されたシークレットはそのレベルでユニークな名前になっていなければなりません。

  {% data reusables.codespaces.secret-precedence %} 同様に、組織、リポジトリ、環境がすべて同じ名前のシークレットを持つ場合、環境レベルのシークレットが優先されます。

{% data variables.product.prodname_dotcom %} がログのシークレットを確実に削除するよう、シークレットの値として構造化データを使用しないでください。 たとえば、JSONやエンコードされたGit blobを含むシークレットは作成しないでください。

### シークレットにアクセスする

シークレットをアクションが使用できるようにするには、ワークフローファイルでシークレットを入力または環境変数に設定する必要があります。 アクションに必要な入力および環境変数については、アクションのREADMEファイルを確認します。 詳細については、[{% data variables.product.prodname_actions %} のワークフロー構文](/articles/workflow-syntax-for-github-actions/#jobsjob_idstepsenv)に関するページを参照してください。

ワークフローファイルを編集するアクセス権を持っていれば、ワークフローファイル中の暗号化されたシークレットを使い、読み取ることができます。 詳細については、「[{% data variables.product.prodname_dotcom %} 上のアクセス権限](/github/getting-started-with-github/access-permissions-on-github)」を参照してください。

{% data reusables.actions.secrets-redaction-warning %}

Organization及びリポジトリのシークレットはワークフローの実行がキューイングされた時点で読まれ、環境のシークレットは環境を参照しているジョブが開始された時点で読まれます。

REST API を使用してシークレットを管理することもできます。 詳細については、「[シークレット](/rest/reference/actions#secrets)」を参照してください。

### 認証情報のアクセス許可を制限する

認証情報を生成する際には、可能な限り最小限の権限だけを許可することをおすすめします。 たとえば、個人の資格情報を使用する代わりに、[デプロイ キー](/developers/overview/managing-deploy-keys#deploy-keys)またはサービス アカウントを使用します。 必要なのが読み取りだけであれば、読み取りのみの権限を許可すること、そしてアクセスをできるかぎり限定することを考慮してください。 {% data variables.product.pat_v1 %} を生成するときは、必要最小限のスコープを選びます。{% ifversion pat-v2 %}{% data variables.product.pat_v2 %} を生成するときは、必要最小限のリポジトリ アクセスを選びます。{% endif %}

{% note %}

**メモ:** REST API を使用してパッケージを管理できます。 詳細については、「[{% data variables.product.prodname_actions %} のシークレット API](/rest/reference/actions#secrets)」を参照してください。

{% endnote %}

## リポジトリに暗号化されたシークレットを作成する

{% data reusables.actions.permissions-statement-secrets-repository %}

{% webui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.actions.sidebar-secret %}
1. **[新しいリポジトリ シークレット]** をクリックします。
1. **[名前]** 入力ボックスにシークレットの名前を入力します。
1. シークレットの値を入力します。
1. **[シークレットの追加]** をクリックします。

リポジトリに環境シークレットがある場合、またはリポジトリが親組織のシークレットにアクセスできる場合、そのシークレットもこのページに表示されます。

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

リポジトリ シークレットを追加するには、`gh secret set` サブコマンドを使用します。 `secret-name` をシークレットの名前に置き換えます。

```shell
gh secret set SECRET_NAME
```

CLI によって、シークレット値の入力が求められます。 別の方法として、ファイルからシークレットの値を読み取ることもできます。

```shell
gh secret set SECRET_NAME < secret.txt
```

リポジトリのすべてのシークレットを一覧表示するには、`gh secret list` サブコマンドを使用します。

{% endcli %}

## 環境の暗号化されたシークレットの生成

{% data reusables.actions.permissions-statement-secrets-environment %}

{% webui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.actions.sidebar-environment %}
1. シークレットを追加したい環境をクリックしてください。
2. **[環境シークレット]** で、 **[シークレットの追加]** をクリックします。
3. **[名前]** 入力ボックスにシークレットの名前を入力します。
4. シークレットの値を入力します。
5. **[シークレットの追加]** をクリックします。

{% endwebui %}

{% cli %}

環境のシークレットを追加するには、環境名が後に続く `--env` または `-e` フラグと共に `gh secret set` サブコマンドを使用します。

```shell
gh secret set --env ENV_NAME SECRET_NAME
```

環境のすべてのシークレットを一覧表示するには、環境名が後に続く `--env` または `-e` フラグと共に `gh secret list` サブコマンドを使用します。

```shell
gh secret list --env ENV_NAME
```

{% endcli %}

## Organizationの暗号化されたシークレットの作成

Organizationでシークレットを作成する場合、ポリシーを使用して、そのシークレットにアクセスできるリポジトリを制限できます。 たとえば、すべてのリポジトリにアクセスを許可したり、プライベート リポジトリまたは指定したリポジトリ のリストのみにアクセスを制限したりできます。

{% data reusables.actions.permissions-statement-secrets-organization %}

{% webui %}

{% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %} {% data reusables.actions.sidebar-secret %}
1. **[新しい組織シークレット]** をクリックします。
1. **[名前]** 入力ボックスにシークレットの名前を入力します。
1. シークレットの **[値]** を入力します。
1. **[リポジトリアクセス]** ドロップダウンリストから、アクセスポリシーを選びます。
1. **[シークレットの追加]** をクリックします。

{% endwebui %}

{% cli %}

{% note %}

**メモ:** 既定では、{% data variables.product.prodname_cli %} は、`repo` と `read:org` スコープで認証されます。 組織のシークレットを管理するには、さらに `admin:org` スコープを承認する必要があります。

```
gh auth login --scopes "admin:org"
```

{% endnote %}

組織のシークレットを追加するには、組織名が後に続く `--org` または `-o` フラグと共に `gh secret set` サブコマンドを使用します。

```shell
gh secret set --org ORG_NAME SECRET_NAME
```

既定では、シークレットはプライベート リポジトリでのみ使用できます。 組織内のすべてのリポジトリでシークレットを使用できるようにするには、`--visibility` または `-v` フラグを使用します。

```shell
gh secret set --org ORG_NAME SECRET_NAME --visibility all
```

組織内の選択したリポジトリでシークレットを使用できるようにするには、`--repos` または `-r` フラグを使用します。

```shell
gh secret set --org ORG_NAME SECRET_NAME --repos REPO-NAME-1, REPO-NAME-2"
```

組織のすべてのシークレットを一覧表示するには、組織名が後に続く `--org` または `-o` フラグと共に `gh secret list` サブコマンドを使用します。

```shell
gh secret list --org ORG_NAME
```

{% endcli %}

## Organizationレベルのシークレットへのアクセスの確認

Organization内のシークレットに適用されているアクセス ポリシーを確認できます。

{% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %} {% data reusables.actions.sidebar-secret %}
1. シークレットのリストには、設定済みのアクセス許可とポリシーが含まれます。 次に例を示します。 ![シークレットの一覧](/assets/images/help/settings/actions-org-secrets-list.png)
1. 各シークレットに構成されているアクセス許可の詳細については、 **[更新]** をクリックします。

## 暗号化されたシークレットのワークフロー内での利用

{% note %}

**注:**

* {% data reusables.actions.forked-secrets %}

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %}

* シークレットが再利用可能なワークフローに自動的に渡されることはありません。 詳細については、「[ワークフローの再利用](/actions/using-workflows/reusing-workflows#passing-inputs-and-secrets-to-a-reusable-workflow)」を参照してください。

{% endif %}

{% endnote %}

アクションに入力あるいは環境変数としてシークレットを提供するには、リポジトリ内に作成したシークレットにアクセスする `secrets` コンテキストを使うことができます。 詳細については、「[コンテキスト](/actions/learn-github-actions/contexts)」および「[{% data variables.product.prodname_actions %} のワークフロー構文](/github/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions)」を参照してください。

{% raw %}
```yaml
steps:
  - name: Hello world action
    with: # Set the secret as an input
      super_secret: ${{ secrets.SuperSecret }}
    env: # Or as an environment variable
      super_secret: ${{ secrets.SuperSecret }}
```
{% endraw %}

`if:` 条件でシークレットを直接参照することはできません。 代わりに、シークレットをジョブ レベルの環境変数として設定し、ジョブのステップを条件付きで実行するために環境変数を参照することを検討してください。 詳細については、「[コンテキストの可用性](/actions/learn-github-actions/contexts#context-availability)」と [`jobs.<job_id>.steps[*].if`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsif) を参照してください。

シークレットが設定されていない場合、シークレットを参照する式の戻り値 (例では {% raw %}`${{ secrets.SuperSecret }}`{% endraw %} など) は空の文字列になります。

可能であれば、コマンドラインからプロセス間でシークレットを渡すのは避けてください。 コマンドライン プロセスは、他のユーザーに表示される (`ps` コマンドを使用)、または[セキュリティ監査イベント](https://docs.microsoft.com/windows-server/identity/ad-ds/manage/component-updates/command-line-process-auditing)によってキャプチャされる可能性もあります。 シークレットの保護のために、環境変数、`STDIN`、またはターゲットのプロセスがサポートしている他のメカニズムの利用を検討してください。

コマンドラインからシークレットを渡さなければならない場合は、それらを適切なルールでクオート内に収めてください。 シークレットは、意図せずシェルに影響するかもしれない特殊なキャラクターをしばしば含みます。 それらの特殊なキャラクターをエスケープするには、環境変数をクオートで囲ってください。 次に例を示します。

### Bashの利用例

{% raw %}
```yaml
steps:
  - shell: bash
    env:
      SUPER_SECRET: ${{ secrets.SuperSecret }}
    run: |
      example-command "$SUPER_SECRET"
```
{% endraw %}

### PowerShellの利用例

{% raw %}
```yaml
steps:
  - shell: pwsh
    env:
      SUPER_SECRET: ${{ secrets.SuperSecret }}
    run: |
      example-command "$env:SUPER_SECRET"
```
{% endraw %}

### Cmd.exeの利用例

{% raw %}
```yaml
steps:
  - shell: cmd
    env:
      SUPER_SECRET: ${{ secrets.SuperSecret }}
    run: |
      example-command "%SUPER_SECRET%"
```
{% endraw %}

## シークレットの制限

最大 1,000 個の組織シークレット、100 個のリポジトリ シークレット、100 個の環境シークレットを格納できます。

リポジトリに作成されたワークフローは、次の数のシークレットにアクセスできます。

* 100 個のリポジトリ シークレットすべて。
* 100 を超える組織シークレットへのアクセスがリポジトリに割り当てられている場合、ワークフローでは最初の 100 個の組織シークレットのみを使用できます (シークレット名のアルファベット順に並べ替えられます)。
* 100 個の環境シークレットすべて。

シークレットの容量は最大64 KBです。 より大きなシークレットを格納するには、以下の「[大きなシークレットを格納する](#storing-large-secrets)」の回避策を参照してください。

### 大きなシークレットを格納する

64 KB より大きなシークレットを使うには、暗号化されたシークレットをリポジトリ内に保存して、復号化パスフレーズを {% data variables.product.prodname_dotcom %} のシークレットとして保存するという回避策を使用できます。 たとえば、{% data variables.product.prodname_dotcom %} のリポジトリに暗号化されたファイルをチェックインする前に、`gpg` を使ってシークレットを含むファイルをローカルで暗号化できます。 詳細については、「[gpg manpage](https://www.gnupg.org/gph/de/manual/r1023.html)」を参照してください。

{% warning %}

**警告**: ワークフローを実行する際、シークレットは出力されないので注意してください。 この回避策を用いる場合、{% data variables.product.prodname_dotcom %}はログに出力されたシークレットを削除しません。

{% endwarning %}

1. ターミナルから次のコマンドを実行し、`gpg` と AES256 暗号アルゴリズムを使用してシークレットを含むファイルを暗号化します。 この例では、`my_secret.json` はシークレットを含むファイルです。

   ```bash
   gpg --symmetric --cipher-algo AES256 my_secret.json
   ```

1. パスフレーズを入力するよう求められます。 このパスフレーズを覚えておいてください。{% data variables.product.prodname_dotcom %}で、このパスフレーズを値として用いる新しいシークレットを作成するために必要になります。

1. パスフレーズを含む新しいシークレットを作成します。 たとえば、`LARGE_SECRET_PASSPHRASE` という名前で新しいシークレットを作成し、シークレットの値を上記のステップで使用したパスフレーズに設定します。

1. 暗号化したファイルをリポジトリ内のパスにコピーして、コミットします。 この例では、暗号化したファイルは `my_secret.json.gpg` です。

   {% warning %}

   **警告**: 暗号化されていない `my_secret.json` ファイル **ではなく**、`.gpg` ファイル拡張子で終わる暗号化された `my_secret.json.gpg` ファイルを必ずコピーしてください。

   {% endwarning %}

   ```bash
   git add my_secret.json.gpg
   git commit -m "Add new encrypted secret JSON file"
   ```

1. リポジトリ内にシェル スクリプトを作成して、シークレット ファイルの暗号化を解除します。 この例では、スクリプトの名前は `decrypt_secret.sh` です。

   ```bash
   #!/bin/sh

   # Decrypt the file
   mkdir $HOME/secrets
   # --batch to prevent interactive command
   # --yes to assume "yes" for questions
   gpg --quiet --batch --yes --decrypt --passphrase="$LARGE_SECRET_PASSPHRASE" \
   --output $HOME/secrets/my_secret.json my_secret.json.gpg
   ```

1. リポジトリにチェックインする前に、シェルスクリプトが実行可能であることを確かめてください。

   ```bash
   chmod +x decrypt_secret.sh
   git add decrypt_secret.sh
   git commit -m "Add new decryption script"
   git push
   ```

1. {% data variables.product.prodname_actions %} ワークフローで、`step` を使ってシェル スクリプトを呼び出し、シークレットの暗号化を解除します。 ワークフローが実行されている環境でリポジトリのコピーを作成するには、[`actions/checkout`](https://github.com/actions/checkout) アクションを使用する必要があります。 リポジトリのルートを基準として `run` コマンドを使用し、シェル スクリプトを参照します。

   ```yaml
   name: Workflows with large secrets
 
   on: push
 
   jobs:
     my-job:
       name: My Job
       runs-on: ubuntu-latest
       steps:
         - uses: {% data reusables.actions.action-checkout %}
         - name: Decrypt large secret
           run: ./decrypt_secret.sh
           env:
             LARGE_SECRET_PASSPHRASE: {% raw %}${{ secrets.LARGE_SECRET_PASSPHRASE }}{% endraw %}
         # This command is just an example to show your secret being printed
         # Ensure you remove any print statements of your secrets. GitHub does
         # not hide secrets that use this workaround.
         - name: Test printing your secret (Remove this step in production)
           run: cat $HOME/secrets/my_secret.json
   ```

## Base64 バイナリ BLOB をシークレットとして格納する

Base64 エンコードを使用して、小さなバイナリ BLOB をシークレットとして格納できます。 その後、ワークフロー内のシークレットを参照し、ランナーで使用するためにデコードできます。 サイズの制限については、「[シークレットの制限](/actions/security-guides/encrypted-secrets#limits-for-secrets)」を参照してください。

{% note %}

**注**: Base64 は、バイナリのテキストへの変換だけを実行するもので、実際の暗号化に代わるものではありません。

{% endnote %}

1. ファイルを Base64 文字列にエンコードするために `base64` を使用します。 次に例を示します。

   ```
   $ base64 -i cert.der -o cert.base64
   ```

1. Base64 文字列を含むシークレットを作成します。 次に例を示します。

   ```
   $ gh secret set CERTIFICATE_BASE64 < cert.base64
   ✓ Set secret CERTIFICATE_BASE64 for octocat/octorepo
   ```

1. ランナーから Base64 文字列にアクセスするには、シークレットを `base64 --decode` にパイプします。  次に例を示します。 

   ```yaml
   name: Retrieve Base64 secret
   on:
     push:
       branches: [ octo-branch ]
   jobs:
     decode-secret:
       runs-on: ubuntu-latest
       steps:
         - uses: {% data reusables.actions.action-checkout %}
         - name: Retrieve the secret and decode it to a file
           env:
             {% raw %}CERTIFICATE_BASE64: ${{ secrets.CERTIFICATE_BASE64 }}{% endraw %}
           run: |
             echo $CERTIFICATE_BASE64 | base64 --decode > cert.der
         - name: Show certificate information
           run: |
             openssl x509 -in cert.der -inform DER -text -noout
   ```
