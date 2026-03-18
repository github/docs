---
title: Running {% data variables.copilot.copilot_cli %} programmatically
shortTitle: Run the CLI programmatically
allowTitleToDifferFromFilename: true
intro: "Use {% data variables.copilot.copilot_cli_short %} in the terminal, in scripts, or in Actions workflows."
versions:
  feature: copilot
contentType: how-tos
category:
  - Author and optimize with Copilot # Copilot discovery page
  - Build with Copilot CLI # Copilot CLI bespoke page
---

## Introduction

You can pass a prompt directly to {% data variables.copilot.copilot_cli_short %} in a single command, without entering an interactive session. This allows you to use {% data variables.product.prodname_copilot_short %} directly from the terminal, but also allows you to use the CLI programmatically in scripts, CI/CD pipelines, and automation workflows.

To use {% data variables.copilot.copilot_cli_short %} programmatically you can do either of the following.

* Use the `copilot` command with the `-p` or `--prompt` command-line option, followed by your prompt:

  ```shell copy
  copilot -p "Explain this file: ./complex.ts"
  ```

* Pipe a prompt to the `copilot` command:

  ```shell copy
  echo "Explain this file: ./complex.ts" | copilot
  ```

  > [!NOTE]
  > Piped input is ignored if you also provide a prompt with the `-p` or `--prompt` option.

## Tips for using {% data variables.copilot.copilot_cli_short %} programmatically

* **Provide precise prompts** — clear, unambiguous instructions produce better results than vague requests. The more context you give—file names, function names, the exact change—the less guesswork {% data variables.product.prodname_copilot_short %} has to do.
* **Quote prompts carefully** — use single quotes around your prompt if you want to avoid shell interpretation of special characters.
* **Always give minimal permissions** — use the `--allow-tool=[TOOLS...]` and `--allow-url=[URLs...]` command-line options to give {% data variables.product.prodname_copilot_short %} permission to use only the tools and access that are necessary to complete the task. Avoid using overly permissive options (such as `--allow-all`) unless you are working in a sandbox environment.
* **Use `-s` (silent)** when capturing output. This suppresses session metadata so you get clean text.
* **Use `--no-ask-user`** to prevent the agent from attempting to ask clarifying questions.
* **Set a model explicitly** with `--model` for consistent behavior across environments.

See [AUTOTITLE](/copilot/reference/copilot-cli-reference/cli-programmatic-reference) for options that are particularly useful when running {% data variables.copilot.copilot_cli_short %} programmatically.

## CI/CD integration

A common use case for running {% data variables.copilot.copilot_cli_short %} programmatically is to include a CLI command in a CI/CD workflow step.

This extract from a {% data variables.product.prodname_actions %} workflow shows a simple example of running a {% data variables.copilot.copilot_cli_short %} command.

```yaml
# Workflow step using Copilot CLI
- name: Generate test coverage report
  env:
    {% raw %}COPILOT_GITHUB_TOKEN: ${{ secrets.PERSONAL_ACCESS_TOKEN }}{% endraw %}
  run: |
    copilot -p "Run the test suite and produce a coverage summary" \
      -s --allow-tool='shell(npm:*), write' --no-ask-user
```

For more information, see [AUTOTITLE](/copilot/how-tos/copilot-cli/automate-copilot-cli/automate-with-actions).

## Examples of programmatic usage

### Generate a commit message

```bash copy
copilot -p 'Write a commit message in plain text for the staged changes' -s \
  --allow-tool='shell(git:*)'
```

### Summarize a file

```bash copy
copilot -p 'Summarize what src/auth/login.ts does in no more than 100 words' -s
```

### Write tests for a module

```bash copy
copilot -p 'Write unit tests for src/utils/validators.ts' \
  --allow-tool='write, shell(npm:*), shell(npx:*)'
```

### Fix lint errors

```bash copy
copilot -p 'Fix all ESLint errors in this project' \
  --allow-tool='write, shell(npm:*), shell(npx:*), shell(git:*)'
```

### Explain a diff

```bash copy
copilot -p 'Explain the changes in the latest commit on this branch and flag any potential issues' -s
```

### Code review a branch

Use `/review` slash command to have the built-in `code-review` agent review the code changes on the current branch.

```bash copy
copilot -p '/review the changes on this branch compared to main. Focus on bugs and security issues.' \
  -s --allow-tool='shell(git:*)'
```

### Generate documentation

```bash copy
copilot -p 'Generate JSDoc comments for all exported functions in src/api/' \
  --allow-tool=write
```

### Export a session

Save the full session transcript to a Markdown file on the local filesystem.

```bash copy
copilot -p "Audit this project's dependencies for vulnerabilities" \
  --allow-tool='shell(npm:*), shell(npx:*)' \
  --share='./audit-report.md'
```

Save the session transcript to a gist on {% data variables.product.prodname_dotcom_the_website %} for easy sharing.

```bash copy
copilot -p 'Summarize the architecture of this project' --share-gist
```

> [!NOTE]
> Gists are not available to {% data variables.product.prodname_emus %}, or if you use {% data variables.product.prodname_ghe_cloud %} with data residency (*.ghe.com).

## Shell scripting patterns

### Capture {% data variables.product.prodname_copilot_short %}'s output in a variable

```bash copy
result=$(copilot -p 'What version of Node.js does this project require? \
  Give the number only. No other text.' -s)
echo "Required Node version: $result"
```

### Use in a conditional

```bash copy
if copilot -p 'Does this project have any TypeScript errors? Reply only YES or NO.' -s \
  | grep -qi "no"; then
  echo "No type errors found."
else
  echo "Type errors detected."
fi
```

### Process multiple files

```bash copy
for file in src/api/*.ts; do
  echo "--- Reviewing $file ---" | tee -a review-results.md
  copilot -p "Review $file for error handling issues" -s --allow-all-tools | tee -a review-results.md
done
```

## Further reading

* [AUTOTITLE](/copilot/how-tos/copilot-cli)
* [AUTOTITLE](/copilot/reference/copilot-cli-reference/cli-programmatic-reference)
* [AUTOTITLE](/copilot/reference/copilot-cli-reference/cli-command-reference#command-line-options)
