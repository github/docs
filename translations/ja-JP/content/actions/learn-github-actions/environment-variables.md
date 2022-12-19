---
title: 環境変数
intro: '{% data variables.product.prodname_dotcom %}はそれぞれの{% data variables.product.prodname_actions %}ワークフローの実行に対してデフォルトの環境変数を設定します。 ワークフローファイル中でカスタムの環境変数を設定することもできます。'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/using-environment-variables
  - /actions/automating-your-workflow-with-github-actions/using-environment-variables
  - /actions/configuring-and-managing-workflows/using-environment-variables
  - /actions/reference/environment-variables
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 578b85facbb8fc6a7ff45f0d56a460eb3e2ab217
ms.sourcegitcommit: 99eb4456062aea31ca381977396417cf92e5798d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/21/2022
ms.locfileid: '148179541'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 環境変数について

環境変数を使用して、ワークフローで参照する情報を格納できます。 ワークフロー ステップまたはアクション内で環境変数を参照すると、ワークフローを実行するランナー マシンで変数が補間されます。 アクションまたはワークフロー ステップ内で実行されるコマンドで、環境変数を作成、読み取り、変更することができます。

独自のカスタム環境変数を設定したり、{% data variables.product.prodname_dotcom %} が自動的に設定する既定の環境変数を使用したり、ランナーの作業環境で設定される他の環境変数を使用したりできます。 環境変数では、大文字小文字は区別されます。 

カスタム環境変数を設定するには、ワークフロー ファイルで定義する必要があります。 カスタム環境変数のスコープは、定義されている要素に制限されます。 次のスコープを設定する環境変数を定義できます。

