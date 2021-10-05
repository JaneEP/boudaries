import React from 'react';
import {Link} from 'react-router-dom';

class HelloError extends React.Component {
    render() {
        function UserException(message) {
            this.message = message;
            this.name = "Исключение, определённое пользователем";
        }

        function getMonthName(mo) {
            mo = mo - 1; // Нужно скорректировать номер месяца согласно индексам массива (1=Jan, 12=Dec)
            const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
                "Aug", "Sep", "Oct", "Nov", "Dec"];
            if (months[mo] !== undefined) {
                return months[mo];
            } else {
                throw new UserException("Неверно указан номер месяца");
            }
        }

        try {
            // statements to try
            const myMonth = 15; // 15 находится вне границ массива, что приведёт к исключению
            // let monthName =
            getMonthName(myMonth);
        } catch (e) {
            // let monthName = "неизвестен";
            console.log(e.message, e.name); // передаём исключение в обработчик ошибок
        }

        return (
            <div>
                <Link to='/'>
                    <button className="Button">Hello Error</button>
                </Link>
            </div>
        )
    }
}

export default HelloError;