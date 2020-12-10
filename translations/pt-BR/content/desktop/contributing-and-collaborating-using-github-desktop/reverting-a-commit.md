---
title: Reverter um commit
intro: Você pode reverter um commit específico para remover suas alterações do seu branch.
redirect_from:
  - /desktop/contributing-to-projects/reverting-a-commit
versions:
  free-pro-team: '*'
---

Ao reverter para um commit anterior, a reversão também passa a ser um commit. Além disso, o commit original fica no histórico do repositório.

{% tip %}

**Dica:** ao reverter vários commits, é melhor fazer a reversão do mais recente para o mais antigo. Reverter commits em outra ordem pode gerar conflitos de merge.

{% endtip %}

{% mac %}

{% data reusables.desktop.history-tab %}
{% data reusables.desktop.revert-commit %}
  ![Opção Revert (Reverter) acima da exibição diff](/assets/images/help/desktop/commit-revert-mac.png)

{% endmac %}

{% windows %}

{% data reusables.desktop.history-tab %}
{% data reusables.desktop.revert-commit %}
  ![Opção Revert (Reverter) acima da exibição diff](/assets/images/help/desktop/commit-revert-win.png)

{% endwindows %}
