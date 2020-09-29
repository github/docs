---
title: Transferir um problema para outro repositório
intro: 'Para mover um problema para um repositório mais adequado, você pode transferir problemas abertos para outros repositórios.'
redirect_from:
  - /articles/transferring-an-issue-to-another-repository
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.18'
---

Para transferir um problema aberto para outro repositório, é preciso ter permissões de gravação no repositório em que o problema está e no repositório para onde você está transferindo o problema. Para obter mais informações, consulte "[Níveis de permissão do repositório para organizações](/articles/repository-permission-levels-for-an-organization)".

Você somente pode transferir problemas entre repositórios pertencentes à mesma conta de usuário ou organização. É possível transferir um problema de um repositório privado para um repositório público.

Quando você transfere um problema, os comentários e responsáveis são mantidos. As etiquetas do problema{% if currentVersion ver_lt "enterprise-server@2.19" %}, projetos,{% endif %} e marcos do problema não são preservados.{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %} Esse problema ficará nos quadros de projeto pertencentes a qualquer usuário proprietário ou quadro de projeto da organização e será removido de quaisquer quadros de projeto de repositório. Para obter mais informações, consulte "[Sobre quadros de projeto](/articles/about-project-boards)."{% endif %}

As pessoas ou equipes mencionadas no problema receberão uma notificação informando que o problema foi transferido para um novo repositório. O URL original redirecionará para o novo URL do problema. As pessoas que não tenham permissões de leitura no novo repositório verão um banner informando que o problema foi transferido para um novo repositório ao qual elas não têm acesso.

### Transferir um problema aberto para outro repositório

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issues %}
3. Na lista de problemas, clique no problema que deseja transferir.
4. Na barra lateral direita, clique em **Transfer issue** (Transferir problema). ![Botão para transferir problema](/assets/images/help/repository/transfer-issue.png)
5. Use o menu **Choose a repository** (Escolher um repositório) e selecione o repositório para o qual deseja transferir o problema. ![Seleção em Choose a repository (Escolher um repositório)](/assets/images/help/repository/choose-a-repository.png)
6. Clique em **Transfer issue** (Transferir problema). ![Botão Transfer issue (Transferir problema)](/assets/images/help/repository/transfer-issue-button.png)

### Leia mais

- "[Sobre problemas](/articles/about-issues)"
- "[Revisar o log de segurança](/articles/reviewing-your-security-log)"
- "[Revisar o log de auditoria da organização](/articles/reviewing-the-audit-log-for-your-organization)"
