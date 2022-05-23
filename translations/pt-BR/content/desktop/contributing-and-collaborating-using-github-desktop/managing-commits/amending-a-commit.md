---
title: Alterando um commit
intro: 'Você pode usar {% data variables.product.prodname_desktop %} para alterar seu último commit.'
versions:
  fpt: '*'
---

## Sobre alteração de um commit

Alterar um commit é uma maneira de modificar o commit mais recente que você criou no seu branch atual. Isso pode ser útil se você precisar editar a mensagem de commit ou se esqueceu de incluir alterações no commit.

Você pode continuar alterando um commit até que ele seja enviado para o repositório remoto. Depois de fazer push de um commit, a opção de alterá-lo fica desabilitada em {% data variables.product.prodname_desktop %}. Ao alterar um commit, você substitui o commit anterior por um novo commit para o seu branch atual. Alterar um commit que foi enviado por push para o repositório remoto pode causar confusão para outros colaboradores que trabalham com o repositório.

## Alterando um commit

{% data reusables.desktop.history-tab %}
2. Clique com o botão direito no commit mais recente e selecione **Alterar commit**. ![Menu alterar o contexto do commit](/assets/images/help/desktop/amend-commit-context-menu.png)
3. Clique no campo **Resumo** para modificar a mensagem de commit. Opcionalmente, você pode modificar ou adicionar informações sobre o commit no campo **Descrição**.
4. Selecione qualquer alteração não confirmada que você gostaria de adicionar ao commit. Para obter mais informações sobre a seleção de alterações, consulte "[Fazendo commit e revisando as alterações no seu projeto](/desktop/contributing-and-collaborating-using-github-desktop/making-changes-in-a-branch/committing-and-reviewing-changes-to-your-project#selecting-changes-to-include-in-a-commit)".
5. Depois de finalizar as alterações, clique **Alterar o último commit**. ![Alterar resumo do último commit](/assets/images/help/desktop/amend-last-commit-overview.png)
