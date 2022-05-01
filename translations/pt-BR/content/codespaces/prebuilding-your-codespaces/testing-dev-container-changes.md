---
title: Testando alterações de configuração de contêiner de desenvolvimento em um branch pré-compilado habilitado
shortTitle: Testar alterações de contêineres de desenvolvimento
allowTitleToDifferFromFilename: true
intro: 'Ao alterar a configuração do contêiner de desenvolvimento para um branch que está habilitado para pré-compilações, você deverá testar suas alterações em um codespace.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
product: '{% data reusables.gated-features.codespaces %}'
permissions: People with write permissions to a repository can create or edit the dev container configuration for a branch.
---

{% data reusables.codespaces.prebuilds-beta-note %}

Qualquer alteração que você fizer na configuração do contêiner de desenvolvimento para um branch pré-habilitado irá resultar na atualização para a configuração de código e o modelo de pré-compilação associado. Por isso, é importante testar tais alterações em um codespace de um branch de teste antes de fazer o commit de suas alterações em um branch do repositório que é ativamente usado. Isso garantirá que você não estará introduzindo alterações para a sua equipe.

Para obter mais informações, consulte "[Introdução a contêineres de desenvolvimento](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)".

## Testando alterações para a configuração do contêiner de desenvolvimento

1. Crie um código a partir do branch pré-compilado cujo contêiner de desenvolvimento você deseja alterar. Para obter mais informações, consulte "[Criando um codespace ](/codespaces/developing-in-codespaces/creating-a-codespace#creating-a-codespace)".
1. No codespaec, confira um branch de teste. Para obter mais informações, consulte "[Usando controle de origem no seu codespace](/codespaces/developing-in-codespaces/using-source-control-in-your-codespace#creating-or-switching-branches)."
1. Faça as alterações necessárias na configuração do contêiner de desenvolvimento.
1. Aplique as alterações recompilando o container. Para obter mais informações, consulte "[Introdução a contêineres de desenvolvimento](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#applying-changes-to-your-configuration)".
1. Depois de tudo parecer bom, recomendamos também criar um novo codespace a partir de seu branch de teste para garantir que tudo está funcionando. Você pode então fazer commit das alterações no branch padrão do seu repositório ou em um branch de recurso ativo, acionando uma atualização do modelo de pré-criação para esse branch.

   {% note %}

   **Observação**: A criação desse codespace levará mais tempo do que o normal porque ele não será criado a partir de uma pré-compilação.

   {% endnote %}
