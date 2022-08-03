---
title: Configurando conexões SSH para sua instância
shortTitle: Configurar conexões SSH
intro: 'Você pode aumentar a segurança de {% data variables.product.product_location %} configurando os algoritmos SSH que os clientes podem usar para estabelecer uma conexão.'
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
---

## Sobre as conexões SSH para sua instância

{% data reusables.enterprise.about-ssh-ports %}

Para acomodar os clientes SSH em seu ambiente, você pode configurar os tipos de conexões que {% data variables.product.product_location %} aceitará.

## Configurando conexões SSH com chaves RSA

Quando os usuários executam operações do Git em {% data variables.product.product_location %} via SSH na porta 22, o cliente pode efetuar a autenticação com uma chave RSA. O cliente pode assinar a tentativa usando a função hash SHA-1. Neste contexto, a função hash SHA-1 não é mais segura. Para obter mais informações, consulte [SHA-1](https://en.wikipedia.org/wiki/SHA-1) na Wikipédia.

Por padrão{% ifversion ghes < 3.7 %} nas versões {% data variables.product.product_name %} 3.6 e posteriores{% endif %}, as conexões SSH que satisfazem **ambas** das seguintes condições irão falhar.

{% data reusables.ssh.rsa-sha-1-connection-failure-criteria %}

Você pode ajustar a data limite. Se o usuário enviou a chave RSA antes da data final o cliente pode continuar a se conectar com sucesso usando o SHA-1 enquanto a chave permanecer válida. Como alternativa, você pode rejeitar todas as conexões SSH autenticadas com uma chave RSA se o cliente assinar a conexão usando a função hash SHA-1.

Independentemente da configuração que você escolher para sua instância, os clientes podem continuar a se conectar usando qualquer chave RSA assinada com uma função hash SHA-2.

Se você usar uma autoridade certificada de SSH, as conexões irão falhar se a data `valid_after` do certificado for posterior à data de corte. Para obter mais informações, consulte "[Sobre autoridades certificadas de SSH](/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities)".

Para obter mais informações, consulte [{% data variables.product.prodname_blog %}](https://github.blog/2022-06-28-improving-git-protocol-security-on-github-enterprise-server).

{% data reusables.enterprise_installation.ssh-into-instance %}
1. Audita os logs da sua instância para conexões que usam algoritmos inseguros ou funções hash usando o utilitário `ghe-find-insecure-git-operations`. Para obter mais informações, consulte "[Utilitários de linha de comando](/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-find-insecure-git-operations)".
1. Para configurar uma data limite após a qual {% data variables.product.product_location %} negará as conexões dos clientes que usam uma chave RSA enviada após a data se a conexão for assinada pela função hash SHA-1, digite o comando a seguir. Substitua _**RFC-3399-UTC-TIMEAMP**_ por um horário RFC 3399 UTC válido. Por exemplo, o valor padrão, 1 de agosto de 2022, seria representado como `2022-08-01T00:00Z`. Para obter mais informações, consulte [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339) no site IETF.

   <pre>
   $ ghe-config app.gitauth.rsa-sha1 <em>RFC-3339-UTC-TIMESTAMP</em>
   </pre>

1. Como alternativa, para desabilitar completamente as conexões SSH usando chaves RSA que são assinadas com a função hash SHA-1, digite o seguinte comando.

   ```shell
   ghe-config app.gitauth.rsa-sha1 false
   ```
{% data reusables.enterprise.apply-configuration %}
