#!/usr/bin/env node
import crypto from 'crypto'
import fs from 'fs/promises'

import { RequestError } from '@octokit/request-error'

import { retryingGithub } from './github.js'
const github = retryingGithub()

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
    console.log('error getting commit sha', owner, repo, ref)
    throw err
  }
}

// based on https://docs.github.com/rest/reference/git#get-a-reference
export async function hasMatchingRef(owner, repo, ref) {
  try {
    await github.git.getRef({
      owner,
      repo,
      ref,
    })
    return true
  } catch (err) {
    if (err instanceof RequestError && err.status === 404) {
      return false
    }
    console.log('error getting matching ref', owner, repo, ref)
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
    console.log('error getting tree sha', owner, repo, commitSha)
    throw err
  }
}

// https://docs.github.com/rest/reference/git#get-a-tree
export async function getTree(owner, repo, ref) {
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
    console.log('error getting tree', owner, repo, ref)
    throw err
  }
}

// https://docs.github.com/rest/reference/git#get-a-blob
export async function getContentsForBlob(owner, repo, sha) {
  const { data } = await github.git.getBlob({
    owner,
    repo,
    file_sha: sha,
  })
  // decode blob contents
  return Buffer.from(data.content, 'base64').toString()
}

// https://docs.github.com/rest/reference/repos#get-repository-content
export async function getContents(owner, repo, ref, path) {
  const { data } = await getContent(owner, repo, ref, path)
  if (!data.content) {
    return await getContentsForBlob(owner, repo, data.sha)
  }
  // decode Base64 encoded contents
  return Buffer.from(data.content, 'base64').toString()
}

// https://docs.github.com/rest/reference/repos#get-repository-content
export async function getContentAndData(owner, repo, ref, path) {
  const { data } = await getContent(owner, repo, ref, path)
  const content = data.content
    ? Buffer.from(data.content, 'base64').toString()
    : await getContentsForBlob(owner, repo, data.sha)
  // decode Base64 encoded contents
  return { content, blobSha: data.sha }
}

async function getContent(owner, repo, ref, path) {
  try {
    return await github.repos.getContent({
      owner,
      repo,
      ref,
      path,
    })
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
export async function getPathsWithMatchingStrings(
  strArr,
  org,
  repo,
  { cache = true, forceDownload = false } = {},
) {
  const perPage = 100
  const paths = new Set()

  for (const str of strArr) {
    try {
      const q = `q=${str}+in:file+repo:${org}/${repo}`
      let currentPage = 1
      let totalCount = 0
      let currentCount = 0

      do {
        const data = await searchCode(q, perPage, currentPage, cache, forceDownload)
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

async function searchCode(q, perPage, currentPage, cache = true, forceDownload = false) {
  const cacheKey = `searchCode-${q}-${perPage}-${currentPage}`
  const tempFilename = `/tmp/searchCode-${crypto
    .createHash('md5')
    .update(cacheKey)
    .digest('hex')}.json`

  if (!forceDownload && cache) {
    try {
      return JSON.parse(await fs.readFile(tempFilename, 'utf8'))
    } catch (error) {
      if (error.code !== 'ENOENT') {
        throw error
      }
      console.log(`Cache miss on ${tempFilename} (${cacheKey})`)
    }
  }

  try {
    const { data } = await secondaryRateLimitRetry(github.rest.search.code, {
      q,
      per_page: perPage,
      page: currentPage,
    })
    if (cache) {
      await fs.writeFile(tempFilename, JSON.stringify(data))
      console.log(`Wrote search results to ${tempFilename}`)
    }

    return data
  } catch (err) {
    console.log(`error searching for ${q} in code`)
    throw err
  }
}

async function secondaryRateLimitRetry(callable, args, maxAttempts = 10, sleepTime = 1000) {
  try {
    const response = await callable(args)
    return response
  } catch (err) {
    // If you get a secondary rate limit error (403) you'll get a data
    // response that includes:
    //
    //  {
    //    documentation_url: 'https://docs.github.com/en/free-pro-team@latest/rest/overview/resources-in-the-rest-api#secondary-rate-limits',
    //    message: 'You have exceeded a secondary rate limit. Please wait a few minutes before you try again.'
    //  }
    //
    // Let's look for that an manually self-recurse, under certain conditions
    const lookFor = 'You have exceeded a secondary rate limit.'
    if (
      err.status &&
      err.status === 403 &&
      err.response?.data?.message.includes(lookFor) &&
      maxAttempts > 0
    ) {
      console.warn(
        `Got secondary rate limit blocked. Sleeping for ${
          sleepTime / 1000
        } seconds. (attempts left: ${maxAttempts})`,
      )
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(secondaryRateLimitRetry(callable, args, maxAttempts - 1, sleepTime * 2))
        }, sleepTime)
      })
    }

    throw err
  }
}
