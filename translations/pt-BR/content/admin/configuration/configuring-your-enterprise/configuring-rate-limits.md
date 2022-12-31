---
title: Como configurar limites de taxa
intro: 'É possível definir limites de taxa no {% data variables.product.prodname_ghe_server %} usando o {% data variables.enterprise.management_console %}.'
redirect_from:
  - /enterprise/admin/installation/configuring-rate-limits
  - /enterprise/admin/configuration/configuring-rate-limits
  - /admin/configuration/configuring-rate-limits
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Infrastructure
  - Performance
ms.openlocfilehash: 2a90093f833639fa247acc7292d9897728043005
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107546'
---
## Habilitar limites de taxa para a {% data variables.product.prodname_enterprise_api %}

A habilitação de limites de taxa na {% data variables.product.prodname_enterprise_api %} pode impedir o uso excessivo de recursos por usuários individuais ou não autenticados. Para obter mais informações, confira "[Recursos da API REST](/rest/overview/resources-in-the-rest-api#rate-limiting)".

{% ifversion ghes %} Você pode isentar uma lista de usuários dos limites de taxa de API usando o utilitário `ghe-config` no shell administrativo. Para obter mais informações, confira "[Utilitários de linha de comando](/enterprise/admin/configuration/command-line-utilities#ghe-config)".
{% endif %}

{% note %}

**Observação:** o {% data variables.enterprise.management_console %} lista o período (por minuto ou por hora) de cada limite de taxa.

{% endnote %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %}
2. Em "Limitação de Taxa", selecione **Habilitar Limitação de Taxa da API HTTP**.
![Caixa de seleção usada para habilitar a limitação de taxa da API](/assets/images/enterprise/management-console/api-rate-limits-checkbox.png)
3. Informe os limites para solicitações autenticadas e não autenticadas de cada API ou aceite os limites padrão sugeridos.
{% data reusables.enterprise_management_console.save-settings %}

{% ifversion enterprise-authentication-rate-limits %}
## Como configurar limites de taxa para autenticação no {% data variables.enterprise.management_console %}

Você pode configurar o tempo de bloqueio e os limites de tentativa de logon para o {% data variables.enterprise.management_console %}. Se um usuário exceder o limite de tentativa de logon, o {% data variables.enterprise.management_console %} permanecerá bloqueado durante o período definido pelo tempo de bloqueio. {% data reusables.enterprise_management_console.unlocking-management-console-with-shell %}


{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %}
2. Em "Limite de taxa de tentativa de logon", configure o tempo de bloqueio e o limite de taxa de tentativa de logon ou aceite as configurações padrão já preenchidas.
![Campos para configurar o tempo de bloqueio e o limite de taxa de tentativa de logon](/assets/images/enterprise/management-console/login-attempt-rate-limiting.png) {% data reusables.enterprise_management_console.save-settings %}

{% endif %}
## Habilitar limites de taxa secundária

A configuração dos limites de taxa secundária protege o nível geral do serviço em {% data variables.location.product_location %}.

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% ifversion ghes %}
2. Em "Limitação de Taxa", selecione **Habilitar Limitação de Taxa Secundária**.
   ![Caixa de seleção usada para habilitar a limitação de taxa secundária](/assets/images/enterprise/management-console/secondary-rate-limits-checkbox.png) {% else %}
2. Em "Limitação de Taxa", selecione **Habilitar Limitação de Taxa de Abuso**.
    ![Caixa de seleção usada para habilitar a limitação da taxa de abuso](/assets/images/enterprise/management-console/abuse-rate-limits-checkbox.png) {% endif %}
3. Informe os limites para Solicitações totais, Limite de CPU e Limite de CPU para pesquisa ou aceite os limites padrão sugeridos.
{% data reusables.enterprise_management_console.save-settings %}

## Habilitar limites de taxa para Git

Se um membro da equipe do {% data variables.product.company_short %} tiver recomendado isso, você poderá aplicar limites de taxa do Git por rede de repositório ou por ID de usuário. Os limites da taxa do Git são expressos em operações simultâneas por minuto e são adaptáveis com base na carga atual da CPU.

{% warning %}

