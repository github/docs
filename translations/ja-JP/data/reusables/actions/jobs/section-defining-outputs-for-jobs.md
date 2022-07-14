`jobs.<job_id>.outputs`を使って、ジョブの出力の`map`を作成できます。 ジョブの出力は、そのジョブに依存しているすべての下流のジョブから利用できます。 ジョブの依存関係の定義に関する詳しい情報については[`jobs.<job_id>.needs`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idneeds)を参照してください。

{% data reusables.actions.output-limitations %}

式を含むジョブの出力は、それぞれのジョブの終わりにランナー上で評価されます。 シークレットを含む出力はランナー上で編集され、{% data variables.product.prodname_actions %}には送られません。

依存するジョブでジョブの出力を使いたい場合には、`needs`コンテキストが利用できます。 詳細については、「[コンテキスト](/actions/learn-github-actions/contexts#needs-context)」を参照してください。

### 例: ジョブの出力の定義

{% raw %}
```yaml
jobs:
  job1:
    runs-on: ubuntu-latest
    # ステップの出力をジョブの出力にマップする
    outputs:
      output1: ${{ steps.step1.outputs.test }}
      output2: ${{ steps.step2.outputs.test }}
    steps:
      - id: step1
        run: echo "::set-output name=test::hello"
      - id: step2
        run: echo "::set-output name=test::world"
  job2:
    runs-on: ubuntu-latest
    needs: job1
    steps:
      - run: echo ${{needs.job1.outputs.output1}} ${{needs.job1.outputs.output2}}
```
{% endraw %}
