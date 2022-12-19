---
title: Code scanningを設定する
intro: '{% data variables.product.prodname_dotcom %} がプロジェクトのコードをスキャンして脆弱性やエラーを検出する方法を設定できます。'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'People with write permissions to a repository can configure {% data variables.product.prodname_code_scanning %} for the repository.'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning
  - /code-security/secure-coding/configuring-code-scanning
  - /code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - Actions
  - Repositories
  - Pull requests
  - JavaScript
  - Python
shortTitle: Configure code scanning
ms.openlocfilehash: cad147292c113d749004f2fe303b27a4dada1456
ms.sourcegitcommit: dac72908e8660cb4a347fbf73beab61034eed8c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/25/2022
ms.locfileid: '148182315'
---
{% data reusables.code-scanning.beta %} {% data reusables.code-scanning.enterprise-enable-code-scanning-actions %}

{% ifversion ghes or ghae %} {% note %}

**メモ:** この記事では、このバージョンの {% data variables.product.product_name %} の初期リリースに含まれる CodeQL アクションのバージョンおよび関連する CodeQL CLI バンドルで使用できる機能について説明します。 企業でより新しいバージョンの CodeQL アクションを使用している場合は、最新の機能の詳細について [{% data variables.product.prodname_ghe_cloud %} の記事](/enterprise-cloud@latest/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning)を参照してください。 {% ifversion not ghae %}最新バージョンの使用については、「[Configuring code scanning for your appliance](/admin/advanced-security/configuring-code-scanning-for-your-appliance#configuring-codeql-analysis-on-a-server-without-internet-access)」(アプライアンスのコード スキャニングの構成) を参照してください。{% endif %}

{% endnote %} {% endif %}

## {% data variables.product.prodname_code_scanning %} の設定について

{% data variables.product.prodname_actions %}を使って、あるいは継続的インテグレーション（CI）システムから、{% data variables.product.product_name %}上で{% data variables.product.prodname_code_scanning %}を実行できます。 詳細については、[{% data variables.product.prodname_actions %} に関する](/actions/getting-started-with-github-actions/about-github-actions)ページまたは「[CI システムの {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} について](/code-security/secure-coding/about-codeql-code-scanning-in-your-ci-system)」を参照してください。

この記事は、Actionsを使って{% data variables.product.product_name %} 上で {% data variables.product.prodname_code_scanning %} を実行することについて説明しています。

リポジトリに {% data variables.product.prodname_code_scanning %} を設定する前に、リポジトリに {% data variables.product.prodname_actions %} ワークフローを追加して {% data variables.product.prodname_code_scanning %} をセットアップする必要があります。 詳細については、「[リポジトリの {% data variables.product.prodname_code_scanning %} の設定](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)」を参照してください。

{% data reusables.code-scanning.edit-workflow %}

{% data variables.product.prodname_codeql %} 解析は、{% data variables.product.prodname_dotcom %} で実行できる {% data variables.product.prodname_code_scanning %} のほんの一例に過ぎません。 {% ifversion ghes %}{% data variables.product.prodname_dotcom_the_website %} 上の {% endif %}{% data variables.product.prodname_marketplace %} には、使用できる他の {% data variables.product.prodname_code_scanning %} ワークフローが含まれます。 {% ifversion fpt or ghec %}これらの選択肢は、 **[{% octicon "shield" aria-label="The shield symbol" %} セキュリティ]** タブからアクセスできる「{% data variables.product.prodname_code_scanning %} を開始する」ページにあります。{% endif %} この記事で示す例は、{% data variables.code-scanning.codeql_workflow %} ファイルに関連しています。

## {% data variables.product.prodname_code_scanning %}ワークフローの編集

{% data variables.product.prodname_dotcom %} によって、リポジトリの _.github/workflows_ ディレクトリにワークフロー ファイルが保存されます。 追加したワークフローは、そのファイル名を検索して見つけることができます。 たとえば、既定では、{% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} のワークフロー ファイルは、_codeql-analysis.yml_ という名前です。

1. リポジトリで、編集したいワークフローファイルにアクセスします。
1. ファイル ビューの右上隅の {% octicon "pencil" aria-label="The edit icon" %} をクリックして、ワークフロー エディターを開きます。
![ワークフロー ファイルの編集ボタン](/assets/images/help/repository/code-scanning-edit-workflow-button.png)
1. ファイルを編集したら、**[コミットの開始]** をクリックし、[変更のコミット] フォームに入力します。 現在のブランチに直接コミットするか、新しいブランチを作成して pull request を開始するかを選択できます。
![codeql.yml ワークフローの更新をコミットする](/assets/images/help/repository/code-scanning-workflow-update.png)

ワークフロー ファイルの編集の詳細については、「[{% data variables.product.prodname_actions %} について学ぶ](/actions/learn-github-actions)」を参照してください。

## 頻度を設定する

スケジュール設定されているときや、リポジトリで特定のイベントが発生したときに、コードをスキャンするように {% data variables.code-scanning.codeql_workflow %}を構成できます。

リポジトリへのプッシュごと、およびプルリクエストが作成されるたびにコードをスキャンすることで、開発者がコードに新しい脆弱性やエラーをもたらすことを防ぎます。 スケジュールに従ってコードをスキャンすると、開発者がリポジトリを積極的に維持していない場合でも、{% data variables.product.company_short %}、セキュリティ研究者、コミュニティが発見した最新の脆弱性とエラーが通知されます。

### プッシュ時にスキャンする

既定では、{% data variables.code-scanning.codeql_workflow %}で、リポジトリの既定のブランチと保護されたブランチへのプッシュごとにコード スキャンをトリガーするのに `on.push` イベントが使用されます。 指定したブランチで {% data variables.product.prodname_code_scanning %} がトリガーされるようにするには、ワークフローがそのブランチに存在している必要があります。 詳細については、[{% data variables.product.prodname_actions %} のワークフロー構文](/actions/reference/workflow-syntax-for-github-actions#on)に関するページを参照してください。

プッシュ時にスキャンすると、結果がリポジトリの **[セキュリティ]** タブに表示されます。 詳細については、「[リポジトリの code scanning アラートの管理](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository)」を参照してください。

さらに、開かれた pull request にマップできる結果が `on:push` スキャンから返された場合、これらのアラートは他の pull request アラートと同じ場所にある pull request に自動的に表示されます。 これらのアラートは、ブランチのヘッドの既存の分析とターゲット ブランチの分析を比較することで特定します。 pull request の {% data variables.product.prodname_code_scanning %} アラートの詳細については、「[pull request の {% data variables.product.prodname_code_scanning %} アラートのトリアージ](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests)」を参照してください。

### Pull Requestをスキャンする

既定の {% data variables.code-scanning.codeql_workflow %}では、既定のブランチをターゲットとする pull request のコード スキャンをトリガーするのに `pull_request` イベントが使用されます。 {% ifversion ghes %}`pull_request` イベントは、pull request がプライベート フォークから開かれた場合、トリガーされません。{% else %}pull request がプライベート フォークからのものである場合、`pull_request` イベントは、リポジトリの設定で [フォークの pull request からワークフローを実行] オプションを選択している場合にのみトリガーされます。 詳細については、「[リポジトリの {% data variables.product.prodname_actions %} 設定の管理](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#enabling-workflows-for-private-repository-forks)」を参照してください。{% endif %}

`pull_request` イベントの詳細については、「[ワークフローをトリガーするイベント](/actions/learn-github-actions/events-that-trigger-workflows#pull_request)」を参照してください。

pull requests をスキャンすると、結果は pull request チェックのアラートとして表示されます。 詳細については、「[pull request での Code Scanning アラートのトリアージ](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests)」を参照してください。

ヘッド コミットではなく pull request のマージ コミットをスキャンするように構成された `pull_request` トリガーを使用すると、各プッシュでブランチのヘッドをスキャンする場合より効果的で正確な結果が生成されます。 ただし、使用している CI/CD システムで、pull request でトリガーするように構成できない場合でも、`on:push` トリガーは引き続き使用できます。また、{% data variables.product.prodname_code_scanning %} により、結果がブランチの開いている pull request にマッピングされ、アラートが注釈としてその pull request に追加されます。 詳細については、「[プッシュ時のスキャン](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning#scanning-on-push)」を参照してください。

### pull request チェック エラーの原因となる重大度を定義する

既定では、重大度レベルが `Error` または セキュリティの重大度レベルが `Critical` か `High` であるアラートの場合にのみ、pull request チェック エラーが発生し、重大度が低いアラートではチェックは成功します pull request チェック エラーを引き起こすアラートの重大度とセキュリティの重大度のレベルは、リポジトリの設定で変更できます。 重大度レベルの詳細については、[Code Scanning アラートについて](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-alerts#about-alert-details)のページを参照してください。

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. "Code scanning"の下で、"Check Failure（チェックの失敗）"の右のドロップダウンメニューを使い、Pull Requestのチェックの失敗を引き起こさせたい重要度のレベルを選択してください。
![チェック失敗の設定](/assets/images/help/repository/code-scanning-check-failure-setting.png)

### Pull Requestの不要なスキャンを回避する

変更されたファイルに関係なく、既定のブランチを対象とする特定の pull request でコード スキャンがトリガーされないようにしたい場合があります。 これを構成するには、{% data variables.product.prodname_code_scanning %} ワークフローで `on:pull_request:paths-ignore` または `on:pull_request:paths` を指定します。 たとえば、pull request 内の変更がファイル拡張子 `.md` または `.txt` のファイルに対するものだけである場合、次の `paths-ignore` 配列を使用できます。

``` yaml
on:
  push:
    branches: [main, protected]
  pull_request:
    branches: [main]
    paths-ignore:
      - '**/*.md'
      - '**/*.txt'
```

{% note %}

**メモ**

* `on:pull_request:paths-ignore` と `on:pull_request:paths` で、ワークフロー内のアクションが pull request で実行されるかどうかを決定する条件を設定します。 アクションが実行 _される_ ときにどのファイルが解析されるかは決定されません。 pull request に `on:pull_request:paths-ignore` または `on:pull_request:paths` で一致しないファイルが含まれている場合、ワークフローによって、アクションが実行され、そのファイルが除外されていない限り、`on:pull_request:paths-ignore` または `on:pull_request:paths` で一致するファイルを含め、pull request で変更されたすべてのファイルがスキャンされます。 分析からファイルを除外する方法については、「[スキャンするディレクトリを指定する](#specifying-directories-to-scan)」を参照してください。
* {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} ワークフロー ファイルの場合、`on:push` イベントで `paths-ignore` または `paths` キーワードを使用しないでください。解析に漏れが生じるおそれがあります。 正確な結果を得るには、{% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} が新しい変更を前回のコミットの解析と比較できる必要があります。

{% endnote %}

`on:pull_request:paths-ignore` と `on:pull_request:paths` を使用して pull request に対してワークフローをいつ実行するかを決定する方法については、「[{% data variables.product.prodname_actions %} のワークフロー構文](/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore)」を参照してください。

### スケジュールに従ってスキャンする

既定の {% data variables.code-scanning.codeql_workflow %}を使用すると、このワークフローではイベントによってトリガーされるスキャンに加えて、リポジトリ内のコードが週に 1 回スキャンされます。 このスケジュールを調整するには、ワークフローの `cron` 値を編集します。 詳細については、[{% data variables.product.prodname_actions %} のワークフロー構文](/actions/reference/workflow-syntax-for-github-actions#onschedule)に関するページを参照してください。

{% note %}

**メモ**: {% data variables.product.prodname_dotcom %} では、既定のブランチのワークフロー内にあるスケジュール設定されたジョブのみが実行されます。 他のブランチのワークフローでスケジュールを変更しても、ブランチをデフォルトブランチにマージするまで影響はありません。

{% endnote %}

### 例

次の例は、既定のブランチの名前が `main` で、`protected` という名前の保護されたブランチがある特定のリポジトリの {% data variables.code-scanning.codeql_workflow %}を示しています。

``` yaml
on:
  push:
    branches: [main, protected]
  pull_request:
    branches: [main]
  schedule:
    - cron: '20 14 * * 1'
```

このワークフローでは以下をスキャンします。
* 既定のブランチと保護されたブランチへのすべてのプッシュ
* 既定のブランチへのすべての pull request
* 毎週月曜日 14 時 20 分 (UTC) に既定のブランチ

## オペレーティングシステムを指定する

コードのコンパイルに特定のオペレーティング システムが必要な場合は、そのオペレーティング システムを {% data variables.code-scanning.codeql_workflow %}で構成できます。 `jobs.analyze.runs-on` の値を編集して、{% data variables.product.prodname_code_scanning %} アクションを実行するコンピューターのオペレーティング システムを指定します。 {% ifversion ghes %}2 つの要素からなる配列の 2 番目の要素として、`self-hosted` の後に、適切なラベルを使用して、オペレーティング システムを指定します。{% else %}

``` yaml
jobs:
  analyze:
    name: Analyze
    runs-on: [ubuntu-latest]
```

Code Scanning にセルフホスト ランナーを使うことにした場合は、2 つの要素からなる配列の 2 番目の要素として、`self-hosted` の後に、適切なラベルを使用して、オペレーティング システムを指定できます。{% endif %}

``` yaml
jobs:
  analyze:
    name: Analyze
    runs-on: [self-hosted, ubuntu-latest]
```

{% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} は、Ubuntu、Windows、および macOS の最新バージョンをサポートしています。 したがって、この設定の一般的な値は、`ubuntu-latest`、`windows-latest`、`macos-latest` です。 詳細については、「[ジョブのランナーを選択する](/actions/using-jobs/choosing-the-runner-for-a-job)」および「[セルフホスト ランナーとのラベルの利用](/actions/hosting-your-own-runners/using-labels-with-self-hosted-runners)」を参照してください。

{% ifversion ghes %}Git がセルフホスト ランナーの PATH 変数にあることを確認する必要があります。{% else %}セルフホスト ランナーを使用する場合は、Git が PATH 変数内にあることを確認する必要があります。{% endif %}詳細については、「[セルフホスト ランナーについて](/actions/hosting-your-own-runners/about-self-hosted-runners)」および「[セルフホスト ランナーの追加](/actions/hosting-your-own-runners/adding-self-hosted-runners)」を参照してください。

{% ifversion not ghes %}セルフホスト コンピューターで{% endif %}{% data variables.product.prodname_codeql %} 解析を実行するための推奨仕様 (RAM、CPU コア、ディスク) については、「[{% data variables.product.prodname_codeql %} を実行するための推奨ハードウェア リソース](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/recommended-hardware-resources-for-running-codeql)」を参照してください。

## {% data variables.product.prodname_codeql %}データベースの場所の指定

一般に、{% data variables.code-scanning.codeql_workflow %}で {% data variables.product.prodname_codeql %} データベースが配置される場所について気にする必要はありません。これは、前のステップで作成されたデータベースが後のステップで自動的に検出されるためです。 ただし、カスタムのワークフロー ステップを記述していて、{% data variables.product.prodname_codeql %} データベースをワークフロー成果物としてアップロードするなど、そのデータベースが特定のディスクの場所にあることが必要な場合は、`init` アクションの `db-location` パラメーターを使ってその場所を指定できます。

``` yaml
- uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    db-location: {% raw %}'${{ github.workspace }}/codeql_dbs'{% endraw %}
```

{% data variables.code-scanning.codeql_workflow %}では、`db-location` に指定されるパスが書き込み可能であり、存在しないか空のディレクトリであると想定されています。 セルフホストランナー上で動作するか、Dockerコンテナを使うジョブでこのパラメータを使う場合、選択されたディレクトリが実行間でクリアされること、あるいは不要になったらデータベースが削除されることを保証するのはユーザの責任です。 {% ifversion fpt or ghec or ghes %} これは、実行のたびに新しいインスタンスとクリーンなファイルシステムが取得される {% data variables.product.prodname_dotcom %} ホスト ランナー上で動作するジョブには必要ありません。 詳細については、「[{% data variables.product.prodname_dotcom %} ホスト ランナーの概要](/actions/using-github-hosted-runners/about-github-hosted-runners)」を参照してください。{% endif %}

このパラメーターが使われていない場合、{% data variables.code-scanning.codeql_workflow %}では、データベースが任意の一時的な場所に作成されます。

## 解析される言語を変更する

{% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %}は、自動的にサポートする言語で書かれたコードを検出します。

{% data reusables.code-scanning.codeql-languages-bullets %}

既定の {% data variables.code-scanning.codeql_workflow %} ファイルには、`language` というマトリックスが含まれ、リポジトリ内の分析対象の言語が一覧表示されています。 {% data variables.product.prodname_codeql %}は、{% data variables.product.prodname_code_scanning %}がリポジトリに追加されたときにこのマトリクスを自動的に作成します。 `language` マトリックスを使用すると、{% data variables.product.prodname_codeql %} で各解析が並行して実行されるように最適化されます。 ビルドを並列化するとパフォーマンスが向上するため、すべてのワークフローでこの構成を採用することをお勧めします。 マトリックスの詳しい情報については、「[ジョブにマトリックスを使用する](/actions/using-jobs/using-a-matrix-for-your-jobs)」を参照してください。

{% data reusables.code-scanning.specify-language-to-analyze %}

ワークフローで `language` マトリックスを使用する場合、{% data variables.product.prodname_codeql %} はマトリックス内の言語だけを分析するようにハードコードされています。 分析する言語を変更するには、マトリックス変数の値を編集します。 解析されないように言語を削除したり、{% data variables.product.prodname_code_scanning %}をセットアップしたときにはリポジトリ中になかった言語を追加したりできます。 たとえば、{% data variables.product.prodname_code_scanning %} が設定されたとき、リポジトリには当初 JavaScript しか入っておらず、後で Python のコードを追加した場合は、マトリックスに `python` を追加する必要があります。

```yaml
jobs:
  analyze:
    name: Analyze
    ...
    strategy:
      fail-fast: false
      matrix:
        language: ['javascript', 'python']
```

ワークフローに `language` という名前のマトリックスが含まれていない場合は、{% data variables.product.prodname_codeql %} は解析を順次実行するように設定されます。 ワークフロー中で言語を指定していない場合、{% data variables.product.prodname_codeql %}はリポジトリ中のサポートされている言語を検出し、分析しようとします。 マトリックスは使用せず、分析する言語を選択する場合は、`init` アクションの下の `languages` パラメーターを使用できます。

```yaml
- uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    languages: cpp, csharp, python
```
{% ifversion fpt or ghec %}
## 追加のクエリを実行する

Linux だけを使う GitHub でホストされているランナーの場合、{% data variables.code-scanning.codeql_workflow %}では、CodeQL 分析でさらに結果を得るためにために Python 依存関係の自動インストールが試みられます。 この動作は、"Initialize CodeQL" ステップで呼び出されるアクションに `setup-python-dependencies` パラメーターを指定することで制御できます。 既定では、このパラメーターは `true` に設定されます。

-  リポジトリがPythonで書かれたコードを含むなら、"Initialize CodeQL"ステップは必要な依存関係をGitHubがホストするランナーにインストールします。 また、自動インストールが成功すると、このアクションによって、環境変数 `CODEQL_PYTHON` が、依存関係が含まれる Python 実行可能ファイルに設定されます。

- リポジトリがPythonの依存関係を持たない場合、あるいは依存関係が予想外の方法で指定されている場合、警告が示されてアクションは残りのジョブを継続します。 依存関係の解釈に問題があってもアクションの実行は成功することがありますが、結果は不完全かも知れません。

あるいは、任意のオペレーティングシステムにおいて手動でPythonの依存関係をインストールできます。 このワークフローの抜粋に示されるように、`setup-python-dependencies` を追加して `false` に設定し、さらに `CODEQL_PYTHON` を、依存関係が含まれる Python 実行可能ファイルに設定する必要があります。

```yaml
jobs:
  CodeQL-Build:
    runs-on: ubuntu-latest
    permissions:
      security-events: write
      actions: read

    steps:
      - name: Checkout repository
        uses: {% data reusables.actions.action-checkout %}
      - name: Set up Python
        uses: {% data reusables.actions.action-setup-python %}
        with:
          python-version: '3.x'
      - name: Install dependencies
        run: |
          python -m pip install --upgrade pip
          if [ -f requirements.txt ];
          then pip install -r requirements.txt;
          fi
          # Set the `CODEQL-PYTHON` environment variable to the Python executable
          # that includes the dependencies
          echo "CODEQL_PYTHON=$(which python)" >> $GITHUB_ENV
      - name: Initialize CodeQL
        uses: {% data reusables.actions.action-codeql-action-init %}
        with:
          languages: python
          # Override the default behavior so that the action doesn't attempt
          # to auto-install Python dependencies
          setup-python-dependencies: false
```
{% endif %}

## 分析のカテゴリの設定

`category` を使用して、同じツールとコミットに対して、異なる言語またはコードの異なる部分に対して実行される複数の解析を区別します。 ワークフロー中で指定したカテゴリは、SARIF結果ファイルに含まれます。

このパラメータは、特に単一リポジトリで作業をしていて、単一リポジトリの様々なコンポーネントに対して複数のSARIFファイルがある場合に有益です。

``` yaml
    - name: Perform CodeQL Analysis
      uses: {% data reusables.actions.action-codeql-action-analyze %}
      with:
        # Optional. Specify a category to distinguish between multiple analyses
        # for the same tool and ref. If you don't use `category` in your workflow,
        # GitHub will generate a default category name for you
        category: "my_category"
```

ワークフローで `category` パラメーターを指定しない場合、{% data variables.product.product_name %} によって、アクションをトリガーするワークフロー ファイルの名前、アクション名、任意のマトリックス変数に基づいて、カテゴリ名が生成されます。 たとえば次のような点です。
- `.github/workflows/codeql-analysis.yml`ワークフローと `analyze` アクションによって、カテゴリ `.github/workflows/codeql.yml:analyze` が生成されます。
- `.github/workflows/codeql-analysis.yml` ワークフロー、`analyze` アクション、`{language: javascript, os: linux}` マトリックス変数によって、カテゴリ `.github/workflows/codeql-analysis.yml:analyze/language:javascript/os:linux` が生成されます。

`category` 値は、SARIF v2.1.0 の `<run>.automationDetails.id` プロパティとして表示されます。 詳細については、「[{% data variables.product.prodname_code_scanning %} の SARIF サポート](/code-security/secure-coding/sarif-support-for-code-scanning#runautomationdetails-object)」を参照してください。

指定したカテゴリは、SARIF ファイルに `runAutomationDetails` オブジェクトの詳細が含まれている場合、上書きされることはありません。

## 追加のクエリを実行する

{% data reusables.code-scanning.run-additional-queries %}

{% ifversion codeql-packs %}
### {% data variables.product.prodname_codeql %} クエリ パックを使用する

{% data reusables.code-scanning.beta-codeql-packs-cli %}

1 つ以上の {% data variables.product.prodname_codeql %} クエリ パック (ベータ版) を追加するには、ワークフローの `uses: {% data reusables.actions.action-codeql-action-init %}` セクション内に `with: packs:` エントリを追加します。 `packs` 内で、使用するパッケージを 1 つ以上指定し、必要に応じて、ダウンロードするバージョンを指定します。 バージョンを指定しない場合は、最新バージョンがダウンロードされます。 公開されていないパッケージを使用する場合は、`GITHUB_TOKEN` 環境変数を、パッケージにアクセスできるシークレットに設定する必要があります。 詳細については、[ワークフローでの認証](/actions/reference/authentication-in-a-workflow)に関するページと「[暗号化されたシークレット](/actions/reference/encrypted-secrets)」を参照してください。

{% note %}

**メモ:** 複数の言語の {% data variables.product.prodname_codeql %} データベースを生成するワークフローでは、構成ファイルで {% data variables.product.prodname_codeql %} クエリ パックを代わりに指定する必要があります。 詳細については、以下の「[{% data variables.product.prodname_codeql %} クエリ パックの指定](#specifying-codeql-query-packs)」を参照してください。

{% endnote %}

次の例では、`scope` は、パッケージを公開した Organaization または個人アカウントです。 ワークフローを実行すると、4 つの {% data variables.product.prodname_codeql %} クエリ パックが {% data variables.product.product_name %} からダウンロードされ、各パックの既定のクエリまたはクエリ スイートが実行されます。
- 最新バージョンの `pack1` がダウンロードされ、すべての既定のクエリが実行されます。
- バージョン 1.2.3 の `pack2` がダウンロードされ、すべての既定のクエリが実行されます。
- バージョン 3.2.1 と互換性のある最新バージョンの `pack3` がダウンロードされ、すべてのクエリが実行されます。
- バージョン 4.5.6 の `pack4` がダウンロードされ、`path/to/queries` 内で見つかったクエリのみが実行されます。

``` yaml
- uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    # Comma-separated list of packs to download
    packs: scope/pack1,scope/pack2@1.2.3,scope/pack3@~3.2.1,scope/pack4@4.5.6:path/to/queries
```

### {% data variables.product.prodname_ghe_server %} から {% data variables.product.prodname_codeql %} パックをダウンロードする

{% data variables.product.prodname_ghe_server %} のインストールで発行されたパックがワークフローで使われている場合は、それを見つける場所をワークフローに指示する必要があります。 これを行うには、{% data reusables.actions.action-codeql-action-init %} アクションの `registries` 入力を使います。 この入力は、次に示すように、`url`、`packages`、`token` の各プロパティのリストを受け入れます。

```
- uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    registries: {% raw %}|
      # URL to the container registry, usually in this format
      - url: https://containers.GHEHOSTNAME1/v2/

        # List of package glob patterns to be found at this registry
        packages:
          - my-company/*
          - my-company2/*

        # Token, which should be stored as a secret
        token: ${{ secrets.GHEHOSTNAME1_TOKEN }}

      # URL to the default container registry
      - url: https://ghcr.io/v2/
        # Packages can also be a string
        packages: "*/*"
        token: ${{ secrets.GHCR_TOKEN }}

    {% endraw %}
```

レジストリ リストのパッケージ パターンは順番に調べられるので、通常、最も具体的なパッケージ パターンを最初に置く必要があります。 `token` の値は、`read:packages` アクセス許可でのダウンロード元の GitHub インスタンスによって生成された {% data variables.product.pat_v1 %} にする必要があります。

`registries` プロパティ名の後の `|` に注意してください。 {% data variables.product.prodname_actions %} の入力は文字列のみを受け取ることができるため、これは重要です。 `|` を使うと、後続のテキストが文字列に変換され、それが後で {% data reusables.actions.action-codeql-action-init %} アクションによって解析されます。

### QL パックでクエリを使用する
{% endif %} 1 つ以上のクエリを追加するには、ワークフローの `uses: {% data reusables.actions.action-codeql-action-init %}` セクション内に `with: queries:` エントリを追加します。 クエリがプライベート リポジトリ内にある場合は、`external-repository-token` パラメーターを使用して、プライベート リポジトリをチェックアウトするためのアクセス権を持つトークンを指定します。

``` yaml
- uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    queries: COMMA-SEPARATED LIST OF PATHS
    # Optional. Provide a token to access queries stored in private repositories.
    external-repository-token: {% raw %}${{ secrets.ACCESS_TOKEN }}{% endraw %}
```

`queries` の値でクエリ スイートを指定することもできます。 クエリ スイートは、通常、目的または言語別にグループ化されたクエリのコレクションです。

{% data reusables.code-scanning.codeql-query-suites-explanation %}

{% ifversion codeql-packs %}
### カスタム構成ファイルの処理
{% endif %}

カスタム設定にも構成ファイルを使用する場合、構成ファイル内に指定されているものではなく、ワークフロー内で指定した追加の{% ifversion codeql-packs %}パックまたは{% endif %}クエリが使用されます。 追加の{% ifversion codeql-packs %}パックまたは{% endif %}クエリの組み合わせセットを実行する場合は、ワークフロー内の {% ifversion codeql-packs %}`packs` または {% endif %}`queries` の値の前に `+` 記号を付けます。 詳細については、「[カスタム構成の使用](#using-a-custom-configuration-file)」を参照してください。

次の例では、`+` 記号を付けることで、指定した追加の{% ifversion codeql-packs %}パックと{% endif %}クエリが、参照される構成ファイル内で指定したものと一緒に確実に使用されます。

``` yaml
- uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    config-file: ./.github/codeql/codeql-config.yml
    queries: +security-and-quality,octo-org/python-qlpack/show_ifs.ql@main
    {%- ifversion codeql-packs %}
    packs: +scope/pack1,scope/pack2@1.2.3,scope/pack3@4.5.6:path/to/queries
    {%- endif %}
```

## カスタム構成ファイルの使用

カスタム構成ファイルは、実行する追加の{% ifversion codeql-packs %}パックと{% endif %}クエリを指定するための代替方法です。 また、このファイルを使用することで、既定のクエリ {% ifversion code-scanning-exclude-queries-from-analysis %} を無効にしたり、特定のクエリを除外または含めたり、{% endif %} 分析中にスキャンするディレクトリを指定したりすることもできます。

ワークフロー ファイルでは、`init` アクションの `config-file` パラメーターを使用して、使用する構成ファイルへのパスを指定します。 この例では、構成ファイル _./.github/codeql/codeql-config.yml_ を読み込みます。

``` yaml
- uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    config-file: ./.github/codeql/codeql-config.yml
```

{% data reusables.code-scanning.custom-configuration-file %}

構成ファイルが外部のプライベート リポジトリにある場合は、`init` アクションの `external-repository-token` パラメーターを使用して、そのプライベート リポジトリへのアクセス権を持つトークンを指定します。

```yaml
- uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    external-repository-token: {% raw %}${{ secrets.ACCESS_TOKEN }}{% endraw %}
```

構成ファイルの設定は、YAML 形式で記述します。

{% ifversion codeql-packs %}
### {% data variables.product.prodname_codeql %} クエリ パックを指定する

{% data reusables.code-scanning.beta-codeql-packs-cli %}

配列に {% data variables.product.prodname_codeql %} クエリ パックを指定します。 形式は、ワークフロー ファイルで使用される形式とは異なるので注意してください。

{% raw %}
``` yaml
packs:
  # Use the latest version of 'pack1' published by 'scope'
  - scope/pack1
  # Use version 1.2.3 of 'pack2'
  - scope/pack2@1.2.3
  # Use the latest version of 'pack3' compatible with 3.2.1
  - scope/pack3@~3.2.1
  # Use pack4 and restrict it to queries found in the 'path/to/queries' directory
  - scope/pack4:path/to/queries
  # Use pack5 and restrict it to the query 'path/to/single/query.ql'
  - scope/pack5:path/to/single/query.ql
  # Use pack6 and restrict it to the query suite 'path/to/suite.qls'
  - scope/pack6:path/to/suite.qls
```
{% endraw %}

クエリ パックを指定する完全な書式は `scope/name[@version][:path]` です。 `version` と `path` はどちらも省略可能です。 `version` は semver バージョンの範囲です。 指定しない場合は、最新バージョンが使われます。 semver の範囲の詳細については、[npm の semver ドキュメント](https://docs.npmjs.com/cli/v6/using-npm/semver#ranges)を参照してください。

複数の {% data variables.product.prodname_codeql %} データベースを生成するワークフローがある場合、入れ子になったパックのマップを使用して、カスタム構成ファイル内に、実行する任意の {% data variables.product.prodname_codeql %} クエリ パックを指定できます。

{% raw %}
``` yaml
packs:
  # Use these packs for JavaScript and TypeScript analysis
  javascript:
    - scope/js-pack1
    - scope/js-pack2
  # Use these packs for Java and Kotlin analysis
  java:
    - scope/java-pack1
    - scope/java-pack2@v1.0.0
```
{% endraw %} {% endif %}

### 追加のクエリを指定する

追加のクエリは `queries` 配列に指定します。 配列の各要素に、単一のクエリ ファイル、クエリ ファイルを含むディレクトリ、またはクエリ スイート定義ファイルを識別する値を持つ `uses`パラメーターを含めます。

``` yaml
queries:
  - uses: ./my-basic-queries/example-query.ql
  - uses: ./my-advanced-queries
  - uses: ./query-suites/my-security-queries.qls
```

あるいは、以下の設定ファイルの例にあるように、配列の各要素に名前を与えることもできます。 追加のクエリの詳細については、前述の「[追加のクエリを実行する](#running-additional-queries)」を参照してください。

### デフォルトのクエリを無効にする

カスタム クエリのみを実行する場合は、`disable-default-queries: true` を使用して既定のセキュリティ クエリを無効にすることができます。

{% ifversion code-scanning-exclude-queries-from-analysis %}
### 分析からの特定のクエリの除外

カスタム構成ファイルに `exclude` および `include` フィルターを追加して、分析から除外また分析に含めるクエリを指定できます。

たとえば、これは、次のように除外する場合に便利です。
- 既定のスイート (`security`、`security-extended`、および `security-and-quality`) からの特定のクエリ。
- 結果に関心がない特定のクエリ。
- 警告と推奨事項を生成するすべてのクエリ。

以下の構成ファイルと同様の `exclude` フィルターを使用して、既定の分析から削除するクエリを除外できます。 次の構成ファイルの例では、`js/redundant-assignment` および `js/useless-assignment-to-local` クエリの両方が分析から除外されています。

```yaml
query-filters:
  - exclude:
      id: js/redundant-assignment
  - exclude:
      id: js/useless-assignment-to-local
```
クエリの ID を見つけるには、[セキュリティ] タブのアラートの一覧でアラートをクリックします。これにより、アラートの詳しい内容を示すページが開きます。 フィールドには `Rule ID` クエリ ID が含まれています。アラートの詳細ページについて詳しくは、「[{% data variables.product.prodname_code_scanning %} アラートについて](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-alerts#about-alert-details)」を参照してください。

{% tip %}

**ヒント:**
- フィルターの順序が重要です。 クエリとクエリ パックに関する命令の後に表示される最初のフィルター命令によって、既定でクエリを含めるか除外するかが決まります。
- 後続の命令は順番に実行され、ファイル内で後にある命令の方が前にある命令よりも優先されます。

{% endtip %}

これらのフィルターの使用方法を示す別の例については、「[サンプル構成ファイル](#example-configuration-files)」セクションを参照してください。

カスタム構成ファイルでの `exclude` および `include` フィルターの使用について詳しくは、「[{% data variables.product.prodname_codeql %} クエリ スイートの作成](https://codeql.github.com/docs/codeql-cli/creating-codeql-query-suites/#filtering-the-queries-in-a-query-suite)」を参照してください。 フィルター処理できるクエリ メタデータについて詳しくは、「[CodeQL クエリのメタデータ](https://codeql.github.com/docs/writing-codeql-queries/metadata-for-codeql-queries/)」を参照してください。

{% endif %}

### スキャンするディレクトリを指定する

{% data variables.product.prodname_codeql %} がサポートするインタプリタ型言語 (Python{% ifversion fpt or ghes > 3.3 or ghae > 3.3 %}、Ruby{% endif %}、JavaScript/TypeScript) では、構成ファイルに `paths` 配列を追加することで、{% data variables.product.prodname_code_scanning %} を特定のディレクトリのファイルに限定できます。 `paths-ignore` 配列を追加すると、特定のディレクトリ内のファイルを分析から除外できます。

``` yaml
paths:
  - src
paths-ignore:
  - src/node_modules
  - '**/*.test.js'
```

{% note %}

**注**:

* {% data variables.product.prodname_code_scanning %} 構成ファイルのコンテキストで使用される `paths` および `paths-ignore` キーワードを、ワークフローの `on.<push|pull_request>.paths` で使用する同じキーワードと混同しないでください。 これらをワークフロー内の `on.<push|pull_request>` の変更に使用すると、指定されたディレクトリ内のコードが変更されたときにアクションを実行するかどうかが決定されます。 詳細については、[{% data variables.product.prodname_actions %} のワークフロー構文](/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore)に関するページを参照してください。
* フィルター パターン文字 `?`、`+`、`[`、`]`、`!` はサポートされていないため、文字どおりに照合されます。
* `**` 文字は、行の先頭または末尾にのみ指定するか、スラッシュで囲むことができます。また、`**` と他の文字を一緒に使用できます。 たとえば `foo/**`、`**/foo`、`foo/**/bar` は、すべて許容される構文ですが、`**foo` は許容されません。 ただし、例に示すように、1 つの星印を他の文字と一緒に使用できます。 `*` 文字を含むものはすべて引用符で囲む必要があります。

{% endnote %}

コンパイル言語の場合、プロジェクト中の特定のディレクトリに{% data variables.product.prodname_code_scanning %}を限定したいなら、ワークフロー中で適切なビルドステップを指定しなければなりません。 ビルドからディレクトリを除外するために使用するコマンドは、ビルド システムによって異なります。 詳細については、「[コンパイル型言語の {% data variables.product.prodname_codeql %} ワークフローの構成](/code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages#adding-build-steps-for-a-compiled-language)」を参照してください。

特定のディレクトリ内のコードを変更した場合、モノリポの小さな部分をすばやく分析できます。 ビルド ステップでディレクトリを除外することと、ワークフローで [`on.<push|pull_request>`](/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore) の `paths-ignore` および `paths` キーワードを使用することの両方が必要になります。

### サンプル構成ファイル

{% data reusables.code-scanning.example-configuration-files %}

## コンパイルされた言語の {% data variables.product.prodname_code_scanning %} を設定する

{% data reusables.code-scanning.autobuild-compiled-languages %} {% data reusables.code-scanning.analyze-go %}

{% data reusables.code-scanning.autobuild-add-build-steps %} コンパイル型言語の {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} を構成する方法の詳細については、「[コンパイル型言語の {% data variables.product.prodname_codeql %} ワークフローの構成](/code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages)」を参照してください。

## {% data variables.product.prodname_code_scanning %} データを {% data variables.product.prodname_dotcom %} にアップロードする

{% data variables.product.prodname_dotcom %}は、サードパーティのツールによって外部で生成されたコード分析データを表示できます。 `upload-sarif` アクションを使用してコード分析データをアップロードできます。 詳細については、「[SARIF ファイルを GitHub にアップロードする](/code-security/secure-coding/uploading-a-sarif-file-to-github)」を参照してください。
