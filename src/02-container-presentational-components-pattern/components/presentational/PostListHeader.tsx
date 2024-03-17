type PostListHeaderProps = {
  count: number
}

export default function PostListHeader(props: PostListHeaderProps) {
  const { count } = props; 

  return (
    <div className="mb-4">
      <h3 className="text-[28px] font-semibold">Posts ({count || 0})</h3>
    </div>
  )
}