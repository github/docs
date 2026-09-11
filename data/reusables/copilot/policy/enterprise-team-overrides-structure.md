After you complete this section, your `.github-private` repository will have the following structure:

* **`.github-private/`**
  * **`copilot/`**
    * **`{% data variables.copilot.managed_setting_file %}`**: `{ "model": { "overridable": "auto" } }`
    * **`{% data variables.copilot.team_mappings_file %}`**: `{ "no-auto.json": ["special-team"] }`
    * **`{% data variables.copilot.team_settings_directory %}`**
      * **`no-auto.json`**: `{ "model": "unmanaged" }`
