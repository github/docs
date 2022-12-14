---
title: Sobre o suporte do GitHub
intro: Você pode entrar em contato com o Suporte do GitHub para ajudar você a solucionar problemas encontrados enquanto você usa o GitHub.
shortTitle: About GitHub Support
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
redirect_from:
  - /enterprise/admin/enterprise-support/about-github-enterprise-support
  - /admin/enterprise-support/about-github-enterprise-support
  - /admin/enterprise-support/overview/about-github-enterprise-support
  - /articles/about-github-support
  - /github/working-with-github-support/about-github-support
  - /articles/github-enterprise-cloud-support
  - /github/working-with-github-support/github-enterprise-cloud-support
  - /articles/business-plan-support
  - /articles/github-business-cloud-support
  - /admin/enterprise-support/about-support-for-advanced-security
  - /enterprise-server/admin/enterprise-support/about-support-for-advanced-security
topics:
  - Support
ms.openlocfilehash: aa2b407b96cc7ee2ecc20fee9782e3084b3627db
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192910'
---
## Sobre o {% data variables.contact.github_support %}

As opções de suporte disponíveis para usuários de {% data variables.product.prodname_dotcom %} dependem dos produtos usados por suas contas pessoais, quaisquer organizações ou empresas das quais são integrantes e quaisquer instâncias de {% data variables.product.prodname_ghe_server %} que gerenciam. Cada produto inclui um nível padrão de suporte e as contas que usam {% data variables.product.prodname_enterprise %} podem comprar {% data variables.contact.premium_support %}.

{% ifversion fpt %} Se você é membro de uma organização que usa o {% data variables.product.prodname_enterprise %}, use o menu suspenso no canto superior direito do {% data variables.product.prodname_docs %} para ver uma versão desses artigos apropriada ao seu produto. Para obter mais informações, confira "[Sobre as versões do GitHub Docs](/get-started/learning-about-github/about-versions-of-github-docs)".
{% endif %}

{% ifversion not ghae %}

|  | {% data variables.product.prodname_gcf %} | Suporte Standard | Suporte premium |
|----|---------------|-------|---------------|
| {% data variables.product.prodname_free_user %} | {% octicon "check" aria-label="Check" %}  |  |  |  
| {% data variables.product.prodname_pro %} | {% octicon "check" aria-label="Check" %}  | {% octicon "check" aria-label="Check" %}  |  |  
| {% data variables.product.prodname_team %} | {% octicon "check" aria-label="Check" %}  | {% octicon "check" aria-label="Check" %}  |  |
| {% data variables.product.prodname_ghe_cloud %} | {% octicon "check" aria-label="Check" %}  | {% octicon "check" aria-label="Check" %}  | Disponível para compra |
| {% data variables.product.prodname_ghe_server %} | {% octicon "check" aria-label="Check" %}  | {% octicon "check" aria-label="Check" %}  | Disponível para compra |

{% endif %}

{% ifversion ghes %}

Você pode entrar em contato com {% data variables.contact.enterprise_support %} através do {% data variables.contact.contact_enterprise_portal %} para obter ajuda em:
 - Como instalar e usar o {% data variables.product.product_name %}
 - Identificar e verificar as causas dos erros.
 - Como instalar e usar o {% data variables.product.prodname_advanced_security %}

{% endif %}

{% ifversion ghes or ghec %}

{% data reusables.support.premium-support-features %}

Para obter mais informações, confira "[Sobre o Suporte Premium do GitHub](/support/about-github-support/about-github-premium-support)".

{% endif %}

{% ifversion fpt or ghec or ghae %}

