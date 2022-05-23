---
title: Comparando versões
intro: Você pode comparar as tags de versão para ver as alterações no seu repositório entre diferentes versões.
permissions: People with read access to a repository can view and compare releases.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
redirect_from:
  - /github/administering-a-repository/comparing-releases
  - /github/administering-a-repository/releasing-projects-on-github/comparing-releases
---

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.releases %}
3. Ao lado da versão que você deseja usar como sua base, clique em **Comparar**.
  {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-4974 %}
  ![Comparar menu de tags de versões](/assets/images/help/releases/refreshed-compare-tags.png)
  {% else %}
  ![Comparar menu de tags de versões](/assets/images/help/releases/compare-tags-menu.png)
  {% endif %}
4. Use o menu suspenso "comparar" e selecione as tags que você deseja comparar.
  {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-4974 %}
  ![Comparar menu de tags de versões](/assets/images/help/releases/refreshed-compare-tags-menu-options.png)
  {% else %}
  ![Comparar opções de menu de tags de versões](/assets/images/help/releases/compare-tags-menu-options.png)
  {% endif %}
