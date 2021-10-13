#!/usr/bin/env node
import Github from './github.js'
const github = Github()

// https://docs.github.com/rest/reference/git#get-a-reference
export async function getCommitSha(owner, repo, ref) {
  try {
    const { data } = await github.git.getRef({
      owner,
      repo,
      ref,
    })
    return data.object.sha
  } catch (err) {
    console.log('error getting tree')
    throw err
  }
}

// https://docs.github.com/rest/reference/git#list-matching-references
export async function listMatchingRefs(owner, repo, ref) {
  try {
    // if the ref is found, this returns an array of objects;
    // if the ref is not found, this returns an empty array
    const { data } = await github.git.listMatchingRefs({
      owner,
      repo,
      ref,
    })
    return data
  } catch (err) {
    console.log('error getting tree')
    throw err
  }
}

// https://docs.github.com/rest/reference/git#get-a-commit
export async function getTreeSha(owner, repo, commitSha) {
  try {
    const { data } = await github.git.getCommit({
      owner,
      repo,
      commit_sha: commitSha,
    })
    return data.tree.sha
  } catch (err) {
    console.log('error getting tree')
    throw err
  }
}

// https://docs.github.com/rest/reference/git#get-a-tree
export async function getTree(owner, repo, ref, allowedPaths = []) {
  const commitSha = await getCommitSha(owner, repo, ref)
  const treeSha = await getTreeSha(owner, repo, commitSha)
  try {
    const { data } = await github.git.getTree({
      owner,
      repo,
      tree_sha: treeSha,
      recursive: 1,
    })
    // only return files that match the patterns in allowedPaths
    // skip actions/changes files
    return data.tree
  } catch (err) {
    console.log('error getting tree')
    throw err
  }
}

// https://docs.github.com/rest/reference/git#get-a-blob
export async function getContentsForBlob(owner, repo, blob) {
  const { data } = await github.git.getBlob({
    owner,
    repo,
    file_sha: blob.sha,
  })
  // decode blob contents
  return Buffer.from(data.content, 'base64')
}

// https://docs.github.com/rest/reference/repos#get-repository-content
export async function getContents(owner, repo, ref, path) {
  try {
    const { data } = await github.repos.getContent({
      owner,
      repo,
      ref,
      path,
    })
    // decode contents
    return Buffer.from(data.content, 'base64').toString()
  } catch (err) {
    console.log(`error getting ${path} from ${owner}/${repo} at ref ${ref}`)
    throw err
  }
}

// https://docs.github.com/en/rest/reference/pulls#list-pull-requests
export async function listPulls(owner, repo) {
  try {
    const { data } = await github.pulls.list({
      owner,
      repo,
      per_page: 100,
    })
    return data
  } catch (err) {
    console.log(`error listing pulls in ${owner}/${repo}`)
    throw err
  }
}

export async function createIssueComment(owner, repo, pullNumber, body) {
  try {
    const { data } = await github.issues.createComment({
      owner,
      repo,
      issue_number: pullNumber,
      body,
    })
    return data
  } catch (err) {
    console.log(`error creating a review comment on PR ${pullNumber} in ${owner}/${repo}`)
    throw err
  }
}

// Search for a string in a file in code and return the array of paths to files that contain string
export async function getPathsWithMatchingStrings(strArr, org, repo) {
  const perPage = 100
  const paths = new Set()

  for (const str of strArr) {
    try {
      const q = `q=${str}+in:file+repo:${org}/${repo}`
      let currentPage = 1
      let totalCount = 0
      let currentCount = 0

      do {
        const data = await searchCode(q, perPage, currentPage)
        data.items.map((el) => paths.add(el.path))
        totalCount = data.total_count
        currentCount += data.items.length
        currentPage++
      } while (currentCount < totalCount)
    } catch (err) {
      console.log(`error searching for ${str} in ${org}/${repo}`)
      throw err
    }
  }

  return paths
}

async function searchCode(q, perPage, currentPage) {
  try {
    const { data } = await github.rest.search.code({
      q,
      per_page: perPage,
      page: currentPage,
    })

    return data
  } catch (err) {
    console.log(`error searching for ${q} in code`)
    throw err
  }
}
