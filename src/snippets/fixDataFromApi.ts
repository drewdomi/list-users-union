export function fixId(id: string){
  return id.slice(0, 8)
}

export function fixDate(date: string){
  const newDate = date.slice(0, 10).split('-').reverse().join('/')
  return newDate
}