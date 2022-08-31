たとえばこのマトリックスは、マトリックス内の`os`及び`version`の各組み合わせに、`os`の値が`windows-latest`で`version`の値が`17`の場合を加えて、10個のジョブを実行します。

```yaml
jobs:
  example_matrix:
    strategy:
      matrix:
        os: [macos-latest, windows-latest, ubuntu-latest]
        version: [12, 14, 16]
        include:
          - os: windows-latest
            version: 17
```

マトリックス変数を指定しなければ、`include`以下のすべての設定が実行されます。 たとえば、以下のワークフローは`include`の各エントリに対応して2つのジョブを実行します。 これによって、完全にマトリックスを展開することなく、マトリックス戦略を活用できます。

```yaml
jobs:
  includes_only:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        include:
          - site: "production"
            datacenter: "site-a"
          - site: "staging"
            datacenter: "site-b"

```
