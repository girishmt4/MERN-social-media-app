
const users = [
    {
        name: {
            title: "Miss",
            first: "Mattie",
            last: "Dixon",
        },
        location: {
            street: {
                number: 4870,
                name: "Hogan St",
            },
            city: "Hervey Bay",
            state: "Australian Capital Territory",
            country: "Australia",
            postcode: 3307,
            coordinates: {
                latitude: "-88.5305",
                longitude: "37.9628",
            },
            timezone: {
                offset: "-4:00",
                description: "Atlantic Time (Canada), Caracas, La Paz",
            },
        },
        email: "mattie.dixon@example.com",
        picture: {
            large: "https://randomuser.me/api/portraits/women/61.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/61.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/61.jpg",
        },
    },
    {
        name: {
            title: "Miss",
            first: "Holly",
            last: "Edwards",
        },
        location: {
            street: {
                number: 2760,
                name: "Old Taupo Road",
            },
            city: "Blenheim",
            state: "Otago",
            country: "New Zealand",
            postcode: 84773,
            coordinates: {
                latitude: "-60.3470",
                longitude: "-167.2376",
            },
            timezone: {
                offset: "+3:30",
                description: "Tehran",
            },
        },
        email: "holly.edwards@example.com",
        picture: {
            large: "https://randomuser.me/api/portraits/women/79.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/79.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/79.jpg",
        },
    },
    {
        name: {
            title: "Mr",
            first: "عباس",
            last: "قاسمی",
        },
        location: {
            street: {
                number: 1949,
                name: "میدان توحید",
            },
            city: "نجف‌آباد",
            state: "مرکزی",
            country: "Iran",
            postcode: 82138,
            coordinates: {
                latitude: "-32.4079",
                longitude: "60.3544",
            },
            timezone: {
                offset: "-7:00",
                description: "Mountain Time (US & Canada)",
            },
        },
        email: "aabs.qsmy@example.com",
        picture: {
            large: "https://randomuser.me/api/portraits/men/73.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/73.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/73.jpg",
        },
    },
    {
        name: {
            title: "Ms",
            first: "Dijana",
            last: "Hoogendam",
        },
        location: {
            street: {
                number: 9616,
                name: "Kruisvennendijk",
            },
            city: "Amerongen",
            state: "Friesland",
            country: "Netherlands",
            postcode: "7612 EZ",
            coordinates: {
                latitude: "13.2334",
                longitude: "-71.4034",
            },
            timezone: {
                offset: "-4:00",
                description: "Atlantic Time (Canada), Caracas, La Paz",
            },
        },
        email: "dijana.hoogendam@example.com",
        picture: {
            large: "https://randomuser.me/api/portraits/women/81.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/81.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/81.jpg",
        },
    },
    {
        name: {
            title: "Mr",
            first: "Holm",
            last: "Asmus",
        },
        location: {
            street: {
                number: 7321,
                name: "Heideweg",
            },
            city: "Kamen",
            state: "Mecklenburg-Vorpommern",
            country: "Germany",
            postcode: 92005,
            coordinates: {
                latitude: "10.3375",
                longitude: "1.2484",
            },
            timezone: {
                offset: "-1:00",
                description: "Azores, Cape Verde Islands",
            },
        },
        email: "holm.asmus@example.com",
        picture: {
            large: "https://randomuser.me/api/portraits/men/39.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/39.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/39.jpg",
        },
    },
    {
        name: {
            title: "Mr",
            first: "Terje",
            last: "Mardal",
        },
        location: {
            street: {
                number: 1838,
                name: "Professor Lochmanns gate",
            },
            city: "Skjeberg",
            state: "Vestfold",
            country: "Norway",
            postcode: "5055",
            coordinates: {
                latitude: "73.8017",
                longitude: "131.3176",
            },
            timezone: {
                offset: "+11:00",
                description: "Magadan, Solomon Islands, New Caledonia",
            },
        },
        email: "terje.mardal@example.com",
        picture: {
            large: "https://randomuser.me/api/portraits/men/92.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/92.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/92.jpg",
        },
    },
    {
        name: {
            title: "Mr",
            first: "Romain",
            last: "Garcia",
        },
        location: {
            street: {
                number: 3562,
                name: "Rue Abel",
            },
            city: "Mulhouse",
            state: "Tarn-et-Garonne",
            country: "France",
            postcode: 92998,
            coordinates: {
                latitude: "-13.5173",
                longitude: "-22.4020",
            },
            timezone: {
                offset: "-12:00",
                description: "Eniwetok, Kwajalein",
            },
        },
        email: "romain.garcia@example.com",
        picture: {
            large: "https://randomuser.me/api/portraits/men/79.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/79.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/79.jpg",
        },
    },
    {
        name: {
            title: "Mrs",
            first: "Bojana",
            last: "Obradović",
        },
        location: {
            street: {
                number: 1792,
                name: "Živojina Tabakovića",
            },
            city: "Negotin",
            state: "South Bačka",
            country: "Serbia",
            postcode: 37593,
            coordinates: {
                latitude: "-87.3427",
                longitude: "-164.5721",
            },
            timezone: {
                offset: "-7:00",
                description: "Mountain Time (US & Canada)",
            },
        },
        email: "bojana.obradovic@example.com",
        picture: {
            large: "https://randomuser.me/api/portraits/women/7.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/7.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/7.jpg",
        },
    },
    {
        name: {
            title: "Ms",
            first: "Teresa",
            last: "Vázquez",
        },
        location: {
            street: {
                number: 2522,
                name: "Calle de Ferraz",
            },
            city: "Bilbao",
            state: "Andalucía",
            country: "Spain",
            postcode: 60310,
            coordinates: {
                latitude: "-38.8088",
                longitude: "166.4727",
            },
            timezone: {
                offset: "+11:00",
                description: "Magadan, Solomon Islands, New Caledonia",
            },
        },
        email: "teresa.vazquez@example.com",
        picture: {
            large: "https://randomuser.me/api/portraits/women/11.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/11.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/11.jpg",
        },
    },
    {
        name: {
            title: "Miss",
            first: "Miguelina",
            last: "Nogueira",
        },
        location: {
            street: {
                number: 8538,
                name: "Rua Dom Pedro Ii ",
            },
            city: "Caxias",
            state: "Piauí",
            country: "Brazil",
            postcode: 94335,
            coordinates: {
                latitude: "-1.3864",
                longitude: "-99.3969",
            },
            timezone: {
                offset: "-10:00",
                description: "Hawaii",
            },
        },
        email: "miguelina.nogueira@example.com",
        picture: {
            large: "https://randomuser.me/api/portraits/women/13.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/13.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/13.jpg",
        },
    },
    {
        name: {
            title: "Mrs",
            first: "Mia",
            last: "Côté",
        },
        location: {
            street: {
                number: 4279,
                name: "Peel St",
            },
            city: "Havelock",
            state: "Nova Scotia",
            country: "Canada",
            postcode: "B1B 6R3",
            coordinates: {
                latitude: "-23.7693",
                longitude: "160.3877",
            },
            timezone: {
                offset: "+8:00",
                description: "Beijing, Perth, Singapore, Hong Kong",
            },
        },
        email: "mia.cote@example.com",
        picture: {
            large: "https://randomuser.me/api/portraits/women/33.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/33.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/33.jpg",
        },
    },
    {
        name: {
            title: "Miss",
            first: "Kate",
            last: "Walker",
        },
        location: {
            street: {
                number: 1873,
                name: "Opawa Road",
            },
            city: "Whanganui",
            state: "Marlborough",
            country: "New Zealand",
            postcode: 85016,
            coordinates: {
                latitude: "-18.0823",
                longitude: "-55.7341",
            },
            timezone: {
                offset: "+9:00",
                description: "Tokyo, Seoul, Osaka, Sapporo, Yakutsk",
            },
        },
        email: "kate.walker@example.com",
        picture: {
            large: "https://randomuser.me/api/portraits/women/48.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/48.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/48.jpg",
        },
    },
    {
        name: {
            title: "Mr",
            first: "Perry",
            last: "Morgan",
        },
        location: {
            street: {
                number: 6347,
                name: "Miller Ave",
            },
            city: "Woodbridge",
            state: "Georgia",
            country: "United States",
            postcode: 82041,
            coordinates: {
                latitude: "66.0919",
                longitude: "173.3675",
            },
            timezone: {
                offset: "+9:30",
                description: "Adelaide, Darwin",
            },
        },
        email: "perry.morgan@example.com",
        picture: {
            large: "https://randomuser.me/api/portraits/men/72.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/72.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/72.jpg",
        },
    },
    {
        name: {
            title: "Mr",
            first: "Jeremy",
            last: "Powell",
        },
        location: {
            street: {
                number: 4379,
                name: "Valwood Pkwy",
            },
            city: "South Valley",
            state: "Washington",
            country: "United States",
            postcode: 36605,
            coordinates: {
                latitude: "-48.5681",
                longitude: "53.8965",
            },
            timezone: {
                offset: "+3:30",
                description: "Tehran",
            },
        },
        email: "jeremy.powell@example.com",
        picture: {
            large: "https://randomuser.me/api/portraits/men/52.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/52.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/52.jpg",
        },
    },
    {
        name: {
            title: "Mr",
            first: "Giray",
            last: "Poçan",
        },
        location: {
            street: {
                number: 9366,
                name: "Tunalı Hilmi Cd",
            },
            city: "Bartın",
            state: "Yozgat",
            country: "Turkey",
            postcode: 14663,
            coordinates: {
                latitude: "-59.3329",
                longitude: "176.6758",
            },
            timezone: {
                offset: "+10:00",
                description: "Eastern Australia, Guam, Vladivostok",
            },
        },
        email: "giray.pocan@example.com",
        picture: {
            large: "https://randomuser.me/api/portraits/men/37.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/37.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/37.jpg",
        },
    },
];


users.forEach(async (user) => {
    coverPicCounter = coverPicCounter + 1;
    const newUser = {
        username: user.name.first.toLowerCase(),
        email: user.email,
        password: "123456",
        name: user.name.first + " " + user.name.last,
        profilePic: user.picture.large,
        coverPic: coverPictures[coverPicCounter].urls.full,
        city: user.location.city,
        state: user.location.state,
        country: user.location.country,
        website:
            "www." +
            user.name.first.toLowerCase() +
            user.name.last.toLowerCase() +
            ".com",
    };

    console.log(newUser.profilePic);

    await fetch("http://localhost:8800/api/auth/register", {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    })
        .then((res) => {
            if (res.ok) return res.json();
            return res.json().then((errorMessage) => {
                throw new Error(errorMessage);
            });
        })
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            setError(err.message);
        });
});