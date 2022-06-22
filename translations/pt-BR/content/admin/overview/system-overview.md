---
title: Visão geral do sistema
intro: 'Learn more about {% data variables.product.product_name %}''s system internals, functionality, and security.'
redirect_from:
  - /enterprise/admin/installation/system-overview
  - /enterprise/admin/overview/system-overview
versions:
  ghes: '*'
type: overview
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Security
  - Storage
---

## Sobre {% data variables.product.product_name %}

{% data reusables.enterprise.ghes-is-a-self-hosted-platform %} {% data reusables.enterprise.github-distributes-ghes %} For more information, see "[About {% data variables.product.prodname_ghe_server %}](/admin/overview/about-github-enterprise-server)."

## Storage architecture

{% data variables.product.product_name %} requires two storage volumes, one mounted to the *root filesystem* path (`/`) and the other to the *user filesystem* path (`/data/user`). This architecture simplifies the upgrade, rollback, and recovery procedures by separating the running software environment from persistent application data.

The root filesystem is included in the distributed machine image. It contains the base operating system and the {% data variables.product.product_name %} application environment. The root filesystem should be treated as ephemeral. Any data on the root filesystem will be replaced when upgrading to future {% data variables.product.product_name %} releases.

The root storage volume is split into two equally-sized partitions. One of the partitions will be mounted as the root filesystem (`/`). The other partition is only mounted during upgrades and rollbacks of upgrades as `/mnt/upgrade`, to facilitate easier rollbacks if necessary. For example, if a 200GB root volume is allocated, there will be 100GB allocated to the root filesystem and 100GB reserved for the upgrades and rollbacks.

The root filesystem contains files that store the following information. This list is not exhaustive.

- Custom certificate authority (CA) certificates (in `/usr/local/share/ca-certificates*`)
- Configurações de rede personalizadas;
- Configurações de firewall personalizadas;
- O estado da replicação.

The user filesystem contains files that store following configuration and data. This list is not exhaustive.

- Repositórios do Git;
- Banco de dados;
- Índices de pesquisa;
- Conteúdo publicado nos sites do {% data variables.product.prodname_pages %};
- Arquivos grandes do {% data variables.large_files.product_name_long %};
- Ambientes de hook pre-receive.

## Deployment topologies

You can deploy {% data variables.product.product_name %} in a variety of topologies, such as a high availability pair. For more information, see "[About {% data variables.product.prodname_ghe_server %}](/admin/overview/about-github-enterprise-server#about-deployment-topologies)."

## Data retention and datacenter redundancy

{% warning %}

**Warning**: Before using {% data variables.product.product_name %} in a production environment, we strongly recommend you set up backups and a disaster recovery plan.

{% endwarning %}

{% data variables.product.product_name %} includes support for online and incremental backups with {% data variables.product.prodname_enterprise_backup_utilities %}. Você pode obter instantâneos incrementais em um link de rede seguro (porta administrativa SSH) por longas distâncias para fins de armazenamento externo ou geograficamente disperso. You can restore snapshots over the network into a newly provisioned instance at time of recovery in case of disaster at the primary datacenter.

In addition to network backups, both AWS (EBS) and VMware disk snapshots of the user storage volumes are supported while the instance is offline or in maintenance mode. Se os requisitos de nível de serviço permitirem manutenção offline regular, os instantâneos de volumes regulares podem ser usados como alternativa de baixo custo e complexidade aos backups de rede com o {% data variables.product.prodname_enterprise_backup_utilities %}.

Para obter mais informações, consulte "[Configurar backups no appliance](/admin/configuration/configuring-your-enterprise/configuring-backups-on-your-appliance)".

## Segurança

{% data reusables.enterprise.ghes-runs-on-your-infrastructure %}

{% data variables.product.product_name %} also includes additional security features.

