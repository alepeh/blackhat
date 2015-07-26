HeatingUnit = new SimpleSchema({
    construction_type:{
        type: String,
        label: "Bauart",
        max: 50
    },
    vendor_name: {
        type: String,
        label: "Hersteller",
        max: 100
    },
    vendor_address: {
        type: String,
        label: "Hersteller PLZ/Ort",
        max: 100
    },
    type: {
        type: String,
        label: "Typ",
        max: 100
    },
    serial: {
        type: String,
        label: "Seriennummer",
        max: 100
    },
    year_of_construction: {
        type: Number,
        label: "Baujahr",
        max: 4
    },
    nominal_power: {
        type: Number,
        decimal: true,
        label: "Nennwärmeleistung",
        max: 10
    },
    power_range: {
        type: String,
        label: "Wärmeleistungsbereich",
        max: 25
    },
    fuel_power: {
        type: String,
        label: "Brennstoffwärmeleistung",
        max: 25
    },
    permitted_fuel: {
        type: String,
        label: "Zulässiger Brennstoff",
        max: 100
    },
    test_report_number: {
        type: String,
        label: "Prüfbericht Nummer",
        max: 100
    },
    maximum_operating_pressure: {
        type: Number,
        decimal: true,
        label: "Maximaler Betriebsdruck",
        max: 5
    },
    maximum_pressure: {
        type: Number,
        label: "Maximale Betriebstemperatur",
        max: 3
    },
    fuel_consumption: {
        type: String,
        label: "Brennstoffverbrauch",
        max: 10
    }
});
