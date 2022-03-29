import React from "react";
import "./about.css";

const About = () => {
    return (
        <div className="about">
            <h2>Kilka słów o nas:</h2>
            <ol>
                <li>Strona poświęcona jest wirtualnej wypożyczalni filmów "Filmex"</li>
                <li>
                    Użyte technologie:
                    <ul>
                        <li>React.js</li>
                        <li>Bootstrap 5</li>
                        <li>HTML5</li>
                        <li>CSS3</li>
                    </ul>
                </li>
                <li>Spełnione wymagania projektu:
                    <ul>
                        <li>Serwis został zrealizowany na bazie HTML5 </li>
                        <li>Formatowanie przy użyciu CSS</li>
                        <li>Serwis funkcjonuje poprawnie i wygląda dobrze we wszystkich popularnych przeglądarkach</li>
                        <li>Serwis jest dostępny dla niepełnosprawnych: został użyty semantyczny html, wszystkie obrazki posiadają tekst alternatywny, użyte zostały atrybuty aria</li>
                        <li>Został użyty <span>localstorage</span> do przechowywania zawartości koszyka</li>
                        <li>System posiada nawigacje oraz 5 podstron: strona domowa, o nas, regulamin, koszyk oraz strona błędu 404</li>
                        <li>Serwis posiada podstronę poświęconą opisowi serwisu</li>
                    </ul>
                </li>
            </ol>
        </div>
    )
}

export default About;