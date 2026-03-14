export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-foreground/10 py-6 text-center text-sm text-foreground/70">
      <p>© {year} Lydia Smith Design. All rights reserved.</p>
      <p className="mt-1">
        All artwork and images on this site are protected by copyright.
      </p>
    </footer>
  );
}
