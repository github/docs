---
title: Por que meus commits estão vinculados ao usuário errado?
redirect_from:
  - /articles/how-do-i-get-my-commits-to-link-to-my-github-account/
  - /articles/why-are-my-commits-linked-to-the-wrong-user
intro: 'O {% data variables.product.product_name %} usa o endereço de e-mail no header do commit para vincular o commit a um usuário do GitHub. Se os commits estiverem sendo vinculados a outro usuário ou não estiverem vinculados a nenhum usuário, talvez você precise alterar suas configurações locais do Git, adicionar um endereço de e-mail às configurações de e-mail da sua conta ou ambos.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---


{% tip %}

**Observação**: se os commits estiverem vinculados a outro usuário, não significa que o usuário possa acessar o repositório pertencente a você. Um usuário só poderá acessar um repositório seu se você adicioná-lo como colaborador ou incluí-lo em uma equipe que tenha acesso ao repositório.

{% endtip %}

### Commits vinculados a outro usuário

Se os commits estiverem vinculados a outro usuário, significa que o usuário adicionou o endereço de e-mail em suas configurações locais do Git local à conta dele do {% data variables.product.product_name %}. Nesse caso, altere o e-mail nas suas configurações locais do Git e adicione o novo endereço de e-mail à sua conta do {% data variables.product.product_name %} para vincular futuros commits a ela.

1. Para alterar o endereço de e-mail nas suas configurações local do Git, siga as etapas em "[Configurar endereço de e-mail do commit no Git](/articles/setting-your-commit-email-address)". Se você trabalha em várias máquinas, precisa alterar essa configuração em cada uma deles.
2. Adicione o endereço de e-mail da etapa 2 às configurações da sua conta seguindo as etapas em "[Adicionar endereço de e-mail à sua conta do GitHub](/articles/adding-an-email-address-to-your-github-account)".

Os commits criados a partir daí serão vinculados à sua conta.

### Commits não vinculados a nenhum usuário

Se seus commits não estiverem vinculados a nenhum usuário, o nome do autor do commit não será exibido como um link para o perfil de um usuário.

Para verificar o endereço de e-mail usado para esses commits e conectar commits à sua conta, siga estas etapas:

1. Navegue até o commit clicando no link da mensagem do commit. ![Link da mensagem do commit](/assets/images/help/commits/commit-msg-link.png)
2. Para ler uma mensagem sobre o motivo do commit não estar vinculado, passe o mouse sobre o {% octicon "question" aria-label="Question mark" %} azul à direita do nome de usuário. ![Mensagem do commit exibida ao passar o mouse](/assets/images/help/commits/commit-hover-msg.png)

  - **Autor não reconhecido (com endereço de e-mail)** – Se esta mensagem for exibida com um endereço de e-mail, significa que o endereço não foi adicionado às configurações da sua conta. Para vincular os commits, [adicione o endereço de e-mail às suas configurações de e-mail do GitHub](/articles/adding-an-email-address-to-your-github-account). Se o seu endereço de e-mail tiver um Gravatar associado a ele, o Gravatar será exibido ao lado do seu nome de usuário, em vez do nome Octocat padrão cinza.
  - **Autor não reconhecido (sem endereço de e-mail)** – Se esta mensagem for exibida sem um endereço de e-mail, significa que você usou um endereço de e-mail genérico que não pode ser adicionado às suas configurações de e-mail. Você precisará [configurar seu endereço de e-mail do commit no Git](/articles/setting-your-commit-email-address) e depois [adicionar o novo endereço às suas configurações de e-mail do GitHub](/articles/adding-an-email-address-to-your-github-account) para vincular os futuros commits. Os commits antigos não serão vinculados.
  - **E-mail inválido** – Significa que o endereço de e-mail nas suas configurações locais do Git está em branco ou fora do formato. Você precisará [configurar seu endereço de e-mail do commit no Git](/articles/setting-your-commit-email-address) e depois [adicionar o novo endereço às suas configurações de e-mail do GitHub](/articles/adding-an-email-address-to-your-github-account) para vincular os futuros commits. Os commits antigos não serão vinculados.

{% warning %}

Caso a configuração local do Git contenha um endereço de e-mail genérico ou um endereço de e-mail já anexado à conta de outro usuário, os commits anteriores não serão vinculados à sua conta. Embora o Git permita que você altere o endereço de e-mail usado para commits anteriores, é recomendável evitar isso, principalmente em um repositório compartilhado.

{% endwarning %}

### Leia mais

* "[Pesquisar commits](/articles/searching-commits)"
