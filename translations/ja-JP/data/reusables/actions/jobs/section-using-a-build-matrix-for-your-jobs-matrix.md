
Use `jobs.<job_id>.strategy.matrix` to define a matrix of different job configurations. マトリックスによって、単一のジョブの定義内の変数の置き換えを行い、複数のジョブを作成できるようになります。 たとえば、マトリックスを使って複数のサポートされているバージョンのプログラミング言語、オペレーティングシステム、ツールに対するジョブを作成できます。 マトリックスは、ジョブの設定を再利用し、設定した各マトリクスに対してジョブを作成します。

{% data reusables.actions.usage-matrix-limits %}

`matrix`内で定義した各オプションは、キーと値を持ちます。 定義したキーは`matrix`コンテキスト中の属性となり、ワークフローファイルの他のエリア内のプロパティを参照できます。 たとえば、オペレーティングシステムの配列を含む`os`というキーを定義したなら、`matrix.os`属性を`runs-on`キーワードの値として使い、それぞれのオペレーティングシステムに対するジョブを作成できます。 詳細については、「[コンテキスト](/actions/learn-github-actions/contexts)」を参照してください。

`matrix`を定義する順序は意味を持ちます。 最初に定義したオプションは、ワークフロー中で最初に実行されるジョブになります。

#### Example: Running multiple versions of Node.js

設定オプションに配列を指定すると、マトリクスを指定できます。 たとえばランナーがNode.jsのバージョン10、12、14,をサポートしている場合、これらのバージョンの配列を`matrix`で指定できます。

この例では、`node`キーにNode.jsの3つのバージョンの配列を設定することによって、3つのジョブのマトリクスを作成します。 このマトリックスを使用するために、この例では`matrix.node`コンテキスト属性を`setup-node`アクションの入力パラメータである`node-version`に設定しています。 その結果、3 つのジョブが実行され、それぞれが異なるバージョンのNode.js を使用します。

{% raw %}
```yaml
strategy:
  matrix:
    node: [10, 12, 14]
steps:
  # GitHub でホストされているランナーで使用されるノードバージョンを設定する
  - uses: actions/setup-node@v2
    with:
      # The Node.js version to configure
      node-version: ${{ matrix.node }}
```
{% endraw %}

{% data variables.product.prodname_dotcom %}ホストランナーを使う場合にNode.jsのバージョンを設定する方法としては、`setup-node`アクションをおすすめします。 詳しい情報については[`setup-node`](https://github.com/actions/setup-node)アクションを参照してください。

#### Example: Running with multiple operating systems

複数のランナーオペレーティングシステムでワークフローを実行するマトリックスを作成できます。 複数のマトリックス設定を指定することもできます。 この例では、6つのジョブのマトリックスを作成します。

- 配列`os`で指定された2つのオペレーティングシステム
- 配列`node`で指定された3つのバージョンのNode.js

{% data reusables.repositories.actions-matrix-builds-os %}

{% raw %}
```yaml
runs-on: ${{ matrix.os }}
strategy:
  matrix:
    os: [ubuntu-18.04, ubuntu-20.04]
    node: [10, 12, 14]
steps:
  - uses: actions/setup-node@v2
    with:
      node-version: ${{ matrix.node }}
```
{% endraw %}

{% ifversion ghae %}
For more information about the configuration of self-hosted runners, see "[About self-hosted runners](/actions/hosting-your-own-runners/about-self-hosted-runners)."
{% else %}{% data variables.product.prodname_dotcom %} ホストランナーでサポートされている設定オプションについては、「[{% data variables.product.prodname_dotcom %} の仮想環境](/actions/automating-your-workflow-with-github-actions/virtual-environments-for-github-hosted-runners)」を参照してください。
{% endif %}

#### Example: Including additional values in combinations

既存のビルドマトリクスジョブに、設定オプションを追加できます。 たとえば、`windows-latest` を使うジョブで`node` のバージョン 8 を実行しているときに、`npm` の特定のバージョンを使いたい場合は、`include` を使って追加のオプションを指定できます。

{% raw %}
```yaml
runs-on: ${{ matrix.os }}
strategy:
  matrix:
    os: [macos-latest, windows-latest, ubuntu-18.04]
    node: [8, 10, 12, 14]
    include:
      # osとバージョンに一致するマトリックスレッグの値が
      # 6 の npm の新しい変数を含む
      - os: windows-latest
        node: 8
        npm: 6
```
{% endraw %}

#### Example: Including new combinations

`include`を使って新しいジョブを追加し、マトリックスを構築できます。 マッチしなかったincludeの設定があれば、マトリックスに追加されます。 たとえば、`node`のバージョン14を使って複数のオペレーティングシステム上でビルドを行い、追加で実験的なジョブをUbuntu上でnodeバージョン15で行いたいなら、`include`を使ってこの追加のジョブを指定できます。

{% raw %}
```yaml
runs-on: ${{ matrix.os }}
strategy:
  matrix:
    node: [14]
    os: [macos-latest, windows-latest, ubuntu-18.04]
    include:
      - node: 15
        os: ubuntu-18.04
        experimental: true
```
{% endraw %}

#### Example: Excluding configurations from a matrix

`exclude` オプションを使って、ビルドマトリクスに定義されている特定の設定を削除できます。 `exclude` を使うと、ビルドマトリクスにより定義されたジョブが削除されます。 ジョブの数は、指定する配列に含まれるオペレーティングシステム (`os`) の外積から、任意の減算 (`exclude`) で引いたものです。

{% raw %}
```yaml
runs-on: ${{ matrix.os }}
strategy:
  matrix:
    os: [macos-latest, windows-latest, ubuntu-18.04]
    node: [8, 10, 12, 14]
    exclude:
      # macOS のノード 8 を除外する
      - os: macos-latest
        node: 8
```
{% endraw %}

{% note %}

**ノート:** すべての`include`の組み合わせは、`exclude`の後に処理されます。 このため、`include`を使って以前に除外された組み合わせを追加し直すことができます。

{% endnote %}

### マトリックスで環境変数を使用する

それぞれのテストの組み合わせに、`include`キーを使ってカスタムの環境変数を追加できます。 そして、後のステップでそのカスタムの環境変数を参照できます。

{% data reusables.actions.matrix-variable-example %}
