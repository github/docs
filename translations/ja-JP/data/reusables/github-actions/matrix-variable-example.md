この例では、`node-version`に対するマトリクスのエントリは、それぞれ環境変数の`site`及び`datacenter`に異なる値を使うように設定されています。 そして`Echo site details`ステップは{% raw %}`env: ${{ matrix.env }}`{% endraw %}を使ってカスタム変数を参照しています。

{% raw %}
```yaml
name: Node.js CI
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    strategy:
      matrix:
       include:
         - node-version: 10.x
           site: "prod"
           datacenter: "site-a"
         - node-version: 12.x
           site: "dev"
           datacenter: "site-b"
    steps:
      - name: Echo site details
        env:
          SITE: ${{ matrix.site }}
          DATACENTER: ${{ matrix.datacenter }}
        run: echo $SITE $DATACENTER
```
{% endraw %}
