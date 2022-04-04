Use `jobs.<job_id>.runs-on` to define the type of machine to run the job on. {% ifversion fpt or ghec %}La máquina puede ya sea ser un ejecutor hospedado en {% data variables.product.prodname_dotcom %} o uno auto-hospedado.{% endif %} Puedes proporcionar a `runs-on` como una secuencia simple o como un arreglo de secuencias. Si especificas un arreglo de secuencias, tu flujo de trabajo se ejecutará en un ejecutor auto-hospedado cuyas etiquetas empaten con todos los valores de `runs-on` que se hayan especificado, en caso de que estén disponibles. Si te gustaría ejecutar tu flujo de trabajo en máquinas múltiples, utiliza [`jobs.<job_id>.strategy`](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategy).


{% ifversion fpt or ghec or ghes %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Choosing {% data variables.product.prodname_dotcom %}-hosted runners

Si usas un ejecutor alojado {% data variables.product.prodname_dotcom %}, cada trabajo se ejecuta en una nueva instancia de un entorno virtual especificado por `runs-on`.

Los tipos de ejecutores alojados {% data variables.product.prodname_dotcom %} disponibles son:

{% data reusables.actions.supported-github-runners %}

#### Example: Specifying an operating system

```yaml
runs-on: ubuntu-latest
```

Para obtener más información, consulta "[Entornos virtuales para ejecutores alojados de {% data variables.product.prodname_dotcom %}](/github/automating-your-workflow-with-github-actions/virtual-environments-for-github-hosted-runners)".
{% endif %}

{% ifversion fpt or ghec or ghes %}
### Choosing self-hosted runners
{% endif %}

{% data reusables.actions.self-hosted-runner-labels-runs-on %}

#### Example: Using labels for runner selection

```yaml
runs-on: [self-hosted, linux]
```

Para obtener más información, consulta "[Acerca de los ejecutores autoalojados](/github/automating-your-workflow-with-github-actions/about-self-hosted-runners)" y "[Usar ejecutores autoalojados en un flujo de trabajo](/github/automating-your-workflow-with-github-actions/using-self-hosted-runners-in-a-workflow)".
