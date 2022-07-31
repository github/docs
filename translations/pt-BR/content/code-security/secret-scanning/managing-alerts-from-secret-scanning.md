---
title: Gerenciando alertas do escaneamento secreto
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
shortTitle: Gerenciar alertas de segredos
---

{% data reusables.secret-scanning.beta %}

## Gerenciando alertas de {% data variables.product.prodname_secret_scanning %}

{% ifversion ghec %}
{% note %}

**Nota:** Os alertas são criados apenas para repositórios com {% data variables.product.prodname_secret_scanning_GHAS %} habilitado. Os segredos encontrados em repositórios públicos que usam o serviço gratuito de {% data variables.product.prodname_secret_scanning_partner%} são informados diretamente ao parceiro, sem criar um alerta.

{% endnote %}
{% endif %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
1. Na barra lateral esquerda, clique em **Alertas de varredura de segredo**.
   {% ifversion fpt or ghes or ghec %}
   ![Aba "Alertas de varredura de segredo "](/assets/images/help/repository/sidebar-secrets.png)
   {% endif %}
   {% ifversion ghae %}
   ![Aba "Alertas de varredura de segredo "](/assets/images/enterprise/github-ae/repository/sidebar-secrets-ghae.png)
   {% endif %}
1. Em "Escaneamento de segredos", clique no alerta que desejar visualizar.
   {% ifversion fpt or ghec %}
   ![Lista de alertas do escaneamento secreto](/assets/images/help/repository/secret-scanning-click-alert.png)
   {% endif %}
   {% ifversion ghes %}
   ![Lista de alertas do escaneamento secreto](/assets/images/help/repository/secret-scanning-click-alert-ghe.png)
   {% endif %}
   {% ifversion ghae %}
   ![Lista de alertas do escaneamento secreto](/assets/images/enterprise/github-ae/repository/secret-scanning-click-alert-ghae.png)
   {% endif %}
1. Como alternativa, selecione o menu suspenso {% ifversion fpt or ghec %}"Fechar como"{% elsif ghes or ghae %}"Marcar como"{% endif %} e clique em um motivo para resolver um alerta.
   {% ifversion fpt or ghec %}
   ![Menu suspenso para resolver um alerta do escaneamento de segredo](/assets/images/help/repository/secret-scanning-resolve-alert.png)
   {% endif %}
   {% ifversion ghes or ghae %}
   ![Menu suspenso para resolver um alerta do escaneamento de segredo](/assets/images/help/repository/secret-scanning-resolve-alert-ghe.png)
   {% endif %}

## Protegendo segredos comprometidos

Uma vez que um segredo tenha sido committed a um repositório, você deve considerar o segredo comprometido. O {% data variables.product.prodname_dotcom %} recomenda as seguintes ações para segredos comprometidos:

- Para um token de acesso pessoal do {% data variables.product.prodname_dotcom %}, exclua o token comprometido, crie outro token e atualize os serviços que usam o token antigo. Para obter mais informações, consulte "[Criar um token de acesso pessoal para a linha de comando](/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)".
- Para todos os outros segredos, primeiro, verifique se o segredo commited para {% data variables.product.product_name %} é válido. Se sim, crie um novo segredo, atualize quaisquer serviços que utilizam o segredo antigo, e depois exclua o segredo antigo.

{% ifversion ghec %}
{% note %}

**Nota:** Se um segredo for detectado em um repositório público em {% data variables.product.prodname_dotcom_the_website %} e o segredo também corresponder ao padrão de um parceiro, será gerado um alerta e o segredo potencial será informado ao provedor de serviços. Para obter detalhes sobre os padrões de parceiros, consulte "[segredos compatíveis com os padrões de parceiro](/code-security/secret-scanning/secret-scanning-patterns#supported-secrets-for-partner-patterns)".

{% endnote %}
{% endif %}

{% ifversion fpt or ghes or ghae-issue-4910 or ghec %}
## Configurando notificações para alertas de {% data variables.product.prodname_secret_scanning %}

Quando um novo segredo é detectado, {% data variables.product.product_name %} notifica todos os usuários com acesso a alertas de segurança para o repositório, de acordo com suas preferências de notificação. Você receberá uma notificação por e-mail se estiver inspecionando o repositório, tiver habilitado as notificações para alertas de segurança ou para todas as atividades no repositório, ou for o autor do commit que contém o segredo e não estiver ignorando o repositório.

Para obter mais informações, consulte "[Gerenciar configurações de segurança e análise do repositório](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts)" e "[Configurar notificações](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#configuring-your-watch-settings-for-an-individual-repository)".
{% endif %}
