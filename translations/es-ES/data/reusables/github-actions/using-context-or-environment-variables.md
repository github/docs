{% data variables.product.prodname_actions %} incluye una colección de variables que se llama _contextos_ y una recopilación de variables similar que se llaman _variables de ambiente predeterminadas_. Estas variables se pretenden utilizar en puntos diferentes del flujo de trabajo:

- **Variables de ambiente predeterminadas:** Estas variables existen únicamente en el ejecutor que está ejecutando tu job. Para obtener más información, consulta la sección "[Variables de ambiente predeterminadas](/actions/reference/environment-variables#default-environment-variables)."
- **Contextos:** Puedes utilizar la mayoría de los contextos en cualquier punto de tu flujo de trabajo, incluyendo cuando no estén disponibles las _variables de ambiente predeterminadas_. Por ejemplo, puedes utilizar contextos con expresiones para llevar a cabo un procesamiento inicial antes de que el job se enrute a un ejecutor para su exclusión; esto te permite utilizar un contexto con la palabra clave condicional `if` para determinar si se debería ejecutar un paso. Una vez que el job se esté ejecutando, también debes recuperar las variables de contexto para el ejecutor que está ejecutando el trabajo, tal como `runner.os`. Para obtener más información, consulta "[Contextos](/actions/reference/context-and-expression-syntax-for-github-actions#contexts)".

El siguiente ejemplo ilustra cómo estos tipos de variables de ambiente diferentes pueden utilizarse juntas en el job:

{% raw %}
```yaml
name: CI
on: push
jobs:
  prod-check:
    if: ${{ github.ref == 'refs/heads/main' }}
    runs-on: ubuntu-latest
    steps:
      - run: echo "Deploying to production server on branch $GITHUB_REF"
```
{% endraw %}

En este ejemplo, el contexto de la declaración `if` verifica el contexto de [`github.ref`](/actions/reference/context-and-expression-syntax-for-github-actions#github-context) para determinar el nombre de rama actual; si el nombre es `refs/heads/main`, entonces los siguientes pasos subsecuentes se ejecutarán. El `if` verifica que se encuentre procesado por {% data variables.product.prodname_actions %}, y que el job solo se envíe al ejecutor si el resultado es `Verdadero`. Una vez que se envía el job al ejecutor, se ejecuta el paso y se refiere al ambiente de variables [`$GITHUB_REF`](/actions/reference/environment-variables#default-environment-variables) para el ejecutor.
