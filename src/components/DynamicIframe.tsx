import React, { useEffect } from "react";

type Props = {
  url: string;
};

function DynamicIframe({ url }: Props) {
  const [iframeSrcdoc, setIframeSrcdoc] = React.useState("");

  useEffect(() => {
    //fetch with custom http headers
    console.log("fetching", url);
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
          console.log(html);
          setIframeSrcdoc(html);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <iframe
      srcDoc={iframeSrcdoc}
      className="w-full h-[500px]"
      allowtransparency={"true"}
      style={{
        background: "transparent",
        border: "solid 1px white",
        borderRadius: 10,
      }}
      // allowfullscreen
    />
  );
}

export default DynamicIframe;
