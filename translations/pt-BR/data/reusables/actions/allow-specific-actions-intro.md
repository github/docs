<a name="allowing-select-actions-to-run"></a>
<a name="allowing-specific-actions-to-run"></a>

### Permitindo que as ações selecionadas{% ifversion actions-workflow-policy %} e fluxos de trabalho{% endif %} reutilizáveis sejam executados

Ao escolher {% data reusables.actions.policy-label-for-select-actions-workflows %}, as ações locais{% ifversion actions-workflow-policy %} e e os fluxos de trabalho reutilizáveis{% endif %} são permitidos, e existem opções adicionais para permitir outras ações específicas{% ifversion actions-workflow-policy %} e fluxos de trabalho reutilizáveis{% endif %}:

- **Permitir ações criadas por {% data variables.product.prodname_dotcom %}:** Você pode permitir que todas as ações criadas por {% data variables.product.prodname_dotcom %} sejam usadas por fluxos de trabalho. Ações criadas por {% data variables.product.prodname_dotcom %} estão localizadas em `ações` e nas organizações do `github`. Para obter mais informações, consulte as [`ações`](https://github.com/actions) e as organizações do [`github`](https://github.com/github).
- **Permitir ações do Marketplace por criadores verificados:** {% ifversion ghes or ghae %}Esta opção está disponível se você tiver {% data variables.product.prodname_github_connect %} habilitado e configurado com {% data variables.product.prodname_actions %}. Para obter mais informações, consulte "[Habilitando o acesso automático às ações do GitHub.com usando o GitHub Connect](/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect).{% endif %} Você pode permitir que todas as ações de {% data variables.product.prodname_marketplace %} criadas por criadores verificados sejam usadas por fluxos de trabalho. Quando o GitHub verificou o criador da ação como uma organização parceira, o selo de {% octicon "verified" aria-label="The verified badge" %} é exibido ao lado da ação em {% data variables.product.prodname_marketplace %}.
- **Permitir ações especificadas{% ifversion actions-workflow-policy %} e fluxos de trabalho reutilizáveis{% endif %}:** Você pode restringir que os fluxos de trabalho usem ações{% ifversion actions-workflow-policy %} e fluxos de trabalho reutilizáveis{% endif %} em organizações e repositórios específicos.

  Para restringir o acesso a tags específicas ou commit SHAs de uma ação{% ifversion actions-workflow-policy %} ou um fluxo de trabalhoreutilizável{% endif %}, use a mesma sintaxe usada no fluxo de trabalho para selecionar a ação{% ifversion actions-workflow-policy %} ou fluxo de trabalho reutilizável{% endif %}.

  - Para uma ação, a sintaxe é `<OWNER>/<REPO>@<TAG OR SHA>`. Por exemplo, use `actions/javascript-action@v1.0.1` para selecionar uma tag ou `actions/javascript-action@172239021f7ba04fe7327647b213799853a9eb89` para selecionar um SHA. Para obter mais informações, consulte "[Localizar e personalizar ações](/actions/learn-github-actions/finding-and-customizing-actions#using-release-management-for-your-custom-actions)".
  {%- ifversion actions-workflow-policy %}
  - Para um fluxo de trabalho reutilizável, a sintaxe é `<OWNER>/<REPO>/<PATH>/<FILENAME>@<TAG OR SHA>`. Por exemplo, `octo-org/another-repo/.github/workflows/workflow.yml@v1`. Para obter mais informações, consulte "[Reutilizando fluxos de trabalho](/actions/using-workflows/reusing-workflows#calling-a-reusable-workflow)".
  {%- endif %}

  Você pode usar o caractere `*` curinga para corresponder aos padrões. Por exemplo, para permitir todas as ações{% ifversion actions-workflow-policy %} e fluxos de trabalho reutilizáveis{% endif %} em organizações que iniciam com `space-org`, você pode especificar `space-org*/*`. Para permitir todas as ações{% ifversion actions-workflow-policy %} e fluxos de trabalho reutilizáveis{% endif %} em repositórios que começam com octocat, você pode usar `*/octocat**@*`. Para obter mais informações sobre o uso do curinga `*`, consulte "[sintaxe de fluxo de trabalho para o GitHub Actions](/actions/reference/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet).

  {% ifversion fpt or ghec %}
  {% note %}

  **Observação:** A opção **Permitir ações especificadas{% ifversion actions-workflow-policy %} e fluxos de trabalho reutilizáveis{% endif %}** só está disponível em repositórios públicos com o {% data variables.product.prodname_free_user %}, {% data variables.product.prodname_pro %}, {% data variables.product.prodname_free_team %} para as organizações ou plano de {% data variables.product.prodname_team %}.

  {% endnote %}
  {% endif %}

Este procedimento demonstra como adicionar ações específicas{% ifversion actions-workflow-policy %} e fluxos de trabalho reutilizáveis{% endif %} para a lista de permissões.
