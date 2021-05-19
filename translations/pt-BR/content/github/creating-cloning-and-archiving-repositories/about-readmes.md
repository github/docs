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
topics:
  - Repositories
---

### Sobre READMEs

É possível adicionar um arquivo README a um repositório para comunicar informações importantes sobre o seu projeto. Um README, junto com uma licença de repositório{% if currentVersion == "free-pro-team@latest" %}, diretrizes de contribuição, e um código de conduta{% elsif enterpriseServerVersions contains currentVersion %} e diretrizes de contribuição{% endif %}, comunica as expectativas para o seu projeto e ajuda você a gerenciar contribuições.

Para obter mais informações sobre como fornecer diretrizes para o seu projeto, consulte {% if currentVersion == "free-pro-team@latest" %}"[Adicionar um código de conduta ao seu projeto](/communities/setting-up-your-project-for-healthy-contributions/adding-a-code-of-conduct-to-your-project)e {% endif %}"[Configurar o seu projeto para contribuições saudáveis](/communities/setting-up-your-project-for-healthy-contributions)".

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

### Auto-generated table of contents for README files

For the rendered view of any Markdown file in a repository, including README files, {% data variables.product.product_name %} will automatically generate a table of contents based on section headings. You can view the table of contents for a README file by clicking the {% octicon "list-unordered" aria-label="The unordered list icon" %}  menu icon at the top left of the rendered page.

![README with automatically generated TOC](/assets/images/help/repository/readme-automatic-toc.png)

The auto-generated table of contents is enabled by default for all Markdown files in a repository, but you can disable this feature for your repository.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. Under "Features", deselect **Table of contents**. ![Automatic TOC setting for repositories](/assets/images/help/repository/readme-automatic-toc-setting.png)

### Links de seção nos arquivos README e páginas blob

{% data reusables.repositories.section-links %}

### Links relativos e caminhos de imagem em arquivos README

{% data reusables.repositories.relative-links %}

### Leia mais

- "[Adicionar um arquivo a um repositório](/articles/adding-a-file-to-a-repository)"
- "[Tornar READMEs legíveis](https://github.com/18F/open-source-guide/blob/18f-pages/pages/making-readmes-readable.md)" da 18F
