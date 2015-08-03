HeatingUnit = new SimpleSchema({
    construction_type:{
        type: String,
        label: "Bauart",
        optional: true,
        max: 50
    },
    vendor_name: {
        type: String,
        label: "Hersteller",
        optional: true,
        max: 100
    },
    vendor_address: {
        type: String,
        label: "Hersteller PLZ/Ort",
        optional: true,
        max: 100
    },
    type: {
        type: String,
        label: "Typ",
        optional: true,
        max: 100
    },
    serial: {
        type: String,
        label: "Seriennummer",
        optional: true,
        max: 100
    },
    year_of_construction: {
        type: Number,
        label: "Baujahr",
        optional: true,
        max: 4
    },
    nominal_power: {
        type: Number,
        decimal: true,
        label: "Nennwärmeleistung",
        optional: true,
        max: 10
    },
    power_range: {
        type: String,
        label: "Wärmeleistungsbereich",
        optional: true,
        max: 25
    },
    fuel_power: {
        type: String,
        label: "Brennstoffwärmeleistung",
        optional: true,
        max: 25
    },
    permitted_fuel: {
        type: String,
        label: "Zulässiger Brennstoff",
        optional: true,
        max: 100
    },
    test_report_number: {
        type: String,
        label: "Prüfbericht Nummer",
        optional: true,
        max: 100
    },
    maximum_operating_pressure: {
        type: Number,
        decimal: true,
        label: "Maximaler Betriebsdruck",
        optional: true,
        max: 5
    },
    maximum_pressure: {
        type: Number,
        label: "Maximale Betriebstemperatur",
        optional: true,
        max: 3
    },
    fuel_consumption: {
        type: String,
        label: "Brennstoffverbrauch",
        optional: true,
        max: 10
    }
});
