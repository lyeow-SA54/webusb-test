import "./styles.css";

async function load() {
  const lightingDevice = await navigator.usb.requestDevice({
    filters: []
  });
  const {
    deviceClass,
    deviceProtocol,
    deviceSubclass,
    deviceVersionMajor,
    deviceVersionMinor,
    deviceVersionSubminor,
    manufacturerName,
    opened,
    productId,
    productName,
    serialNumber,
    usbVersionMajor,
    usbVersionMinor,
    usbVersionSubminor,
    vendorId
  } = lightingDevice;
  document.querySelector("#app").innerText = JSON.stringify(
    {
      deviceClass,
      deviceProtocol,
      deviceSubclass,
      deviceVersionMajor,
      deviceVersionMinor,
      deviceVersionSubminor,
      manufacturerName,
      opened,
      productId,
      productName,
      serialNumber,
      usbVersionMajor,
      usbVersionMinor,
      usbVersionSubminor,
      vendorId
    },
    null,
    2
  );
}

document.querySelector("#load").addEventListener("click", load);
