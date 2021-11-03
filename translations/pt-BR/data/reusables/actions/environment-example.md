Você pode especificar um ambiente para cada tarefa do seu fluxo de trabalho. Para fazer isso, adicione um chave a função `.<job_id>.environment` seguida pelo nome do ambiente.

Por exemplo, esse fluxo de trabalho usará um ambiente denominado `produção`.

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

You can also specify a URL for the environment. The specified URL will appear on the deployments page for the repository (accessed by clicking **Environments** on the home page of your repository) and in the visualization graph for the workflow run. If a pull request triggered the workflow, the URL is also displayed as a **View deployment** button in the pull request timeline.

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

![Workflow graph with URL](/assets/images/help/images/deploy-graph.png)
