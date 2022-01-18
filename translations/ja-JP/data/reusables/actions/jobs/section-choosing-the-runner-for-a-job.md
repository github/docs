Use `jobs.<job_id>.runs-on` to define the type of machine to run the job on. {% ifversion fpt or ghec %}The machine can be either a {% data variables.product.prodname_dotcom %}-hosted runner or a self-hosted runner.{% endif %} You can provide `runs-on` as a single string or as an array of strings. If you specify an array of strings, your workflow will run on a self-hosted runner whose labels match all of the specified `runs-on` values, if available. If you would like to run your workflow on multiple machines, use [`jobs.<job_id>.strategy`](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategy).


{% ifversion fpt or ghec or ghes %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Choosing {% data variables.product.prodname_dotcom %}-hosted runners

{% data variables.product.prodname_dotcom %}ホストランナーを使う場合、それぞれのジョブは`runs-on`で指定された仮想環境の新しいインスタンスで実行されます。

利用可能な{% data variables.product.prodname_dotcom %}ホストランナーの種類は以下のとおりです。

{% data reusables.github-actions.supported-github-runners %}

#### Example: Specifying an operating system

```yaml
runs-on: ubuntu-latest
```

詳しい情報については「[{% data variables.product.prodname_dotcom %}ホストランナーの仮想環境](/github/automating-your-workflow-with-github-actions/virtual-environments-for-github-hosted-runners)」を参照してください。
{% endif %}

{% ifversion fpt or ghec or ghes %}
### Choosing self-hosted runners
{% endif %}

{% data reusables.actions.ae-self-hosted-runners-notice %}

{% data reusables.github-actions.self-hosted-runner-labels-runs-on %}

#### Example: Using labels for runner selection

```yaml
runs-on: [self-hosted, linux]
```

詳しい情報については「[セルフホストランナーについて](/github/automating-your-workflow-with-github-actions/about-self-hosted-runners)」及び「[ワークフロー内でのセルフホストランナーの利用](/github/automating-your-workflow-with-github-actions/using-self-hosted-runners-in-a-workflow)」を参照してください。
