---
title: Atualizar atribuição de autor do commit com o Importador do GitHub
intro: 'Durante uma importação, é possível corresponder os commits no repositório com a conta do GitHub do autor do commit.'
redirect_from:
  - /articles/updating-commit-author-attribution-with-github-importer
  - /github/importing-your-projects-to-github/updating-commit-author-attribution-with-github-importer
versions:
  free-pro-team: '*'
---

O Importador do GitHub procura usuários do GitHub cujos endereços de e-mail correspondam aos autores dos commits no repositório que está sendo importado. Você poderá então conectar um commit ao seu autor usando o endereço de e-mail dele ou o nome de usuário do autor no GitHub.

### Atualizar autores do commit

1. Depois que você tiver importado o repositório, clique em **Match authors** (Corresponder autores) na página de status de importação. ![Botão Match authors (Corresponder autores)](/assets/images/help/importer/match-authors-button.png)
2. Clique em **Connect** (Conectar) ao lado do autor cujas informações você deseja atualizar. ![Lista de autores do commit](/assets/images/help/importer/connect-commit-author.png)
3. Digite o endereço de e-mail ou o nome de usuário do autor no GitHub e pressione **Enter**.

### Atribuir commits a um usuário do GitHub com endereço de e-mail público

Se o autor de um commit no repositório importado tiver uma conta do GitHub associada ao endereço de e-mail usado para criar os commits e ele não tiver [definido o endereço de e-mail do commit como privado](/articles/setting-your-commit-email-address), o Importador do GitHub corresponderá o endereço de e-mail associado ao commit com o endereço de e-mail público associado à conta dele no GitHub e atribuirá o commit a ela.

### Atribuir commits a um usuário do GitHub sem endereço de e-mail público

Se o autor de um commit no repositório importado não tiver definindo um endereço de e-mail público no perfil dele no GitHub nem [definido o endereço de e-mail do commit como privado](/articles/setting-your-commit-email-address), talvez o Importador do GitHub não consiga corresponder o endereço de e-mail associado ao commit com a conta dele no GitHub.

O autor do commit pode resolver isso definindo o endereço de e-mail dele como privado. Os commits passarão a ser atribuídos a `<username>@users.noreply.github.com`, e os commits importados serão associados à conta dele no GitHub.

### Atribuir commits usando um endereço de e-mail

Se o endereço de e-mail do autor não estiver associado à conta dele no GitHub, o autor poderá [adicionar o endereço à conta dele](/articles/adding-an-email-address-to-your-github-account) após a importação, e os commits serão atribuídos corretamente.

Caso o autor não tenha uma conta do GitHub, o Importador do GitHub atribuirá os commits dele ao endereço de e-mail associado aos commits.

### Leia mais

- "[Sobre o Importador do GitHub](/articles/about-github-importer)"
- "[Importar um repositório com o Importador do GitHub](/articles/importing-a-repository-with-github-importer)"
- "[Adicionar um endereço de e-mail à sua conta](/articles/adding-an-email-address-to-your-github-account/)"
- "[Configurar endereço de e-mail do commit](/articles/setting-your-commit-email-address)"
