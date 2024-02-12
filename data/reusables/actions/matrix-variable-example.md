In this example, the matrix entries for `node-version` are each configured to use different values for the `site` and `datacenter` environment variables. The `Echo site details` step then uses {% raw %}`env: ${{ matrix.env }}`{% endraw %} to refer to the custom variables:

```yaml
name: Node.js CI
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    strategy:
      matrix:
       include:
         - node-version: '14.x'
           site: "prod"
           datacenter: "site-a"
         - node-version: '16.x'
           site: "dev"
           datacenter: "site-b"
    steps:
      - name: Echo site details
        env:
          SITE: {% raw %}${{ matrix.site }}{% endraw %}
          DATACENTER: {% raw %}${{ matrix.datacenter }}{% endraw %}
        run: echo $SITE $DATACENTER
```
