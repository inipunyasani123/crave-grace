import { Suspense } from 'react'
import CheckoutPage from '@/components/CheckoutPage'
import { meta } from '@/lib/seo'

export const metadata = meta({
  title: 'Pemesanan',
  description:
    'Selesaikan pemesanan Anda — untuk berdua, atau dibungkus sebagai hadiah dengan kartu tulisan tangan.',
  path: '/checkout',
  index: false,
})

// useSearchParams (?produk=…) butuh batas Suspense agar halaman tetap bisa diprerender.
export default function CheckoutRoute() {
  return (
    <Suspense
      fallback={
        // Kerangka sebelum parameter ?produk= terbaca: judulnya sudah ada di HTML awal.
        <section className="min-h-screen bg-silk pt-32 md:pt-40">
          <div className="mx-auto max-w-6xl px-6">
            <h1 className="text-[2.3rem] leading-[1.08] md:text-[3rem]">Satu langkah lagi</h1>
          </div>
        </section>
      }
    >
      <CheckoutPage />
    </Suspense>
  )
}
