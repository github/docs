If you run into problems using hooks, use the following table to troubleshoot.

| Issue | Action |
| --- | --- |
| Hooks are not executing | <ul><li>Verify the JSON file is in the `.github/hooks/` directory.</li><li>Check for valid JSON syntax (for example, `jq .  hooks.json`).</li><li>Ensure `version: 1` is specified in your `hooks.json` file.</li><li>Verify the script you are calling from your hook is executable (`chmod +x script.sh`)</li><li>Check that the script has a proper shebang (for example, `#!/bin/bash`)</li></ul> |
| Hooks are timing out | <ul><li>The default timeout is 30 seconds. Increase `timeoutSec` in the configuration if needed.</li><li>Optimize script performance by avoiding unnecessary operations.</li></ul> |
| Invalid JSON output | <ul><li>Ensure the output is on a single line.</li><li>On Unix, use `jq -c` to compact and validate the JSON output.</li><li>On Windows, use the `ConvertTo-Json -Compress` command in PowerShell to do the same.</li></ul> |

## Debugging

You can debug hooks using the following methods:

* **Enable verbose logging** in the script to inspect the input data and trace script execution.

  ```shell copy
  #!/bin/bash
  set -x  # Enable bash debug mode
  INPUT=$(cat)
  echo "DEBUG: Received input" >&2
  echo "$INPUT" >&2
  # ... rest of script
  ```

* **Test hooks locally** by piping test input into your hook to validate its behavior:

  ```shell copy
  # Create test input
  echo '{"timestamp":1704614400000,"cwd":"/tmp","toolName":"bash","toolArgs":"{\"command\":\"ls\"}"}' | ./my-hook.sh

  # Check exit code
  echo $?

  # Validate output is valid JSON
  ./my-hook.sh | jq .
  ```