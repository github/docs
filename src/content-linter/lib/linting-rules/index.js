import searchReplace from 'markdownlint-rule-search-replace'
import markdownlintGitHub from '@github/markdownlint-github'

import { codeFenceLineLength } from './code-fence-line-length'
import { imageAltTextEndPunctuation } from './image-alt-text-end-punctuation'
import { imageFileKebabCase } from './image-file-kebab-case'
import { incorrectAltTextLength } from './image-alt-text-length'
import { internalLinksNoLang } from './internal-links-no-lang'
import { internalLinksSlash } from './internal-links-slash'
import { imageAltTextExcludeStartWords } from './image-alt-text-exclude-start-words'
import { listFirstWordCapitalization } from './list-first-word-capitalization'
import { linkPunctuation } from './link-punctuation'
import { earlyAccessReferences, frontmatterEarlyAccessReferences } from './early-access-references'
import { frontmatterHiddenDocs } from './frontmatter-hidden-docs'
import { frontmatterVideoTranscripts } from './frontmatter-video-transcripts'
import { yamlScheduledJobs } from './yaml-scheduled-jobs'
import { internalLinksOldVersion } from './internal-links-old-version'
import { hardcodedDataVariable } from './hardcoded-data-variable'
import { githubOwnedActionReferences } from './github-owned-action-references'
import { liquidQuotedConditionalArg } from './liquid-quoted-conditional-arg'
import { liquidDataReferencesDefined, liquidDataTagFormat } from './liquid-data-tags'
import { frontmatterSchema } from './frontmatter-schema'
import { codeAnnotations } from './code-annotations'
import { codeAnnotationCommentSpacing } from './code-annotation-comment-spacing'
import { frontmatterLiquidSyntax, liquidSyntax } from './liquid-syntax'
import { liquidIfTags, liquidIfVersionTags } from './liquid-versioning'
import { raiReusableUsage } from './rai-reusable-usage'
import { imageNoGif } from './image-no-gif'
import { expiredContent, expiringSoon } from './expired-content'
import { tableLiquidVersioning } from './table-liquid-versioning'
import { tableColumnIntegrity } from './table-column-integrity'
import { thirdPartyActionPinning } from './third-party-action-pinning'
import { liquidTagWhitespace } from './liquid-tag-whitespace'
import { linkQuotation } from './link-quotation'
import { octiconAriaLabels } from './octicon-aria-labels'
import { liquidIfversionVersions } from './liquid-ifversion-versions'
import { britishEnglishQuotes } from './british-english-quotes'
import { multipleEmphasisPatterns } from './multiple-emphasis-patterns'
import { noteWarningFormatting } from './note-warning-formatting'

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
    codeAnnotationCommentSpacing,
    frontmatterLiquidSyntax,
    liquidSyntax,
    liquidIfTags,
    liquidIfVersionTags,
    liquidIfversionVersions,
    raiReusableUsage,
    imageNoGif,
    expiredContent,
    expiringSoon,
    tableLiquidVersioning,
    tableColumnIntegrity,
    thirdPartyActionPinning,
    liquidTagWhitespace,
    linkQuotation,
    octiconAriaLabels,
    britishEnglishQuotes,
    multipleEmphasisPatterns,
    noteWarningFormatting,
  ],
}
