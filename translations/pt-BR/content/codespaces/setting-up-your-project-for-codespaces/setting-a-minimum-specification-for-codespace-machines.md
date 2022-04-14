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

Ao criar um codespace para um repositório, geralmente você tem uma escolha de tipos de máquina disponíveis. Cada tipo de máquina tem um nível diferente de recursos. Para obter mais informações, consulte "["Mudar o tipo de máquina para seu codespace](/codespaces/customizing-your-codespace/changing-the-machine-type-for-your-codespace#about-machine-types)."

Se o seu projeto precisar de um certo nível de poder de computação, você poderá configurar {% data variables.product.prodname_github_codespaces %} para que apenas os tipos de máquina que atendem a esses requisitos estejam disponíveis para que as pessoas selecionem. Você pode configurar isso no arquivo `devcontainer.json`.

{% note %}

**Importante:** O acesso a alguns tipos de máquina pode ser restrito no nível da organização. De modo geral, isso é feito para evitar que as pessoas escolham máquinas de maior recursos que são cobradas a uma taxa mais alta. Se seu repositório for afetado por uma política a nível da organização para tipos de máquinas, você deverá certificar-se de que não definiu uma especificação mínima que não deixaria nenhum tipo de máquina disponível para as pessoas escolherem. Para obter mais informações, consulte "[Restringindo o acesso aos tipos de máquina](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)."

{% endnote %}

## Definindo uma especificação mínima de máquina

1. {% data variables.product.prodname_codespaces %} para o seu repositório está configurado no arquivo `devcontainer.json`. Se o seu repositório ainda não contiver um arquivo `devcontainer.json`, adicione um agora. Consulte "[Adicionar um contêiner de desenvolvimento ao seu projeto](/free-pro-team@latest/codespaces/setting-up-your-project-for-codespaces/setting-up-your-project-for-codespaces)".
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

   Agora, quando você criar um codespace para esse branch do repositório, você só será capaz de selecionar os tipos de máquina que correspondem ou excedem os recursos que você especificou.

   ![Caixa de diálogo que mostra uma escolha limitada de tipos de máquina](/assets/images/help/codespaces/machine-types-limited-choice.png)

## Leia mais

- "[Introdução a contêineres de desenvolvimento](/codespaces/setting-up-your-project-for-codespaces/configuring-codespaces-for-your-project)"
