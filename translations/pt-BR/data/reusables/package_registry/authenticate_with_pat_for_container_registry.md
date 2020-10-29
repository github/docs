{% if currentVersion == "free-pro-team@latest" %}
Se você deseja efetuar a autenticação em
{% data variables.product.prodname_github_container_registry %} em um fluxo de trabalho de {% data variables.product.prodname_actions %}, em seguida, você deverá usar um token de acesso pessoal (PAT). Atualmente, o `GITHUB_TOKEN` não tem as permissões necessárias. No beta de {% data variables.product.prodname_github_container_registry %}, a única forma compatível de de autenticação é o PAT.

Os PATs podem conceder amplo acesso à sua conta. Recomendamos selecionar apenas o acesso de leitura ou gravação ou excluir o `pacote` ao criar um PAT para efetuar a autenticação no {% data variables.product.prodname_container_registry %}. Evite incluir o escopo do `repositório` em um PAT usado por um fluxo de trabalho do GitHub Actions pois ele concede acesso adicional desnecessário.

Se você desejar usar o {% data variables.product.prodname_container_registry %} em ações durante a versão beta, siga nossas práticas de segurança recomendadas para o uso do PAT em[Fortalecimento da segurança para o GitHub Actions](/actions/getting-started-with-github-actions/security-hardening-for-github-actions#considering-cross-repository-access)".

{% endif %}
