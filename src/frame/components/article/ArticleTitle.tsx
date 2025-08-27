type Props = {
  children: React.ReactNode
}
export const ArticleTitle = ({ children }: Props) => {
  return (
    <div className="d-flex flex-items-baseline flex-justify-between" data-container="title">
      <h1 id="title-h1" className="border-bottom-0">
        {children}
      </h1>
    </div>
  )
}
