#!/bin/bash

# Required environment variables:
# $INPUT_FILES: Pattern(s) to filter files by (e.g., "content/** data/**")
# $INPUT_PR: Pull request number (if running in PR context)
# $INPUT_HEAD: Current branch or SHA for git diff
# $INPUT_OUTPUT_FILE: Optional file to redirect output to.
# $GH_TOKEN: the access token

# Default value for files parameter if not provided
FILTER=${INPUT_FILES:-.}

# Print the filter
echo "__ using filter: __"
echo "$FILTER"

# Find the file diff in the pull request or merge group
# If its a pull request, use the faster call to the GitHub API
# For push, workflow_dispatch, and merge_group, use git diff
if [ -n "$INPUT_PR" ]
then
  echo "__ running gh pr diff __"
  DIFF=$(gh pr diff $INPUT_PR --name-only)
  if [ -z "$DIFF" ]; then
    echo "__ gh pr diff failed, falling back to git diff __"
    HEAD=$(gh pr view $INPUT_PR --json headRefName --jq .headRefName)
  fi
fi

if [ -z "$DIFF" ]; then
  # If HEAD was set from gh pr view but INPUT_HEAD is empty, use HEAD instead
  if [ -z "$INPUT_HEAD" ] && [ -n "$HEAD" ]; then
    INPUT_HEAD=$HEAD
  fi
  echo "__ using branch name $INPUT_HEAD __"
  git fetch origin $INPUT_HEAD:refs/remotes/origin/$INPUT_HEAD
  echo "__ running git diff __"

  DIFF=$(git diff --name-only origin/main origin/$INPUT_HEAD)
fi

# So we can inspect the output
echo "__ DIFF found __"
echo "$DIFF"

# Filter the DIFF to just the directories specified in the input files
if [ "$FILTER" != "." ]; then
  echo "__ filtering DIFF to only include $FILTER __"
  FILTERED_DIFF=""
  IFS=$'\n'
  for file in $DIFF; do
    while IFS= read -r pattern || [ -n "$pattern" ]; do
      clean_pattern=${pattern%/}
      if [[ $file == $clean_pattern || $file == $clean_pattern/* ]]; then
        FILTERED_DIFF="$FILTERED_DIFF $file"
        break
      fi
    done <<< "$FILTER"
  done
  unset IFS
  DIFF=$FILTERED_DIFF
  echo "__ filtered DIFF __"
  echo "$DIFF"
fi

echo "__ formatting output __"
FORMATTED_DIFF=$(echo "$DIFF" | tr '\n' ' ' | tr -s ' ' | sed 's/^ *//' | sed 's/ *$//')
echo "Formatted diff: '$FORMATTED_DIFF'"

# Set the output for GitHub Actions
ALL_FORMATTED=$(echo "$DIFF" | tr '\n' ' ' | tr -s ' ' | sed 's/^ *//' | sed 's/ *$//')
HAS_CHANGES=true
if [[ -z "$ALL_FORMATTED" ]]; then
  echo "No changed files detected"
  HAS_CHANGES=false
fi

# Function to set outputs either to a file or GITHUB_OUTPUT
set_outputs() {
  local target=$1

  if [[ "$HAS_CHANGES" == "false" ]]; then
    echo "Setting empty outputs to $target"
    echo "all_changed_files=" >> "$target"
    echo "filtered_changed_files=" >> "$target"
  else
    echo "Setting non-empty outputs to $target"
    echo "all_changed_files<<EOF" >> "$target"
    echo "$ALL_FORMATTED" >> "$target"
    echo "EOF" >> "$target"

    echo "filtered_changed_files<<EOF" >> "$target"
    echo "$FORMATTED_DIFF" >> "$target"
    echo "EOF" >> "$target"
  fi
}

# Set outputs to the appropriate target
if [[ -n "$INPUT_OUTPUT_FILE" ]]; then
  set_outputs "$INPUT_OUTPUT_FILE"
else
  set_outputs "$GITHUB_OUTPUT"
fi
