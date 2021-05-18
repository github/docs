---
title: Aumentar a capacidade de armazenamento
intro: 'Você pode aumentar ou alterar a quantidade de armazenamento disponível para repositórios, bancos de dados, índices de pesquisa e outros dados persistentes de aplicativo no Git.'
redirect_from:
  - /enterprise/admin/installation/increasing-storage-capacity
  - /enterprise/admin/enterprise-management/increasing-storage-capacity
versions:
  enterprise-server: '*'
type: how_to
topics:
  - Enterprise
  - Infrastructure
  - Performance
  - Storage
---

{% data reusables.enterprise_installation.warning-on-upgrading-physical-resources %}

À medida que mais usuários se juntam à sua {% data variables.product.product_location %}, talvez seja necessário redimensionar o volume de armazenamento. Consulte a documentação da sua plataforma de virtualização para obter informações sobre como fazer isso.

### Requisitos e recomendações

{% note %}

**Observação:** antes de redimensionar o volume de armazenamento do usuário, deixe sua instância em modo de manutenção. Para obter mais informações, consulte "[Habilitar e programar o modo de manutenção](/enterprise/{{ currentVersion }}/admin/guides/installation/enabling-and-scheduling-maintenance-mode)".

{% endnote %}

#### Requisitos mínimos

{% data reusables.enterprise_installation.hardware-rec-table %}

### Aumentar o tamanho da partição de dados

1. Redimensione o disco de volume de usuário existente usando as ferramentas da plataforma de virtualização.
{% data reusables.enterprise_installation.ssh-into-instance %}
3. Deixe o appliance em modo de manutenção. Para obter mais informações, consulte "[Habilitar e programar o modo de manutenção](/enterprise/{{ currentVersion }}/admin/guides/installation/enabling-and-scheduling-maintenance-mode)".
4. Reinicie o appliance para detectar a alocação do novo armazenamento:
  ```shell
  $ sudo reboot
  ```
5. Execute o comando `ghe-storage-extend` para expandir o sistema de arquivos `/data/user`:
  ```shell
  $ ghe-storage-extend
  ```

### Aumentar o tamanho da partição de dados raiz usando um novo appliance

1. Configure uma nova instância do {% data variables.product.prodname_ghe_server %} com um disco raiz maior usando a mesma versão do appliance atual. Para obter mais informações, consulte "[Configurar uma instância do {% data variables.product.prodname_ghe_server %}](/enterprise/{{ currentVersion }}/admin/guides/installation/setting-up-a-github-enterprise-server-instance)".
2. Desligue o appliance atual:
  ```shell
  $ sudo poweroff
  ```
3. Desvincule o disco de dados do appliance atual usando as ferramentas da plataforma de virtualização.
4. Vincule o disco de dados ao novo appliance com o disco raiz maior.

### Aumentar o tamanho da partição de dados raiz usando um appliance existente

1. Vincule o novo disco ao appliance do {% data variables.product.prodname_ghe_server %}.
2. Execute o comando `parted` para formatar o disco:
  ```shell
  $ sudo parted /dev/xvdg mklabel msdos
  $ sudo parted /dev/xvdg mkpart primary ext4 0% 50%
  $ sudo parted /dev/xvdg mkpart primary ext4 50% 100%
  ```
3. Execute o comando `ghe-upgrade` para instalar um pacote completo específico da plataforma no disco recém-particionado. Pacotes de atualização de hotpatch universais, como `github-enterprise-2.11.9.hpkg`, não funcionarão conforme o esperado.
  ```shell
  $ ghe-upgrade PACKAGE-NAME.pkg -s -t /dev/xvdg1
  ```
4. Desligue o appliance:
  ```shell
  $ sudo poweroff
  ```
5. No hipervisor, remova o disco raiz antigo e vincule o novo disco raiz no mesmo local do antigo.
6. Inicie o appliance.
