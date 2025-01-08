import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Sparkles } from 'lucide-react'
import { FilterPopover } from "./filters/filter-popover"
import { SortPopover } from "./filters/sort-popover"

interface TableToolbarProps {
  onFilterChange: (value: string) => void
  onSortChange: (value: string) => void
  onSearch: (value: string) => void
  view: {
    rowCount: number
    columnCount: number
  }
}

export function TableToolbar({ onFilterChange, onSortChange, onSearch, view }: TableToolbarProps) {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 gap-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-auto">
        <div className="relative w-full sm:max-w-sm">
          <Input 
            type="search" 
            placeholder="Search" 
            className="pl-8"
            onChange={(e) => onSearch(e.target.value)}
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
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span>{view.rowCount} Row{view.rowCount !== 1 ? 's' : ''}</span>
          <span>{view.columnCount} Column{view.columnCount !== 1 ? 's' : ''}</span>
        </div>
      </div>
      <div className="flex items-center gap-2 w-full sm:w-auto">
        <FilterPopover column="Status" onFilterChange={onFilterChange} />
        <SortPopover onSortChange={onSortChange} />
        <Button variant="default" size="sm" className="w-full sm:w-auto">
          <Sparkles className="h-4 w-4 mr-2" />
          Enrich
        </Button>
      </div>
    </div>
  )
}
