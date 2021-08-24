---
title: Creating GitHub CLI extensions
intro: 'Learn how to share new {% data variables.product.prodname_cli %} commands with other users by creating custom extensions for {% data variables.product.prodname_cli %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - CLI
---

## About {% data variables.product.prodname_cli %} extensions

{% data reusables.cli.cli-extensions %} For more information about how to use {% data variables.product.prodname_cli %} extensions, see "[Using {% data variables.product.prodname_cli %} extensions](/github-cli/github-cli/using-github-cli-extensions)."

You need a repository for each extension that you create. The repository name must start with `gh-`. The rest of the repository name is the name of the extension. At the root of the repository, there must be an executable file with the same name as the repository. This file will be executed when the extension is invoked.

{% note %}

**Note**: We recommend that the executable file is a bash script because bash is a widely available interpreter. You may use non-bash scripts, but the user must have the necessary interpreter installed in order to use the extension.

{% endnote %}

## Creating an extension with `gh extension create`

You can use the `gh extension create` command to create a project for your extension, including a bash script that contains some starter code.

1. Set up a new extension by using the `gh extension create` subcommand. Replace `EXTENSION-NAME` with the name of your extension.

    ```shell
    gh extension create <em>EXTENSION-NAME</em>
    ```

1. Follow the printed instructions to finalize and optionally publish your extension.

## Creating an extension manually

1. Create a local directory called `gh-EXTENSION-NAME` for your extension. Replace `EXTENSION-NAME` with the name of your extension. For example, `gh-whoami`.

1. In the directory that you created, add an executable file with the same name as the directory.

  {% note %}

  **Note:** Make sure that your file is executable. On Unix, you can execute `chmod +x file_name` in the command line to make `file_name` executable. On Windows, you can run `git init -b main`, `git add file_name`, then `git update-index --chmod=+x file_name`.

  {% endnote %}

1. Write your script in the executable file. For example:

  ```bash
  #!/bin/bash
  set -e
  exec gh api user --jq '"You are @\(.login) (\(.name))."'
  ```

1. From your directory, install the extension as a local extension.

   ```bash
   gh extension install .
   ```

1. Verify that your extension works. Replace `EXTENSION-NAME` with the name of your extension. For example, `whoami`.

   ```shell
   gh <em>EXTENSION-NAME</em>
   ```

1. From your directory, create a repository to publish your extension. Replace `EXTENSION-NAME` with the name of your extension.

   ```shell
   git init -b main
   gh repo create gh-<em>EXTENSION-NAME</em> --confirm
   git add . && git commit -m "initial commit" && git push --set-upstream origin main
   ```

1. Optionally, to help other users discover your extension, add the repository topic `gh-extension`. This will make the extension appear on the [`gh-extension` topic page](https://github.com/topics/gh-extension). For more information about how to add a repository topic, see "[Classifying your repository with topics](/github/administering-a-repository/managing-repository-settings/classifying-your-repository-with-topics)."

## Tips for writing {% data variables.product.prodname_cli %} extensions

### Handling arguments and flags

All command line arguments following a `gh my-extension-name` command will be passed to the extension script. In a bash script, you can reference arguments with `$1`, `$2`, etc. You can use arguments to take user input or to modify the behavior of the script.

For example, this script handles multiple flags. When the script is called with the `-h` or `--help` flag, the script prints help text instead of continuing execution. When the script is called with the `--name` flag, the script sets the next value after the flag to `name_arg`. When the script is called with the `--verbose` flag, the script prints a different greeting.

```bash
#!/bin/bash
set -e

verbose=""
name_arg=""
while [ $# -gt 0 ]; do
  case "$1" in
  --verbose)
    verbose=1
    ;;
  --name)
    name_arg="$2"
    shift
    ;;
  -h|--help)
    echo "Add help text here."
    exit 0
    ;;
  esac
  shift
done

if [ -z "$name_arg" ]
then
  echo "You haven't told us your name."
elif [ -z "$verbose" ]
then
  echo "Hi $name_arg"
else
  echo "Hello and welcome, $name_arg"
fi
```

### Calling core commands in non-interactive mode

Some {% data variables.product.prodname_cli %} core commands will prompt the user for input. When scripting with those commands, a prompt is often undesirable. To avoid prompting, supply the necessary information explicitly via arguments. 

For example, to create an issue programmatically, specify the title and body:

```bash
gh issue create --title "My Title" --body "Issue description"
```

### Fetching data programatically

Many core commands support the `--json` flag for fetching data programatically. For example, to return a JSON object listing the number, title, and mergeability status of pull requests:
```bash
gh pr list --json number,title,mergeStateStatus
```

If there is not a core command to fetch specific data from GitHub, you can use the [`gh api`](https://cli.github.com/manual/gh_api) command to access the GitHub API. For example, to fetch information about the current user:
```bash
gh api user
```

All commands that output JSON data also have options to filter that data into something more immediately usable by scripts. For example, to get the current user's name:

```bash
gh api user --jq '.name'
```

For more information, see [`gh help formatting`](https://cli.github.com/manual/gh_help_formatting).

## Next steps

To see more examples of {% data variables.product.prodname_cli %} extensions, look at [repositories with the `gh-extension` topic](https://github.com/topics/gh-extension).