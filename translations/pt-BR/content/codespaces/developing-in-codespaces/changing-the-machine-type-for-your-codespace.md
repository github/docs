---
title: Alterando o tipo de máquina para seu codespace
shortTitle: Alterando o tipo da máquina
intro: Você pode alterar o tipo de máquina que está executando o seu codespace para você usar os recursos apropriados para o trabalho que está fazendo.
product: '{% data reusables.gated-features.codespaces %}'
versions:
  free-pro-team: '*'
topics:
  - Codespaces
---

## Sobre os tipos de máquina

{% note %}

**Observação:** Você só pode selecionar ou alterar o tipo de máquina se você for integrante de uma organização usando {% data variables.product.prodname_codespaces %} e estiver criando um codespace em um repositório pertencente a essa organização.

{% endnote %}

{% data reusables.codespaces.codespaces-machine-types %}

Você pode escolher um tipo de máquina ao criar um codespace ou você pode mudar o tipo de máquina a qualquer momento depois de criar um codespace.

Para obter informações sobre como escolher um tipo de máquina ao criar um codespace, consulte "[Criando um codespace](/codespaces/developing-in-codespaces/creating-a-codespace#creating-a-codespace)". Para informações sobre como mudar o tipo de máquina em {% data variables.product.prodname_vscode %}, consulte "[Usando {% data variables.product.prodname_codespaces %} em {% data variables.product.prodname_vscode %}](/codespaces/developing-in-codespaces/using-codespaces-in-visual-studio-code#changing-the-machine-type-in-visual-studio-code)."

## Alterar o tipo da máquina em {% data variables.product.prodname_dotcom %}

{% data reusables.codespaces.your-codespaces-procedure-step %}

   O tipo de máquina atual para cada um dos seus codespaces é exibido.

   ![Lista "Seus codespaces"](/assets/images/help/codespaces/your-codespaces-list.png)

1. Clique nas reticências (**...**) à direita do codespace que você deseja modificar.
1. Clique **Alterar tipo de máquina**.

   ![Opção de menu '"Alterar tipo de máquina"](/assets/images/help/codespaces/change-machine-type-menu-option.png)

1. Escolha o tipo de máquina necessária.

2. Clique **Atualizar o codespace**.

   A alteração entrará em vigor na próxima vez que seu codespace for reiniciado.

## Forçar uma atualização imediata de um codespace em execução no momento

Se você mudar o tipo de máquina de um codespace que você está usando atualmente desejar aplicar as alterações imediatamente, você poderá forçar a reinicialização do codespace.

1. No canto inferior esquerdo da janela do seu codespace, clique em **{% data variables.product.prodname_codespaces %}**.

   ![Clique em "{% data variables.product.prodname_codespaces %}"](/assets/images/help/codespaces/codespaces-button.png)

1. Entre opções que são exibidas na parte superior da página, selecione **Codespaces: Parar os codespaces atuais**.

   ![Opção "Suspender codespace atual"](/assets/images/help/codespaces/suspend-current-codespace.png)

1. Após a interrupção do codespace, clique em **Reiniciar o codespace**.

   ![Clique em "Retomar"](/assets/images/help/codespaces/resume-codespace.png)
