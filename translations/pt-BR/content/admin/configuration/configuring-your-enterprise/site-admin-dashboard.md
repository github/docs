---
title: Painel de administração do site
intro: '{% data reusables.enterprise_site_admin_settings.about-the-site-admin-dashboard %}'
redirect_from:
  - /enterprise/admin/articles/site-admin-dashboard
  - /enterprise/admin/installation/site-admin-dashboard
  - /enterprise/admin/configuration/site-admin-dashboard
  - /admin/configuration/site-admin-dashboard
versions:
  ghes: '*'
  ghae: '*'
type: reference
topics:
  - Enterprise
  - Fundamentals
ms.openlocfilehash: aacf1705ce0f520dc740bc3bc19c7e280f30abfd
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 07/13/2022
ms.locfileid: '146332061'
---
Para acessar o painel, no canto superior direito de qualquer página, clique em {% octicon "rocket" aria-label="The rocket ship" %}.
![Ícone de foguete usado para acessar as configurações de administrador do site](/assets/images/enterprise/site-admin-settings/access-new-settings.png)

{% ifversion ghes or ghae %}

## <a name="search"></a>Pesquisar

Veja esta seção do painel de administração do site para pesquisar usuários e repositórios e consultar o [log de auditoria](#audit-log).

{% else %}

## <a name="license-info--search"></a>Informações de licença e pesquisa

Veja esta seção do painel de administração do site para verificar sua licença atual do {% data variables.product.prodname_enterprise %}, pesquisar usuários e repositórios e consultar o [log de auditoria](#audit-log).

{% endif %} {% ifversion ghes %}
## <a name="-data-variablesenterprisemanagement_console-"></a>{% data variables.enterprise.management_console %}

Neste espaço, é possível iniciar o {% data variables.enterprise.management_console %} para gerenciar configurações do appliance virtual, como domínio, autenticação e SSL.
{% endif %}
## <a name="explore"></a>Explorar

Os dados da [página de tendências][] do GitHub são calculados em períodos diários, semanais e mensais para repositórios e desenvolvedores. Você pode ver quando esses dados foram armazenados em cache pela última vez e colocar na fila novos trabalhos de cálculo de tendências na seção **Explorar**.

  [página de tendências]: https://github.com/blog/1585-explore-what-is-trending-on-github

## <a name="audit-log"></a>Log de auditoria

O {% data variables.product.product_name %} mantém um log contínuo das ações auditadas que você pode consultar.

Por padrão, o log de auditoria mostra uma lista de todas as ações auditadas em ordem cronológica inversa. Filtre essa lista inserindo pares chave-valor na caixa de texto **Consulta** e clicando em **Pesquisar**, conforme explicado em "[Como fazer pesquisas no log de auditoria para sua empresa](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/searching-the-audit-log-for-your-enterprise)".

Para obter mais informações sobre o log de auditoria em geral, confira "[Sobre o log de auditoria da sua empresa](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/about-the-audit-log-for-your-enterprise)". Para ver uma lista completa das ações auditadas, confira "[Eventos de log de auditoria da sua empresa](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise)".

## <a name="reports"></a>Relatórios

Caso você precise obter informações sobre os usuários, as organizações e os repositórios do {% data variables.product.product_location %}, normalmente, busque dados JSON por meio da [API do GitHub](/rest). Infelizmente, a API pode não fornecer todos os dados necessários e ainda requer um pouco de conhecimento técnico. O painel de administração do site oferece uma seção **Relatórios** como alternativa, facilitando o download de relatórios CSV com a maioria das informações de que você provavelmente precisará para usuários, organizações e repositórios.

Especificamente, é possível baixar relatórios CSV que listem o seguinte:

- todos os usuários;
- todos os usuários ativos
- todos os [usuários inativos](/admin/user-management/managing-dormant-users)
- todos os usuários suspensos;
- todas as organizações;
- todos os repositórios.

Você também pode acessar esses relatórios de forma programática pela autenticação HTTP padrão com uma conta de administrador do site. Você precisa usar um token de acesso pessoal com o escopo `site_admin`. Para obter mais informações, confira "[Como criar um token de acesso pessoal](/github/authenticating-to-github/creating-a-personal-access-token)".

Por exemplo, veja uma forma de baixar o relatório "todos os usuários" com cURL:

```shell
curl -L -u <em>username</em>:<em>token</em> http(s)://<em>hostname</em>/stafftools/reports/all_users.csv
```

Para acessar os outros relatórios por meio de programação, substitua `all_users` por `active_users`, `dormant_users`, `suspended_users`, `all_organizations` ou `all_repositories`.

{% note %}

**Observação:** a solicitação `curl` inicial retornará uma resposta HTTP 202 se não houver relatórios armazenados em cache disponíveis. Um relatório será gerado em segundo plano. Você pode enviar uma segunda solicitação para baixar o relatório. Você pode usar uma senha ou um token OAuth com o escopo `site_admin` no lugar de uma senha.

{% endnote %}

### <a name="user-reports"></a>Relatórios de usuário

Chave               | Descrição
-----------------:| ------------------------------------------------------------
`created_at`      | Momento da criação da conta do usuário (carimbo de data/hora ISO 8601)
`id`              | ID da conta de usuário ou organização
`login`           | Nome de login da conta
`email`           | Endereço de e-mail principal da conta
`role`            | Conta de administrador ou usuário regular
`suspended?`      | Se a conta foi suspensa
`last_logged_ip`  | Endereço IP mais recente a fazer login na conta
`repos`           | Número de repositórios pertencentes à conta
`ssh_keys`        | Número de chaves SSH registradas na conta
`org_memberships` | Número de organizações às quais a conta pertence
`dormant?`        | Se a conta está inativa
`last_active`     | Última vez em que a conta ficou ativa (carimbo de data/hora ISO 8601)
`raw_login`       | Informações brutas de login (formato JSON)
`2fa_enabled?`    | Se o usuário habilitou a autenticação de dois fatores

### <a name="organization-reports"></a>Relatórios da organização

Chave            | Descrição
--------------:| ------------------------------------
`id`           | ID da organização
`created_at`   | Momento de criação da organização
`login`        | Nome de login da organização
`email`        | Endereço de e-mail principal da organização
`owners`       | Número de proprietários da organização
`members`      | Número de integrantes da organização
`teams`        | Número de equipes da organização
`repos`        | Número de repositórios da organização
`2fa_required?`| Se a organização exige autenticação de dois fatores

### <a name="repository-reports"></a>Relatórios do repositório

Chave             | Descrição
---------------:| ------------------------------------------------------------
`created_at`    | Momento de criação do repositório
`owner_id`      | ID do proprietário do repositório
`owner_type`    | Se o repositório pertence a um usuário ou organização
`owner_name`    | Nome do proprietário do repositório
`id`            | ID do repositório
`name`          | Nome do repositório
`visibility`    | Se o repositório é público ou privado
`readable_size` | Tamanho do repositório em formato legível por humanos
`raw_size`      | Tamanho do repositório como número
`collaborators` | Número de colaboradores do repositório
`fork?`         | Se o repositório é uma bifurcação
`deleted?`      | Se o repositório foi excluído

{% ifversion ghes %}
## <a name="indexing"></a>Indexação

Os recursos de [pesquisa de código][] do GitHub são fornecidos pelo [ElasticSearch][]. Esta seção do painel de administração do site mostra o status atual do cluster do ElasticSearch e oferece várias ferramentas para controlar o comportamento de pesquisa e geração de índices. Essas ferramentas se dividem em três categorias:

  [Pesquisa de código]: https://github.com/blog/1381-a-whole-new-code-search
  [ElasticSearch]: http://www.elasticsearch.org/

### <a name="code-search"></a>Pesquisa de código

Esta ação permite habilitar ou desabilitar as operações de pesquisa e índice no código-fonte.

### <a name="code-search-index-repair"></a>Reparo de índice de pesquisa de códigos

Esta categoria controla a forma como ocorre o reparo do índice de pesquisa de códigos. É possível

- habilitar ou desabilitar trabalhos de reparo de índice;
- iniciar um novo trabalho de reparo de índice;
- redefinir o estado de todo o reparo de índice.

O {% data variables.product.prodname_enterprise %} usa trabalhos de reparo para reconciliar o estado do índice de pesquisa com dados armazenados em bancos de dados (problemas, pull requests, repositórios e usuários) e dados armazenados em repositórios do Git (código-fonte). Isso ocorre quando

- um novo índice de pesquisa é criado;
- dados ausentes precisam ser aterrados; ou
- dados antigos de pesquisa precisam ser atualizados.

Em outras palavras, os trabalhos de reparo são iniciados conforme necessário e executados em segundo plano. Esses trabalhos não são programados pelos administradores do site.

Além disso, trabalhos de reparo usam uma "compensação de reparo" para paralelização. Trata-se de uma compensação na tabela do banco de dados para o registro a ser reconciliado. Vários trabalhos em segundo plano podem sincronizar tarefas com base nessa compensação.

Uma barra de progresso mostra o status atual de um trabalho de reparo em todos os trabalhadores relacionados em segundo plano. Trata-se da diferença percentual da compensação do reparo com o ID de registro mais alto no banco de dados. Não se preocupe com o valor mostrado na barra de progresso após a conclusão de um trabalho de reparo: como ele mostra a diferença entre o deslocamento de reparo e a ID de registro mais alta no banco de dados, ele diminuirá à medida que mais repositórios forem adicionados ao {% data variables.product.product_location %}, mesmo que esses repositórios estejam realmente indexados.

Você pode iniciar um novo trabalho de reparo do índice de pesquisa de código a qualquer momento. Ele usará uma única CPU, pois reconcilia o índice de pesquisa com os dados do banco de dados e do repositório Git. Para minimizar os efeitos no desempenho de E/S e reduzir as chances de tempo limite das operações, tente fazer um trabalho de reparo fora dos horários de pico. Monitore as médias de carga e o uso da CPU do sistema com um utilitário como o `top`. Se você não observar alterações significativas, também será seguro executar um trabalho de reparo de índice durante o horário de pico.

### <a name="issues-index-repair"></a>Reparo de índice de problemas

Isso controla como o índice [Problemas][] é reparado. É possível

  [Problemas]: https://github.com/blog/831-issues-2-0-the-next-generation

- habilitar ou desabilitar trabalhos de reparo de índice;
- iniciar um novo trabalho de reparo de índice;
- redefinir todo o estado de reparo de índice {% endif %}
## <a name="reserved-logins"></a>Logins reservados

Certas palavras são reservadas para uso interno em {% data variables.product.product_location %}, o que significa que essas palavras não podem ser usadas como nomes de usuário.

Por exemplo, as palavras a seguir são reservadas, entre outras:

- `admin`
- `enterprise`
- `login`
- `staff`
- `support`

Para a lista completa ou palavras reservadas, acesse "Logins reservados" no painel de administração do site.

{% ifversion ghas-committers-calculator %}
## <a name="-data-variablesproductprodname_advanced_security--committers"></a>{% data variables.product.prodname_advanced_security %} Committers

Você pode ver o número de commiters ativos que estão atualmente usando estações para o {% data variables.product.prodname_GH_advanced_security %} e pode calcular quantas estações adicionais seriam usadas se você habilitasse o {% data variables.product.prodname_GH_advanced_security %} para mais organizações e repositórios.

Em "Contagem de commiters atualmente ativos", você pode ver o número de commiters ativos em repositórios com o {% data variables.product.prodname_GH_advanced_security %} habilitado. Esse é o número de estações licenciadas que estão sendo usadas no momento.

Em "Commiters máximos em toda a instância", você pode ver o número de committers ativos em todos os repositórios da sua empresa. Esse é o número de estações que seriam usadas se você habilitasse o {% data variables.product.prodname_GH_advanced_security %} para cada repositório da sua empresa.

Em "Calcular commiters avançados adicionais", você poderá calcular quantas estações adicionais serão usadas se habilitar o {% data variables.product.prodname_GH_advanced_security %} em organizações e repositórios específicos. Em "Organizações e Repositórios", insira ou cole uma lista de organizações e repositórios, com uma organização ou um repositório por linha. 

```
example-org
octo-org/octo-repo
```

O resultado é o número de estações adicionais que seriam usadas se você habilitasse o {% data variables.product.prodname_GH_advanced_security %} nessas organizações e repositórios.

Para obter mais informações sobre cobrança do {% data variables.product.prodname_advanced_security %}, confira "[Sobre cobrança do {% data variables.product.prodname_advanced_security %}](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security)".
{% endif %}

## <a name="enterprise-overview"></a>Todos os usuários

Consulte esta seção do painel de administração do site para gerenciar organizações, pessoas, políticas e configurações.

## <a name="repositories"></a>Repositórios

Esta é uma lista dos repositórios do {% data variables.product.product_location %}. Você pode clicar no nome de um repositório e acessar suas funções de administração.

- [Como bloquear pushes forçados em um repositório](/enterprise/admin/guides/developer-workflow/blocking-force-pushes-to-a-repository/)
- [Como configurar o {% data variables.large_files.product_name_long %}](/enterprise/admin/guides/installation/configuring-git-large-file-storage/#configuring-git-large-file-storage-for-an-individual-repository)
- [Como arquivar repositórios e cancelar o arquivamento deles](/enterprise/admin/guides/user-management/archiving-and-unarchiving-repositories/)

## <a name="all-users"></a>todos os usuários

Aqui você pode ver todos os usuários do {% data variables.product.product_location %} e [iniciar uma auditoria de chave SSH](/enterprise/admin/guides/user-management/auditing-ssh-keys).

## <a name="site-admins"></a>Administradores do site

Aqui você pode ver todos os administradores do {% data variables.product.product_location %} e [iniciar uma auditoria de chave SSH](/enterprise/admin/guides/user-management/auditing-ssh-keys).

## <a name="dormant-users"></a>Usuários inativos
{% ifversion ghes %} Aqui você pode ver e [suspender](/enterprise/admin/guides/user-management/suspending-and-unsuspending-users) todos os usuários inativos do {% data variables.product.product_location %}. Uma conta de usuário é considerada inativa quando: {% endif %} {% ifversion ghae %} Aqui você poderá ver e suspender todos os usuários inativos do {% data variables.product.product_location %}. Uma conta de usuário é considerada inativa quando: {% endif %}

- Existe há mais tempo do que o limite de inatividade definido para o {% data variables.product.product_location %}.
- Não gerou qualquer atividade em seu período de existência;
- Não é uma conta de administrador do site.

{% data reusables.enterprise_site_admin_settings.dormancy-threshold %} Para obter mais informações, confira "[Como gerenciar usuários inativos](/enterprise/admin/guides/user-management/managing-dormant-users/#configuring-the-dormancy-threshold)".

## <a name="suspended-users"></a>Usuários suspensos

Aqui você pode ver todos os usuários que foram suspensos do {% data variables.product.product_location %} e [iniciar uma auditoria de chave SSH](/enterprise/admin/guides/user-management/auditing-ssh-keys).
