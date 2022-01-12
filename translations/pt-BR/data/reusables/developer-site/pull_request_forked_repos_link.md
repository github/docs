#### Eventos de pull request para repositórios bifurcados

{% note %}

**Observação:** fluxos de trabalho não são executados em repositórios privados quando você abre uma pull request de um repositório bifurcado.

{% endnote %}

Quando você cria uma pull request a partir de um repositório bifurcado para o repositório base, o {% data variables.product.prodname_dotcom %} envia o evento de `pull_request` para o repositório base e nenhum evento de pull request acontecerá no repositório bifurcado.

Fluxos de trabalho não são executados em repositórios bifurcados por padrão. Você deve habilitar o GitHub Actions na aba **Actions** (Ações) do repositório bifurcado.

{% ifversion fpt or ghec %}
Quando um contribuidor envia um pull request para um repositório público pela primeira vez, é possível que um mantenedor com acesso de gravação tenha de aprovar fluxos de trabalho em execução no pull request. Para obter mais informações, consulte "[Aprovar fluxos de trabalho executados a partir de bifurcações públicas](/actions/managing-workflow-runs/approving-workflow-runs-from-public-forks)".
{% endif %}

{% data reusables.actions.forked-secrets %} As permissões para o `GITHUB_TOKEN` em repositórios bifurcados são somente leitura. Para obter mais informações, consulte "[Autenticação com o GITHUB_TOKEN](/actions/configuring-and-managing-workflows/authenticating-with-the-github_token)".

{% note %}

**Observação:** Os fluxos de trabalho acionados por pull rquests de {% data variables.product.prodname_dependabot %} são tratados como se fossem de um repositório bifurcado, e estão também sujeitos a essas restrições.

{% endnote %}
