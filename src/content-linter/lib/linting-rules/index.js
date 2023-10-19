import searchReplace from 'markdownlint-rule-search-replace'
import markdownlintGitHub from '@github/markdownlint-github'

import { codeFenceLineLength } from './code-fence-line-length.js'
import { imageAltTextEndPunctuation } from './image-alt-text-end-punctuation.js'
import { imageFileKebabCase } from './image-file-kebab-case.js'
import { incorrectAltTextLength } from './image-alt-text-length.js'
import { internalLinksNoLang } from './internal-links-no-lang.js'
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
import { frontmatterSchema } from './frontmatter-schema.js'
import { codeAnnotations } from './code-annotations.js'
import { frontmatterLiquidSyntax, liquidSyntax } from './liquid-syntax.js'
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
    imageFileKebabCase,
    incorrectAltTextLength,
    internalLinksNoLang,
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
    frontmatterSchema,
    codeAnnotations,
    frontmatterLiquidSyntax,
    liquidSyntax,
    liquidIfTags,
    liquidIfVersionTags,
  ],
}
