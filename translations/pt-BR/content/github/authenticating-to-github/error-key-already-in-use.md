---
title: 'Erro: chave em uso'
intro: 'Este erro ocorre quando você tenta [adicionar uma chave](/articles/adding-a-new-ssh-key-to-your-github-account) que já foi adicionada a outra conta ou repositório.'
redirect_from:
  - /articles/error-key-already-in-use
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Descobrir onde a chave foi usada

Para determinar onde a chave foi usada, abra um terminal e digite o comando `ssh`. Use o sinalizador `-i` para fornecer o caminho para a chave que deseja marcar:

```shell
$ ssh -T -ai <em>~/.ssh/id_rsa</em> git@{% data variables.command_line.codeblock %}
# Conecte-se a {% data variables.product.product_location %} usando uma chave ssh específica
> Olá, <em>username</em>! Você conseguiu se autenticar, mas o GitHub não
> fornece acesso shell.
```

O *username* na resposta é a conta do {% data variables.product.product_name %} a que a chave está vinculada no momento. Se a resposta for parecida com "username/repo", a chave foi vinculada a um repositório como [*chave de implantação*](/guides/managing-deploy-keys#deploy-keys).

### Corrigir o problema

Para resolver o problema, primeiro remova a chave da outra conta ou repositório e [a adicione à sua conta](/articles/adding-a-new-ssh-key-to-your-github-account).

Se você não tiver permissões para transferir a chave e não puder entrar em contato com um usuário que tenha, remova o par de chaves e [gere uma totalmente nova](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).

### Chaves de implantação

Depois que uma chave tiver sido vinculada a um repositório como uma chave de implantação, ela não poderá ser usada em outro repositório.  Se você encontrar este erro enquanto configura chaves de implantação, consulte "[Gerenciar de chaves de implantação](/guides/managing-deploy-keys)."
