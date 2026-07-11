// Safu ya Kuhifadhi Data katika Kumbukumbu ya Browser (Local Storage)
let dceRequests = JSON.parse(localStorage.getItem('dce_requests')) || [];
let dceDrivers = JSON.parse(localStorage.getItem('dce_drivers')) || [];

// 1. Kazi ya Kubadili Tabu (Navigation Control)
function switchTab(tabId) {
    // Ondoa active kwenye tabu zote
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // Washa tabu iliyobonyezwa
    document.getElementById(tabId).classList.add('active');
    
    // Weka alama ya active kwenye kitufe husika
    const event = window.event;
    if (event && event.target) {
        event.target.classList.add('active');
    }

    // Kama amefungua ubao wa Boss, sasisha takwimu
    if (tabId === 'boss-panel') {
        renderBossDashboard();
    }
}

// 2. Wakala Kutuma Ombi la Lori (Agent Request)
function submitRequest() {
    const origin = document.getElementById('origin').value;
    const weightClass = document.getElementById('weightClass').value;
    const destination = document.getElementById('destination').value;
    const shippingLine = document.getElementById('shippingLine').value;

    if (!destination.trim()) {
        alert("Tafadhali weka mahali mzigo unapokwenda!");
        return;
    }

    // Mantiki ya Kuchagua Aina Sahihi ya Lori (Routing/Allocation Logic)
    let truckTypeRequired = "Semi-Trailer";
    if (weightClass === "20ft_light") {
        truckTypeRequired = "Single-Diff";
    }

    const newRequest = {
        id: 'REQ-' + Date.now(),
        origin: origin.replace('_', ' '),
        weightClass: weightClass === '40ft' ? '40ft Container' : (weightClass === '20ft_light' ? '20ft Mwepesi' : '20ft Mzito'),
        destination: destination,
        shippingLine: shippingLine,
        truckType: truckTypeRequired,
        status: 'Inasubiri Lori'
    };

    dceRequests.push(newRequest);
    localStorage.setItem('dce_requests', JSON.stringify(dceRequests));
    
    alert(`Ombi Limesajiliwa! Mfumo umechagua: Lori la ${truckTypeRequired}`);
    document.getElementById('dceRequestForm').reset();
}

// 3. Dereva Kujisajili Kwenye Mfumo (Driver Registration)
function registerDriver() {
    const name = document.getElementById('driverName').value;
    const phone = document.getElementById('driverPhone').value;
    const plate = document.getElementById('truckPlate').value;
    const type = document.getElementById('truckType').value;

    if (!name || !phone || !plate) {
        alert("Tafadhali jaza taarifa zote za usajili wa lori!");
        return;
    }

    const newDriver = {
        id: 'DRV-' + Date.now(),
        name: name,
        phone: phone,
        plate: plate,
        type: type
    };

    dceDrivers.push(newDriver);
    localStorage.setItem('dce_drivers', JSON.stringify(dceDrivers));

    alert(`Hongera ${name}! Lori lako lenye namba ${plate} limesajiliwa DCE successfully.`);
    document.getElementById('driverForm').reset();
}

// 4. Kazi ya Kujaza Data Kwenye Ubao wa Uongozi (Boss Control Render)
function renderBossDashboard() {
    // Sasisha Idadi ya Takwimu Juu (Counters)
    document.getElementById('count-requests').innerText = dceRequests.length;
    document.getElementById('count-drivers').innerText = dceDrivers.length;

    // Jaza Jedwali la Maombi
    const reqTableBody = document.getElementById('boss-requests-table');
    if (dceRequests.length === 0) {
        reqTableBody.innerHTML = `<tr><td colspan="5" style="text-align: center; color: #999;">Hakuna maombi yaliyotumwa kwa sasa.</td></tr>`;
    } else {
        reqTableBody.innerHTML = dceRequests.map(req => `
            <tr>
                <td><strong>${req.origin}</strong></td>
                <td>${req.weightClass} (${req.shippingLine})</td>
                <td>${req.destination}</td>
                <td><span style="color: #1e3a8a; font-weight:600;">${req.truckType}</span></td>
                <td><span class="badge badge-pending">${req.status}</span></td>
            </tr>
        `).join('');
    }

    // Jaza Jedwali la Madereva
    const drvTableBody = document.getElementById('boss-drivers-table');
    if (dceDrivers.length === 0) {
        drvTableBody.innerHTML = `<tr><td colspan="4" style="text-align: center; color: #999;">Hakuna dereva aliyesajiliwa bado.</td></tr>`;
    } else {
        drvTableBody.innerHTML = dceDrivers.map(drv => `
            <tr>
                <td><strong>${drv.name}</strong></td>
                <td>${drv.phone}</td>
                <td><span style="background:#e5e7eb; padding:2px 6px; border-radius:4px; font-family:monospace;">${drv.plate}</span></td>
                <td>${drv.type}</td>
            </tr>
        `).join('');
    }
}

// Hakikisha takwimu zinasoma mara ya kwanza ukurasa ukifunguka
document.addEventListener('DOMContentLoaded', () => {
    renderBossDashboard();
});
