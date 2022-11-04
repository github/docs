---
title: Editando consultorias de segurança no banco de dados consultivo do GitHub
intro: 'Você pode enviar melhorias para qualquer consultoria publicada no {% data variables.product.prodname_advisory_database %}.'
redirect_from:
  - /code-security/security-advisories/editing-security-advisories-in-the-github-advisory-database
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/editing-security-advisories-in-the-github-advisory-database
  - /code-security/dependabot/dependabot-alerts/editing-security-advisories-in-the-github-advisory-database
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Security advisories
  - Alerts
  - Dependabot
  - Vulnerabilities
  - CVEs
shortTitle: Edit Advisory Database
ms.openlocfilehash: 7cfe2ff49c830922457ef5192ca0db7d326e1388
ms.sourcegitcommit: 27882d9b3f19979c817c25952a2fb4dc4c6f0a65
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/27/2022
ms.locfileid: '148113970'
---
## Editar avisos no {% data variables.product.prodname_advisory_database %}

Os avisos no {% data variables.product.prodname_advisory_database %} são avisos de segurança global. Para obter mais informações sobre avisos de segurança global, confira "[Sobre avisos de segurança global](/code-security/security-advisories/global-security-advisories/about-global-security-advisories)".

Qualquer pessoa pode sugerir melhorias em qualquer consultoria de segurança global na {% data variables.product.prodname_advisory_database %}. Você pode editar ou adicionar qualquer detalhe, incluindo ecossistemas adicionalmente afetados, nível de gravidade ou descrição de quem é impactado. A equipe de curadoria da {% data variables.product.prodname_security %} irá revisar as melhorias apresentadas e publicá-las em {% data variables.product.prodname_advisory_database %}, se aceitas.
{% ifversion fpt or ghec %} Somente proprietários e administradores de repositórios podem editar avisos de segurança no nível do repositório. Para obter mais informações, confira "[Como editar um aviso de segurança do repositório](/code-security/security-advisories/editing-a-security-advisory)."{% endif %}


1. Navegue até https://github.com/advisories.
1. Selecione a consultoria de segurança com a qual você gostaria de contribuir.
1. No lado direito da página, clique no link **Sugerir aprimoramentos para esta vulnerabilidade**.
   
   ![Captura de tela do link sugerir melhorias](/assets/images/help/security/suggest-improvements-to-advisory.png)

1. No formulário "Melhorar a consultoria de segurança", faça as melhorias desejadas. Você pode editar ou adicionar qualquer detalhe. {% ifversion fpt or ghec %} Para obter informações sobre como especificar corretamente informações sobre o formulário, incluindo as versões afetadas, confira "[Melhores práticas para escrever avisos de segurança do repositório](/code-security/repository-security-advisories/best-practices-for-writing-repository-security-advisories)". {% endif %} {% ifversion security-advisories-reason-for-change %}
1. Em **Motivo da alteração**, explique por que você deseja fazer essa melhoria. Se você incluir links para material de suporte, isso ajudará nossos revisores.
   
   ![Captura de tela do motivo da alteração do campo](/assets/images/help/security/security-advisories-suggest-improvement-reason.png){% endif %}

1. Quando terminar de editar a consultoria, clique em **Enviar aprimoramentos**.
1. Depois que você enviar os aprimoramentos, uma solicitação de pull que contém as alterações será criada para revisão em [github/advisory-database](https://github.com/github/advisory-database) pela equipe de curadoria do {% data variables.product.prodname_security %}. Se a consultoria se originar de um repositório {% data variables.product.prodname_dotcom %}, também marcaremos o editor original para comentários opcionais. Você pode ver o pull request e receber notificações quando ele for atualizado ou fechado.

Você também pode abrir uma solicitação pull diretamente em um arquivo de consultoria no repositório [github/advisory-database](https://github.com/github/advisory-database). Para obter mais informações, confira as [diretrizes de contribuição](https://github.com/github/advisory-database/blob/main/CONTRIBUTING.md). 

{% ifversion security-advisories-ghes-ghae %}
## Como editar avisos de {% data variables.location.product_location %}

Se você tiver {% data variables.product.prodname_github_connect %} habilitado para {% data variables.location.product_location %}, você poderá ver os avisos adicionando `/advisories` à URL da instância. 

1. Navegue até `https://HOSTNAME/advisories`.
2. Selecione a consultoria de segurança com a qual você gostaria de contribuir.
3. No lado direito da página, clique no link **Sugerir aprimoramentos para esta vulnerabilidade em {% data variables.product.prodname_dotcom_the_website %}.** . . Uma nova guia é aberta com o mesmo aviso de segurança em {% data variables.product.prodname_dotcom_the_website %}.
![Link Sugerir aprimoramentos](/assets/images/help/security/suggest-improvements-to-advisory-on-github-com.png)
4. Edite o aviso, seguindo as etapas de quatro a seis em "[Como editar avisos no Banco de Dados Consultivo GitHub](#editing-advisories-in-the-github-advisory-database)" acima.
{% endif %}
