export interface ToolsMapping {
  [key: string]: string
}

// Tools are ordered by usage analytics so common options appear before the More menu.
// Retune with this Kusto Query Language (KQL):
// docs_v0_preference_event
// | where timestamp between (ago(180d) .. now())
// | where context.hostname == 'docs.github.com'
// | where abs(totimespan(context.created - timestamp)) < 1h // bot filter
// | summarize Count=count() by Name=preference_name, Value=preference_value
// | order by Count desc
// The trailing comments show counts from a 180-day window ending 2025-11-04.
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
