---
title: Habilitar e programar o modo de manutenção
intro: 'Alguns procedimentos de manutenção padrão, como atualizar {% data variables.product.product_location %} ou restaurar backups, exigem que a instância seja colocada offline para uso normal.'
redirect_from:
  - /enterprise/admin/maintenance-mode
  - /enterprise/admin/categories/maintenance-mode
  - /enterprise/admin/articles/maintenance-mode
  - /enterprise/admin/articles/enabling-maintenance-mode
  - /enterprise/admin/articles/disabling-maintenance-mode
  - /enterprise/admin/guides/installation/maintenance-mode
  - /enterprise/admin/installation/enabling-and-scheduling-maintenance-mode
  - /enterprise/admin/configuration/enabling-and-scheduling-maintenance-mode
  - /admin/configuration/enabling-and-scheduling-maintenance-mode
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Maintenance
  - Upgrades
shortTitle: Configure maintenance mode
ms.openlocfilehash: 45ac412b1ae13e69d710c4dd93072143f6ffa502
ms.sourcegitcommit: 1309b46201604c190c63bfee47dce559003899bf
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '146331765'
---
## Sobre o modo de manutenção

Alguns tipos de operações exigem que você coloque o {% data variables.product.product_location %} offline e no modo de manutenção:
- Atualizar para uma nova versão do {% data variables.product.prodname_ghe_server %};
- Aumentar a capacidade dos recursos de CPU, memória ou armazenamento alocados na máquina virtual;
- Migrar dados de uma máquina virtual para outra;
- Restaurar dados de um instantâneo do {% data variables.product.prodname_enterprise_backup_utilities %};
- Solucionar determinados tipos de problemas graves no aplicativo.

É recomendável programar um período de manutenção de no mínimo 30 minutos para que os usuários tenham tempo de se preparar. Quando houver um período de manutenção programado, todos os usuários verão um banner ao acessar o site.



![Banner para usuário final sobre manutenção programada](/assets/images/enterprise/maintenance/maintenance-scheduled.png)

Quando a instância estiver em modo de manutenção, todos os acessos regulares por HTTP e Git serão recusados. Operações de fetch, clonagem e push também são rejeitadas, e uma mensagem de erro indicará que o site está temporariamente indisponível. Em configurações de alta disponibilidade, a replicação do Git será colocada em pausa. Os trabalhos com GitHub Actions não serão executados. O acesso ao site por navegador levará a uma página de manutenção.

![Tela inicial do modo de manutenção](/assets/images/enterprise/maintenance/maintenance-mode-maintenance-page.png)

{% ifversion ip-exception-list %}

Você pode executar a validação inicial de sua operação de manutenção configurando uma lista de exceções de IP para permitir o acesso ao {% data variables.product.product_location %} somente dos endereços IP e intervalos fornecidos. As tentativas de acessar o {% data variables.product.product_location %} de endereços IP não especificados na lista de exceções de IP receberão uma resposta consistente com as enviadas quando a instância estiver no modo de manutenção. 

{% endif %}

## Habilitar o modo de manutenção imediatamente ou programar um período de manutenção mais tarde

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %}
2. Na parte superior do {% data variables.enterprise.management_console %}, clique em **Manutenção**.
  ![Guia Manutenção](/assets/images/enterprise/management-console/maintenance-tab.png)
3. Em "Enable and schedule" (Habilitar e programar), decida se você quer habilitar o modo de manutenção imediatamente ou programar um período de manutenção depois.
    - Para habilitar o modo de manutenção imediatamente, use o menu suspenso e clique em **Agora**.
    ![Menu suspenso com a opção para habilitar o modo de manutenção agora selecionado](/assets/images/enterprise/maintenance/enable-maintenance-mode-now.png)
    - Para programar um período de manutenção depois, use o menu suspenso e clique no horário em que você pretende iniciar o período de manutenção.
    ![Menu suspenso com a opção para habilitar o modo de manutenção em duas horas selecionado](/assets/images/enterprise/maintenance/schedule-maintenance-mode-two-hours.png)
4. Selecione **Habilitar modo de manutenção**.
  ![Caixa de seleção usada para habilitar ou agendar o modo de manutenção](/assets/images/enterprise/maintenance/enable-maintenance-mode-checkbox.png) {% data reusables.enterprise_management_console.save-settings %}

{% ifversion ip-exception-list %}

## Validando alterações no modo de manutenção usando a lista de exceções de IP

A lista de exceções de IP fornece acesso controlado e restrito ao {% data variables.product.product_location %}, ideal para validação inicial da integridade do servidor após uma operação de manutenção. Depois de habilitada, o {% data variables.product.product_location %} será retirado do modo de manutenção e ficará disponível somente para os endereços IP configurados. A caixa de seleção do modo de manutenção será atualizada para refletir a alteração no estado.

Se você reabilitar o modo de manutenção, a lista de exceções de IP será desabilitada e o {% data variables.product.product_location %} retornará ao modo de manutenção. Se você simplesmente desabilitar a lista de exceções de IP, o {% data variables.product.product_location %} retornará à operação normal.

Você também pode usar um utilitário de linha de comando para configurar a lista de exceções de IP. Para obter mais informações, confira "[Utilitários de linha de comando](/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-maintenance)" e "[Como acessar o shell administrativo (SSH)](/admin/configuration/configuring-your-enterprise/accessing-the-administrative-shell-ssh)".

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %}
1. Na parte superior do {% data variables.enterprise.management_console %}, clique em **Manutenção** e confirme se o modo de manutenção já está habilitado.
  ![Guia Manutenção](/assets/images/enterprise/management-console/maintenance-tab.png)
1. Selecione **Habilitar lista de exceções de IP**.
 ![Caixa de seleção para habilitar a lista de exceções de IP](/assets/images/enterprise/maintenance/enable-ip-exception-list.png)
1. Na caixa de texto, digite uma lista válida de endereços IP separados por espaço ou blocos CIDR que devem ter permissão para acessar o {% data variables.product.product_location %}.
 ![campo preenchido com endereços IP](/assets/images/enterprise/maintenance/ip-exception-list-ip-addresses.png)
1. Clique em **Salvar**.
![depois que a lista de exceções de IP tiver sido salva](/assets/images/enterprise/maintenance/ip-exception-save.png)

{% endif %}

## Programar o modo de manutenção com a {% data variables.product.prodname_enterprise_api %}

Você pode programar o modo de manutenção para horas ou datas diferentes na {% data variables.product.prodname_enterprise_api %}. Para obter mais informações, confira "[Console de Gerenciamento](/enterprise/user/rest/reference/enterprise-admin#enable-or-disable-maintenance-mode)".

## Habilitar ou desabilitar o modo de manutenção para todos os nós do cluster

Com o utilitário `ghe-cluster-maintenance`, você pode definir o modo de manutenção para cada nó em um cluster ou cancelar a definição dele.

```shell
$ ghe-cluster-maintenance -h
# Shows options
$ ghe-cluster-maintenance -q
# Queries the current mode
$ ghe-cluster-maintenance -s
# Sets maintenance mode
$ ghe-cluster-maintenance -u
# Unsets maintenance mode
```
