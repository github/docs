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
ms.openlocfilehash: e40c6453934c4b80157c46a08784aab850ccc837
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147066471'
---
## Habilitar limites de taxa para a {% data variables.product.prodname_enterprise_api %}

Habilitar limites de taxa na {% data variables.product.prodname_enterprise_api %} pode impedir o uso excessivo de recursos por usuários individuais ou não autenticados. Para obter mais informações, confira "[Recursos da API REST](/rest/overview/resources-in-the-rest-api#rate-limiting)".

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

## Habilitar limites de taxa secundária

A configuração dos limites de taxa secundária protege o nível geral do serviço em {% data variables.product.product_location %}.

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% ifversion ghes %}
2. Em "Limitação de Taxa", selecione **Habilitar Limitação de Taxa Secundária**.
   ![Caixa de seleção usada para habilitar a limitação de taxa secundária](/assets/images/enterprise/management-console/secondary-rate-limits-checkbox.png) {% else %}
2. Em "Limitação de Taxa", selecione **Habilitar Limitação de Taxa de Abuso**.
    ![Caixa de seleção usada para habilitar a limitação da taxa de abuso](/assets/images/enterprise/management-console/abuse-rate-limits-checkbox.png) {% endif %}
3. Informe os limites para Solicitações totais, Limite de CPU e Limite de CPU para pesquisa ou aceite os limites padrão sugeridos.
{% data reusables.enterprise_management_console.save-settings %}

## Habilitar limites de taxa para Git

É possível aplicar limites de taxa do Git por rede de repositório ou ID do usuário. Os limites da taxa do Git são expressos em operações simultâneas por minuto e são adaptáveis com base na carga atual da CPU.

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %}
2. Em "Limitação de Taxa", selecione **Habilitar Limitação de Taxa do Git**.
![Caixa de seleção usada para habilitar a limitação de taxa do Git](/assets/images/enterprise/management-console/git-rate-limits-checkbox.png)
3. Digite limites para cada rede de repositório ou ID do usuário.
  ![Campos usados para a rede de repositório e os limites da ID de usuário](/assets/images/enterprise/management-console/example-git-rate-limits.png) {% data reusables.enterprise_management_console.save-settings %}

{% ifversion ghes > 3.4 %}

## Configurar limites de taxa para {% data variables.product.prodname_actions %}

Você pode aplicar um limite de taxa a execuções de fluxo de trabalho de {% data variables.product.prodname_actions %}. Para obter mais informações sobre {% data variables.product.prodname_actions %}, confira "[Sobre {% data variables.product.prodname_actions %} para empresas](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/about-github-actions-for-enterprises)".

### Sobre os limites de taxa para {% data variables.product.prodname_actions %}

Sua instância do {% data variables.product.product_name %} atribui cada trabalho de fluxo de trabalho {% data variables.product.prodname_actions %} a um executor. Se a sua instância não puder atribuir imediatamente um trabalho a um executor disponível, o trabalho aguardará em uma fila até que um executor esteja disponível. Se {% data variables.product.prodname_actions %} sofrer uma carga alta sustentada, a fila poderá fazer backup e o desempenho de {% data variables.product.product_location %} poderá diminuir.

Para evitar essa degradação de desempenho, você pode configurar um limite de taxa para {% data variables.product.prodname_actions %}. Esse limite de taxa é expresso em execuções de trabalho por minuto. {% data variables.product.product_name %} calcula e aplica o limite de taxa para a soma total de todas as execuções de trabalho na instância. Se as execuções excederem o limite de taxa, as execuções adicionais falharão em vez de entrar na fila. O erro a seguir aparecerá nas anotações da execução.

> Você excedeu o limite de taxa para solicitações de execução de fluxo de trabalho. Aguarde antes de tentar a execução novamente.

Um limite de taxa apropriado protege {% data variables.product.product_location %} do uso anormal de {% data variables.product.prodname_actions %} sem interferir nas operações diárias. O limite exato depende dos recursos disponíveis da instância e do perfil de carga geral. Para obter mais informações sobre os requisitos de hardware do {% data variables.product.prodname_actions %}, confira "[Introdução ao {% data variables.product.prodname_actions %} for {% data variables.product.product_name %}](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server#review-hardware-requirements)."

Por padrão, o limite de taxa para {% data variables.product.prodname_actions %} está desabilitado. Como o {% data variables.product.product_name %} pode lidar com picos temporários de uso sem degradação de desempenho, esse limite de taxa destina-se a proteger contra carga alta sustentada. Recomendamos deixar o limite de taxa desabilitado, a menos que você esteja enfrentando problemas de desempenho. Em alguns casos, {% data variables.contact.github_support %} pode recomendar que você ative um limite de taxa para {% data variables.product.prodname_actions %}. 

### Habilitar ou desabilitar limites de taxa para {% data variables.product.prodname_actions %}

{% data reusables.enterprise_installation.ssh-into-instance %}
1. Para habilitar e configurar o limite de taxa, execute os dois comandos a seguir, substituindo **RUNS-PER-MINUTE** pelo valor de sua escolha.

   ```shell
   ghe-config actions-rate-limiting.enabled true
   ghe-config actions-rate-limiting.queue-runs-per-minute <em>RUNS-PER-MINUTE</em>
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
