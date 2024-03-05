1. Uncomment the `customizations` property and edit it as follows to install the "Code Spell Checker" {% data variables.product.prodname_vscode_shortname %} extension.

   ```jsonc copy
   // Configure tool-specific properties.
   "customizations": {
     // Configure properties specific to VS Code.
     "vscode": {
       // Add the IDs of extensions you want installed when the container is created.
       "extensions": [
         "streetsidesoftware.code-spell-checker"
       ]
     }
   }
   ```

   The `devcontainer.json` file should now look similar to this, depending on which image you chose:
