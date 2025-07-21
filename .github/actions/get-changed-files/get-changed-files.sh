#!/bin/bash

# Required environment variables:
# $INPUT_FILES: Pattern(s) to filter files by (e.g., "content/** data/**")
# $INPUT_HEAD: Current branch or SHA for git diff
# $INPUT_OUTPUT_FILE: Optional file to redirect output to.

# Default value for files parameter if not provided
FILTER=${INPUT_FILES:-.}

# Print the filter
echo "__ using filter: __"
echo "$FILTER"

# Ensure we have the latest from the remote
echo "__ fetching latest changes __"
git fetch --depth=1 origin main
git fetch --depth=1 origin ${INPUT_HEAD:-HEAD}

# Get diff with status information
echo "__ running git diff with status __"
DIFF_OUTPUT=$(git diff --name-status origin/main origin/${INPUT_HEAD:-HEAD})

# Function to extract files by pattern from diff output
extract_files() {
  local pattern=$1
  local field=$2
  echo "$DIFF_OUTPUT" | grep -E "$pattern" | cut -f$field
}

# Extract files by status
echo "__ extracting files by status __"
MODIFIED_FILES=$(extract_files "^[AM]" 2)
DELETED_FILES=$(extract_files "^D" 2)
RENAMED_OLD_FILES=$(extract_files "^R[0-9]+" 2)
RENAMED_NEW_FILES=$(extract_files "^R[0-9]+" 3)

# Create paired renames in format "oldname=>newname"
create_rename_pairs() {
  local old_files=$1
  local new_files=$2
  local pairs=()

  IFS=$'\n'
  for i in $(seq 1 $(echo "$old_files" | wc -l)); do
    OLD=$(echo "$old_files" | sed -n "${i}p")
    NEW=$(echo "$new_files" | sed -n "${i}p")
    pairs+=("$OLD=>$NEW")
  done
  unset IFS

  printf "%s\n" "${pairs[@]}"
}

RENAMED_FILES_WITH_HISTORY=$(create_rename_pairs "$RENAMED_OLD_FILES" "$RENAMED_NEW_FILES")

# Combine files for different outputs
DIFF=$(echo -e "$MODIFIED_FILES\n$RENAMED_NEW_FILES" | sort | uniq)
ALL_DIFF=$(echo -e "$MODIFIED_FILES\n$DELETED_FILES\n$RENAMED_NEW_FILES" | sort | uniq)

# Debug output
echo "__ MODIFIED files found __"
echo "$MODIFIED_FILES"
echo "__ DELETED files found __"
echo "$DELETED_FILES"
echo "__ RENAMED files found (with history) __"
echo "$RENAMED_FILES_WITH_HISTORY"
echo "__ ALL changed files __"
echo "$ALL_DIFF"

# Function to filter files by pattern
filter_files() {
  local files=$1
  local result=""

  IFS=$'\n'
  for file in $files; do
    while IFS= read -r pattern || [ -n "$pattern" ]; do
      clean_pattern=${pattern%/}
      if [[ $file == $clean_pattern || $file == $clean_pattern/* ]]; then
        result="$result $file"
        break
      fi
    done <<< "$FILTER"
  done
  unset IFS

  echo "$result"
}

# Function to filter rename pairs
filter_renames() {
  local new_files=$1
  local old_files=$2
  local result=""

  IFS=$'\n'
  for i in $(seq 1 $(echo "$new_files" | wc -l)); do
    NEW=$(echo "$new_files" | sed -n "${i}p")
    OLD=$(echo "$old_files" | sed -n "${i}p")

    while IFS= read -r pattern || [ -n "$pattern" ]; do
      clean_pattern=${pattern%/}
      if [[ $NEW == $clean_pattern || $NEW == $clean_pattern/* ]]; then
        result="$result $OLD=>$NEW"
        break
      fi
    done <<< "$FILTER"
  done
  unset IFS

  echo "$result"
}

# Filter the files to just the directories specified in the input files
if [ "$FILTER" != "." ]; then
  echo "__ filtering files to only include $FILTER __"

  FILTERED_MODIFIED=$(filter_files "$MODIFIED_FILES")
  FILTERED_DELETED=$(filter_files "$DELETED_FILES")
  FILTERED_RENAMED=$(filter_renames "$RENAMED_NEW_FILES" "$RENAMED_OLD_FILES")

  # For filtered_changed_files (non-deleted files)
  FILTERED_DIFF="$FILTERED_MODIFIED"
  for new_file in $(echo "$FILTERED_RENAMED" | grep -o "=>[^[:space:]]*" | sed 's/=>//g'); do
    FILTERED_DIFF="$FILTERED_DIFF $new_file"
  done

  MODIFIED_FILES=$FILTERED_MODIFIED
  DELETED_FILES=$FILTERED_DELETED
  RENAMED_FILES_WITH_HISTORY=$FILTERED_RENAMED
  DIFF=$FILTERED_DIFF

  echo "__ filtered MODIFIED files __"
  echo "$MODIFIED_FILES"
  echo "__ filtered DELETED files __"
  echo "$DELETED_FILES"
  echo "__ filtered RENAMED files (with history) __"
  echo "$RENAMED_FILES_WITH_HISTORY"
  echo "__ filtered changed files (non-deleted) __"
  echo "$FILTERED_DIFF"
fi

# Function to format output (standardize whitespace)
format_output() {
  local input=$1
  echo "$input" | tr '\n' ' ' | tr -s ' ' | sed 's/^ *//' | sed 's/ *$//'
}

echo "__ formatting output __"
FORMATTED_MODIFIED=$(format_output "$MODIFIED_FILES")
FORMATTED_DELETED=$(format_output "$DELETED_FILES")
FORMATTED_DIFF=$(format_output "$DIFF")
FORMATTED_RENAMED=$(format_output "$RENAMED_FILES_WITH_HISTORY")
ALL_FORMATTED=$(format_output "$ALL_DIFF")

echo "Formatted modified: '$FORMATTED_MODIFIED'"
echo "Formatted deleted: '$FORMATTED_DELETED'"
echo "Formatted renamed: '$FORMATTED_RENAMED'"
echo "Formatted non-deleted changes: '$FORMATTED_DIFF'"

# Set the output for GitHub Actions
HAS_CHANGES=true
if [[ -z "$FORMATTED_DIFF" && -z "$FORMATTED_DELETED" ]]; then
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
    echo "filtered_deleted_files=" >> "$target"
    echo "filtered_renamed_files=" >> "$target"
  else
    echo "Setting non-empty outputs to $target"
    echo "all_changed_files<<EOF" >> "$target"
    echo "$ALL_FORMATTED" >> "$target"
    echo "EOF" >> "$target"

    echo "filtered_changed_files<<EOF" >> "$target"
    echo "$FORMATTED_DIFF" >> "$target"
    echo "EOF" >> "$target"

    echo "filtered_deleted_files<<EOF" >> "$target"
    echo "$FORMATTED_DELETED" >> "$target"
    echo "EOF" >> "$target"

    echo "filtered_renamed_files<<EOF" >> "$target"
    echo "$FORMATTED_RENAMED" >> "$target"
    echo "EOF" >> "$target"
  fi
}

# Set outputs to the appropriate target
if [[ -n "$INPUT_OUTPUT_FILE" ]]; then
  set_outputs "$INPUT_OUTPUT_FILE"
else
  set_outputs "$GITHUB_OUTPUT"
fi
