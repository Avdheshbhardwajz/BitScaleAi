export interface TableRow {
    id: number
    timestamp: string
    action: {
      status: 'loading' | 'error' | 'success' | 'link'
      message: string
      url?: string
    }
    enrichment: {
      company: string
      description: string
      icon: string
    }
  }
  
  export interface TableState {
    rows: TableRow[]
    view: {
      rowCount: number
      columnCount: number
    }
    filter: boolean
    sort: boolean
  }
  
  