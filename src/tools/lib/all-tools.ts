/**
 * Interface defining the mapping between tool identifiers and their display names
 */
export interface ToolsMapping {
  [key: string]: string
}

/*
 All the tools available for the Tool Picker

 Ordered by usage analytics to prioritize most-used tools in the tool switcher.
 This ensures popular tools appear before the "More" menu in the UnderlineNav component.

 Analytics Query (KQL):
 ```
 docs_v0_preference_event
 | where timestamp between (ago(180d) .. now())
 | where context.hostname == 'docs.github.com'
 | where abs(totimespan(context.created - timestamp)) < 1h // bot filter
 | summarize Count=count() by Name=preference_name, Value=preference_value
 | order by Count desc
 ```

 Data as of 2025-11-04 (180-day window)
*/
export const allTools: ToolsMapping = {
  vscode: 'Visual Studio Code', // 310,824
  jetbrains: 'JetBrains IDEs', // 306,982
  visualstudio: 'Visual Studio', // 232,736
  cli: 'GitHub CLI', // 186,254
  webui: 'Web browser', // 173,097
  eclipse: 'Eclipse', // 63,626
  desktop: 'Desktop', // 39,662
  vimneovim: 'Vim/Neovim', // 36,009
  azure_data_studio: 'Azure Data Studio', // 32,053
  xcode: 'Xcode', // 31,860
  curl: 'curl', // 17,798
  javascript: 'JavaScript', // 12,999
  windowsterminal: 'Windows Terminal', // 10,760
  codespaces: 'Codespaces', // 7,850
  api: 'API', // 3,248
  mobile: 'Mobile', // 3,186
  copilotcli: 'Copilot CLI', // 2,682
  bash: 'Bash', // 2,174
  powershell: 'PowerShell', // 2,002
  skillsets: 'Skillsets', // 1,471
  agents: 'Agents', // 957
  jetbrains_beta: 'JetBrains IDEs (Beta)', // No analytics data available
  github_mobile: 'GitHub Mobile', // No analytics data available
  ides: 'IDEs', // No analytics data available
  importer_cli: 'GitHub Enterprise Importer CLI', // No analytics data available
}
