---
title: Persisting environment variables and temporary files
intro: You can configure custom environment variables so that they are set to the same value every time you open a codespace. You can also ensure that temporary files are not deleted when a codespace stops.
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
shortTitle: Persist variables and files
redirect_from:
  - /codespaces/developing-in-codespaces/persisting-environment-variables-and-temporary-files
---

## Setting persistent environment variables

You can set persistent custom environment variables in multiple ways, depending on which codespaces, repositories, or users you want the variables to be available to.

For all the methods of setting custom variables listed below, you can access the custom variable in your codespace by using syntax like `echo $VARNAME`.

### For a single codespace

You can set the value of the environment variable in the `~/.bashrc` file, or in an equivalent configuration file if you are not using the Bash shell. For example, add the statement `VARNAME=value`.

After you save the change to this file, the value will be set the next time you open the codespace, or you can set it immediately by using a command such as `source ~/.bashrc`. The variable will remain set if you stop and start the codespace. However, changes to files in the home directory will be reset if you rebuild the container, so variables set in the `~/.bashrc` file will not persist over a rebuild. For more information, see "[Preventing temporary files from being automatically deleted](#preventing-temporary-files-from-being-automatically-deleted)."

### For all codespaces for a repository

There are three ways that you can set persistent custom environment variables for all codespaces that you create for a repository:

* You can edit the `devcontainer.json` configuration file for the repository
* You can use a custom Dockerfile
* You can use development environment secrets

#### Edit the `devcontainer.json` configuration file for the repository

Edit the `devcontainer.json` configuration file for the repository, and use the `remoteEnv` property to set the environment variable value:

```json
{
    "remoteEnv": {
      "VARNAME": "value"
   }
}
```

Only use this method for values that you are happy to commit to your repository as plaintext. For sensitive values such as access tokens, use development environment secrets.

The environment variable will be set within your editor's remote server process, and will be available for sub-processes of that remote server process, such as terminals and debugging sessions. However, the variable will not be available more broadly inside the container. This method is useful if you don't need the environment variable to be set for other background processes that run at startup, and if you are using a premade image and don't have or want a custom Dockerfile.

This setting will take effect when you rebuild your container or create a new codespace after pushing this change to the repository. For more information about applying configuration changes to a codespace, see "[AUTOTITLE](/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers)."

#### Use a custom Dockerfile

If you are using a custom Dockerfile you can set the environment variable there by adding `ENV VARNAME=value`.

This method is useful if you already have a Dockerfile and want to set a variable on a container-wide level.

This setting will take effect when you rebuild your container or create a new codespace after pushing this change to the repository. For more information about applying configuration changes to a codespace, see "[AUTOTITLE](/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers)."

#### Use development environment secrets

You can use development environment secrets for {% data variables.product.prodname_github_codespaces %} to set custom variables for codespaces created for the repository. For more information, see "[AUTOTITLE](/codespaces/managing-your-codespaces/managing-your-account-specific-secrets-for-github-codespaces)."

You should use this method for environment variable values that you do not want to commit to the repository as plaintext.

This setting will take effect the next time you create a codespace for this repository, or when you restart an existing codespace.

### For all codespaces that you create

If you want to set a personalized environment variable for all codespaces that you create you can set this using a file in your `dotfiles` repository. For example, add `VARNAME=value` in the `.bash_profile` file. Environment variables you set in a dotfile are personal to you and are not set for anyone else. For more information about Dotfiles, see "[AUTOTITLE](/codespaces/setting-your-user-preferences/personalizing-github-codespaces-for-your-account#dotfiles)."

## Preventing temporary files from being automatically deleted

{% data reusables.codespaces.workspaces-directory %} For information about creating symlinks to preserve data outside the `/workspaces` directory, see "[AUTOTITLE](/codespaces/developing-in-a-codespace/rebuilding-the-container-in-a-codespace#persisting-data-over-a-rebuild)."

The `/tmp` directory is an exception because it is mounted into the container, but it is not persistent. Therefore, the contents of the `/tmp` directory are persisted over a rebuild, but are cleared each time the codespace stops. For example, the `/tmp` directory is cleared when a codespace session times out after a period of inactivity. For more information, see "[AUTOTITLE](/codespaces/setting-your-user-preferences/setting-your-timeout-period-for-github-codespaces)."

If you have temporary files that you want to be available the next time you start the codespace, do not save them in the `/tmp` directory.

## Further reading

* "[AUTOTITLE](/codespaces/customizing-your-codespace/changing-the-shell-in-a-codespace)"
