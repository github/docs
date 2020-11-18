---
title: Por que meus commits estão vinculados ao usuário errado?
redirect_from:
  - /articles/how-do-i-get-my-commits-to-link-to-my-github-account/
  - /articles/why-are-my-commits-linked-to-the-wrong-user
intro: 'O {% data variables.product.product_name %} usa o endereço de e-mail no header do commit para vincular o commit a um usuário do GitHub. If your commits are being linked to another user, or not linked to a user at all, you may need to change your local Git configuration settings{% if currentVersion != "github-ae@latest" %}, add an email address to your account email settings, or do both{% endif %}.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---


{% tip %}

**Observação**: se os commits estiverem vinculados a outro usuário, não significa que o usuário possa acessar o repositório pertencente a você. Um usuário só poderá acessar um repositório seu se você adicioná-lo como colaborador ou incluí-lo em uma equipe que tenha acesso ao repositório.

{% endtip %}

### Commits vinculados a outro usuário

If your commits are linked to another user, that means the email address in your local Git configuration settings is connected to that user's account on {% data variables.product.product_name %}. In this case, you can change the email in your local Git configuration settings{% if currentVersion == "github-ae@latest" %} to the address associated with your account on {% data variables.product.product_name %} to link your future commits. Os commits antigos não serão vinculados. For more information, see "[Setting your commit email address](/github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address#setting-your-commit-email-address-in-git)."{% else %} and add the new email address to your {% data variables.product.product_name %} account to link future commits to your account.

1. To change the email address in your local Git configuration, follow the steps in "[Setting your commit email address](/github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address#setting-your-commit-email-address-in-git)". Se você trabalha em várias máquinas, precisa alterar essa configuração em cada uma deles.
2. Add the email address from step 2 to your account settings by following the steps in "[Adding an email address to your GitHub account](/articles/adding-an-email-address-to-your-github-account)".{% endif %}

Os commits criados a partir daí serão vinculados à sua conta.

### Commits não vinculados a nenhum usuário

Se seus commits não estiverem vinculados a nenhum usuário, o nome do autor do commit não será exibido como um link para o perfil de um usuário.

Para verificar o endereço de e-mail usado para esses commits e conectar commits à sua conta, siga estas etapas:

1. Navegue até o commit clicando no link da mensagem do commit. ![Link da mensagem do commit](/assets/images/help/commits/commit-msg-link.png)
2. Para ler uma mensagem sobre o motivo do commit não estar vinculado, passe o mouse sobre o {% octicon "question" aria-label="Question mark" %} azul à direita do nome de usuário. ![Mensagem do commit exibida ao passar o mouse](/assets/images/help/commits/commit-hover-msg.png)

  - **Unrecognized author (with email address)** If you see this message with an email address, the address you used to author the commit is not connected to your account on {% data variables.product.product_name %}. {% if currentVersion != "github-ae@latest" %}To link your commits, [add the email address to your GitHub email settings](/articles/adding-an-email-address-to-your-github-account).{% endif %} If the email address has a Gravatar associated with it, the Gravatar will be displayed next to the commit, rather than the default gray Octocat.
  - **Unrecognized author (no email address)** If you see this message without an email address, you used a generic email address that can't be connected to your account on {% data variables.product.product_name %}.{% if currentVersion != "github-ae@latest" %} You will need to [set your commit email address in Git](/articles/setting-your-commit-email-address), then [add the new address to your GitHub email settings](/articles/adding-an-email-address-to-your-github-account) to link your future commits. Old commits will not be linked.{% endif %}
  - **Invalid email** The email address in your local Git configuration settings is either blank or not formatted as an email address.{% if currentVersion != "github-ae@latest" %} You will need to [set your commit email address in Git](/articles/setting-your-commit-email-address), then [add the new address to your GitHub email settings](/articles/adding-an-email-address-to-your-github-account) to link your future commits. Old commits will not be linked.{% endif %}

{% if currentVersion == "github-ae@latest" %}
You can change the email in your local Git configuration settings to the address associated with your account to link your future commits. Os commits antigos não serão vinculados. For more information, see "[Setting your commit email address](/github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address#setting-your-commit-email-address-in-git)."
{% endif %}

{% warning %}

Caso a configuração local do Git contenha um endereço de e-mail genérico ou um endereço de e-mail já anexado à conta de outro usuário, os commits anteriores não serão vinculados à sua conta. Embora o Git permita que você altere o endereço de e-mail usado para commits anteriores, é recomendável evitar isso, principalmente em um repositório compartilhado.

{% endwarning %}

### Leia mais

* "[Pesquisar commits](/articles/searching-commits)"
