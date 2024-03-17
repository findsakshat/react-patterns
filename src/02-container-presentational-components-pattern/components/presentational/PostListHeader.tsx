import { ArrowUpDown } from 'lucide-react';
import { useState } from 'react';

type PostListHeaderProps = {
  count: number
  onSearch: (value: string) => void
}

export default function PostListHeader(props: PostListHeaderProps) {
  const { count, onSearch } = props;
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="flex flex-col gap-4 lg:flex-row justify-between items-center">
      <h3 className="text-[24px] font-semibold">Posts ({count || 0})</h3>
      <div className='flex items-center gap-4'>
        <input 
          className='px-3 py-2 border rounded-md text-sm w-[200px]' 
          placeholder='Search posts'
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
            onSearch(e.target.value);
          }}
        />
        <button className="px-3 py-2 border rounded-md flex gap-2 items-center text-sm bg-white">
          <span>Sort</span>
          <ArrowUpDown size={16} />
        </button>
      </div>
    </div>
  )
}