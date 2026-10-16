import AkunForm from '@/components/AkunForm'
import { meta } from '@/lib/seo'

export const metadata = meta({
  title: 'Daftar',
  description:
    'Buat akun Positive Crave dan simpan satu tanggal penting — kami ingatkan dua minggu sebelumnya.',
  path: '/register',
  index: false,
})

export default function Page() {
  return <AkunForm mode="daftar" />
}
