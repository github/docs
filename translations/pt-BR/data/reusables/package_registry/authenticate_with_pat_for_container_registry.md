{% ifversion fpt %}

Para efetuar a autenticação em {% data variables.product.prodname_container_registry %} dentro de um fluxo de trabalho {% data variables.product.prodname_actions %}, use o `GITHUB_TOKEN` para obter a melhor segurança e experiência. Se seu fluxo de trabalho estiver usando um token de acesso pessoal (PAT) para efetuar a autenticação com `ghcr.io`, é altamente recomendável atualizar o seu fluxo de trabalho para usar o `GITHUB_TOKEN`.

Para orientação sobre como atualizar seus fluxos de trabalho que efetuam a autenticação em `ghcr.io` com um token de acesso pessoal, consulte "[Atualizar um fluxo de trabalho que acessa `ghcr.io`](/packages/managing-github-packages-using-github-actions-workflows/publishing-and-installing-a-package-with-github-actions#upgrading-a-workflow-that-accesses-ghcrio)".

Para obter mais informações sobre o `GITHUB_TOKEN`, consulte "[Autenticação em um fluxo de trabalho](/actions/reference/authentication-in-a-workflow#using-the-github_token-in-a-workflow)".

Se você estiver usando {% data variables.product.prodname_container_registry %} em ações, siga nossas práticas recomendadas em matéria de segurança na[Enrijecimento de segurança para o GitHub Actions](/actions/getting-started-with-github-actions/security-hardening-for-github-actions#considering-cross-repository-access)".

{% endif %}
