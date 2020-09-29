---
title: Concluir a importação no GitHub Enterprise Server
intro: 'Depois de aplicar sua migração à instância de destino e após a revisão da migração, você vai desbloquear os repositórios e excluí-los da origem. Antes de excluir os dados da origem, é recomendável aguardar cerca de duas semanas para garantir o funcionamento adequado de todos os procedimentos.'
redirect_from:
  - /enterprise/admin/guides/migrations/completing-the-import-on-github-enterprise/
  - /enterprise/admin/migrations/completing-the-import-on-github-enterprise-server
versions:
  enterprise-server: '*'
---

### Desbloquear repositórios na instância de destino

{% data reusables.enterprise_installation.ssh-into-instance %}
{% data reusables.enterprise_migrations.unlocking-on-instances %}

### Desbloquear repositórios na origem

#### Desbloquear repositórios de uma organização do {% data variables.product.prodname_dotcom_the_website %}

Para desbloquear repositórios em uma organização do {% data variables.product.prodname_dotcom_the_website %}, você enviará uma solicitação `DELETE` para o <a href="/rest/reference/migrations#unlock-an-organization-repository" class="dotcom-only">ponto de extremidade de desbloqueio da migração</a>. Você precisará do seguinte:
  * Token de acesso para autenticação;
  * `id` exclusivo da migração;
  * Nome do repositório a ser desbloqueado.
```shell
curl -H "Authorization: token <em>GITHUB_ACCESS_TOKEN</em>" -X DELETE \
  -H "Accept: application/vnd.github.wyandotte-preview+json" \
  https://api.github.com/orgs/<em>orgname</em>/migrations/<em>id</em>/repos/<em>repo_name</em>/lock
```

#### Excluir repositórios de uma organização do {% data variables.product.prodname_dotcom_the_website %}

Depois de desbloquear os repositórios da organização do {% data variables.product.prodname_dotcom_the_website %}, você deve excluir todos os repositórios migrados anteriormente usando o [endpoint de exclusão de repositórios](/enterprise/{{ currentVersion }}/v3/repos/#delete-a-repository). Você precisará do token de acesso para autenticação:
```shell
curl -H "Authorization: token <em>GITHUB_ACCESS_TOKEN</em>" -X DELETE \
  https://api.github.com/repos/<em>orgname</em>/<em>repo_name</em>
```

#### Desbloquear repositórios de uma instância do {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise_installation.ssh-into-instance %}
{% data reusables.enterprise_migrations.unlocking-on-instances %}
