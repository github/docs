Neste exemplo, as entradas da matriz de `node-version` são configuradas para usar valores diferentes para as variáveis de ambiente do `site` e dos `centros de dados`. Em seguida, a etapa de `Echo site details` usa {% raw %}`env: ${{ matrix.env }}`{% endraw %} para referir-se às variáveis personalizadas:

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
