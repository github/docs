---
title: Migrar do GitHub Enterprise 11.10.x para o 2.1.23
redirect_from:
  - /enterprise/admin/installation/migrating-from-github-enterprise-1110x-to-2123
  - /enterprise/admin-guide/migrating
  - /enterprise/admin/articles/migrating-github-enterprise
  - /enterprise/admin/guides/installation/migrating-from-github-enterprise-v11-10-34x
  - /enterprise/admin/articles/upgrading-to-a-newer-release
  - /enterprise/admin/guides/installation/migrating-to-a-different-platform-or-from-github-enterprise-11-10-34x
  - /enterprise/admin/guides/installation/migrating-from-github-enterprise-11-10-x-to-2-1-23
  - /enterprise/admin/enterprise-management/migrating-from-github-enterprise-1110x-to-2123
  - /admin/enterprise-management/migrating-from-github-enterprise-1110x-to-2123
intro: 'Para migrar do {% data variables.product.prodname_enterprise %} 11.10.x para o 2.1.23, você precisará configurar uma nova instância do appliance e migrar os dados da instância anterior.'
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Migration
  - Upgrades
shortTitle: Migrar de 11.10.x para 2.1.23
---

Há suporte para migrações do {% data variables.product.prodname_enterprise %} 11.10.348 e mais recentes. Não há suporte para migrações do {% data variables.product.prodname_enterprise %} 11.10.348 e versões anteriores. Você deve atualizar o 11.10.348 em várias etapas de atualização. Para obter mais informações, consulte o procedimento de atualização do 11.10.348, "[Atualizar para a versão mais recente](/enterprise/11.10.340/admin/articles/upgrading-to-the-latest-release/)".

Para atualizar para a versão mais recente do {% data variables.product.prodname_enterprise %}, você deve migrar para a versão {% data variables.product.prodname_ghe_server %} 2.1 e só então poderá seguir o processo regular. Para obter mais informações, consulte "[Atualizar o {% data variables.product.prodname_enterprise %}](/enterprise/admin/guides/installation/upgrading-github-enterprise-server/)".

## Preparar para a migração

