// DATABASE
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAg-fVSZIXm0Rbxpw8DF3_Zz9zoXuipuCA",
  authDomain: "taboo-web.firebaseapp.com",
  projectId: "taboo-web",
  storageBucket: "taboo-web.appspot.com",
  messagingSenderId: "752739071752",
  appId: "1:752739071752:web:1cd9decaacbd6eca86debd",
  measurementId: "G-N6DLNHV8M0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import {getDatabase, set, get, ref, child, update, remove} from "https://www.gstatic.com/firebasejs/10.3.1/firebase-database.js";

const db = getDatabase();

const containerMid = document.querySelector('.container-mid');
const lobbyMid = document.querySelector('.lobby-mid');
const startContainer = document.querySelector('.start-container');
const gameContainer = document.querySelector('.game-container');
const lobbiesContainer = document.querySelector('.lobbies-container');

const lobbiesArea = document.querySelector('.lobbies-area');
const turnBackLobbiesBtn = document.querySelector('.turn-back-lobbies-btn');

const headerTitle = document.querySelector('.lobby-name');

const inviteBtn = document.querySelector('.invite-btn');
const inviteModal = document.querySelector('.invite-alert-box');

const startGameBtn = document.querySelector('.start-btn');

const scoreAreas = document.querySelectorAll('.score');
const timeDiv = document.querySelector('.time')

const cardHeader = document.querySelector('.card-header');
const cardWordsArea = document.querySelector('.card-words');

const redBoxArea = document.querySelector('.red-players-area');
const blueBoxArea = document.querySelector('.blue-players-area');

const usernameInput = document.querySelector('.username-input');
const passwordInput = document.querySelector('.password-input');
const joinLobbyBtn = document.querySelector('.join-lobby-btn');

const joinTeamBtns = document.querySelectorAll('.join-team-btn');

const correctBtn = document.querySelector('.correct-btn');
const skipBtn = document.querySelector('.skip-btn');
const faulBtn = document.querySelector('.faul-btn');

