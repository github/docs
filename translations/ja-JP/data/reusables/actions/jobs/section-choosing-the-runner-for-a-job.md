`jobs.<job_id>.runs-on`を使って、ジョブを実行するマシンのタイプを定義してください。 {% ifversion fpt or ghec %}マシンは、{% data variables.product.prodname_dotcom %}ホストランナーでも、セルフホストランナーでもかまいません。{% endif %}`runs-on`は単一の文字列として、あるいは文字列の配列として渡せます。 文字列の配列を指定した場合、ワークフローは指定されたすべての`runs-on`の値にラベルがマッチしたセルフホストランナーが利用可能であれば、そのランナーで実行されます。 複数のマシン上でワークフローを実行したいのであれば、[`jobs.<job_id>.strategy`](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategy)を使ってください。


{% ifversion fpt or ghec or ghes %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### {% data variables.product.prodname_dotcom %}ホストランナーの選択

If you use a {% data variables.product.prodname_dotcom %}-hosted runner, each job runs in a fresh instance of a runner image specified by `runs-on`.

利用可能な{% data variables.product.prodname_dotcom %}ホストランナーの種類は以下のとおりです。

{% data reusables.actions.supported-github-runners %}

#### 例: オペレーティングシステムの指定

```yaml
runs-on: ubuntu-latest
```

詳しい情報については「[{% data variables.product.prodname_dotcom %}ホストランナーについて](/actions/using-github-hosted-runners/about-github-hosted-runners)」を参照してください。
{% endif %}

{% ifversion fpt or ghec or ghes %}
### セルフホストランナーの選択
{% endif %}

{% data reusables.actions.self-hosted-runner-labels-runs-on %}

#### 例: ランナーの選択にラベルを使用

```yaml
runs-on: [self-hosted, linux]
```

詳しい情報については「[セルフホストランナーについて](/github/automating-your-workflow-with-github-actions/about-self-hosted-runners)」及び「[ワークフロー内でのセルフホストランナーの利用](/github/automating-your-workflow-with-github-actions/using-self-hosted-runners-in-a-workflow)」を参照してください。