1. Revise o guia de provisionamento e instalação e verifique se foram atendidos todos os pré-requisitos necessários para provisionar e configurar o {% data variables.product.prodname_enterprise %} 2.1.23 no seu ambiente. Para obter mais informações, consulte "[Provisionar e instalar](/enterprise/2.1/admin/guides/installation/provisioning-and-installation/)".
2. Verifique se a instância atual está sendo executada em uma versão de atualização compatível.
3. Configure a versão mais recente do {% data variables.product.prodname_enterprise_backup_utilities %}. Para obter mais informações, consulte [{% data variables.product.prodname_enterprise_backup_utilities %}](https://github.com/github/backup-utils).
    - Se você já configurou backups programados usando o {% data variables.product.prodname_enterprise_backup_utilities %}, certifique-se de atualizar para a versão mais recente.
    - Se você não estiver executando backups programados no momento, configure o {% data variables.product.prodname_enterprise_backup_utilities %}.
4. Faça um instantâneo inicial de backup completo da instância atual usando o comando `ghe-backup`. Se você já configurou backups programados na instância atual, não será necessário obter o instantâneo.

   {% tip %}

   **Dica:** durante a obtenção do instantâneo, você pode deixar a instância online e em uso. Você fará outro instantâneo durante a parte de manutenção da migração. Como os backups são incrementais, o instantâneo inicial reduz a quantidade de dados transferidos no instantâneo final, o que pode reduzir o período de manutenção.

   {% endtip %}

5. Determine o método para alternar o tráfego de rede do usuário para a nova instância. Após a migração, todo o tráfego de rede HTTP e Git será direcionado para a nova instância.
    - **DNS** - Esse método é recomendável para todos os ambientes porque é simples e funciona bem, mesmo ao migrar de um datacenter para outro. Antes de iniciar a migração, reduza o TTL do registro DNS para cinco minutos ou menos e permita a propagação da alteração. Quando a migração for concluída, atualize o(s) registro(s) DNS de modo a apontar para o endereço IP da nova instância.
    - **Atribuição de endereço IP** - Este método só está disponível na migração de VMware para VMware e é recomendado apenas se o método DNS não estiver disponível. Antes de iniciar a migração, você terá que desligar a instância antiga e atribuir seu endereço IP à nova instância.
6. Programe um período de manutenção. O período de manutenção deve abranger tempo suficiente para transferir os dados do host de backup para a nova instância. Esse período varia com base no tamanho do instantâneo de backup e na largura de banda de rede disponível. Durante esse período, sua instância atual ficará indisponível e em modo de manutenção enquanto você migra para a nova instância.

## Fazer a migração

1. Provisione uma nova instância do {% data variables.product.prodname_enterprise %} 2.1. Para obter mais informações, consulte o guia "[Provisionar e instalar](/enterprise/2.1/admin/guides/installation/provisioning-and-installation/)" da plataforma de destino.
2. Em um navegador, vá até o novo endereço IP do appliance réplica e faça o upload da sua licença do {% data variables.product.prodname_enterprise %}.
3. Defina uma senha de administrador.
5. Clique em **Migrate** (Migrar). ![Escolher o tipo de instalação](/assets/images/enterprise/migration/migration-choose-install-type.png)
6. Cole a chave SSH de acesso ao host de backup em "Add new SSH key" (Adicionar nova chave SSH). ![Autorizar o backup](/assets/images/enterprise/migration/migration-authorize-backup-host.png)
7. Clique em **Adicionar chave** e, em seguida, clique em **Continuar**.
8. Copie o comando `ghe-restore` a ser executado no host do backup para migrar os dados para a nova instância. ![Iniciar a migração](/assets/images/enterprise/migration/migration-restore-start.png)
9. Habilite o modo de manutenção na instância antiga e aguarde a conclusão de todos os processos ativos. Para obter mais informações, consulte "[Habilitar e programar o modo de manutenção](/enterprise/admin/guides/installation/enabling-and-scheduling-maintenance-mode)".

  {% note %}

  **Observação:** a partir deste momento, a instância ficará indisponível para uso regular.

  {% endnote %}

10. No host do backup, execute o comando `ghe-backup` para fazer o último instantâneo de backup. Essa ação garante a obtenção de todos os dados da instância antiga.
11. No host de backup, execute o comando `ghe-restore` que você copiou na tela de status de restauração da nova instância para restaurar o instantâneo mais recente.
  ```shell
  $ ghe-restore 169.254.1.1
  The authenticity of host '169.254.1.1:122' can't be established.
  A impressão digital da chave RSA é fe:96:9e:ac:d0:22:7c:cf:22:68:f2:c3:c9:81:53:d1.
  Tem certeza de que deseja continuar com a conexão (sim/não)? yes
  Connect 169.254.1.1:122 OK (v2.0.0)
  Starting restore of 169.254.1.1:122 from snapshot 20141014T141425
  Restoring Git repositories ...
  Restaurando o GitHub Pages...
  Restaurando anexos de ativos...
  Restaurando entregas de hooks...
  Restaurando o database MySQL...
  Restaurando o database Redis...
  Restaurando chaves SSH autorizadas...
  Restaurando índices do Elasticsearch...
  Restaurando chaves SSH de host...
  Completed restore of 169.254.1.1:122 from snapshot 20141014T141425
  Visit https://169.254.1.1/setup/settings to review appliance configuration.
  ```

12. Volte à tela de status de restauração da nova instância para confirmar a conclusão da restauração. ![Tela de restauração concluída](/assets/images/enterprise/migration/migration-status-complete.png)
13. Clique em **Continue to settings** (Continuar em configurações) para revisar e ajustar as informações de configuração importadas da instância anterior. ![Revisar configurações importadas](/assets/images/enterprise/migration/migration-status-complete.png)
14. Clique em **Save settings** (Salvar configurações).

  {% note %}

  **Observação:** você pode usar a nova instância depois de aplicar as definições de configuração e reiniciar o servidor.

  {% endnote %}

15. Alterne o tráfego de rede do usuário da instância antiga para a nova instância usando a atribuição de endereço DNS ou IP.
16. Atualize para a versão mais recente do patch de {% data variables.product.prodname_ghe_server %}. Para obter mais informações, consulte "[Atualizar o {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/installation/upgrading-github-enterprise-server/)".