- [Sistema operacional, software e patches](#operating-system-software-and-patches)
- [Segurança de rede](#network-security)
- [Segurança do aplicativo](#application-security)
- [Serviços externos e acesso ao suporte](#external-services-and-support-access)
- [Comunicação criptografada](#encrypted-communication)
- [Usuários e permissões de acesso](#users-and-access-permissions)
- [Autenticação](#authentication)
- [Log de auditoria e acesso](#audit-and-access-logging)

### Sistema operacional, software e patches

{% data variables.product.product_name %} runs a customized Linux operating system with only the necessary applications and services. {% data variables.product.company_short %} distributes patches for the instance's core operating system as part of its standard product release cycle. Patches address functionality, stability, and non-critical security issues for {% data variables.product.product_name %}. {% data variables.product.company_short %} also provides critical security patches as needed outside of the regular release cycle.

{% data variables.product.product_name %} is provided as an appliance, and many of the operating system packages are modified compared to the usual Debian distribution. Não não damos suporte à modificação do sistema operacional subjacente por esta razão (incluindo atualizações do sistema operacional), que está alinhado à licença [{% data variables.product.prodname_ghe_server %} e acordo de suporte](https://enterprise.github.com/license), na seção 11.3 Exclusões.

Currently, the base operating system for {% data variables.product.product_name %} is Debian 9 (Stretch), which receives support under the Debian Long Term Support program.  Há planos para mudar para um sistema operacional base mais novo antes do final do período Debian LTS para o Stretch.

Regular patch updates are released on the {% data variables.product.product_name %} [releases](https://enterprise.github.com/releases) page, and the [release notes](/admin/release-notes) page provides more information. De modo geral, estas atualizações contêm caminhos de segurança do fornecedor a montante e do projeto depois de terem sido testadas e de qualidade aprovadas pela nossa equipe de engenharia. There can be a slight time delay from when the upstream update is released to when it's tested and bundled in an upcoming {% data variables.product.product_name %} patch release.

### Segurança de rede

{% data variables.product.product_name %}'s internal firewall restricts network access to the instance's services. Apenas os serviços necessários para o funcionamento do appliance estão disponíveis na rede. Para obter mais informações, consulte "[Portas de rede](/admin/configuration/configuring-network-settings/network-ports)".

### Segurança do aplicativo

{% data variables.product.company_short %}'s application security team focuses full-time on vulnerability assessment, penetration testing, and code review for {% data variables.product.company_short %} products, including {% data variables.product.product_name %}. {% data variables.product.company_short %} also contracts with outside security firms to provide point-in-time security assessments of {% data variables.product.company_short %} products.

### Serviços externos e acesso ao suporte

{% data variables.product.product_name %} can operate without any egress access from your network to outside services. Alternativamente, você pode habilitar a integração com serviços externos de correio eletrônico, monitoramento externo e encaminhamento de logs. Para obter mais informações, consulte "[Configurar e-mail para notificações](/admin/configuration/configuring-your-enterprise/configuring-email-for-notifications), "[Configurar o monitoramento externo](/admin/enterprise-management/monitoring-your-appliance/setting-up-external-monitoring)" e "[Encaminhamento de registro](/admin/monitoring-activity-in-your-enterprise/exploring-user-activity/log-forwarding)".

Você pode levantar e enviar dados de soluções de problemas para o {% data variables.contact.github_support %}. Para obter mais informações, consulte "[Enviar dados ao {% data variables.contact.github_support %}](/support/contacting-github-support/providing-data-to-github-support)".

### Comunicação criptografada

{% data variables.product.company_short %} designs {% data variables.product.product_name %} to run behind your corporate firewall. Para garantir a comunicação com fio, incentivamos que o Transport Layer Security (TLS) seja habilitado. {% data variables.product.product_name %} supports 2048-bit and higher commercial TLS certificates for HTTPS traffic. Para obter mais informações, consulte "[Configurando TLS](/admin/configuration/configuring-network-settings/configuring-tls)".

By default, the instance also offers Secure Shell (SSH) access for both repository access using Git and administrative purposes. Para obter mais informações, consulte "[Sobre SSH](/authentication/connecting-to-github-with-ssh/about-ssh)" e "[Acessar o shell administrativo (SSH)](/admin/configuration/configuring-your-enterprise/accessing-the-administrative-shell-ssh)".

{% ifversion ghes > 3.3 %}

Se você configurar a autenticação do SAML para {% data variables.product.product_location %}, você poderá habilitar as declarações criptografadas entre a instância e o seu IdP do SAML. Para obter mais informações, consulte "[Usando o SAML](/admin/identity-and-access-management/authenticating-users-for-your-github-enterprise-server-instance/using-saml#enabling-encrypted-assertions)".

{% endif %}

### Usuários e permissões de acesso

{% data variables.product.product_name %} provides three types of accounts.

- A conta de usuário Linux `admin` tem acesso controlado ao sistema operacional subjacente, com acesso direto ao sistema de arquivos e banco de dados. Um número reduzido de administradores deve ter acesso a essa conta, o que pode ser feito por SSH. Para obter mais informações, consulte "[Acessar o shell administrativo (SSH)](/admin/configuration/configuring-your-enterprise/accessing-the-administrative-shell-ssh)".
- User accounts in the instance's web application have full access to their own data and any data that other users or organizations explicitly grant.
- Site administrators in the instance's web application are user accounts that can manage high-level web application and instance settings, user and organization account settings, and repository data.

For more information about {% data variables.product.product_name %}'s user permissions, see "[Access permissions on {% data variables.product.prodname_dotcom %}](/get-started/learning-about-github/access-permissions-on-github)."

### Autenticação

{% data variables.product.product_name %} provides four authentication methods.

- A autenticação com chave pública SSH oferece acesso a repositórios usando Git e acesso shell administrativo. Para obter mais informações, consulte "[Sobre SSH](/authentication/connecting-to-github-with-ssh/about-ssh)" e "[Acessar o shell administrativo (SSH)](/admin/configuration/configuring-your-enterprise/accessing-the-administrative-shell-ssh)".
- A autenticação de nome de usuário e senha com cookies HTTP oferece acesso ao aplicativo web e gerenciamento de sessão, com autenticação de dois fatores (2FA) opcional. Para obter mais informações, consulte "[Usar autenticação integrada](/admin/identity-and-access-management/authenticating-users-for-your-github-enterprise-server-instance/using-built-in-authentication)".
- Autenticações LDAP, SAML ou CAS externas usando um serviço LDAP, provedor de identidade (IdP) SAML ou outros serviços compatíveis fornecem acesso ao aplicativo web. Para obter mais informações, consulte "[Gerenciando IMO para a sua empresa](/admin/identity-and-access-management/managing-iam-for-your-enterprise)".
- Tokens OAuth e de acesso pessoal oferecem acesso a dados de repositórios e APIs Git para clientes e serviços externos. Para mais informação, consulte "[Criando um token de acesso pessoal](/github/authenticating-to-github/creating-a-personal-access-token)."

### Log de auditoria e acesso

{% data variables.product.product_name %} stores both traditional operating system and application logs. The application also writes detailed auditing and security logs, which {% data variables.product.product_name %} stores permanently. Os dois tipos de logs podem ser encaminhados em tempo real para destinos múltiplos via protocolo `syslog-ng`. For more information, see "[About the audit log for your enterprise](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/about-the-audit-log-for-your-enterprise)" and "[Log forwarding](/admin/monitoring-activity-in-your-enterprise/exploring-user-activity/log-forwarding)."

Logs de acesso e auditoria contêm informações como as seguintes.

#### Logs de acesso

- Logs de servidor web completos para acessos ao navegador e API
- Logs completos para acesso aos dados do repositório no Git, HTTPS e protocolos SSH
- Logs de acesso administrativo em HTTPS e SSH

#### Logs de auditoria

- Login de usuários, redefinição de senhas, solicitações 2FA, alteração de configurações de e-mails e alterações em aplicativos e APIs autorizados
- Ações de administrador do site, como desbloqueio de contas de usuários e repositórios
- Eventos de push do repositório, concessão de acesso, transferências e renomeações
- Alterações nos integrantes da organização, incluindo criação e exclusão de equipes

## Open source dependencies for {% data variables.product.product_name %}

You can see a complete list of dependencies in your instance's version of {% data variables.product.product_name %}, as well as each project's license, at `http(s)://HOSTNAME/site/credits`.

Tarballs with a full list of dependencies and associated metadata are available on your instance.

- Para dependências comuns a todas as plataformas, em `/usr/local/share/enterprise/dependencies-<GHE version>-base.tar.gz`
- Para dependências específicas de uma plataforma, em `/usr/local/share/enterprise/dependencies-<GHE version>-<platform>.tar.gz`

Os tarballs também estão disponíveis com uma lista completa de dependências e metadados em `https://enterprise.github.com/releases/<version>/download.html`.

## Leia mais

- [Configurar uma versão de avaliação do {% data variables.product.prodname_ghe_server %}](/get-started/signing-up-for-github/setting-up-a-trial-of-github-enterprise-server)
- [Configurar instância do {% data variables.product.prodname_ghe_server %}](/admin/installation/setting-up-a-github-enterprise-server-instance)
