import Card from "../Card/card";
import Nav from "../Card/nav";
import { v4 as uuidv4 } from "uuid";    
import { useState } from "react";
import '../nav.css'
import { Routes, Route, Link, useParams } from "react-router-dom";

let data = {
       1: [
    {
        nomi: "Sinf soati",
        boshlanish: "08:00",
        tugash: "08:45"
    },
    {
        nomi: "Ona tili",
        boshlanish: "08:50",
        tugash: "09:35"
    },
    {
        nomi: "Informatika",
        boshlanish: "09:40",
        tugash: "10:25"
    },
    {
        nomi: "Rus tili",
        boshlanish: "10:30",
        tugash: "11:15"
    },
    {
        nomi: "Kimyo",
        boshlanish: "11:20",
        tugash: "12:05"
    },
    {
        nomi: "Ingliz tili",
        boshlanish: "12:10",
        tugash: "12:55"
    }
],

    2: [
    {
        nomi: "Jismon",
        boshlanish: "08:00",
        tugash: "08:45"
    },
    {
        nomi: "Jahon tarixi",
        boshlanish: "08:50",
        tugash: "09:35"
    },
    {
        nomi: "Fizika",
        boshlanish: "09:40",
        tugash: "10:25"
    },
    {
        nomi: "Texnologiya",
        boshlanish: "10:30",
        tugash: "11:15"
    },
    {
        nomi: "Algebra",
        boshlanish: "11:20",
        tugash: "12:05"
    },
    {
        nomi: "Tarbiya",
        boshlanish: "12:10",
        tugash: "12:55"
    }
],

    3: [
    {
        nomi: "Ona tili",
        boshlanish: "08:00",
        tugash: "08:45"
    },
    {
        nomi: "O'zbekison tarixi",
        boshlanish: "08:50",
        tugash: "09:35"
    },
    {
        nomi: "Ingliz tili",
        boshlanish: "09:40",
        tugash: "10:25"
    },
    {
        nomi: "Chizmachilik",
        boshlanish: "10:30",
        tugash: "11:15"
    },
    {
        nomi: "Geometrya",
        boshlanish: "11:20",
        tugash: "12:05"
    }
],

    4: [
    {
        nomi: "Fizika",
        boshlanish: "08:00",
        tugash: "08:45"
    },
    {
        nomi: "Jismon",
        boshlanish: "08:50",
        tugash: "09:35"
    },
    {
        nomi: "Biologiya",
        boshlanish: "09:40",
        tugash: "10:25"
    },
    {
        nomi: " Rus tili",
        boshlanish: "10:30",
        tugash: "11:15"
    },
    {
        nomi: " Huquq",
        boshlanish: "11:20",
        tugash: "12:05"
    },
    {
        nomi: "Geografiya",
        boshlanish: "12:10",
        tugash: "12:55"
    }
],

   5: [
    {
        nomi: "Informatika",
        boshlanish: "08:00",
        tugash: "08:45"
    },
    {
        nomi: "Algebra",
        boshlanish: "08:50",
        tugash: "09:35"
    },
    {
        nomi: "Iqtisod",
        boshlanish: "09:40",
        tugash: "10:25"
    },
    {
        nomi: "Geometrya",
        boshlanish: "10:30",
        tugash: "11:15"
    },
    {
        nomi: "Kimyo",
        boshlanish: "11:20",
        tugash: "12:05"
    },
    {
        nomi: "Adabyot",
        boshlanish: "12:10",
        tugash: "12:55"
    }
],

   6: [
    {
        nomi: "Ona tili",
        boshlanish: "08:00",
        tugash: "08:45"
    },
    {
        nomi: "Ingliz tili",
        boshlanish: "08:50",
        tugash: "09:35"
    },
    {
        nomi: "Adabiyot",
        boshlanish: "09:40",
        tugash: "10:25"
    },
    {
        nomi: "O'zbekiston tarixi",
        boshlanish: "10:30",
        tugash: "11:15"
    },
    {
        nomi: "Biologiya",
        boshlanish: "11:20",
        tugash: "12:05"
    }
]
}
function App() {
    let date = new Date();
    let kun = date.getDay();

    let bugungiDarslar = data[kun];

    let hozir = new Date();

    let hozirgiDars = bugungiDarslar?.find(({ boshlanish, tugash }) => {
        let [bSoat, bDaqiqa] = boshlanish.split(":");
        let [tSoat, tDaqiqa] = tugash.split(":");

        let boshlanishVaqti = bSoat * 60 + +bDaqiqa;
        let tugashVaqti = tSoat * 60 + +tDaqiqa;

        let hozirgiVaqt = hozir.getHours() * 60 + hozir.getMinutes();

        return hozirgiVaqt >= boshlanishVaqti &&
               hozirgiVaqt < tugashVaqti;
    });

    return (
        <div className="container_">

            <Nav tugash={hozirgiDars?.tugash} />

            <div className="wrapr">
            {
                bugungiDarslar?.map(({ nomi, boshlanish, tugash }, index) => {
                        return (
                            <Card
                                key={index}
                                nomi={nomi}
                                boshlanish={boshlanish}
                                tugash={tugash}
                            />
                        );
                })
            }
                </div>

        </div>
    );
}

export default App;