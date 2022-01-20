Use `jobs.<job_id>.runs-on` to define the type of machine to run the job on. {% ifversion fpt or ghec %}A máquina pode ser ou um executor hospedado em {% data variables.product.prodname_dotcom %} ou um executor auto-hospedado.{% endif %} Você pode fornecer `runs-on` como uma única string ou como uma matriz de strings. Se você especificar uma matriz de strings, o seu fluxo de trabalho será executado em um executor auto-hospedado cujas etiquetas correspondam a todos os valores de `runs-on`, se disponível. Se você quiser executar seu fluxo de trabalho em várias máquinas, use [`jobs.<job_id>.strategy`](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategy).


{% ifversion fpt or ghec or ghes %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Choosing {% data variables.product.prodname_dotcom %}-hosted runners

Se você usar um executor hospedado no {% data variables.product.prodname_dotcom %}, cada trabalho será executado em uma nova instância de um ambiente virtual especificado por `runs-on`.

Os tipos de executor disponíveis para {% data variables.product.prodname_dotcom %} são:

{% data reusables.github-actions.supported-github-runners %}

#### Example: Specifying an operating system

```yaml
runs-on: ubuntu-latest
```

Para obter mais informações, consulte "[Ambientes virtuais para executores hospedados em {% data variables.product.prodname_dotcom %}](/github/automating-your-workflow-with-github-actions/virtual-environments-for-github-hosted-runners)".
{% endif %}

{% ifversion fpt or ghec or ghes %}
### Choosing self-hosted runners
{% endif %}

{% data reusables.actions.ae-self-hosted-runners-notice %}

{% data reusables.github-actions.self-hosted-runner-labels-runs-on %}

#### Example: Using labels for runner selection

```yaml
runs-on: [self-hosted, linux]
```

Para obter mais informações, consulte "[Sobre executores auto-hospedados](/github/automating-your-workflow-with-github-actions/about-self-hosted-runners)" e "[Usar executores auto-hospedados em um fluxo de trabalho](/github/automating-your-workflow-with-github-actions/using-self-hosted-runners-in-a-workflow)."
