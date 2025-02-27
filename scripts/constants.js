const YEAR = 2019;
const MONTHS = ["INVALID", "JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]

const LIFEGROUPS = [
    "A1",
    "A2",
    "A3",
    "B1",
    "B2",
    "B3",
    "C1",
    "C2",
    "C3",
    "D1",
    "D2",
    "D3",
    "Ablaze",
    "Poly-Ite",
    "NS",
    "Others",
]

const LOCATIONS = {
	"location_name": 0,
	"AS1-0201": 1,
	"AS1-0301": 2,
	"AS3-0101": 3,
	"AS3-0215": 4,
	"AS3-0302": 5,
	"AS3-0303": 6,
	"AS4-0109": 7,
	"AS4-0110": 8,
	"AS4-0114": 9,
	"AS4-0115": 10,
	"AS6-0214": 11,
	"AS7-0214": 12,
	"AS8-0305": 13,
	"LT10": 14,
	"LT11": 15,
	"LT12": 16,
	"LT13": 17,
	"LT8": 18,
	"LT9": 19,
	"BIZ1-0201": 20,
	"BIZ1-0202": 21,
	"LT16": 22,
	"LT17": 23,
	"CELS-01-08": 24,
	"E1-0409PC1": 25,
	"E1-0410PC2": 26,
	"E1-06-0102": 27,
	"E1-06-0304": 28,
	"E1-06-0506": 29,
	"E1-06-0809": 30,
	"E1A-06-18": 31,
	"E1A-07-03": 32,
	"E1A-07-15": 33,
	"E2-0306PC3": 34,
	"E2-0307PC4": 35,
	"E2-0308PC5": 36,
	"E2-0309PC6": 37,
	"E3-0601-02": 38,
	"E3-0603-04": 39,
	"E3-0605-06": 40,
	"E3-0608-09": 41,
	"E4-04-08A": 42,
	"E4-05-39": 43,
	"E5-02-09": 44,
	"E5-03-24": 45,
	"E5-0320-21": 46,
	"E5-0322-23": 47,
	"EA-01-06": 48,
	"EA-03-09": 49,
	"EA-06-05": 50,
	"EA-06-06": 51,
	"EA-06-07": 52,
	"EA-07-08": 53,
	"ENG-AUD": 54,
	"LT5": 55,
	"LT7": 56,
	"LT7A": 57,
	"C4-02-01": 58,
	"LAW_AUD": 59,
	"LAW_CR2-1": 60,
	"LAW_CR2-2": 61,
	"LAW_LT": 62,
	"LAW_MC": 63,
	"LAW_SR3": 64,
	"LAW_SR4-1": 65,
	"LAW_SR4-2": 66,
	"LAW_SR4-4": 67,
	"LKY_SR2-1": 68,
	"LKY_SR2-2": 69,
	"LKY_SR2-3": 70,
	"LKY_SR3-1": 71,
	"LKY_SR3-4": 72,
	"LKY_SR3-5": 73,
	"LKY_CONFRM": 74,
	"LKY_INOVRM": 75,
	"LKY_LAB": 76,
	"Room (Number)": 77,
	"MPSH": 78,
	"MPSH1-A": 79,
	"MPSH1-A-SS": 80,
	"MPSH1-B": 81,
	"MPSH1-B-SS": 82,
	"MPSH2-A": 83,
	"MPSH2-A-SS": 84,
	"MPSH2-B": 85,
	"MPSH2-B-SS": 86,
	"MPSH4": 87,
	"MPSH4-SS": 88,
	"MPSH5": 89,
	"MPSH5-SS": 90,
	"MPSH6": 91,
	"MPSH6-SS": 92,
	"USC-03-01": 93,
	"CAPT-MPH": 94,
	"USP-SR1": 95,
	"USP-TR1": 96,
	"USP-TR2": 97,
	"LT21": 98,
	"LT26": 99,
	"LT28": 100,
	"LT29": 101,
	"LT31": 102,
	"LT33": 103,
	"LT34": 104,
	"MD1-03-01": 105,
	"MD1-07-01A": 106,
	"MD1-0801AB": 107,
	"MD1-09-02": 108,
	"MD1-0901AB": 109,
	"MD1-0903EF": 110,
	"MD1-10-01A": 111,
	"MD10-04-02": 112,
	"MD11CRCAUD": 113,
	"MD3-04-01": 114,
	"MD3-04-MtgRm": 115,
	"MD4_LAB9": 116,
	"LT35-01-01": 117,
	"MD6-01-01A": 118,
	"MD6-01-01B": 119,
	"MD6-02-02C": 120,
	"MD6-04-01A": 121,
	"MD7-02-09": 122,
	"MD7LB8_01-02D": 123,
	"MD7_LAB8": 124,
	"NUHMC": 125,
	"S12-0401": 126,
	"S12-0402": 127,
	"S12-0403": 128,
	"S13-M-08": 129,
	"S13-M-09": 130,
	"S14-0619": 131,
	"S14-0620": 132,
	"S16-0304": 133,
	"S16-0306": 134,
	"S16-0307": 135,
	"S16-0309": 136,
	"S16-043041": 137,
	"S16-0431": 138,
	"S16-0435": 139,
	"S16-0437": 140,
	"S16-05101": 141,
	"S16-05102": 142,
	"S16-0596": 143,
	"S16-0598": 144,
	"S17-0511": 145,
	"S17-0512": 146,
	"S1A-03LAB1": 147,
	"S1A-03LAB2": 148,
	"S1A-04LAB3": 149,
	"S1A-04LAB4": 150,
	"S4A-0310": 151,
	"S4A-0311": 152,
	"S4A-0312": 153,
	"SDE ARCMTG": 154,
	"SDE BDGMTG": 155,
	"SDE RSTMTG": 156,
	"SDE SR10": 157,
	"SDE SR11": 158,
	"SDE-CR4": 159,
	"SDE-GIS": 160,
	"SDE_EXH": 161,
	"SDE_IRC": 162,
	"SDE_SR4-7": 163,
	"SDE_E-STUD": 164,
	"SDE_ER4-5": 165,
	"SDESR10-13": 166,
	"SDE_EXR5": 167,
	"LT15": 168,
	"CEREBRO": 169,
	"COM1-0201": 170,
	"COM1-0203": 171,
	"COM1-0204": 172,
	"COM1-0206": 173,
	"COM1-0210": 174,
	"COM1-0212": 175,
	"COM1-0216": 176,
	"COM1-0217": 177,
	"COM1-0218": 178,
	"COM1-B108": 179,
	"COM1-B109": 180,
	"COM1-B110": 181,
	"COM1-B111": 182,
	"UH-L304": 183,
	"UH-L401": 184,
	"UH-T101": 185,
	"ERC-GLR": 186,
	"TP-SR6": 187,
	"TP-SR7": 188,
	"TP-SR9": 189,
	"UT-AUD2": 190,
	"UTSRC-LT50": 191,
	"UTSRC-LT51": 192,
	"UTSRC-LT52": 193,
	"UTSRC-LT53": 194,
	"UTSRC-SH1": 195,
	"UTSRC-SH1-SS": 196,
	"UTSRC-SR3": 197,
	"UTSRC-SR4": 198,
	"UTSRC-SR6": 199,
	"UTSRC-SR7": 200,
	"UTSRC-SR8": 201,
	"UTSRC-SR9": 202,
	"Y-CR18": 203,
	"Y-CR19": 204,
	"Y-CR20": 205,
	"Y-CR21": 206,
	"Y-CR22": 207,
	"Y-CR23": 208,
	"Y-AChemLab": 209,
	"Y-BioLab": 210,
	"Y-CR15": 211,
	"Y-CR17": 212,
	"Y-GLRm1": 213,
	"Y-GLRm2": 214,
	"Y-OChemLab": 215,
	"Y-PgRm1": 216,
	"Y-PgRm2": 217,
	"Y-PhysLab": 218,
	"Y-CR11": 219,
	"Y-CR12": 220,
	"Y-CR13": 221,
	"Y-CR14": 222,
	"Y-CR9": 223,
	"Y-CTLConfRm": 224,
	"Y-CTLMtgRm": 225,
	"Y-CTLOffice": 226,
	"Y-ElmConf": 227,
	"Y-KChanrai": 228,
	"Y-TCTLT": 229,
	"Y-CR1": 230,
	"Y-CR2": 231,
	"Y-CR3": 232,
	"Y-CR4": 233,
	"Y-CR5": 234,
	"Y-CR6": 235,
	"Y-CR7": 236,
	"Y-CR8": 237,
	"Y-LT1": 238,
	"Y-ArtsStud": 239,
	"Y-BlackBox": 240,
	"Y-DanceStu": 241,
	"Y-PerfHall": 242,
	"Y-PracRm6": 243,
	"YSTCM-OH": 244,
}

const LOCATION_INDEXES = [
	"location_name",
	"AS1-0201",
	"AS1-0301",
	"AS3-0101",
	"AS3-0215",
	"AS3-0302",
	"AS3-0303",
	"AS4-0109",
	"AS4-0110",
	"AS4-0114",
	"AS4-0115",
	"AS6-0214",
	"AS7-0214",
	"AS8-0305",
	"LT10",
	"LT11",
	"LT12",
	"LT13",
	"LT8",
	"LT9",
	"BIZ1-0201",
	"BIZ1-0202",
	"LT16",
	"LT17",
	"CELS-01-08",
	"E1-0409PC1",
	"E1-0410PC2",
	"E1-06-0102",
	"E1-06-0304",
	"E1-06-0506",
	"E1-06-0809",
	"E1A-06-18",
	"E1A-07-03",
	"E1A-07-15",
	"E2-0306PC3",
	"E2-0307PC4",
	"E2-0308PC5",
	"E2-0309PC6",
	"E3-0601-02",
	"E3-0603-04",
	"E3-0605-06",
	"E3-0608-09",
	"E4-04-08A",
	"E4-05-39",
	"E5-02-09",
	"E5-03-24",
	"E5-0320-21",
	"E5-0322-23",
	"EA-01-06",
	"EA-03-09",
	"EA-06-05",
	"EA-06-06",
	"EA-06-07",
	"EA-07-08",
	"ENG-AUD",
	"LT5",
	"LT7",
	"LT7A",
	"C4-02-01",
	"LAW_AUD",
	"LAW_CR2-1",
	"LAW_CR2-2",
	"LAW_LT",
	"LAW_MC",
	"LAW_SR3",
	"LAW_SR4-1",
	"LAW_SR4-2",
	"LAW_SR4-4",
	"LKY_SR2-1",
	"LKY_SR2-2",
	"LKY_SR2-3",
	"LKY_SR3-1",
	"LKY_SR3-4",
	"LKY_SR3-5",
	"LKY_CONFRM",
	"LKY_INOVRM",
	"LKY_LAB",
	"Room (Number)",
	"MPSH",
	"MPSH1-A",
	"MPSH1-A-SS",
	"MPSH1-B",
	"MPSH1-B-SS",
	"MPSH2-A",
	"MPSH2-A-SS",
	"MPSH2-B",
	"MPSH2-B-SS",
	"MPSH4",
	"MPSH4-SS",
	"MPSH5",
	"MPSH5-SS",
	"MPSH6",
	"MPSH6-SS",
	"USC-03-01",
	"CAPT-MPH",
	"USP-SR1",
	"USP-TR1",
	"USP-TR2",
	"LT21",
	"LT26",
	"LT28",
	"LT29",
	"LT31",
	"LT33",
	"LT34",
	"MD1-03-01",
	"MD1-07-01A",
	"MD1-0801AB",
	"MD1-09-02",
	"MD1-0901AB",
	"MD1-0903EF",
	"MD1-10-01A",
	"MD10-04-02",
	"MD11CRCAUD",
	"MD3-04-01",
	"MD3-04-MtgRm",
	"MD4_LAB9",
	"LT35-01-01",
	"MD6-01-01A",
	"MD6-01-01B",
	"MD6-02-02C",
	"MD6-04-01A",
	"MD7-02-09",
	"MD7LB8_01-02D",
	"MD7_LAB8",
	"NUHMC",
	"S12-0401",
	"S12-0402",
	"S12-0403",
	"S13-M-08",
	"S13-M-09",
	"S14-0619",
	"S14-0620",
	"S16-0304",
	"S16-0306",
	"S16-0307",
	"S16-0309",
	"S16-043041",
	"S16-0431",
	"S16-0435",
	"S16-0437",
	"S16-05101",
	"S16-05102",
	"S16-0596",
	"S16-0598",
	"S17-0511",
	"S17-0512",
	"S1A-03LAB1",
	"S1A-03LAB2",
	"S1A-04LAB3",
	"S1A-04LAB4",
	"S4A-0310",
	"S4A-0311",
	"S4A-0312",
	"SDE ARCMTG",
	"SDE BDGMTG",
	"SDE RSTMTG",
	"SDE SR10",
	"SDE SR11",
	"SDE-CR4",
	"SDE-GIS",
	"SDE_EXH",
	"SDE_IRC",
	"SDE_SR4-7",
	"SDE_E-STUD",
	"SDE_ER4-5",
	"SDESR10-13",
	"SDE_EXR5",
	"LT15",
	"CEREBRO",
	"COM1-0201",
	"COM1-0203",
	"COM1-0204",
	"COM1-0206",
	"COM1-0210",
	"COM1-0212",
	"COM1-0216",
	"COM1-0217",
	"COM1-0218",
	"COM1-B108",
	"COM1-B109",
	"COM1-B110",
	"COM1-B111",
	"UH-L304",
	"UH-L401",
	"UH-T101",
	"ERC-GLR",
	"TP-SR6",
	"TP-SR7",
	"TP-SR9",
	"UT-AUD2",
	"UTSRC-LT50",
	"UTSRC-LT51",
	"UTSRC-LT52",
	"UTSRC-LT53",
	"UTSRC-SH1",
	"UTSRC-SH1-SS",
	"UTSRC-SR3",
	"UTSRC-SR4",
	"UTSRC-SR6",
	"UTSRC-SR7",
	"UTSRC-SR8",
	"UTSRC-SR9",
	"Y-CR18",
	"Y-CR19",
	"Y-CR20",
	"Y-CR21",
	"Y-CR22",
	"Y-CR23",
	"Y-AChemLab",
	"Y-BioLab",
	"Y-CR15",
	"Y-CR17",
	"Y-GLRm1",
	"Y-GLRm2",
	"Y-OChemLab",
	"Y-PgRm1",
	"Y-PgRm2",
	"Y-PhysLab",
	"Y-CR11",
	"Y-CR12",
	"Y-CR13",
	"Y-CR14",
	"Y-CR9",
	"Y-CTLConfRm",
	"Y-CTLMtgRm",
	"Y-CTLOffice",
	"Y-ElmConf",
	"Y-KChanrai",
	"Y-TCTLT",
	"Y-CR1",
	"Y-CR2",
	"Y-CR3",
	"Y-CR4",
	"Y-CR5",
	"Y-CR6",
	"Y-CR7",
	"Y-CR8",
	"Y-LT1",
	"Y-ArtsStud",
	"Y-BlackBox",
	"Y-DanceStu",
	"Y-PerfHall",
	"Y-PracRm6",
	"YSTCM-OH",
]

const MEETING_POINT = [
	"meeting_point",
	"AS",
	"AS",
	"AS",
	"AS",
	"AS",
	"AS",
	"AS",
	"AS",
	"AS",
	"AS",
	"AS",
	"AS",
	"AS",
	"AS",
	"AS",
	"AS",
	"AS",
	"AS",
	"AS",
	"BIZ",
	"BIZ",
	"BIZ",
	"BIZ",
	"ENGINE",
	"ENGINE",
	"ENGINE",
	"ENGINE",
	"ENGINE",
	"ENGINE",
	"ENGINE",
	"ENGINE",
	"ENGINE",
	"ENGINE",
	"ENGINE",
	"ENGINE",
	"ENGINE",
	"ENGINE",
	"ENGINE",
	"ENGINE",
	"ENGINE",
	"ENGINE",
	"ENGINE",
	"ENGINE",
	"ENGINE",
	"ENGINE",
	"ENGINE",
	"ENGINE",
	"ENGINE",
	"ENGINE",
	"ENGINE",
	"ENGINE",
	"ENGINE",
	"ENGINE",
	"ENGINE",
	"ENGINE",
	"ENGINE",
	"ENGINE",
	"FOS",
	"LAW",
	"LAW",
	"LAW",
	"LAW",
	"LAW",
	"LAW",
	"LAW",
	"LAW",
	"LAW",
	"LAW",
	"LAW",
	"LAW",
	"LAW",
	"LAW",
	"LAW",
	"LAW",
	"LAW",
	"LAW",
	"Meeting Point",
	"MPSH",
	"MPSH",
	"MPSH",
	"MPSH",
	"MPSH",
	"MPSH",
	"MPSH",
	"MPSH",
	"MPSH",
	"MPSH",
	"MPSH",
	"MPSH",
	"MPSH",
	"MPSH",
	"MPSH",
	"MPSH",
	"RC",
	"RC",
	"RC",
	"RC",
	"SCIENCE",
	"SCIENCE",
	"SCIENCE",
	"SCIENCE",
	"SCIENCE",
	"SCIENCE",
	"SCIENCE",
	"SCIENCE",
	"SCIENCE",
	"SCIENCE",
	"SCIENCE",
	"SCIENCE",
	"SCIENCE",
	"SCIENCE",
	"SCIENCE",
	"SCIENCE",
	"SCIENCE",
	"SCIENCE",
	"SCIENCE",
	"SCIENCE",
	"SCIENCE",
	"SCIENCE",
	"SCIENCE",
	"SCIENCE",
	"SCIENCE",
	"SCIENCE",
	"SCIENCE",
	"SCIENCE",
	"SCIENCE",
	"SCIENCE",
	"SCIENCE",
	"SCIENCE",
	"SCIENCE",
	"SCIENCE",
	"SCIENCE",
	"SCIENCE",
	"SCIENCE",
	"SCIENCE",
	"SCIENCE",
	"SCIENCE",
	"SCIENCE",
	"SCIENCE",
	"SCIENCE",
	"SCIENCE",
	"SCIENCE",
	"SCIENCE",
	"SCIENCE",
	"SCIENCE",
	"SCIENCE",
	"SCIENCE",
	"SCIENCE",
	"SCIENCE",
	"SCIENCE",
	"SCIENCE",
	"SCIENCE",
	"SCIENCE",
	"SDE",
	"SDE",
	"SDE",
	"SDE",
	"SDE",
	"SDE",
	"SDE",
	"SDE",
	"SDE",
	"SDE",
	"SDE",
	"SDE",
	"SDE",
	"SDE",
	"SOC",
	"SOC",
	"SOC",
	"SOC",
	"SOC",
	"SOC",
	"SOC",
	"SOC",
	"SOC",
	"SOC",
	"SOC",
	"SOC",
	"SOC",
	"SOC",
	"SOC",
	"UHALL",
	"UHALL",
	"UHALL",
	"UTOWN",
	"UTOWN",
	"UTOWN",
	"UTOWN",
	"UTOWN",
	"UTOWN",
	"UTOWN",
	"UTOWN",
	"UTOWN",
	"UTOWN",
	"UTOWN",
	"UTOWN",
	"UTOWN",
	"UTOWN",
	"UTOWN",
	"UTOWN",
	"UTOWN",
	"YALE",
	"YALE",
	"YALE",
	"YALE",
	"YALE",
	"YALE",
	"YALE",
	"YALE",
	"YALE",
	"YALE",
	"YALE",
	"YALE",
	"YALE",
	"YALE",
	"YALE",
	"YALE",
	"YALE",
	"YALE",
	"YALE",
	"YALE",
	"YALE",
	"YALE",
	"YALE",
	"YALE",
	"YALE",
	"YALE",
	"YALE",
	"YALE",
	"YALE",
	"YALE",
	"YALE",
	"YALE",
	"YALE",
	"YALE",
	"YALE",
	"YALE",
	"YALE",
	"YALE",
	"YALE",
	"YALE",
	"YALE",
	"YONG SIEW TOH",
]
