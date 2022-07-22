---
title: Habilitar e programar o modo de manutenção
intro: 'Alguns procedimentos de manutenção padrão, como atualizar a {% data variables.product.product_location %} ou fazer backups de restauração, exigem que a instância esteja offline para uso normal.'
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
shortTitle: Configurar modo de manutenção
---

## Sobre o modo de manutenção

Alguns tipos de operações requerem que a {% data variables.product.product_location %} esteja offline e no modo de manutenção:
- Atualizar para uma nova versão do {% data variables.product.prodname_ghe_server %};
- Aumentar a capacidade dos recursos de CPU, memória ou armazenamento alocados na máquina virtual;
- Migrar dados de uma máquina virtual para outra;
- Restaurar dados de um instantâneo do {% data variables.product.prodname_enterprise_backup_utilities %};
- Solucionar determinados tipos de problemas graves no aplicativo.

É recomendável programar um período de manutenção de no mínimo 30 minutos para que os usuários tenham tempo de se preparar. Quando houver um período de manutenção programado, todos os usuários verão um banner ao acessar o site.



![Banner para usuário final sobre manutenção programada](/assets/images/enterprise/maintenance/maintenance-scheduled.png)

Quando a instância estiver em modo de manutenção, todos os acessos regulares por HTTP e Git serão recusados. Operações de fetch, clonagem e push também são rejeitadas, e uma mensagem de erro indicará que o site está temporariamente indisponível. Em configurações de alta disponibilidade, a replicação do Git será pausada. Os trabalhos com GitHub Actions não serão executados. O acesso ao site por navegador levará a uma página de manutenção.

![Tela inicial do modo de manutenção](/assets/images/enterprise/maintenance/maintenance-mode-maintenance-page.png)

{% ifversion ip-exception-list %}

Você pode executar a validação inicial da sua operação de manutenção configurando uma lista de exceção de IP para permitir acesso a {% data variables.product.product_location %} apenas dos endereços IP e das faixas fornecidas. As tentativas de acessar {% data variables.product.product_location %} de endereços IP não especificados na lista de exceções IP receverão uma resposta consistente com aquelas enviadas quando a instância estiver em modo de manutenção.

{% endif %}

## Habilitar o modo de manutenção imediatamente ou programar um período de manutenção mais tarde

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
2. Na parte superior do {% data variables.enterprise.management_console %}, clique em **Maintenance** (Manutenção). ![Guia de manutenção](/assets/images/enterprise/management-console/maintenance-tab.png)
3. Em "Enable and schedule" (Habilitar e programar), decida se você quer habilitar o modo de manutenção imediatamente ou programar um período de manutenção depois.
    - Para habilitar o modo de manutenção imediatamente, use o menu suspenso e clique em **Now** (Agora). ![Menu suspenso com a opção para habilitar o modo de manutenção agora](/assets/images/enterprise/maintenance/enable-maintenance-mode-now.png)
    - Para programar um período de manutenção depois, use o menu suspenso e clique no horário em que você pretende iniciar o período de manutenção.![Menu suspenso com a opção para habilitar o modo de manutenção em duas horas](/assets/images/enterprise/maintenance/schedule-maintenance-mode-two-hours.png)
4. Selecione **Enable maintenance mode** (Habilitar modo de manutenção). ![Caixa de seleção para habilitar ou programar o modo de manutenção](/assets/images/enterprise/maintenance/enable-maintenance-mode-checkbox.png)
{% data reusables.enterprise_management_console.save-settings %}

{% ifversion ip-exception-list %}

## Validando alterações no modo de manutenção usando a lista de exceção de IP

A lista de exceções de IP fornece acesso controlado e restrito a {% data variables.product.product_location %}, o que é ideal para validação inicial de saúde do servidor após uma operação de manutenção. Uma vez habilitado, {% data variables.product.product_location %} será retirado do modo de manutenção e disponibilizado apenas para os endereços IP configurados. A caixa de seleção do modo de manutenção será atualizada para refletir a alteração no estado.

Se você reabilitar o modo de manutenção, a lista de exceções de IP será desabilitada e {% data variables.product.product_location %} retornará ao modo de manutenção. Se você desabilitar a lista de exceção de IP, {% data variables.product.product_location %} retornará para a operação normal.

Você também pode usar um utilitário de linha de comando para configurar a lista de exceção de IP. Para obter mais informações, consulte "[Utilitários de linha de comando](/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-maintenance)" e "[Acessando o shell administrativo (SSH)](/admin/configuration/configuring-your-enterprise/accessing-the-administrative-shell-ssh)".

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
1. Na parte superior do {% data variables.enterprise.management_console %}, clique em **Manutenção** e confirme que o modo de manutenção já está habilitado. ![Guia de manutenção](/assets/images/enterprise/management-console/maintenance-tab.png)
1. Selecione **Habilitar lista de exceção de IP**. ![Caixa de seleção para habilitar lista de exceções de IP](/assets/images/enterprise/maintenance/enable-ip-exception-list.png)
1. Na caixa de texto, digite uma lista válida de endereços IP separados por espaço ou blocos CIDR que devem ter permissão para acessar {% data variables.product.product_location %}. ![campo concluído para endereços IP](/assets/images/enterprise/maintenance/ip-exception-list-ip-addresses.png)
1. Clique em **Salvar**. ![após a lista de excetpion IP ter salvo](/assets/images/enterprise/maintenance/ip-exception-save.png)

{% endif %}

## Programar o modo de manutenção com a {% data variables.product.prodname_enterprise_api %}

Você pode programar o modo de manutenção para horas ou datas diferentes na {% data variables.product.prodname_enterprise_api %}. Para obter mais informações, consulte "[Console de gerenciamento](/enterprise/user/rest/reference/enterprise-admin#enable-or-disable-maintenance-mode)".

## Habilitar ou desabilitar o modo de manutenção para todos os nós do cluster

Com o utilitário `ghe-cluster-maintenance`, você pode definir ou cancelar as definições do modo de manutenção para cada nó de um cluster.

```shell
$ ghe-cluster-maintenance -h
# Mostra opções
$ ghe-cluster-maintenance -q
# Consultas no modo atual
$ ghe-cluster-maintenance -s
# Define o modo de manutenção
$ ghe-cluster-maintenance -u
# Cancela a definição do modo de manutenção
```
