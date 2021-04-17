在此示例中， `node-version` 的矩阵条目每个都被配置为对 `site` 和 `datacenter` 环境变量使用不同的值。 `Echo site details` 步骤然后使用 {% raw %}`env: ${{ matrix.env }}`{% endraw %} 引用自定义变量：

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
