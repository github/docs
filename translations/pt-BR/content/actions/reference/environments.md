---
title: Ambientes
intro: Você pode configurar ambientes com regras de proteção e segredos. Um trabalho de fluxo de trabalho pode fazer referência a um ambiente para usar as regras de proteção e os segredos do ambiente.
product: '{% data reusables.gated-features.environments %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.1'
---

{% data reusables.actions.environments-beta %}

### Sobre ambientes

Você pode configurar ambientes com regras de proteção e segredos. Quando um trabalho de fluxo de trabalho faz referência a um ambiente, o trabalho não será iniciado até que todas as regras de proteção do ambiente sejam aprovadas. Um trabalho também não pode acessar segredos definidos em ambiente até que todas as regras de proteção do ambiente sejam aprovadas.

{% if currentVersion == "free-pro-team@latest" %}
As regras de proteção do ambiente e os segredos de ambiente só estão disponíveis em repositórios públicos. Se você converter um repositório de público em privado, todas as regras de proteção ou segredos de ambiente configurados serão ignorados, e você não conseguirá configurar nenhum ambiente. Se você converter seu repositório de volta para público, você terá acesso a todas as regras de proteção e segredos de ambiente previamente configurados.
{% endif %}

#### Regras de proteção de ambiente

As normas de proteção do ambiente exigem a aprovação de condições específicas antes que um trabalho que faz referência ao ambiente possa prosseguir. Você pode usar regras de proteção ambiental para exigir uma aprovação manual ou para atrasar um trabalho.

##### Revisores necessários

Use os revisores necessários para exigir que uma pessoa ou equipe específica aprove os trabalhos do fluxo de trabalho que fazem referência ao ambiente. Você pode listar até seis usuários ou equipes como revisores. Os revisores devem ter, pelo menos, acesso de leitura ao repositório. Apenas um dos revisores precisam aprovar o trabalho para que prossiga.

Para obter mais informações sobre os trabalhos de revisão que fazem referência a um ambiente com os revisores necessários, consulte "[Revisar implantações](/actions/managing-workflow-runs/reviewing-deployments)".

##### Temporizador de espera

Use o temporizador de espera para atrasar o trabalho por um período específico de tempo depois que o trabalho for inicialmente acionado. O tempo (em minutos) deve ser um número inteiro entre 0 e 43.200 (30 dias).

#### Segredos de ambiente

Os segredos armazenados em um ambiente só estão disponíveis para trabalhos de fluxo de trabalho que fazem referência ao ambiente. Se o ambiente exigir aprovação, um trabalho não poderá acessar segredos de ambiente até que um dos revisores necessários o aprove. Para obter mais informações sobre segredos, consulte "[Segredos criptografados](/actions/reference/encrypted-secrets)".

### Criar um ambiente

{% data reusables.github-actions.permissions-statement-environment %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.github-actions.sidebar-environment %}
1. Clique em **Novo ambiente**.
1. Insira um nome para o ambiente e clique em **Configurar ambiente**. Os nomes de ambiente não diferenciam maiúsculas de minúsculas. Um nome de ambiente não pode exceder 255 caracteres e deve ser único dentro do repositório.
1. Configure todas as regras de proteção de ambiente ou segredos de ambiente.

Executar um fluxo de trabalho que faz referência a um ambiente que não existe criará um ambiente com o nome referenciado. O novo ambiente não terá nenhuma regra de proteção ou segredos configurados. Qualquer pessoa que possa editar fluxos de trabalho no repositório pode criar ambientes por meio de um arquivo de fluxo de trabalho, mas apenas os administradores do repositório podem configurar o ambiente.

### Fazer referência a um ambiente

Cada trabalho em um fluxo de trabalho pode fazer referência a um único ambiente. Todas as regras de proteção configuradas para o ambiente têm de ser aprovadas antes que um trabalho de referência ao ambiente seja enviado a um executor. Quando o trabalho é enviado para o executor, o trabalho poderá acessar os segredos do ambiente.

Para obter mais informações sobre sintaxe para ambientes de referência em fluxos de trabalho, consulte "[Sintaxe do fluxo de trabalho para GitHub Actions](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idenvironment)". Para obter mais informações sobre os trabalhos de revisão que fazem referência a um ambiente com os revisores necessários, consulte "[Revisar implantações](/actions/managing-workflow-runs/reviewing-deployments)".

Quando um fluxo de trabalho faz referência a um ambiente, o ambiente aparecerá nas implantações do repositório. Para obter mais informações sobre a visualização de implementações atuais e anteriores, consulte "[Visualizar histórico de implantação](/developers/overview/viewing-deployment-history)".

### Excluir um ambiente

{% data reusables.github-actions.permissions-statement-environment %}

A exclusão de um ambiente apagará todos os segredos e regras de proteção associados ao ambiente. Todos os trabalhos que estejam atualmente em espera devido às regras de proteção do ambiente eliminado falharão automaticamente.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.github-actions.sidebar-environment %}
1. Próximo o ambiente que você deseja excluir, clique em {% octicon "trashcan" aria-label="The trashcan icon" %}.
2. Clique em **Eu entendi, exclua este ambiente**.
