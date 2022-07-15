---
title: Solucionando pontos para codespaces
intro: Etapas de solução de problemas para problemas comuns de dotfiles.
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
shortTitle: Dotfiles
---

Se o seu codespace não consegue pegar as configurações de dotfiles, você deverá seguir as etapas de depuração a seguir.

1. Certifique-se de que seu repositório dotfiles seja público. Se você tem segredos ou dados confidenciais que você deseja usar em seu código, use [segredos de codespaces ](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces) em vez dos dotfiles privados.
2. Habilite os Dotfiles selecionando **Instalar Dotfiles automaticamente** nas [suas configurações pessoais de codespaces](https://github.com/settings/codespaces).

   ![A opção "Instalar dotfiles automaticamente"](/assets/images/help/codespaces/automatically-install-dotfiles.png)

3. Verifique `/workspaces/.codespaces/.persistedshare/dotfiles` para ver se seus dotfiles foram clonados.
   - Se seus dotfiles foram clonados, tente reexecutar manualmente seu script de instalação para verificar se é executável.
   - Se seus dotfiles não foram clonados, consulte `/workspaces/.codespaces/.persistedshare/EnvironmentLog.txt` para ver se houve um problema com a clonagem.
4. Verifique `/workspaces/.codespaces/.persistedshare/creation.log` com relação a possíveis problemas. Para obter mais informações, consulte [Registros de criação](/codespaces/troubleshooting/codespaces-logs#creation-logs).

Se a configuração de seus dotfiles for selecionada corretamente, mas parte da configuração for incompatível com os codespaces, use a variável de ambiente `$CODESPACES` para adicionar lógica condicional para configurações específicas do codespace.
