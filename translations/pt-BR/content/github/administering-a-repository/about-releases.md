---
title: Sobre as versões
intro: 'Você pode criar uma versão de modo a empacotar software, com notas de versão e links para arquivos binários, para uso de outras pessoas.'
redirect_from:
  - /articles/downloading-files-from-the-command-line/
  - /articles/downloading-files-with-curl/
  - /articles/about-releases
  - /articles/getting-the-download-count-for-your-releases
  - /github/administering-a-repository/getting-the-download-count-for-your-releases
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---

### Sobre as versões

![Uma visão geral de versões](/assets/images/help/releases/releases-overview.png)

Versões são iterações de software implementáveis que você pode empacotar e disponibilizar para um público mais amplo para baixar e usar.

As versões se baseiam em [tags Git](https://git-scm.com/book/en/Git-Basics-Tagging), que marcam um ponto específico no histórico do seu repositório. Uma data de tag pode ser diferente de uma data de versão, já que elas podem ser criadas em momentos diferentes. Para obter mais informações sobre como visualizar as tags existentes, consulte "[Visualizar tags e versões do seu repositório](/github/administering-a-repository/viewing-your-repositorys-releases-and-tags)".

Você pode receber notificações quando novas versões são publicadas em um repositório sem receber notificações sobre outras atualizações para o repositório. Para obter mais informações, consulte {% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2. 0" %}"[Visualizar as suas assinaturas](/github/managing-subscriptions-and-notifications-on-github/viewing-your-subscriptions){% else %}"[Inspecionar e não inspecionar as versões de um repositório](/github/receiving-notifications-about-activity-on-github/watching-and-unwatching-releases-for-a-repository){% endif %}."

Qualquer pessoa com acesso de leitura a um repositório pode ver e comparar versões, mas somente pessoas com permissões de gravação a um repositório podem gerenciar versões. Para obter mais informações, consulte "[Gerenciando versões em um repositório](/github/administering-a-repository/managing-releases-in-a-repository)."

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@latest" %}
Pessoas com permissões de administrador para um repositório podem escolher se
{% data variables.large_files.product_name_long %} os objetos de ({% data variables.large_files.product_name_short %}) estão incluídos nos arquivos ZIP e tarballs que {% data variables.product.product_name %} cria para cada versão. Para obter mais informações, consulte "

[Gerenciando {% data variables.large_files.product_name_short %} objetos nos arquivos de seu repositório](/github/administering-a-repository/managing-git-lfs-objects-in-archives-of-your-repository)". </p> 

{% endif %}

{% if currentVersion == "free-pro-team@latest" %}

Se uma versão consertar uma vulnerabilidade de segurança, você deverá publicar uma consultoria de segurança no seu repositório.

{% data variables.product.prodname_dotcom %} revisa a cada consultoria de segurança publicado e pode usá-lo para enviar {% data variables.product.prodname_dependabot_alerts %} para repositórios afetados. Para obter mais informações, consulte "[Sobre as consultorias de segurança do GitHub](/github/managing-security-vulnerabilities/about-github-security-advisories)."

Você pode visualizar a aba **Dependentes** do gráfico de dependências para ver quais repositórios e pacotes dependem do código no repositório e pode, portanto, ser afetado por uma nova versão. Para obter mais informações, consulte "[Sobre o gráfico de dependência](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)". 

{% endif %}

Você também pode usar a API de Releases para reunir informações, tais como o número de vezes que as pessoas baixam um ativo de versão. Para obter mais informações, consulte "[Versões](/rest/reference/repos#releases)".

{% if currentVersion == "free-pro-team@latest" %}


### Cotas de armazenamento e banda

Cada arquivo incluído em uma versão deve ser inferior a {% data variables.large_files.max_file_size %}. Não há limite para o tamanho total de uma versão, nem uso de largura de banda.

{% endif %}
