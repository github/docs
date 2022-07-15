---
title: Migrando seu projeto para Projetos (beta)
intro: Você pode migrar seus projetos da experiência de projetos antigos para Projetos (beta).
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 2
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Projects
  - Organizations
---

{% note %}

**Notas:**

- Projetos (beta) está atualmente na versão beta pública e sujeitos a alterações.
- Se o projeto que você está migrando contiver mais de 1200 itens, os problemas abertos serão priorizados seguidos por pull requests abertos e, por último, observações. O espaço restante será usado para problemas fechados, pull requests mesclados e pull requests fechados. Os tens que não podem ser transferidos devido a esse limite serão transferidos para o arquivo. Se o limite de arquivamento de 10.000 itens for atingido, não será realizada a migração dos itens adicionais.
- Os cartões das observações são convertidos em problemas de rascunho e os conteúdos são salvos no texto do problema do rascunho. Se parecer que a informação está faltando, torne visível qualquer campo oculto. Para obter mais informações, consulte "[Mostrando e ocultando campos](/issues/trying-out-the-new-projects-experience/customizing-your-project-views#showing-and-hiding-fields)."
- Não será realizada a migração da automação.
- Não será realizada a migração da triagem, arquivos e atividades.
- Após a migração, o novo projeto migrado e o projeto antigo não serão mantidos em sincronia.

{% endnote %}

## Sobre a migração do projeto

Você pode migrar seus quadros de projeto para a experiência de todos os novos projetos (beta) e experimentar tabelas, várias visualizações, novas opções de automação e tipos de campo poderosos. Para obter mais informações, consulte "[Sobre projetos (beta)](/issues/trying-out-the-new-projects-experience/about-projects)".

## Migrando um quadro de projetos de organização

{% data reusables.projects.enable-migration %}
{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.organization-wide-project %}
1. À esquerda, clique em **Projetos (clássico)**. ![Captura de tela que mostra a opção de menu Projetos (clássicos)}](/assets/images/help/issues/projects-classic-org.png)
{% data reusables.projects.migrate-project-steps %}

## Migrando um quadro de projetos de usuário

{% data reusables.projects.enable-migration %}
{% data reusables.profile.access_profile %}
1. No topa da página do seu perfil, na navegação principal, clique em {% octicon "project" aria-label="The project board icon" %} **Projects** (Projetos). ![Aba Project (Projeto)](/assets/images/help/projects/user-projects-tab.png)
1. Acima da lista de projetos, clique **Projetos (clássico)**. ![Captura de tela que mostra a opção de menu Projetos (clássicos)}](/assets/images/help/issues/projects-classic-user.png)
{% data reusables.projects.migrate-project-steps %}

## Migrando um quadro de projetos do repositório

{% note %}

**Observação:** Projetos (beta) não é compatível com projetos do nível do repositório. Quando você migrar um quadro de projeto repositório, ele será transferido para a organização ou conta pessoal à qual pertence o projeto do repositório, e o projeto transferido será fixado no repositório original.

{% endnote %}

{% data reusables.projects.enable-migration %}
{% data reusables.repositories.navigate-to-repo %}
1. Abaixo do nome do repositório, clique em {% octicon "project" aria-label="The project board icon" %} **Projects** (Projetos). ![Aba Project (Projeto)](/assets/images/help/projects/repo-tabs-projects.png)
1. Clique **Projetos (clássico)**. ![Captura de tela que mostra a opção de menu Projetos (clássicos)}](/assets/images/help/issues/projects-classic-org.png)
{% data reusables.projects.migrate-project-steps %}