* ワークフロー全体 (ワークフロー ファイルの最上位レベルで [`env`](/actions/using-workflows/workflow-syntax-for-github-actions#env) を使用)。
* ワークフロー内のジョブの内容 ([`jobs.<job_id>.env`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idenv) を使用)。
* ジョブ内の特定の手順 ([`jobs.<job_id>.steps[*].env`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsenv) を使用)。

{% raw %}
```yaml
name: Greeting on variable day

on:
  workflow_dispatch

env:
  DAY_OF_WEEK: Monday

jobs:
  greeting_job:
    runs-on: ubuntu-latest
    env:
      Greeting: Hello
    steps:
      - name: "Say Hello Mona it's Monday"
        run: echo "$Greeting $First_Name. Today is $DAY_OF_WEEK!"
        env:
          First_Name: Mona
```
{% endraw %}

上の例は、`echo` コマンド (`$DAY_OF_WEEK`、`$Greeting`､`$First_Name`) で使用されている 3 つのカスタム環境変数を示しています。 これらの環境変数の値は、それぞれワークフロー、ジョブ、ステップ レベルで設定され、スコープも設定されます。 

環境変数の補間は、ワークフロー ジョブがランナー マシンに送信された後に行われるため、ランナーで使用されるシェルに適切な構文を使用する必要があります。 この例では、ワークフローは `ubuntu-latest` を指定します。 既定では、Linux ランナーは Bash シェルを使用するため、構文 `$NAME` を使用する必要があります。 ワークフローで Windows ランナーを指定した場合は、PowerShell `$env:NAME` の構文を使用します。 シェルの詳細については、「[{% data variables.product.prodname_actions %} のワークフロー構文](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstepsshell)」を参照してください。

{% note %}

**注**: ステップで <span style="white-space: nowrap;">`run: env`</span> を使用して、ワークフロー ステップで使用できる環境変数のセット全体を一覧表示し、そのステップの出力を調べることができます。

{% endnote %}

## コンテキストを使用して環境変数の値にアクセスする

環境変数に加えて、{% data variables.product.prodname_actions %} を使用することで、コンテキストを使用した値の設定および読み取りも行えます。 環境変数やコンテキストは、ワークフロー中の様々な場所で利用できます。

環境変数は、常に仮想マシン ランナーで補間されます。 ただし、ワークフローの一部は {% data variables.product.prodname_actions %} によって処理され、ランナーには送信されません。 ワークフロー ファイルのこれらの部分で環境変数を使用することはできません。 その代わりに、コンテキストを使用することができます。 たとえば、ジョブまたはステップがランナーに送信されるかどうかを決定する `if` 条件は、常に {% data variables.product.prodname_actions %} によって処理されます。 `if` 条件付きステートメントでコンテキストを使用して、環境変数の値にアクセスできます。

{% raw %}
```yaml
env:
  DAY_OF_WEEK: Monday

jobs:
  greeting_job:
    runs-on: ubuntu-latest
    env:
      Greeting: Hello
    steps:
      - name: "Say Hello Mona it's Monday"
        if: ${{ env.DAY_OF_WEEK == 'Monday' }}
        run: echo "$Greeting $First_Name. Today is $DAY_OF_WEEK!"
        env:
          First_Name: Mona
```
{% endraw %}

最初の例のこの変更では、`if` 条件を導入しました。 ワークフロー ステップは、`DAYS_OF_WEEK` が "Monday" に設定されている場合にのみ実行されます。 [`env` コンテキスト](/actions/learn-github-actions/contexts#env-context)を使用して、`if` 条件付きステートメントからこの値にアクセスします。

{% note %}

**注**: コンテキストは通常、{% raw %}`${{ context.property }}`{% endraw %} としてドル記号と中かっこを使用して示されます。 `if` 条件では、{% raw %}`${{` と `}}`{% endraw %} は省略可能ですが、それらを使用する場合は、上記のように比較ステートメント全体を囲む必要があります。 

{% endnote %}

ジョブがランナーに送信される前に処理されるワークフローの一部で、環境変数の値にアクセスするには、通常 `env` または `github` コンテキストを使用します。 


| Context | 使用事例 | 例 |
| --- | --- | --- |
| `env` | ワークフローで定義されているカスタム環境変数を参照します。 | <span style="white-space: nowrap;">{% raw %}`${{ env.MY_VARIABLE }}`{% endraw %}</span> |
| `github` | ワークフローの実行とその実行をトリガーしたイベントの情報を参照します。 | <span style="white-space: nowrap;">{% raw %}`${{ github.repository }}`{% endraw %}</span> |


 
ワークフローには、さまざまな目的で使用できる他の多くのコンテキストがあります。 詳細については、「[コンテキスト](/actions/learn-github-actions/contexts)」を参照してください。 ワークフロー内で特定のコンテキストを使用できる場所の詳細については、「[コンテキストの可用性](/actions/learn-github-actions/contexts#context-availability)」を参照してください。

### その他の種類の変数

ワークフローのほとんどの場所で、使用できる変数の種類は、`$MY_VARIABLE` のような環境変数か、<span style="white-space: nowrap;">{% raw %}`${{ env.MY_VARIABLE }}`{% endraw %}</span> などの同等のコンテキスト プロパティのみです。 次のような例外があります。

* `workflow_call` と `workflow_dispatch` イベントの入力。ワークフローに値を渡すことができます。 詳細については、[`on.workflow_call.inputs`](/actions/learn-github-actions/workflow-syntax-for-github-actions#onworkflow_callinputs) および [`on.workflow_dispatch.inputs`](/actions/learn-github-actions/workflow-syntax-for-github-actions#onworkflow_dispatchinputs) を参照してください。
* ジョブ出力。ワークフロー内のジョブ間で値を渡すことができます。 詳細については、「[`jobs.<job_id>.outputs`](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idoutputs)」を参照してください。
* 書式指定式の変数。文字列の一部を置き換えることができます。 詳細については、「[`format`](/actions/learn-github-actions/expressions#format)」を参照してください。

## 環境変数の命名規則

カスタム環境変数を設定する場合、既定の環境変数名は使用できません。 これらの完全な一覧については、以下の「[既定の環境変数](#default-environment-variables)」を参照してください。 これらのデフォルトの環境変数のいずれかの値をオーバーライドしようとすると、割り当ては無視されます。

ファイルシステム上の場所を指すように設定した新しい環境変数がある場合は、`_PATH` サフィックスを指定する必要があります。 既定の環境変数 `GITHUB_ENV` と `GITHUB_WORKSPACE` は、この規則の例外です。

## 既定の環境変数

{% data variables.product.prodname_dotcom %} が設定する既定の環境変数は、ワークフローのどのステップでも使用できます。 

アクションでは、ファイルシステムにアクセスするとき、ハードコードされたファイルパスを使うのではなく環境変数を使用することを強くお勧めします。 {% data variables.product.prodname_dotcom %}は、すべてのランナー環境でアクションが使用する環境変数を設定します。

| 環境変数 | 説明 |
| ---------------------|------------ |
| `CI` | 常に `true` に設定します。 |
| `GITHUB_ACTION` | 現在実行中のアクションの名前、またはステップの [`id`](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstepsid)。 たとえば、アクションの場合は `__repo-owner_name-of-action-repo`。<br><br>{% data variables.product.prodname_dotcom %} では特殊文字を削除し、現在のステップで `id` なしでスクリプトを実行するときに `__run` という名前を使用します。 同じジョブで同じスクリプトまたはアクションを複数回使用する場合、名前には、アンダースコアとシーケンス番号から成るサフィックスが含まれます。 たとえば、実行する最初のスクリプトの名前は `__run` で、2 番目のスクリプトの名前は `__run_2` となります。 同様に、`actions/checkout` の 2 番目の呼び出しは `actionscheckout2` になります。 |
| `GITHUB_ACTION_PATH` | アクションが置かれているパス。 このプロパティは、複合アクションでのみサポートされます。 このパスを使用して、アクションと同じリポジトリにあるファイルにアクセスできます。 たとえば、`/home/runner/work/_actions/repo-owner/name-of-action-repo/v1` のようにします。 |
| `GITHUB_ACTION_REPOSITORY` | アクションを実行するステップの場合、これはアクションの所有者とリポジトリの名前です。 たとえば、`actions/checkout` のようにします。 |
| `GITHUB_ACTIONS` | {% data variables.product.prodname_actions %} がワークフローを実行しているときは常に `true` に設定されます。 この変数は、テストがローカルで実行されているときと、{% data variables.product.prodname_actions %}によって実行されているときを区別するために利用できます。
| `GITHUB_ACTOR` | ワークフローを開始するユーザまたはアプリの名前。 たとえば、`octocat` のようにします。 |
| `GITHUB_API_URL` | API URL を返します。 (例: `{% data variables.product.api_url_code %}`)。
| `GITHUB_BASE_REF` | ワークフローの実行における base ref の名前または pull request のターゲット ブランチ。 これは、ワークフローの実行をトリガーするイベントが `pull_request` か `pull_request_target` である場合にのみ設定されます。 たとえば、`main` のようにします。 |
| `GITHUB_ENV` | ワークフロー コマンドから環境変数を設定するファイルへのランナーのパス。 このファイルは現在のステップに固有であり、ジョブのステップごとで異なります。 たとえば、`/home/runner/work/_temp/_runner_file_commands/set_env_87406d6e-4979-4d42-98e1-3dab1f48b13a` のようにします。 詳細については、「[{% data variables.product.prodname_actions %} のワークフロー コマンド](/actions/using-workflows/workflow-commands-for-github-actions#setting-an-environment-variable)」を参照してください。 | 
| `GITHUB_EVENT_NAME` | ワークフローをトリガーしたイベントの名前。 たとえば、`workflow_dispatch` のようにします。 |
| `GITHUB_EVENT_PATH` | 完全なイベント Webhook ペイロードを含むランナー上のファイルへのパス。 たとえば、`/github/workflow/event.json` のようにします。 |
| `GITHUB_GRAPHQL_URL` | グラフ QL API の URL を返します。 (例: `{% data variables.product.graphql_url_code %}`)。
| `GITHUB_HEAD_REF` | ワークフローの実行における head ref または pull request のソース ブランチ。 このプロパティは、ワークフローの実行をトリガーするイベントが `pull_request` か `pull_request_target` である場合にのみ設定されます。 たとえば、`feature-branch-1` のようにします。 |
| `GITHUB_JOB` | 現在のジョブの [job_id](/actions/reference/workflow-syntax-for-github-actions#jobsjob_id)。 たとえば、`greeting_job` のようにします。 |
| `GITHUB_PATH` | ワークフロー コマンドから `PATH` システム変数を設定するファイルへのランナーのパス。 このファイルは現在のステップに固有であり、ジョブのステップごとで異なります。  たとえば、`/home/runner/work/_temp/_runner_file_commands/add_path_899b9445-ad4a-400c-aa89-249f18632cf5` のようにします。 詳細については、「[{% data variables.product.prodname_actions %} のワークフロー コマンド](/actions/using-workflows/workflow-commands-for-github-actions#adding-a-system-path)」を参照してください。 |
| `GITHUB_REF` | {% data reusables.actions.ref-description %} |
{%- ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} | `GITHUB_REF_NAME` | {% data reusables.actions.ref_name-description %} | | `GITHUB_REF_PROTECTED` | {% data reusables.actions.ref_protected-description %} | | `GITHUB_REF_TYPE` | {% data reusables.actions.ref_type-description %} | {%- endif %} | `GITHUB_REPOSITORY` | 所有者およびリポジトリ名。 たとえば、`octocat/Hello-World` のようにします。 | | `GITHUB_REPOSITORY_OWNER` | リポジトリの所有者の名前。 たとえば、`octocat` のようにします。 | | `GITHUB_RETENTION_DAYS` | ワークフロー実行ログと成果物が保持される日数。 たとえば、`90` のようにします。 | | `GITHUB_RUN_ATTEMPT` | リポジトリ内で実行される特定のワークフローの各試行に割り振られる一意の番号。 この番号は、ワークフロー実行の最初の試行時に 1 で始まり、再実行ごとに増加します。 たとえば、`3` のようにします。 | | `GITHUB_RUN_ID` | {% data reusables.actions.run_id_description %} たとえば、`1658821493`。 | | `GITHUB_RUN_NUMBER` | {% data reusables.actions.run_number_description %} たとえば、`3`。 | | `GITHUB_SERVER_URL`| {% data variables.product.product_name %} サーバーの URL。 (例: `https://{% data variables.product.product_url %}`)。
| `GITHUB_SHA` | {% data reusables.actions.github_sha_description %} | {%- ifversion actions-job-summaries %} | `GITHUB_STEP_SUMMARY` | ワークフロー コマンドからのジョブの概要を含むファイルへのランナーのパス。 このファイルは現在のステップに固有であり、ジョブのステップごとで異なります。 たとえば、`/home/rob/runner/_layout/_work/_temp/_runner_file_commands/step_summary_1cb22d7f-5663-41a8-9ffc-13472605c76c` のようにします。 詳細については、「[{% data variables.product.prodname_actions %} のワークフロー コマンド](/actions/using-workflows/workflow-commands-for-github-actions#adding-a-job-summary)」を参照してください。 | {%- endif %} | `GITHUB_WORKFLOW` | ワークフローの名前。 たとえば、`My test workflow` のようにします。 ワークフロー ファイルで `name` を指定していない場合、このプロパティの値は、リポジトリ内にあるワークフロー ファイルの完全なパスになります。 | | `GITHUB_WORKSPACE` | ステップのランナー上の既定の作業ディレクトリと、[`checkout`](https://github.com/actions/checkout) アクションを使用するときのリポジトリの既定の場所。 たとえば、`/home/runner/work/my-repo-name/my-repo-name` のようにします。 | {%- ifversion actions-runner-arch-envvars %} | `RUNNER_ARCH` | {% data reusables.actions.runner-arch-description %} | {%- endif %} | `RUNNER_DEBUG` | {% data reusables.actions.runner-debug-description %} | | `RUNNER_NAME` | {% data reusables.actions.runner-name-description %} たとえば、`Hosted Agent` | | `RUNNER_OS` | {% data reusables.actions.runner-os-description %} For example, `Windows` | | `RUNNER_TEMP` | {% data reusables.actions.runner-temp-directory-description %} たとえば、`D:\a\_temp` | {%- ifversion not ghae %} | `RUNNER_TOOL_CACHE` | {% data reusables.actions.runner-tool-cache-description %} たとえば、`C:\hostedtoolcache\windows` | {%- endif %}

{% note %}

**注:** 

* ワークフローの実行の URL をジョブの中から使う必要がある場合は、次のように環境変数を組み合わせることができます。`$GITHUB_SERVER_URL/$GITHUB_REPOSITORY/actions/runs/$GITHUB_RUN_ID`
* 既定の環境変数のほとんどは、対応する、似た名前のコンテキスト プロパティを持ちます。 たとえば、{% raw %}`${{ github.ref }}`{% endraw %} コンテキスト プロパティを使用してワークフロー処理中に `GITHUB_REF` 環境変数の値を読み取ることができます。

{% endnote %}

## オペレーティング システムの検出

既定の環境変数 `RUNNER_OS` と対応するコンテキスト プロパティ <span style="white-space: nowrap;">{% raw %}`${{ runner.os }}`{% endraw %}</span> を使用して、異なるオペレーティング システムに使用できる 1 つのワークフロー ファイルを記述できます。 たとえば、ランナーによって使用されるシェルに応じて異なる、環境変数の構文を変更しなくても、オペレーティング システムを `macos-latest` から `windows-latest` に変更した場合、次のワークフローを正常に実行できます。

{% raw %}
```yaml
jobs:
  if-Windows-else:
    runs-on: macos-latest
    steps:
      - name: condition 1
        if: runner.os == 'Windows'
        run: echo "The operating system on the runner is $env:RUNNER_OS."
      - name: condition 2
        if: runner.os != 'Windows'
        run: echo "The operating system on the runner is not Windows, it's $RUNNER_OS."
```
{% endraw %}

この例では、2 つの `if` ステートメントによって `runner` コンテキストの `os` プロパティがチェックされ、ランナーのオペレーティング システムが決定されます。 `if` 条件は {% data variables.product.prodname_actions %} によって処理され、チェックによって `true` として解決されるステップのみ、ランナーに送信されます。 ここでは、チェックの 1 つが常に `true` となり、もう 1 つが `false` になるため、これらのステップの 1 つだけがランナーに送信されます。 ジョブがランナーに送信されると、ステップが実行され、`echo` コマンド内の環境変数が適切な構文を使用して補間されます (Windows の PowerShell の場合 `$env:NAME`、Linux および MacOS の bash と sh の場合 `$NAME`)。 この例では、ステートメント `runs-on: macos-latest` では 2 番目のステップが実行されます。

## ワークフロー内のステップとジョブの間で値を渡す

 ジョブの 1 つのステップで値を生成する場合は、既存または新しい環境変数に値を割り当て、これを `GITHUB_ENV` 環境ファイルに書き込むことで、同じジョブの後続のステップで値を使用できます。 環境ファイルは、アクションによって直接使用することも、`run` キーワードを使用してワークフロー ファイル内のシェル コマンドから使用することもできます。 詳細については、「[{% data variables.product.prodname_actions %} のワークフロー コマンド](/actions/reference/workflow-commands-for-github-actions/#setting-an-environment-variable)」を参照してください。 
 
 ワークフロー内のあるジョブのステップから、そのワークフロー内の別のジョブのステップに値を渡す場合は、その値をジョブ出力として定義できます。 その後、別のジョブのステップからこのジョブ出力を参照できます。 詳細については、[{% data variables.product.prodname_actions %} のワークフロー構文](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idoutputs)に関するページを参照してください。 
 
