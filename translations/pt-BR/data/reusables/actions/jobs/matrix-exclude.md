Para remover configurações específicas definidas na matriz, use `jobs.<job_id>.strategy.matrix.exclude`. Uma configuração excluída só precisa ser uma correspondência parcial para que seja excluída. Por exemplo, o fluxo de trabalho a seguir irá executar nove trabalhos: um trabalho para cada uma das 12 configurações, menos a tarefa excluída que corresponde a `{os: macos-latest, version: 12, environment: production}`, e os dois trabalhos excluídos que correspondem a `{os: windows-latest, version: 16}`.

```yaml
strategy:
  matrix:
    os: [macos-latest, windows-latest]
    version: [12, 14, 16]
    environment: [staging, production]
    exclude:
      - os: macos-latest
        version: 12
        environment: production
      - os: windows-latest
        version: 16
runs-on: {% raw %}${{ matrix.os }}{% endraw %}
```

{% note %}

**Observação:** Todas as combinações de `incluir` são processadas depois de `excluir`. Isso permite que você use `incluir` para voltar a adicionar combinações que foram excluídas anteriormente.

{% endnote %}
