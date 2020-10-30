---
title: Alternar entre branches
intro: É possível exibir e fazer commits em qualquer branch do seu repositório.
versions:
  free-pro-team: '*'
---

### Alternar entre branches
Se houver alterações salvas sem commit, você terá que decidir o que fazer com elas antes de poder alternar entre os branches. Você pode fazer commit das alterações no branch atual, armazená-las no branch atual ou levá-las para o novo branch. Se optar por fazer commit das alterações no branch atual, siga as etapas indicadas em "[Fazer commit e revisar as alterações do projeto](/desktop/contributing-to-projects/committing-and-reviewing-changes-to-your-project)" antes de alternar entre os branches.

{% tip %}

**Dica**: Você pode definir um comportamento-padrão para alternar branches nas configurações **Avançadas**. Para obter mais informações, consulte “[Definindo as configurações básicas](/desktop/getting-started-with-github-desktop/configuring-basic-settings)".

{% endtip %}

{% data reusables.desktop.current-branch-menu %}
{% data reusables.desktop.switching-between-branches %}
  ![Lista de branches no repositório](/assets/images/help/desktop/click-branch-in-drop-down-mac.png)
3. Se você tiver alterações salvas sem commit, escolha entre **Leave my changes** (Deixar as alterações) ou **Bring my changes** (Levar as alterações) e clique em **Switch Branch** (Alternar branch). ![Alternar branch com opções de alteração](/assets/images/help/desktop/stash-changes-options.png)

### Recuperar alterações stashed
Para acessar as alterações com stash em outro branch, volte para o branch em que foi feito o stash das alterações em questão.

{% data reusables.desktop.current-branch-menu %}
{% data reusables.desktop.switching-between-branches %}
  ![Lista de branches no repositório](/assets/images/help/desktop/click-branch-in-drop-down-mac.png)
3. Na barra lateral à esquerda, clique em **Stashed Changes** (Alterações stashed). ![Opção Stashed Changes (Alterações stashed)](/assets/images/help/desktop/stashed-changes.png)
4. Para excluir as alterações stashed, clique em **Discard** (Descartar). Para usá-las, clique em **Restore** (Restaurar). ![Descartar ou restaurar alterações stashed](/assets/images/help/desktop/discard-restore-stash-buttons.png)
