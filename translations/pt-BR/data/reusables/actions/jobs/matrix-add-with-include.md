Por exemplo, esta matriz gerará 10 trabalhos, um para cada combinação de `os` e `versão` na matriz, mais um trabalho para o valor de `os` de `windows-latest` e o valor da `versão` de `17`.

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

Se você não especificar nenhuma variável da matriz, todas as configurações em `incluir` serão executadas. Por exemplo, o seguinte fluxo de trabalho executaria dois trabalhos, um para cada entrada de `incluir`. Isso permite que você aproveite a estratégia da matriz sem ter uma matriz totalmente preenchida.

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
