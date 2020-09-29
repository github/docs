---
title: Import auf GitHub Enterprise Server abschließen
intro: 'Nachdem Ihre Migration auf Ihre Zielinstanz angewendet wurde und Sie die Migration überprüft haben, entsperren Sie die Repositorys, und löschen Sie sie von der Quelle. Vor dem Löschen Ihrer Quelldaten sollten Sie etwa zwei Wochen warten, um sicherzugehen, dass alles erwartungsgemäß funktioniert.'
redirect_from:
  - /enterprise/admin/guides/migrations/completing-the-import-on-github-enterprise/
  - /enterprise/admin/migrations/completing-the-import-on-github-enterprise-server
versions:
  enterprise-server: '*'
---

### Repositorys auf der Zielinstanz entsperren

{% data reusables.enterprise_installation.ssh-into-instance %}
{% data reusables.enterprise_migrations.unlocking-on-instances %}

### Repositorys auf der Quellinstanz entsperren

#### Repositorys auf einer {% data variables.product.prodname_dotcom_the_website %}-Organisation entsperren

Um die Repositorys in einer {% data variables.product.prodname_dotcom_the_website %}-Organisation zu entsperren, senden Sie eine `DELETE`-Anforderung an den <a href="/rest/reference/migrations#unlock-an-organization-repository" class="dotcom-only">Endpunkt zum Entsperren der Migration</a>. Sie benötigen Folgendes:
  * Ihr Zugriffstoken für die Authentifizierung
  * die eindeutige `ID` der Migration
  * den Namen des zu entsperrenden Repositorys
```shell
curl -H "Authorization: token <em>GITHUB_ACCESS_TOKEN</em>" -X DELETE \
  -H "Accept: application/vnd.github.wyandotte-preview+json" \
  https://api.github.com/orgs/<em>orgname</em>/migrations/<em>id</em>/repos/<em>repo_name</em>/lock
```

#### Repositorys aus einer {% data variables.product.prodname_dotcom_the_website %}-Organisation löschen

After unlocking the {% data variables.product.prodname_dotcom_the_website %} organization's repositories, you should delete every repository you previously migrated using [the repository delete endpoint](/enterprise/{{ currentVersion }}/v3/repos/#delete-a-repository). Sie benötigen Ihr Zugriffstoken für die Authentifizierung:
```shell
curl -H "Authorization: token <em>GITHUB_ACCESS_TOKEN</em>" -X DELETE \
  https://api.github.com/repos/<em>orgname</em>/<em>repo_name</em>
```

#### Repositorys auf einer {% data variables.product.prodname_ghe_server %}-Instanz entsperren

{% data reusables.enterprise_installation.ssh-into-instance %}
{% data reusables.enterprise_migrations.unlocking-on-instances %}
