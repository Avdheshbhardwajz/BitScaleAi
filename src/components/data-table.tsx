'use client'

import { useState, useMemo } from "react"
import { TableRow } from "../types/table"
import { TableRowComponent } from "./table-row"
import { TableToolbar } from "./table-toolbar"
import { Button } from "@/components/ui/button"
import { Plus } from 'lucide-react'

interface DataTableProps {
  initialRows: TableRow[]
}

export function DataTable({ initialRows }: DataTableProps) {
  const [rows, setRows] = useState<TableRow[]>(initialRows)
  const [view, setView] = useState({ rowCount: initialRows.length, columnCount: 3 })
  const [filterValue, setFilterValue] = useState("all")
  const [sortValue, setSortValue] = useState("none")
  const [searchValue, setSearchValue] = useState("")

  const filteredAndSortedRows = useMemo(() => {
    let result = [...rows]

    // Apply filter
    if (filterValue !== "all") {
      result = result.filter(row => row.action.status === filterValue)
    }

    // Apply search
    if (searchValue) {
      const searchLower = searchValue.toLowerCase()
      result = result.filter(row => 
        row.timestamp.toLowerCase().includes(searchLower) ||
        row.action.message.toLowerCase().includes(searchLower) ||
        row.enrichment.company.toLowerCase().includes(searchLower)
      )
    }

    // Apply sort
    if (sortValue !== "none") {
      result.sort((a, b) => {
        const compareValue = a.timestamp.localeCompare(b.timestamp)
        return sortValue === "asc" ? compareValue : -compareValue
      })
    }

    return result
  }, [rows, filterValue, sortValue, searchValue])

  const addRow = () => {
    const newRow: TableRow = {
      id: rows.length + 1,
      timestamp: new Date().toLocaleString(),
      action: {
        status: 'loading',
        message: 'Loading data, Please wait'
      },
      enrichment: {
        company: 'New Company',
        description: 'Evaluation pending',
        icon: '/placeholder.svg'
      }
    }
    setRows([...rows, newRow])
    setView(prev => ({ ...prev, rowCount: prev.rowCount + 1 }))
  }

  return (
    <div className="flex-1 flex flex-col">
      <TableToolbar 
        view={view}
        onFilterChange={setFilterValue}
        onSortChange={setSortValue}
        onSearch={setSearchValue}
      />
      <div className="flex-1 overflow-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-gray-50 border-y">
          <div className="text-sm font-medium">Input Column</div>
          <div className="text-sm font-medium">Action column</div>
          <div className="text-sm font-medium">Enrich Company</div>
        </div>
        <div className="divide-y">
          {filteredAndSortedRows.map((row) => (
            <TableRowComponent key={row.id} row={row} />
          ))}
        </div>
      </div>
      <div className="p-4 border-t">
        <Button
          variant="ghost"
          className="w-full justify-start"
          onClick={addRow}
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Row
        </Button>
      </div>
    </div>
  )
}
