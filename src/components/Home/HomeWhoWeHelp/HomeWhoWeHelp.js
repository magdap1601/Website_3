import React, {useEffect, useState} from "react";
import styleHelped from './HomeWhoWeHelp.module.scss';
import decoration from '../../../assets/Decoration.svg';

const HomeWhoWeHelp = () => {
    const [items, setItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedPage, setSelectedPage] = useState(`foundation`);
    // const apiUrl = `http://localhost:3000/${selectedPage}`;
    const apiUrl = `http://localhost:3000/${selectedPage}`;

    const handleClick = (event) => {
        setCurrentPage(Number(event.target.id)
        );
    };
    useEffect(() => {
        fetch(apiUrl)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Błąd sieci!')
                }
            })
            .then((data) => setItems(data))
            .catch((error) => console.log('Błąd', error))
    }, [selectedPage]);
    const handler = (name) => {
        setSelectedPage(name)
    };
    const itemsPerPage = 3;
    const indexOfLastTodo = currentPage * itemsPerPage; //6
    const indexOfFirstTodo = indexOfLastTodo - itemsPerPage; //3
    const currentTodos = items.slice(indexOfFirstTodo, indexOfLastTodo);
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(items.length / itemsPerPage); i++) {
        pageNumbers.push(i);
    }
    const renderPageNumbers = pageNumbers.map(number => {
        if (pageNumbers.length === 1) {
            return null;
        } else {
            return (
                <li
                    key={number}
                    id={number}
                    onClick={handleClick}
                >
                    {number}
                </li>
            );
        }
    });

    return (
        <section id='help' className={styleHelped.section}>
            <h1>Komu pomagamy ?</h1>
            <img src={decoration} className={styleHelped.decoration}/>
            <div className={styleHelped.boxes}>
                <div className={styleHelped.singleBox} onClick={() => handler('foundation')}>Fundacjom</div>
                <div className={styleHelped.singleBox} onClick={() => handler('organization')}>Organizacjom
                    pozarządowym
                </div>
                <div className={styleHelped.singleBox} onClick={() => handler('local')}>Lokalnym zbiórkom</div>
            </div>
            <p className={styleHelped.text}>W naszej bazie znajdziesz listę zweryfikowanych Fundacji,<br/> z którymi
                współpracujemy. Możesz sprawdzić czym się zajmują,<br/> komu pomagają i czego potrzebują.</p>
            <div>
                <ul className={styleHelped.elements}>
                    {currentTodos.map(({title, description, details}) => (
                        <div className={styleHelped.viewPage}>
                            <div>
                                <p className={styleHelped.titlePage}>{title}</p>
                                <span className={styleHelped.description}>{description}</span>
                            </div>
                            <span className={styleHelped.details}>{details}</span>
                        </div>
                    ))}
                </ul>
                <ul id="page-numbers" className={styleHelped.pageNumbers}>
                    {renderPageNumbers}
                </ul>
            </div>
        </section>
    )
};
export default HomeWhoWeHelp;
