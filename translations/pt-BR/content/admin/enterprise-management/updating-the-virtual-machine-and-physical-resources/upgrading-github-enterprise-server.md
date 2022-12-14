---
title: Atualizar o GitHub Enterprise Server
intro: 'Atualize o {% data variables.product.prodname_ghe_server %} para usar os recursos e atualizações de segurança mais recentes.'
redirect_from:
  - /enterprise/admin/installation/upgrading-github-enterprise-server
  - /enterprise/admin/articles/upgrading-to-the-latest-release
  - /enterprise/admin/articles/migrations-and-upgrades
  - /enterprise/admin/guides/installation/upgrading-the-github-enterprise-virtual-machine
  - /enterprise/admin/guides/installation/upgrade-packages-for-older-releases
  - /enterprise/admin/articles/upgrading-older-installations
  - /enterprise/admin/hidden/upgrading-older-installations
  - /enterprise/admin/hidden/upgrading-github-enterprise-using-a-hotpatch-early-access-program
  - /enterprise/admin/hidden/upgrading-github-enterprise-using-a-hotpatch
  - /enterprise/admin/guides/installation/upgrading-github-enterprise
  - /enterprise/admin/enterprise-management/upgrading-github-enterprise-server
  - /admin/enterprise-management/upgrading-github-enterprise-server
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Upgrades
shortTitle: Upgrading GHES
ms.openlocfilehash: cbbeff601bfbbdf828ed4c5fc019c5e3bf849614
ms.sourcegitcommit: 30b0931723b704e219c736e0de7afe0fa799da29
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/30/2022
ms.locfileid: '148186424'
---
## Preparar para a atualização