class Words {
    // make words capitalized
    words = [
        {
            word: 'Tavla',
            tabuuWords: ["Zar", "Oyun", "Yenmek", "Mars", "Kapı"],
        },
        {
            word: 'Google',
            tabuuWords: ['Arama Motoru', 'Bilgisayar', 'İnternet', 'Site', 'Sayfa'],
        },
        {
            word: 'Bill Gates',
            tabuuWords: ['Zengin', 'Microsoft', 'Para', 'PC', 'Windows'],
        },
        {
            word: 'Okey',
            tabuuWords: ['Zar', 'Istaka', 'Taş', '4 Kişi', 'Oyun'],
        },
        {
            word: 'Para',
            tabuuWords: ['Kağıt', 'Dolar', 'Satın Almak', 'Ülke', 'Kazanmak'],
        },
        {
            word: 'Çopar',
            tabuuWords: ['İnce', 'Kaçmak', 'Ten Rengi', 'Parizyen', 'Ayak'],
        },
        {
            word: 'Kalem',
            tabuuWords: ['Kurşun', 'Tükenmez', 'Dolma', 'Kağıt', 'Çizmek'],
        },
        {
            word: 'Aşk',
            tabuuWords: ['Kalp', 'Erkek / Kadın', 'Tutku', 'Kırmızı', 'Seks'],
        },
        {
            word: 'Mouse',
            tabuuWords: ['Fare', 'Bilgisayar', 'Klavye', 'Tuş', 'Click'],
        },
        {
            word: 'Takvim',
            tabuuWords: ['Yıl', 'Ay', 'Hafta', 'Gün', 'Sayı'],
        },
        {
            word: 'Telefon',
            tabuuWords: ['Alo', 'Cep', 'Tuş', 'Ses', 'Numara'],
        },
        {
            word: 'Mücevher',
            tabuuWords: ['Kadın', 'Takı', 'Altın', 'Bilezik', 'Kolye'],
        },
        {
            word: 'Oje',
            tabuuWords: ['Tırnak', 'Renk', 'Sürmek', 'Aseton', 'Manikür'],
        },
        {
            word: 'Şimşek',
            tabuuWords: ['Gökyüzü', 'Yağmur', 'Işık', 'McQueen', 'Korku'],
        },
        {
            word: 'Steteskop',
            tabuuWords: ['Ses', 'Kalp', 'Doktor', 'Boyun', 'Dinlemek'],
        },
        {
            word: 'Hastalık',
            tabuuWords: ['Hasta', 'Corona', 'Doktor', 'Hemşire', 'İlaç'],
        },
        {
            word: 'Kafatası',
            tabuuWords: ['Beyin', 'Saç', 'Kemik', 'Arkeoloji', 'Kazı'],
        },
        {
            word: 'Gaga',
            tabuuWords: ['kuş', 'yemek', 'yavru', 'solucan', 'ağaçkakan'],
        },
        {
            word: 'ahize',
            tabuuWords: ['telefon', 'ses', 'alo', 'tuş', 'kabin'],
        },
        {
            word: 'çerçeve',
            tabuuWords: ['cam', 'resim', 'pimapen', 'ahşap', 'gözlük'],
        },
        {
            word: 'reçete',
            tabuuWords: ['doktor', 'ilaç', 'sağlık ocağı', 'hastane', 'eczane'],
        },
        {
            word: 'akrep',
            tabuuWords: ['burç', 'saat', 'yelkovan', 'zaman', 'sokmak'],
        },
        {
            word: 'Futbol',
            tabuuWords: ['Top', 'İddia', 'kale', 'stadyum', 'maç'],
        },
        {
            word: 'banka',
            tabuuWords: ['müşteri', 'para', 'hesap', 'çek', 'kredi kartı'],
        },
        {
            word: 'ev',
            tabuuWords: ['od', 'salon', 'kiralık', 'yaşamak', 'yuva'],
        },
        {
            word: 'ofis',
            tabuuWords: ['çalışmak', 'para', 'fotokopi', 'rezidans', 'beyaz yaka'],
        },
        {
            word: 'otel',
            tabuuWords: ['uyumak', 'tatil', 'hizmet', 'palas', 'masaj'],
        },
        {
            word: 'dost',
            tabuuWords: ['güven', 'arkadaş', 'dürüst', 'namuslu', 'yakın'],
        },
        {
            word: 'masa',
            tabuuWords: ['çalışma', 'çekmece', 'bilgisayar', 'yemek', 'kitap'],
        },
        {
            word: 'borsa',
            tabuuWords: ['iniş', 'çıkış', 'hisse', 'kripto', 'wall street'],
        },
        {
            word: 'kazak',
            tabuuWords: ['yün', 'iplik', 'sıcak', 'örme', 'yasak'],
        },
        {
            word: 'bisiklet',
            tabuuWords: ['tekerlek', 'fren', 'çocuk', 'pedal', 'sürmek'],
        },
    ];

    makeCapitalized = (x) => {
        let words = x.split(' ');
        let newX = "";

        words.map((word) => {
            let letters = word.split('');
            let newWord = "";

            letters.map((letter, index) => {
                if(index != 0) {
                    letter = letter.toLowerCase();
                } else {
                    letter = letter.toUpperCase();
                }

                newWord += letter;
            });

            if(words.length > 1) {
                newX += `${newWord} `;
            } else {
                newX = newWord;
            }
        });

        return newX;
    }
}

const words = new Words();

// MAKE WORDS CAPITALIZED 'Abcde'
words.words.map((word) => {
    word.word = words.makeCapitalized(word.word);

    word.tabuuWords.map((tabuuWord, index) => {
        word.tabuuWords[index] = words.makeCapitalized(tabuuWord);
    });
});

class Lobby {
    title = 'Erdem';
    password = "";
    admin = "admin";

    players = [];

