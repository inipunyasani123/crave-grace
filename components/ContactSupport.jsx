'use client'

import { useState } from 'react'
import Link from 'next/link'

/* Bantuan versi Grace: pertanyaan ditulis seperti sepucuk surat pendek. Kanal resmi
   klien (chat, surel, telepon) belum ada di brief, jadi tidak ada jam layanan,
   alamat surel, atau nomor karangan di sini. */
export default function ContactSupport() {
  const [terkirim, setTerkirim] = useState(false)

  return (
    <section id="kontak" className="relative overflow-hidden bg-silk-2 py-16 md:py-28">
      <div aria-hidden="true" className="laid-silk absolute inset-0" />

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20">
          <div>
            <p className="micro mb-5 text-gilt-ink">Bantuan</p>
            <h2 className="text-[2rem] leading-[1.14] md:text-[2.7rem]">
              Bertanya dulu <em className="italic text-rose">selalu boleh</em>
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-plum-soft">
              Termasuk pertanyaan yang terasa terlalu sederhana untuk ditanyakan. Tulis seperti surat
              pendek — dijawab dengan tenang, tanpa sindiran, dan tanpa tawaran barang.
            </p>
            <Link
              href="/#ritual"
              className="mt-8 inline-flex items-center justify-center border border-plum/30 px-7 py-3.5 text-sm font-semibold text-plum transition-colors duration-300 hover:border-plum"
            >
              Baca Ritual Berdua
            </Link>
          </div>

          <div className="relative bg-silk p-6 shadow-[0_24px_50px_-30px_rgb(74_35_56/0.45)] sm:p-9">
            <span aria-hidden="true" className="absolute top-0 right-8 h-10 w-7 bg-rose/80 [clip-path:polygon(0_0,100%_0,100%_100%,50%_78%,0_100%)]" />
            {terkirim ? (
              <div role="status" className="py-4">
                <p className="micro text-gilt-ink">Surat tersimpan</p>
                <p className="mt-3 font-[family-name:var(--font-display)] text-2xl text-plum italic">Terima kasih sudah menulis.</p>
                <p className="mt-3 text-sm leading-relaxed text-plum-soft">
                  Ini purwarupa desain untuk kontes, jadi suratnya tidak terkirim ke mana pun.
                </p>
                <button type="button" onClick={() => setTerkirim(false)} className="micro mt-6 border-b border-plum/30 pb-1 text-plum hover:border-plum">
                  Tulis surat lain
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  setTerkirim(true)
                }}
              >
                <p className="font-[family-name:var(--font-display)] text-lg text-plum italic">Untuk Positive Crave,</p>
                <label htmlFor="surat-isi" className="sr-only">
                  Isi pertanyaan
                </label>
                <textarea
                  id="surat-isi"
                  name="isi"
                  required
                  rows={5}
                  placeholder="Tulis pertanyaan Anda di sini…"
                  className="mt-4 w-full resize-y border-0 border-b border-plum/20 bg-[repeating-linear-gradient(to_bottom,transparent_0,transparent_1.95rem,rgb(74_35_56/0.12)_1.95rem,rgb(74_35_56/0.12)_2rem)] px-0 py-1 text-[0.95rem] leading-8 text-plum placeholder:text-plum-soft focus:border-rose focus:ring-0 focus:outline-none"
                />
                <div className="mt-6 flex items-baseline gap-3">
                  <label htmlFor="surat-dari" className="font-[family-name:var(--font-display)] shrink-0 text-plum italic">
                    Balas ke
                  </label>
                  <input
                    id="surat-dari"
                    name="surel"
                    type="email"
                    autoComplete="email"
                    placeholder="surel (boleh dikosongkan)"
                    className="w-full border-0 border-b border-plum/20 bg-transparent px-0 py-1 text-sm text-plum placeholder:text-plum-soft focus:border-rose focus:outline-none"
                  />
                </div>
                <button type="submit" className="mt-8 w-full bg-plum py-4 text-sm font-semibold text-silk transition-colors duration-300 hover:bg-rose">
                  Kirim suratnya
                </button>
                <p className="mt-4 text-xs leading-relaxed text-plum-soft">Purwarupa desain — formulir ini tidak mengirim data.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
