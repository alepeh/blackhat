InspectionReports = new Mongo.Collection('inspection_reports');


if (Meteor.isServer) {
    InspectionReports.allow({
        insert: function (userId, doc) {
            return true;
        },

        update: function (userId, doc, fieldNames, modifier) {
            return false;
        },

        remove: function (userId, doc) {
            return false;
        }
    });
}

GeneralInformation = new SimpleSchema({
    heating_load_calculation_performed: {
        type: String,
        label: "Heizlastberechnung vorgelegt",
        autoform: {
            type: "select-radio-inline",
            options: getOptionsForYesNoNa()
        }
    },
    central_heating_room_required: {
        type: String,
        label: "Heizraum erforderlich",
        autoform: {
            type: "select-radio-inline",
            options: getOptionsForYesNoNa()
        }
    },
    regulations_paragraph6: {
        type: String,
        label: "Bestimmungen gemäß Paragraph 6 eingehalten",
        autoform: {
            type: "select-radio-inline",
            options: getOptionsForYesNoNa()
        }
    },
    chimney_connection: {
        type: String,
        label: "Fanggebunden",
        autoform: {
            type: "select-radio-inline",
            options: getOptionsForYesNoNa()
        }
    },
    combustion_air_sufficient: {
        type: String,
        label: "Verbrennungsluft ausreichend",
        autoform: {
            type: "select-radio-inline",
            options: getOptionsForYesNoNa()
        }
    },
    air_discharge_opening_sufficient: {
        type: String,
        label: "Abluftöffnung ausreichend",
        autoform: {
            type: "select-radio-inline",
            options: getOptionsForYesNoNa()
        }
    },
    fuel_storage_accordingly: {
        type: String,
        label: "Brennstofflagerung zulässig",
        autoform: {
            type: "select-radio-inline",
            options: getOptionsForYesNoNa()
        }
    },
    reports_according_to_paragraph17_available: {
        type: String,
        label: "Befunde gemäß Paragraph 17 vorhanden",
        autoform: {
            type: "select-radio-inline",
            options: getOptionsForYesNoNa()
        }
    },
    type_label_available: {
        type: String,
        label: "Typenschild vorhanden",
        autoform: {
            type: "select-radio-inline",
            options: getOptionsForYesNoNa()
        }
    },
    ce_label_available: {
        type: String,
        label: "CE Kennzeichen vorhanden",
        autoform: {
            type: "select-radio-inline",
            options: getOptionsForYesNoNa()
        }
    },
    test_report_and_efficiency_factor: {
        type: String,
        label: "Prüfbericht und Angabe Wirkungsgrad",
        autoform: {
            type: "select-radio-inline",
            options: getOptionsForYesNoNa()
        }
    },
    heat_emission_control: {
        type: String,
        label: "Steuerung der Wärmeabgabe",
        autoform: {
            type: "select-radio-inline",
            options: getOptionsForYesNoNa()
        }
    }
});

function getOptionsForYesNoNa() {
    return [
        {label: "Ja", value: "Yes"},
        {label: "Nein", value: "No"},
        {label: "Nicht erforderlich", value: "NA"}
    ];
}

Abnahmebefund = new SimpleSchema({
    general_information: {
        type: GeneralInformation,
        label: "Allgemeine Angaben"
    },
    proof_of_proper_installation: {
        type: [String],
        label: "Nachweis der ordnungsgemäßen Installation",
        autoform: {
            type: "select-checkbox",
            options: function () {
                return [
                    {label: "ordnungsgemäß installiert", value: "OrdnungsgemInstalliert"},
                    {label: "Kaminbefund liegt vor", value: "Kaminbefund"},
                    {label: "technische Dokumentation liegt vor", value: "TechnischeDokumentation"},
                    {label: "Messergebnisse", value: "Messergebnisse"},
                    {label: "Anlage ordungsgemäß", value: "AnlageOrdnungsgem"}
                ];
            }
        }
    }
});

InspectionReports.attachSchema(new SimpleSchema({
    inspection_date: {
        type: Date,
        label: "Aufnahmedatum",
        autoform: {
            afFieldInput: {
                type: "bootstrap-datepicker"
            }
        }
    },
    location: {
        type: Location,
        label: "Objekt"
    },
    heating_unit: {
        type: HeatingUnit,
        label: "Feuerstätte"
    },
    chimney: {
        type: Chimney,
        label: "Abgasanlage"
    },
    abnahmebefund: {
        type: Abnahmebefund,
        label: "Abnahmebefund"
    }
}));

