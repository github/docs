---
title: Sobre LEIAMEs
intro: 'Você pode adicionar um arquivo LEIAME ao seu repositório para informar outras pessoas por que seu projeto é útil, o que elas podem fazer com o projeto e como elas podem usá-lo.'
redirect_from:
  - /articles/section-links-on-readmes-and-blob-pages/
  - /articles/relative-links-in-readmes/
  - /articles/about-readmes
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

Um arquivo LEIAME, junto com {% if currentVersion == "free-pro-team@latest" %}a [licença de repositório](/articles/licensing-a-repository), [diretrizes de contribuição](/articles/setting-guidelines-for-repository-contributors) e um [código de conduta](/articles/adding-a-code-of-conduct-to-your-project){% else %}uma [licença de repositório](/articles/licensing-a-repository) e diretrizes de contribuição [](/articles/setting-guidelines-for-repository-contributors){% endif %} ajudam você a comunicar as expectativas e gerenciar contribuições para o seu projeto.

Um LEIAME, muitas vezes, é o primeiro item que um visitante verá ao visitar seu repositório. Os arquivos LEIAME geralmente incluem informações sobre:
- O que o projeto faz
- Por que o projeto é útil
- Como os usuários podem começar a usar o projeto
- Onde os usuários podem obter ajuda com seu projeto
- Quem mantém e contribui com o projeto

Se você colocar o arquivo LEIAME na raiz do repositório, `docs`, ou no diretório `.github` oculto, o {% data variables.product.product_name %} reconhecerá e apresentará automaticamente o LEIAME aos visitantes do repositório.

![Página principal do repositório github/scientist e seu arquivo LEIAME](/assets/images/help/repository/repo-with-readme.png)

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.21" %}

{% data reusables.profile.profile-readme %}

![Arquivo LEIAME no nome de usuário/repositório do nome de usuário](/assets/images/help/repository/username-repo-with-readme.png)

{% endif %}

### Links de seção nos arquivos LEIAME e páginas blob

Muitos projetos usam uma tabela de conteúdo no início de um LEIAME para direcionar usuários para diferentes seções do arquivo. {% data reusables.repositories.section-links %}

### Links relativos e caminhos de imagem em arquivos LEIAME

{% data reusables.repositories.relative-links %}

### Leia mais

- "[Adicionar um arquivo a um repositório](/articles/adding-a-file-to-a-repository)"
- "[Tornar LEIAMEs legíveis](https://github.com/18F/open-source-guide/blob/18f-pages/pages/making-readmes-readable.md)" da 18F
