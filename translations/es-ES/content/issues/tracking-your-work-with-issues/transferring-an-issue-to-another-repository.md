---
title: Transferir una propuesta a otro repositorio
intro: 'Para mover una propuesta a un repositorio al que mejor se ajuste, puedes transferir propuestas abiertas a otros repositorios.'
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/transferring-an-issue-to-another-repository
  - /articles/transferring-an-issue-to-another-repository
  - /github/managing-your-work-on-github/transferring-an-issue-to-another-repository
  - /issues/tracking-your-work-with-issues/managing-issues/transferring-an-issue-to-another-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Transferir una propuesta
---

Para transferir una propuesta abierta a otro repositorio, debes tener acceso de escritura en el repositorio en el cual se encuentra la propuesta y en el que la recibirá cuando la transfieras. Para obtener más información, consulta la sección "[Roles de repositorio para una organización](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)".

{% note %}

**Nota**: Solo puedes transferir propuestas entre los repositorios que pertenezcan a la misma cuenta de usuario o de organización. {% ifversion fpt or ghes or ghec %}Una propuesta de repositorio privado no puede transferirse a un repositorio público.{% endif %}

{% endnote %}

Cuando transfieres una propuesta, los comentarios, etiquetas y asignados se retienen. Los hitos de la propuesta no se retienen. Esta propuesta se mantendrá en cualquier tablero de proyecto que pertenezca al usuario o que se encuentre en la organización y se eliminará de cualquier tablero de proyecto de los repositorios. Para obtener más información, consulta "[Acerca de los tableros de proyectos](/articles/about-project-boards)."

Las personas o equipos que se mencionan en la propuesta recibirán una notificación que les haga saber que la propuesta se transfirió a un repositorio nuevo. La URL original se redirige a la URL nueva de la propuesta. Las personas que no tengan permisos de lectura en el repositorio nuevo verán un anuncio que les hará saber que la propuesta se transfirió a un repositorio nuevo al que no pueden acceder.

## Transferir una propuesta abierta a otro repositorio

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issues %}
3. En la lista de propuestas, haz clic en la propuesta que quieres transferir.
4. En la barra lateral derecha, haz clic en **Transfer issue** (Transferir propuesta). ![Botón para transferir propuesta](/assets/images/help/repository/transfer-issue.png)
5. Utiliza el menú desplegable **Choose a repository** (Elegir un repositorio) y selecciona el repositorio al que quieres transferir la propuesta. ![Elige una selección de repositorio](/assets/images/help/repository/choose-a-repository.png)
6. Haz clic en **Transfer issue** (Transferir propuesta). ![Botón Transfer issue (Transferir propuesta)](/assets/images/help/repository/transfer-issue-button.png)

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Para transferir una propuesta, utiliza el subcomando `gh issue transfer`. Reemplaza el parámetro `issue` con el número o URL de la propuesta. Reemplaza el parámetro `{% ifversion ghes %}hostname/{% endif %}owner/repo` con {% ifversion ghes %}la URL{% else %}el nombre{% endif %} del repositorio al que quieras transferir la propuesta, tal como `{% ifversion ghes %}https://ghe.io/{% endif %}octocat/octo-repo`.

```shell
gh issue transfer <em>issue</em> <em>{% ifversion ghes %}hostname/{% endif %}owner/repo</em>
```

{% endcli %}

## Leer más

- "[Acerca de las propuestas](/articles/about-issues)"
- "[Revisar tu registro de seguridad](/articles/reviewing-your-security-log)"
- "[Revisar el registro de auditoría para tu organización](/organizations/keeping-your-organization-secure/reviewing-the-audit-log-for-your-organization)"
