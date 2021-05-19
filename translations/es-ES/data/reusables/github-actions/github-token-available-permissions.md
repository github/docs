Alcances y valores de acceso disponibles:

```yaml
permissions:
  actions: read|write|none
  checks: read|write|none
  contents: read|write|none
  deployments: read|write|none
  issues: read|write|none
  packages: read|write|none
  pull-requests: read|write|none
  repository-projects: read|write|none
  security-events: read|write|none
  statuses: read|write|none
```

Si especificas el acceso para cualquiera de estos alcances, todos aquellos que no se especifiquen se configuran como `none`.

Puedes utilizar la siguiente sintaxis para definir el acceso de lectura o escritura para todos los alcances disponibles:

```yaml
permissions: read-all|write-all
```