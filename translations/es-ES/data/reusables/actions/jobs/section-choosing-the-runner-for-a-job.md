Utiliza `jobs.<job_id>.runs-on` para definir el tipo de máquina en la cuál ejecutar el job. {% ifversion fpt or ghec %}La máquina puede ya sea ser un ejecutor hospedado en {% data variables.product.prodname_dotcom %} o uno auto-hospedado.{% endif %} Puedes proporcionar a `runs-on` como una secuencia simple o como un arreglo de secuencias. Si especificas un arreglo de secuencias, tu flujo de trabajo se ejecutará en un ejecutor auto-hospedado cuyas etiquetas empaten con todos los valores de `runs-on` que se hayan especificado, en caso de que estén disponibles. Si te gustaría ejecutar tu flujo de trabajo en máquinas múltiples, utiliza [`jobs.<job_id>.strategy`](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategy).


{% ifversion fpt or ghec or ghes %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Elegir los ejecutores hospedados en {% data variables.product.prodname_dotcom %}

If you use a {% data variables.product.prodname_dotcom %}-hosted runner, each job runs in a fresh instance of a runner image specified by `runs-on`.

Los tipos de ejecutores alojados {% data variables.product.prodname_dotcom %} disponibles son:

{% data reusables.actions.supported-github-runners %}

#### Ejemplo: Especificar un sistema operativo

```yaml
runs-on: ubuntu-latest
```

Para obtener más información, consulta la sección "[Acerca de los ejecutores hospedados en {% data variables.product.prodname_dotcom %}](/actions/using-github-hosted-runners/about-github-hosted-runners)".
{% endif %}

{% ifversion fpt or ghec or ghes %}
### Elegir los ejecutores auto-hospedados
{% endif %}

{% data reusables.actions.self-hosted-runner-labels-runs-on %}

#### Ejemplo: Utilizar las etiquetas para la selección de ejecutores

```yaml
runs-on: [self-hosted, linux]
```

Para obtener más información, consulta "[Acerca de los ejecutores autoalojados](/github/automating-your-workflow-with-github-actions/about-self-hosted-runners)" y "[Usar ejecutores autoalojados en un flujo de trabajo](/github/automating-your-workflow-with-github-actions/using-self-hosted-runners-in-a-workflow)".
