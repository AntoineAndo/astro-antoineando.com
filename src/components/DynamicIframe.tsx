import React, { useEffect } from "react";

type Props = {
  url: string;
};

function DynamicIframe({ url }: Props) {
  const [iframeSrcdoc, setIframeSrcdoc] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    //fetch with custom http headers
    const cspHeader = [
      "default-src *;",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdn.sanity.io ;",
      "script-src 'self' https://cdn.sanity.io https://cdn.jsdelivr.net 'unsafe-inline' https://cdn.vercel-insights.com;",
      "img-src 'self' https://cdn.sanity.io;",
      "frame-src 'self' https://cdn.sanity.io;",
      "child-src 'self' https://cdn.sanity.io;",
      "connect-src 'self' https://cdn.sanity.io;",
    ];
    fetch(url, {
      headers: {
        "content-security-policy": cspHeader.join(" "),
        // CORS header to allow request from sanity cdn
        // "Access-Control-Allow-Origin": "https://cdn.sanity.io",
      },
    })
      .then((res) => {
        res.text().then((html) => {
          setIframeSrcdoc(html);
        });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="h-[500px] w-full flex items-center justify-center border-solid border-text border-1 rounded-xl">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <iframe
          srcDoc={iframeSrcdoc}
          className="w-full h-full bg-transparent "
          //@ts-ignore
          allowtransparency="true"
        />
      )}
    </div>
  );
}

export default DynamicIframe;
