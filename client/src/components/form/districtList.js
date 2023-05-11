const districtList = [
    {
        "value": "710",
        "innerText": "ADYAR"
    },
    {
        "value": "711",
        "innerText": "AMBATTUR"
    },
    {
        "value": "712",
        "innerText": "ANNA NAGAR"
    },
    {
        "value": "713",
        "innerText": "ARIYALUR"
    },
    {
        "value": "714",
        "innerText": "CBCID - CC WING"
    },
    {
        "value": "715",
        "innerText": "CBCID - CYBER CELL"
    },
    {
        "value": "716",
        "innerText": "CBCID - HQRS"
    },
    {
        "value": "717",
        "innerText": "CBCID - NORTH"
    },
    {
        "value": "718",
        "innerText": "CBCID - OCU"
    },
    {
        "value": "719",
        "innerText": "CBCID - SID"
    },
    {
        "value": "720",
        "innerText": "CBCID - SOUTH"
    },
    {
        "value": "721",
        "innerText": "CCIW"
    },
    {
        "value": "722",
        "innerText": "CCW SP- I"
    },
    {
        "value": "723",
        "innerText": "CCW SP- II"
    },
    {
        "value": "724",
        "innerText": "CCW SP- III"
    },
    {
        "value": "725",
        "innerText": "CHENGALPATTU"
    },
    {
        "value": "726",
        "innerText": "CHENNAI - CCB"
    },
    {
        "value": "727",
        "innerText": "CHENNAI - PEW EAST"
    },
    {
        "value": "728",
        "innerText": "CHENNAI - PEW NORTH"
    },
    {
        "value": "729",
        "innerText": "CHENNAI - PEW SOUTH"
    },
    {
        "value": "730",
        "innerText": "CHENNAI - PEW WEST"
    },
    {
        "value": "731",
        "innerText": "Chennai- TIW North"
    },
    {
        "value": "732",
        "innerText": "Chennai- TIW South"
    },
    {
        "value": "733",
        "innerText": "COIMBATORE"
    },
    {
        "value": "734",
        "innerText": "COIMBATORE CITY"
    },
    {
        "value": "735",
        "innerText": "CSCID - CHENNAI"
    },
    {
        "value": "736",
        "innerText": "CSCID - MADURAI"
    },
    {
        "value": "737",
        "innerText": "CSGCID Nagapattinam"
    },
    {
        "value": "738",
        "innerText": "CSGCID- RAMNAD"
    },
    {
        "value": "739",
        "innerText": "CUDDALORE"
    },
    {
        "value": "740",
        "innerText": "DHARMAPURI"
    },
    {
        "value": "741",
        "innerText": "DINDIGUL"
    },
    {
        "value": "742",
        "innerText": "EOW"
    },
    {
        "value": "743",
        "innerText": "ERODE"
    },
    {
        "value": "744",
        "innerText": "FLOWER BAZAAR"
    },
    {
        "value": "745",
        "innerText": "GRP CHENNAI"
    },
    {
        "value": "746",
        "innerText": "GRP TRICHY"
    },
    {
        "value": "747",
        "innerText": "IDOL WING"
    },
    {
        "value": "748",
        "innerText": "KALLAKURICHI"
    },
    {
        "value": "749",
        "innerText": "KANCHEEPURAM"
    },
    {
        "value": "750",
        "innerText": "KANYAKUMARI"
    },
    {
        "value": "751",
        "innerText": "KARUR"
    },
    {
        "value": "752",
        "innerText": "KILPAUK"
    },
    {
        "value": "753",
        "innerText": "KRISHNAGIRI"
    },
    {
        "value": "754",
        "innerText": "MADHAVARAM"
    },
    {
        "value": "755",
        "innerText": "MADURAI"
    },
    {
        "value": "756",
        "innerText": "MADURAI CITY"
    },
    {
        "value": "757",
        "innerText": "MYLAPORE"
    },
    {
        "value": "758",
        "innerText": "NAGAPATTINAM"
    },
    {
        "value": "759",
        "innerText": "NAMAKKAL"
    },
    {
        "value": "760",
        "innerText": "NIB - CID"
    },
    {
        "value": "761",
        "innerText": "NILGIRIS"
    },
    {
        "value": "762",
        "innerText": "PERAMBALUR"
    },
    {
        "value": "763",
        "innerText": "PUDUKKOTTAI"
    },
    {
        "value": "764",
        "innerText": "PULIANTHOPE"
    },
    {
        "value": "765",
        "innerText": "Q-BRANCH CID"
    },
    {
        "value": "766",
        "innerText": "RAMANATHAPURAM"
    },
    {
        "value": "767",
        "innerText": "Ranipet"
    },
    {
        "value": "768",
        "innerText": "SALEM"
    },
    {
        "value": "769",
        "innerText": "SALEM CITY"
    },
    {
        "value": "770",
        "innerText": "SIVAGANGAI"
    },
    {
        "value": "771",
        "innerText": "ST. THOMAS MOUNT"
    },
    {
        "value": "772",
        "innerText": "T NAGAR"
    },
    {
        "value": "773",
        "innerText": "TENKASI"
    },
    {
        "value": "774",
        "innerText": "THANJAVUR"
    },
    {
        "value": "775",
        "innerText": "THENI"
    },
    {
        "value": "776",
        "innerText": "THIRUNELVELI"
    },
    {
        "value": "777",
        "innerText": "Thirupathur"
    },
    {
        "value": "778",
        "innerText": "THIRUVALLUR"
    },
    {
        "value": "779",
        "innerText": "THIRUVANNAMALAI"
    },
    {
        "value": "780",
        "innerText": "THOOTHUKUDI"
    },
    {
        "value": "781",
        "innerText": "TIRUCHIRAPALLI"
    },
    {
        "value": "782",
        "innerText": "TIRUNELVELI CITY"
    },
    {
        "value": "783",
        "innerText": "TIRUPPUR"
    },
    {
        "value": "784",
        "innerText": "TIRUPPUR CITY"
    },
    {
        "value": "785",
        "innerText": "TIRUVARUR"
    },
    {
        "value": "786",
        "innerText": "TRICHIRAPALLI CITY"
    },
    {
        "value": "787",
        "innerText": "TRIPLICANE"
    },
    {
        "value": "788",
        "innerText": "VELLORE"
    },
    {
        "value": "789",
        "innerText": "VILLUPURAM"
    },
    {
        "value": "790",
        "innerText": "VIRUDHUNAGAR"
    },
    {
        "value": "791",
        "innerText": "VPC - CID"
    },
    {
        "value": "792",
        "innerText": "WASHERMENPET"
    }
]
  
  export default districtList