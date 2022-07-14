---
title: Working with support for GitHub Codespaces
intro: 'Dicas para obter a melhor ajuda do suporte para {% data variables.product.prodname_github_codespaces %}.'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
shortTitle: Trabalhando com suporte
redirect_from:
  - /codespaces/troubleshooting/working-with-support-for-codespaces
---

Antes de o suporte poder ajudar você com problemas com codespaces, você precisa saber o nome e o ID (identificador) do seu codespace. Além disso, o suporte pode pedir que você compartilhe alguns registros. For more information, see "[{% data variables.product.prodname_github_codespaces %} logs](/codespaces/troubleshooting/github-codespaces-logs)" and "[About GitHub Support](/github/working-with-github-support/about-github-support)."

### Nomes do codespace

Cada codespace tem um nome único que é uma combinação da manipulação de {% data variables.product.company_short %}, do nome do repositório e alguns caracteres aleatórios. Os caracteres adicionais permitem que você tenha codespaces para diferentes branches no mesmo repositório. Por exemplo: `octocat-myrepo-gmc7`.

Para encontrar o nome de um codespace:

- Abra o codespace no navegador. O subdomínio da URL é o nome do codespace. Por exemplo: `https://octocat-myrepo-gmc7.github.dev` é a URL para o codespace `octocat-myrepo-gmc7`.
- Se você não puder abrir um codespace, você poderá acessar o nome em {% data variables.product.product_name %} em https://github.com/codespaces. O nome é exibido em uma janela pop-up, quando você passar o mouse sobre a opção **Abrir no navegador** em https://github.com/codespaces. ![O nome do código exibido ao passar o mouse sobre](/assets/images/help/codespaces/find-codespace-name-github.png)

O nome do código também está incluído em muitos dos arquivos de registro. Por exemplo, nos registros de código como o valor de `friendlyName`, no registro da extensão de {% data variables.product.prodname_github_codespaces %} após `fazer pedido GET para` e no registro do console de navegação após `clientUrl`. For more information, see "[{% data variables.product.prodname_github_codespaces %} logs](/codespaces/troubleshooting/github-codespaces-logs)."

### IDs de codespaces

Todos os codespaces também possuem um ID (identificador). Ele não é exibido por padrão em {% data variables.product.prodname_vscode %}. Portanto, é possível que você precise atualizar as configurações para a extensão {% data variables.product.prodname_github_codespaces %} antes de acessar o ID.

1. Em {% data variables.product.prodname_vscode %}, navegador ou área de trabalho, na barra de atividades à esquerda, clique em **Explorador remoto** para mostrar as informações para o codespace.
2. Se a barra lateral incluir uma seção "Desempenho do codespace", passe o mouse sobre o "ID do codespace" e clique no ícone da área de transferência para copiar o ID.
3. Se a informação não for exibida, clique em {% octicon "gear" aria-label="The gear icon" %} no canto inferior esquerdo da barra de atividade, para exibir a aba "Configurações".
4. Expanda **Extensões** e clique em **{% data variables.product.prodname_github_codespaces %}** para exibir as configurações da extensão. Em seguida, habilite o **Exibir o explorador de desempenho** para exibir a seção "Codespace" na barra lateral. ![O ID do codespace e configurações necessárias para exibir informações de desempenho](/assets/images/help/codespaces/find-codespace-id.png)
