import { TableHeader } from "@/components/table-header"
import { Sidebar } from "@/components/sidebar"
import { DataTable } from "@/components/data-table"
import { initialRows } from "@/constants/mock-data"

export default function Page() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <TableHeader />
        <DataTable initialRows={initialRows} />
      </div>
    </div>
  )
}

