#### Workflows in forked repositories

Workflows don't run in forked repositories by default. Você deve habilitar o GitHub Actions na aba **Actions** (Ações) do repositório bifurcado.

{% data reusables.actions.forked-secrets %} The `GITHUB_TOKEN` has read-only permissions in forked repositories. Para obter mais informações, consulte "[Autenticação com o GITHUB_TOKEN](/actions/configuring-and-managing-workflows/authenticating-with-the-github_token)".

#### Eventos de pull request para repositórios bifurcados

For pull requests from a forked repository to the base repository, {% data variables.product.product_name %} sends the `pull_request`, `issue_comment`, `pull_request_review_comment`, `pull_request_review`, and `pull_request_target` events to the base repository. No pull request events occur on the forked repository.

{% ifversion fpt or ghec %}
Quando um contribuidor envia um pull request para um repositório público pela primeira vez, é possível que um mantenedor com acesso de gravação tenha de aprovar fluxos de trabalho em execução no pull request. Para obter mais informações, consulte "[Aprovar fluxos de trabalho executados a partir de bifurcações públicas](/actions/managing-workflow-runs/approving-workflow-runs-from-public-forks)".
{% endif %}

{% note %}

**Observação:** fluxos de trabalho não são executados em repositórios privados quando você abre uma pull request de um repositório bifurcado.

{% endnote %}

{% note %}

**Observação:** Os fluxos de trabalho acionados por pull rquests de {% data variables.product.prodname_dependabot %} são tratados como se fossem de um repositório bifurcado, e estão também sujeitos a essas restrições.

{% endnote %}
