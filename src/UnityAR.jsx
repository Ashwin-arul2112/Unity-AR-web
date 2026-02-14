import { Unity, useUnityContext } from "react-unity-webgl";

export default function UnityAR() {

  const { unityProvider } = useUnityContext({
    loaderUrl: "/unity/Build/WebGL_Builds_Build_In.loader.js",
    dataUrl: "/unity/Build/WebGL_Builds_Build_In.data",
    frameworkUrl: "/unity/Build/WebGL_Builds_Build_In.framework.js",
    codeUrl: "/unity/Build/WebGL_Builds_Build_In.wasm",
  });

  return (
    <Unity unityProvider={unityProvider}
      style={{ width: "100%", height: "100%" }}
    />
  );
}