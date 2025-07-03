import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container-custom flex flex-col items-center justify-center min-h-[60vh] py-16 text-center">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-xl mb-8">Sorry, the page you are looking for does not exist.</p>
      <Link href="/" className="btn btn-primary">
        Return to Homepage
      </Link>
    </div>
  );
} 