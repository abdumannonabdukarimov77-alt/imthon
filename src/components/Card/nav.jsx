import { useEffect, useState } from "react";

function Nav({ tugash }) {
    let [qoldi, setQoldi] = useState("");

    useEffect(() => {
        function hisobla() {

            if (!tugash) {
                setQoldi("Hozir dars yo'q");
                return;
            }

            let hozir = new Date();

            let [soat, daqiqa] = tugash.split(":");

            let tugashVaqti = new Date();
            tugashVaqti.setHours(soat, daqiqa, 0, 0);

            let farq = tugashVaqti - hozir;

            if (farq > 0) {
                let minut = Math.floor(farq / 60000);
                setQoldi(`${minut} daqiqa qoldi`);
            } else {
                setQoldi("Dars tugagan");
            }
        }

        hisobla();

        let timer = setInterval(hisobla, 1000);

        return () => clearInterval(timer);
    }, [tugash]);

    return (
        <div className="d-flex">
            <h3>9-D</h3>
            <h3>{qoldi}</h3>
        </div>
    );
}

export default Nav;