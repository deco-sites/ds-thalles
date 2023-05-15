import { AppProps } from "$fresh/server.ts";
import { context } from "$live/live.ts";
import GoogleTagManager from "partytown/integrations/GTM.tsx";

const trackingId = "";

export default function App(props: AppProps) {
  return (
    <>
      {!!context.deploymentId && trackingId && (
        <GoogleTagManager trackingId={trackingId} />
      )}
      <props.Component />
    </>
  );
}