    teams = [
        {
            players: [],
            score: 0,
        },
        {
            players: [],
            score: 0,
        },
    ];

    currentWordIndex = null;

    currentPlayingTeam = 0;
    currentPlayingIndex = 0;

    gameTime = 120;
    currentTime = 120;

    isGameOn = false;

    usedIndexes = [];
}

const lobby = new Lobby();

class Game {
    username = null;
    team = null;
    enemyTeam = 0;


    initGameContainer = () => {
        gameContainer.style.display = "flex";
        startContainer.style.display = "none";
    }

    joinLobby = () => {
        let usernameValue = usernameInput.value;
        let passwordValue = passwordInput.value;
        let canUseUsername = true;

        if(usernameValue == "") {
            inviteModal.textContent = `Lutfen isminizi giriniz`;
            inviteModal.style.transform = "translateY(0)";

            canUseUsername = false;

            setTimeout(() => {
                inviteModal.style.transform = "translateY(-128px)";
            }, 3000);
        } else if (passwordValue != lobby.password) {
            inviteModal.textContent = `Sifre hatali!`;
            inviteModal.style.transform = "translateY(0)";

            setTimeout(() => {
                inviteModal.style.transform = "translateY(-128px)";
            }, 3000);
        }


        if(lobby.players.indexOf(usernameValue) != -1) {
            canUseUsername = false;

            inviteModal.textContent = `Lutfen baska bir isim giriniz!`;
            inviteModal.style.transform = "translateY(0)";

            setTimeout(() => {
                inviteModal.style.transform = "translateY(-128px)";
            }, 3000);
        }

        if(canUseUsername && passwordValue == lobby.password) {
            this.username = usernameValue;
            lobby.players.push(usernameValue);

            this.initGameContainer();

            if(this.username == lobby.admin) {
                startGameBtn.style.display = "flex";
            } else {
                startGameBtn.style.display = "none";
            }

            this.updateDatabase();
        }
        
    }

    updateBoxes = () => {
        redBoxArea.innerHTML = ``;
        blueBoxArea.innerHTML = ``;

        let redCount = 5 - lobby.teams[0].players.length;
        let blueCount = 5 - lobby.teams[1].players.length;

        lobby.teams.map((team, index) => {
            team.players.map((player) => {
                let div = document.createElement('div');
                div.className = "player-div";

                if(index == 0) {
                    div.classList.add('red-player-div');
                } else {
                    div.classList.add('blue-player-div');
                }

                div.innerHTML = `<div class='player-name'>${player} ${player == this.username ? "<span class = 'you-text'>(Siz)</span>" : ""} ${player == lobby.admin ? '<i class="fas fa-crown"></i>' : ""}</div>`;


                if(index == 0) {
                    redBoxArea.appendChild(div);
                } else {
                    blueBoxArea.appendChild(div);
                }
            });
        });

        for(let x = 0; x < redCount; x++) {
            let div = document.createElement('div');
            div.className = "player-div empty-player-div";

            div.innerHTML = `
                <div class="empty-title">BOŞ SLOT</div>
                <div class="empty-desc">bu takıma katılabilirsin</div>
            `;

            redBoxArea.appendChild(div);
        }

        for(let x = 0; x < blueCount; x++) {
            let div = document.createElement('div');
            div.className = "player-div empty-player-div";

            div.innerHTML = `
                <div class="empty-title">BOŞ SLOT</div>
                <div class="empty-desc">bu takıma katılabilirsin</div>
            `;

            blueBoxArea.appendChild(div);
        }
    }

