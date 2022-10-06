---
title: Visão geral do sistema
intro: 'Saiba mais sobre os dados internos, a funcionalidade e a segurança do sistema do {% data variables.product.product_name %}.'
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
ms.openlocfilehash: 656d68b267b4a739812b10e9409609f61cacdd5e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147066935'
---
## Sobre o {% data variables.product.product_name %}

{% data reusables.enterprise.ghes-is-a-self-hosted-platform %} {% data reusables.enterprise.github-distributes-ghes %} Para obter mais informações, confira "[Sobre {% data variables.product.prodname_ghe_server %}](/admin/overview/about-github-enterprise-server)."

## Arquitetura de armazenamento

O {% data variables.product.product_name %} exige dois volumes de armazenamento: um montado no caminho do *sistema de arquivos raiz* (`/`) e o outro no caminho do *sistema de arquivos do usuário* (`/data/user`). Essa arquitetura simplifica os procedimentos de atualização, reversão e recuperação separando o ambiente do software em execução dos dados persistentes do aplicativo.

O sistema de arquivos raiz está incluído na imagem da máquina distribuída. Ele contém o sistema operacional de base e o ambiente de aplicativo {% data variables.product.product_name %}. O sistema de arquivos raiz deve ser tratado como efêmero. Todos os dados no sistema de arquivos raiz serão substituídos nas atualizações futuras do {% data variables.product.product_name %}.

O volume do armazenamento raiz é dividido em duas partições de tamanho igual. Uma das partições será montada como o sistema de arquivos raiz (`/`). A outra partição só será montada durante upgrades e reversões de upgrades como `/mnt/upgrade`, para facilitar as reversões, se necessário. Por exemplo, se for alocado um volume raiz de 200 GB, haverá 100 GB alocados no sistema de arquivos raiz e 100 GB reservados para atualizações e reversões.

O sistema de arquivos raiz contém arquivos que armazenam as informações a seguir. Esta lista não é exaustiva.

- Certificados de CA (autoridade de certificação) personalizados (no `/usr/local/share/ca-certificates*`)
- Configurações de rede personalizadas;
- Configurações de firewall personalizadas;
- O estado da replicação.

O sistema de arquivos do usuário contém arquivos que armazenam dados e configuração a seguir. Esta lista não é exaustiva.

- Repositórios do Git;
- Bancos de dados
- Pesquisar índices
- Conteúdo publicado nos sites do {% data variables.product.prodname_pages %};
- Arquivos grandes do {% data variables.large_files.product_name_long %};
- Ambientes de hook pre-receive.

## Topologias de implantação

Você pode implantar {% data variables.product.product_name %} em uma variedade de topologias, como um par de alta disponibilidade. Para obter mais informações, confira "[Sobre o {% data variables.product.prodname_ghe_server %}](/admin/overview/about-github-enterprise-server#about-deployment-topologies)."

## Retenção de dados e redundância de datacenter

{% warning %}

**Aviso**: antes de usar o {% data variables.product.product_name %} em um ambiente de produção, é altamente recomendável configurar backups e um plano de recuperação de desastres.

{% endwarning %}

O {% data variables.product.product_name %} inclui suporte para backups online e incrementais com o {% data variables.product.prodname_enterprise_backup_utilities %}. Você pode obter instantâneos incrementais em um link de rede seguro (porta administrativa SSH) por longas distâncias para fins de armazenamento externo ou geograficamente disperso. Em caso de desastre no datacenter primário, é possível restaurar instantâneos pela rede em uma instância recém-provisionado no momento da recuperação.

Além dos backups de rede, os instantâneos de volumes de armazenamento do usuário no AWS (EBS) e no VMware serão compatíveis enquanto a instância estiver offline ou em modo de manutenção. Se os requisitos de nível de serviço permitirem manutenção offline regular, os instantâneos de volumes regulares podem ser usados como alternativa de baixo custo e complexidade aos backups de rede com o {% data variables.product.prodname_enterprise_backup_utilities %}.

Para obter mais informações, confira "[Como configurar backups no seu dispositivo](/admin/configuration/configuring-your-enterprise/configuring-backups-on-your-appliance)".

## Segurança

{% data reusables.enterprise.ghes-runs-on-your-infrastructure %}

O {% data variables.product.product_name %} também apresenta outros recursos de segurança.

