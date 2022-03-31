import React from 'react';

export default function CodesandboxEmbed({ id, width = "100%", height = "500px" }) {
  return (
    <iframe
      src={`https://codesandbox.io/embed/${id}?codemirror=1`}
      style={{
        width,
        height,
        border: 0,
        borderRadius: "4px",
        overflow: "hidden",
      }}
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    ></iframe>
  );
}
