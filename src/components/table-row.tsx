import { TableRow } from "../types/table"
import { Play, AlertTriangle, LinkIcon, Loader2 } from 'lucide-react'
import Image from "next/image"

interface TableRowProps {
  row: TableRow
}

export function TableRowComponent({ row }: TableRowProps) {
  const getActionIcon = (status: string) => {
    switch (status) {
      case 'success':
        return <Play className="h-4 w-4 text-green-500" />
      case 'error':
        return <AlertTriangle className="h-4 w-4 text-red-500" />
      case 'link':
        return <LinkIcon className="h-4 w-4 text-blue-500" />
      case 'loading':
        return <Loader2 className="h-4 w-4 animate-spin text-gray-500" />
      default:
        return null
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 border-b hover:bg-gray-50">
      <div className="flex items-center gap-2">
        <Play className="h-4 w-4 text-gray-400" />
        <span className="text-sm">{row.timestamp}</span>
      </div>
      <div className="flex items-center gap-2">
        {getActionIcon(row.action.status)}
        <span className="text-sm">
          {row.action.url ? (
            <a href={row.action.url} className="text-blue-500 hover:underline">
              {row.action.message}
            </a>
          ) : (
            row.action.message
          )}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <div className="h-6 w-6 rounded-full overflow-hidden flex-shrink-0">
          <Image
            src={row.enrichment.icon}
            alt={row.enrichment.company}
            width={24}
            height={24}
          />
        </div>
        <div className="flex flex-col min-w-0">
          <span className="text-sm font-medium truncate">{row.enrichment.company}</span>
          <span className="text-xs text-gray-500 truncate">{row.enrichment.description}</span>
        </div>
      </div>
    </div>
  )
}

