---
title: Criar um codespace
intro: Você pode criar um codespace para uma branch em um repositório para fazer o desenvolvimento on-line.
permissions: 'Anyone can create a codespace for any public repository, or for any repository owned by their user account.'
redirect_from:
  - /github/developing-online-with-github-codespaces/creating-a-codespace
  - /github/developing-online-with-codespaces/creating-a-codespace
versions:
  free-pro-team: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
---

{% data reusables.codespaces.release-stage %}

### Sobre a criação do codespace

Você pode criar um codespace em {% data variables.product.prodname_dotcom_the_website %} ou em {% data variables.product.prodname_vscode %}. {% data reusables.codespaces.codespaces-are-personal %}

Os codespaces são associados a um branch específico de um repositório e o repositório não pode estar vazio. {% data reusables.codespaces.concurrent-codespace-limit %} Para obter mais informações, consulte "[Excluir um codespace](/github/developing-online-with-codespaces/deleting-a-codespace)".


Ao criar um codespace, várias etapas acontecem para permitir o acesso total ao seu ambiente de desenvolvimento.

- Recursos como uma VM e armazenamento para seu contêiner foram atribuídos. Uma nova VM é criada toda vez que você criar ou iniciar um codespace para garantir que você sempre tenha as versões mais recentes e patch de segurança.
- {% data variables.product.prodname_codespaces %} recebe informações sobre o seu repositório, branch, commits, seu repositório dotfiles público e quaisquer segredos que você tenha criado.
- {% data variables.product.prodname_codespaces %} executa um clone raso do repositório.
- Se você tiver um no seu repositório, {% data variables.product.prodname_codespaces %} irá executar o arquivo `devcontainer.json`. Para obter mais informações, consulte "[Configurar o {% data variables.product.prodname_codespaces %} para seu projeto](/github/developing-online-with-codespaces/configuring-codespaces-for-your-project)".
- Seu contêiner Docker, `docker-compose`, ou outra inicialização é executada.
- Neste ponto, o codespace está marcado como disponível e você pode conectar-se.
- Assim que o codespace for disponibilizado, dependendo dos comandos no devcontainer, o codespace continuará com algumas configurações.
  - O codespace compartilha as portas adicionadas no arquivo</code>devcontainer.json.`.</li>
<li>O codespace executa qualquer coisa especificada em <code>postCreateCommand`.
  - {% data variables.product.prodname_codespaces %} clona o repositório do dotfiles no ambiente de código e procura um arquivo de instalação. Para obter mais informações, consulte "[Personalizar {% data variables.product.prodname_codespaces %} para sua conta](/github/developing-online-with-codespaces/personalizing-codespaces-for-your-account)".
  - Por fim, o código do repositório faz um clone completo para que você tenha acesso total ao mesmo.


{% data reusables.codespaces.use-visual-studio-features %}

{% data reusables.codespaces.you-can-see-all-your-codespaces %}

### Criar um codespace

{% data reusables.repositories.navigate-to-repo %}
2. No nome do repositório, use o menu suspenso "Branch", e selecione o branch para o qual você deseja criar um codespace.

  ![Menu suspenso do branch](/assets/images/help/codespaces/branch-drop-down.png)

3. No nome do repositório, use o menu suspenso do {% octicon "download" aria-label="The download icon" %} **Código** e selecione **Abrir com os espaços de código**.

  ![Botão de abrir com codespaces](/assets/images/help/codespaces/open-with-codespaces-button.png)

4. Para criar um codespace usando um tipo de máquina padrão, clique em {% octicon "plus" aria-label="The plus icon" %} **Novo codespace**.

  ![Botão de codespace novo](/assets/images/help/codespaces/new-codespace-button.png)


   
