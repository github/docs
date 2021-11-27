---
title: Restaurar um repositório excluído
intro: Site administrators can restore deleted repositories to recover their contents.
versions:
  ghes: '*'
  ghae: '*'
topics:
  - Enterprise
  - Privacy
  - Repositories
shortTitle: Restore a deleted repository
---

Geralmente, quando alguém exclui um repositório, ele continua disponível em disco por 90 dias e pode ser restaurado pelo painel de administração do site. Unless a legal hold is in effect on a user or organization, after 90 days the repository is purged and deleted forever.

## Sobre a restauração do repositório

If a repository was part of a fork network when it was deleted, the restored repository will be detached from the original fork network.

Depois que um repositório é excluído, pode levar até uma hora para que ele seja disponibilizado para restauração.

Restaurar um repositório não vai restaurar anexos de versão nem permissões de equipe. Os problemas que são restaurados não serão etiquetados.

## Restaurar um repositório excluído

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.search-user-or-org %}
{% data reusables.enterprise_site_admin_settings.click-user-or-org %}
1. In the {% octicon "repo" aria-label="The repo icon" %} **Repositories** section, click the {% octicon "trash" aria-label="The trash icon" %} **Deleted repositories** link.
1. Find the repository you want to restore in the deleted repositories list, then to the right of the repository name click **Restore**.
1. To confirm you would like to restore the named repository, click **Restore**.

## Leia mais

- "[Placing a legal hold on a user or organization](/admin/user-management/managing-users-in-your-enterprise/placing-a-legal-hold-on-a-user-or-organization)"
