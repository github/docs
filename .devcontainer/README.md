# Devcontainer Security Hardening

This directory contains security-hardened devcontainer configurations for the GitHub Docs project. These configurations follow security best practices to minimize potential attack vectors while maintaining development functionality.

## Available Configurations

### 1. Default Configuration (`devcontainer.json`)
- **Security Level**: Moderate
- **Use Case**: Standard development with basic security hardening
- **Key Security Features**:
  - Removed SSH daemon access
  - Pinned GitHub CLI version
  - Disabled automatic git fetching
  - Removed external repository permissions
  - Disabled automatic server startup
  - Commented out automatic port visibility

### 2. Hardened Configuration (`devcontainer.hardened.json`)
- **Security Level**: High
- **Use Case**: Security-focused development with minimal features
- **Key Security Features**:
  - Minimal extension set
  - No automatic command execution
  - Manual dependency installation required
  - Reduced resource allocation
  - Explicit security-focused naming

### 3. Team A Secure Configuration (`team-a-secure/devcontainer.json`)
- **Security Level**: High
- **Use Case**: Team-specific secure configuration
- **Key Security Features**:
  - Team-specific extension subset
  - Manual setup required
  - Reduced resource requirements

### 4. Team B Secure Configuration (`team-b-secure/devcontainer.json`)
- **Security Level**: Maximum
- **Use Case**: Ultra-secure development environment
- **Key Security Features**:
  - Minimal extension set (only essential linting)
  - No automatic commands whatsoever
  - Workspace trust required
  - Git sync confirmation required
  - Minimal resource allocation

## Security Improvements

### Removed Security Risks
1. **SSH Daemon**: Removed `"sshd": "latest"` feature that provided remote access
2. **External Repository Access**: Removed automatic permissions for `github/docs-early-access`
3. **Automatic Command Execution**: Minimized or removed automatic lifecycle commands
4. **Unpinned Versions**: Changed `"latest"` to specific pinned versions
5. **Auto-fetching**: Disabled automatic git fetch operations

### Enhanced Security Features
1. **Version Pinning**: All features use specific versions instead of "latest"
2. **Minimal Extensions**: Reduced extension sets to only essential tools
3. **Manual Operations**: Require manual approval for sensitive operations
4. **Resource Limits**: Reduced resource allocation where appropriate
5. **Non-root User**: Maintained non-root user execution

## Usage

### Selecting a Configuration
When creating a codespace, you can choose from the available configurations:
- Default project configuration (moderately hardened)
- Team A codespace config (highly secure)
- Team B codespace config (maximum security)

### Manual Setup Requirements
For security-hardened configurations:
1. Install dependencies: `npm ci`
2. Start the development server: `npm start`
3. Configure port visibility manually if needed: `gh cs ports visibility 4000:public`

## Security Best Practices

1. **Review Configuration**: Always review devcontainer configurations before use
2. **Minimal Permissions**: Only grant necessary permissions and features  
3. **Manual Operations**: Prefer manual over automatic operations for sensitive tasks
4. **Version Pinning**: Use specific versions instead of "latest" tags
5. **Regular Updates**: Keep pinned versions updated but test changes thoroughly

## Migration Guide

### From Standard to Hardened Configuration
1. Switch to `devcontainer.hardened.json` or team-specific configuration
2. Install dependencies manually: `npm ci`
3. Start development server manually: `npm start`
4. Configure port visibility if needed: `gh cs ports visibility 4000:public`

### Custom Team Configurations
To create a custom secure configuration:
1. Copy an existing team configuration
2. Customize extensions and settings for your team's needs
3. Follow the minimal permissions principle
4. Test the configuration thoroughly

## Security Considerations

- These configurations prioritize security over convenience
- Some automatic features have been disabled and require manual intervention
- External repository access must be granted explicitly when needed
- Review and approve all configuration changes through your security review process