import UnityAR from "./UnityAR";

function App() {

  const startAR = async () => {

    if (!navigator.xr) return alert("WebXR not supported");

    const supported = await navigator.xr.isSessionSupported("immersive-ar");

    if (!supported) return alert("AR not supported");

    await navigator.xr.requestSession("immersive-ar", {
      requiredFeatures: ["local-floor", "hit-test"]
    });
  };

  return (
    <div style={{ width:"100vw", height:"100vh", position:"relative" }}>

      <button
        onClick={startAR}
        style={{ position:"absolute", zIndex:10, top:20, left:20 }}
      >
        Start AR
      </button>

      <UnityAR />

    </div>
  );
}

export default App;