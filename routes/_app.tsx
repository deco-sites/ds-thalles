import { AppProps } from "$fresh/server.ts";
import { context } from "$live/live.ts";
import GoogleTagManager from "partytown/integrations/GTM.tsx";
import GlobalTags from "deco-sites/ds-thalles/components/GlobalTags.tsx";

const trackingId = "";

export default function App(props: AppProps) {
  return (
    <>
      <GlobalTags />

      {!!context.deploymentId && trackingId && (
        <GoogleTagManager trackingId={trackingId} />
      )}
      <props.Component />
    </>
  );
}
