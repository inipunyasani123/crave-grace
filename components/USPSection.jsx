import { Package, ShieldCheck, Sparkles, MessageCircle } from 'lucide-react'

const jaminan = [
  {
    icon: Sparkles,
    title: 'Suasana lebih dulu',
    desc: 'Panduan kami dimulai dari menyiapkan ruang dan melambatkan tempo — bukan dari daftar barang.',
  },
  {
    icon: Package,
    title: 'Dikirim seperti kado',
    desc: 'Kotak polos tanpa cetakan. Nama merek tidak muncul di resi maupun mutasi rekening.',
  },
  {
    icon: ShieldCheck,
    title: 'Material medical-grade',
    desc: 'Silikon tidak berpori dan bebas BPA — tidak menyerap, dan bisa dibersihkan menyeluruh.',
  },
  {
    icon: MessageCircle,
    title: 'Dijawab dengan tenang',
    desc: 'Pertanyaan sedasar apa pun dijawab orang, tanpa sindiran dan tanpa dorongan membeli.',
  },
]

export default function USPSection() {
  return (
    <section id="jaminan" className="relative overflow-hidden bg-silk py-16 md:py-28">
      <div aria-hidden="true" className="laid-silk absolute inset-0" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-14">
          <p className="micro mb-5 text-gilt-ink">Jaminan</p>
          <h2 className="text-[2rem] leading-[1.14] md:text-[2.7rem]">
            Empat hal yang kami jaga, <em className="italic text-rose">dari awal sampai kotaknya sampai</em>
          </h2>
        </div>

        <dl className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
          {jaminan.map((j) => (
            <div key={j.title} className="envelope bg-silk-2 p-4 sm:p-7">
              <j.icon className="mb-4 h-5 w-5 text-gilt-ink sm:mb-6 sm:h-6 sm:w-6" strokeWidth={1.5} aria-hidden="true" />
              <dt className="font-[family-name:var(--font-display)] text-base text-plum sm:text-lg">{j.title}</dt>
              <dd className="mt-2 text-[0.8125rem] leading-relaxed text-plum-soft sm:mt-3 sm:text-sm">{j.desc}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
