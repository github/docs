---
title: Gerando uma verificação de integridade para sua empresa
intro: 'Você pode obter informações sobre integridade geral e do Git e solicitações de API de {% data variables.product.product_location %} gerando uma verificação de integridade.'
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Monitoring
  - Performance
product: '{% data reusables.gated-features.generated-health-checks %}'
ms.openlocfilehash: f02fc61f050fc01a69f9fafe2dcdc95d91322dfa
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146460018'
---
{% note %}

**Observação:** atualmente, a geração de uma verificação de integridade está em versão beta no {% data variables.product.prodname_ghe_server %} e sujeita a alterações.

{% endnote %}

## Sobre as verificações de integridade geradas

Você pode criar um pacote de suporte para {% data variables.product.product_location %} que contém um monte de dados, como diagnósticos e arquivos de registro. Para ajudar a analisar e interpretar esses dados, você pode gerar uma verificação de integridade. Para obter mais informações sobre os pacotes de suporte, confira "[Como fornecer dados para o {% data variables.contact.github_support %}](/support/contacting-github-support/providing-data-to-github-support#creating-and-sharing-support-bundles)".

Uma verificação de integridade fornece as seguintes informações sobre {% data variables.product.product_location %}.
- Insights sobre a integridade geral de {% data variables.product.product_location %}, como o status de atualização, armazenamento e o consumo da estação da licença
- Uma seção de segurança que foca no isolamento do subdomínio e autenticação do usuário
- Análise de solicitações do Git, com detalhes sobre repositórios mais movimentados e usuários do Git 
- Análise das solicitações de API, incluindo os tempos mais movimentados, pontos de extremidade mais solicitados e as chamadas mais ativas

Se você quiser gerar uma Verificação de Integridade para o {% data variables.product.prodname_ghe_cloud %}, entre em contato com o {% data variables.contact.github_support %}. Para obter mais informações, confira "[Como criar um tíquete de suporte](/support/contacting-github-support/creating-a-support-ticket)".

## Gerando uma verificação de integridade

Antes de gerar uma verificação de integridade, você deve criar um pacote de suporte. Para obter mais informações, confira "[Como fornecer dados para o {% data variables.contact.github_support %}](/support/contacting-github-support/providing-data-to-github-support#creating-and-sharing-support-bundles)".

1. Navegue até o [{% data variables.contact.support_portal %}](https://support.github.com/).
2. No canto superior direito da página, clique em **Premium**.

   ![Captura de tela do link "Premium" no cabeçalho Portal de Suporte do GitHub.](/assets/images/enterprise/support/support-portal-header-premium.png)
   
3. À direita de **Verificações de Integridade**, clique em **Solicitar Verificação de Integridade**.

   ![Captura de tela do botão "Solicitar Verificação de Integridade".](/assets/images/enterprise/support/support-portal-request-health-check.png)
   
4. Em "Selecionar uma conta corporativa", selecione o menu suspenso e clique em uma conta empresarial.

   ![Captura de tela do menu suspenso "Conta corporativa".](/assets/images/enterprise/support/health-check-dialog-ea.png)
   
5. Em "Carregar um pacote de suporte", clique em **Escolher Arquivo** e escolha um arquivo para carregá-lo. Em seguida, clique em **Solicitar Verificação de Integridade**.

   ![Captura de tela dos botões "Escolher arquivo" e "Solicitar Verificação de Integridade".](/assets/images/enterprise/support/health-check-dialog-choose-file.png)
   

Após solicitar uma verificação de integridade, será agendado um trabalho para gerar a verificação de integridade. Após várias horas em um dia, a verificação de saúde gerada aparecerá na seção "Verificação de integridade" do {% data variables.contact.support_portal %}.

![Captura de tela da seção Verificações de Integridadedo {% data variables.contact.support_portal %}.](/assets/images/enterprise/support/support-portal-health-checks-section.png)
