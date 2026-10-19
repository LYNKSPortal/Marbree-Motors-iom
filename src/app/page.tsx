import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { FacebookIcon, MailIcon, MapPinIcon, PhoneIcon } from "@/components/icons";

export default function Home() {
  const phoneHref = `tel:${siteConfig.phoneNumber}`;
  const mailHref = `mailto:${siteConfig.email}`;

  return (
    <div className="flex flex-1 flex-col items-center bg-[#373737]">
      <main className="flex w-full max-w-[1000px] flex-1 flex-col items-center gap-12 px-6 py-20 sm:py-28">
        {/* Logo */}
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex w-full max-w-sm items-center justify-center rounded-2xl bg-zinc-900 px-8 py-6 shadow-sm">
            <Image
              src="/mm-logo-white.png"
              alt={siteConfig.name}
              width={1000}
              height={300}
              priority
              className="h-auto w-full"
            />
          </div>
        </div>

        {/* Description */}
        <div className="flex w-full flex-col gap-4 text-center">
          <p className="text-base leading-7 text-white">{siteConfig.description}</p>
          <p className="text-base leading-7 text-white">{siteConfig.contactNote}</p>
        </div>

        {/* Contact buttons */}
        <div className="flex w-full max-w-md flex-col gap-3">
          <a
            href={siteConfig.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full skew-x-[-10deg] items-center justify-center bg-[#1877F2] px-6 py-3 transition-opacity hover:opacity-90"
          >
            <span className="flex skew-x-[10deg] items-center gap-2 text-sm font-semibold text-white">
              <FacebookIcon className="h-5 w-5" />
              Facebook: Marbree Motors
            </span>
          </a>
          <a
            href={phoneHref}
            className="flex w-full skew-x-[-10deg] items-center justify-center bg-[#FBCF70] px-6 py-3 transition-opacity hover:opacity-90"
          >
            <span className="flex skew-x-[10deg] items-center gap-2 text-sm font-semibold text-zinc-900">
              <PhoneIcon className="h-5 w-5" />
              Phone: {siteConfig.phoneDisplay}
            </span>
          </a>
          <a
            href={mailHref}
            className="flex w-full skew-x-[-10deg] items-center justify-center bg-[#C63E68] px-6 py-3 transition-opacity hover:opacity-90"
          >
            <span className="flex skew-x-[10deg] items-center gap-2 text-sm font-semibold text-white">
              <MailIcon className="h-5 w-5" />
              Email &middot; {siteConfig.email}
            </span>
          </a>
        </div>

        {/* Map */}
        <div className="w-full">
          <div className="mb-3 flex items-center justify-center gap-2 text-sm text-zinc-300">
            <MapPinIcon className="h-4 w-4 shrink-0" />
            <a
              href={siteConfig.mapLinkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {siteConfig.address}
            </a>
          </div>
          <div className="overflow-hidden rounded-2xl border border-zinc-600 shadow-sm">
            <iframe
              title="Marbree Motors location"
              src={siteConfig.mapEmbedUrl}
              width="100%"
              height="320"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="mt-6 flex w-full flex-col items-center gap-4 text-center">
            <p className="text-base leading-7 text-white">
              If you would like directions from exactly where you are positioned right now to
              Marbree Motors, please click on the button below.
            </p>
            <a
              href={siteConfig.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full max-w-md skew-x-[-10deg] items-center justify-center bg-zinc-900 px-6 py-3 transition-opacity hover:opacity-90"
            >
              <span className="flex skew-x-[10deg] items-center gap-2 text-sm font-semibold text-white">
                <MapPinIcon className="h-5 w-5" />
                Open on my Phone
              </span>
            </a>
          </div>
        </div>
      </main>

      <footer className="pb-8 text-center text-xs text-zinc-400">
        &copy; {siteConfig.name}. All rights reserved.
      </footer>
    </div>
  );
}
