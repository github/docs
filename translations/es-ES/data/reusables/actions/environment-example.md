Puedes especificar un ambiente para cada job de tu flujo de trabajo. Para hacerlo, agrega la clave `jobs.<job_id>.environment` seguida del nombre del ambiente.

Por ejemplo, este flujo de trabajo utilizará un ambiente llamado `production`.

```yaml
name: Deployment

on:
  push:
    branches:
      - main

jobs:
  deployment:
    runs-on: ubuntu-latest
    environment: production
    steps:
      - name: deploy
        # ...deployment-specific steps
```

Cuando se ejecute el flujo de trabajo anterior, el job `deployment` estará sujeto a cualquier regla que se haya configurado para el ambiente de `production`. Por ejemplo, si el ambiente requiere revisores, el job se pausará hasta que uno de ellos lo apruebe.

También puedes especificar una URL para el ambiente. La URL especificada aparecerá en la página de despliegues del repositorio (a la cual se puede acceder haciendo clic en **Ambientes** en la página principal de tu repositorio) y en la gráfica de visualización de la ejecución del flujo de trabajo. Si una solicitud de cambios activó el flujo de trabajo, la URL también se muestra como un botón de **Ver despliegue** en la línea de tiempo de esta.

```yaml
name: Deployment

on:
  push:
    branches:
      - main

jobs:
  deployment:
    runs-on: ubuntu-latest
    environment: 
      name: production
      url: https://github.com
    steps:
      - name: deploy
        # ...deployment-specific steps
```

![Gráfica de flujo de trabajo con URL](/assets/images/help/images/deploy-graph.png)
