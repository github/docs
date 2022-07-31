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

Quando o fluxo de trabalho acima é executado, o trabalho de `implantação` estará sujeito a todas as regras configuradas para o ambiente de `produção`. Por exemplo, se o ambiente exigir revisores, o trabalho fará a pausa até que um dos revisores aprove o trabalho.

Você também pode especificar uma URL para o ambiente. A URL especificada aparecerá na página de implantações do repositório (acessado clicando em **Ambientes** na página inicial do seu repositório) e no gráfico de visualização para a execução do fluxo de trabalho. Se um pull request acionou o fluxo de trabalho, o URL também é exibido como um botão **Visualizar implantação** na linha do tempo do pull request.

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

![Gráfico do fluxo de trabalho com o URL](/assets/images/help/images/deploy-graph.png)
