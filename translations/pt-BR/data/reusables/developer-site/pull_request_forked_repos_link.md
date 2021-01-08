##### Eventos de pull request para repositórios bifurcados

{% note %}

**Observação:** fluxos de trabalho não são executados em repositórios privados quando você abre uma pull request de um repositório bifurcado.

{% endnote %}

Quando você cria uma pull request a partir de um repositório bifurcado para o repositório base, o {% data variables.product.prodname_dotcom %} envia o evento de `pull_request` para o repositório base e nenhum evento de pull request acontecerá no repositório bifurcado.

Fluxos de trabalho não são executados em repositórios bifurcados por padrão. Você deve habilitar o GitHub Actions na aba **Actions** (Ações) do repositório bifurcado.

{% data reusables.actions.forked-secrets %} The permissions for the `GITHUB_TOKEN` in forked repositories is read-only. Para obter mais informações, consulte "[Autenticação com o GITHUB_TOKEN](/actions/configuring-and-managing-workflows/authenticating-with-the-github_token)".
