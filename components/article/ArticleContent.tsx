type Props = {
  children: string
}

/*
  NOTE: The markdown-body class is used by the LUNR search scripts. 
  If this class changes, please also change
  updating script/search/parse-page-sections-into-records.js.
*/
export const ArticleContent = ({ children }: Props) => {
  return (
    <div
      id="article-contents"
      className="markdown-body"
      dangerouslySetInnerHTML={{ __html: children }}
    />
  )
}
