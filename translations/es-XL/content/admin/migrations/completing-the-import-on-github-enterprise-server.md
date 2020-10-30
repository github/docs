---
title: Completar la importación en GitHub Enterprise Server
intro: 'Una vez que se haya aplicado la migración a tu instancia de destino y hayas revisado la migración, desbloquearás los repositorios y los eliminarás del origen. Antes de eliminar los datos de origen, se recomienda esperar alrededor de dos semanas para asegurarse de que todo funciona de acuerdo con lo esperado.'
redirect_from:
  - /enterprise/admin/guides/migrations/completing-the-import-on-github-enterprise/
  - /enterprise/admin/migrations/completing-the-import-on-github-enterprise-server
versions:
  enterprise-server: '*'
---

### Desbloquear repositorios en la instancia de destino

{% data reusables.enterprise_installation.ssh-into-instance %}
{% data reusables.enterprise_migrations.unlocking-on-instances %}

### Desbloquear repositorios en el origen

#### Desbloquear repositorios de una organización {% data variables.product.prodname_dotcom_the_website %}

Para desbloquear los repositorios en una organización{% data variables.product.prodname_dotcom_the_website %}, debes enviar una solicitud de `DELETE` <a href="/rest/reference/migrations#unlock-an-organization-repository" class="dotcom-only">al punto final de desbloqueo de migración</a>. Necesitarás:
  * Tu token de acceso para autenticación
  * El `id` único de la migración
  * El nombre del repositorio a desbloquear
```shell
curl -H "Authorization: token <em>GITHUB_ACCESS_TOKEN</em>" -X DELETE \
  -H "Accept: application/vnd.github.wyandotte-preview+json" \
  https://api.github.com/orgs/<em>orgname</em>/migrations/<em>id</em>/repos/<em>repo_name</em>/lock
```

#### Eliminar repositorios de una organización {% data variables.product.prodname_dotcom_the_website %}

Después de desbloquear los repositorios de la organización de {% data variables.product.prodname_dotcom_the_website %}, debes borrar todos los repositorios que migraste anteriormente utilizando [la terminal de borrado de repositorios](/enterprise/{{ currentVersion }}/v3/repos/#delete-a-repository). Necesitarás tu token de acceso para la autenticación:
```shell
curl -H "Authorization: token <em>GITHUB_ACCESS_TOKEN</em>" -X DELETE \
  https://api.github.com/repos/<em>orgname</em>/<em>repo_name</em>
```

#### Desbloquear repositorios desde una instancia de {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise_installation.ssh-into-instance %}
{% data reusables.enterprise_migrations.unlocking-on-instances %}
