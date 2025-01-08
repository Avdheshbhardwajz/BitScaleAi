import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Filter, SortAsc, Sparkles } from 'lucide-react'

interface TableToolbarProps {
  onFilterToggle: () => void
  onSortToggle: () => void
  view: {
    rowCount: number
    columnCount: number
  }
}

export function TableToolbar({ onFilterToggle, onSortToggle, view }: TableToolbarProps) {
  return (
    <div className="flex items-center justify-between p-4 gap-4">
      <div className="flex items-center gap-4 flex-1">
        <div className="relative w-full max-w-sm">
          <Input 
            type="search" 
            placeholder="Search" 
            className="pl-8"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">{view.rowCount}/1 Row</span>
          <span className="text-sm text-gray-500">{view.columnCount}/3 Column</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button 
          variant="outline" 
          size="sm"
          onClick={onFilterToggle}
        >
          <Filter className="h-4 w-4 mr-2" />
          Filter
        </Button>
        <Button 
          variant="outline" 
          size="sm"
          onClick={onSortToggle}
        >
          <SortAsc className="h-4 w-4 mr-2" />
          Sort
        </Button>
        <Button variant="default" size="sm">
          <Sparkles className="h-4 w-4 mr-2" />
          Enrich
        </Button>
      </div>
    </div>
  )
}

