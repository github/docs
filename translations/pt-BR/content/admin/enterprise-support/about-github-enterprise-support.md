---
title: Sobre o Suporte do GitHub Enterprise
intro: '{% data variables.contact.github_support %} pode ajudar você a resolver problemas que surgem em {% data variables.product.product_name %}.'
redirect_from:
  - /enterprise/admin/enterprise-support/about-github-enterprise-support
versions:
  enterprise-server: '*'
  github-ae: '*'
---

{% note %}

**Observação**: {% data reusables.support.data-protection-and-privacy %}

{% endnote %}

### Sobre o {% data variables.contact.enterprise_support %}

{% data variables.product.product_name %} inclui {% data variables.contact.enterprise_support %} em inglês{% if enterpriseServerVersions contains currentVersion %}e japonês{% endif %}.

{% if enterpriseServerVersions contains currentVersion %}
Você pode entrar em contato com
{% data variables.contact.enterprise_support %} por meio de {% data variables.contact.contact_enterprise_portal %} para obter ajuda com:
 - Instalar e usar o {% data variables.product.product_name %};
 - Identificar e verificar as causas dos erros.
{% endif %}

Além de todos os benefícios de {% data variables.contact.enterprise_support %}, {% if enterpriseServerVersions contains currentVersion %}{% data variables.contact.premium_support %}{% else %}o suporte para {% data variables.product.product_name %}{% endif %} oferece:
  - Suporte gravado por meio de nosso portal de suporte 24 horas por dias, 7 dias por semana
  - Suporte por telefone 24 horas por dia, 7 dias por semana
  - Um{% if currentVersion == "github-ae@latest" %}n melhorou{% endif %} Contrato de Nível de Serviço (SLA) {% if enterpriseServerVersions contains currentVersion %}com tempo de resposta inicial garantido{% endif %}
{% if currentVersion == "github-ae@latest" %}
  - Um gerente de conta de serviço técnico atribuído
  - Revisões de suporte trimestrais
  - Serviços de administração gerenciados
{% else if enterpriseServerVersions contains currentVersion %}
  - Gerentes técnicos de conta
  - Acesso a conteúdo premium
  - Verificação de integridade agendadas
  - Horas administrativas gerenciadas
{% endif %}

{% data reusables.support.government-response-times-may-vary %}

{% if enterpriseServerVersions contains currentVersion %}
Para obter mais informações, consulte a seção "[Sobre o {% data variables.contact.premium_support %} para {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/enterprise-support/about-github-premium-support-for-github-enterprise-server)".
{% endif %}

{% data reusables.support.scope-of-support %}

### Entrar em contato com o {% data variables.contact.enterprise_support %}

Você pode entrar em contato com {% data variables.contact.enterprise_support %} através de {% if enterpriseServerVersions contains currentVersion %}{% data variables.contact.contact_enterprise_portal %}{% elsif currentVersion == "github-ae@latest" %} o {% data variables.contact.ae_azure_portal %}{% endif %} para relatar problemas por escrito. Para obter mais informações, consulte "[Receber ajuda de {% data variables.contact.github_support %}](/admin/enterprise-support/receiving-help-from-github-support)".

### Horas de operação

{% if enterpriseServerVersions contains currentVersion %}
#### Suporte em inglês
{% endif %}

{% if enterpriseServerVersions contains currentVersion %}
Para problemas não urgentes, oferecemos suporte em inglês 24 horas por dia e 5 dias por semana, exceto nos fins de semana e feriados nacionais dos EUA. feriados. O tempo padrão de resposta é de 24 horas.

Para problemas urgentes, nós {% else %}Nós{% endif %} estamos disponíveis 24 horas por dia, 7 dias por semana, mesmo durante feriados nacionais nos EUA. feriados.

{% data reusables.support.government-response-times-may-vary %}

{% if enterpriseServerVersions contains currentVersion  %}
#### Suporte em japonês

