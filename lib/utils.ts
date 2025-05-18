import { format } from 'date-fns'

export function formatDate(dateString: string): string {
  return format(new Date(dateString), 'MMMM d, yyyy')
}

// Optional additional utilities
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export function truncate(str: string, length: number): string {
  return str.length > length ? `${str.substring(0, length)}...` : str
}