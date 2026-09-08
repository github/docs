Before you begin, make sure you have:

* An AI account: {% data variables.product.prodname_copilot %}, {% data variables.product.prodname_anthropic_claude %}, {% data variables.product.prodname_openai_codex %}, or Google Gemini
* A {% data variables.product.github %} repository where you have write access
* {% data variables.product.prodname_actions %} enabled for the repository
* {% data variables.product.prodname_cli %} (`gh`) v2.0.0 or later installed and authenticated

  To check your version, run `gh --version`. To authenticate, run:

  ```shell
  gh auth login --scopes repo,workflow
  ```