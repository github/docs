---
title: Quickstart for automating with {% data variables.copilot.copilot_cli %}
shortTitle: Quickstart
allowTitleToDifferFromFilename: true
intro: "Build an automation with {% data variables.copilot.copilot_cli_short %} in minutes."
versions:
  feature: copilot
redirect_from:
  - /copilot/how-tos/copilot-cli/automate-copilot-cli/overview
contentType: how-tos
category:
  - Author and optimize with Copilot # Copilot discovery page
  - Build with Copilot CLI # Copilot CLI bespoke page
  - Quickstarts
---

## Overview

You can use {% data variables.copilot.copilot_cli %} to programmatically run Copilot prompts. There are two main ways to do this:

* Run a {% data variables.copilot.copilot_cli_short %} prompt directly from your terminal.
* Write a script or automation that leverages {% data variables.copilot.copilot_cli_short %}.

This guide will walk you through a simple use case for each option.

## Run a prompt from the command line

When you want to pass {% data variables.copilot.copilot_cli_short %} a prompt without initiating an interactive session, use the `-p` flag.

```shell copy
copilot -p "Summarize what this file does: ./README.md"
```

Any prompt you would type in an interactive session works with `-p`.

## Use {% data variables.copilot.copilot_cli_short %} in a script

The real power of programmatic mode comes from writing scripts to automate AI-powered tasks. Within a script, you can generate the prompt, or replace parts of a prompt with dynamic content, and then capture the output or pass it to another part of the script.

Let's create a script that finds all files larger than 10 MB in the current directory, uses {% data variables.copilot.copilot_cli_short %} to generate a brief description of each file, and then emails a summary report.

1. In your repository, create a new file called `find_large_files.sh` and add the following content.

    ```bash copy
    #!/bin/bash
    # Find files over 10 MB, use Copilot CLI to describe them, and email a summary
    
    EMAIL_TO="user@example.com"
    SUBJECT="Large file found"
    BODY=""
    
    while IFS= read -r -d '' file; do
        size=$(du -h "$file" | cut -f1)
        description=$(copilot -p "Describe this file briefly: $file" -s 2>/dev/null)
        BODY+="File: $file"$'\n'"Size: $size"$'\n'"Description:     $description"$'\n\n'
    done < <(find . -type f -size +10M -print0)
    
    if [ -z "$BODY" ]; then
        echo "No files over 10MB found."
        exit 0
    fi
    
    echo -e "To: $EMAIL_TO\nSubject: $SUBJECT\n\n$BODY" | sendmail "$EMAIL_TO"
    echo "Email sent to $EMAIL_TO with large file details."
    ```

1. Make the script executable.

    ```shell copy
    chmod +x find_large_files.sh
    ```

1. Run the script.

    ```shell copy
    ./find_large_files.sh
    ```

This script leverages {% data variables.copilot.copilot_cli_short %} to generate descriptions of the files you are searching for, so you can quickly understand the contents of large files without opening them.

You can also automatically trigger these scripts in response to events, such as a new file being added to a directory, or on a schedule using cron jobs or CI/CD pipelines.

## Further reading

* [AUTOTITLE](/copilot/how-tos/copilot-cli/automate-copilot-cli/run-cli-programmatically)
* [AUTOTITLE](/copilot/how-tos/copilot-cli/automate-copilot-cli/automate-with-actions)
* [AUTOTITLE](/copilot/reference/copilot-cli-reference/cli-programmatic-reference)
