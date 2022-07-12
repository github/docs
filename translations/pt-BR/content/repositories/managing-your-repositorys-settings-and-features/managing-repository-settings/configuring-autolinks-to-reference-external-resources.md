---
title: Configurar links automáticos para fazer referência a recursos externos
intro: Você pode adicionar links automáticos para recursos externos como problemas do JIRA e tíquetes do Zendesk a fim de ajudar a otimizar o fluxo de trabalho.
product: '{% data reusables.gated-features.autolinks %}'
redirect_from:
  - /articles/configuring-autolinks-to-reference-external-resources
  - /github/administering-a-repository/configuring-autolinks-to-reference-external-resources
  - /github/administering-a-repository/managing-repository-settings/configuring-autolinks-to-reference-external-resources
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Configurar links automáticos
---

## Sobre os autolinks

Qualquer pessoa com permissões de administrador para um repositório pode configurar referências de autolink para vincular problemas, pull requests, mensagens do commit e descrições de versões para serviços externos de terceiros.

{% ifversion autolink-reference-alphanumeric %}
As referências autolink agora aceitam caracteres alfanuméricos. Quando introduzidos originalmente, os autolinks personalizados eram limitados a recursos externos que usavam identificadores numéricos. Os autolinks personalizados agora funcionam com identificadores alfanuméricos. As referências autolink de kegado que reconhecem apenas identificadores numéricos são obsoletas e exibidas com uma etiqueta "legado".

Você define autolinks personalizados especificando um prefixo de referência e uma URL de destino.
- Os prefixos de referência não podem ter nomes sobrepostos. Por exemplo, um repositório não pode ter dois autolinks personalizados com prefixos como `TICKET` e `TICK`, já que ambos os prefixos correspondem à string `TICKET123a`.
- As URLs de destino incluem uma variável `<num>` que suporta os seguintes caracteres: `a-z` (que não diferencia maiúsculas e minúsculas), `0-9` e `-`.
{% endif %}

## Configurar links automáticos para fazer referência a recursos externos

Este procedimento demonstra como configurar autolinks para referência de recursos externos. Por exemplo, se você usar o Zendesk para acompanhar os tíquetes relatados pelo usuário, você pode fazer referência a um número de ticket no pull request que abriu para corrigir o problema.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %}
1. Na seção "Integrações" na barra lateral, clique em **Referências autolink de {% octicon "cross-reference" aria-label="The cross-reference icon" %}**.
{% else %}
1. Na barra lateral esquerda, clique em **Autolink references** (Referências de link automático). ![Guia Autolink references (Referências de link automático) na barra lateral esquerda](/assets/images/help/repository/autolink-references-tab.png)
{% endif %}
1. Clique em **Add autolink reference** (Adicionar referência de link automático). ![Botão para preencher informações de referência de link automático](/assets/images/help/repository/add-autolink-reference-details.png)
5. Em "Reference prefix" (Prefixo da referência), digite um prefixo curto e significativo que os colaboradores devem usar para gerar links automáticos para os recursos externos.
{% ifversion autolink-reference-alphanumeric %}![Field to type abbreviation for external system](/assets/images/help/repository/add-reference-prefix-field-alphanumeric.png){% else %}![Field to type abbreviation for external system](/assets/images/help/repository/add-reference-prefix-field.png){% endif %}
6. Em "Target URL" (URL de destino), digite o link para o sistema externo com o qual deseja criar vínculo. Certifique-se de manter `<num>` como uma variável para o número de referência.
{% ifversion autolink-reference-alphanumeric %}![Field to type URL to external system](/assets/images/help/repository/add-target-url-field-alphanumeric.png){% else %}![Field to type URL to external system](/assets/images/help/repository/add-target-url-field.png){% endif %}
7. Clique em **Add autolink reference** (Adicionar referência de link automático).
{% ifversion autolink-reference-alphanumeric %}{% else %}![Button to add autolink reference](/assets/images/help/repository/add-autolink-reference.png){% endif %}
