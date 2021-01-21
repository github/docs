---
title: 暗号化されたシークレット
intro: Encrypted secrets allow you to store sensitive information in your organization{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}, repository, or repository environments{% else %} or repository{% endif %}.
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets
  - /actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets
  - /actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.environments-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### 暗号化されたシークレットについて

Secrets are encrypted environment variables that you create in an organization{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}, repository, or repository environment{% else %} or repository{% endif %}. The secrets that you create are available to use in {% data variables.product.prodname_actions %} workflows. {% data variables.product.prodname_dotcom %} uses a [libsodium sealed box](https://libsodium.gitbook.io/doc/public-key_cryptography/sealed_boxes) to help ensure that secrets are encrypted before they reach {% data variables.product.prodname_dotcom %} and remain encrypted until you use them in a workflow.

{% data reusables.github-actions.secrets-org-level-overview %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
For secrets stored at the environment level, you can enable required reviewers to control access to the secrets. A workflow job cannot access environment secrets until approval is granted by required approvers.
{% endif %}

#### シークレットに名前を付ける

シークレットの名前には次のルールが適用されます。

* シークレット名には、英数字（`[a-z]`、`[A-Z]`、`[0-9]`）または下線（`_`）のみを含めることができます。 スペースは使用できません。
* シークレット名の最初を `GITHUB_` プレフィックスにすることはできません。
* シークレット名の最初を数字にすることはできません。
* Secret names are not case-sensitive.
* シークレット名は、作成されたレベルで一意である必要があります。 For example, {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}a secret created at the environment level must have a unique name in that environment, {% endif %}a secret created at the repository level must have a unique name in that repository, and a secret created at the organization level must have a unique name at that level.

  If a secret with the same name exists at multiple levels, the secret at the lower level takes precedence. For example, if an organization-level secret has the same name as a repository-level secret, then the repository-level secret takes precedence.{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %} Similarly, if an organization, repository, and environment all have a secret with the same name, the environment-level secret takes precedence.{% endif %}

{% data variables.product.prodname_dotcom %} がログのシークレットを確実に削除するよう、シークレットの値として構造化データを使用しないでください。 たとえば、JSONやエンコードされたGit blobを含むシークレットは作成しないでください。

#### シークレットにアクセスする

シークレットをアクションが使用できるようにするには、ワークフローファイルでシークレットを入力または環境変数に設定する必要があります。 アクションに必要な入力および環境変数については、アクションのREADMEファイルを確認します。 詳しい情報については、「[{% data variables.product.prodname_actions %}のワークフロー構文](/articles/workflow-syntax-for-github-actions/#jobsjob_idstepsenv)」を参照してください。

ファイルを編集するアクセス権を持っていれば、ワークフローファイル中の暗号化されたシークレットを使い、読み取ることができます。 詳細は「[{% data variables.product.prodname_dotcom %} 上のアクセス権限](/github/getting-started-with-github/access-permissions-on-github)」を参照してください。

{% warning %}

**警告：** {% data variables.product.prodname_dotcom %}は、ログに出力されたシークレットを自動的に削除しますが、シークレットをログに出力することは意識的に避けなくてはなりません。

{% endwarning %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
Organization and repository secrets are read when a workflow run is queued, and environment secrets are read when a job referencing the environment starts.
{% endif %}

REST API を使用してシークレットを管理することもできます。 詳しい情報については、「[シークレット](/rest/reference/actions#secrets)」を参照してください。

#### 認証情報のアクセス許可を制限する

クレデンシャルを生成する際には、可能な限り最小限の権限だけを許可することをおすすめします。 たとえば、個人のクレデンシャルを使う代わりに、[デプロイキー](/developers/overview/managing-deploy-keys#deploy-keys)あるいはサービスアカウントを使ってください。 必要なのが読み取りだけであれば、読み取りのみの権限を許可すること、そしてアクセスをできるかぎり限定することを考慮してください。 個人アクセストークン（PAT）を生成する際には、必要最小限のスコープを選択してください。

### リポジトリの暗号化されたシークレットの作成

{% data reusables.github-actions.permissions-statement-secrets-repository %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.github-actions.sidebar-secret %}
1. Click **New repository secret**.
1. **[Name（名前）]** 入力ボックスにシークレットの名前を入力します。
1. シークレットの値を入力します。
1. [**Add secret（シークレットの追加）**] をクリックします。

If your repository {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}has environment secrets or {% endif %}can access secrets from the parent organization, then those secrets are also listed on this page.

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
### Creating encrypted secrets for an environment

{% data reusables.github-actions.permissions-statement-secrets-environment %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.github-actions.sidebar-environment %}
1. Click on the environment that you want to add a secret to.
1. Under **Environment secrets**, click **Add secret**.
1. **[Name（名前）]** 入力ボックスにシークレットの名前を入力します。
1. シークレットの値を入力します。
1. [**Add secret（シークレットの追加）**] をクリックします。
{% endif %}

### Organizationの暗号化されたシークレットの作成

Organizationでシークレットを作成する場合、ポリシーを使用して、そのシークレットにアクセスできるリポジトリを制限できます。 たとえば、すべてのリポジトリにアクセスを許可したり、プライベート リポジトリまたは指定したリポジトリ のリストのみにアクセスを制限したりできます。

{% data reusables.github-actions.permissions-statement-secrets-organization %}

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.github-actions.sidebar-secret %}
1. Click **New organization secret**.
1. **[Name（名前）]** 入力ボックスにシークレットの名前を入力します。
1. シークレットの **Value（値）** を入力します。
1. [ **Repository access（リポジトリアクセス）** ドロップダウン リストから、アクセス ポリシーを選択します。
1. [**Add secret（シークレットの追加）**] をクリックします。

### Organizationレベルのシークレットへのアクセスの確認

Organization内のシークレットに適用されているアクセス ポリシーを確認できます。

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.github-actions.sidebar-secret %}
1. シークレットのリストには、設定済みのアクセス許可とポリシーが含まれます。 例: ![シークレットリスト](/assets/images/help/settings/actions-org-secrets-list.png)
1. 各シークレットに設定されているアクセス許可の詳細については、[**Update（更新）**] をクリックしてください。

### 暗号化されたシークレットのワークフロー内での利用

{% data reusables.actions.forked-secrets %}

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

You can store up to 1,000 secrets per organization{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}, 100 secrets per repository, and 100 secrets per environment{% else %} and 100 secrets per repository{% endif %}. A workflow may use up to 100 organization secrets and 100 repository secrets.{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %} Additionally, a job referencing an environment may use up to 100 environment secrets.{% endif %}

シークレットの容量は最大64 KBです。 64 KBより大きなシークレットを使うには、暗号化されたシークレットをリポジトリ内に保存して、復号化パスフレーズを{% data variables.product.prodname_dotcom %}に保存します。 たとえば、{% data variables.product.prodname_dotcom %}のリポジトリにファイルをチェックインする前に、`gpg`を使って認証情報をローカルで暗号化します。 詳しい情報については、「[gpg manpage](https://www.gnupg.org/gph/de/manual/r1023.html)」を参照してください。

{% warning %}

**警告**: アクションを実行する際、シークレットが出力されないよう注意してください。 この回避策を用いる場合、{% data variables.product.prodname_dotcom %}はログに出力されたシークレットを削除しません。

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

  # ファイルを復号化
  mkdir $HOME/secrets
  # --batchでインタラクティブなコマンドを防ぎ、
  # --yes で質問に対して "はい" が返るようにする
  gpg --quiet --batch --yes --decrypt --passphrase="$LARGE_SECRET_PASSPHRASE" \
  --output $HOME/secrets/my_secret.json my_secret.json.gpg
  ```

1. リポジトリにチェックインする前に、シェルスクリプトが実行可能であることを確かめてください。

  ``` shell
  $ chmod +x decrypt_secret.sh
  $ git add decrypt_secret.sh
  $ git commit -m "Add new decryption script"
  $ git push
  ```

1. ワークフローから、`step`を使用してシェルスクリプトを呼び出し、シークレットを復号化します。 ワークフローを実行している環境にリポジトリのコピーを作成するには、[`actions/checkout`](https://github.com/actions/checkout)アクションを使用する必要があります。 リポジトリのルートを基準として`run`コマンドを使用し、シェルスクリプトを参照します。

{% raw %}
  ```yaml
  name: Workflows with large secrets

  on: push

  jobs:
    my-job:
      name: My Job
      runs-on: ubuntu-latest
      steps:
        - uses: actions/checkout@v2
        - name: Decrypt large secret
          run: ./.github/scripts/decrypt_secret.sh
          env:
            LARGE_SECRET_PASSPHRASE: ${{ secrets.LARGE_SECRET_PASSPHRASE }}
        # このコマンドは、あなたの秘密が印刷されていることを示す例
        # シークレットを出力する文は必ず削除してください。 GitHubは
        # この回避先を使うシークレットは隠蔽しません。
        - name: Test printing your secret (Remove this step in production)
          run: cat $HOME/secrets/my_secret.json
  ```
{% endraw %}
