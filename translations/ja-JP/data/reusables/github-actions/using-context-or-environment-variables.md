{% data variables.product.prodname_actions %}は、_コンテキスト_と呼ばれる変数の集合と、_デフォルトの環境変数_と呼ばれる同様の変数の集合を含みます。 これらの変数は、ワークフロー中の様々な場所で利用されることを意図したものです。

- **デフォルトの環境変数:** これらの変数は、ジョブを実行しているランナー上にのみ存在します。 詳しい情報については、「[デフォルトの環境変数](/actions/reference/environment-variables#default-environment-variables)」を参照してください。
- **コンテキスト:** ほとんどのコンテキストはワークフローの任意の場所で利用できます。これは、_デフォルトの環境変数_が利用できない場所も含みます。 たとえば、式の付いたコンテキストを使って、ジョブが実行のためにランナーにまわされる前に初期の処理を行うことができます。これによって、ステップを実行すべきかを判断するために条件の`if`キーワード付きのコンテキストが利用できるようになります。 ジョブが実行されると、`runner.os`といったように、コンテキスト変数をジョブを実行しているランナーから取り出すこともできます。 詳細については、「[コンテキスト](/actions/reference/context-and-expression-syntax-for-github-actions#contexts)」を参照してください。

以下の例は、様々な種類の環境変数をジョブの中で合わせて利用できることを示しています。

{% raw %}
```yaml
name: CI
on: push
jobs:
  prod-check:
    if: ${{ github.ref == 'refs/heads/main' }}
    runs-on: ubuntu-latest
    steps:
      - run: echo "Deploying to production server on branch $GITHUB_REF"
```
{% endraw %}

この例では、`if`文が[`github.ref`](/actions/reference/context-and-expression-syntax-for-github-actions#github-context)コンテキストをチェックして現在のブランチ名を判断しています。その名前が`refs/heads/main`であれば、以降のステップが実行されます。 この`if`チェックが{% data variables.product.prodname_actions %}で処理されたなら、その結果が`true`の場合にのみジョブがランナーに送信されます。 ジョブがランナーに送信されると、ステップが実行され、環境変数の[`$GITHUB_REF`](/actions/reference/environment-variables#default-environment-variables)をランナーから参照します。
