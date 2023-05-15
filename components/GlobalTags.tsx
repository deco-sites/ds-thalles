import { asset, Head } from "$fresh/runtime.ts";

function GlobalTags() {
  return (
    <Head>
      {/* Tailwind v3 CSS file */}
      <link href={asset("/tailwind.css")} rel="stylesheet" />
    </Head>
  );
}

export default GlobalTags;
