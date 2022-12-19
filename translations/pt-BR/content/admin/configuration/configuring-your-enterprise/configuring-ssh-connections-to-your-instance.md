---
title: Como configurar conexões SSH para sua instância
shortTitle: Configure SSH connections
intro: 'Você pode aumentar a segurança de {% data variables.location.product_location %} configurando os algoritmos SSH que os clientes podem usar para estabelecer uma conexão.'
permissions: 'Site administrators can configure SSH connections to a {% data variables.product.product_name %} instance.'
versions:
  ghes: '>= 3.6'
type: how_to
topics:
  - Authentication
  - Enterprise
  - Infrastructure
  - Networking
  - Security
  - SSH
ms.openlocfilehash: 9b2cc81a447018eef350e1c53857dd5a74a3099a
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107538'
---
## Sobre conexões SSH para sua instância

{% data reusables.enterprise.about-ssh-ports %}

Para acomodar os clientes SSH no ambiente, você pode configurar os tipos de conexões que a {% data variables.location.product_location %} aceitará.

## Como configurar conexões SSH com chaves RSA

Quando os usuários executam operações do Git em {% data variables.location.product_location %} por SSH pela porta 22, o cliente pode se autenticar com uma chave RSA. O cliente pode assinar a tentativa usando a função de hash SHA-1. Nesse contexto, a função de hash SHA-1 não é mais segura. Para obter mais informações, confira [SHA-1](https://en.wikipedia.org/wiki/SHA-1) na Wikipédia.

Por padrão{% ifversion ghes < 3.7 %} em {% data variables.product.product_name %} 3.6 e versões posteriores{% endif %}, as conexões SSH que satisfazem as **duas** condições a seguir falharão.

{% data reusables.ssh.rsa-sha-1-connection-failure-criteria %}

Você pode ajustar a data de corte. Se o usuário tiver carregado a chave RSA antes da data de corte, o cliente poderá continuar se conectando com êxito usando SHA-1, desde que a chave permaneça válida. Como alternativa, você poderá rejeitar todas as conexões SSH autenticadas com uma chave RSA se o cliente assinar a conexão usando a função de hash SHA-1.

Independentemente da configuração escolhida para sua instância, os clientes podem continuar a se conectar usando qualquer chave RSA assinada com uma função de hash SHA-2.

Se você usar uma autoridade de certificação SSH, as conexões falharão se a data `valid_after` do certificado ocorrer após a data de corte. Para obter mais informações, confira "[Sobre as autoridades de certificado SSH](/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities)".

Para obter mais informações, confira [{% data variables.product.prodname_blog %}](https://github.blog/2022-06-28-improving-git-protocol-security-on-github-enterprise-server).

{% data reusables.enterprise_installation.ssh-into-instance %}
1. Audite os logs da sua instância para conexões que usam algoritmos não seguros ou funções de hash usando o utilitário `ghe-find-insecure-git-operations`. Para obter mais informações, confira "[Utilitários de linha de comando](/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-find-insecure-git-operations)".
1. Insira o comando a seguir para configurar uma data final após a qual a {% data variables.location.product_location %} negará conexões de clientes que usarem uma chave RSA carregada após a data se a conexão for assinada pela função de hash SHA-1. Substitua _**RFC-3399-UTC-TIMESTAMP**_ por um carimbo de data/hora UTC RFC 3399 UTC válido. Por exemplo, o valor padrão, 1º de agosto de 2022, seria representado como `2022-08-01T00:00:00Z`. Para obter mais informações, confira [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339) no site do IETF.

   <pre>
   $ ghe-config app.gitauth.rsa-sha1 RFC-3339-UTC-TIMESTAMP
   </pre>
1. Como alternativa, para desabilitar completamente as conexões SSH usando chaves RSA assinadas com a função de hash SHA-1, insira o comando a seguir.

   ```shell
   ghe-config app.gitauth.rsa-sha1 false
   ```
{% data reusables.enterprise.apply-configuration %}
