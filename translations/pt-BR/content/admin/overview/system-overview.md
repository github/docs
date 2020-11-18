---
title: Visão geral do sistema
intro: 'O {% data variables.product.prodname_ghe_server %} é a cópia privada da sua organização do {% data variables.product.prodname_dotcom %} contida em um appliance virtual configurado e controlado por você, hospedado no local ou na nuvem.'
redirect_from:
  - /enterprise/admin/installation/system-overview
  - /enterprise/admin/overview/system-overview
versions:
  enterprise-server: '*'
---

### Arquitetura de armazenamento

O {% data variables.product.prodname_ghe_server %} precisa de dois volumes de armazenamento: um no caminho do *sistema de arquivos raiz* (`/`) e outro no caminho do *sistema de arquivos do usuário* (`/data/user`). Essa arquitetura simplifica os procedimentos de atualização, reversão e recuperação separando o ambiente do software em execução dos dados persistentes do aplicativo.

O sistema de arquivos raiz está incluído na imagem da máquina distribuída. Ele contém o sistema operacional de base e o ambiente de aplicativo do {% data variables.product.prodname_ghe_server %}. O sistema de arquivos raiz deve ser tratado como efêmero. Todos os dados no sistema de arquivos raiz serão substituídos nas atualizações futuras do {% data variables.product.prodname_ghe_server %}.

O sistema de arquivos raiz tem o seguinte:
  - Certificados personalizados de uma autoridade certificada (CA) (em */usr/local/share/ca-certificates*);
  - Configurações de rede personalizadas;
  - Configurações de firewall personalizadas;
  - O estado da replicação.

O sistema de arquivos do usuário tem dados e configurações do usuário, como:
  - Repositórios do Git;
  - Banco de dados;
  - Índices de pesquisa;
  - Conteúdo publicado nos sites do {% data variables.product.prodname_pages %};
  - Arquivos grandes do {% data variables.large_files.product_name_long %};
  - Ambientes de hook pre-receive.

### Opções de implantação

Você pode implantar o {% data variables.product.prodname_ghe_server %} como appliance virtual único ou em uma configuração de alta disponibilidade. Para obter mais informações, consulte "[Configurar o {% data variables.product.prodname_ghe_server %} para alta disponibilidade](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-github-enterprise-server-for-high-availability/)".

Algumas organizações com dezenas de milhares de desenvolvedores também podem se beneficiar do clustering do {% data variables.product.prodname_ghe_server %}. Para obter mais informações, consulte "[Sobre clustering](/enterprise/{{ currentVersion }}/admin/guides/clustering/about-clustering)."

### Retenção de dados e redundância de datacenter

{% danger %}

Antes de usar o {% data variables.product.prodname_ghe_server %} em um ambiente de produção, é altamente recomendável configurar backups e um plano de recuperação de desastres. Para obter mais informações, consulte "[Configurar backups no appliance](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-backups-on-your-appliance)".

{% enddanger %}

