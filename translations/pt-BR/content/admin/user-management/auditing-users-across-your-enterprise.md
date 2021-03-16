---
title: Auditar de usuários em toda a sua empresa
intro: 'O painel de log de auditoria mostra aos administradores do site as ações realizadas por todos os usuários e organizações de sua empresa nos últimos 90 dias incluindo detalhes como quem executou a ação, qual era a ação e quando a ação foi realizada.'
redirect_from:
  - /enterprise/admin/guides/user-management/auditing-users-across-an-organization/
  - /enterprise/admin/user-management/auditing-users-across-your-instance
  - /admin/user-management/auditing-users-across-your-instance
versions:
  enterprise-server: '*'
  github-ae: '*'
---

### Acessar o log de auditoria

O painel de log de auditoria oferece uma exibição visual de dados de auditoria na sua empresa.

![Painel de log de auditoria da instância](/assets/images/enterprise/site-admin-settings/audit-log-dashboard-admin-center.png)

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.audit-log-tab %}

No mapa, você pode aplicar zoom e visão panorâmica para ver os eventos do mundo todo. Posicione o mouse sobre um país para ver a contagem de eventos ocorridos nele.

### Pesquisar eventos na sua empresa

O log de auditoria lista as seguintes informações sobre as ações feitas na sua empresa:

* [O repositório](#search-based-on-the-repository) em que a ação ocorreu;
* [O usuário](#search-based-on-the-user) que fez a ação;
* [A organização](#search-based-on-the-organization) a que a ação pertence;
* [O tipo de ação](#search-based-on-the-action-performed) ocorrida;
* [O país](#search-based-on-the-location) em que a ação ocorreu;
* [A data e a hora](#search-based-on-the-time-of-action)  em que a ação ocorreu.

{% warning %}

**Notas:**

- Embora não seja possível usar texto para pesquisar entradas de auditoria, você pode criar consultas de pesquisa usando filtros diversificados. {% data variables.product.product_name %} é compatível com muitos operadores para fazer pesquisa em {% data variables.product.product_name %}. Para obter mais informações, consulte "[Sobre a pesquisa no {% data variables.product.prodname_dotcom %}](/github/searching-for-information-on-github/about-searching-on-github)".
- Para pesquisar eventos com mais de 90 dias, use o qualificador `created`.

{% endwarning %}

#### Pesquisar com base no repositório

O qualificador `repo` limita as ações a um repositório específico pertencente à sua organização. Por exemplo:

* `repo:my-org/our-repo` localiza todos os eventos que ocorreram no repositório `our-repo` na organização `my-org`.
* `repo:my-org/our-repo repo:my-org/another-repo` localiza todos os eventos que ocorreram para ambos repositórios `our-repo` e `another-repo` na organização `my-org`.
* `-repo:my-org/not-this-repo` exclui todos os eventos que ocorreram no repositório `not-this-repo` na organização `my-org`.

Você deve incluir o nome da sua organização no qualificador `repo`; pesquisar somente `repo:our-repo` não funcionará.

#### Pesquisar com base no usuário

O qualificador `actor` incluir eventos com base no integrante da organização que fez a ação. Por exemplo:

* `actor:octocat` localiza todos os eventos feitos por `octocat`.
* `actor:octocat actor:hubot` localiza todos os eventos realizados por ambos `octocat` e `hubot`.
* `-actor:hubot` exclui todos os eventos realizados por `hubot`.

Só é possível usar o nome de usuário do {% data variables.product.product_name %}, e não o nome verdadeiro da pessoa.

#### Pesquisar com base na organização

O qualificador `org` limita as ações a uma organização específica. Por exemplo:

* `org:my-org` encontrou todos os eventos que ocorreram na organização `minha-org`.
* `org:my-org action:team` localiza todos os eventos de equipe que ocorreram na organização `my-org`;
* `-org:my-org` exclui todos os eventos que ocorreram na organização `minha-org`.

#### Pesquisar com base na ação

O qualificador `action` pesquisa eventos específicos, agrupados em categorias. Para informações sobre os eventos associados a essas categorias, consulte "[Ações auditadas](/admin/user-management/audited-actions)".

| Categoria | Descrição                                                                         |
| --------- | --------------------------------------------------------------------------------- |
| `hook`    | Tem todas as atividades relacionadas a webhooks.                                  |
| `org`     | Tem todas as atividades relacionadas à associação na organização.                 |
| `repo`    | Tem todas as atividades relacionadas aos repositórios pertencentes à organização. |
| `equipe`  | Tem todas as atividades relacionadas às equipes na organização.                   |

Você pode pesquisar conjuntos específicos de ações usando esses termos. Por exemplo:

* `action:team` localiza todos os eventos agrupados na categoria da equipe;
* `-action:billing` exclui todos os eventos na categoria de cobrança.

Cada categoria tem um conjunto de eventos associados que você pode usar no filtro. Por exemplo:

* `action:team.create` localiza todos os eventos em que uma equipe foi criada;
* `-action:billing.change_email` exclui todos os eventos em que a categoria de cobrança foi alterada.

#### Pesquisar com base no local

O qualificador `country` filtra as ações com base no país de origem.
- Você pode usar o código de duas letras do país ou o nome completo.
- Países com duas ou mais palavras devem ficar entre aspas. Por exemplo:
  * `country:de` localiza todos os eventos ocorridos na Alemanha;
  * `country:Mexico` localiza todos os eventos ocorridos no México;
  * `country:"United States"` localiza todos os eventos ocorridos nos Estados Unidos.

#### Pesquisar com base na hora da ação

O qualificador `created` filtra as ações com base na hora em que elas ocorreram.
- Defina as datas usando o formato `YYYY-MM-DD` (ano, mês, dia).
- As datas têm qualificadores [antes de, depois de e intervalos](/enterprise/{{ currentVersion }}/user/articles/search-syntax). Por exemplo:
  * `created:2014-07-08` localiza todos os eventos ocorridos em 8 de julho de 2014;
  * `created:>=2014-07-01` localiza todos os eventos ocorridos depois de 8 de julho de 2014;
  * `created:<=2014-07-01`  localiza todos os eventos ocorridos antes de 8 de julho de 2014;
  * `created:2014-07-01..2014-07-31`  localiza todos os eventos ocorridos em julho de 2014.
