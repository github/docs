/**
 * Interface defining the mapping between tool identifiers and their display names
 */
export interface ToolsMapping {
  [key: string]: string
}

/**
 * All the tools available for the Tool Picker
 */
export const allTools: ToolsMapping = {
  agents: 'Agents',
  api: 'API',
  azure_data_studio: 'Azure Data Studio',
  bash: 'Bash',
  cli: 'GitHub CLI',
  codespaces: 'Codespaces',
  copilotcli: 'Copilot CLI',
  curl: 'curl',
  desktop: 'Desktop',
  eclipse: 'Eclipse',
  github_mobile: 'GitHub Mobile',
  ides: 'IDEs',
  importer_cli: 'GitHub Enterprise Importer CLI',
  javascript: 'JavaScript',
  jetbrains: 'JetBrains IDEs',
  jetbrains_beta: 'JetBrains IDEs (Beta)',
  mobile: 'Mobile',
  skillsets: 'Skillsets',
  vimneovim: 'Vim/Neovim',
  powershell: 'PowerShell',
  visualstudio: 'Visual Studio',
  vscode: 'Visual Studio Code',
  webui: 'Web browser',
  windowsterminal: 'Windows Terminal',
  xcode: 'Xcode',
}
