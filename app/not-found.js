import Link from 'next/link'

export const metadata = {
  title: { absolute: 'Halaman tidak ditemukan — Positive Crave' },
  robots: { index: false, follow: true },
}

/* 404 versi Grace: amplop yang dicari tidak ada di laci. */
export default function NotFound() {
  return (
    <section className="laid-silk relative bg-silk pt-32 pb-24 text-center md:pt-40 md:pb-32">
      <div className="mx-auto max-w-2xl px-6">
        <p className="micro text-gilt-ink">404</p>
        <h1 className="mt-5 text-[2.4rem] leading-[1.1] md:text-[3.2rem]">
          Amplop ini <em className="italic text-rose">tidak ada di laci</em>
        </h1>
        <p className="mx-auto mt-5 max-w-md leading-relaxed text-plum-soft">
          Alamatnya mungkin salah ketik, atau halamannya sudah dipindah. Mulai lagi dari susunan acara.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Link href="/koleksi" className="inline-flex items-center justify-center bg-plum px-7 py-4 text-sm font-semibold text-silk transition-colors hover:bg-rose">
            Lihat Susunan Acara
          </Link>
          <Link href="/" className="inline-flex items-center justify-center border border-plum/30 px-7 py-4 text-sm font-semibold text-plum transition-colors hover:border-plum">
            Ke beranda
          </Link>
        </div>
      </div>
    </section>
  )
}
