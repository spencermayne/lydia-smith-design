import Image from "next/image";

export default function Header() {
  return (
    <header className="flex flex-col items-center pt-10 pb-6 bg-background">
      <div className="w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden mb-6">
        <Image
          src="/logo.png"
          alt="Lydia Smith Design"
          width={256}
          height={256}
          className="object-cover w-full h-full"
          preload
        />
      </div>
      <nav className="flex items-center gap-8">
        <a
          href="#portfolio"
          className="text-sm tracking-widest uppercase text-foreground/70 hover:text-primary bg-[linear-gradient(var(--color-primary),var(--color-primary))] bg-size-[0%_1px] hover:bg-size-[100%_1px] bg-no-repeat bg-bottom transition-[color,background-size] duration-300 ease-out">
          Portfolio
        </a>
        <a
          href="mailto:lydiasmithdesign@icloud.com"
          className="text-sm tracking-widest uppercase text-foreground/70 hover:text-primary bg-[linear-gradient(var(--color-primary),var(--color-primary))] bg-size-[0%_1px] hover:bg-size-[100%_1px] bg-no-repeat bg-bottom transition-[color,background-size] duration-300 ease-out">
          Contact
        </a>
      </nav>
    </header>
  );
}
