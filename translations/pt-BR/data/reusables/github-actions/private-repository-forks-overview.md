Se você depende do uso das bifurcações dos seus repositórios privados, você pode configurar políticas que controlam como os usuários podem executar fluxos de trabalho em eventos `pull_request`. Available to private repositories only, you can configure these policy settings for enterprise accounts, organizations, or repositories. For enterprise accounts, the policies are applied to all repositories in all organizations.

- **Executar fluxos de trabalho de pull requests** - Permite que os usuários executem fluxos de trabalho de pull requests, usando um `GITHUB_TOKEN` com permissão somente leitura e sem acesso a segredos.
- **Enviar tokens para fluxos de trabalho a partir de pull requests** - Permite que os pull requests das bifurcações usem um `GITHUB_TOKEN` com permissão de gravação.
- **Envia segredos para fluxos de trabalho de pull requests** - Disponibiliza todos os segredos para o pull request.
