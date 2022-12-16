---
title: Gerenciar alertas da verificação de segredo
intro: Você pode visualizar e fechar alertas de segredos verificados para seu repositório.
permissions: People with admin access to a repository can view and dismiss alerts.
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
ms.openlocfilehash: f7c92b975d5bf8646b25d817564bff32ffc94e1c
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158666'
---
{% data reusables.secret-scanning.beta %}

## Gerenciando alertas de {% data variables.product.prodname_secret_scanning %}

{% ifversion ghec %} {% note %}

**Observação:** os alertas são criados somente para repositórios com a {% data variables.product.prodname_secret_scanning_GHAS %} habilitada. Os segredos encontrados em repositórios públicos que usam o serviço gratuito de {% data variables.product.prodname_secret_scanning_partner%} são informados diretamente ao parceiro, sem criar um alerta.

{% endnote %} {% endif %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %}
1. Na barra lateral esquerda, clique em **Alertas da verificação de segredos**.
   {% ifversion ghes or ghec %} ![Guia "Alertas da verificação de segredos"](/assets/images/help/repository/sidebar-secrets.png) {% endif %} {% ifversion ghae %} ![Guia "Alertas da verificação de segredos"](/assets/images/enterprise/github-ae/repository/sidebar-secrets-ghae.png) {% endif %}
1. Em "Escaneamento de segredos", clique no alerta que desejar visualizar.
   {% ifversion ghec %} ![Lista de alertas da verificação de segredos](/assets/images/help/repository/secret-scanning-click-alert.png) {% endif %} {% ifversion ghes %} ![Lista de alertas da verificação de segredos](/assets/images/help/repository/secret-scanning-click-alert-ghe.png) {% endif %} {% ifversion ghae %} ![Lista de alertas da verificação de segredos](/assets/images/enterprise/github-ae/repository/secret-scanning-click-alert-ghae.png) {% endif %}{% ifversion secret-scanning-dismissal-comment %}
1. Para ignorar um alerta, selecione o menu suspenso "Ignorar alerta" e clique em um motivo para resolver um alerta.

   ![Captura de tela do menu suspenso para ignorar um alerta da verificação de segredo](/assets/images/help/repository/secret-scanning-dismiss-alert.png){% else %}
1. Para ignorar um alerta, selecione o menu suspenso "marcar como" e clique em um motivo para resolver um alerta. 
  
   ![Captura de tela do menu suspenso para resolver um alerta da verificação de segredo](/assets/images/enterprise/3.2/repository/secret-scanning-resolve-alert-ghe.png)

   {% endif %}{% ifversion secret-scanning-dismissal-comment %}
1. Opcionalmente, adicione um comentário de ignorar. O comentário de ignorar será adicionado à linha do tempo do alerta e pode ser usado como justificativa em auditorias e relatórios. Você pode exibir o histórico de todos os alertas ignorados e comentários de demissão na linha do tempo do alerta. Você também pode recuperar ou definir um comentário usando a API do {% data variables.product.prodname_secret_scanning_caps %}. O comentário está contido no campo `resolution_comment`. Para obter mais informações, confira "[{% data variables.product.prodname_secret_scanning_caps %}](/rest/secret-scanning#update-a-secret-scanning-alert)" na documentação da API REST.

  ![Captura de tela mostrando como ignorar um alerta por meio do menu suspenso "Descartar alerta", com a opção de adicionar um comentário de ignorar](/assets/images/help/repository/secret-scanning-dismissal-comment.png)

1. Clique em **Ignorar alerta**.
{% endif %}

## Protegendo segredos comprometidos

Uma vez que um segredo tenha sido committed a um repositório, você deve considerar o segredo comprometido. O {% data variables.product.prodname_dotcom %} recomenda as seguintes ações para segredos comprometidos:

- Para um {% data variables.product.prodname_dotcom %} {% data variables.product.pat_generic %} comprometido, exclua o token comprometido, crie um novo token e atualize qualquer serviço que usa o token antigo. Para obter mais informações, confira "[Como criar um {% data variables.product.pat_generic %} para a linha de comando](/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)".
{%- ifversion token-audit-log %}
  - {% ifversion ghec %}Se a organização pertence a uma conta corporativa, identifique{% else %}Identifique{% endif %} todas as ações executadas pelo token comprometido nos recursos da empresa. Para obter mais informações, confira "[Como identificar eventos de log de auditoria executados por um token de acesso](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/identifying-audit-log-events-performed-by-an-access-token)".
{%- endif %}
- Para todos os outros segredos, primeiro, verifique se o segredo confirmado no {% data variables.product.product_name %} é válido. Nesse caso, crie um segredo, atualize todos os serviços que usam o segredo antigo e, em seguida, exclua o segredo antigo.

{% ifversion ghec %} {% note %}

**Observação:** se um segredo for detectado em um repositório público no {% data variables.product.prodname_dotcom_the_website %} e o segredo também corresponder a um padrão de parceiros, um alerta será gerado e o segredo potencial será relatado ao provedor de serviços. Para obter detalhes sobre os padrões de parceiros, confira "[Segredos compatíveis com padrões de parceiros"](/code-security/secret-scanning/secret-scanning-patterns#supported-secrets-for-partner-patterns).

{% endnote %} {% endif %}

## Configurando notificações para alertas de {% data variables.product.prodname_secret_scanning %}

Quando um novo segredo é detectado, o {% data variables.product.product_name %} notifica todos os usuários com acesso aos alertas de segurança do repositório de acordo com as preferências de notificação. Você receberá uma notificação por email se estiver inspecionando o repositório, se tiver habilitado as notificações de alertas de segurança ou de todas as atividades no repositório ou se você for o autor do commit que contém o segredo e não estiver ignorando o repositório.

Para obter mais informações, confira "[Como gerenciar as configurações de segurança e análise para seu repositório](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts)" e "[Como configurar notificações](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#configuring-your-watch-settings-for-an-individual-repository)".
