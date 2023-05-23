import { ChangeEvent, FormEvent, useState } from "react"

interface SearchBarProps {
    onSearch: (query: string) => void;
}

export const SearchBar = ({onSearch} : SearchBarProps) => {
    const [query, setQuery] = useState(``);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        onSearch(query)
    }

  return (
    <form  onSubmit={handleSubmit}className="flex items-center w-screen max-w-3x1">
        <input 
        type='text' 
        className='text-sm text-black border broder-gray-300 rounded-1 py-2 px-4 w-full focus:outline-none focus:border-blue-500'
        value={query}
        onChange={handleChange}
        />
        <button
            type="submit"
            className='bg-red-600 text-white py-2 px-4 rounded-r hover:bg-blue-500 focus:outline-none'>
                Search
            </button>
    </form>
  )
}
