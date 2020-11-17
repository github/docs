---
title: 暗号化されたシークレット
intro: 暗号化されたシークレットを使用すると、機密情報をリポジトリまたは Organization に保存できます。
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets
  - /actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets
  - /actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data variables.product.prodname_actions %} の支払いを管理する
{% data variables.product.prodname_dotcom %}は、macOSランナーのホストに[MacStadium](https://www.macstadium.com/)を使用しています。

### 暗号化されたシークレットについて

シークレットは、リポジトリまたは Organization で作成する暗号化された環境変数です。 作成したシークレットは、{% data variables.product.prodname_actions %} ワークフローで使用できます。 {% data variables.product.prodname_dotcom %}は、[ libsodium sealed box](https://libsodium.gitbook.io/doc/public-key_cryptography/sealed_boxes)を使って、シークレットが{% data variables.product.prodname_dotcom %}に到達する前に暗号化され、ワークフローで使われるまで暗号化されたままになっていることを保証する手助けをします。

{% data reusables.github-actions.secrets-org-level-overview %}

#### シークレットに名前を付ける

シークレットの名前には次のルールが適用されます。

* シークレット名には、英数字（`[a-z]`、`[A-Z]`、`[0-9]`）または下線（`_`）のみを含めることができます。 スペースは使用できません。
* シークレット名の最初を `GITHUB_` プレフィックスにすることはできません。
* シークレット名の最初を数字にすることはできません。
* シークレット名は、作成されたレベルで一意である必要があります。 たとえば、Organization レベルで作成されたシークレット名はそのレベルで一意である必要があり、リポジトリレベルで作成されたシークレット名はそのリポジトリ内で一意である必要があります。 Organization レベルのシークレット名がリポジトリレベルのシークレット名と同じ場合、リポジトリレベルのシークレット名が優先されます。

{% data variables.product.prodname_dotcom %} がログのシークレットを確実に削除するよう、シークレットの値として構造化データを使用しないでください。 たとえば、JSONやエンコードされたGit blobを含むシークレットは作成しないでください。

#### シークレットにアクセスする

シークレットをアクションが使用できるようにするには、ワークフローファイルでシークレットを入力または環境変数に設定する必要があります。 アクションに必要な入力および環境変数については、アクションのREADMEファイルを確認します。 詳しい情報については、「[{% data variables.product.prodname_actions %}のワークフロー構文](/articles/workflow-syntax-for-github-actions/#jobsjob_idstepsenv)」を参照してください。

ファイルを編集するアクセス権を持っていれば、ワークフローファイル中の暗号化されたシークレットを使い、読み取ることができます。 詳細は「[{% data variables.product.prodname_dotcom %} 上のアクセス権限](/github/getting-started-with-github/access-permissions-on-github)」を参照してください。

{% warning %}

**警告：** {% data variables.product.prodname_dotcom %}は、ログに出力されたシークレットを自動的に削除しますが、シークレットをログに出力することは意識的に避けなくてはなりません。

{% endwarning %}

REST API を使用してシークレットを管理することもできます。 詳しい情報については、「[シークレット](/v3/actions/secrets/)」を参照してください。

#### 認証情報のアクセス許可を制限する

クレデンシャルを生成する際には、可能な限り最小限の権限だけを許可することをおすすめします。 たとえば、個人のクレデンシャルを使う代わりに、[デプロイキー](/v3/guides/managing-deploy-keys/#deploy-keys)あるいはサービスアカウントを使ってください。 必要なのが読み取りだけであれば、読み取りのみの権限を許可すること、そしてアクセスをできるかぎり限定することを考慮してください。 個人アクセストークン（PAT）を生成する際には、必要最小限のスコープを選択してください。

### リポジトリの暗号化されたシークレットの作成

{% data reusables.github-actions.permissions-statement-secrets-repository %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.github-actions.sidebar-secret %}
1. [**Add a new secret**] をクリックします。
1. [名前]</strong> 入力ボックスにシークレットの名前 **入力します。</li>
1 シークレットの値を入力します。
1 [**Add secret**] をクリックします。</ol>

リポジトリが親組織のシークレットにアクセスできる場合、そのシークレットもこのページに表示されます。

### 組織の暗号化されたシークレットの作成

組織でシークレットを作成する場合、ポリシーを使用して、そのシークレットにアクセスできるリポジトリを制限できます。 たとえば、すべてのリポジトリにアクセスを許可したり、プライベート リポジトリまたは指定したリポジトリ のリストのみにアクセスを制限したりできます。

{% data reusables.github-actions.permissions-statement-secrets-organization %}

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.github-actions.sidebar-secret %}
1. [新しいシークレット ****] をクリックします。
1. [名前]</strong> 入力ボックスにシークレットの名前 **入力します。</li>
1 シークレットの **値** を入力します。
1 [ **リポジトリアクセス** ドロップダウン リストから、アクセス ポリシーを選択します。
1 [**Add secret**] をクリックします。</ol>

### 組織レベルのシークレットへのアクセスの確認

組織内のシークレットに適用されているアクセス ポリシーを確認できます。

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.github-actions.sidebar-secret %}
1. シークレットのリストには、構成済みのアクセス許可とポリシーが含まれます。 例: ![シークレットリスト](/assets/images/help/settings/actions-org-secrets-list.png)
1. 各シークレットに構成されているアクセス許可の詳細については、[更新</strong>**] をクリックしてください。</p></li> </ol>

### 暗号化されたシークレットのワークフロー内での利用

`GITHUB_TOKEN`を除き、フォークしたリポジトリからワークフローがトリガーされた場合、シークレットは runner に渡されません。

アクションに入力あるいは環境変数としてシークレットを提供するには、リポジトリ内に作成したシークレットにアクセスする`secrets`コンテキストを使うことができます。 詳しい情報については「[{% data variables.product.prodname_actions %}のコンテキストと式構文](/actions/reference/context-and-expression-syntax-for-github-actions)」及び「[{% data variables.product.prodname_actions %}のワークフロー構文](/github/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions)」を参照してください。

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

可能であれば、コマンドラインからプロセス間でシークレットを渡すのは避けてください。 コマンドラインプロセスは他のユーザから見えるかもしれず（`ps`コマンドを使って）、あるいは[セキュリティ監査イベント](https://docs.microsoft.com/windows-server/identity/ad-ds/manage/component-updates/command-line-process-auditing)でキャプチャされるかもしれません。 シークレットの保護のために、環境変数、`STDIN`、あるいはターゲットのプロセスがサポートしている他の仕組みの利用を考慮してください。

コマンドラインからシークレットを渡さなければならない場合は、それらを適切なルールでクオート内に収めてください。 シークレットは、意図せずシェルに影響するかもしれない特殊なキャラクターをしばしば含みます。 それらの特殊なキャラクターをエスケープするには、環境変数をクオートで囲ってください。 例:

#### Bashの利用例

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

#### PowerShellの利用例

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

#### Cmd.exeの利用例

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

### シークレットの制限

ワークフローは、最大で100のシークレットを持てます。 シークレット環境変数の名前は、リポジトリ内でユニークでなければなりません。

シークレットの容量は最大64 KBです。 64 KBより大きなシークレットを使うには、暗号化されたシークレットをリポジトリ内に保存して、復号化パスフレーズを{% data variables.product.prodname_dotcom %}に保存します。 たとえば、{% data variables.product.prodname_dotcom %}のリポジトリにファイルをチェックインする前に、`gpg`を使って認証情報をローカルで暗号化します。 詳しい情報については、「[gpg manpage](https://www.gnupg.org/gph/de/manual/r1023.html)」を参照してください。

{% warning %}

**警告**: アクションを実行する際、シークレットは出力されないので注意してください。 この回避策を用いる場合、{% data variables.product.prodname_dotcom %}はログに出力されたシークレットを削除しません。

{% endwarning %}

1. ターミナルから以下のコマンドを実行して、`gpg`およびAES256暗号アルゴリズムを使用して`my_secret.json`ファイルを暗号化します。

 ``` shell
 $ gpg --symmetric --cipher-algo AES256 my_secret.json
 ```

1. パスフレーズを入力するよう求められます。 このパスフレーズを覚えておいてください。{% data variables.product.prodname_dotcom %}で、このパスフレーズを値として用いる新しいシークレットを作成するために必要になります。

1. パスフレーズを含む新しいシークレットを作成します。 たとえば、`LARGE_SECRET_PASSPHRASE`という名前で新しいシークレットを作成し、シークレットの値を上記のステップで選択したパスフレーズに設定します。

1. 暗号化したファイルをリポジトリ内にコピーしてコミットします。 この例では、暗号化したファイルは`my_secret.json.gpg`です。

1. パスワードを復号化するシェルスクリプトを作成します。 このファイルを`decrypt_secret.sh`として保存します。

  ``` shell
  #!/bin/sh

  # mkdir $HOME/secrets
  # --batch
  ファイルを復号化して、インタラクティブなコマンド
  # --yes を防ぎ、質問に対して "はい" を
  -- yes --はい --パスフレーズを解読する ="$LARGE_SECRET_PASSPHRASE" \
  -- $HOME/secrets/my_secret.json my_secret.json.gpg
  ```

1. リポジトリにチェックインする前に、シェルスクリプトが実行可能であることを確かめてください。

  ``` shell
  $ chmod +x decrypt_secret.sh
  $ git add decrypt_secret.sh
  $ git commit -m "Add new decryption script"
  $ git push
  ```

1. ワークフローから、`step`を使用してシェルスクリプトを呼び出し、シークレットを復号化します。 ワークフローを実行している環境にリポジトリのコピーを作成するには、[`actions/checkout`](https://github.com/actions/checkout)アクションを使用する必要があります。 リポジトリのルートを基準として、`run`コマンドを使用することで、シェルスクリプトを参照します。

{% raw %}
  ```yaml
  名前: 大きな

  秘密を持つワークフロー: プッシュ

  ジョブ
    : プッシュジョブ:
      名:のジョブ
      実行: ubuntu 最新
      ステップ:
        - 使用: アクション/checkout@v2
        - 名前: 大規模な秘密
          を復号化
          実行: ./.github/scripts/decrypt_secret.sh  env:
            LARGE_SECRET_PASSPHRASE: ${{ secrets.LARGE_SECRET_PASSPHRASE }}
        # このコマンドは、あなたの秘密が印刷されていることを示す例
        # あなたの印刷シークレットを削除します。 GitHub does
        # not hide secrets that use this workaround.
        - name: Test printing your secret (Remove this step in production)
          run: cat $HOME/secrets/my_secret.json
  ```
{% endraw %}