- [Sistema operacional, software e patches](#operating-system-software-and-patches)
- [Segurança de rede](#network-security)
- [Segurança de aplicativo](#application-security)
- [Serviços externos e acesso ao suporte](#external-services-and-support-access)
- [Comunicação criptografada](#encrypted-communication)
- [Usuários e permissões de acesso](#users-and-access-permissions)
- [Autenticação](#authentication)
- [Log de auditoria e acesso](#audit-and-access-logging)

### Sistema operacional, software e patches

O {% data variables.product.product_name %} executa um sistema operacional Linux personalizado somente com os aplicativos e serviços necessários. O {% data variables.product.company_short %} distribui patches do sistema operacional central da instância como parte do ciclo padrão de versões do produto. Os patches tratam de problemas de segurança não críticos, funcionalidade e estabilidade do {% data variables.product.product_name %}. O {% data variables.product.company_short %} também oferece patches de segurança críticos, conforme necessário e fora do ciclo regular de versões.

O {% data variables.product.product_name %} é fornecido como um dispositivo, e muitos dos pacotes do sistema operacional são modificados em comparação com a distribuição habitual do Debian. Não há suporte para modificar o sistema operacional subjacente por esse motivo (incluindo upgrades do sistema operacional), que está alinhado ao [contrato de licença e suporte do {% data variables.product.prodname_ghe_server %}](https://enterprise.github.com/license), na seção 11.3 Exclusões.

Atualmente, o sistema operacional base para {% data variables.product.product_name %} é Debian 9 (Stretch), que recebe suporte de acordo com o programa Suporte de Longo Prazo Debian.  Há planos para mudar para um sistema operacional base mais novo antes do final do período Debian LTS para o Stretch.

As atualizações regulares de patch são liberadas na página de [versões](https://enterprise.github.com/releases) do {% data variables.product.product_name %}, e a página de [notas sobre a versão](/admin/release-notes) fornece mais informações. De modo geral, estas atualizações contêm caminhos de segurança do fornecedor a montante e do projeto depois de terem sido testadas e de qualidade aprovadas pela nossa equipe de engenharia. Pode haver um pequeno atraso entre o lançamento da atualização upstream e o teste e empacotamento de uma versão futura de atualização de {% data variables.product.product_name %}.

### Segurança de rede

O firewall interno do {% data variables.product.product_name %} restringe o acesso de rede aos serviços da instância. Apenas os serviços necessários para o funcionamento do appliance estão disponíveis na rede. Para obter mais informações, confira "[Portas de rede](/admin/configuration/configuring-network-settings/network-ports)".

### Segurança do aplicativo

A equipe de segurança de aplicativos do {% data variables.product.company_short %} trabalha em tempo integral na avaliação de vulnerabilidades, testes de invasão e revisão de códigos dos produtos do {% data variables.product.company_short %} e também do {% data variables.product.product_name %}. O {% data variables.product.company_short %} também contrata empresas de segurança externas para fornecer avaliações específicas dos produtos do {% data variables.product.company_short %}.

### Serviços externos e acesso ao suporte

O {% data variables.product.product_name %} pode operar sem acessos de saída da sua rede para serviços externos. Alternativamente, você pode habilitar a integração com serviços externos de correio eletrônico, monitoramento externo e encaminhamento de logs. Para obter mais informações, confira "[Como configurar o email para notificações](/admin/configuration/configuring-your-enterprise/configuring-email-for-notifications)", "[Como configurar o monitoramento externo](/admin/enterprise-management/monitoring-your-appliance/setting-up-external-monitoring)" e "[Encaminhamento de log](/admin/monitoring-activity-in-your-enterprise/exploring-user-activity/log-forwarding)".

Você pode levantar e enviar dados de soluções de problemas para o {% data variables.contact.github_support %}. Para obter mais informações, confira "[Como fornecer dados para o {% data variables.contact.github_support %}](/support/contacting-github-support/providing-data-to-github-support)".

### Comunicação criptografada

O {% data variables.product.company_short %} desenvolveu o {% data variables.product.product_name %} para ser executado atrás do firewall corporativo. Para garantir a comunicação com fio, incentivamos que o Transport Layer Security (TLS) seja habilitado. O {% data variables.product.product_name %} é compatível com certificados TLS comerciais de 2048 bits ou mais para tráfego HTTPS. Para obter mais informações, confira "[Como configurar o TLS](/admin/configuration/configuring-network-settings/configuring-tls)".

Por padrão, a instância também fornece acesso Secure Shell (SSH) para acesso a repositórios com o Git e para finalidades administrativas. Para obter mais informações, confira "[Sobre o SSH](/authentication/connecting-to-github-with-ssh/about-ssh)" e "[Como acessar o shell administrativo (SSH)](/admin/configuration/configuring-your-enterprise/accessing-the-administrative-shell-ssh)".

{% ifversion ghes > 3.3 %}

Se você configurar a autenticação do SAML para {% data variables.product.product_location %}, você poderá habilitar as declarações criptografadas entre a instância e o seu IdP do SAML. Para obter mais informações, confira "[Como usar o SAML](/admin/identity-and-access-management/authenticating-users-for-your-github-enterprise-server-instance/using-saml#enabling-encrypted-assertions)".

{% endif %}

### Usuários e permissões de acesso

O {% data variables.product.product_name %} fornece três tipos de contas.

- A conta de usuário do Linux `admin` tem acesso controlado ao sistema operacional subjacente, incluindo o sistema de arquivos direto e o acesso ao banco de dados. Um número reduzido de administradores deve ter acesso a essa conta, o que pode ser feito por SSH. Para obter mais informações, confira "[Como acessar o shell administrativo (SSH)](/admin/configuration/configuring-your-enterprise/accessing-the-administrative-shell-ssh)".
- As contas de usuários no aplicativo web da instância têm acesso total aos seus próprios dados e quaisquer dados que outros usuários ou organizações permitirem explicitamente.
- Administradores de site no aplicativo Web da instância são contas de usuários que podem gerenciar configurações de alto nível dos aplicativos Web e da instância, configurações de contas de usuários e organização e dados de repositório.

Para obter mais informações sobre as permissões de usuário do {% data variables.product.product_name %}, confira "[Permissões de acesso no {% data variables.product.prodname_dotcom %}](/get-started/learning-about-github/access-permissions-on-github)."

### Autenticação

O {% data variables.product.product_name %} oferece quatro métodos de autenticação.

- A autenticação com chave pública SSH oferece acesso a repositórios usando Git e acesso shell administrativo. Para obter mais informações, confira "[Sobre o SSH](/authentication/connecting-to-github-with-ssh/about-ssh)" e "[Como acessar o shell administrativo (SSH)](/admin/configuration/configuring-your-enterprise/accessing-the-administrative-shell-ssh)".
- A autenticação de nome de usuário e senha com cookies HTTP oferece acesso ao aplicativo web e gerenciamento de sessão, com autenticação de dois fatores (2FA) opcional. Para obter mais informações, confira "[Como usar a autenticação interna](/admin/identity-and-access-management/authenticating-users-for-your-github-enterprise-server-instance/using-built-in-authentication)".
- Autenticações LDAP, SAML ou CAS externas usando um serviço LDAP, provedor de identidade (IdP) SAML ou outros serviços compatíveis fornecem acesso ao aplicativo web. Para obter mais informações, confira "[Como gerenciar o IAM para sua empresa](/admin/identity-and-access-management/managing-iam-for-your-enterprise)".
- Tokens OAuth e de acesso pessoal oferecem acesso a dados de repositórios e APIs Git para clientes e serviços externos. Para obter mais informações, confira "[Como criar um token de acesso pessoal](/github/authenticating-to-github/creating-a-personal-access-token)".

### Log de auditoria e acesso

O {% data variables.product.product_name %} armazena logs do sistema operacional tradicional e de aplicativos. O aplicativo também grava logs de auditoria e segurança detalhados, que são armazenados permanentemente pelo {% data variables.product.product_name %}. Você pode encaminhar os dois tipos de logs em tempo real para vários destinos por meio do protocolo `syslog-ng`. Para obter mais informações, confira "[Sobre o log de auditoria para sua empresa](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/about-the-audit-log-for-your-enterprise)" e "[Encaminhamento de log](/admin/monitoring-activity-in-your-enterprise/exploring-user-activity/log-forwarding)."

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

## Dependências de código aberto para o {% data variables.product.product_name %}

Você pode ver uma lista completa de dependências na versão de sua instância do {% data variables.product.product_name %}, bem como a licença de cada projeto, em `http(s)://HOSTNAME/site/credits`.

Os tarballs e uma lista completa de dependências e metadados associados estão disponíveis na sua instância.

- Para dependências comuns a todas as plataformas, em `/usr/local/share/enterprise/dependencies-<GHE version>-base.tar.gz`
- Para dependências específicas de uma plataforma, em `/usr/local/share/enterprise/dependencies-<GHE version>-<platform>.tar.gz`

Os tarballs também estão disponíveis, com uma lista completa de dependências e metadados, em `https://enterprise.github.com/releases/<version>/download.html`.

## Leitura adicional

- "[Como configurar uma avaliação do {% data variables.product.prodname_ghe_server %}](/get-started/signing-up-for-github/setting-up-a-trial-of-github-enterprise-server)"
- "[Como configurar uma instância do {% data variables.product.prodname_ghe_server %}](/admin/installation/setting-up-a-github-enterprise-server-instance)"
