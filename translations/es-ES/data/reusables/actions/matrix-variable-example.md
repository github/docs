En este ejemplo, las entradas de la matriz para `node-version` se configuran para que cada una utilice valores diferentes para las variables de ambiente `site` y `datacenter`. El paso `Echo site details` utiliza entonces {% raw %}`env: ${{ matrix.env }}`{% endraw %} para referirse a las variables personalizadas:

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
