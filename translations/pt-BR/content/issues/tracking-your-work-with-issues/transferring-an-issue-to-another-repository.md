---
title: Transferir um problema para outro repositório
intro: 'Para mover um problema para um repositório mais adequado, você pode transferir problemas abertos para outros repositórios.'
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
shortTitle: Transferir um problema
---

Para transferir um problema aberto para outro repositório, é preciso ter acesso de gravação no repositório em que o problema está e no repositório para onde você está transferindo o problema. Para obter mais informações, consulte "[Funções do repositório para uma organização](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)".

{% note %}

**Observação**: Você só pode transferir problemas entre repositórios pertencentes à mesma conta de usuário ou de organização. {% ifversion fpt or ghes or ghec %}Um problema de repositório privado não pode ser transferido para um repositório público.{% endif %}

{% endnote %}

Ao transferir um problema, os comentários, etiquetas e responsáveis são mantidos. Os marcos do problema não são mantidos. Esse problema permanecerá em qualquer quadro de projeto pertencente ao usuário ou à organização e será removido dos quadros de projeto de todos os repositórios. Para obter mais informações, consulte "[Sobre quadros de projeto](/articles/about-project-boards)".

As pessoas ou equipes mencionadas no problema receberão uma notificação informando que o problema foi transferido para um novo repositório. O URL original redirecionará para o novo URL do problema. As pessoas que não tenham permissões de leitura no novo repositório verão um banner informando que o problema foi transferido para um novo repositório ao qual elas não têm acesso.

## Transferir um problema aberto para outro repositório

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issues %}
3. Na lista de problemas, clique no problema que deseja transferir.
4. Na barra lateral direita, clique em **Transfer issue** (Transferir problema). ![Botão para transferir problema](/assets/images/help/repository/transfer-issue.png)
5. Use o menu **Choose a repository** (Escolher um repositório) e selecione o repositório para o qual deseja transferir o problema. ![Seleção em Choose a repository (Escolher um repositório)](/assets/images/help/repository/choose-a-repository.png)
6. Clique em **Transfer issue** (Transferir problema). ![Botão Transfer issue (Transferir problema)](/assets/images/help/repository/transfer-issue-button.png)

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Para transferir um problema, use o subcomando `gh issue transfer`. Substitua o parâmetro `problema` pelo número ou URL do problema. Substitua o parâmetro `{% ifversion ghes %}nome do host/{% endif %}proprietário/repositório` pelo {% ifversion ghes %}URL{% else %}nome{% endif %} do repositório para o qual você deseja transferir o problema como, por exemplo, `{% ifversion ghes %}https://ghe. o/{% endif %}octocat/octo-repo`.

```shell
gh issue transfer <em>issue</em> <em>{% ifversion ghes %}hostname/{% endif %}owner/repo</em>
```

{% endcli %}

## Leia mais

- "[Sobre problemas](/articles/about-issues)"
- "[Revisar o log de segurança](/articles/reviewing-your-security-log)"
- "[Revisar o log de auditoria da organização](/organizations/keeping-your-organization-secure/reviewing-the-audit-log-for-your-organization)"
