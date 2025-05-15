import Link from "next/link"

export default function NotFound() {
  return (
    <div className="container-custom py-16 text-center">
      <h1 className="text-4xl font-bold mb-4">404 - Página não encontrada</h1>
      <p className="mb-8">A página que você está procurando não existe ou foi movida.</p>
      <Link href="/" className="btn-primary">
        Voltar para a página inicial
      </Link>
    </div>
  )
}
