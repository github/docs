---
title: Práticas recomendadas para deixar a empresa
intro: 'A mudança de emprego é um fato da vida real. Se você usa sua conta de usuário do GitHub para fins pessoais *e* profissionais, é preciso lembrar de algumas práticas quando você deixa sua empresa ou organização.'
redirect_from:
  - /articles/best-practices-for-leaving-your-company
versions:
  free-pro-team: '*'
topics:
  - contas
---

Antes de sair da empresa, não se esqueça de atualizar as seguintes informações em sua conta de usuário:

- Anule a confirmação do endereço de e-mail da sua empresa [excluindo-o nas configurações do e-mail](/articles/changing-your-primary-email-address). Você pode adicioná-lo novamente sem verificação para manter os commits associados vinculados à sua conta.
- [Altere o seu endereço de e-mail principal](/articles/changing-your-primary-email-address) do e-mail da empresa para seu e-mail pessoal.
{% if currentVersion == "free-pro-team@latest" %}
- [Verifique seu novo endereço de e-mail principal](/articles/verifying-your-email-address).
{% endif %}
- [Altere o nome de usuário no GitHub](/articles/changing-your-github-username) para remover quaisquer referências à sua empresa ou organização, se necessário.

## Saída das organizações

Se você esteve trabalhando com repositórios que pertencem a uma organização, é conveniente [remover a si mesmo como integrante da organização](/articles/removing-yourself-from-an-organization). Caso você seja o proprietário da organização, primeiramente, será preciso [transferir a propriedade da organização](/articles/transferring-organization-ownership) para outra pessoa.

## Remover associações profissionais a repositórios pessoais

Se você esteve colaborando profissionalmente com outra pessoa em repositórios que pertencem à conta de usuário pessoal dessa pessoa, é conveniente [remover a si mesmo como um colaborador](/articles/removing-yourself-from-a-collaborator-s-repository) desses repositórios.

- [Pare de inspecionar repositórios](https://github.com/watching) relacionados ao seu trabalho. Você não desejará mais receber essas notificações!
- [Transfira repositórios que possui](/articles/how-to-transfer-a-repository) e que outras pessoas podem precisar para continuar trabalhando após a sua saída.
- [Exclua bifurcações que pertencem a você](/articles/deleting-a-repository) e estão relacionadas ao trabalho que estava fazendo. Não se preocupe, excluir uma bifurcação não exclui o repositório upstream.
- Exclua cópias locais de suas bifurcações que possam existir no seu computador:

```shell
$ rm -rf <em>work_directory</em>
```
