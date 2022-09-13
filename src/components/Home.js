import React from "react";

export const Home = () => {
  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">Главная</h1>
        </div>
        <p className="home-text">
          Добро пожаловать! Это простое приложение на React с использованием API
          и возможностью добавления фильмов в список "Хочу посмотреть" и
          "Просмотренные", а также возможность регистрации и авторизации
        </p>
      </div>
    </div>
  );
};
