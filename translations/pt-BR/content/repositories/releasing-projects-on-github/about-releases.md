---
title: Sobre as versões
intro: 'Você pode criar uma versão de modo a empacotar software, com notas de versão e links para arquivos binários, para uso de outras pessoas.'
redirect_from:
  - /articles/downloading-files-from-the-command-line
  - /articles/downloading-files-with-curl
  - /articles/about-releases
  - /articles/getting-the-download-count-for-your-releases
  - /github/administering-a-repository/getting-the-download-count-for-your-releases
  - /github/administering-a-repository/about-releases
  - /github/administering-a-repository/releasing-projects-on-github/about-releases
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
---

## Sobre as versões

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-4974 %}
![Uma visão geral de versões](/assets/images/help/releases/refreshed-releases-overview-with-contributors.png)
{% elsif ghae-issue-4972 %}
![Uma visão geral de versões](/assets/images/help/releases/releases-overview-with-contributors.png)
{% else %}
![Uma visão geral de versões](/assets/images/help/releases/releases-overview.png)
{% endif %}

Versões são iterações de software implementáveis que você pode empacotar e disponibilizar para um público mais amplo para baixar e usar.

As versões se baseiam em [tags Git](https://git-scm.com/book/en/Git-Basics-Tagging), que marcam um ponto específico no histórico do seu repositório. Uma data de tag pode ser diferente de uma data de versão, já que elas podem ser criadas em momentos diferentes. Para obter mais informações sobre como visualizar as tags existentes, consulte "[Visualizar tags e versões do seu repositório](/github/administering-a-repository/viewing-your-repositorys-releases-and-tags)".

Você pode receber notificações quando novas versões são publicadas em um repositório sem receber notificações sobre outras atualizações para o repositório. Para obter mais informações, consulte "[Visualizando suas assinaturas](/github/managing-subscriptions-and-notifications-on-github/viewing-your-subscriptions)".

Qualquer pessoa com acesso de leitura a um repositório pode ver e comparar versões, mas somente pessoas com permissões de gravação a um repositório podem gerenciar versões. Para obter mais informações, consulte "[Gerenciando versões em um repositório](/github/administering-a-repository/managing-releases-in-a-repository)."

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-4974 %}
Você pode criar notas de versão manualmente enquanto gerencia uma versão. Como alternativa, você pode gerar automaticamente notas de versão a partir de um modelo padrão, ou personalizar seu próprio modelo de notas de versão. Para obter mais informações, consulte "[Notas de versão geradas automaticamente](/repositories/releasing-projects-on-github/automatically-generated-release-notes)".
{% endif %}

{% ifversion fpt or ghec or ghes > 3.6 or ghae-issue-7054 %}
Ao ver os detalhes para uma versão, a data de criação para o ativo de cada versão é mostrada ao lado do ativo da versão.
{% endif %}

{% ifversion fpt or ghec %}
Pessoas com permissões de administrador para um repositório podem escolher se objetos {% data variables.large_files.product_name_long %} ({% data variables.large_files.product_name_short %}) estão incluídos nos arquivos ZIP e tarballs que {% data variables.product.product_name %} cria para cada versão. Para obter mais informações, consulte "[Gerenciando objetos de {% data variables.large_files.product_name_short %} nos arquivos do seu repositório](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-git-lfs-objects-in-archives-of-your-repository)".

Se uma versão consertar uma vulnerabilidade de segurança, você deverá publicar uma consultoria de segurança no seu repositório. {% data variables.product.prodname_dotcom %} revisa a cada consultoria de segurança publicado e pode usá-lo para enviar {% data variables.product.prodname_dependabot_alerts %} para repositórios afetados. Para obter mais informações, consulte "[Sobre as consultorias de segurança do GitHub](/github/managing-security-vulnerabilities/about-github-security-advisories)."

Você pode visualizar a aba **Dependentes** do gráfico de dependências para ver quais repositórios e pacotes dependem do código no repositório e pode, portanto, ser afetado por uma nova versão. Para obter mais informações, consulte "[Sobre o gráfico de dependência](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)".
{% endif %}

Você também pode usar a API de Releases para reunir informações, tais como o número de vezes que as pessoas baixam um ativo de versão. Para obter mais informações, consulte "[Versões](/rest/reference/releases)".

{% ifversion fpt or ghec %}
## Cotas de armazenamento e banda

 Cada arquivo incluído em uma versão deve ser inferior a {% data variables.large_files.max_file_size %}. Não há limite para o tamanho total de uma versão, nem uso de largura de banda.

{% endif %}
