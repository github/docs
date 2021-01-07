---
title: Sobre READMEs
intro: 'Você pode adicionar um arquivo README ao seu repositório para informar outras pessoas por que seu projeto é útil, o que elas podem fazer com o projeto e como elas podem usá-lo.'
redirect_from:
  - /articles/section-links-on-readmes-and-blob-pages/
  - /articles/relative-links-in-readmes/
  - /articles/about-readmes
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### Sobre READMEs

É possível adicionar um arquivo LEIAME a um repositório para comunicar informações importantes sobre o seu projeto. Um LEIAME, junto com uma licença de repositório{% if currentVersion == "free-pro-team@latest" %}, diretrizes de contribuição, e um código de conduta{% elsif enterpriseServerVersions contains currentVersion %} e diretrizes de contribuição{% endif %}, comunica as expectativas para o seu projeto e ajuda você a gerenciar contribuições.

Para obter mais informações sobre como fornecer diretrizes para o seu projeto, consulte {% if currentVersion == "free-pro-team@latest" %}"[Adicionar um código de conduta ao seu projeto](/github/building-a-strong-community/adding-a-code-of-conduct-to-your-project)e {% endif %}"[Configurar o seu projeto para contribuições saudáveis](/github/building-a-strong-community/setting-up-your-project-for-healthy-contributions)".

Um README, muitas vezes, é o primeiro item que um visitante verá ao visitar seu repositório. Os arquivos README geralmente incluem informações sobre:
- O que o projeto faz
- Por que o projeto é útil
- Como os usuários podem começar a usar o projeto
- Onde os usuários podem obter ajuda com seu projeto
- Quem mantém e contribui com o projeto

Se você colocar o arquivo README na raiz do repositório, `docs`, ou no diretório `.github` oculto, o {% data variables.product.product_name %} reconhecerá e apresentará automaticamente o README aos visitantes do repositório.

![Página principal do repositório github/scientist e seu arquivo README](/assets/images/help/repository/repo-with-readme.png)

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.21" %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21"%}

{% data reusables.profile.profile-readme %}

{% endif %}

![Arquivo README no nome de usuário/repositório do nome de usuário](/assets/images/help/repository/username-repo-with-readme.png)

{% endif %}

### Links de seção nos arquivos README e páginas blob

Muitos projetos usam uma tabela de conteúdo no início de um LEIAME para direcionar usuários para diferentes seções do arquivo. {% data reusables.repositories.section-links %}

### Links relativos e caminhos de imagem em arquivos README

{% data reusables.repositories.relative-links %}

### Leia mais

- "[Adicionar um arquivo a um repositório](/articles/adding-a-file-to-a-repository)"
- "[Tornar READMEs legíveis](https://github.com/18F/open-source-guide/blob/18f-pages/pages/making-readmes-readable.md)" da 18F