**Aviso:** recomendamos que você deixe essa configuração desabilitada, a menos que seja recomendado diretamente por um membro da equipe do {% data variables.product.company_short %}. As operações do Git raramente são o que mais gera uso de CPU e RAM. A habilitação desse recurso pode aumentar a propensão a falhas das operações do Git em condições de alta carga, mas não aborda a causa subjacente dessas condições.

{% endwarning %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %}
2. Em "Limitação de Taxa", selecione **Habilitar Limitação de Taxa do Git**.
![Caixa de seleção usada para habilitar a limitação de taxa do Git](/assets/images/enterprise/management-console/git-rate-limits-checkbox.png)
3. Digite limites para cada rede de repositório ou ID do usuário.
  ![Campos usados para a rede de repositório e os limites da ID de usuário](/assets/images/enterprise/management-console/example-git-rate-limits.png) {% data reusables.enterprise_management_console.save-settings %}

{% ifversion ghes > 3.4 %}

## Configurar limites de taxa para {% data variables.product.prodname_actions %}

Você pode aplicar um limite de taxa a execuções de fluxo de trabalho de {% data variables.product.prodname_actions %}. Para obter mais informações sobre {% data variables.product.prodname_actions %}, confira "[Sobre {% data variables.product.prodname_actions %} para empresas](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/about-github-actions-for-enterprises)".

### Sobre os limites de taxa para {% data variables.product.prodname_actions %}

Sua instância do {% data variables.product.product_name %} atribui cada trabalho de fluxo de trabalho {% data variables.product.prodname_actions %} a um executor. Se a sua instância não puder atribuir imediatamente um trabalho a um executor disponível, o trabalho aguardará em uma fila até que um executor esteja disponível. Se o {% data variables.product.prodname_actions %} ficar uma carga alta continua, a fila poderá fazer backup e o desempenho da {% data variables.location.product_location %}} poderá diminuir.

Para evitar essa degradação de desempenho, você pode configurar um limite de taxa para {% data variables.product.prodname_actions %}. Esse limite de taxa é expresso em execuções de trabalho por minuto. {% data variables.product.product_name %} calcula e aplica o limite de taxa para a soma total de todas as execuções de trabalho na instância. Se as execuções excederem o limite de taxa, as execuções adicionais falharão em vez de entrar na fila. O erro a seguir aparecerá nas anotações da execução.

> Você excedeu o limite de taxa para solicitações de execução de fluxo de trabalho. Aguarde antes de tentar a execução novamente.

Um limite de taxa apropriado protege a {% data variables.location.product_location %} contra o uso anormal do {% data variables.product.prodname_actions %} sem interferir nas operações diárias. O limite exato depende dos recursos disponíveis da instância e do perfil de carga geral. Para obter mais informações sobre os requisitos de hardware do {% data variables.product.prodname_actions %}, confira "[Introdução ao {% data variables.product.prodname_actions %} for {% data variables.product.product_name %}](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server#review-hardware-requirements)."

Por padrão, o limite de taxa para {% data variables.product.prodname_actions %} está desabilitado. Como o {% data variables.product.product_name %} pode lidar com picos temporários de uso sem degradação de desempenho, esse limite de taxa destina-se a proteger contra carga alta sustentada. Recomendamos deixar o limite de taxa desabilitado, a menos que você esteja enfrentando problemas de desempenho. Em alguns casos, {% data variables.contact.github_support %} pode recomendar que você ative um limite de taxa para {% data variables.product.prodname_actions %}. 

### Habilitar ou desabilitar limites de taxa para {% data variables.product.prodname_actions %}

{% data reusables.enterprise_installation.ssh-into-instance %}
1. Para habilitar e configurar o limite de taxa, execute os dois comandos a seguir, substituindo **RUNS-PER-MINUTE** pelo valor de sua escolha.

   ```shell
   ghe-config actions-rate-limiting.enabled true
   ghe-config actions-rate-limiting.queue-runs-per-minute RUNS-PER-MINUTE
   ```
1. Para desabilitar o limite de taxa depois de habilitado, execute o comando a seguir.

   ```
   ghe-config actions-rate-limiting.enabled false
   ```
1. Para aplicar a configuração, execute o comando a seguir.

   ```
   ghe-config-apply
   ```
1. Aguarde a conclusão da execução de suas configurações.

{% endif %}
