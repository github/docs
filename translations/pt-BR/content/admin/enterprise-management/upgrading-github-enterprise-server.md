---
title: Atualizar o GitHub Enterprise Server
intro: 'Atualize o {% data variables.product.prodname_ghe_server %} para usar os recursos e atualizações de segurança mais recentes.'
redirect_from:
  - /enterprise/admin/installation/upgrading-github-enterprise-server
  - /enterprise/admin/articles/upgrading-to-the-latest-release/
  - /enterprise/admin/articles/migrations-and-upgrades/
  - /enterprise/admin/guides/installation/upgrading-the-github-enterprise-virtual-machine/
  - /enterprise/admin/guides/installation/upgrade-packages-for-older-releases/
  - /enterprise/admin/articles/upgrading-older-installations/
  - /enterprise/admin/hidden/upgrading-older-installations/
  - /enterprise/admin/hidden/upgrading-github-enterprise-using-a-hotpatch-early-access-program/
  - /enterprise/admin/hidden/upgrading-github-enterprise-using-a-hotpatch/
  - /enterprise/admin/guides/installation/upgrading-github-enterprise/
  - /enterprise/admin/enterprise-management/upgrading-github-enterprise-server
versions:
  enterprise-server: '*'
topics:
  - enterprise
---

### Preparar para a atualização

