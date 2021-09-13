---
title: Sobre verificações de status obrigatórias
intro: As verificações de status obrigatórias garantem que todos os testes de CI sejam aprovados antes que os colaboradores possam fazer alterações em um branch protegido.
product: '{% data reusables.gated-features.protected-branches %}'
redirect_from:
  - /articles/about-required-status-checks
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### Sobre verificações de status obrigatórias

Se você aplicou proteções de branch no repositório, será possível configurar as verificações de status obrigatórias. Se você aplicou proteções de branch no repositório, será possível configurar as verificações de status obrigatórias. Para obter mais informações, consulte "[Configurar branches protegidos](/articles/configuring-protected-branches/)" e "[Habilitar verificações de status obrigatórias](/articles/enabling-required-status-checks)". Para obter mais informações, consulte "[Sobre verificações de status](/github/administering-a-repository/enabling-required-status-checks)".

Depois de habilitar as verificações de status obrigatórias, todas elas deverão ser aprovadas para que os branches possam passar por merge no branch protegido. Depois que todas as verificações de status necessárias passarem, quaisquer commits devem ser enviados por push para outro branch e, em seguida, mesclados ou enviados por push diretamente para o branch protegido.

![Fazer merge do branch protegido ](/assets/images/help/repository/req-status-check-all-passed.png)

{% tip %}

**Observação:** Qualquer pessoa ou integração com permissões de gravação em um repositório pode configurar o estado de qualquer verificação de status no repositório. O {% data variables.product.product_name %} não analisa se o autor de uma verificação está autorizado a criar uma verificação com um determinado nome ou modificar um status existente. Antes de realizar o merge de uma pull request, você deve verificar se o autor de cada status, listado na caixa de merge, é esperado.

{% endtip %}

Os administradores de um repositório poderão fazer merge de um branch protegido mesmo se as verificações de status obrigatórias tiverem falhado ou estiverem pendentes. Você pode exigir que os administradores estejam sujeitos a verificações de status obrigatórias. Para obter mais informações, consulte "[Habilitando verificações de status obrigatórias](/github/administering-a-repository/enabling-required-status-checks)".

![Merge do branch protegido pelo administrador](/assets/images/help/repository/req-status-check-admin-merge.png)

Os administradores também poderão fazer merge de um branch protegido mesmo se o branch não estiver atualizado com o branch base.

### Configurações de verificação de status obrigatórias

Você pode optar por tornar mais ou menos rígidas as verificações de status, se quiser exigir que seu branch seja atualizado com o branch base antes de sofrer merge. Para obter mais informações, consulte "[Tipos de verificações de status obrigatórias](/github/administering-a-repository/types-of-required-status-checks)".

### Solução de problemas de verificações de status necessárias

Se você tiver uma verificação e um status com o mesmo nome e selecionar esse nome como uma verificação de status obrigatória, a verificação e o status serão obrigatórios. Para obter mais informações, consulte "[Verificações](/rest/reference/checks)".

Após configuração das verificações de status obrigatórias, o branch deverá ser atualizado com o branch base antes da ação de merge. Isso garante que o branch foi testado com o código mais recente do branch base. Se o branch estiver desatualizado, você precisará fazer merge do branch base no seu branch.

{% note %}

**Observação:** também é possível atualizar o seu branch com o branch base usando o rebase do Git. Para obter mais informações, consulte "[Rebase no Git](/github/using-git/about-git-rebase)".

{% endnote %}

![Branch desatualizado](/assets/images/help/repository/req-status-check-out-of-date.png)

Não será possível fazer push de alterações locais em um branch protegido enquanto todas as verificações de status obrigatórias não forem aprovadas. Sendo assim, você receberá uma mensagem de erro semelhante a esta:

```shell
remote: error: GH006: Protected branch update failed for refs/heads/main.
remote: error: Required status check "ci-build" is failing
```
{% note %}

**Observação:** as pull requests que são atualizadas e passam nas verificações de status obrigatórias podem sofrer merge localmente e enviadas por push ao branch protegido. Isso pode ser feito sem verificações de status em execução no próprio commit de merge.

{% endnote %}

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.20" %}

Por vezes, os resultados das verificações de status para o commit de mescla teste e o commit principal entrarão em conflito. Se o commit de mescla teste tiver um status, ele deve passar. Caso contrário, o status do commit principal deve passar antes de você poder mesclar o branch. Para obter mais informações sobre os commits de mescla teste, consulte "[Pull requests](/rest/reference/pulls#response-1)".

![Branch com commits de mescla conflitantes](/assets/images/help/repository/req-status-check-conflicting-merge-commits.png)
{% endif %}

### Leia mais

- "[Sobre verificações de status](/github/collaborating-with-issues-and-pull-requests/about-status-checks)"
