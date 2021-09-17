{% data variables.product.prodname_actions %} inclui uma coleção de variáveis denominadas _contextos_ e uma coleção similar de variáveis denominadas _variáveis de ambiente padrão_. Estas variáveis são destinadas a serem usadas em diferentes pontos do fluxo de trabalho:

- **Variáveis de ambiente padrão:** Essas variáveis existem apenas no executor que está executando seu trabalho. Para obter mais informações, consulte "[Variáveis de ambiente padrão](/actions/reference/environment-variables#default-environment-variables)".
- **Contextos:** Você pode usar a maioria dos contextos em qualquer ponto do seu fluxo de trabalho, incluindo quando as variáveis de ambiente _padrão_ estariam indisponíveis. Por exemplo, você pode usar contextos com expressões para realizar o processamento inicial antes que o trabalho seja encaminhado para um executor para execução. Isso permite que você use um contexto com a palavra-chave condicional `if` para determinar se uma etapa deve ser executada. Assim que o trabalho estiver em execução, você também poderá recuperar as variáveis de contexto do executor que está executando o trabalho, como `runner.os`. Para obter mais informações, consulte "[Contextos](/actions/reference/context-and-expression-syntax-for-github-actions#contexts)".

O exemplo a seguir demonstra como esses diferentes tipos de variáveis de ambiente podem ser usados juntos em um trabalho:

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

Neste exemplo, o comando `if` verifica o [`github.ref`](/actions/reference/context-and-expression-syntax-for-github-actions#github-context) para determinar o nome do branch atual. Se o nome for `refs/heads/main`, as etapas subsequentes serão executadas. A verificação `if` é processada por {% data variables.product.prodname_actions %}, e o trabalho é enviado apenas para o executor se o resultado for `verdadeiro`. Assim que o trabalho é enviado para o executor, a etapa é executada e refere-se à variável de ambiente [`$GITHUB_REF`](/actions/reference/environment-variables#default-environment-variables) do executor.
