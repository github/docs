---
title: Renomeando um codespace
intro: 'Você pode usar o {% data variables.product.prodname_cli %} para alterar o nome de exibição do codespace para um de sua escolha.'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
shortTitle: Renomear um codespace
---

## Sobre renomear um codespace

A cada codespace é atribuído um nome de exibição gerado automaticamente. Se você tiver vários codespaces, o nome de exibição ajudará você a diferenciá-los. Por exemplo: `literate space parakeet`. Você pode alterar o nome de exibição do seu codespace.

Para encontrar o nome de exibição de um codespace:

- Em {% data variables.product.product_name %}, consulte sua lista de codespace em https://github.com/codespaces.

  ![Captura de tela da lista de codespaces no GitHub](/assets/images/help/codespaces/codespaces-list-display-name.png)

- No aplicativo de área de trabalho {% data variables.product.prodname_vscode %}, ou no cliente web {% data variables.product.prodname_vscode_shortname %}, clique no Explorador Remoto. O nome de exibição é mostrado abaixo do nome do repositório. Por exemplo: `symmetrical space telegram` na captura de tela abaixo.

  ![Captura de tela do Explorador Remoto no VS Code](/assets/images/help/codespaces/codespaces-remote-explorer.png)

{% indented_data_reference reusables.codespaces.remote-explorer spaces=2 %}
- Em uma janela do terminal em sua máquina local, use o comando {% data variables.product.prodname_cli %}: `gh codespace list`.

### Nomes de codespaces permanente

Além do nome de exibição, ao criar um codespace, um nome permanente também é atribuído ao codespace. O nome é uma combinação do seu {% data variables.product.company_short %}, do nome do repositório e de alguns caracteres aleatórios. Por exemplo: `octocat-myrepo-gmc7`. Você não pode mudar este nome.

Para encontrar o nome permanente de um codespace:

* Em {% data variables.product.product_name %}, o nome permanente é mostrado em uma janela pop-up quando você passa o mouse sobre a opção **Abrir no navegador** em https://github.com/codespaces.

   ![Captura de tela do nome do código exibida ao passar o mouse](/assets/images/help/codespaces/find-codespace-name-github.png)

* Em um código, use este comando no terminal: `echo $CODESPACE_NAME`.
* Em uma janela do terminal em sua máquina local, use o comando {% data variables.product.prodname_cli %}: `gh codespace list`.

## Renomeando um codespace

Alterar o nome de exibição de um codespace pode ser útil se você tiver vários codespaces que você irá usar por um período prolongado. Um nome apropriado ajuda você a identificar um codespace que você usa para uma finalidade específica. Você pode alterar o nome de exibição do seu codespace usando o {% data variables.product.prodname_cli %}.

Para renomear um codespace, use o subcomando`gh codespace edit`:

```shell
gh codespace edit -c <em>permanent name of the codespace</em> -d <em>new display name</em>
```

Neste exemplo, substitua `permanent name of the codespace` pelo nome permanente do codespace. Substitua `new display name` pelo nome de exibição desejado.
