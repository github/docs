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
shortTitle: Migrate from 11.10.x to 2.1.23
ms.openlocfilehash: 4dcd93b41d8edc75388d34785c4c149d6627cc5e
ms.sourcegitcommit: 76b840f45ba85fb79a7f0c1eb43bc663b3eadf2b
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/12/2022
ms.locfileid: '146332597'
---
Há suporte para migrações do {% data variables.product.prodname_enterprise %} 11.10.348 e mais recentes. Não há suporte para migrações do {% data variables.product.prodname_enterprise %} 11.10.348 e versões anteriores. Você deve atualizar o 11.10.348 em várias etapas de atualização. Para obter mais informações, confira o procedimento de upgrade para a 11.10.348, "[Como fazer upgrade para a última versão](/enterprise/11.10.340/admin/articles/upgrading-to-the-latest-release/)".

Para atualizar para a versão mais recente do {% data variables.product.prodname_enterprise %}, você deve migrar para a versão {% data variables.product.prodname_ghe_server %} 2.1 e só então poderá seguir o processo regular. Para obter mais informações, confira "[Como fazer upgrade do {% data variables.product.prodname_enterprise %}](/enterprise/admin/guides/installation/upgrading-github-enterprise-server/)".

## Preparar a migração

1. Revise o guia de provisionamento e instalação e verifique se foram atendidos todos os pré-requisitos necessários para provisionar e configurar o {% data variables.product.prodname_enterprise %} 2.1.23 no seu ambiente. Para obter mais informações, confira "[Provisionamento e instalação](/enterprise/2.1/admin/guides/installation/provisioning-and-installation/)".
2. Verifique se a instância atual está sendo executada em uma versão de atualização compatível.
3. Configure a versão mais recente do {% data variables.product.prodname_enterprise_backup_utilities %}. Para obter mais informações, confira [{% data variables.product.prodname_enterprise_backup_utilities %}](https://github.com/github/backup-utils).
    - Se você já configurou backups programados usando o {% data variables.product.prodname_enterprise_backup_utilities %}, certifique-se de atualizar para a versão mais recente.
    - Se você não estiver executando backups programados no momento, configure o {% data variables.product.prodname_enterprise_backup_utilities %}.
4. Faça um instantâneo de backup completo inicial da instância atual usando o comando `ghe-backup`. Se você já configurou backups programados na instância atual, não será necessário obter o instantâneo.

   {% tip %}

   **Dica:** mantenha a instância online e em uso ativo durante o instantâneo. Você fará outro instantâneo durante a parte de manutenção da migração. Como os backups são incrementais, o instantâneo inicial reduz a quantidade de dados transferidos no instantâneo final, o que pode reduzir o período de manutenção.

   {% endtip %}

5. Determine o método para alternar o tráfego de rede do usuário para a nova instância. Após a migração, todo o tráfego de rede HTTP e Git será direcionado para a nova instância.
    - **DNS** – Recomendamos esse método para todos os ambientes, pois ele é simples e funciona bem mesmo na migração de um datacenter para outro. Antes de iniciar a migração, reduza o TTL do registro DNS para cinco minutos ou menos e permita a propagação da alteração. Quando a migração for concluída, atualize o(s) registro(s) DNS de modo a apontar para o endereço IP da nova instância.
    - **Atribuição de endereço IP** – Esse método só está disponível na migração do VMware para o VMware e não é recomendado, a menos que o método DNS não esteja disponível. Antes de iniciar a migração, você terá que desligar a instância antiga e atribuir seu endereço IP à nova instância.
6. Programe um período de manutenção. O período de manutenção deve abranger tempo suficiente para transferir os dados do host de backup para a nova instância. Esse período varia com base no tamanho do instantâneo de backup e na largura de banda de rede disponível. Durante esse período, sua instância atual ficará indisponível e em modo de manutenção enquanto você migra para a nova instância.

## Realizar a migração

1. Provisione uma nova instância do {% data variables.product.prodname_enterprise %} 2.1. Para obter mais informações, confira o guia "[Provisionamento e instalação](/enterprise/2.1/admin/guides/installation/provisioning-and-installation/)" da plataforma de destino.
2. Em um navegador, vá até o novo endereço IP do appliance réplica e faça o upload da sua licença do {% data variables.product.prodname_enterprise %}.
3. Defina uma senha de administrador.
5. Clique em **Migrar**.
![Escolha do tipo de instalação](/assets/images/enterprise/migration/migration-choose-install-type.png)
6. Cole a chave SSH de acesso ao host de backup em "Add new SSH key" (Adicionar nova chave SSH).
![Autorização do backup](/assets/images/enterprise/migration/migration-authorize-backup-host.png)
7. Clique em **Adicionar chave** e em **Continuar**.
8. Copie o comando `ghe-restore` que você executará no host de backup para migrar os dados para a nova instância.
![Início da migração](/assets/images/enterprise/migration/migration-restore-start.png)
9. Habilite o modo de manutenção na instância antiga e aguarde a conclusão de todos os processos ativos. Para obter mais informações, confira "[Como habilitar e agendar o modo de manutenção](/enterprise/admin/guides/installation/enabling-and-scheduling-maintenance-mode)".

  {% note %}

  **Observação:** a instância não estará disponível para uso normal deste ponto em diante.

  {% endnote %}

10. No host de backup, execute o comando `ghe-backup` para criar um instantâneo de backup final. Essa ação garante a obtenção de todos os dados da instância antiga.
11. No host de backup, execute o comando `ghe-restore` copiado na tela de status de restauração da nova instância para restaurar o instantâneo mais recente.
  ```shell
  $ ghe-restore 169.254.1.1
  The authenticity of host '169.254.1.1:122' can't be established.
  RSA key fingerprint is fe:96:9e:ac:d0:22:7c:cf:22:68:f2:c3:c9:81:53:d1.
  Are you sure you want to continue connecting (yes/no)? yes
  Connect 169.254.1.1:122 OK (v2.0.0)
  Starting restore of 169.254.1.1:122 from snapshot 20141014T141425
  Restoring Git repositories ...
  Restoring GitHub Pages ...
  Restoring asset attachments ...
  Restoring hook deliveries ...
  Restoring MySQL database ...
  Restoring Redis database ...
  Restoring SSH authorized keys ...
  Restoring Elasticsearch indices ...
  Restoring SSH host keys ...
  Completed restore of 169.254.1.1:122 from snapshot 20141014T141425
  Visit https://169.254.1.1/setup/settings to review appliance configuration.
  ```

12. Volte à tela de status de restauração da nova instância para confirmar a conclusão da restauração.
![Tela de Restauração concluída](/assets/images/enterprise/migration/migration-status-complete.png)
13. Clique em **Prosseguir para as configurações** para revisar e ajustar as informações de configuração e as configurações que foram importadas da instância anterior.
![Revisão das configurações importadas](/assets/images/enterprise/migration/migration-status-complete.png)
14. Clique em **Salvar alterações**.

  {% note %}

  **Observação:** você poderá usar a nova instância depois de aplicar as configurações e reiniciar o servidor.

  {% endnote %}

15. Alterne o tráfego de rede do usuário da instância antiga para a nova instância usando a atribuição de endereço DNS ou IP.
16. Atualize para a última versão de patch do {% data variables.product.prodname_ghe_server %}. Para obter mais informações, confira "[Como atualizar o {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/installation/upgrading-github-enterprise-server/)".
