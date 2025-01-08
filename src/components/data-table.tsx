'use client'

import { useState } from "react"
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
  const view = { rowCount: 1, columnCount: 3 }
  const [filter, setFilter] = useState(false)
  const [sort, setSort] = useState(false)

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
  }

  return (
    <div className="flex-1 flex flex-col">
      <TableToolbar 
        view={view}
        onFilterToggle={() => setFilter(!filter)}
        onSortToggle={() => setSort(!sort)}
      />
      <div className="flex-1">
        <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 border-y">
          <div className="text-sm font-medium">Input Column</div>
          <div className="text-sm font-medium">Action column</div>
          <div className="text-sm font-medium">Enrich Company</div>
        </div>
        <div className="divide-y">
          {rows.map((row) => (
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

