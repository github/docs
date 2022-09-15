---
title: Gerenciar alertas da verificação de segredo
intro: Você pode visualizar e fechar alertas de segredos verificados para seu repositório.
product: '{% data reusables.gated-features.secret-scanning %}'
redirect_from:
  - /github/administering-a-repository/managing-alerts-from-secret-scanning
  - /code-security/secret-security/managing-alerts-from-secret-scanning
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Secret scanning
  - Advanced Security
  - Alerts
  - Repositories
shortTitle: Manage secret alerts
ms.openlocfilehash: 537b3673145dddcb3babbb606c2ac97aab6a9cb8
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147063551'
---
{% data reusables.secret-scanning.beta %}

## Gerenciando alertas de {% data variables.product.prodname_secret_scanning %}

{% ifversion ghec %} {% note %}

**Observação:** os alertas são criados somente para repositórios com a {% data variables.product.prodname_secret_scanning_GHAS %} habilitada. Os segredos encontrados em repositórios públicos que usam o serviço gratuito de {% data variables.product.prodname_secret_scanning_partner%} são informados diretamente ao parceiro, sem criar um alerta.

{% endnote %} {% endif %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %}
1. Na barra lateral esquerda, clique em **Alertas da verificação de segredos**.
   {% ifversion fpt or ghes or ghec %} ![Guia "Alertas da verificação de segredos"](/assets/images/help/repository/sidebar-secrets.png) {% endif %} {% ifversion ghae %} ![Guia "Alertas da verificação de segredos"](/assets/images/enterprise/github-ae/repository/sidebar-secrets-ghae.png) {% endif %}
1. Em "Escaneamento de segredos", clique no alerta que desejar visualizar.
   {% ifversion fpt or ghec %} ![Lista de alertas da verificação de segredos](/assets/images/help/repository/secret-scanning-click-alert.png) {% endif %} {% ifversion ghes %} ![Lista de alertas da verificação de segredos](/assets/images/help/repository/secret-scanning-click-alert-ghe.png) {% endif %} {% ifversion ghae %} ![Lista de alertas da verificação de segredos](/assets/images/enterprise/github-ae/repository/secret-scanning-click-alert-ghae.png) {% endif %}
1. Como alternativa, selecione o menu suspenso {% ifversion fpt or ghec %}"Fechar como"{% elsif ghes or ghae %}"Marcar como"{% endif %} e clique em um motivo para resolver um alerta.
   {% ifversion fpt or ghec %} ![Menu suspenso usado para resolver um alerta da verificação de segredos](/assets/images/help/repository/secret-scanning-resolve-alert.png) {% endif %} {% ifversion ghes or ghae %} ![Menu suspenso usado para resolver um alerta da verificação de segredos](/assets/images/help/repository/secret-scanning-resolve-alert-ghe.png) {% endif %}

## Protegendo segredos comprometidos

Uma vez que um segredo tenha sido committed a um repositório, você deve considerar o segredo comprometido. O {% data variables.product.prodname_dotcom %} recomenda as seguintes ações para segredos comprometidos:

- Para um token de acesso pessoal do {% data variables.product.prodname_dotcom %}, exclua o token comprometido, crie outro token e atualize os serviços que usam o token antigo. Para obter mais informações, confira "[Como criar um token de acesso pessoal para a linha de comando](/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)".
- Para todos os outros segredos, primeiro, verifique se o segredo confirmado no {% data variables.product.product_name %} é válido. Nesse caso, crie um segredo, atualize todos os serviços que usam o segredo antigo e, em seguida, exclua o segredo antigo.

{% ifversion ghec %} {% note %}

**Observação:** se um segredo for detectado em um repositório público no {% data variables.product.prodname_dotcom_the_website %} e o segredo também corresponder a um padrão de parceiros, um alerta será gerado e o segredo potencial será relatado ao provedor de serviços. Para obter detalhes sobre os padrões de parceiros, confira "[Segredos compatíveis com padrões de parceiros"](/code-security/secret-scanning/secret-scanning-patterns#supported-secrets-for-partner-patterns).

{% endnote %} {% endif %}

{% ifversion fpt or ghes or ghae-issue-4910 or ghec %}
## Configurando notificações para alertas de {% data variables.product.prodname_secret_scanning %}

Quando um novo segredo é detectado, o {% data variables.product.product_name %} notifica todos os usuários com acesso aos alertas de segurança do repositório de acordo com as preferências de notificação. Você receberá uma notificação por email se estiver inspecionando o repositório, se tiver habilitado as notificações de alertas de segurança ou de todas as atividades no repositório ou se você for o autor do commit que contém o segredo e não estiver ignorando o repositório.

Para obter mais informações, confira "[Como gerenciar as configurações de segurança e análise para seu repositório](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts)" e "[Como configurar notificações](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#configuring-your-watch-settings-for-an-individual-repository)".
{% endif %}
