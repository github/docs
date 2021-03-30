---
title: Criar um codespace
intro: Você pode criar um codespace para uma branch em um repositório para fazer o desenvolvimento on-line.
product: '{% data reusables.gated-features.codespaces %}'
permissions: 'Qualquer pessoa pode criar um codespace para qualquer repositório público ou para qualquer repositório que pertence à sua conta de usuário.'
redirect_from:
  - /github/developing-online-with-github-codespaces/creating-a-codespace
versions:
  free-pro-team: '*'
topics:
  - espaços de código
---

{% data reusables.codespaces.release-stage %}

### Sobre a criação do codespace

{% data reusables.codespaces.codespaces-are-personal %}

{% data reusables.codespaces.codespaces-are-per-branch %} {% data reusables.codespaces.concurrent-codespace-limit %} Para obter mais informações, consulte "[Excluir um codespace](/github/developing-online-with-codespaces/deleting-a-codespace)".

{% data reusables.codespaces.unsupported-repos %}

Não é possível criar um codespace em um repositório vazio. Se o seu repositório estiver vazio, crie um arquivo no repositório antes de criar um codespace. Para mais informações consulte "[Adicionar um arquivo a um repositório](/github/managing-files-in-a-repository/adding-a-file-to-a-repository)" e "[Adicionar um arquivo a um repositório usando a linha de comando](/github/managing-files-in-a-repository/adding-a-file-to-a-repository-using-the-command-line)".

O ambiente do codespace que você criar será baseado na configuração do repositório. Para obter mais informações, consulte "[Configurar o {% data variables.product.prodname_codespaces %} para seu projeto](/github/developing-online-with-codespaces/configuring-codespaces-for-your-project)".

{% data reusables.codespaces.about-personalization %} Para obter mais informações, consulte "[Personalizar {% data variables.product.prodname_codespaces %} para sua conta](/github/developing-online-with-codespaces/personalizing-codespaces-for-your-account)".

{% data reusables.codespaces.use-visual-studio-features %}

{% data reusables.codespaces.you-can-see-all-your-codespaces %}

### Criar um codespace

{% data reusables.repositories.navigate-to-repo %}
2. No nome do repositório, use o menu suspenso "Branch", e selecione o branch para o qual você deseja criar um codespace. ![Menu suspenso do branch](/assets/images/help/codespaces/branch-drop-down.png)
3. No nome do repositório, use o menu suspenso do {% octicon "download" aria-label="The download icon" %} **Código** e selecione **Abrir com os espaços de código**. ![Botão de abrir com codespaces](/assets/images/help/codespaces/open-with-codespaces-button.png)
4. Se você já tem um codespace para o branch, clique em {% octicon "plus" aria-label="The plus icon" %} **Novo codespace**. ![Botão de codespace novo](/assets/images/help/codespaces/new-codespace-button.png)