O {% data variables.product.prodname_ghe_server %} dá suporte a backups online e incrementais com o [{% data variables.product.prodname_enterprise_backup_utilities %}](https://github.com/github/backup-utils). Você pode obter instantâneos incrementais em um link de rede seguro (porta administrativa SSH) por longas distâncias para fins de armazenamento externo ou geograficamente disperso. Em caso de desastre no datacenter primário, é possível restaurar instantâneos pela rede em um appliance virtual recém-provisionado no momento da recuperação.

Além dos backups de rede, os instantâneos de volumes de armazenamento do usuário no AWS (EBS) e no VMware serão compatíveis enquanto o appliance estiver offline ou em modo de manutenção. Se os requisitos de nível de serviço permitirem manutenção offline regular, os instantâneos de volumes regulares podem ser usados como alternativa de baixo custo e complexidade aos backups de rede com o {% data variables.product.prodname_enterprise_backup_utilities %}.

Para obter mais informações, consulte "[Configurar backups no appliance](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-backups-on-your-appliance)".

### Segurança

O {% data variables.product.prodname_ghe_server %} é um appliance virtual que é executado em sua infraestrutura e é administrado por controles de segurança da informação existentes, como firewalls, IAM, monitoramento e VPNs. Usar o {% data variables.product.prodname_ghe_server %} pode ajudá-lo a evitar problemas de conformidade regulatória que surgem de soluções baseadas na nuvem.

O {% data variables.product.prodname_ghe_server %} também apresenta outros recursos de segurança.

- [Sistema operacional, software e patches](#operating-system-software-and-patches)
- [Segurança de rede](#network-security)
- [Segurança do aplicativo](#application-security)
- [Serviços externos e acesso ao suporte](#external-services-and-support-access)
- [Comunicação criptografada](#encrypted-communication)
- [Usuários e permissões de acesso](#users-and-access-permissions)
- [Autenticação](#authentication)
- [Log de auditoria e acesso](#audit-and-access-logging)

#### Sistema operacional, software e patches

O {% data variables.product.prodname_ghe_server %} executa um sistema operacional Linux personalizado somente com os aplicativos e serviços necessários. O {% data variables.product.prodname_dotcom %} gerencia patches do sistema operacional central do appliance como parte do ciclo padrão de versões do produto. Os patches tratam de problemas de segurança não críticos, funcionalidade e estabilidade nos aplicativos do {% data variables.product.prodname_dotcom %}. O {% data variables.product.prodname_dotcom %} também oferece pacthes de segurança críticos, conforme necessário e fora do ciclo regular de versões.

#### Segurança de rede

O firewall interno do {% data variables.product.prodname_ghe_server %} limita o acesso à rede para os serviços do appliance. Apenas os serviços necessários para o funcionamento do appliance estão disponíveis na rede. Para obter mais informações, consulte "[Portas de rede](/enterprise/{{ currentVersion }}/admin/guides/installation/network-ports)".

#### Segurança do aplicativo

A equipe de segurança de aplicativos do {% data variables.product.prodname_dotcom %} trabalha em tempo integral na avaliação de vulnerabilidades, testes de invasão e revisão de códigos dos produtos do {% data variables.product.prodname_dotcom %} e também do {% data variables.product.prodname_ghe_server %}. O {% data variables.product.prodname_dotcom %} também contrata empresas de segurança externas para fornecer avaliações específicas dos produtos do {% data variables.product.prodname_dotcom %}.

#### Serviços externos e acesso ao suporte

O {% data variables.product.prodname_ghe_server %} pode operar sem acessos de saída da sua rede para serviços externos. Alternativamente, você pode habilitar a integração com serviços externos de correio eletrônico, monitoramento externo e encaminhamento de logs. For more information, see "[Configuring email for notifications](/admin/configuration/configuring-email-for-notifications)," "[Setting up external monitoring](/enterprise/{{ currentVersion }}/admin/installation/setting-up-external-monitoring)," and "[Log forwarding](/admin/user-management/log-forwarding)."

Você pode levantar e enviar dados de soluções de problemas para o {% data variables.contact.github_support %}. Para obter mais informações, consulte "[Enviar dados para o {% data variables.contact.github_support %}](/enterprise/{{ currentVersion }}/admin/enterprise-support/providing-data-to-github-support)".

#### Comunicação criptografada

O {% data variables.product.prodname_dotcom %} desenvolveu o {% data variables.product.prodname_ghe_server %} para ser executado atrás do firewall corporativo. Para garantir a comunicação com fio, incentivamos que o Transport Layer Security (TLS) seja habilitado. O {% data variables.product.prodname_ghe_server %} é compatível com certificados TLS comerciais de 2048 bits ou mais para tráfego HTTPS. Para obter mais informações, consulte "[Configurar o TLS](/enterprise/{{ currentVersion }}/admin/installation/configuring-tls)".

Por padrão, o appliance também fornece acesso Secure Shell (SSH) para acesso a repositórios com o Git e para finalidades administrativas. Para obter mais informações, consulte "[Sobre SSH](/enterprise/user/articles/about-ssh)" e "[Acessar o shell administrativo (SSH)](/enterprise/{{ currentVersion }}/admin/installation/accessing-the-administrative-shell-ssh)".

#### Usuários e permissões de acesso

O {% data variables.product.prodname_ghe_server %} oferece três tipos de contas.

- A conta de usuário Linux `admin` tem acesso controlado ao sistema operacional subjacente, com acesso direto ao sistema de arquivos e banco de dados. Um número reduzido de administradores deve ter acesso a essa conta, o que pode ser feito por SSH. Para obter mais informações, consulte "[Acessar o shell administrativo (SSH)](/enterprise/{{ currentVersion }}/admin/installation/accessing-the-administrative-shell-ssh)".
- As contas de usuários no aplicativo web do appliance têm acesso total aos seus próprios dados e quaisquer dados que outros usuários ou organizações permitirem explicitamente.
- Administradores de site no aplicativo web do appliance são contas de usuários que podem gerenciar configurações de alto nível dos aplicativos web e do appliance, configurações de contas de usuários e organização e dados de repositório.

Para obter mais informações sobre as permissões de usuários do {% data variables.product.prodname_ghe_server %}, consulte "[Permissões de acesso no GitHub](/enterprise/user/articles/access-permissions-on-github)".

#### Autenticação

O {% data variables.product.prodname_ghe_server %} oferece quatro métodos de autenticação.

- A autenticação com chave pública SSH oferece acesso a repositórios usando Git e acesso shell administrativo. Para obter mais informações, consulte "[Sobre SSH](/enterprise/user/articles/about-ssh)" e "[Acessar o shell administrativo (SSH)](/enterprise/{{ currentVersion }}/admin/installation/accessing-the-administrative-shell-ssh)".
- A autenticação de nome de usuário e senha com cookies HTTP oferece acesso ao aplicativo web e gerenciamento de sessão, com autenticação de dois fatores (2FA) opcional. Para obter mais informações, consulte "[Usar autenticação integrada](/enterprise/{{ currentVersion }}/admin/user-management/using-built-in-authentication)".
- Autenticações LDAP, SAML ou CAS externas usando um serviço LDAP, provedor de identidade (IdP) SAML ou outros serviços compatíveis fornecem acesso ao aplicativo web. Para obter mais informações, consulte "[Autenticar usuários na instância do GitHub Enterprise Server](/enterprise/{{ currentVersion }}/admin/user-management/authenticating-users-for-your-github-enterprise-server-instance)".
- Tokens OAuth e de acesso pessoal oferecem acesso a dados de repositórios e APIs Git para clientes e serviços externos. Para mais informação, consulte "[Criando um token de acesso pessoal](/github/authenticating-to-github/creating-a-personal-access-token)."

#### Log de auditoria e acesso

O {% data variables.product.prodname_ghe_server %} armazena logs do sistema operacional tradicional e de aplicativos. O aplicativo também grava logs de auditoria e segurança detalhados, que são armazenados permanentemente pelo {% data variables.product.prodname_ghe_server %}. Os dois tipos de logs podem ser encaminhados em tempo real para destinos múltiplos via protocolo `syslog-ng`. For more information, see "[Log forwarding](/admin/user-management/log-forwarding)."

Logs de acesso e auditoria contêm informações como as seguintes.

##### Logs de acesso

- Logs de servidor web completos para acessos ao navegador e API
- Logs completos para acesso aos dados do repositório no Git, HTTPS e protocolos SSH
- Logs de acesso administrativo em HTTPS e SSH

##### Logs de auditoria

- Login de usuários, redefinição de senhas, solicitações 2FA, alteração de configurações de e-mails e alterações em aplicativos e APIs autorizados
- Ações de administrador do site, como desbloqueio de contas de usuários e repositórios
- Eventos de push do repositório, concessão de acesso, transferências e renomeações
- Alterações nos integrantes da organização, incluindo criação e exclusão de equipes

### Dependências de código aberto para o {% data variables.product.prodname_ghe_server %}

Veja uma lista completa de dependências na sua versão do appliance do {% data variables.product.prodname_ghe_server %}, além das licenças de cada projeto em `http(s)://HOSTNAME/site/credits`.

Os tarballs e uma lista completa de dependências e metadados associados estão disponíveis no seu appliance:
- Para dependências comuns a todas as plataformas, em `/usr/local/share/enterprise/dependencies-<GHE version>-base.tar.gz`
- Para dependências específicas de uma plataforma, em `/usr/local/share/enterprise/dependencies-<GHE version>-<platform>.tar.gz`

Os tarballs também estão disponíveis com uma lista completa de dependências e metadados em `https://enterprise.github.com/releases/<version>/download.html`.

### Leia mais

- [Configurar uma versão de avaliação do {% data variables.product.prodname_ghe_server %}](/articles/setting-up-a-trial-of-github-enterprise-server)
- "[Configurar uma instância do {% data variables.product.prodname_ghe_server %}](/enterprise/{{ currentVersion }}/admin/guides/installation/setting-up-a-github-enterprise-server-instance)"
- [ {% data variables.product.prodname_roadmap %} ]({% data variables.product.prodname_roadmap_link %}) no repositório  `github/roadmap`
