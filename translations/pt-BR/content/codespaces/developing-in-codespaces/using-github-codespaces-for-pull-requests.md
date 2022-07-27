---
title: Using GitHub Codespaces for pull requests
shortTitle: Pull requests
intro: 'Você pode usar {% data variables.product.prodname_github_codespaces %} no seu fluxo de trabalho de desenvolvimento para criar pull requests, revisar pull requests e resolver comentários de revisão.'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Visual Studio Code
  - Developer
redirect_from:
  - /codespaces/developing-in-codespaces/using-codespaces-for-pull-requests
---

## Sobre pull requests no {% data variables.product.prodname_github_codespaces %}

{% data variables.product.prodname_github_codespaces %} fornece a você muitas das funcionalidades que você pode precisar para trabalhar com pull requests:

- [Cria um pull request](/codespaces/developing-in-codespaces/using-source-control-in-your-codespace#raising-a-pull-request) - Ao usar os comandos Terminal e Git ou a visão de controle de origem, você pode criar pull requests da mesma forma que faria em {% data variables.product.prodname_dotcom_the_website %}. Se o repositório usar um modelo de pull request, você poderá usá-lo na visualização de controle de origem.
- [Abra um pull request](#opening-a-pull-request-in-codespaces) - Você pode abrir um pull request existente em um codespace, desde que você tenha acesso a um acesso de codespace ao branch no qual que está sendo mesclado.
- [Revise um pull request](#reviewing-a-pull-request-in-codespaces) - Após abrir um pull request em um codespace, você poderá usar a vista "Pull request do GitHub" para adicionar comentários e aprovar pull requests. Você também pode usar {% data variables.product.prodname_codespaces %} para [ver os comentários da revisão](#view-comments-from-a-review-in-codespaces).

## Abrir um pull request em {% data variables.product.prodname_codespaces %}

{% data reusables.repositories.sidebar-pr %}

2. Na lista de pull requests, clique no pull request que deseja abrir em {% data variables.product.prodname_codespaces %}.
3. No lado direito da sua tela, clique em **Código de {% octicon "code" aria-label="The code icon" %}**.
4. Na aba {% data variables.product.prodname_codespaces %}, clique em **Criar codespace no BRANCH**. ![Opção para abrir RP em um codespace](/assets/images/help/codespaces/open-with-codespaces-pr.png)

## Revendo um pull request em {% data variables.product.prodname_codespaces %}

{% data reusables.codespaces.review-pr %}

Para obter mais informações sobre a revisão de um pull request, consulte "[Revisando alterações propostas em um pull request](/github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)".

## Visualizar de uma revisão em {% data variables.product.prodname_codespaces %}

Depois de receber feedback em um pull request, você poderá [abri-lo em um codespace](#opening-a-pull-request-in-codespaces) para ver os [comentários de revisão](#reviewing-a-pull-request-in-codespaces). A partir de lá você pode responder a comentários, adicionar reações ou ignorar a revisão.

  ![Opção para abrir RP em um codespace](/assets/images/help/codespaces/incorporating-codespaces.png)
