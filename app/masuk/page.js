import AkunForm from '@/components/AkunForm'
import { meta } from '@/lib/seo'

export const metadata = meta({
  title: 'Masuk',
  description:
    'Masuk ke akun Positive Crave untuk melihat hadiah dalam perjalanan dan tanggal yang Anda simpan.',
  path: '/masuk',
  index: false,
})

export default function Page() {
  return <AkunForm mode="masuk" />
}
