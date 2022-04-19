---
title: Definindo uma especificação mínima para máquinas de codespaces
shortTitle: Defina uma especificação mínima da máquina
intro: 'Você pode evitar que tipos de máquina com recursos insuficientes sejam usados no {% data variables.product.prodname_codespaces %} para o seu repositório.'
permissions: People with write permissions to a repository can create or edit the codespace configuration.
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
product: '{% data reusables.gated-features.codespaces %}'
---

## Visão Geral

Each codespace that you create is hosted on a separate virtual machine, and you can usually choose from different types of virtual machines. Each machine type has different resources (CPUs, memory, storage) and, by default, the machine type with the least resources is used. Para obter mais informações, consulte "["Mudar o tipo de máquina para seu codespace](/codespaces/customizing-your-codespace/changing-the-machine-type-for-your-codespace#about-machine-types)."

If your project needs a certain level of compute power, you can configure {% data variables.product.prodname_github_codespaces %} so that only machine types that meet these requirements can be used by default, or selected by users. You configure this in a `devcontainer.json` file.

{% note %}

**Importante:** O acesso a alguns tipos de máquina pode ser restrito no nível da organização. De modo geral, isso é feito para evitar que as pessoas escolham máquinas de maior recursos que são cobradas a uma taxa mais alta. Se seu repositório for afetado por uma política a nível da organização para tipos de máquinas, você deverá certificar-se de que não definiu uma especificação mínima que não deixaria nenhum tipo de máquina disponível para as pessoas escolherem. Para obter mais informações, consulte "[Restringindo o acesso aos tipos de máquina](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)."

{% endnote %}

## Definindo uma especificação mínima de máquina

1. {% data variables.product.prodname_codespaces %} for your repository are configured in a `devcontainer.json` file. Se o seu repositório ainda não contiver um arquivo `devcontainer.json`, adicione um agora. See "[Add a dev container configuration to your repository](/free-pro-team@latest/codespaces/setting-up-your-project-for-codespaces/setting-up-your-project-for-codespaces)."
1. Edite o arquivo `devcontainer.json`, adicionando a propriedade `hostRequirements` como esta:

   ```json{:copy}
   "hostRequirements": {
      "cpus": 8,
      "memory": "8gb",
      "storage": "32gb" 
   }
   ```

   Você pode especificar qualquer uma ou todas as opções: `cpus`, `memória` e `armazenamento`.

   Para verificar as especificações dos tipos de máquina de {% data variables.product.prodname_codespaces %} que estão atualmente disponíveis para o seu repositório, siga o processo de criação de um codespace até que você veja a escolha de tipos de máquina. Para obter mais informações, consulte "[Criar um codespace](/codespaces/developing-in-codespaces/creating-a-codespace#creating-a-codespace)".

1. Salve o arquivo e faça commit as alterações no branch necessário do repositório.

   Now when you create a codespace for that branch of the repository, and you go to the creation configuration options, you will only be able to select machine types that match or exceed the resources you've specified.

   ![Caixa de diálogo que mostra uma escolha limitada de tipos de máquina](/assets/images/help/codespaces/machine-types-limited-choice.png)

## Leia mais

- "[Introdução a contêineres de desenvolvimento](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)"