Para problemas não urgentes, o suporte em japonês está disponível de segunda-feira à sexta-feira, das 9h às 17h JST, exceto durante os feriados nacionais no Japão. Para problemas urgentes, oferecemos suporte em inglês 24 horas por dia, 7 dias por semana, mesmo durante os feriados nacionais nos EUA. feriados.

Para obter uma lista completa dos EUA. Para ver uma lista de feriados nacionais no Japão observados por {% data variables.contact.enterprise_support %}, consulte "[Cronogramas de feriados](#holiday-schedules){% endif %}

{% if enterpriseServerVersions contains currentVersion %}
### Calendário de feriados

Para problemas urgentes, fornecemos suporte em inglês 44 horas por dia, 7 dias por semana, incluindo nos EUA. {% if enterpriseServerVersions contains currentVersion  %}e{% endif %} feriados japoneses.

#### Feriados nos Estados Unidos

O {% data variables.contact.enterprise_support %} observa esses feriados dos EUA. feriados{% if enterpriseServerVersions contains currentVersion  %}, embora nossa equipe de suporte global esteja disponível para responder tíquetes urgentes{% endif %}.

| EUA Feriado             | Data de observação            |
| ----------------------- | ----------------------------- |
| Fraternidade Universal  | 1º de janeiro                 |
| Martin Luther King, Jr. | 3ª segunda-feira de janeiro   |
| Dia dos Presidentes     | 3ª segunda-feira de fevereiro |
| Dia do Memorial         | Última segunda-feira de maio  |
| Dia da Independência    | 4 de julho                    |
| Dia do Trabalho         | 1ª segunda-feira de setembro  |
| Dia dos Veteranos       | 12 de novembro                |
| Ação de Graças (Dia 1)  | 4ª quinta-feira de novembro   |
| Ação de Graças (Dia 2)  | 4ª sexta-feira de novembro    |
| Natal (Dia 1)           | 24 de dezembro                |
| Natal (Dia 2)           | 25 de dezembro                |
| Natal (Dia 3)           | 28 de dezembro                |
| Ano-Novo                | 31 de dezembro                |

#### Feriados no Japão

O {% data variables.contact.enterprise_support %} não oferece suporte na língua japonesa no período de 28 de dezembro a 3 de janeiro, nem nos feriados listados em [国民の祝日について - 内閣府](https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html).

{% data reusables.enterprise_enterprise_support.installing-releases %}
{% endif %}

### Atribuindo uma prioridade a um tíquete de suporte

Ao entrar em contato com {% data variables.contact.enterprise_support %}, você pode escolher uma das quatro prioridades para o tíquete: {% data variables.product.support_ticket_priority_urgent %}, {% data variables.product.support_ticket_priority_high %}, {% data variables.product.support_ticket_priority_normal %} ou {% data variables.product.support_ticket_priority_low %}.

{% data reusables.support.github-can-modify-ticket-priority %}

{% if enterpriseServerVersions contains currentVersion  %}
{% data reusables.support.ghes-priorities %}
{% elsif currentVersion == "github-ae@latest" %}
{% data reusables.support.ghae-priorities %}
{% endif %}

### Resolução e fechamento de tíquete de suporte

{% data reusables.support.enterprise-resolving-and-closing-tickets %}

### Leia mais

{% if enterpriseServerVersions contains currentVersion %}
- Seção 10 sobre suporte no Contrato de Licença de "[{% data variables.product.prodname_ghe_server %}](https://enterprise.github.com/license)"{% endif %}
- "[Receber ajuda de {% data variables.contact.github_support %}](/admin/enterprise-support/receiving-help-from-github-support)"{% if enterpriseServerVersions contains currentVersion %}
- "[Preparar para enviar um tíquete](/enterprise/admin/guides/enterprise-support/preparing-to-submit-a-ticket)"{% endif %}
- [Enviar um tíquete](/enterprise/admin/guides/enterprise-support/submitting-a-ticket)
