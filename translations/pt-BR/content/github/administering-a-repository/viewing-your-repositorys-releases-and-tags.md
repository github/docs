---
title: Visualizando versões e tags do seu repositório
intro: Você pode visualizar o histórico cronológico do seu repositório pelo número da versão da versão ou da tag.
redirect_from:
  - /articles/working-with-tags/
  - /articles/viewing-your-repositorys-tags
  - /github/administering-a-repository/viewing-your-repositorys-tags
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
{% tip %}

**Dica**: Você também pode ver uma versão usando o {% data variables.product.prodname_cli %}. Para obter mais informações, consulte "[`vista da versão `](https://cli.github.com/manual/gh_release_view)" na documentação do {% data variables.product.prodname_cli %}.

{% endtip %}
{% endif %}

### Visualizar versões

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.releases %}
2. Na parte superior da página Versões, clique em **Releases** (Versões).

### Visualizar tags

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.releases %}
2. Na parte superior da página Versões, clique em **Tags**. ![Página de tags](/assets/images/help/releases/tags-list.png)

### Leia mais

- "[Assinar tags](/articles/signing-tags)"
