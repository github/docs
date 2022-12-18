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
shortTitle: Configure autolinks
ms.openlocfilehash: ae6e10f55a880a4fa389149ad137300ef3a81514
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146748586'
---
## Sobre os links automáticos

Qualquer pessoa com permissões de administrador para um repositório pode configurar referências de autolink para vincular problemas, pull requests, mensagens do commit e descrições de versões para serviços externos de terceiros.

{% ifversion autolink-reference-alphanumeric %} As referências de link automático agora podem aceitar caracteres alfanuméricos. Logo que foram introduzidos, os links automáticos personalizados eram limitados a recursos externos que usavam identificadores numéricos. Agora, os links automáticos personalizados funcionam com identificadores alfanuméricos. As referências de link automático herdadas que reconhecem apenas identificadores numéricos foram preteridas e são exibidas com um rótulo "herdado".

Você define os links automáticos personalizados especificando um prefixo de referência e uma URL de destino.
- Os prefixos de referência não podem ter nomes que se sobreponham. Por exemplo, um repositório não pode ter dois links automáticos personalizados com prefixos como `TICKET` e `TICK`, pois os dois prefixos corresponderiam à cadeia de caracteres `TICKET123a`.
- As URLs de destino incluem uma variável `<num>` que dá suporte aos seguintes caracteres: `a-z` (não diferencia maiúsculas de minúsculas), `0-9` e `-`.
{% endif %}

## Configurar links automáticos para fazer referência a recursos externos

Este procedimento demonstra como configurar links automáticos para referenciar recursos externos. Por exemplo, ao usar o Zendesk para acompanhar tíquetes relatados por usuários, você pode referenciar um número de tíquete na solicitação de pull que foi aberta para corrigir o problema.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %}
1. Na seção "Integrações" na barra lateral, clique em **{% octicon "cross-reference" aria-label="The cross-reference icon" %} Referências de link automático**.
{% else %}
1. Na barra lateral esquerda, clique em **Referências de link automático**.
![Guia Referências de link automático na barra lateral esquerda](/assets/images/help/repository/autolink-references-tab.png) {% endif %}
1. Clique em **Adicionar referência de link automático**.
![Botão usado para preencher informações de referência de link automático](/assets/images/help/repository/add-autolink-reference-details.png)
5. Em "Reference prefix" (Prefixo da referência), digite um prefixo curto e significativo que os colaboradores devem usar para gerar links automáticos para os recursos externos.
{% ifversion autolink-reference-alphanumeric %}![Campo para digitar a abreviação do sistema externo](/assets/images/help/repository/add-reference-prefix-field-alphanumeric.png){% else %}![Campo para digitar a abreviação do sistema externo](/assets/images/help/repository/add-reference-prefix-field.png){% endif %}
6. Em "Target URL" (URL de destino), digite o link para o sistema externo com o qual deseja criar vínculo. Mantenha `<num>` como uma variável para o número de referência.
{% ifversion autolink-reference-alphanumeric %}![Campo para digitar a URL do sistema externo](/assets/images/help/repository/add-target-url-field-alphanumeric.png){% else %}![Campo para digitar a URL do sistema externo](/assets/images/help/repository/add-target-url-field.png){% endif %}
7. Clique em **Adicionar referência de link automático**.
{% ifversion autolink-reference-alphanumeric %}{% else %}![Botão para adicionar referência de link automático](/assets/images/help/repository/add-autolink-reference.png){% endif %}
