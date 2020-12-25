function UnityProgress(unityInstance, progress)
{
  if (!unityInstance.Module)
    return;

  if (!unityInstance.logo)
  {
    unityInstance.logo = document.getElementById("custom-logo");
    unityInstance.logo.style.display = "block";
    unityInstance.container.appendChild(unityInstance.logo);
  }

  if (!unityInstance.progress)
  {
    unityInstance.progress = document.getElementById("custom-loader");
    unityInstance.progress.style.display = "block";
    unityInstance.container.appendChild(unityInstance.progress);
  }

  setLoaderProgressTo(progress);

  if (progress == 1)
  {
    unityInstance.logo.style.display = "none";
    unityInstance.progress.style.display = "none";
  }
}

// value - 0 to 1
function setLoaderProgressTo(value)
{
  const fill = unityInstance.progress.getElementsByClassName("fill")[0];
  const fillText = unityInstance.progress.getElementsByClassName("label")[0];

  fill.animate(
    [
      { width: (value * 100) + "%" }
    ],
    {
      duration: 300,
      fill: "forwards"
    }
  );

  fillText.textContent = (value * 100).toFixed() + "%";
}
