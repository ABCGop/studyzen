export default function Loading() {
  return (
    <div className="container-custom flex flex-col items-center justify-center min-h-[60vh] py-16">
      <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      <p className="mt-4 text-lg">Loading...</p>
    </div>
  );
} 
 