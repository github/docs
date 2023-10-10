import searchReplace from 'markdownlint-rule-search-replace'
import markdownlintGitHub from '@github/markdownlint-github'

import { codeFenceLineLength } from './code-fence-line-length.js'
import { imageAltTextEndPunctuation } from './image-alt-text-end-punctuation.js'
import { imageFileKebab } from './image-file-kebab.js'
import { incorrectAltTextLength } from './image-alt-text-length.js'
import { internalLinksLang } from './internal-links-lang.js'
import { internalLinksSlash } from './internal-links-slash.js'
import { imageAltTextExcludeStartWords } from './image-alt-text-exclude-start-words.js'
import { listFirstWordCapitalization } from './list-first-word-capitalization.js'
import { linkPunctuation } from './link-punctuation.js'
import {
  earlyAccessReferences,
  frontmatterEarlyAccessReferences,
} from './early-access-references.js'
import { frontmatterHiddenDocs } from './frontmatter-hidden-docs.js'
import { frontmatterVideoTranscripts } from './frontmatter-video-transcripts.js'
import { yamlScheduledJobs } from './yaml-scheduled-jobs.js'
import { internalLinksOldVersion } from './internal-links-old-version.js'
import { hardcodedDataVariable } from './hardcoded-data-variable.js'
import { githubOwnedActionReferences } from './github-owned-action-references.js'
import { liquidQuotedConditionalArg } from './liquid-quoted-conditional-arg.js'
import { liquidDataReferencesDefined, liquidDataTagFormat } from './liquid-data-tags.js'
import { frontmatterFormat } from './frontmatter-format.js'
import { annotateFrontmatter } from './annotate-frontmatter.js'
import { liquidIfTags, liquidIfVersionTags } from './liquid-versioning.js'

const noDefaultAltText = markdownlintGitHub.find((elem) =>
  elem.names.includes('no-default-alt-text'),
)
const noGenericLinkText = markdownlintGitHub.find((elem) =>
  elem.names.includes('no-generic-link-text'),
)

export const gitHubDocsMarkdownlint = {
  rules: [
    searchReplace, // Open-source plugin
    noDefaultAltText, // markdownlint-github rule
    noGenericLinkText, // markdownlint-github rule
    codeFenceLineLength,
    imageAltTextEndPunctuation,
    imageFileKebab,
    incorrectAltTextLength,
    internalLinksLang,
    internalLinksSlash,
    imageAltTextExcludeStartWords,
    listFirstWordCapitalization,
    linkPunctuation,
    earlyAccessReferences,
    yamlScheduledJobs,
    internalLinksOldVersion,
    hardcodedDataVariable,
    githubOwnedActionReferences,
    liquidQuotedConditionalArg,
    liquidDataReferencesDefined,
    liquidDataTagFormat,
    frontmatterHiddenDocs,
    frontmatterEarlyAccessReferences,
    frontmatterVideoTranscripts,
    frontmatterFormat,
    annotateFrontmatter,
    liquidIfTags,
    liquidIfVersionTags,
  ],
}
