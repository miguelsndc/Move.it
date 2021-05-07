import router from 'next/router'

export function redirectTo(path: string) {
  router.push(path)
}
