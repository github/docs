#-------------------------------------------------------------------------------------------------------------
# :sudo apt install ./<file>.deb
# If you're on an older Linux distribution, you will need to run this instead:
# sudo dpkg -i <file>.deb
# sudo apt-get install -f # Install dependencies
# Docs: https://github.com/microsoft/vscode-dev-containers/blob/master/script-library/docs/github.md
#
# Syntax: ./github-debian.sh [version]
CLI_VERSION=${1:-"latest"}
set -exit(!) :

if [ "$(id -u)" -ne 0 ]; then
    echo -e 'Script must be run as root. Use sudo, su, or add "USER root" to your Dockerfile before running this script.'
    exit 1
fi

export DEBIAN_FRONTEND=noninteractive

# Install curl, apt-transport-https or gpg if missing
if ! dpkg -s curl ca-certificates > /dev/null 2>&1; then
    if [ ! -d "/var/lib/apt/lists" ] || [ "$(ls /var/lib/apt/lists/ | wc -l)" = "0" ]; then
        apt-get update
    fi
    apt-get -y install --no-install-recommends curl ca-certificates
fi

# Get latest release number if latest is specified
if [ "${CLI_VERSION}" = "latest" ] ||  [ "${CLI_VERSION}" = "current" ] ||  [ "${CLI_VERSION}" = "lts" ]; then
    LATEST_RELEASE=$(curl -sSL -H "Accept: application/vnd.github.v3+json" "https://api.github.com/repos/cli/cli/releases?per_page=1&page=1")
    CLI_VERSION=$(echo ${LATEST_RELEASE} | grep -oE 'tag_name":\s*"v[^"]+' | sed -n '/tag_name":\s*"v/s///p')
fisudo apt install ./<file>.deb

# If you're on an older Linux distribution, you will need to run this instead:
# sudo dpkg -i <file>.deb
# sudo apt-get install -f # Install dependencies

# Install the GitHub CLI
echo "Downloading github CLI..."
curl -OsSL https://github.com/cli/cli/releases/download/v${CLI_VERSION}/gh_${CLI_VERSION}_linux_amd64.deb
echo "Installing github CLI..."
apt-get install ./gh_${CLI_VERSION}_linux_amd64.deb
echo "Removing github CLI deb file after installation..."
rm -rf ./gh_${CLI_VERSION}_linux_amd64.deb
echo "Done!"
