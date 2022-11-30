---
title: Distribuir binários grandes
intro: 'Alguns projetos exigem a distribuição de arquivos grandes (como binários ou instaladores), além do código-fonte.'
redirect_from:
  - /articles/distributing-large-binaries
  - /github/managing-large-files/distributing-large-binaries
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---
Se você precisar distribuir arquivos grandes dentro do seu repositório, você poderá criar versões no {% data variables.product.product_location %}. As versões permitem que você empacote software, notas de versão e links para arquivos binários para que outras pessoas possam usar. Para mais informações, acesse "[Sobre as versões](/github/administering-a-repository/about-releases)".

{% if currentVersion == "free-pro-team@latest" %}

Não limitamos o tamanho total dos arquivos binários na versão ou a banda larga usada para entregá-los. No entanto, cada arquivo deve ser menor que {% data variables.large_files.max_lfs_size %}.

{% endif %}

{% data reusables.large_files.use_lfs_tip %}
