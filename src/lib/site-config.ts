// Central place for all the business-specific info used across the site.
// TODO: Replace every placeholder value below with the real Marbree Motors details.
export const siteConfig = {
  name: "Marbree Motors (IOM) Ltd",
  shortName: "Marbree Motors",
  tagline: "Trusted Servicing. Honest Advice.",
  description:
    "Marbree Motors is a professional independent garage based in Braddan, Isle of Man, specialising in vehicle servicing, repairs and diagnostics for a wide range of makes and models. The garage offers a comprehensive range of services, including routine servicing, clutch replacements, timing belts, brakes, suspension repairs, air conditioning servicing and advanced vehicle diagnostics. With modern equipment and dealer-level diagnostic capabilities, Marbree Motors provides reliable, high-quality workmanship at competitive prices. The business prides itself on exceptional customer service, honest advice and transparency, ensuring all work is discussed and approved by customers before being carried out.",
  contactNote:
    "If you'd like to get in touch with us, please click the Facebook button below, as this is the platform we're most active on and where you're most likely to receive a quick response. For any urgent enquiries, please give us a call. Alternatively, for general enquiries or anything else, feel free to email us and we'll get back to you as soon as possible.",
  address: "Unit 20, Snugborough Trading Estate, Braddan, IM4 4LH, Isle of Man",
  // Google blocks its regular maps.google.com pages from being loaded inside an <iframe>
  // (X-Frame-Options: SAMEORIGIN), so the embed needs the `output=embed` variant instead.
  // This uses the same "Marbree Motors" pin/coordinates that the mapLinkUrl short link resolves to.
  mapEmbedUrl:
    "https://www.google.com/maps?q=Marbree+Motors,+Braddan,+Isle+of+Man&ll=54.1675129,-4.5166919&z=16&output=embed",
  // This is the "view full map" link shown under the embed.
  mapLinkUrl: "https://maps.app.goo.gl/eBoCtFJRSwaau3eF9",
  // Opens Google Maps directly on the Marbree Motors place page (used by the "Get Directions" button).
  directionsUrl:
    "https://www.google.com/maps/place/Marbree+Motors/@54.1675846,-4.5170675,115m/data=!3m1!1e3!4m6!3m5!1s0x4863856acaebd765:0x8fad6ac92f0745e6!8m2!3d54.1675129!4d-4.5166919!16s%2Fg%2F11g30trzb2?entry=ttu&g_ep=EgoyMDI2MTAxMy4wIKXMDSoASAFQAw%3D%3D",
  facebookUrl: "https://facebook.com/marbreemotors",
  phoneDisplay: "01624 623720", // shown on the button
  phoneNumber: "+441624623720", // international format, used for the tel: link
  email: "info@marbreemotors.co.im",
} as const;
