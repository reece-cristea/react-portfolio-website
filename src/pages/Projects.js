import React from 'react'
import "./pages.css"

const Projects = () => {
    return (
        <div className="container text-dark text-center fade-in">
            <h1 className="display-3 my-5">Here are some of the projects I have worked on.</h1>
            <div className="card-list my-3">
                <div className="project-card">
                    <img className="project-card-img" src="https://rcportfolioimages.s3.us-west-1.amazonaws.com/rptcg_website.png" alt='RPTCG Project'></img>
                    <div>
                        <h1 className="text-light">
                            Reece's Pokémon TCG
                        </h1>
                        <p className="text-light">
                        This platform is dedicated to providing enthusiasts of trading card games with a seamless experience to buy, sell, and trade their favorite game 
                        content. Whether you're into collecting rare cards, building decks, or simply exploring the world of Pokémon TCG, you'll find everything you need 
                        right here. Some of the technologies I am using to build this project include React.js, HTML, CSS, JavaScript, AWS, Node.js, and MySQL. The project 
                        is still a work in progress, but I plan to implement features like a product catalog, user authentication, a shopping cart system, order management, 
                        searches and filters, and a repsonsive design.

                        </p>
                        <a href="https://github.com/reece-cristea/tcg_player_trades" target="_blank" className="project-card-button">Github</a>
                    </div>
                </div>
                <div className="project-card">
                    <img className="project-card-img" src="https://rcportfolioimages.s3.us-west-1.amazonaws.com/chess.PNG" alt='Chess Project'></img>
                    <div>
                        <h1 className="text-light">
                            Chess
                        </h1>
                        <p className="text-light">
                            I love to play Chess (even though I'm not very good at it) so this project was perfect for me to put my HTML and JavaScript skills to the test.
                            This is an offline, in browser version of Chess I have created, using Bitboards as the game's main board. If you are unfamiliar with Bitboards,
                            they are essentially a way to store the state of any game board using bits in a large number. This makes the game extremly efficient by holding
                            current available moves and the state of the board as numbers instead of as arrays of objects. I'm still working on this project and plan to have
                            it as its own website in the near future.
                        </p>
                        <a href="https://github.com/reece-cristea/chess" target="_blank" className="project-card-button">Github</a>
                    </div>
                </div>
                <div className="project-card">
                    <img className="project-card-img" src="https://rcportfolioimages.s3.us-west-1.amazonaws.com/napos.png" alt="Senior Capstone Project NAPOS Point of Sale"></img>
                    <div>
                        <h1 className="text-light">
                            NAPOS POS
                        </h1>
                        <p className="text-light">
                            This project was my senior capstone project for 2022 and 2023 and we used the technologies: Dart and the Flutter framework, MySql, Golang, Nodejs, and the Square SDK.
                            It is a Point of Sales Android application designed for use by small restaurants. The interface is simple, intuitive, and easy to learn and use. Most restaurant Point
                            of Sales systmes can be expensive and complicated or frustrating for waiters/servers to use, so the goal of this project was to create a solution to that. With our app,
                            you can take orders, make changes to any items on the menu, change the menu itself, view past orders, mark when orders are completed, and complete monetary transactions.
                            As of right now our servers that we used to run our app are not running, but feel free to check out the GitHub to see some screenshots and look at the code.
                        </p>
                        <a href="https://github.com/AlecRoss01/NAPOS-POS-System" target="_blank" className="project-card-button">Github</a>
                    </div>
                </div>
                <div className="project-card">
                    <img className="project-card-img" src="https://rcportfolioimages.s3.us-west-1.amazonaws.com/discord.png" alt="Discord Bot Project"></img>
                    <div>
                        <h1 className="text-light">
                            Discord Bot
                        </h1>
                        <p className="text-light">
                            Throughout my time in college, I had used discord a lot to keep in touch with my friends back home and collaborate with other students on projects and such.
                            During my first year, I decided to make a discord bot using Python as a fun project. At the time I had never used python so it was a great learning opportunity as well.
                            The bot is not set up on a remote server so I have to run it manually, but when it is up an running and a part of a server, it can be used to create tier lists of anything
                            you want for your discord. Movies, games, music, characters, whatever you want, and you can use it to see everyone else's tier lists as well.
                        </p>
                        <a href="https://github.com/reece-cristea/tier-list-creation-discord-bot" target="_blank" className="project-card-button">Github</a>
                    </div>
                </div>
                <div className="project-card">
                    <img className="project-card-img" src='https://rcportfolioimages.s3.us-west-1.amazonaws.com/bj.PNG' alt="Simple Black Jack Project"></img>
                    <div>
                        <h1 className="text-light">
                            Simple Black Jack
                        </h1>
                        <p className="text-light">
                            This is my implementation of simple black jack using Dart and the Flutter framework. The player and the dealer are each dealt one card and the player has the option of hitting or staying.
                            Once the player clicks stay the deal draws their cards until their cards sum to a total of more than 15. The winner is then calculated and the player can choose to play again.
                            The deck consists of one suit, 14 cards, but with a little more work on it, a 52 card deck could be implemented as well as some visual changes to give it a more finished look.
                            Follow the instructions in the README if you want to play it yourself.
                        </p>
                        <a href="https://github.com/reece-cristea/blackjack_pres" target="_blank" className="project-card-button">Github</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects