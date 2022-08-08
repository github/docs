---
title: Restaurar um repositório excluído
intro: Você pode restaurar repositórios excluídos para recuperar o seu conteúdo.
permissions: Enterprise owners can restore a deleted repository.
versions:
  ghes: '*'
  ghae: '*'
topics:
  - Enterprise
  - Privacy
  - Repositories
shortTitle: Restaurar um repositório excluído
---

## Sobre a restauração do repositório

Geralmente, quando alguém exclui um repositório, ele continua disponível em disco por 90 dias e pode ser restaurado pelo painel de administração do site. Para obter mais informações, consulte "[Painel de administração do site](/admin/configuration/configuring-your-enterprise/site-admin-dashboard)".

A menos que uma retenção legal entre em vigor para o usuário ou organização, após 90 dias, o repositório será removido e excluído para sempre.

Se um repositório fizesse parte de uma rede de bifurcação quando foi excluído, o repositório restaurado será separado da rede de bifurcação original.

Depois que um repositório é excluído, pode levar até uma hora para que ele seja disponibilizado para restauração.

Restaurar um repositório não vai restaurar anexos de versão nem permissões de equipe. Os problemas que são restaurados não serão etiquetados.

## Restaurar um repositório excluído

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.search-user-or-org %}
{% data reusables.enterprise_site_admin_settings.click-user-or-org %}
1. Na seção {% octicon "repo" aria-label="The repo icon" %} **Repositórios**, clique no link {% octicon "trash" aria-label="The trash icon" %} **Repositórios excluídos**.
1. Encontre o repositório que você deseja restaurar na lista de repositórios excluídos e, à direita do nome do repositório, clique em **Restaurar**.
1. Para confirmar que você deseja restaurar o repositório nomeado, clique em **Restaurar**.

## Leia mais

- "[Colocando uma retenção legal em um usuário ou organização](/admin/user-management/managing-users-in-your-enterprise/placing-a-legal-hold-on-a-user-or-organization)"
