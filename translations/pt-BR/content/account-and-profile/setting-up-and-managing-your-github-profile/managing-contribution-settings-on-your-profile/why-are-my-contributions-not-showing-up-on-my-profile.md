---
title: Por que minhas contribuições não aparecem no meu perfil?
intro: Entenda os motivos comuns que as contribuições podem não ter no seu gráfico de contribuição.
redirect_from:
  - /articles/why-are-my-contributions-not-showing-up-on-my-profile
  - /github/setting-up-and-managing-your-github-profile/why-are-my-contributions-not-showing-up-on-my-profile
  - /github/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/why-are-my-contributions-not-showing-up-on-my-profile
  - /account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/why-are-my-contributions-not-showing-up-on-my-profile
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Profiles
shortTitle: Contribuições ausentes
---

## Sobre o seu gráfico de contribuição

Seu gráfico de contribuições de perfil é um registro de contribuições que você fez para repositórios {% ifversion ghae %}pertencentes a{% else %}em{% endif %} {% data variables.product.product_location %}. As contribuições recebem registros de data e hora de acordo com o UTC (Coordinated Universal Time, Horário universal coordenado), e não com o fuso horário local. As contribuições só serão contabilizadas se atenderem a determinados critérios. Em alguns casos, pode ser necessário recriar o gráfico para que as contribuições sejam exibidas.

Se você faz parte de uma organização que usa o logon único SAML (SSO), você não poderá ver a atividade de contribuição da organização em seu perfil se não tiver uma sessão SSO ativa. As pessoas que visualizarem o seu perfil de fora da sua organização verão a atividade de contribuição anônima de sua atividade de contribuição para sua organização.

## Contribuições que são contabilizadas

### Problemas, pull requests e discussões

Os problemas, pull requests e discussões aparecerão no gráfico de contribuição se estiverem abertos em um repositório autônomo, não em uma bifurcação.

### Commits
Os commits aparecerão no gráfico de contribuições se atenderem a **todas** estas condições:
- O endereço de e-mail usado para os commits está associado à sua conta no {% data variables.product.product_location %}.
- Os commits foram criados em um repositório autônomo, e não em uma bifurcação.
- Os commits foram criados:
  - No branch-padrão do repositório
  - No branch `gh-pages` (para repositórios com sites de projetos)

Para obter mais informações sobre sites de projeto, consulte "[Sobre {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages#types-of-github-pages-sites)".

Além disso, **pelo menos uma** das seguintes afirmativas devem ser verdadeiras:
- Você é um colaborador no repositório ou um integrante da organização que possui o repositório.
- Você bifurcou o repositório.
- Você abriu uma pull request ou um problema no repositório.
- Você marcou o repositório como favorito.

## Motivos comuns para as contribuições não serem contabilizadas

{% data reusables.pull_requests.pull_request_merges_and_contributions %}

### O commit foi criado menos de 24 horas atrás

Depois de fazer um commit que atenda aos requisitos para ser contabilizado como contribuição, talvez você precise aguardar até 24 horas para que a contribuição seja exibida no gráfico de contribuições.

### Seu e-mail de confirmação do Git local não está conectado à sua conta

Os Commits devem ser feitos com um endereço de e-mail que esteja conectado à sua conta em {% data variables.product.product_location %}{% ifversion fpt or ghec %} ou o endereço de e-mail `noreply` fornecido por {% data variables.product.prodname_dotcom %} enviado para você nas suas configurações de e-mail{% endif %} para aparecer no seu gráfico de contribuições.{% ifversion fpt or ghec %} Para obter mais informações sobre endereços de e-amil `noreply`, consulte "[Definindo o endereço de e-mail do commit](/github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address#about-commit-email-addresses)".{% endif %}

Você pode verificar o endereço de e-mail usado para um commit adicionando `.patch` ao final de uma URL de commit; por exemplo, <a href="https://github.com/octocat/octocat.github.io/commit/67c0afc1da354d8571f51b6f0af8f2794117fd10.patch" data-proofer-ignore>https://github.com/octocat/octocat.github.io/commit/67c0afc1da354d8571f51b6f0af8f2794117fd10.patch</a>:

```
From 67c0afc1da354d8571f51b6f0af8f2794117fd10 Mon Sep 17 00:00:00 2001
From: The Octocat <octocat@nowhere.com>
Date: Sun, 27 Apr 2014 15:36:39 +0530
Subject: [PATCH] updated index for better welcome message
```

O endereço de e-mail no campo `From:` é o que foi definido nas [configurações locais do Git](/articles/set-up-git). Neste exemplo, o endereço de e-mail usado para o commit é `octocat@nowhere.com`.

Se o endereço de e-mail usado para o commit não estiver conectado à sua conta em {% data variables.product.product_location %}, {% ifversion ghae %}altere o endereço de e-mail usado para criar commits no Git. Para obter mais informações, consulte "[Definindo o seu endereço de e-mail do commit](/github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address#setting-your-commit-email-address-in-git).{% else %}você deve [adicionar o endereço de e-mail](/articles/adding-an-email-address-to-your-github-account) à sua conta em {% data variables.product.product_location %}. Seu gráfico de contribuições será reconstruído automaticamente quando você adicionar o novo endereço.{% endif %}

{% warning %}

**Aviso**: Endereços de e-mail genéricos, como `jane@computer.local` não podem ser adicionados às contas de {% data variables.product.prodname_dotcom %}. Se você usar esse e-mail para os commits, eles não serão vinculados ao seu perfil do {% data variables.product.prodname_dotcom %} e não serão exibidos no gráfico de contribuições.

{% endwarning %}

### O commit não foi criado no branch `gh-pages` ou padrão

Os commits só são contados se forem feitos no branch-padrão ou no branch `gh-pages` (para repositórios com sites de projeto). Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages#types-of-github-pages-sites)".

Se os commits estiverem em um branch que não seja `gh-pages` ou o padrão e você quiser que eles sejam contabilizados para suas contribuições, precisará seguir um destes procedimentos:
- [Abrir uma pull request](/articles/creating-a-pull-request) para que ocorra o merge das alterações no branch `gh-pages` ou padrão.
- [Alterar o branch padrão](/github/administering-a-repository/changing-the-default-branch) do repositório.

{% warning %}

**Aviso**: A alteração do branch padrão do repositório fará com que ele seja modificado para todos os colaboradores do repositório. Faça isso apenas se quiser que o novo branch se torne a base de todos os futuros commits e pull requests a serem criados.

{% endwarning %}

### O commit foi criado em uma bifurcação

Os commits criados em uma bifurcação não são contabilizados para suas contribuições. Para isso, é preciso que você siga estes procedimentos:
- [Abrir uma pull request](/articles/creating-a-pull-request) para que ocorra o merge das alterações no repositório principal.
- Para separar a bifurcação e transformá-la em um repositório autônomo no {% data variables.product.product_location %}, entre em contato com o {% data variables.contact.contact_support %}. Se a bifurcação tiver bifurcações próprias, informe o {% data variables.contact.contact_support %} se as bifurcações devem mover-se com o repositório para uma nova rede ou se devem permanecer na rede atual. Para obter mais informações, consulte "[Sobre bifurcações](/articles/about-forks/)".

## Leia mais

- "[Mostrar ou ocultar contribuições privadas no perfil](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile)"
- "[Visualizar contribuições na página de perfil](/articles/viewing-contributions-on-your-profile-page)"
