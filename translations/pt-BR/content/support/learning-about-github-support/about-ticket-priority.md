---
title: About ticket priority
intro: You can communicate the severity of your issue and how it is affecting you and your team by setting the priority of your support ticket.
shortTitle: Ticket priority
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Support
---

When you contact {% data variables.contact.enterprise_support %}, you can choose one of {% ifversion ghes or ghae %}four{% else %}three{% endif %} priorities for the ticket: {% ifversion ghes or ghae %}{% data variables.product.support_ticket_priority_urgent %},{% endif %} {% data variables.product.support_ticket_priority_high %}, {% data variables.product.support_ticket_priority_normal %}, or {% data variables.product.support_ticket_priority_low %}.

{% ifversion ghes or ghae %}

{% data reusables.support.github-can-modify-ticket-priority %}

{% ifversion ghes %}

## Ticket priority for {% data variables.product.prodname_ghe_server %}

{% data reusables.support.ghes-priorities %}

## Ticket priority for {% data variables.product.prodname_advanced_security %}

|                          Prioridade                           | Descrição                                                                                                                                                                                                                                             |
|:-------------------------------------------------------------:| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  {% data variables.product.support_ticket_priority_high %}  | O {% data variables.product.prodname_advanced_security %} não está funcionando, ou está parado ou seriamente afetado, de modo que o usuário final não pode razoavelmente continuar o uso do software e nenhuma solução alternativa está disponível. |
| {% data variables.product.support_ticket_priority_normal %} | O {% data variables.product.prodname_advanced_security %} está funcionando de maneira inconsistente, causando prejuízo no uso e na produtividade do usuário final.                                                                                  |
|  {% data variables.product.support_ticket_priority_low %}   | {% data variables.product.prodname_advanced_security %} está funcionando de maneira consistente, mas o usuário final solicita pequenas alterações no software, como atualizações de documentação, defeitos estéticos ou aprimoramentos.             |

{% elsif ghae %}
{% data reusables.support.ghae-priorities %}
{% endif %}

{% elsif ghec %}

<!-- /github/working-with-github-support/github-enterprise-cloud-support.md -->

{% data reusables.support.zendesk-old-tickets %}

É possível enviar perguntas prioritárias se você tiver comprado o {% data variables.product.prodname_ghe_cloud %} ou se for integrante, colaborador externo ou gerente de cobrança de uma organização {% data variables.product.prodname_dotcom %} atualmente assinante do {% data variables.product.prodname_ghe_cloud %}.

Perguntas qualificadas para respostas prioritárias:
- Incluem perguntas relacionadas à sua incapacidade de usar ou acessar a funcionalidade de controle da versão principal do {% data variables.product.prodname_dotcom %}
- Incluem situações relacionadas com a segurança de sua conta
- Não incluem serviços e recursos periféricos, como perguntas sobre Gists, {% data variables.product.prodname_pages %} ou notificações de e-mail
- Incluem perguntas somente sobre organizações que utilizam o {% data variables.product.prodname_ghe_cloud %} atualmente

Para se qualificar para uma resposta prioritária, você deve:
- Enviar sua pergunta para [{% data variables.contact.enterprise_support %}](https://support.github.com/contact?tags=docs-generic) a partir de um endereço de e-mail verificado associado a uma organização que atualmente usa o {% data variables.product.prodname_ghe_cloud %}
- Enviar um novo tíquete de suporte para cada situação prioritária individual
- Enviar a pergunta de segunda a sexta-feira, em seu fuso horário local
- Entender que a resposta a uma pergunta prioritária será recebida por e-mail
- Cooperar com o {% data variables.contact.github_support %} e fornecer todas as informações solicitadas pelo {% data variables.contact.github_support %}

{% note %}

**Note:** Questions do not qualify for a priority response if they are submitted on a local holiday in your jurisdiction.

{% endnote %}

O tempo alvo de oito horas para respostas:
- Começa quando o {% data variables.contact.github_support %} recebe sua pergunta qualificada
- Não inicia até que você tenha fornecido informações suficientes para a pergunta ser respondida, a menos que você indique especificamente que não tem informações suficientes
- Não é válido para os finais de semana em seu fuso horário local ou feriados locais em sua jurisdição

{% note %}

**Observação:** o {% data variables.contact.github_support %} não garante a resolução de sua pergunta prioritária. O {% data variables.contact.github_support %} pode escalar ou tirar os problemas do status de perguntas prioritárias com base em uma avaliação sensata sobre as informações que você forneceu.

{% endnote %}

{% endif %}

## Leia mais

- "[Creating a support ticket](/support/contacting-github-support/creating-a-support-ticket)"
