import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Ecommerce de ejemplo</h1>
      <Link href="/products">
        Ver productos
      </Link>
    </div>
  );
}
