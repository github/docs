{% ifversion fpt or ghec or ghes > 3.4 %}

Para efetuar a autenticação em {% data variables.product.prodname_container_registry %} dentro de um fluxo de trabalho {% data variables.product.prodname_actions %}, use o `GITHUB_TOKEN` para obter a melhor segurança e experiência. If your workflow is using a personal access token (PAT) to authenticate to `{% data reusables.package_registry.container-registry-hostname %}`, then we highly recommend you update your workflow to use the `GITHUB_TOKEN`.

{% ifversion fpt or ghec %}For guidance on updating your workflows that authenticate to `{% data reusables.package_registry.container-registry-hostname %}` with a personal access token, see "[Upgrading a workflow that accesses `ghcr.io`](/packages/managing-github-packages-using-github-actions-workflows/publishing-and-installing-a-package-with-github-actions#upgrading-a-workflow-that-accesses-ghcrio)."{% endif %}

Para obter mais informações sobre o `GITHUB_TOKEN`, consulte "[Autenticação em um fluxo de trabalho](/actions/reference/authentication-in-a-workflow#using-the-github_token-in-a-workflow)".

Se você estiver usando {% data variables.product.prodname_container_registry %} em ações, siga nossas práticas recomendadas em matéria de segurança na[Enrijecimento de segurança para o GitHub Actions](/actions/getting-started-with-github-actions/security-hardening-for-github-actions#considering-cross-repository-access)".

{% endif %}
