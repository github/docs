---
title: Entendendo o GitHub Actions
shortTitle: Understanding GitHub Actions
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
ms.openlocfilehash: 439aa7fb77fb68c5f66da00a0de666d809b82fde
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 07/13/2022
ms.locfileid: '146139446'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## <a name="overview"></a>Visão geral

{% data reusables.actions.about-actions %}  É possível criar fluxos de trabalho que criam e testam cada pull request no seu repositório, ou implantar pull requests mesclados em produção.

{% data variables.product.prodname_actions %} vai além de apenas DevOps e permite que você execute fluxos de trabalho quando outros eventos ocorrerem no seu repositório. Por exemplo, você pode executar um fluxo de trabalho para adicionar automaticamente as etiquetas apropriadas sempre que alguém cria um novo problema no repositório.

{% ifversion fpt or ghec %}

{% data variables.product.prodname_dotcom %} fornece máquinas virtuais do Linux, Windows e macOS para executar seus fluxos de trabalho, ou você pode hospedar seus próprios executores auto-hospedados na sua própria infraestrutura de dados ou na nuvem.

{% elsif ghes or ghae %}

Você deve hospedar suas próprias máquinas virtuais do Linux, Windows ou macOS para executar fluxos de trabalho para {% data variables.product.product_location %}. {% data reusables.actions.self-hosted-runner-locations %}

{% endif %}

{% ifversion ghec or ghes or ghae %}

Para obter mais informações sobre como apresentar o {% data variables.product.prodname_actions %} à sua empresa, confira "[Apresentação do {% data variables.product.prodname_actions %} à sua empresa](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/introducing-github-actions-to-your-enterprise)".

{% endif %}

## <a name="the-components-of--data-variablesproductprodname_actions-"></a>Componentes de {% data variables.product.prodname_actions %}

Você pode configurar um _fluxo de trabalho_ do {% data variables.product.prodname_actions %} a ser disparado quando um _evento_ ocorrer no seu repositório, como a abertura de uma solicitação de pull ou a criação de um problema.  Seu fluxo de trabalho contém um ou mais _trabalhos_ que podem ser executados em ordem sequencial ou em paralelo.  Cada trabalho será executado em um _executor_ próprio de máquina virtual ou em um contêiner e tem uma ou mais _etapas_ que executam um script definido por você ou uma _ação_, que é uma extensão reutilizável que pode simplificar o fluxo de trabalho.

![Visão geral do fluxo de trabalho](/assets/images/help/images/overview-actions-simple.png)

### <a name="workflows"></a>Fluxos de trabalho

{% data reusables.actions.about-workflows-long %}

{% ifversion fpt or ghes > 3.3 or ghae-issue-4757 or ghec %}Você pode referenciar um fluxo de trabalho em outro fluxo de trabalho. Confira "[Como reutilizar fluxos de trabalho](/actions/learn-github-actions/reusing-workflows)".{% endif %}

Para obter mais informações sobre os fluxos de trabalho, confira "[Como usar fluxos de trabalho](/actions/using-workflows)".

### <a name="events"></a>Eventos

Um evento é uma atividade específica em um repositório que aciona a execução de um fluxo de trabalho. Por exemplo, a atividade pode originar-se de {% data variables.product.prodname_dotcom %} quando alguém cria uma solicitação de pull request, abre um problema ou faz envio por push de um commit para um repositório.  Você também pode disparar uma execução de fluxo de trabalho de acordo com um agendamento, [com um POST em uma API REST](/rest/reference/repos#create-a-repository-dispatch-event) ou manualmente.

Para ver uma lista completa dos eventos que podem ser usados para disparar fluxos de trabalho, confira [Eventos que disparam fluxos de trabalho](/actions/reference/events-that-trigger-workflows).

### <a name="jobs"></a>Trabalhos

Um trabalho é um conjunto de _etapas_ em um fluxo de trabalho executado no mesmo executor.  Cada etapa é um script de shell que será executado ou uma _ação_ que será executada.  As etapas são executadas em ordem e dependem uma da outra.  Uma vez que cada etapa é executada no mesmo executor, você pode compartilhar dados de um passo para outro.  Por exemplo, você pode ter uma etapa que compila a sua aplicação seguida de uma etapa que testa ao aplicativo criado.

Você pode configurar as dependências de um trabalho com outros trabalhos; por padrão, os trabalhos não têm dependências e são executados em paralelo um com o outro.  Quando um trabalho leva uma dependência de outro trabalho, ele irá aguardar que o trabalho depeendente seja concluído antes que possa executar.  Por exemplo, você pode ter vários trabalhos de criação para diferentes arquiteturas que não têm dependências, e um trabalho de pacotes que depende desses trabalhos.  Os trabalhos de criação serão executados em paralelo e, quando todos forem concluídos com sucesso, o trabalho de empacotamento será executado.

Para obter mais informações sobre trabalhos, confira "[Como usar trabalhos](/actions/using-jobs)".

### <a name="actions"></a>Ações

Uma _ação_ é um aplicativo personalizado para a plataforma {% data variables.product.prodname_actions %} que executa uma tarefa complexa, mas frequentemente repetida.  Use uma ação para ajudar a reduzir a quantidade de código repetitivo que você grava nos seus arquivos de fluxo de trabalho.  Uma ação pode extrair o seu repositório git de {% data variables.product.prodname_dotcom %}, configurar a cadeia de ferramentas correta para seu ambiente de criação ou configurar a autenticação para seu provedor de nuvem.

Você pode gravar suas próprias ações, ou você pode encontrar ações para usar nos seus fluxos de trabalho em {% data variables.product.prodname_marketplace %}.

{% data reusables.actions.internal-actions-summary %}

Para obter mais informações, confira "[Como criar ações](/actions/creating-actions)".

### <a name="runners"></a>Executores

{% data reusables.actions.about-runners %} Cada executor pode executar uma tarefa por vez. {% ifversion ghes or ghae %} Você deve hospedar seus próprios executores para {% data variables.product.product_name %}. {% elsif fpt or ghec %}{% data variables.product.company_short %} fornece executores para Ubuntu Linux, Microsoft Windows e macOS para executar seus fluxos de trabalho. Cada fluxo de trabalho é executado em uma nova máquina virtual provisionada. Caso precise ter outro sistema operacional ou uma configuração de hardware específica, hospede seus executores.{% endif %} Para obter mais informações{% ifversion fpt or ghec %} sobre os executores auto-hospedados{% endif %}, confira "[Como hospedar seus executores](/actions/hosting-your-own-runners)".

{% data reusables.actions.workflow-basic-example-and-explanation %}

## <a name="more-complex-examples"></a>Exemplos mais complexos
{% data reusables.actions.link-to-example-library %}

## <a name="next-steps"></a>Próximas etapas

- Para continuar aprendendo mais sobre o {% data variables.product.prodname_actions %}, confira "[Como localizar e personalizar ações](/actions/learn-github-actions/finding-and-customizing-actions)".
{% ifversion fpt or ghec or ghes %}
- Para entender como funciona a cobrança do {% data variables.product.prodname_actions %}, confira "[Sobre a cobrança do {% data variables.product.prodname_actions %}](/actions/reference/usage-limits-billing-and-administration#about-billing-for-github-actions)".
{% endif %}

## <a name="contacting-support"></a>Entrar em contato com o suporte

{% data reusables.actions.contacting-support %}

{% ifversion ghec or ghes or ghae %}
## <a name="further-reading"></a>Leitura adicional

- "[Sobre {% data variables.product.prodname_actions %} para empresas](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/about-github-actions-for-enterprises)" {% endif %}
