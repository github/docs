---
title: Restaurar um repositório excluído
intro: Você pode restaurar alguns repositórios excluídos para recuperar o respectivo conteúdo.
redirect_from:
  - /articles/restoring-a-deleted-repository
versions:
  free-pro-team: '*'
topics:
  - Repositories
---

Qualquer pessoa pode restaurar repositórios excluídos que pertenciam à própria conta de usuário. Os proprietários da organização podem restaurar repositórios excluídos que pertenciam à organização.

### Sobre a restauração do repositório

Um repositório excluído pode ser restaurado em até 90 dias, a menos que ele fizesse parte de uma rede de bifurcação que atualmente não está vazia. Uma rede de bifurcação consiste em um repositório principal, nas bifurcações do repositório e nas bifurcações das bifurcações do repositório. Se o repositório fazia parte de uma rede de bifurcação, ele não poderá ser restaurado, a menos que todos os outros repositórios na rede sejam excluídos ou tenham sido desanexados da rede. Para obter mais informações sobre bifurcações, consulte "[Sobre bifurcações](/articles/about-forks)".

Se desejar restaurar um repositório que fazia parte de uma rede de bifurcação que atualmente não está vazia, contate o {% data variables.contact.contact_support %}.

Depois que um repositório é excluído, pode levar até uma hora para que ele seja disponibilizado para restauração.

Restaurar um repositório não vai restaurar anexos de versão nem permissões de equipe. Os problemas que são restaurados não serão etiquetados.

### Restaurar um repositório excluído que pertencia a uma conta de usuário

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.repo-tab %}
{% data reusables.user_settings.deleted-repos %}
{% data reusables.user_settings.restore-repo %}
{% data reusables.user_settings.restore-confirmation %}

### Restaurar um repositório excluído que pertencia a uma organização

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.deleted-repos %}
{% data reusables.user_settings.restore-repo %}
{% data reusables.user_settings.restore-confirmation %}

### Leia mais

- "[Excluir um repositório](/articles/deleting-a-repository)"
