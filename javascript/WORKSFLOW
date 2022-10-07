Skip to content
Search or jump to…
Pull requests
Issues
Marketplace
Explore
 
@zakwarlord7 
Your account has been flagged.
Because of that, your profile is hidden from the public. If you believe this is a mistake, contact support to have your account status reviewed.
zakwarlord7
/
GitHub-doc
Public
forked from github/docs
Code
Pull requests
Actions
Projects
Security
1
Insights
Settings
chore: remove git.io (github#17417)
All links on git.io will stop redirecting after April 29, 2022.

- https://github.blog/changelog/2022-04-25-git-io-deprecation/
 main (github/docs#17417)
 master 
…
 Master
@renbaoshuo
renbaoshuo committed on Apr 27 
1 parent cc5b24d commit 685a69703b4de372ddfea63da69d9af45526bd04
Show file tree Hide file tree
Showing 5 changed files with 5 additions and 5 deletions.
Filter changed files
  2  
.husky/post-checkout
@@ -7,5 +7,5 @@ then
    printf >&2 "\nGitHub Docs requires Git LFS but using the 'git-lfs' on your path failed.\n"	    printf >&2 "\nGitHub Docs requires Git LFS but using the 'git-lfs' on your path failed.\n"
  fi	  fi
else	else
  printf >&2 "\nGitHub Docs requires Git LFS but 'git-lfs' was not found on your path.\nLearn how to install Git LFS at <https://git.io/JBCId>.\n"	  printf >&2 "\nGitHub Docs requires Git LFS but 'git-lfs' was not found on your path.\nLearn how to install Git LFS at <https://docs.github.com/en/github/managing-large-files/versioning-large-files/installing-git-large-file-storage>.\n"
fi	fi
  2  
.husky/post-commit
@@ -7,5 +7,5 @@ then
    printf >&2 "\nGitHub Docs requires Git LFS but using the 'git-lfs' on your path failed.\n"	    printf >&2 "\nGitHub Docs requires Git LFS but using the 'git-lfs' on your path failed.\n"
  fi	  fi
else	else
  printf >&2 "\nGitHub Docs requires Git LFS but 'git-lfs' was not found on your path.\nLearn how to install Git LFS at <https://git.io/JBCId>.\n"	  printf >&2 "\nGitHub Docs requires Git LFS but 'git-lfs' was not found on your path.\nLearn how to install Git LFS at <https://docs.github.com/en/github/managing-large-files/versioning-large-files/installing-git-large-file-storage>.\n"
fi	fi
  2  
.husky/post-merge
@@ -7,5 +7,5 @@ then
    printf >&2 "\nGitHub Docs requires Git LFS but using the 'git-lfs' on your path failed.\n"	    printf >&2 "\nGitHub Docs requires Git LFS but using the 'git-lfs' on your path failed.\n"
  fi	  fi
else	else
  printf >&2 "\nGitHub Docs requires Git LFS but 'git-lfs' was not found on your path.\nLearn how to install Git LFS at <https://git.io/JBCId>.\n"	  printf >&2 "\nGitHub Docs requires Git LFS but 'git-lfs' was not found on your path.\nLearn how to install Git LFS at <https://docs.github.com/en/github/managing-large-files/versioning-large-files/installing-git-large-file-storage>.\n"
fi	fi
  2  
.husky/pre-push
@@ -7,7 +7,7 @@ then
    printf >&2 "\nGitHub Docs requires Git LFS but using the 'git-lfs' on your path failed.\n"	    printf >&2 "\nGitHub Docs requires Git LFS but using the 'git-lfs' on your path failed.\n"
  fi	  fi
else	else
  printf >&2 "\nGitHub Docs requires Git LFS but 'git-lfs' was not found on your path.\nLearn how to install Git LFS at <https://git.io/JBCId>.\n"	  printf >&2 "\nGitHub Docs requires Git LFS but 'git-lfs' was not found on your path.\nLearn how to install Git LFS at <https://docs.github.com/en/github/managing-large-files/versioning-large-files/installing-git-large-file-storage>.\n"
fi	fi


. "$(dirname "$0")/_/husky.sh"	. "$(dirname "$0")/_/husky.sh"
  2  
script/toggle-ghae-feature-flags.js
@@ -27,7 +27,7 @@ program
  .description(	  .description(
    'Toggle issue-based, feature-flagged versioning for GitHub AE content like\n' +	    'Toggle issue-based, feature-flagged versioning for GitHub AE content like\n' +
      'ghae-next or ghae-issue-1234, then commit the results.\n\n' +	      'ghae-next or ghae-issue-1234, then commit the results.\n\n' +
      'Documentation: https://git.io/JCtUO\n\n' +	      'Documentation: https://github.com/github/docs-content/blob/main/docs-content-docs/docs-content-workflows/content-creation/versioning-documentation.md#internal-versioning-conventions-for-github-ae\n\n' +
      'Examples:\n' +	      'Examples:\n' +
      `  ${scriptName} -n\n` +	      `  ${scriptName} -n\n` +
      `  ${scriptName} -f 'issue-1234, issue-5678'`	      `  ${scriptName} -f 'issue-1234, issue-5678'`
0 comments on commit 685a697
@zakwarlord7
 
Add heading textAdd bold text, <Ctrl+b>Add italic text, <Ctrl+i>
Add a quote, <Ctrl+Shift+.>Add code, <Ctrl+e>Add a link, <Ctrl+k>
Add a bulleted list, <Ctrl+Shift+8>Add a numbered list, <Ctrl+Shift+7>Add a task list, <Ctrl+Shift+l>
Directly mention a user or team
Reference an issue, pull request, or discussion
Add saved reply
Leave a comment
No file chosen
Attach files by dragging & dropping, selecting or pasting them.
Styling with Markdown is supported
 You’re receiving notifications because you’re watching this repository.
Footer
© 2022 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
# See here for image contents: https://github.com/microsoft/vscode-dev-containers/tree/v0.177.0/containers/javascript-node/.devcontainer/base.Dockerfile

# [Choice] Node.js version: 16, 14, 12
ARG VARIANT="16-buster"
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-${VARIANT}

# [Optional] Uncomment this section to install additional OS packages.
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-package-list-here>

# [Optional] Uncomment if you want to install an additional version of node using nvm
# ARG EXTRA_NODE_VERSION=10
# RUN su node -c "source /usr/local/share/nvm/nvm.sh && nvm install ${EXTRA_NODE_VERSION}"

# [Optional] Uncomment if you want to install more global node modules
# RUN su node -c "npm install -g <your-package-list-here>"

# Install the GitHub CLI see:
# https://github.com/microsoft/vscode-dev-containers/blob/3d59f9fe37edb68f78874620f33dac5a62ef2b93/script-library/docs/github.md
COPY library-scripts/github-debian.sh /tmp/library-scripts/
RUN apt-get update && bash /tmp/library-scripts/github-debian.sh