1. Determine uma estratégia de atualização e escolha uma versão para atualizar. Para obter mais informações, consulte "[Requisitos de atualização](/enterprise/{{ currentVersion }}/admin/guides/installation/upgrade-requirements/)".
3. Crie um backup da instância primária usando o {% data variables.product.prodname_enterprise_backup_utilities %}. Para obter mais informações, consulte o [Arquivo README.md do {% data variables.product.prodname_enterprise_backup_utilities %}](https://github.com/github/backup-utils#readme).
4. Se você estiver atualizando com um pacote de atualização, programe um período de manutenção para os usuários finais do {% data variables.product.prodname_ghe_server %}. Se estiver usando um hotpatch, não será necessário recorrer ao modo de manutenção.

  {% note %}

  **Observação:** o período de manutenção depende do tipo de atualização a ser feita. Atualizações com hotpatch normalmente não exigem período de manutenção. É preciso reinicializar a instância em alguns casos, mas o processo pode ser feito em outro momento. Seguindo o esquema de versões do MAJOR.FEATURE.PATCH, as versões de patch que usam pacote de atualização costumam gerar menos de cinco minutos de tempo de inatividade. Versões de recursos que incluem migrações de dados levam mais tempo, dependendo do desempenho do armazenamento e da quantidade de dados migrados. Para obter mais informações, consulte "[Habilitar e programar o modo de manutenção](/enterprise/{{ currentVersion }}/admin/guides/installation/enabling-and-scheduling-maintenance-mode)".

  {% endnote %}

{% if currentVersion ver_gt "enterprise-server@2.20" and currentVersion ver_lt "enterprise-server@3.2" %}

### Sobre os requisitos mínimos para {% data variables.product.prodname_ghe_server %} 3.0 ou posterior

Antes de atualizar para {% data variables.product.prodname_ghe_server %} 3.0 ou posterior, revise os recursos de hardware que você forneceu para sua instância. {% data variables.product.prodname_ghe_server %} 3.0 introduz novas funcionalidades, como {% data variables.product.prodname_actions %} e {% data variables.product.prodname_registry %}, e exige mais recursos do que as versões 2.22 e anteriores. Para obter mais informações, consulte as observações sobre a versão [{% data variables.product.prodname_ghe_server %} 3.0](/enterprise-server@3.0/admin/release-notes).

Os requisitos aumentados para {% data variables.product.prodname_ghe_server %} 3.0 e posterior estão em **negrito** na tabela a seguir.

| Licenças de usuário                      |                         vCPUs |                               Memória |                 Armazenamento anexado | Armazenamento raiz |
|:---------------------------------------- | -----------------------------:| -------------------------------------:| -------------------------------------:| ------------------:|
| Teste, demonstração ou 10 usuários leves | **4**<br/>_Up from 2_ |   **32 GB**<br/>_Up de 16 GB_ | **150 GB**<br/>_Up de 100 GB_ |             200 GB |
| 10-3000                                  |   **8**<br/>_Up de 4_ |   **48 GB**<br/>_Up de 32 GB_ | **300 GB**<br/>_Up de 250 GB_ |             200 GB |
| 3000-5000                                |  **12**<br/>_Up de 8_ |                                 64 GB |                                500 GB |             200 GB |
| 5000-8000                                | **16**<br/>_Up de 12_ |                                 96 GB |                                750 GB |             200 GB |
| 8000-10000+                              | **20**<br/>_Up de 16_ | **160 GB**<br/>_Up de 128 GB_ |                               1000 GB |             200 GB |

{% if currentVersion ver_gt "enterprise-server@2.21" %}

Para obter mais informações sobre requisitos de hardware para {% data variables.product.prodname_actions %}, consulte "[Introdução a {% data variables.product.prodname_actions %} para {% data variables.product.prodname_ghe_server %}](/admin/github-actions/getting-started-with-github-actions-for-github-enterprise-server#review-hardware-considerations)".

{% endif %}

{% data reusables.enterprise_installation.about-adjusting-resources %}

{% endif %}

### Obter um instantâneo

Instantâneo é um ponto de verificação de uma máquina virtual (VM) em um momento específico. É altamente recomendável obter um instantâneo antes de atualizar sua máquina virtual para que você possa recuperar a VM em caso de falha. Se você estiver atualizando para uma nova versão do recurso, obtenha um instantâneo da VM. Se você estiver atualizando para uma versão de patch, vincule o disco de dados existente.

Há dois tipos de instantâneo:

- **Instantâneos de VM** salvam todo o estado da VM, inclusive dados do usuário e da configuração. Esse método de instantâneo é demorado e requer muito espaço livre em disco.
- **Instantâneos em disco de dados** salvam somente os dados do usuário.

  {% note %}

  **Notas:**
  - Algumas plataformas não permitem usar instantâneos apenas do disco de dados. Nesse caso, você terá que obter um instantâneo de toda a VM.
  - Se o hipervisor não der suporte a instantâneos completos de VM, obtenha um instantâneo do disco raiz e do disco de dados em rápida sucessão.

  {% endnote %}

| Plataforma            | Método de instantâneo | URL de documentação de instantâneo                                                                                                                                                                     |
| --------------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Amazon AWS            | Disco                 | <https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-creating-snapshot.html>                                                                                                                       |
| Azure                 | VM                    | <https://docs.microsoft.com/azure/backup/backup-azure-vms-first-look-arm>                                                                                                                              |
| Hyper-V               | VM                    | <https://docs.microsoft.com/windows-server/virtualization/hyper-v/manage/enable-or-disable-checkpoints-in-hyper-v>                                                                                     |
| Google Compute Engine | Disco                 | <https://cloud.google.com/compute/docs/disks/create-snapshots>                                                                                                                                         |
| VMware                | VM                    | [https://pubs.vmware.com/vsphere-50/topic/com.vmware.wssdk.pg.doc_50/PG_Ch11_VM_Manage.13.3.html](https://pubs.vmware.com/vsphere-50/topic/com.vmware.wssdk.pg.doc_50/PG_Ch11_VM_Manage.13.3.html) |
| XenServer             | VM                    | <https://support.citrix.com/article/CTX122978>                                                                                                                                                         |

### Atualizar com hotpatch

{% data reusables.enterprise_installation.hotpatching-explanation %} Ao usar o {% data variables.enterprise.management_console %}, é possível instalar um hotpatch na mesma hora ou programar a instalação para depois. Você pode usar o shell administrativo para instalar um hotpatch com o utilitário `ghe-upgrade`. Para obter mais informações, consulte "[Requisitos de atualização](/enterprise/{{ currentVersion }}/admin/guides/installation/upgrade-requirements/)".

{% note %}

**Observação**: A instalação de hotpatch com o {% data variables.enterprise.management_console %} não está disponível para ambientes em cluster. Para instalar um hotpatch em um ambiente em cluster, consulte "[Atualizar um cluster](/enterprise/{{ currentVersion }}/admin/clustering/upgrading-a-cluster#upgrading-with-a-hotpatch)".

{% endnote %}

#### Atualizar um appliance com hotpatch

##### Instalar um hotpatch usando o {% data variables.enterprise.management_console %}

1. Habilite atualizações automáticas. Para obter mais informações, consulte "[Habilitar atualizações automáticas](/enterprise/{{ currentVersion }}/admin/guides/installation/enabling-automatic-update-checks/)".
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.updates-tab %}
4. Quando um novo hotpatch for baixado, use o menu suspenso Install package (Instalar pacote):
    - Para instalar na mesma hora, selecione **Now** (Agora):
    - Para instalar depois, selecione outra data. ![Menu suspenso com datas para instalação de hotpatch](/assets/images/enterprise/management-console/hotpatch-installation-date-dropdown.png)
5. Clique em **instalar**. ![Botão de instalação de hotpatch](/assets/images/enterprise/management-console/hotpatch-installation-install-button.png)

##### Instalar hotpatch usando o shell administrativo

{% data reusables.enterprise_installation.download-note %}

{% data reusables.enterprise_installation.ssh-into-instance %}
2. {% data reusables.enterprise_installation.enterprise-download-upgrade-pkg %} Copie a URL do hotpackage de atualização (arquivo *.hpkg*).
{% data reusables.enterprise_installation.download-package %}
4. Execute o comando `ghe-upgrade` usando o nome de arquivo do pacote:
  ```shell
  admin@<em>HOSTNAME</em>:~$ ghe-upgrade <em>GITHUB-UPGRADE.hpkg</em>
  *** verifying upgrade package signature...
  ```
5. Se for necessário reinicializar para aplicar as atualizações no kernel, MySQL, Elasticsearch ou em outros programas, você receberá uma notificação do script de atualização do hotpatch.

#### Atualizar um appliance com instâncias de réplica usando hotpatch

{% note %}

**Observação**: Se estiver instalando um hotpatch, não há necessidade de entrar no modo de manutenção ou parar a replicação.

{% endnote %}

Appliances configurados para alta disponibilidade e replicação geográfica usam instâncias de réplica, além de instâncias principais. Para atualizar esses appliance, você terá que atualizar a instância primária e todas as instâncias de réplica, uma por vez.

##### Atualizar a instância primária

1. Atualize a instância primária seguindo as instruções em "[Instalar hotpatch usando o shell administrativo](#installing-a-hotpatch-using-the-administrative-shell)".

##### Atualizar uma instância de réplica

{% note %}

**Observação:** se você estiver executando várias instâncias de réplica como parte da replicação geográfica, repita esse procedimento para cada instância de réplica, uma por vez.

{% endnote %}

1. Atualize a réplica primária seguindo as instruções em "[Instalar hotpatch usando o shell administrativo](#installing-a-hotpatch-using-the-administrative-shell)". Se você estiver usando várias réplicas de replicação geográfica, você deverá repetir esse procedimento para atualizar cada réplica por vez.
{% data reusables.enterprise_installation.replica-ssh %}
{% data reusables.enterprise_installation.replica-verify %}

### Atualizar com pacote de atualização

Mesmo que seja possível usar um hotpatch para fazer a atualização do patch em uma série, você deve usar um pacote de atualização a fim de atualizar para uma versão mais recente. Por exemplo, use um pacote ao atualizar da versão `2.11.10` para a `2.12.4`, já que elas estão em séries diferentes. Para obter mais informações, consulte "[Requisitos de atualização](/enterprise/{{ currentVersion }}/admin/guides/installation/upgrade-requirements/)".

#### Atualizar um appliance com pacote de atualização

{% data reusables.enterprise_installation.download-note %}

{% data reusables.enterprise_installation.ssh-into-instance %}
2. {% data reusables.enterprise_installation.enterprise-download-upgrade-pkg %} Selecione a plataforma adequada e copie a URL do pacote de atualização (arquivo *.pkg*).
{% data reusables.enterprise_installation.download-package %}
4. Habilite o modo de manutenção e aguarde a conclusão de todos os processos ativos na instância do {% data variables.product.prodname_ghe_server %}. Para obter mais informações, consulte "[Habilitar e programar o modo de manutenção](/enterprise/{{ currentVersion }}/admin/guides/installation/enabling-and-scheduling-maintenance-mode)".

  {% note %}

  **Observação**: ao atualizar o appliance primário em uma configuração de alta disponibilidade, o appliance já deverá estar no modo de manutenção se você seguir as instruções em "[Atualizar a instância primária](#upgrading-the-primary-instance)".

  {% endnote %}

5. Execute o comando `ghe-upgrade` usando o nome de arquivo do pacote:
  ```shell
  admin@<em>HOSTNAME</em>:~$ ghe-upgrade <em>GITHUB-UPGRADE.pkg</em>
  *** verifying upgrade package signature...
  ```
6. Confirme que você gostaria de continuar a atualização e de reiniciar após a verificação da assinatura do pacote. O novo sistema de arquivos raiz grava na partição secundária, e a instância é reiniciada automaticamente em modo de manutenção:
  ```shell
  *** aplicando atualização...
  This package will upgrade your installation to version <em>version-number</em>
  Current root partition: /dev/xvda1 [<em>version-number</em>]
  Target root partition:  /dev/xvda2
  Proceed with installation? [y/N]
  ```
7. Em atualizações de appliance único, desabilite o modo de manutenção para os usuários poderem trabalhar com a {% data variables.product.product_location %}.

  {% note %}

  **Observação**: ao atualizar appliances em configurações de alta disponibilidade, mantenha o modo de manutenção até atualizar todas as réplicas e a replicação estar atual. Para obter mais informações, consulte "[Atualizar instância de réplica](#upgrading-a-replica-instance)".

  {% endnote %}

#### Atualizar um appliance com instâncias de réplica usando um pacote de atualização

Appliances configurados para alta disponibilidade e replicação geográfica usam instâncias de réplica, além de instâncias principais. Para atualizar esses appliance, você terá que atualizar a instância primária e todas as instâncias de réplica, uma por vez.

##### Atualizar a instância primária

{% warning %}

**Aviso:** se a replicação for interrompida em caso de falha da instância primária, será perdido qualquer trabalho feito antes da atualização da réplica e do reinício da replicação.

{% endwarning %}

1. Na instância primária, habilite o modo de manutenção e aguarde a conclusão de todos os processos ativos. Para obter mais informações, consulte "[Habilitar o modo de manutenção](/enterprise/{{ currentVersion }}/admin/guides/installation/enabling-and-scheduling-maintenance-mode/)".
{% data reusables.enterprise_installation.replica-ssh %}
3. Na instância de réplica (ou em todas as instâncias de réplica), se você estiver executando várias réplicas como parte da replicação geográfica, execute `ghe-repl-stop` para parar a replicação.
4. Atualize a instância primária seguindo as instruções em "[Atualizar um appliance com pacote de atualização](#upgrading-a-single-appliance-with-an-upgrade-package)".

##### Atualizar uma instância de réplica

{% note %}

**Observação:** se você estiver executando várias instâncias de réplica como parte da replicação geográfica, repita esse procedimento para cada instância de réplica, uma por vez.

{% endnote %}

1. Atualize a réplica primária seguindo as instruções em "[Atualizar um aplicativo com pacote de atualização](#upgrading-a-single-appliance-with-an-upgrade-package)". Se você estiver usando várias réplicas de replicação geográfica, você deverá repetir esse procedimento para atualizar cada réplica por vez.
{% data reusables.enterprise_installation.replica-ssh %}
{% data reusables.enterprise_installation.replica-verify %}

{% data reusables.enterprise_installation.start-replication %}

{% data reusables.enterprise_installation.replication-status %} Se o comando retornar `Replicação não executada`, pode ser que a replicação ainda esteja começando. Aguarde cerca de um minuto para executar `ghe-repl-status` novamente.

   {% note %}

    **Observação:** enquanto a ressincronização estiver em andamento, o código `ghe-repl-status` pode retornar mensagens esperadas indicando que a replicação está atrasada.
    Por exemplo: `CRÍTICO: a replicação git está atrás do primário em mais de 1007 repositórios e/ou gists`

   {% endnote %}

   Se `ghe-repl-status` não retornar `OK`, siga estas etapas para iniciar a replicação manualmente.

   1. Na instância de réplica, execute `ghe-repl-setup <primary-instance-ip>` mais uma vez.
   {% data reusables.enterprise_installation.start-replication %}
   {% data reusables.enterprise_installation.replication-status %}
6. Ao concluir a atualização da última réplica e quando a ressincronização terminar, desabilite o modo de manutenção para que os usuários possam trabalhar na {% data variables.product.product_location %}.

### Restaurar após uma atualização com falha

Em caso de falha ou interrupção da atualização, volte a sua instância ao estado anterior. Esse processo dependerá do tipo de atualização.

#### Voltar a uma versão de patch

Para reverter uma versão de patch, use o comando `ghe-upgrade` com o switch `--allow-patch-rollback`. {% data reusables.enterprise_installation.command-line-utilities-ghe-upgrade-rollback %}

Para obter mais informações, consulte "[Utilitários de linha de comando](/enterprise/{{ currentVersion }}/admin/guides/installation/command-line-utilities/#ghe-upgrade)".

#### Voltar a uma versão de recurso

Para voltar a partir de uma versão de recurso, faça a restauração partindo de um instantâneo da VM para garantir o estado consistente das partições raiz e de dados. Para obter mais informações, consulte "[Obter um instantâneo](#taking-a-snapshot)".

{% if currentVersion ver_gt "enterprise-server@2.22" %}
### Leia mais

- "[Sobre atualizações para novas versões](/admin/overview/about-upgrades-to-new-releases)"
{% endif %}
