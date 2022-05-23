---
title: Entendendo o GitHub Actions
shortTitle: Entendendo o GitHub Actions
intro: 'Aprenda o básico de {% data variables.product.prodname_actions %}, incluindo conceitos fundamentais e terminologia essencial.'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/core-concepts-for-github-actions
  - /actions/automating-your-workflow-with-github-actions/core-concepts-for-github-actions
  - /actions/getting-started-with-github-actions/core-concepts-for-github-actions
  - /actions/learn-github-actions/introduction-to-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Fundamentals
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Visão Geral

{% data reusables.actions.about-actions %}  É possível criar fluxos de trabalho que criam e testam cada pull request no seu repositório, ou implantar pull requests mesclados em produção.

{% data variables.product.prodname_actions %} vai além de apenas DevOps e permite que você execute fluxos de trabalho quando outros eventos ocorrerem no seu repositório. Por exemplo, você pode executar um fluxo de trabalho para adicionar automaticamente as etiquetas apropriadas sempre que alguém cria um novo problema no repositório.

{% ifversion fpt or ghec %}

{% data variables.product.prodname_dotcom %} fornece máquinas virtuais do Linux, Windows e macOS para executar seus fluxos de trabalho, ou você pode hospedar seus próprios executores auto-hospedados na sua própria infraestrutura de dados ou na nuvem.

{% elsif ghes or ghae %}

Você deve hospedar suas próprias máquinas virtuais do Linux, Windows ou macOS para executar fluxos de trabalho para {% data variables.product.product_location %}. {% data reusables.actions.self-hosted-runner-locations %}

{% endif %}

{% ifversion ghec or ghes or ghae %}

Para obter informações mais informações sobre a introdução de {% data variables.product.prodname_actions %} à sua empresa, consulte "[Apresentando {% data variables.product.prodname_actions %} à sua empresa](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/introducing-github-actions-to-your-enterprise). "

{% endif %}

## Componentes de {% data variables.product.prodname_actions %}

É possível configurar um {% data variables.product.prodname_actions %} _fluxo de trabalho_ para ser acionado quando um _evento_ ocorre no repositório como, por exemplo, um pull request sendo aberto ou um problema sendo criado.  O seu fluxo de trabalho contém um ou mais _trabalhos_ que podem ser executados em ordem sequencial ou em paralelo.  Cada trabalho será executado dentro do _executor_ da sua própria máquina virtual ou dentro de um contêiner, e conta com uma mais _etapas_ que executa um script que você define ou executa uma ação __, que é uma extensão reutilizável que pode simplificar o seu fluxo de trabalho.

![Visão geral do fluxo de trabalho](/assets/images/help/images/overview-actions-simple.png)

### Fluxos de trabalho

{% data reusables.actions.about-workflows-long %}

{% ifversion fpt or ghes > 3.3 or ghae-issue-4757 or ghec %}Você pode consultar um fluxo de trabalho dentro de outro fluxo de trabalho. Consulte "[Reutilizando fluxos de trabalho](/actions/learn-github-actions/reusing-workflows)"{% endif %}

Para obter mais informações sobre fluxos de trabalho, consulte "[Usando fluxos de trabalho](/actions/using-workflows)".

### Eventos

Um evento é uma atividade específica em um repositório que aciona a execução de um fluxo de trabalho. Por exemplo, a atividade pode originar-se de {% data variables.product.prodname_dotcom %} quando alguém cria uma solicitação de pull request, abre um problema ou faz envio por push de um commit para um repositório.  Você também pode acionar a execução de um fluxo de trabalho em um cronograma, em [postando em uma API REST](/rest/reference/repos#create-a-repository-dispatch-event), ou manualmente.

Para obter uma lista completa de eventos que podem ser usados para acionar fluxos de trabalho, consulte [Eventos que acionam fluxos de trabalho](/actions/reference/events-that-trigger-workflows).

### Trabalhos

Um trabalho é um conjunto de _etapas_ em um fluxo de trabalho que é executado no mesmo executor.  Cada etapa é um script do shell que será executado, ou uma _ação_ que será executada.  As etapas são executadas em ordem e dependem uma da outra.  Uma vez que cada etapa é executada no mesmo executor, você pode compartilhar dados de um passo para outro.  Por exemplo, você pode ter uma etapa que compila a sua aplicação seguida de uma etapa que testa ao aplicativo criado.

Você pode configurar as dependências de um trabalho com outros trabalhos; por padrão, os trabalhos não têm dependências e são executados em paralelo um com o outro.  Quando um trabalho leva uma dependência de outro trabalho, ele irá aguardar que o trabalho depeendente seja concluído antes que possa executar.  Por exemplo, você pode ter vários trabalhos de criação para diferentes arquiteturas que não têm dependências, e um trabalho de pacotes que depende desses trabalhos.  Os trabalhos de criação serão executados em paralelo e, quando todos forem concluídos com sucesso, o trabalho de empacotamento será executado.

Para obter mais informações sobre trabalhos, consulte "[Usando trabalhos](/actions/using-jobs)".

### Actions

Uma _ação_ é uma aplicativo personalizado para a plataforma de {% data variables.product.prodname_actions %} que executa uma tarefa complexa, mas frequentemente repetida.  Use uma ação para ajudar a reduzir a quantidade de código repetitivo que você grava nos seus arquivos de fluxo de trabalho.  Uma ação pode extrair o seu repositório git de {% data variables.product.prodname_dotcom %}, configurar a cadeia de ferramentas correta para seu ambiente de criação ou configurar a autenticação para seu provedor de nuvem.

Você pode gravar suas próprias ações, ou você pode encontrar ações para usar nos seus fluxos de trabalho em {% data variables.product.prodname_marketplace %}.

{% data reusables.actions.internal-actions-summary %}

Para obter mais informações, consulte "[Criar ações](/actions/creating-actions)".

### Executores

{% data reusables.actions.about-runners %} Cada executor pode executar uma tarefa por vez. {% ifversion ghes or ghae %} Você deve hospedar seus próprios executores para {% data variables.product.product_name %}. {% elsif fpt or ghec %}{% data variables.product.company_short %} fornece executores para Ubuntu Linux, Microsoft Windows e macOS para executar seus fluxos de trabalho. Cada fluxo de trabalho é executado em uma nova máquina virtual provisionada. Se você precisar de um sistema operacional diferente ou precisar de uma configuração de hardware específica, você poderá hospedar seus próprios executores.{% endif %} Para mais informações{% ifversion fpt or ghec %} sobre executores auto-hospedados{% endif %}, consulte "[Hospedando os seus próprios executores](/actions/hosting-your-own-runners)"

{% data reusables.actions.workflow-basic-example-and-explanation %}

## Próximas etapas

Para continuar aprendendo sobre {% data variables.product.prodname_actions %}, consulte "[Encontrar e personalizar ações](/actions/learn-github-actions/finding-and-customizing-actions)".

{% ifversion fpt or ghec or ghes %}

Para entender como a cobrança funciona para {% data variables.product.prodname_actions %}, consulte "[Sobre cobrança para {% data variables.product.prodname_actions %}](/actions/reference/usage-limits-billing-and-administration#about-billing-for-github-actions)".

{% endif %}

## Entrar em contato com o suporte

{% data reusables.actions.contacting-support %}

{% ifversion ghec or ghes or ghae %}
## Leia mais

- "[Sobre {% data variables.product.prodname_actions %} para as empresas](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/about-github-actions-for-enterprises)"
{% endif %}