Antes de entrar em contato com o {% data variables.contact.github_support %}, verifique se há atualmente qualquer incidente afetando os serviços no {% data variables.product.product_name %} no {%- ifversion fpt or ghec %} [{% data variables.product.prodname_dotcom %} Status](https://githubstatus.com/) {%- elsif ghae %} [{% data variables.product.product_name %} Status](https://ghestatus.com/) {%- endif %}. Para obter mais informações, confira "[Sobre o status do GitHub](#about-github-status)".

{% endif %}

{% ifversion fpt %} {% data reusables.support.free-and-paid-support %}

Para relatar problemas de segurança, segurança e abuso ou receber suporte assistido para uma conta paga, acesse {% data variables.contact.contact_support_portal %}. Para obter mais informações, confira "[Como criar um tíquete de suporte](/support/contacting-github-support/creating-a-support-ticket)".
{% endif %}

{% ifversion fpt %} Se você tem algum produto pago ou é membro de uma organização com um produto pago, entre em contato com o {% data variables.contact.github_support %} em inglês.
{% else %} Com o {% data variables.product.product_name %}, você tem acesso ao suporte em inglês e em japonês.
{% endif %}

{% ifversion fpt or ghec or ghes %} {% data reusables.support.support-ticket-translation-option %} {% endif %}

{% ifversion ghes or ghec %}

Para entrar em contato com{% data variables.contact.github_support %}, acesse o {% data variables.contact.contact_support_portal %}. Para obter mais informações, confira "[Como criar um tíquete de suporte](/support/contacting-github-support/creating-a-support-ticket)".

{% elsif ghae %}

Você pode entrar em contato com {% data variables.contact.enterprise_support %} por meio do {% data variables.contact.ae_azure_portal %} para relatar problemas por escrito. Para obter mais informações, confira "[Como criar um tíquete de suporte](/support/contacting-github-support/creating-a-support-ticket)".

{% endif %}

{% ifversion not ghae %} A comunicação por email do Suporte do GitHub sempre será enviada de um endereço `github.com` ou `githubsupport.com`.
{% endif %}

## Escopo do suporte

{% data reusables.support.scope-of-support %}

{% ifversion ghec or fpt or ghae %}
## Sobre o status do GitHub

Verifique se há incidentes que atualmente afetam os serviços do {% data variables.product.product_name %} e confira informações sobre os incidentes passados na [página Status]({% ifversion fpt or ghec %}https://githubstatus.com{% elsif ghae %}https://ghestatus.com{% endif %}) do {% data variables.product.prodname_dotcom %}.

Você também poderá assinar e receber alertas por email, mensagem de texto e webhook sempre que houver um incidente que estiver afetando o {% data variables.product.product_name %}.

{% endif %}

{% ifversion ghec or ghes %}
## Sobre a titularidade de suporte

Os proprietários das empresas e gerentes de faturamento têm automaticamente direito ao suporte, o que lhes permite criar, visualizar e comentar em tíquetes de suporte associados à sua conta corporativa.

Os proprietários de empresas também podem adicionar direitos de suporte aos integrantes de organizações pertencentes à sua conta corporativa, permitindo que eles criem, visualizem e comentem pedidos de suporte. Para obter mais informações, confira "[Como gerenciar os direitos de suporte para sua empresa](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/managing-support-entitlements-for-your-enterprise)".

{% endif %}

{% ifversion fpt or ghec %}
## Conceder acesso temporário do {% data variables.contact.github_support %} a um repositório privado

Se o {% data variables.contact.github_support %} precisar acessar um repositório privado para atender à sua solicitação de suporte, o proprietário do repositório receberá um e-mail com um link para aceitar ou negar o acesso temporário. O proprietário terá 20 dias para aceitar ou negar a solicitação antes que a solicitação expire. Se o proprietário aceitar a solicitação, o {% data variables.contact.github_support %} terá acesso ao repositório por cinco dias. Durante esse período, a equipe do {% data variables.contact.github_support %} com os privilégios necessários pode desbloquear o repositório por até duas horas de cada vez e bloquear o repositório novamente se o trabalho for concluído antes do tempo. Todo o acesso da equipe do {% data variables.contact.github_support %} gera eventos de log de auditoria, e a visibilidade do repositório não é afetada em nenhum momento.

O {% data variables.contact.github_support %} nunca acessará seus repositórios privados sem seu consentimento explícito. Para obter mais informações, confira os [Termos de Serviço](/free-pro-team@latest/github/site-policy/github-terms-of-service#3-access).
{% endif %}

{% ifversion ghec or ghes %}
## Entrando em contato com GitHub Sales e GitHub Training

Para ver preços, licenças, renovações, cotações, pagamentos e outras questões relacionadas, entre em contato com {% data variables.contact.contact_enterprise_sales %} ou ligue para [+1 (877) 448-4820](tel:+1-877-448-4820).

Para saber mais sobre as opções de treinamento, incluindo treinamentos personalizados, confira o [site de treinamento do {% data variables.product.company_short %}](https://services.github.com/).

{% note %}

**Observação:** o {% data variables.product.premium_plus_support_plan %} inclui treinamento. Para obter mais informações, confira "[Sobre o Suporte Premium do GitHub](/support/about-github-support/about-github-premium-support)".

{% endnote %}

{% endif %}

{% ifversion ghes or ghec %}
## Horário de funcionamento

### Suporte em inglês

Para problemas não urgentes, oferecemos suporte em inglês 24 horas por dia e 5 dias por semana, exceto nos fins de semana e feriados nacionais dos EUA. O tempo padrão de resposta é de 24 horas.

{% ifversion ghes %} Para problemas urgentes, estamos disponíveis 24 horas por dia, 7 dias por semana, mesmo durante os feriados nacionais nos EUA.
{% endif %}

### Suporte em japonês

Para problemas gerais não urgentes, o suporte em japonês está disponível de segunda-feira à sexta-feira, das 9h às 17h JST, exceto durante os feriados nacionais no Japão. 

{% ifversion ghes %} Para problemas urgentes, oferecemos suporte em inglês 24 horas por dia, 7 dias por semana, mesmo durante os feriados nacionais nos EUA.
{% endif %}

Para ver a lista completa de feriados nacionais dos EUA e do Japão segundo o {% data variables.contact.enterprise_support %}, confira o "[Calendário de feriados](#holiday-schedules)".

## Calendário de feriados

Para problemas urgentes, nosso suporte está disponível em inglês 24 horas por dia, 7 dias por semana, inclusive durante os feriados dos EUA e do Japão.

### Feriados nos Estados Unidos

O {% data variables.contact.enterprise_support %} observa os feriados americanos, embora nossa equipe de suporte global esteja disponível para responder tíquetes urgentes.

{% data reusables.enterprise_enterprise_support.support-holiday-availability %}

### Feriados no Japão

O {% data variables.contact.enterprise_support %} não fornece suporte ao idioma japonês de 28 de dezembro a 3 de janeiro, bem como nos feriados listados em [国民の祝日について – 内閣府](https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html).

{% data reusables.enterprise_enterprise_support.installing-releases %}

{% endif %}

{% ifversion ghec or ghes or ghae %}

## Resolução e fechamento de tíquete de suporte

{% data reusables.support.enterprise-resolving-and-closing-tickets %}

{% endif %}

## Leitura adicional

{%- ifversion ghes %}
- Seção 10 sobre Suporte no "Contrato de Licença do [{% data variables.product.prodname_ghe_server %}](https://enterprise.github.com/license)" {%- endif %}
- "[Como criar um tíquete de suporte](/support/contacting-github-support/creating-a-support-ticket)" {%- ifversion not ghae %}
- "[Como ver e atualizar tíquetes de suporte](/support/contacting-github-support/viewing-and-updating-support-tickets)" {%- endif %}
