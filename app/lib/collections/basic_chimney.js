Chimney = new SimpleSchema({
    vendor_name: {
        type: String,
        label: "Hersteller",
        max: 100
    },
    type: {
        type: String,
        label: "Typ",
        max: 100
    },
    certificate_number: {
        type: String,
        label: "Zulassungsnummer",
        max: 50
    },
    diameter: {
        type: String,
        label: "Durchmesser",
        max: 10
    },
    height: {
        type: Number,
        decimal: true,
        label: "Höhe",
        max: 10
    },
    base_floor: {
        type: String,
        label: "Fangsohle",
        max: 30
    },
    maintenance_lid_floor: {
        type: String,
        label: "Kehrtürchen",
        max: 30
    }
});
