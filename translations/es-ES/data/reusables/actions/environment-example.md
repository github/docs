You can specify an environment for each job in your workflow. To do so, add a `jobs.<job_id>.environment` key followed by the name of the environment.

For example, this workflow will use an environment called `production`.

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

When the above workflow runs, the `deployment` job will be subject to any rules configured for the `production` environment. For example, if the environment requires reviewers, the job will pause until one of the reviewers approves the job.

You can also specify a URL for the environment. La URL especificada aparecerá en la página de despliegues del repositorio (a la cual se puede acceder haciendo clic en **Ambientes** en la página principal de tu repositorio) y en la gráfica de visualización de la ejecución del flujo de trabajo. Si una solicitud de cambios activó el flujo de trabajo, la URL también se muestra como un botón de **Ver despliegue** en la línea de tiempo de esta.

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
