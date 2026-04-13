import Button from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-kairon-black px-6 text-center">
      <h1 className="font-[family-name:var(--font-display)] text-6xl font-bold text-kairon-red">
        404
      </h1>
      <p className="mt-4 text-xl text-kairon-white">Page not found</p>
      <p className="mt-2 text-kairon-gray">
        The page you&rsquo;re looking for doesn&rsquo;t exist or has been moved.
      </p>
      <div className="mt-8 flex gap-4">
        <Button href="/">Go Home</Button>
        <Button href="/contact" variant="secondary">
          Contact Us
        </Button>
      </div>
    </div>
  );
}
