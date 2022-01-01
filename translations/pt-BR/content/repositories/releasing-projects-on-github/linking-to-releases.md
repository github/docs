---
title: Vincular versões
intro: Você pode compartilhar cada versão que você cria no GitHub com uma URL única.
redirect_from:
  - /articles/linking-to-releases
  - /github/administering-a-repository/linking-to-releases
  - /github/administering-a-repository/releasing-projects-on-github/linking-to-releases
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
---

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.releases %}
3. To copy a unique URL to your clipboard, find the release you want to link to, right click the title, and copy the URL.
{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-4974 %}
  ![Release title](/assets/images/help/releases/release-title.png)
{% else %}
  ![Release title](/assets/images/help/releases/release-title-old.png)
{% endif %}
1. Como alternativa, clique com o botão direito em **Última versão** e copie a URL para compartilhá-la. O sufixo dessa URL será sempre `/releases/latest`.
   {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-4974 %}
   ![Comparar menu de tags de versões](/assets/images/help/releases/refreshed-release-latest.png)
   {% else %}
   ![Tag última versão](/assets/images/help/releases/release_latest_release_tag.png)
   {% endif %}
Para vincular diretamente a um download do seu arquivo da versão mais recente que foi carregado manualmente, vincule a `/owner/name/releases/latest/download/asset-name.zip`.
