---
title: Configurar regras de firewall integrado
intro: 'É possível exibir as regras padrão de firewall e personalizar outras regras da {% data variables.product.product_location %}.'
redirect_from:
  - /enterprise/admin/guides/installation/configuring-firewall-settings
  - /enterprise/admin/installation/configuring-built-in-firewall-rules
  - /enterprise/admin/configuration/configuring-built-in-firewall-rules
  - /admin/configuration/configuring-built-in-firewall-rules
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Networking
shortTitle: Configure firewall rules
ms.openlocfilehash: 7492f69c6b334847229c76f7462beaabbc4154a2
ms.sourcegitcommit: 1309b46201604c190c63bfee47dce559003899bf
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145095996'
---
## Sobre o firewall do {% data variables.product.product_location %}

O {% data variables.product.prodname_ghe_server %} usa o Uncomplicated Firewall (UFW) do Ubuntu no appliance virtual. Para obter mais informações, confira "[UFW](https://help.ubuntu.com/community/UFW)" na documentação do Ubuntu. O {% data variables.product.prodname_ghe_server %} atualiza automaticamente a lista de desbloqueio de firewall dos serviços permitidos em cada versão.

Depois da instalação do {% data variables.product.prodname_ghe_server %}, todas as portas de rede necessárias ficam abertas automaticamente para aceitar conexões. Cada porta não necessária é configurada automaticamente como `deny`, e a política de saída padrão é configurada como `allow`. O acompanhamento com estado está habilitado para novas conexões. Normalmente, são pacotes de rede com o conjunto de bits `SYN`. Para obter mais informações, confira "[Portas de rede](/enterprise/admin/guides/installation/network-ports)".

O firewall UFW também abre várias outras portas necessárias para o funcionamento adequado do {% data variables.product.prodname_ghe_server %}. Para obter mais informações sobre o conjunto de regras do UFW, confira [o LEIAME do UFW](https://bazaar.launchpad.net/~jdstrand/ufw/0.30-oneiric/view/head:/README#L213).

## Exibir as regras padrão de firewall

{% data reusables.enterprise_installation.ssh-into-instance %}
2. Para ver as regras de firewall padrão, use o comando `sudo ufw status`. Você deverá ver uma saída semelhante à esta:
  ```shell
  $ sudo ufw status
  > Status: active
  > To                         Action      From
  > --                         ------      ----
  > ghe-1194                   ALLOW       Anywhere
  > ghe-122                    ALLOW       Anywhere
  > ghe-161                    ALLOW       Anywhere
  > ghe-22                     ALLOW       Anywhere
  > ghe-25                     ALLOW       Anywhere
  > ghe-443                    ALLOW       Anywhere
  > ghe-80                     ALLOW       Anywhere
  > ghe-8080                   ALLOW       Anywhere
  > ghe-8443                   ALLOW       Anywhere
  > ghe-9418                   ALLOW       Anywhere
  > ghe-1194 (v6)              ALLOW       Anywhere (v6)
  > ghe-122 (v6)               ALLOW       Anywhere (v6)
  > ghe-161 (v6)               ALLOW       Anywhere (v6)
  > ghe-22 (v6)                ALLOW       Anywhere (v6)
  > ghe-25 (v6)                ALLOW       Anywhere (v6)
  > ghe-443 (v6)               ALLOW       Anywhere (v6)
  > ghe-80 (v6)                ALLOW       Anywhere (v6)
  > ghe-8080 (v6)              ALLOW       Anywhere (v6)
  > ghe-8443 (v6)              ALLOW       Anywhere (v6)
  > ghe-9418 (v6)              ALLOW       Anywhere (v6)
  ```

## Adicionar regras personalizadas de firewall

{% warning %}

**Aviso:** antes de adicionar regras de firewall personalizadas, faça backup das regras atuais caso precise fazer a redefinição para um estado de trabalho conhecido. Se você não conseguir acessar o servidor, entre em contato com o {% data variables.contact.contact_ent_support %} para reconfigurar as regras originais do firewall. Restaurar as regras originais gera tempo de inatividade no servidor.

{% endwarning %}

1. Configure uma regra personalizada de firewall.
2. Verifique o status de cada nova regra com o comando `status numbered`.
  ```shell
  $ sudo ufw status numbered
  ```
3. Para fazer backup das regras de firewall personalizadas, use o comando `cp` para mover as regras para um novo arquivo.
  ```shell
  $ sudo cp -r /etc/ufw ~/ufw.backup
  ```

Depois de fazer o upgrade do {% data variables.product.product_location %}, você precisará aplicar as regras de firewall personalizadas novamente. Para isso, é recomendável criar um script.

## Restaurar as regras padrão de firewall

Se a alteração das regras do firewall ocasionar erros, você poderá redefinir as regras originais no backup.

{% warning %}

**Aviso:** se você não fez backup das regras originais antes de fazer alterações no firewall, entre em contato com o {% data variables.contact.contact_ent_support %} para obter mais assistência.

{% endwarning %}

{% data reusables.enterprise_installation.ssh-into-instance %}
2. Para restaurar as regras de backup anteriores, copie-as de novo para o firewall com o comando `cp`.
  ```shell
  $ sudo cp -f ~/ufw.backup/*rules /etc/ufw
  ```
3. Reinicie o firewall com o comando `systemctl`.
  ```shell
  $ sudo systemctl restart ufw
  ```
4. Confirme se as regras estão de volta aos padrões com o comando `ufw status`.
  ```shell
  $ sudo ufw status
  > Status: active
  > To                         Action      From
  > --                         ------      ----
  > ghe-1194                   ALLOW       Anywhere
  > ghe-122                    ALLOW       Anywhere
  > ghe-161                    ALLOW       Anywhere
  > ghe-22                     ALLOW       Anywhere
  > ghe-25                     ALLOW       Anywhere
  > ghe-443                    ALLOW       Anywhere
  > ghe-80                     ALLOW       Anywhere
  > ghe-8080                   ALLOW       Anywhere
  > ghe-8443                   ALLOW       Anywhere
  > ghe-9418                   ALLOW       Anywhere
  > ghe-1194 (v6)              ALLOW       Anywhere (v6)
  > ghe-122 (v6)               ALLOW       Anywhere (v6)
  > ghe-161 (v6)               ALLOW       Anywhere (v6)
  > ghe-22 (v6)                ALLOW       Anywhere (v6)
  > ghe-25 (v6)                ALLOW       Anywhere (v6)
  > ghe-443 (v6)               ALLOW       Anywhere (v6)
  > ghe-80 (v6)                ALLOW       Anywhere (v6)
  > ghe-8080 (v6)              ALLOW       Anywhere (v6)
  > ghe-8443 (v6)              ALLOW       Anywhere (v6)
  > ghe-9418 (v6)              ALLOW       Anywhere (v6)
  ```
