{% comment %}

Always include a security admonition above this procedure. This is either one of the following, depending on whether the context is self-hosted runners or larger runners.

{% data reusables.actions.self-hosted-runner-security-admonition %}
{% data reusables.actions.hosted-runner-security-admonition %}

{% endcomment %}

Para grupos de executores em uma empresa, você pode mudar quais organizações na empresa podem acessar um grupo de executores{% ifversion restrict-groups-to-workflows %} ou restringir quais fluxos de trabalho um grupo de executores pode executar{% endif %}. Para grupos de executores em uma organização, você pode alterar quais repositórios na organização podem acessar um grupo de executores{% ifversion restrict-groups-to-workflows %} ou restringir quais fluxos de trabalho um grupo de executores pode executar{% endif %}.

### Alterando quais organizações ou repositórios podem acessar um grupo de executores

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5091 %}
{% data reusables.actions.runner-groups-navigate-to-repo-org-enterprise %}
{% data reusables.actions.settings-sidebar-actions-runner-groups-selection %}
1. Para grupos de executores em uma empresa, em **Acesso da organização**, modifique quais organizações podem acessar o grupo de executores. Para grupos de executores em uma organização, em **Acesso do repositório**, modifique quais repositórios podem acessar o grupo de executores.

{% elsif ghae or ghes < 3.4 %}
{% data reusables.actions.configure-runner-group-access %}
{% endif %}

{% ifversion restrict-groups-to-workflows %}
### Alterando quais fluxos de trabalho podem acessar um grupo de executores
You can configure a runner group to run either selected workflows or all workflows. For example, you might use this setting to protect secrets that are stored on runners or to standardize deployment workflows by restricting a runner group to run only a specific reusable workflow. Esta configuração não pode ser substituída se você configurar o grupo de executores da organização que foi compartilhado por uma empresa.
{% data reusables.actions.runner-groups-navigate-to-repo-org-enterprise %}
{% data reusables.actions.settings-sidebar-actions-runner-groups-selection %}
1. Em **Acesso ao fluxo de trabalho**, selecione o menu suspenso e clique em **Fluxos de trabalho selecionados**.
1. Clique em {% octicon "gear" aria-label="the gear icon" %}.
1. Insira uma lista separada por vírgulas dos fluxos de trabalho que podem acessar o grupo de executores. Use o caminho completo, incluindo o nome e proprietário do repositório. Fixar o fluxo de trabalho em um ramo, tag ou SHA completo. Por exemplo: `octo-org/octo-repo/.github/workflows/build.yml@v2, octo-org/octo-repo/.github/workflows/deploy.yml@d6dc6c96df4f32fa27b039f2084f576ed2c5c2a5, monalisa/octo-test/.github/workflows/test.yml@main`.

   Apenas trabalhos definidos diretamente nos fluxos de trabalho selecionados terão acesso ao grupo de executores.

   Os grupos de executores pertencentes à organização não podem acessar os fluxos de trabalho de uma organização diferente na empresa. Em vez disso, você deve criar um grupo de executores pertencente à empresa.

1. Clique em **Salvar**.

{% endif %}