1. Determine uma estratégia de atualização e escolha uma versão para atualizar. Para obter mais informações, confira "[Requisitos de atualização](/enterprise/{{ currentVersion }}/admin/guides/installation/upgrade-requirements/)" e veja o [{% data variables.enterprise.upgrade_assistant %}](https://support.github.com/enterprise/server-upgrade) para localizar o caminho de atualização da versão atual.
1. Crie um backup da instância primária usando o {% data variables.product.prodname_enterprise_backup_utilities %}. Para obter mais informações, confira o [arquivo README.md](https://github.com/github/backup-utils#readme) na documentação do projeto do {% data variables.product.prodname_enterprise_backup_utilities %}.

  {% note %}

  **Observação:** sua versão do {% data variables.product.prodname_enterprise_backup_utilities %} precisa ser a mesma versão ou no máximo duas versões posteriores de {% data variables.location.product_location %}. Para obter mais informações, confira "[Atualizar Utilitários de Backup do GitHub Enterprise Server](/admin/configuration/configuring-your-enterprise/configuring-backups-on-your-appliance#upgrading-github-enterprise-server-backup-utilities)".

  {% endnote %}

1. Se a {% data variables.location.product_location %} usar executores efêmeros auto-hospedados para o {% data variables.product.prodname_actions %} e você tiver desabilitado as atualizações automáticas, atualize os executores para a versão do aplicativo executor que a instância atualizada executará.
1. Se você estiver atualizando com um pacote de atualização, programe um período de manutenção para os usuários finais do {% data variables.product.prodname_ghe_server %}. Se estiver usando um hotpatch, não será necessário recorrer ao modo de manutenção.

  {% note %}

  **Observação:** a janela de manutenção depende do tipo de atualização a ser feita. Atualizações com hotpatch normalmente não exigem período de manutenção. É preciso reinicializar a instância em alguns casos, mas o processo pode ser feito em outro momento. Seguindo o esquema de versões do MAJOR.FEATURE.PATCH, as versões de patch que usam pacote de atualização costumam gerar menos de cinco minutos de tempo de inatividade. Versões de recursos que incluem migrações de dados levam mais tempo, dependendo do desempenho do armazenamento e da quantidade de dados migrados. Para obter mais informações, confira "[Como habilitar e agendar o modo de manutenção](/enterprise/admin/guides/installation/enabling-and-scheduling-maintenance-mode)".

  {% endnote %}

## Obter um instantâneo

Instantâneo é um ponto de verificação de uma máquina virtual (VM) em um momento específico. É altamente recomendável obter um instantâneo antes de atualizar sua máquina virtual para que você possa recuperar a VM em caso de falha. Apenas recomendamos tirar um instantâneo da VM quando o dispositivo estiver desligado ou em modo de manutenção e todos os trabalhos em segundo plano estiverem concluídos.

Se você estiver atualizando para uma nova versão do recurso, obtenha um instantâneo da VM. Se você estiver atualizando para uma versão de patch, vincule o disco de dados existente. 

Há dois tipos de instantâneo:

- Os **instantâneos de VM** salvam todo o estado da VM, incluindo os dados do usuário e da configuração. Esse método de instantâneo é demorado e requer muito espaço livre em disco.
- Os **instantâneos de disco de dados** salvam apenas os dados do usuário.

  {% note %}

  **Observações:**
  - Algumas plataformas não permitem usar instantâneos apenas do disco de dados. Nesse caso, você terá que obter um instantâneo de toda a VM.
  - Se o hipervisor não der suporte a instantâneos completos de VM, obtenha um instantâneo do disco raiz e do disco de dados em rápida sucessão.

  {% endnote %}

| Plataforma | Método Snapshot | URL de documentação de instantâneo |
|---|---|---|
| Amazon AWS | Disco | <https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-creating-snapshot.html>
| Azure | VM | <https://docs.microsoft.com/azure/backup/backup-azure-vms-first-look-arm>
| Hyper-V | VM | <https://docs.microsoft.com/windows-server/virtualization/hyper-v/manage/enable-or-disable-checkpoints-in-hyper-v>
| Google Compute Engine | Disco | <https://cloud.google.com/compute/docs/disks/create-snapshots>
| VMware | VM | <https://docs.vmware.com/en/VMware-vSphere/7.0/com.vmware.vsphere.hostclient.doc/GUID-64B866EF-7636-401C-A8FF-2B4584D9CA72.html>

## Atualizar com hotpatch

{% data reusables.enterprise_installation.hotpatching-explanation %} 

Ao usar o {% data variables.enterprise.management_console %}, você pode instalar um hotpatch imediatamente ou programá-lo para instalação posterior. Você pode usar o shell administrativo para instalar um patch dinâmico com o utilitário `ghe-upgrade`. Para obter mais informações, confira "[Atualizar requisitos](/enterprise/admin/guides/installation/upgrade-requirements/)".

{% note %}

**{% ifversion ghes %}Observações{% else %}Observação{% endif %}** :

{% ifversion ghes %}
- Se a {% data variables.location.product_location %} estiver executando um build de versão Release Candidate, você não poderá atualizar com um patch dinâmico.

- {% endif %}Instalando um hotpatch usando o {% data variables.enterprise.management_console %} não está disponível em ambientes com cluster. Para instalar um patch dinâmico em um ambiente clusterizado, confira "[Como atualizar um cluster](/enterprise/admin/clustering/upgrading-a-cluster#upgrading-with-a-hotpatch)".

{% endnote %}

### Atualizar um appliance com hotpatch

#### Instalar um hotpatch usando o {% data variables.enterprise.management_console %}

Você pode usar o {% data variables.enterprise.management_console %} para atualizar com um hotpatch, habilitando as atualizações automáticas. Em seguida, será apresentada a última versão de {% data variables.product.prodname_ghe_server %} disponível para a qual você pode atualizar.

Se o alvo de atualização que lhe foi apresentado for uma versão do recurso em vez de uma versão de patch, você não poderá usar {% data variables.enterprise.management_console %} para instalar um hotpatch. Você deve instalar o hotpatch usando o shell administrativo. Para obter mais informações, confira "[Como instalar um patch dinâmico usando o shell administrativo](#installing-a-hotpatch-using-the-administrative-shell)".

1. Habilitar as atualizações automáticas. Para obter mais informações, confira "[Como habilitar atualizações automáticas](/enterprise/admin/guides/installation/enabling-automatic-update-checks/)".
{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.updates-tab %}
4. Quando um novo hotpatch for baixado, use o menu suspenso Install package (Instalar pacote):
    - Para instalá-lo imediatamente, selecione **Agora**:
    - Para instalar depois, selecione outra data.
  ![Menu suspenso da data de instalação do patch dinâmico](/assets/images/enterprise/management-console/hotpatch-installation-date-dropdown.png)
5. Clique em **Instalar**.
  ![Botão de instalação de patch dinâmico](/assets/images/enterprise/management-console/hotpatch-installation-install-button.png)

#### Instalar hotpatch usando o shell administrativo

{% data reusables.enterprise_installation.download-note %}

{% data reusables.enterprise_installation.ssh-into-instance %}
2. {% data reusables.enterprise_installation.enterprise-download-upgrade-pkg %} Copie a URL do pacote dinâmico de atualização (arquivo *.hpkg*).
{% data reusables.enterprise_installation.download-package %}
4. Execute o comando `ghe-upgrade` usando o nome do arquivo de pacote:
  ```shell
  admin@HOSTNAME:~$ ghe-upgrade GITHUB-UPGRADE.hpkg
  *** verifying upgrade package signature...
  ```
5. Se for necessário reinicializar para aplicar as atualizações no kernel, MySQL, Elasticsearch ou em outros programas, você receberá uma notificação do script de atualização do hotpatch.

### Atualizar um appliance com instâncias de réplica usando hotpatch

{% note %}

**Observação**: se estiver instalando um patch dinâmico, não haverá necessidade de entrar no modo de manutenção ou de interromper a replicação.

{% endnote %}

Appliances configurados para alta disponibilidade e replicação geográfica usam instâncias de réplica, além de instâncias principais. Para atualizar esses appliance, você terá que atualizar a instância primária e todas as instâncias de réplica, uma por vez.

#### Atualizar a instância primária

1. Atualize a instância primária seguindo as instruções descritas em "[Como instalar um patch dinâmico usando o shell administrativo](#installing-a-hotpatch-using-the-administrative-shell)".

#### Atualizar uma instância de réplica

{% note %}

**Observação:** se você estiver executando várias instâncias de réplica como parte da replicação geográfica, repita esse procedimento para cada instância de réplica, uma por vez.

{% endnote %}

1. Atualize a instância de réplica seguindo as instruções descritas em "[Como instalar um patch dinâmico usando o shell administrativo](#installing-a-hotpatch-using-the-administrative-shell)". Se você estiver usando várias réplicas de replicação geográfica, você deverá repetir esse procedimento para atualizar cada réplica por vez.
{% data reusables.enterprise_installation.replica-ssh %} {% data reusables.enterprise_installation.replica-verify %}

## Atualizar com pacote de atualização

Mesmo que seja possível usar um hotpatch para fazer a atualização do patch em uma série, você deve usar um pacote de atualização a fim de atualizar para uma versão mais recente. Por exemplo, para atualizar da versão `2.11.10` para a `2.12.4`, use um pacote de atualização, pois elas estão em séries de recursos diferentes. Para obter mais informações, confira "[Atualizar requisitos](/enterprise/admin/guides/installation/upgrade-requirements/)".

### Atualizar um appliance com pacote de atualização

{% data reusables.enterprise_installation.download-note %}

{% data reusables.enterprise_installation.ssh-into-instance %}
2. {% data reusables.enterprise_installation.enterprise-download-upgrade-pkg %} Selecione a plataforma adequada e copie a URL do pacote de atualização (arquivo *.pkg*).
{% data reusables.enterprise_installation.download-package %}
4. Habilite o modo de manutenção e aguarde a conclusão de todos os processos ativos na instância do {% data variables.product.prodname_ghe_server %}. Para obter mais informações, confira "[Como habilitar e agendar o modo de manutenção](/enterprise/admin/guides/installation/enabling-and-scheduling-maintenance-mode)".

  {% note %}

  **Observação**: ao atualizar o dispositivo primário em uma configuração de alta disponibilidade, o dispositivo já deverá estar no modo de manutenção se você seguir as instruções descritas em "[Como atualizar a instância primária](#upgrading-the-primary-instance)".

  {% endnote %}

5. Execute o comando `ghe-upgrade` usando o nome do arquivo de pacote:
  ```shell
  admin@HOSTNAME:~$ ghe-upgrade GITHUB-UPGRADE.pkg
  *** verifying upgrade package signature...
  ```
6. Confirme que você gostaria de continuar a atualização e de reiniciar após a verificação da assinatura do pacote. O novo sistema de arquivos raiz grava na partição secundária, e a instância é reiniciada automaticamente em modo de manutenção:
  ```shell
  *** applying update...
  This package will upgrade your installation to version VERSION-NUMBER
  Current root partition: /dev/xvda1 [VERSION-NUMBER]
  Target root partition:  /dev/xvda2
  Proceed with installation? [y/N]
  ```
{% ifversion ip-exception-list %}
1. Opcionalmente, para validar a atualização, configure uma lista de exceções de IP para permitir o acesso a uma lista especificada de endereços IP. Para obter mais informações, confira "[Validar alterações no modo de manutenção usando a lista de exceções de IP](/admin/configuration/configuring-your-enterprise/enabling-and-scheduling-maintenance-mode#validating-changes-in-maintenance-mode-using-the-ip-exception-list)".
{% endif %}
7. Para atualizações de dispositivo único, desabilite o modo de manutenção para que os usuários possam usar a {% data variables.location.product_location %}.

  {% note %}

  **Observação**: ao atualizar dispositivos em configurações de alta disponibilidade, mantenha o modo de manutenção até atualizar todas as réplicas e a replicação estar atual. Para obter mais informações, confira "[Como atualizar uma instância de réplica](#upgrading-a-replica-instance)".

  {% endnote %}

### Atualizar um appliance com instâncias de réplica usando um pacote de atualização

Appliances configurados para alta disponibilidade e replicação geográfica usam instâncias de réplica, além de instâncias principais. Para atualizar esses appliance, você terá que atualizar a instância primária e todas as instâncias de réplica, uma por vez.

#### Atualizar a instância primária

{% warning %}

**Aviso:** se a replicação for interrompida em caso de falha da instância primária, será perdido qualquer trabalho feito antes da atualização da réplica e do reinício da replicação.

{% endwarning %}

1. Na instância primária, habilite o modo de manutenção e aguarde a conclusão de todos os processos ativos. Para obter mais informações, confira "[Como habilitar o modo de manutenção](/enterprise/admin/guides/installation/enabling-and-scheduling-maintenance-mode/)".
{% data reusables.enterprise_installation.replica-ssh %}
3. Na instância de réplica (ou em todas as instâncias de réplica), se você estiver executando várias réplicas como parte da replicação geográfica, execute `ghe-repl-stop` para interromper a replicação.
4. Atualize a instância primária seguindo as instruções descritas em "[Como atualizar um dispositivo individual com um pacote de atualização](#upgrading-a-single-appliance-with-an-upgrade-package)".

#### Atualizar uma instância de réplica

{% note %}

**Observação:** se você estiver executando várias instâncias de réplica como parte da replicação geográfica, repita esse procedimento para cada instância de réplica, uma por vez.

{% endnote %}

1. Atualize a instância de réplica seguindo as instruções descritas em "[Como atualizar um dispositivo individual com um pacote de atualização](#upgrading-a-single-appliance-with-an-upgrade-package)". Se você estiver usando várias réplicas de replicação geográfica, você deverá repetir esse procedimento para atualizar cada réplica por vez.
{% data reusables.enterprise_installation.replica-ssh %} {% data reusables.enterprise_installation.replica-verify %}

{% data reusables.enterprise_installation.start-replication %}

{% data reusables.enterprise_installation.replication-status %} Se o comando retorna `Replication is not running`, talvez a replicação ainda esteja sendo iniciada. Aguarde cerca de um minuto antes de executar `ghe-repl-status` novamente.

   {% note %}

   **Observação:** embora a ressincronização esteja em andamento, `ghe-repl-status` pode indicar que a replicação está atrasada. Nesses casos, será possível ver a mensagem a seguir.
   
   ```
   CRITICAL: git replication is behind the primary by more than 1007 repositories and/or gists
   ```
   {% endnote %}

   {%- ifversion ghes = 3.4 or ghes = 3.5 or ghes = 3.6 %}

   - Se você atualizou cada nó para o {% data variables.product.product_name %} 3.6.0 ou posterior e iniciou a replicação, mas `git replication is behind the primary` continua aparecendo após 45 minutos, contate o {% data variables.contact.enterprise_support %}. Para obter mais informações, confira "[Como receber ajuda do {% data variables.contact.github_support %}](/admin/enterprise-support/receiving-help-from-github-support)".
   {%- endif %}

   - {% ifversion ghes = 3.4 or ghes = 3.5 or ghes = 3.6 %}Caso contrário, se{% else %}Se{% endif %} `ghe-repl-status` não tiver retornado `OK`, contate o {% data variables.contact.enterprise_support %}. Para obter mais informações, confira "[Como receber ajuda do {% data variables.contact.github_support %}](/admin/enterprise-support/receiving-help-from-github-support)".
6. Quando você concluir a atualização da última réplica e a ressincronização terminar, desabilite o modo de manutenção para que os usuários possam usar a {% data variables.location.product_location %}.

## Restaurar após uma atualização com falha

Em caso de falha ou interrupção da atualização, volte a sua instância ao estado anterior. Esse processo dependerá do tipo de atualização.

### Voltar a uma versão de patch

Para reverter uma versão de patch, use o comando `ghe-upgrade` com a opção `--allow-patch-rollback`. Antes de reverter tudo, a replicação precisa ser temporariamente parada com a execução de `ghe-repl-stop` em todas as instâncias de réplica. {% data reusables.enterprise_installation.command-line-utilities-ghe-upgrade-rollback %}

Depois que a reversão for concluída, reinicie a replicação executando `ghe-repl-start` em todas as réplicas. 

Para obter mais informações, confira "[Utilitários de linha de comando](/enterprise/admin/guides/installation/command-line-utilities/#ghe-upgrade)".

### Voltar a uma versão de recurso

Para voltar a partir de uma versão de recurso, faça a restauração partindo de um instantâneo da VM para garantir o estado consistente das partições raiz e de dados. Para obter mais informações, confira "[Como criar um instantâneo](#taking-a-snapshot)".

{% ifversion ghes %}
## Leitura adicional

- "[Sobre as atualizações para novas versões](/admin/overview/about-upgrades-to-new-releases)" {% endif %}
