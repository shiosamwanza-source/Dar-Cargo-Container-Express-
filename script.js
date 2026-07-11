// Kazi kuu ya kupokea na kuchakata maombi ya usafirishaji wa makontena (DCE)
function submitRequest() {
    // Kuchukua data kutoka kwenye fomu
    const origin = document.getElementById('origin').value;
    const weightClass = document.getElementById('weightClass').value;
    const destination = document.getElementById('destination').value;
    const shippingLine = document.getElementById('shippingLine').value;

    // Uhakiki mdogo kama mteja ameweka marudio (Destination)
    if (!destination.trim()) {
        alert("Tafadhali weka mahali mzigo unakokwenda (Destination)!");
        return;
    }

    // LOGIC YA SMART MATCHING: Kuchagua aina ya lori kulingana na aina ya kontena
    let truckType = "";
    if (weightClass === "40ft") {
        truckType = "Semi-Trailer Truck (Lori Kubwa la Futi 40)";
    } else if (weightClass === "20ft_heavy") {
        truckType = "Semi-Trailer Truck (Lori Kubwa - Inashauriwa kwa usalama wa uzito)";
    } else if (weightClass === "20ft_light") {
        truckType = "Single-Diff Truck (Lori la Kawaida la Futi 20)";
    }

    // Kutengeneza ujumbe wa majibu kwa Wakala (Simulated App Response)
    console.log("--- OMBI JIPYA LA USAFIRI (DCE) ---");
    console.log(`Kutoka: ${origin}`);
    console.log(`Aina ya Mzigo: ${weightClass}`);
    console.log(`Lori Lililoteuliwa: ${truckType}`);
    console.log(`Inakwenda: ${destination}`);
    console.log(`Yadi ya Kurudisha Kontena: ${shippingLine}`);

    // Kuonyesha ujumbe wa mafanikio kwenye screen
    alert(`Ombi Limeshapokelewa! ✔️\n\n` +
          `📍 Kutoka: ${origin}\n` +
          `🚚 Lori linalohitajika: ${truckType}\n` +
          `🏁 Kwenda: ${destination}\n\n` +
          `Mfumo unaanza kutafuta madereva 150... Ofa itatumwa kwao kwa Simu (IVR) sasa hivi.`);
}
