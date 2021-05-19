---
title: Painel de administração do site
intro: '{% data reusables.enterprise_site_admin_settings.about-the-site-admin-dashboard %}'
redirect_from:
  - /enterprise/admin/articles/site-admin-dashboard/
  - /enterprise/admin/installation/site-admin-dashboard
  - /enterprise/admin/configuration/site-admin-dashboard
versions:
  enterprise-server: '*'
type: reference
topics:
  - Enterprise
  - Fundamentals
---

Para acessar o painel, clique em {% octicon "rocket" aria-label="The rocket ship" %} no canto superior direito de qualquer página. ![Ícone de foguete para acessar as configurações de administrador do site](/assets/images/enterprise/site-admin-settings/access-new-settings.png)

{% if currentVersion ver_gt "enterprise-server@2.21" %}

### Pesquisar

Neste espaço, é possível iniciar o {{ site.data.variables.enterprise.management_console }} para gerenciar configurações do appliance virtual, como domínio, autenticação e SSL.

{% else %}

### Informações de licença e pesquisa

Consulte esta seção do painel de administração do site para verificar sua licença atual do {% data variables.product.prodname_enterprise %}, pesquisar usuários e repositórios e consultar o [log de auditoria](#audit-log).

{% endif %}

### {% data variables.enterprise.management_console %}

Neste espaço, é possível iniciar o {% data variables.enterprise.management_console %} para gerenciar configurações do appliance virtual, como domínio, autenticação e SSL.

### Explorar

Os dados da [página de tendências][] do GitHub são calculados em intervalos diários, semanais e mensais para repositórios e desenvolvedores. Veja qual foi a última vez que os dados ficaram em cache e organize em fila os trabalhos de cálculo de tendências na seção **Explorar**.

### Log de auditoria

O {% data variables.product.prodname_enterprise %} mantém um log de execução das ações auditadas, e essas informações ficam disponíveis para consulta.

Por padrão, o log de auditoria mostra uma lista de todas as ações auditadas em ordem cronológica inversa. Você pode filtrar essa lista inserindo pares chave-valor na caixa de texto **Query** (Consulta) e clicando em **Search** (Pesquisar), conforme a explicação em "[Pesquisar no log de auditoria](/enterprise/{{ currentVersion }}/admin/guides/installation/searching-the-audit-log)".

Para obter mais informações sobre o log de auditoria em geral, consulte "[Log de auditoria](/enterprise/{{ currentVersion }}/admin/guides/installation/audit-logging)". Para obter uma lista completa de ações auditadas, consulte "[Ações auditas](/enterprise/{{ currentVersion }}/admin/guides/installation/audited-actions)".

### Relatórios

Para obter informações sobre usuários, organizações e repositórios da {% data variables.product.product_location %}, você normalmente faria fetch de dados JSON na [API do GitHub](/rest). Infelizmente, a API pode não fornecer todos os dados necessários e ainda requer um pouco de conhecimento técnico. O painel de administração do site oferece uma seção **Reports** (Relatórios) como alternativa, facilitando o download de relatórios CSV com a maioria das informações necessárias para usuários, organizações e repositórios.

Especificamente, é possível baixar relatórios CSV que listem o seguinte:

- todos os usuários;
- todos os usuários ativos no último mês;
- todos os usuários inativos por um mês (ou mais);
- todos os usuários suspensos;
- todas as organizações;
- todos os repositórios.

Você também pode acessar esses relatórios de forma programática pela autenticação HTTP padrão com uma conta de administrador do site. Você deve usar um token de acesso pessoal com o escopo `site_admin`. Para mais informação, consulte "[Criando um token de acesso pessoal](/github/authenticating-to-github/creating-a-personal-access-token)."

Por exemplo, veja uma forma de baixar o relatório "todos os usuários" com cURL:

```shell
curl -L -u <em>username</em>:<em>token</em> http(s)://<em>hostname</em>/stafftools/reports/all_users.csv
```

Para acessar os outros relatórios de forma programática, substitua `all_users` por `active_users`, `dormant_users`, `suspended_users`, `all_organizations` ou `all_repositories`.

{% note %}

**Observação:** a solicitação inicial `curl` retornará uma resposta HTTP 202 se não houver relatórios em cache disponíveis; em segundo plano, será gerado um relatório. Você pode enviar uma segunda solicitação para baixar o relatório. Em vez de usar uma senha, você pode definir uma senha ou token OAuth com escopo `site_admin`.

{% endnote %}

#### Relatórios de usuário

|             Tecla | Descrição                                                              |
| -----------------:| ---------------------------------------------------------------------- |
|      `created_at` | Momento da criação da conta do usuário (carimbo de data/hora ISO 8601) |
|              `id` | ID da conta de usuário ou organização                                  |
|           `login` | Nome de login da conta                                                 |
|          `e-mail` | Endereço de e-mail principal da conta                                  |
|          `função` | Conta de administrador ou usuário regular                              |
|      `suspended?` | Se a conta foi suspensa                                                |
|  `last_logged_ip` | Endereço IP mais recente a fazer login na conta                        |
|           `repos` | Número de repositórios pertencentes à conta                            |
|        `ssh_keys` | Número de chaves SSH registradas na conta                              |
| `org_memberships` | Número de organizações às quais a conta pertence                       |
|        `dormant?` | Se a conta está inativa                                                |
|     `last_active` | Última vez em que a conta ficou ativa (carimbo de data/hora ISO 8601)  |
|       `raw_login` | Informações brutas de login (formato JSON)                             |
|    `2fa_enabled?` | Se o usuário habilitou a autenticação de dois fatores                  |

#### Relatórios da organização

|           Tecla | Descrição                                           |
| ---------------:| --------------------------------------------------- |
|            `id` | ID da organização                                   |
|    `created_at` | Momento de criação da organização                   |
|         `login` | Nome de login da organização                        |
|        `e-mail` | Endereço de e-mail principal da organização         |
|        `owners` | Número de proprietários da organização              |
|       `members` | Número de integrantes da organização                |
|         `teams` | Número de equipes da organização                    |
|         `repos` | Número de repositórios da organização               |
| `2fa_required?` | Se a organização exige autenticação de dois fatores |

#### Relatórios do repositório

|           Tecla | Descrição                                             |
| ---------------:| ----------------------------------------------------- |
|    `created_at` | Momento de criação do repositório                     |
|      `owner_id` | ID do proprietário do repositório                     |
|    `owner_type` | Se o repositório pertence a um usuário ou organização |
|    `owner_name` | Nome do proprietário do repositório                   |
|            `id` | ID do repositório                                     |
|          `name` | Nome do repositório                                   |
|  `visibilidade` | Se o repositório é público ou privado                 |
| `readable_size` | Tamanho do repositório em formato legível por humanos |
|      `raw_size` | Tamanho do repositório como número                    |
| `collaborators` | Número de colaboradores do repositório                |
|         `fork?` | Se o repositório é uma bifurcação                     |
|      `deleted?` | Se o repositório foi excluído                         |

### Índices

Os recursos de [pesquisa de códigos][] do GitHub têm tecnologia [ElasticSearch][]. Esta seção do painel de administração do site mostra o status atual do cluster do ElasticSearch e oferece várias ferramentas para controlar o comportamento de pesquisa e geração de índices. Essas ferramentas se dividem em três categorias:

#### Pesquisa de código

Esta ação permite habilitar ou desabilitar as operações de pesquisa e índice no código-fonte.

#### Reparo de índice de pesquisa de códigos

Esta categoria controla a forma como ocorre o reparo do índice de pesquisa de códigos. Você pode:

- habilitar ou desabilitar trabalhos de reparo de índice;
- iniciar um novo trabalho de reparo de índice;
- redefinir o estado de todo o reparo de índice.

O {% data variables.product.prodname_enterprise %} usa trabalhos de reparo para reconciliar o estado do índice de pesquisa com dados armazenados em bancos de dados (problemas, pull requests, repositórios e usuários) e dados armazenados em repositórios do Git (código-fonte). Isso acontece quando:

- um novo índice de pesquisa é criado;
- dados ausentes precisam ser aterrados; ou
- dados antigos de pesquisa precisam ser atualizados.

Em outras palavras, os trabalhos de reparo são iniciados conforme necessário e executados em segundo plano. Esses trabalhos não são programados pelos administradores do site.

Além disso, trabalhos de reparo usam uma "compensação de reparo" para paralelização. Trata-se de uma compensação na tabela do banco de dados para o registro a ser reconciliado. Vários trabalhos em segundo plano podem sincronizar tarefas com base nessa compensação.

Uma barra de progresso mostra o status atual de um trabalho de reparo em todos os trabalhadores relacionados em segundo plano. Trata-se da diferença percentual da compensação do reparo com o ID de registro mais alto no banco de dados. Não se preocupe com o valor mostrado na barra de progresso após a conclusão de um trabalho de reparo; ele mostra a diferença entre a compensação do reparo e o ID de registro mais alto no banco de dados, e diminuirá à medida que mais repositórios forem adicionados à {% data variables.product.product_location %}, mesmo que esses repositórios estejam indexados no momento.

Você pode iniciar um novo trabalho de reparo do índice de pesquisa de código a qualquer momento. Ele usará uma única CPU, pois reconcilia o índice de pesquisa com os dados do banco de dados e do repositório Git. Para minimizar os efeitos no desempenho de E/S e reduzir as chances de tempo limite das operações, tente fazer um trabalho de reparo fora dos horários de pico. Monitore as médias de carga do sistema e o uso da CPU usando um utilitário como `top`. Se você notar que não houve alterações significativas, isso indica que provavelmente será seguro fazer um trabalho de reparo de índice nos horários de pico.

#### Reparo de índice de problemas

Esta categoria controla a forma como o índice [Problemas][] é reparado. Você pode:

- habilitar ou desabilitar trabalhos de reparo de índice;
- iniciar um novo trabalho de reparo de índice;
- redefinir o estado de todo o reparo de índice.

{% if currentVersion ver_gt "enterprise-server@2.21" %}

### Todos os usuários

Aqui você verá todos os usuários que foram suspensos da {{ site.data.variables.product.product_location_enterprise }} e poderá [iniciar uma auditoria de chave SSH](/enterprise/{{ page.version }}/admin/guides/user-management/auditing-ssh-keys).

{% endif %}

### Repositórios

Este espaço lista os repositórios da {% data variables.product.product_location %}. Você pode clicar no nome de um repositório e acessar suas funções de administração.

- [Bloquear pushes forçados em um repositório](/enterprise/{{ currentVersion }}/admin/guides/developer-workflow/blocking-force-pushes-to-a-repository/)
- [Configurar o {% data variables.large_files.product_name_long %};](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-git-large-file-storage/#configuring-git-large-file-storage-for-an-individual-repository)
- [Arquivar e cancelar o arquivamento de repositórios](/enterprise/{{ currentVersion }}/admin/guides/user-management/archiving-and-unarchiving-repositories/)

### Todos os usuários

Aqui você verá todos os usuários da {% data variables.product.product_location %} e poderá [iniciar uma auditoria de chave SSH](/enterprise/{{ currentVersion }}/admin/guides/user-management/auditing-ssh-keys).

### Administradores do site

Aqui você verá todos os administradores da {% data variables.product.product_location %} e poderá [iniciar uma auditoria de chave SSH](/enterprise/{{ currentVersion }}/admin/guides/user-management/auditing-ssh-keys).

### Usuários inativos

Aqui você pode ver e [suspender](/enterprise/{{ currentVersion }}/admin/guides/user-management/suspending-and-unsuspending-users) todos os usuários inativos da {% data variables.product.product_location %}. Uma conta de usuário é considerada inativa quando:

- Seu tempo de existência supera o limite de inatividade configurado na {% data variables.product.product_location %};
- Não gerou qualquer atividade em seu período de existência;
- Não é uma conta de administrador do site.

{% data reusables.enterprise_site_admin_settings.dormancy-threshold %} Para obter mais informações, consulte "[Gerenciar usuários inativos](/enterprise/{{ currentVersion }}/admin/guides/user-management/managing-dormant-users/#configuring-the-dormancy-threshold)".

### Usuários suspensos

Aqui você verá todos os usuários que foram suspensos da {% data variables.product.product_location %} e poderá [iniciar uma auditoria de chave SSH](/enterprise/{{ currentVersion }}/admin/guides/user-management/auditing-ssh-keys).

  [página de tendências]: https://github.com/blog/1585-explore-what-is-trending-on-github

  [pesquisa de códigos]: https://github.com/blog/1381-a-whole-new-code-search
  [ElasticSearch]: http://www.elasticsearch.org/

  [Problemas]: https://github.com/blog/831-issues-2-0-the-next-generation
