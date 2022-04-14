Valores de acesso e escopos disponíveis:

```yaml
permissions:
  actions: read|write|none
  checks: read|write|none
  contents: read|write|none
  deployments: read|write|none{% ifversion fpt or ghec %}
  id-token: read|write|none{% endif %}
  issues: read|write|none
  discussions: read|write|none
  packages: read|write|none
  pages: read|write|none
  pull-requests: read|write|none
  repository-projects: read|write|none
  security-events: read|write|none
  statuses: read|write|none
```

Se você especificar o acesso para qualquer um desses escopos, todos os que não são especificados são definidos como `nenhum`.

Você pode usar a sintaxe a seguir para definir o acesso de leitura ou gravação para todos os escopos disponíveis:

```yaml
permissions: read-all|write-all
```

Você pode usar a seguinte sintaxe para desabilitar as permissões para todos os escopos disponíveis:

```yaml
permissions: {}
```
