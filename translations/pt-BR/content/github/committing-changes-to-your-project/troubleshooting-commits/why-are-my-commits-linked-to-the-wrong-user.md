---
title: Por que meus commits estão vinculados ao usuário errado?
redirect_from:
  - /articles/how-do-i-get-my-commits-to-link-to-my-github-account/
  - /articles/why-are-my-commits-linked-to-the-wrong-user
  - /github/committing-changes-to-your-project/why-are-my-commits-linked-to-the-wrong-user
intro: 'O {% data variables.product.product_name %} usa o endereço de e-mail no header do commit para vincular o commit a um usuário do GitHub. Se seus commits estão sendo vinculados a outro usuário, ou não vinculados a um usuário, você pode precisar alterar suas configurações locais de configuração do Git, {% if currentVersion != "github-ae@latest" %}, adicionar um endereço de e-mail nas configurações de e-mail da sua conta ou fazer ambas as coisas{% endif %}.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---
{% tip %}

**Observação**: se os commits estiverem vinculados a outro usuário, não significa que o usuário possa acessar o repositório pertencente a você. Um usuário só poderá acessar um repositório seu se você adicioná-lo como colaborador ou incluí-lo em uma equipe que tenha acesso ao repositório.

{% endtip %}

### Commits vinculados a outro usuário

Se seus commits estiverem vinculados a outro usuário, isso significa que o endereço de e-mail nas configurações locais do Git está conectado à conta desse usuário em {% data variables.product.product_name %}. Neste caso, você pode alterar o e-mail nas configurações locais do Git, {% if currentVersion == "github-ae@latest" %} ao endereço associado à sua conta em {% data variables.product.product_name %} para vincular seus commits futuros. Os commits antigos não serão vinculados. Para obter mais informações, consulte "[Definir o seu endereço de e-mail do commit](/github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address#setting-your-commit-email-address-in-git).{% else %} E adicione o novo endereço de e-mail à sua conta de {% data variables.product.product_name %} para vincular futuros commits à sua conta.

1. Para alterar o endereço de e-mail na sua configuração Git local, siga os passos em "[Definir o seu endereço de e-mail de commit](/github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address#setting-your-commit-email-address-in-git)". Se você trabalha em várias máquinas, precisa alterar essa configuração em cada uma deles.
2. Adicione o endereço de e-mail da etapa 2 às configurações da sua conta seguindo os passos em "[Adicionar um endereço de e-mail à sua conta GitHub](/articles/adding-an-email-address-to-your-github-account)".{% endif %}

Os commits criados a partir daí serão vinculados à sua conta.

### Commits não vinculados a nenhum usuário

Se seus commits não estiverem vinculados a nenhum usuário, o nome do autor do commit não será exibido como um link para o perfil de um usuário.

Para verificar o endereço de e-mail usado para esses commits e conectar commits à sua conta, siga estas etapas:

1. Navegue até o commit clicando no link da mensagem do commit. ![Link da mensagem do commit](/assets/images/help/commits/commit-msg-link.png)
2. Para ler uma mensagem sobre o motivo do commit não estar vinculado, passe o mouse sobre o {% octicon "question" aria-label="Question mark" %} azul à direita do nome de usuário. ![Mensagem do commit exibida ao passar o mouse](/assets/images/help/commits/commit-hover-msg.png)

  - **Autor não reconhecido (com endereço de e-mail)** Se você vir esta mensagem com um endereço de e-mail, o endereço que você usou para criar o commit não estará conectado à sua conta em {% data variables.product.product_name %}. {% if currentVersion != "github-ae@latest" %}Para vincular seus commits, [adicione o endereço de e-mail às suas configurações de e-mail do GitHub](/articles/adding-an-email-address-to-your-github-account).{% endif %} Se o endereço de e-mail tiver um Gravatar associado, o Gravatar será exibido ao lado do commit, em vez do Octoact cinza padrão.
  - **Autor não reconhecido (sem endereço de e-mail)** Se você vir esta mensagem sem um endereço de e-mail, significa que você usou um endereço de e-mail genérico que não pode ser conectado à sua conta em {% data variables.product.product_name %}.{% if currentVersion != "github-ae@latest" %} Você precisará [definir seu endereço de e-mail do commit no Git](/articles/setting-your-commit-email-address) e, em seguida, [adicionar o novo endereço às suas configurações de e-mail do GitHub](/articles/adding-an-email-address-to-your-github-account) para vincular seus futuros commits. Os commits antigos não serão vinculados.{% endif %}
  - **E-mail inválido** O endereço de e-mail nas configurações locais do Git está em branco ou não está formatado como um endereço de e-mail.{% if currentVersion != "github-ae@latest" %} Você precisará [definir seu endereço de e-mail de commit no Git](/articles/setting-your-commit-email-address) e, em seguida, [adicionar o novo endereço às suas configurações de email do GitHub](/articles/adding-an-email-address-to-your-github-account) para vincular seus futuros commits. Os commits antigos não serão vinculados.{% endif %}

{% if currentVersion == "github-ae@latest" %}
Você pode alterar o e-mail nas configurações locais do Git para o endereço associado à sua conta para vincular seus futuros commits. Os commits antigos não serão vinculados. Para obter mais informações, consulte "[Configurar o endereço de e-mail do commit](/github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address#setting-your-commit-email-address-in-git)".
{% endif %}

{% warning %}

Caso a configuração local do Git contenha um endereço de e-mail genérico ou um endereço de e-mail já anexado à conta de outro usuário, os commits anteriores não serão vinculados à sua conta. Embora o Git permita que você altere o endereço de e-mail usado para commits anteriores, é recomendável evitar isso, principalmente em um repositório compartilhado.

{% endwarning %}

### Leia mais

* "[Pesquisar commits](/articles/searching-commits)"
