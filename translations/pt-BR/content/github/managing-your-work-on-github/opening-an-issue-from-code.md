---
title: Abrir um problema a partir de código
intro: É possível abrir um problema novo a partir de uma linha ou linhas específicas de código em um arquivo ou pull request.
redirect_from:
  - /articles/opening-an-issue-from-code
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Quando você abre um problema de código, o problema contém um trecho mostrando a linha ou intervalo de código que você escolheu. Você pode abrir somente um problema no mesmo repositório onde o código é armazenado.

![Trecho de código fornecido em um problema aberto de código](/assets/images/help/repository/issue-opened-from-code.png)

{% data reusables.repositories.create-issue-in-public-repository %}

{% data reusables.repositories.navigate-to-repo %}
2. Localize o código que deseja referenciar em um problema:
    - Para abrir um problema sobre código em um arquivo, navegue até o arquivo.
    - Para abrir um problema sobre código em uma pull request, navegue até a pull request e clique em {% octicon "diff" aria-label="The file diff icon" %} **Files changed** (Arquivos alterados). Depois, vá até o arquivo que contém o código que você quer incluir em seu comentário e clique em **View** (Visualizar).
{% data reusables.repositories.choose-line-or-range %}
4. À esquerda do intervalo de código, clique em
{% octicon "kebab-horizontal" aria-label="The horizontal kebab octicon" %}. No menu suspenso, clique em **Referência em um novo problema**.
  ![Menu kebab com opção para abrir um novo problema a partir de uma linha selecionada](/assets/images/help/repository/open-new-issue-specific-line.png)
{% data reusables.repositories.type-issue-title-and-description %}
{% data reusables.repositories.assign-an-issue-as-project-maintainer %}
{% data reusables.repositories.submit-new-issue %}

### Leia mais

- "[Criar um problema](/github/managing-your-work-on-github/creating-an-issue)"
- "[Obter links permanentes em arquivos](/github/managing-files-in-a-repository/getting-permanent-links-to-files)"
- "[Criando um link permanente para um trecho do código](/github/managing-your-work-on-github/creating-a-permanent-link-to-a-code-snippet)"
