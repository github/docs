---
title: Aumentar a capacidade de armazenamento
intro: 'Você pode aumentar ou alterar a quantidade de armazenamento disponível para repositórios, bancos de dados, índices de pesquisa e outros dados persistentes de aplicativo no Git.'
redirect_from:
  - /enterprise/admin/installation/increasing-storage-capacity
  - /enterprise/admin/enterprise-management/increasing-storage-capacity
  - /admin/enterprise-management/increasing-storage-capacity
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Infrastructure
  - Performance
  - Storage
shortTitle: Aumentar capacidade de armazenamento
---

{% data reusables.enterprise_installation.warning-on-upgrading-physical-resources %}

À medida que mais usuários se juntam à sua {% data variables.product.product_location %}, talvez seja necessário redimensionar o volume de armazenamento. Consulte a documentação da sua plataforma de virtualização para obter informações sobre como fazer isso.

## Requisitos e recomendações

{% note %}

**Observação:** Antes de redimensionar qualquer volume de armazenamento, coloque sua instância no modo de manutenção.{% ifversion ip-exception-list %} Você pode validar as alterações configurando uma lista de exceção IP para permitir o acesso a endereços IP especificados. {% endif %} Para obter mais informações, consulte "[Habilitando e agendando o modo de manutenção](/enterprise/admin/guides/installation/enabling-and-scheduling-maintenance-mode)".

{% endnote %}

### Requisitos mínimos

{% data reusables.enterprise_installation.hardware-rec-table %}

## Aumentar o tamanho da partição de dados

1. Redimensione o disco de volume de usuário existente usando as ferramentas da plataforma de virtualização.
{% data reusables.enterprise_installation.ssh-into-instance %}
3. Deixe o appliance em modo de manutenção. Para obter mais informações, consulte "[Habilitar e programar o modo de manutenção](/enterprise/admin/guides/installation/enabling-and-scheduling-maintenance-mode)".
4. Reinicie o appliance para detectar a alocação do novo armazenamento:
  ```shell
  $ sudo reboot
  ```
5. Execute o comando `ghe-storage-extend` para expandir o sistema de arquivos `/data/user`:
  ```shell
  $ ghe-storage-extend
  ```

## Aumentar o tamanho da partição de dados raiz usando um novo appliance

1. Configure uma nova instância do {% data variables.product.prodname_ghe_server %} com um disco raiz maior usando a mesma versão do appliance atual. Para obter mais informações, consulte "[Configurar instância do {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/installation/setting-up-a-github-enterprise-server-instance)".
2. Desligue o appliance atual:
  ```shell
  $ sudo poweroff
  ```
3. Desvincule o disco de dados do appliance atual usando as ferramentas da plataforma de virtualização.
4. Vincule o disco de dados ao novo appliance com o disco raiz maior.

## Aumentar o tamanho da partição de dados raiz usando um appliance existente

{% warning %}

**Aviso:** Antes de aumentar o tamanho da partição-raiz, você deve colocar sua instância no modo de manutenção. Para obter mais informações, consulte "[Habilitar e programar o modo de manutenção](/enterprise/admin/guides/installation/enabling-and-scheduling-maintenance-mode)".

{% endwarning %}

1. Vincule o novo disco ao appliance do {% data variables.product.prodname_ghe_server %}.
1. Execute o comando `lsblk` para identificar o nome do dispositivo do novo disco.
1. Execute o comando `parted` para formatar o disco, substituindo o nome do seu dispositivo por `/dev/xvdg`:
  ```shell
  $ sudo parted /dev/xvdg mklabel msdos
  $ sudo parted /dev/xvdg mkpart primary ext4 0% 50%
  $ sudo parted /dev/xvdg mkpart primary ext4 50% 100%
  ```
1. Para interromper a replicação, execute o comando `ghe-repl-stop`.

   ```shell
   $ ghe-repl-stop
   ```

1. Execute o comando `ghe-upgrade` para instalar um pacote completo específico da plataforma no disco recém-particionado. Pacotes de atualização de hotpatch universais, como `github-enterprise-2.11.9.hpkg`, não funcionarão conforme o esperado. Depois que o comando `ghe-upgrade` for concluído, os serviços do aplicativo serão encerrados automaticamente.

  ```shell
  $ ghe-upgrade PACKAGE-NAME.pkg -s -t /dev/xvdg1
  ```
1. Desligue o appliance:
  ```shell
  $ sudo poweroff
  ```
1. No hipervisor, remova o disco raiz antigo e vincule o novo disco raiz no mesmo local do antigo.
1. Inicie o appliance.
1. Certifique-se de que os serviços do sistema estejam funcionando corretamente, depois liberar o modo de manutenção. Para obter mais informações, consulte "[Habilitar e programar o modo de manutenção](/admin/guides/installation/enabling-and-scheduling-maintenance-mode)".

Se seu dispositivo estiver configurado para alta disponibilidade ou georreplicação, lembre-se de iniciar a replicação em cada nó de réplica usando `ghe-repl-start` após a atualização do armazenamento em todos os nós.
