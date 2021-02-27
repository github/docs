### JVMのバージョンとアーキテクチャの指定

スターターワークフローテンプレートは、X64プラットフォーム用のOpenJDK 8を含む`PATH`をセットアップします。 異なるバージョンのJavaを使いたい場合、あるいは異なるアーキテクチャ（`x64`あるいは`x86`）をターゲットとしたい場合には、`setup-java`アクションを使って異なるJavaランタイム環境を選択できます。

たとえば、x64プラットフォーム用のバージョン9.0.4のJDKを使いたい場合、 `setup-java`アクションを使って `java-version`及び`architecture`パラメーターを`'9.0.4'`と`x64`に設定できます。

{% raw %}
```yaml{:copy}
steps:
  - uses: actions/checkout@v2
  - name: Set up JDK 9.0.4 for x64
    uses: actions/setup-java@v1
    with:
      java-version: '9.0.4'
      architecture: x64
```
{% endraw %}

詳しい情報については[`setup-java`](https://github.com/actions/setup-java)アクションを参照してください。
