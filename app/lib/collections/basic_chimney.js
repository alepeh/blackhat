Chimney = new SimpleSchema({
    vendor_name: {
        type: String,
        label: "Hersteller",
        optional: true,
        max: 100
    },
    type: {
        type: String,
        label: "Typ",
        optional: true,
        max: 100
    },
    certificate_number: {
        type: String,
        label: "Zulassungsnummer",
        optional: true,
        max: 50
    },
    diameter: {
        type: String,
        label: "Durchmesser",
        optional: true,
        max: 10
    },
    height: {
        type: Number,
        decimal: true,
        label: "Höhe",
        optional: true,
        max: 10
    },
    base_floor: {
        type: String,
        label: "Fangsohle",
        optional: true,
        max: 30
    },
    maintenance_lid_floor: {
        type: String,
        label: "Kehrtürchen",
        optional: true,
        max: 30
    }
});
