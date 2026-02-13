import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

export default function UnityAR() {

  const { unityProvider } = useUnityContext({
    loaderUrl: "/unity/Build/WebGL_Builds.loader.js",
    dataUrl: "/unity/Build/WebGL_Builds.data",
    frameworkUrl: "/unity/Build/WebGL_Builds.framework.js",
    codeUrl: "/unity/Build/WebGL_Builds.wasm",
  });

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Unity unityProvider={unityProvider}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}