    joinTeam = (e) => {
        if(!lobby.isGameOn) {
            let joiningTeam = e.currentTarget.dataset.team; 

            if(joiningTeam == 0) {
                this.enemyTeam = 1;
            } else {
                this.enemyTeam = 0;
            }

            if(this.team != joiningTeam && lobby.teams[joiningTeam].players.length < 5) {
                this.team = joiningTeam;
                lobby.teams[joiningTeam].players.push(this.username);

                lobby.teams[this.enemyTeam].players.map((player, index) => {
                    if(player == this.username) {
                        lobby.teams[this.enemyTeam].players.splice(index, 1);
                    }
                });

                joinTeamBtns[this.enemyTeam].classList.remove('disabled-btn');
                joinTeamBtns[joiningTeam].classList.add('disabled-btn');
            } else {
                joinLobbyBtn[joiningTeam].classList.add('disabled-btn');
            }

            this.updateDatabase();
        }
    }

    updateDatabase = () => {
        let configurations = {
            title: lobby.title,
            admin: lobby.admin,
            password: lobby.password,
            teams: lobby.teams,
            players: lobby.players,
            currentPlayingTeam: lobby.currentPlayingTeam,
            currentPlayingIndex: lobby.currentPlayingIndex,
            isGameOn: lobby.isGameOn,
            currentTime: lobby.currentTime,
            gameTime: lobby.gameTime,
        }

        if(lobby.usedIndexes) {
            configurations.usedIndexes = lobby.usedIndexes;
            configurations.currentWordIndex = lobby.currentWordIndex;
        }

        set(ref(db, "Game/Lobby"), configurations).catch((err) => {
            console.log(err);
        });
    }

    updateCard = () => {
        if(lobby.isGameOn) {
            let word = words.words[lobby.currentWordIndex];

            cardHeader.textContent = word.word;
            cardWordsArea.innerHTML = ``;

            word.tabuuWords.map((word) => {
                let div = document.createElement('div');
                div.className = "card-word";

                div.textContent = word;

                cardWordsArea.appendChild(div);
            });
        }
    }

    updateFromDatabase = () => {
        get(ref(db, "Game/Lobby")).then((snapshot) => {
            let result = snapshot.val();
            lobby.currentPlayingIndex = result.currentPlayingIndex;
            lobby.currentPlayingTeam = result.currentPlayingTeam;
            lobby.players = result.players;
            lobby.teams = result.teams;
            lobby.currentTime = result.currentTime;
            lobby.usedIndexes = result.usedIndexes;
            lobby.currentWordIndex = result.currentWordIndex;


            if(!lobby.players) {
                lobby.players = [];
            }

            if(!lobby.teams[0].players) {
                lobby.teams[0].players = [];
            }

            if(!lobby.teams[1].players) {
                lobby.teams[1].players = [];
            }
        }).catch((err) => {
            console.log(err);
        });
    }

    removeUser = () => {
        lobby.players.map((player, index) => {
            if(player == this.username) {
                lobby.players.splice(index, 1);
            }
        });

        lobby.teams.map((team) => {
            team.players.map((player, index) => {
                if(player == this.username) {
                    team.players.splice(index, 1);
                }
            });
        });

        this.updateDatabase();
    }

    nextWord = () => {
        let randomNumber;

        do{
            randomNumber = Math.floor(Math.random() * words.words.length);
        } while(lobby.usedIndexes.indexOf(randomNumber) != -1);

        lobby.currentWordIndex = randomNumber;
        lobby.usedIndexes.push(randomNumber);

        let word = words.words[randomNumber];

        cardHeader.textContent = word.word;

        cardWordsArea.innerHTML = ``;

        word.tabuuWords.map((word) => {
            let div = document.createElement('div');
            div.className = "card-word";

            div.textContent = word;

            cardWordsArea.appendChild(div);
        });

        this.updateDatabase();
    }
}

const game = new Game();

joinLobbyBtn.addEventListener('click', game.joinLobby);

headerTitle.textContent = lobby.title + " Lobisi";

setInterval(game.updateBoxes, 1000);
setInterval(game.updateCard, 1000);
setInterval(game.updateFromDatabase, 1000);

joinTeamBtns.forEach((btn) => {
    btn.addEventListener('click', game.joinTeam);
});


// CHECK IS USER CLOSED WINDOW
window.addEventListener('beforeunload', game.removeUser);