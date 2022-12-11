---
title: Gerenciar vulnerabilidades de segurança relatadas privadamente
intro: Os responsáveis pela manutenção dos repositórios podem gerenciar vulnerabilidades de segurança relatadas de maneira privada por pesquisadores de segurança com relação a repositórios em que há relatórios privados de vulnerabilidade habilitados.
permissions: 'Anyone with admin permissions to a repository can see, review, and manage privately-reported vulnerabilities for the repository.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
miniTocMaxHeadingLevel: 3
topics:
  - Security advisories
  - Vulnerabilities
shortTitle: Manage vulnerability reports
ms.openlocfilehash: 942533788dc6ad9280ddc023f583462c7a0ff7f8
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159533'
---
{% data reusables.security-advisory.private-vulnerability-reporting-beta %}

{% data reusables.security-advisory.private-vulnerability-reporting-enable %}

## Sobre os relatórios privados de uma vulnerabilidade de segurança

Com o relatório privado de vulnerabilidades, os pesquisadores de segurança têm uma maneira mais fácil de relatar vulnerabilidades diretamente a você usando um formulário simples. 

Quando um pesquisador de segurança relata uma vulnerabilidade de maneira privada, você é notificado e pode optar por aceitá-la, fazer mais perguntas ou rejeitá-la. Se você aceitar o relatório, isso indicará que você está pronto para colaborar com o pesquisador de segurança em uma correção da vulnerabilidade especificada.

## Gerenciar vulnerabilidades de segurança relatadas de maneira privada

O {% data variables.product.prodname_dotcom %} notifica os responsáveis pela manutenção dos repositórios quando pesquisadores de segurança relatam vulnerabilidades privadamente em seus repositórios e envia notificações quando os responsáveis pela manutenção observam o repositório ou têm notificações habilitadas para ele. Para obter mais informações, confira "[Como configurar notificações](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/configuring-notifications)".

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %} {% data reusables.repositories.sidebar-advisories %}
1. Clique no aviso que você deseja examinar. Um aviso relatado de maneira privada terá um status `Needs triage`.
  
   ![Captura de tela mostrando um exemplo de uma lista de avisos](/assets/images/help/security/advisory-list.png)
   
2. Examine cuidadosamente o relatório. Você pode:
   - Colabore em particular com o pesquisador de segurança em um patch clicando em **Iniciar um fork privado temporário**. Isso fornece um lugar para discussões adicionais com o colaborador sem alterar o status `Needs triage` do aviso proposto.
   - Aceite o relatório de vulnerabilidade como um rascunho de aviso no {% data variables.product.prodname_dotcom %} clicando em **Aceitar e abrir como rascunho**. Se você escolher essa opção:
      - Isso não tornará o relatório público.
      - O relatório se tornará um rascunho de aviso de segurança de repositório e será possível trabalhar nele da mesma forma que em qualquer rascunho de aviso que você criar.
     Para saber mais sobre avisos de segurança, confira "[Sobre os avisos de segurança de repositório](/code-security/security-advisories/repository-security-advisories/about-repository-security-advisories)".
   - Rejeite o relatório clicando em **Fechar aviso de segurança**. Sempre que possível, antes de fechar o aviso, adicione um comentário explicando por que não considera o relatório um risco de segurança.

     ![Captura de tela mostrando as opções disponíveis para o responsável pela manutenção do repositório ao revisar um relatório de vulnerabilidade enviado externamente](/assets/images/help/security/advisory-maintainer-options.png)
