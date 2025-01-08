import { TableRow } from '../types/table'

export const initialRows: TableRow[] = [
  {
    id: 1,
    timestamp: 'Oct 12, 2024 at 14:08 PM',
    action: {
      status: 'success',
      message: 'Bitscale Evaluation - Account relev...'
    },
    enrichment: {
      company: 'Bitscale Evaluation',
      description: 'Account relevancy check',
      icon: '/placeholder.svg'
    }
  },
  {
    id: 2,
    timestamp: 'Oct 12, 2024 at 14:08 PM',
    action: {
      status: 'error',
      message: 'cell data size exceeds limit'
    },
    enrichment: {
      company: 'BMW Evaluation',
      description: 'Relevancy check',
      icon: '/placeholder.svg'
    }
  },
  {
    id: 3,
    timestamp: 'Oct 12, 2024 at 14:08 PM',
    action: {
      status: 'link',
      message: 'https://www.linkedin.com/bits...',
      url: 'https://www.linkedin.com/bitscale'
    },
    enrichment: {
      company: 'Google Evaluation',
      description: 'Lilevancy check',
      icon: '/placeholder.svg'
    }
  },
  {
    id: 4,
    timestamp: 'Oct 12, 2024 at 14:08 PM',
    action: {
      status: 'loading',
      message: 'Loading data, Please wait'
    },
    enrichment: {
      company: 'Apple Evaluation',
      description: 'Olvancy check',
      icon: '/placeholder.svg'
    }
  },
  {
    id: 5,
    timestamp: 'Oct 12, 2024 at 14:08 PM',
    action: {
      status: 'loading',
      message: 'Loading data, Please wait'
    },
    enrichment: {
      company: 'Figma Evaluation',
      description: 'Evancy check',
      icon: '/placeholder.svg'
    }
  }
]

